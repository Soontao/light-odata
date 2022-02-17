// @ts-nocheck
import { ClientCredentialsOAuthClient } from "../src/oauth";
import "../src/polyfill";


describe('OAuth2 Client Credential Test Suite', () => {

  if (process.env.TEST_OAUTH_TOKEN_URL === undefined) {
    it = it.skip
  }

  it('should support retrieve token', async () => {

    const client = new ClientCredentialsOAuthClient(
      process.env.TEST_OAUTH_TOKEN_URL,
      process.env.TEST_OAUTH_CLIENT_ID,
      process.env.TEST_OAUTH_CLIENT_SECRET
    )

    const fetchFunctionSpy = jest.spyOn(client, "fetchOAuthResponse")

    const token1 = await client.getToken()
    expect(fetchFunctionSpy).toBeCalled()
    expect(token1).not.toBeUndefined()
    expect(typeof token1).toBe("string")

    const token2 = await client.getToken()
    expect(fetchFunctionSpy).toBeCalledTimes(1)
    expect(token2).toBe(token1)


  });

  it('should support retrieve token by form', async () => {

    const client = new ClientCredentialsOAuthClient(
      process.env.TEST_OAUTH_TOKEN_URL,
      process.env.TEST_OAUTH_CLIENT_ID,
      process.env.TEST_OAUTH_CLIENT_SECRET,
      "form"
    )

    const fetchFunctionSpy = jest.spyOn(client, "fetchOAuthResponse")

    const token1 = await client.getToken()
    expect(fetchFunctionSpy).toBeCalled()
    expect(token1).not.toBeUndefined()
    expect(typeof token1).toBe("string")

    const token2 = await client.getToken()
    expect(fetchFunctionSpy).toBeCalledTimes(1)
    expect(token2).toBe(token1)


  });

  it('should reject error when authenticated failed', async () => {
    const client = new ClientCredentialsOAuthClient(
      process.env.TEST_OAUTH_TOKEN_URL,
      process.env.TEST_OAUTH_CLIENT_ID,
      "wrong"
    )

    await expect(() => client.getToken())
      .rejects
      .toThrow("unauthorized")

  });

});
