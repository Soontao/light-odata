import { Mutex } from '@newdash/newdash/functional/Mutex';
import { SearchParams } from './util';

const S_AUTHORIZATION = 'Authorization';
const S_BEARER = 'Bearer';
const S_CLIENT_CREDENTIALS = 'client_credentials';
const S_CT_URL_FORM = 'application/x-www-form-urlencoded';

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
 * const response = await client.fetch("http://protected.by.jwt/resource", {
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
  private readonly mut: Mutex;
  private token: string;
  private jobId: any;


  /**
   * @param {string} tokenUrl oauth token url
   * @param {string} clientId oauth client id
   * @param {string} clientSecret oauth client secret
   */
  constructor(tokenUrl: string, clientId: string, clientSecret: string) {

    this.tokenUrl = tokenUrl;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.token = undefined;
    this.jobId = undefined;

    this.mut = new Mutex();

  }

  /**
   * fetch token directly
   * @private
   * @returns {Promise<any>}
   */
  private async fetchOAuthResponse(): Promise<any> {
    const params = new SearchParams();
    params.append('client_id', this.clientId);
    params.append('client_secret', this.clientSecret);
    params.append('grant_type', S_CLIENT_CREDENTIALS);
    const response = await fetch(this.tokenUrl, {
      method: 'POST',
      body: params.toString(),
      headers: {
        'Content-Type': S_CT_URL_FORM
      }
    });
    if (response.status >= 400) {
      throw new Error(await response.text());
    }
    const body = await response.json();
    return body;
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
    return this.mut.use(async() => {

      if (this.token === undefined) {

        try {

          const { access_token: accessToken, expires_in: expiresIn } = await this.fetchOAuthResponse();

          this.token = accessToken;

          if (this.jobId === undefined) {

            // set a half-expire-time refresh token job
            this.jobId = setInterval(async() => {
              // PLEASE catch error here
              // because un-caught error in timer will make server down !
              try {
                // refresh token
                const { access_token: newToken } = await this.fetchOAuthResponse();
                if (newToken !== undefined) {
                  this.token = newToken;
                }
              } catch (error) {
                console.error(error);
              }
            }, (expiresIn * 0.5 * 1000)); // convert expire-in seconds to half milliseconds

          }

        } catch (error) {

          console.error(`oauth client retrieve token failed: %s`, error);

          // rethrow error
          throw error;

        }

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
      throw new TypeError('un-expected token is undefined');
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

  /**
   * destroy this client
   */
  public destroy() {
    if (this.jobId) {
      clearInterval(this.jobId);
    }
  }

}

export { ClientCredentialsOAuthClient };
