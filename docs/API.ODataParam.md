## ODataParam

use `ODataParam` to control `response size`, `element projection` and `order`

### pagination

`skip` first 30 records and `top` 10 records

```js
// equal to $format=json&$skip=30&$top=10
OData.newParam().skip(30).top(10)
```

### filter

filter data by properties value

```js
// $format=json&$filter=A eq 'test'
OData.newParam().filter(OData.newFilter().property("A").eq("test"))
// same
OData.newParam().filter().property("A").eq("test")).filterEnd()
// freedom filter
OData.newParam().filter("A eq 'test'")
```

### inline count

response with all records count, usefully.

also could set with `filter`, and response with filtered records count.

```js
// equal to $format=json&$inlinecount=allpages
OData.newParam().inlinecount(true).top(1).select("ObjectID")
```

### orderby

sort response data

```javascript
// result is $format=json&$orderby=CreationDateTime desc
OData.newParam().orderby("CreationDateTime")

// result is $format=json&$orderby=A desc,B asc
OData.newParam().orderby([{ field: "A" }, { field: "B", order: "asc" }])
```

### navigation property

expand association data

```javascript
// $expand=Customers
OData.newParam().expand("Customers")
// $expand=Customers,Employees
OData.newParam().expand(["Customers", "Employees"])
```

### properties select

remove unused properties from response

```js
// $format=json&$select=ObjectID,Name
OData.newParam().select("ObjectID").select("Name");
```

### full text search (basic query)

search all **supported** properties with text

**SAP systems feature**

**LOW PERFORMANCE**

```js
// fuzzy
// $format=json&$search=%any word%
OData.newParam().search("any word");
// not fuzzy
// $format=json&$search=any word
OData.newParam().search("any word", false);
```


### custom properties

> i know some odata system support custom query parameter for key authentication or other usage

```ts
OData.newParam().custom("access_token", "token_value"); // => $format=json&access_token=token_value
OData.newParam().custom("search", "v1"); // => $format=json&search=v1

```
