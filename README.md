# C4C OData Javascript Library

Simplify Code at JS Client for SAP C4C OData Service

## install

```bash
npm i -g c4codata # global
npm i -S c4codata # in your project
```

## usage

```bash
Usage:
  cli [OPTIONS] [ARGS]

Options:
  -m, --uri STRING       metadata uri
  -u, --user STRING      c4c username
  -p, --pass STRING      c4c password
  -o, --out [STRING]     out file (Default is c4codata.js)
  -h, --help             Display help and usage details
```

```bash
# use following command to generate declaration
odata-js-generator -m https://<your c4c host>/sap/c4c/odata/v1/c4codata/$metadata?sap-label=true -u <your c4c user> -p <your c4c password>
# then, you could use the c4codata.js to operation OData
```

## TO-DO

* Codelist generator
* OAuth Support
* test

## LICENSE

MIT