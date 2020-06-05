export interface People {
  UserName: string;
  FirstName: string;
  LastName: string;
  MiddleName: null;
  Gender: Gender;
  Age: null;
  Emails: string[];
  FavoriteFeature: FavoriteFeature;
  Features: string[];
  AddressInfo: AddressInfo[];
  HomeAddress: AddressInfo | null;
  "@odata.type"?: string;
  Budget?: number;
  BossOffice?: null;
  Cost?: number;
}

export interface AddressInfo {
  Address: null | string;
  City: City | null;
}

export interface City {
  Name: string;
  CountryRegion: CountryRegion;
  Region: string;
}

export enum CountryRegion {
  UnitedStates = "United States",
}

export enum FavoriteFeature {
  Feature1 = "Feature1",
}

export enum Gender {
  Female = "Female",
  Male = "Male",
}


export interface Customer {
  __metadata: Metadata;
  CustomerID: string;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  City: string;
  Region: null | string;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: null | string;
  Orders: CustomerDemographics;
  CustomerDemographics: CustomerDemographics;
}

export interface CustomerDemographics {
  __deferred: Deferred;
}

export interface Deferred {
  uri: string;
}

export interface Metadata {
  uri: string;
  type: Type;
}

export enum Type {
  NorthwindModelCustomer = "NorthwindModel.Customer",
}

export interface Alphabetical_list_of_product {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: string;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
  CategoryName: CategoryName;
}

export enum CategoryName {
  Beverages = "Beverages",
  Condiments = "Condiments",
  Confections = "Confections",
  DairyProducts = "Dairy Products",
  GrainsCereals = "Grains/Cereals",
  MeatPoultry = "Meat/Poultry",
  Produce = "Produce",
  Seafood = "Seafood",
}
