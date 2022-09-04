## ODataFilter

use the `ODataFilter` to filter data

Most `SAP` systems only support `AND` operator between different properties, and `OR` operator in a same field. (it depends on SAP Netweaver implementation)

So you don't need to specify `AND/OR` operator between properties, `@odata/client` will auto process it.

Though C4C only support AND operator in different properties, but for `gt/lt/ge/le`, you can use AND for filtering period data.

just ref following examples

### filter by single property value

```js
// Name eq 'test string'
OData.newFilter().property("Name").eq("test string")

// ID lt '1024'
OData.newFilter().property("ID").lt("'1024'")

// also support eq/ne/le/lt/gt/ge ...
```

### filter by multi properties

```js
// Name eq 'test string1' and Name2 eq 'test string2'
OData
  .newFilter()
  .property("Name").eq("'test string1'")
  .property("Name2").eq("test string2")
```

### filter by one property but multi values (OR)

```js
// Name eq 'test string1' and (Name2 eq 'test string1' or Name2 eq 'test string2')
OData.newFilter()
  .property("Name").eq("'test string1'")
  .property("Name2").in(["test string3", "test string2"])
```

### filter by date

Use `between` to filter date。

Please provide `Date` object in this api.

```js
// Name eq 'test string1' and (CreationDateTime gt datetime'2018-01-24T12:43:31.839Z' and CreationDateTime lt datetime'2018-05-24T12:43:31.839Z')
OData
  .newFilter()
  .property("Name").eq("'test string1'")
  .property("CreationDateTime").between(
    ODataDateTime.from(new Date("2018-01-24T12:43:31.839Z")),
    ODataDateTime.from(new Date("2018-05-24T12:43:31.839Z")),
    false
  )
  .build()

// > include boundary value

// (CreationDateTime ge datetime'2018-01-24T12:43:31.839Z' and CreationDateTime le datetime'2018-05-24T12:43:31.839Z')
OData
  .newFilter()
  .property("CreationDateTime").between(
    ODataDateTime.from(new Date("2018-01-24T12:43:31.839Z")),
    ODataDateTime.from(new Date("2018-05-24T12:43:31.839Z")),
  )
  .build()
```

### filter by function

```js
// CompagnyName contains 'testName' case sensitive
OData
  .newFilter()
  .property("indexof(CompanyName, 'testName')").gt(-1)

// CompagnyName has legth 8
OData
  .newFilter()
  .property("length(CompanyName)").eq(8)

// CompagnyName has substring 'test'
OData
  .newFilter()
  .property("substringof('test', CompanyName)").eq(true)
```
> see more possiblility at [4.5. Filter System Query Option ($filter) function](https://www.odata.org/documentation/odata-version-2-0/uri-conventions/) odata v2 documentation

