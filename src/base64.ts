/**
 * encode string to base64
 *
 * @param input
 */
const encode = function (input = ""): string {
  if (globalThis.Buffer !== undefined) {
    return globalThis.Buffer.from(input, "utf-8").toString("base64");
  }
  return btoa(input);
};

/**
 * decode base64 to string
 *
 * @param input base64 string
 */
const decode = function (input: string): string {
  if (globalThis.Buffer !== undefined) {
    return globalThis.Buffer.from(input, "base64").toString("utf-8");
  }
  return atob(input);
};


export { encode, decode };
