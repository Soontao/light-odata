#!/usr/bin/env node
import "isomorphic-fetch"
import { parse } from "cli";
import { cwd } from "process";
import { map } from "lodash";
import { GetAuthorizationPair } from "../util";
import { writeFileSync } from "fs";
import { join } from "path";
import { CliOption } from './type';
import {
  generateClassString,
  generateSeprateClassString,
  parseMetaCRUDFunctionByEntityName,
  generateFunctionsString,
  parseMetaClassFromOnlyClassDefault,
  parseSingleMetaClassFromOnlyType,
  generateSeprateODataFile,
  ODataMetadata,
  generateSeprateIndexFile,
  generateAllDefault,
  parseODataMetadataFromRemote
} from "../generator";

const mkdirp = require("mkdirp")

const options: CliOption = parse({
  uri: ['m', 'metadata uri', "string"],
  user: ['u', 'c4c username', "string"],
  pass: ['p', 'c4c password', "string"],
  out: ['o', 'out file', 'string', "c4codata.js"],
  debug: ['d', 'debug mode', 'boolean', false],
  separate: ['s', 'out with separate files in directory', "string"],
  odatajs: ['r', 'seperate generator without odata.js', 'boolean', false]
}, []);

const generateAndWriteSeprate = (meta: ODataMetadata, options: CliOption) => {
  const basePath = join(cwd(), options.separate)
  const odataInitPath = join(basePath, "odata.js")
  const indexPath = join(basePath, "index.js")
  const classes = parseMetaClassFromOnlyClassDefault(meta);
  if (!options.odatajs) {
    writeFileSync(odataInitPath, generateSeprateODataFile(options.uri, options.user, options.pass))
  }
  writeFileSync(indexPath, generateSeprateIndexFile(classes))
  map(classes, c => {
    const classFuncs = parseMetaCRUDFunctionByEntityName(meta, c.name)
    const classFuncsStr = generateFunctionsString(classFuncs)
    const classType = parseSingleMetaClassFromOnlyType(c.originEntity);
    const classTypeStr = generateClassString(classType)
    const classString = generateSeprateClassString(c, classFuncsStr, classTypeStr)
    writeFileSync(join(basePath, `${c.name}.js`), classString)
  })
}

const generateAndWriteSingle = (meta: ODataMetadata, options: CliOption) => {
  const outPath = join(cwd(), options.out)
  const singleFileString = generateAllDefault(meta, options);
  writeFileSync(outPath, singleFileString)
}

const d = (string) => {
  if (options.debug) {
    console.log(string)
  }
}

(async () => {
  if (options.uri) {
    try {

      d(`fetch metadata: ${options.uri}`)

      const meta = await parseODataMetadataFromRemote(
        options.uri,
        GetAuthorizationPair(options.user, options.pass),
        fetch,
      )

      if (options.separate) {
        // save type defination to different files
        mkdirp.sync(join(cwd(), options.separate))
        generateAndWriteSeprate(meta, options)

      } else {
        // save all type defination in single js type
        generateAndWriteSingle(meta, options)

      }

    } catch (error) {
      console.error(error.message)
      d(error)
    }
  }
})()

