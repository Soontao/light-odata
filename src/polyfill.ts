if (globalThis.fetch === undefined) {
  global.fetch = require("fetch-cookie")(require("node-fetch"));
}

