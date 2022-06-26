import { Mutex } from "@newdash/newdash/functional/Mutex";
import { encode } from "./base64";
import { AuthenticationError } from "./errors";
import { SearchParams } from "./util";

const S_AUTHORIZATION = "Authorization";
const S_BEARER = "Bearer";
const S_CLIENT_CREDENTIALS = "client_credentials";
const S_CT_URL_FORM = "application/x-www-form-urlencoded";

export type TokenRetrieveType = "header" | "form";

/**
 * Client Credential OAuth Client
 *
 * Will automatically process the token refresh logic
 *
 * refresh policy: half expire-in
 *
 * @example
 * ```js
 * // please remember share client instance for a same OAuth server
 * const client = new ClientCredentialsOAuthClient(
 *  "http://example/oauth/token",
 *  "client_id",
 *  "client_secret"
 * )
 * const response = await client.fetch("http://protected.by.token/resource", {
 *  method: "GET",
 * })
 * ```
 *
 *
 */
class ClientCredentialsOAuthClient {

  private readonly tokenUrl: string;

  private readonly clientId: string;

  private readonly clientSecret: string;

  private readonly scope: string;

  private readonly mut = new Mutex();

  private token: string;

  private expiresAt = 0;

  private tokenRetrieveType: TokenRetrieveType = "header";


  /**
   * a very simple oauth client credential client
   *
   * @param tokenUrl oauth token url
   * @param clientId oauth client id
   * @param clientSecret oauth client secret
   * @param retrieveType the clientId and clientSecret is put into header or form body
   * @param scope oauth scope
   */
  constructor(
    tokenUrl: string,
    clientId: string,
    clientSecret: string,
    retrieveType: TokenRetrieveType = "header",
    scope?: string,
  ) {

    this.tokenUrl = tokenUrl;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.tokenRetrieveType = retrieveType;
    this.scope = scope;
  }

  /**
   * fetch token directly
   * @private
   * @returns {Promise<any>}
   */
  private async fetchOAuthResponse(): Promise<any> {
    const params = new SearchParams();

    params.append("grant_type", S_CLIENT_CREDENTIALS);

    if (typeof this.scope === "string") { params.append("scope", this.scope); }

    let response = undefined;

    if (this.tokenRetrieveType === "form") {

      params.append("client_id", this.clientId);
      params.append("client_secret", this.clientSecret);

      response = await fetch(this.tokenUrl, {
        method: "POST",
        body: params.toString(),
        headers: { "Content-Type": S_CT_URL_FORM }
      });

    }
    else {

      // standard way described in rfc6749
      // https://datatracker.ietf.org/doc/html/rfc6749#section-4.4.2
      response = await fetch(this.tokenUrl, {
        method: "POST",
        body: params.toString(),
        headers: {
          [S_AUTHORIZATION]: "Basic " + encode(`${this.clientId}:${this.clientSecret}`),
          "Content-Type": S_CT_URL_FORM
        }
      });

    }


    if (response.status >= 400) {

      if (response.headers.get("Content-Type")?.includes?.("application/json")) {
        const responseBody = await response.json();
        if ("error" in responseBody) {
          throw new AuthenticationError(responseBody.error);
        }
        else {
          throw new AuthenticationError(JSON.stringify(responseBody));
        }
      }
      else {
        throw new Error(await response.text());
      }
    }

    return response.json();
  }

  /**
   * get header pair
   */
  public async getHeader() {
    const token = await this.getToken();
    return {
      [S_AUTHORIZATION]: `${S_BEARER} ${token}`
    };
  }

  /**
   * get current valid oauth token
   *
   * @returns {Promise<string>}
   */
  public async getToken(): Promise<string> {

    // lock avoid multi fetch token requests in same time
    return this.mut.use(async () => {

      try {

        const currentTime = new Date().getTime();

        // retrive new token
        if (currentTime >= this.expiresAt) {
          const { access_token: accessToken, expires_in: expiresIn } = await this.fetchOAuthResponse();
          this.token = accessToken;
          // half expire
          this.expiresAt = currentTime + ((expiresIn / 2) * 1000);
        }

      } catch (error) {

        console?.error?.(`oauth client retrieve token failed: ${error?.message ?? error}`,);

        // rethrow error
        throw error;

      }

      return this.token;

    });


  }

  /**
   * send requests with oauth token
   *
   */
  public async fetch(...args: Parameters<typeof fetch>) {
    // refresh token if required
    const token = await this.getToken();

    if (token === undefined) {
      throw new TypeError("un-expected token is undefined");
    }

    const url = args[0];
    let config = args[1];

    if (config === undefined) {
      config = {};
    }
    // append jwt token
    config.headers = {
      ...(config.headers || {}),
      [S_AUTHORIZATION]: `${S_BEARER} ${token}`
    };

    return fetch(url, config);
  }

}

export { ClientCredentialsOAuthClient };
