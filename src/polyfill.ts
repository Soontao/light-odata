// @ts-nocheck
/* eslint-disable @typescript-eslint/no-var-requires */
import fetchCookie from "fetch-cookie";
import * as nodeFetch from "node-fetch";
global.fetch = fetchCookie(nodeFetch);
