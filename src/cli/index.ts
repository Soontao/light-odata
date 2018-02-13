// test system: https://my500248.c4c.saphybriscloud.cn
import "isomorphic-fetch"
import { parse } from "cli";
import { cwd, exit } from "process";
import { error } from "console";
import { parseODataMetadata, parseMetaClassFromDefault, parseMetaCRUDFunctionFromDefault } from "../generator/odata_parser";
import { GetAuthorizationPair } from "../util";
import { generateClassString, generateCommonImportString, generateFunctionString } from "../generator";
import { writeFileSync } from "fs";
import { join } from "path";

const options: { uri: string, user?: string, pass?: string } = parse({
  uri: ['m', 'metadata uri', "string"],
  user: ['u', 'c4c username', "string"],
  pass: ['p', 'c4c password', "string"]
}, [])

if (options.uri && options.user && options.pass) {
  fetch(options.uri, {
    headers: {
      ...GetAuthorizationPair(options.user, options.pass)
    }
  }).then(res => res.text()).then(body => {
    parseODataMetadata(body, function (err, meta) {
      if (err) throw err
      let out = ""
      out += generateCommonImportString(options.uri, options.user, options.pass)
      out += parseMetaClassFromDefault(meta).map(c => generateClassString(c)).join("")
      out += parseMetaCRUDFunctionFromDefault(meta).map(f => generateFunctionString(f)).join("")
      writeFileSync(join(cwd(), "out.js"), out)
    })
  }).catch(err => {
    throw err
  })
} else {
  error("lost args !")
}
