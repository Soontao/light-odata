
export interface ODataMetadata {
  "edmx:Edmx": {
    $: {
      version: string,
      "xmlns:edmx": string
    }
    "edmx:DataServices": EDMXDataService[]
  }
}

export interface EDMXDataService {
  $: {
    "m:DataServiceVersion": string,
    "xmlns:m": string
  },
  "Schema": ODataSchema[]
}

export interface ODataSchema {
  $: {
    Namespace: string,
    xmlns: string,
    "xmlns:sap"?: string,
    "xmlns:c4c"?: string
  },
  EntityType: ODataEntityType[],
  Association: ODataAssociation[],
  EntityContainer: ODataEntityContainer[]
}

export interface ODataEntityType {
  $: {
    Name: string
  },
  Key?: EntityKey[],
  Property: ODataEntityProperty[],
  NavigationProperty?: ODataEntityNavigationProperty[]
}

export interface EntityKey {
  PropertyRef: PropertyRef[]
}

export interface PropertyRef {
  $: {
    Name: string
  }
}[]

export interface ODataEntityProperty {
  $: {
    Name: string,
    Type: string,
    /**
     * field null able
     */
    Nullable: string | boolean,
    /**
     * field max length
     */
    MaxLength: string | number,
    /**
     * decimal number
     */
    FixedLength: string | number,
    "sap:creatable"?: string | boolean,
    "sap:updatable"?: string | boolean,
    "sap:filterable"?: string | boolean,
    "sap:label"?: string
  }
}

export interface ODataEntityNavigationProperty {
  $: {
    /**
     * Name 
     */
    Name: string,
    Relationship: string,
    FromRole: string,
    /**
     * Type
     */
    ToRole: string
  }
}

export interface ODataAssociation {
  $: {
    Name: string
  },
  End: [
    {
      $: {
        Type: string,
        Multiplicity: string | number,
        Role: string
      }
    }
  ]
}

export interface ODataEntityContainer {
  $: {
    Name: string,
    "m:IsDefaultEntityContainer": string | boolean
  },
  EntitySet: ODataCollection[]
}

export interface ODataCollection {
  $: {
    Name: string,
    EntityType: string,
    "sap:creatable": string,
    "sap:updatable": string,
    "sap:deletable": string,
    "sap:label"?: string,
    "sap:semantics"?: string
  }
}