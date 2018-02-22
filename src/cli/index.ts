#!/usr/bin/env node
import "isomorphic-fetch"
import { parse } from "cli";
import { cwd, exit } from "process";
import { error } from "console";
import { GetAuthorizationPair } from "../util";
import { writeFileSync } from "fs";
import { join } from "path";
import { CliOption } from './type';
import {
  parseODataMetadata,
  generateClassString,
  generateCommonImportString,
  generateFunctionString,
  generateOperationObject,
  generateAllDefault
} from "../generator";

const options: CliOption = parse({
  uri: ['m', 'metadata uri', "string"],
  user: ['u', 'c4c username', "string"],
  pass: ['p', 'c4c password', "string"],
  out: ['o', 'out file', 'string', "c4codata.js"]
}, [])

if (options.uri && options.user && options.pass) {
  fetch(options.uri, { headers: { ...GetAuthorizationPair(options.user, options.pass) } })
    .then(res => res.text())
    .then(body => parseODataMetadata(body))
    .then((meta) => writeFileSync(join(cwd(), options.out), generateAllDefault(meta, options)))
    .catch(err => error)
} else {
  error("You must give out metadata url & credential for generate static file")
}
