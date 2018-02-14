// test system: https://my500248.c4c.saphybriscloud.cn
import "isomorphic-fetch"
import { parse } from "cli";
import { cwd, exit } from "process";
import { error } from "console";
import { GetAuthorizationPair } from "../util";
import { writeFileSync } from "fs";
import { join } from "path";
import {
  parseODataMetadata,
  parseMetaClassFromDefault,
  parseMetaCRUDFunctionFromDefault,
  generateClassString,
  generateCommonImportString,
  generateFunctionString
} from "../generator";

const options: { uri: string, user?: string, pass?: string, out: string } = parse({
  uri: ['m', 'metadata uri', "string"],
  user: ['u', 'c4c username', "string"],
  pass: ['p', 'c4c password', "string"],
  out: ['o', 'out file', 'string', "c4codata.js"]
}, [])

if (options.uri && options.user && options.pass) {
  fetch(options.uri, {
    headers: {
      ...GetAuthorizationPair(options.user, options.pass)
    }
  }).then(res => res.text()).then(body => {
    parseODataMetadata(body, function (err, meta) {
      if (err) error(err)
      let out = ""
      out += generateCommonImportString(options.uri, options.user, options.pass)
      out += parseMetaClassFromDefault(meta).map(c => generateClassString(c)).join("\n")
      out += parseMetaCRUDFunctionFromDefault(meta).map(f => generateFunctionString(f)).join("\n")
      writeFileSync(join(cwd(), options.out), out)
    })
  }).catch(err => error)
} else {
  error("lost args !")
}
