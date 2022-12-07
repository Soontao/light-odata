// @ts-nocheck
import { Headers } from "node-fetch";
import { ClientCredentialsOAuthClient } from "../src/oauth";

const fetch = global.fetch = jest.fn()

describe('OAuth2 Client Credential Test Suite', () => {

  const TEST_OAUTH_TOKEN_URL = 'https://a.b.c.d/oauth2/token'
  const TEST_OAUTH_CLIENT_ID = 'client_id'
  const TEST_OAUTH_CLIENT_SECRET = 'client_secret'

  beforeEach(() => {
    fetch.mockReset()
    fetch.mockResolvedValue({ status: 200, json: jest.fn().mockResolvedValue({ access_token: 'token1', expires_in: 120 }) })

  })

  it('should support retrieve token', async () => {

    const client = new ClientCredentialsOAuthClient(
      TEST_OAUTH_TOKEN_URL,
      TEST_OAUTH_CLIENT_ID,
      TEST_OAUTH_CLIENT_SECRET
    )

    const fetchFunctionSpy = jest.spyOn(client, "fetchOAuthResponse")

    const token1 = await client.getToken()
    expect(fetchFunctionSpy).toBeCalled()
    expect(token1).not.toBeUndefined()
    expect(typeof token1).toBe("string")

    expect(fetch.mock.lastCall).toMatchSnapshot()

    const token2 = await client.getToken()
    expect(fetchFunctionSpy).toBeCalledTimes(1)
    expect(token2).toBe(token1)

    await client.fetch("http://whatevery.acc.com/resource")
  });

  it('should support retrieve token by form', async () => {

    const client = new ClientCredentialsOAuthClient(
      TEST_OAUTH_TOKEN_URL,
      TEST_OAUTH_CLIENT_ID,
      TEST_OAUTH_CLIENT_SECRET,
      "form"
    )

    const fetchFunctionSpy = jest.spyOn(client, "fetchOAuthResponse")

    const token1 = await client.getToken()
    expect(fetchFunctionSpy).toBeCalled()
    expect(token1).not.toBeUndefined()
    expect(typeof token1).toBe("string")

    expect(fetch.mock.lastCall).toMatchSnapshot()

    const token2 = await client.getToken()
    expect(fetchFunctionSpy).toBeCalledTimes(1)
    expect(token2).toBe(token1)

  });

  it('should reject error when authenticated failed', async () => {
    const client = new ClientCredentialsOAuthClient(
      TEST_OAUTH_TOKEN_URL,
      TEST_OAUTH_CLIENT_ID,
      "wrong"
    )

    fetch.mockResolvedValueOnce({
      status: 401,
      headers: new Headers({ "Content-Type": 'application/json' }),
      json: jest.fn().mockResolvedValue({ error: "unauthorized" })
    })

    await expect(() => client.getToken())
      .rejects
      .toThrow("unauthorized")
    expect(fetch.mock.lastCall).toMatchSnapshot()

  });

});
