# Notable Changes for `@odata/client@3`

## Breaking Changes

- `EntitySet`.`batch` method was removed, please use `ODataClient` to create `BatchRequest` directly
- `EntitySet`.`actionImport` and `EntitySet`.`functionImport` were removed, please use `ODataClient` directly
- `serviceEndpoint` parameter in constructor `OData.New`, make its clear

## New Features

- `ODataParam`.`apply`, enable the `$apply` system query option

## Deprecated

- `metadataUri` in constructor, deprecated
