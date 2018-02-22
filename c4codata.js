
import { OData, ODataQueryParam, ODataFilter, C4CODataResult, C4CEntity, DeferredNavigationProperty, C4CODataSingleResult } from "./src";

const odata = new OData("https://my500248.c4c.saphybriscloud.cn/sap/c4c/odata/v1/c4codata/$metadata?sap-label=true", { username: "theosun", password: "Welcome2" });

/**
 * Account
 * 
 * @class Account
 */
export class Account extends C4CEntity {

  /**
   * 
   * @type {Account} 
   */
  _type = Account

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ABC Classification
   * @type {Edm.String} 
   */
  ABCClassificationCode

  /**
   * ABCClassificationCodeText
   * @type {Edm.String} 
   */
  ABCClassificationCodeText

  /**
   * Formatted Name
   * @type {Edm.String} 
   */
  AccountFormattedName

  /**
   * Account ID
   * @type {Edm.String} 
   */
  AccountID

  /**
   * Name
   * @type {Edm.String} 
   */
  AccountName

  /**
   * Additional Name
   * @type {Edm.String} 
   */
  AccountName2

  /**
   * Additional Name 2
   * @type {Edm.String} 
   */
  AccountName3

  /**
   * Additional Name 3
   * @type {Edm.String} 
   */
  AccountName4

  /**
   * Address Line 2
   * @type {Edm.String} 
   */
  AdditionalStreetPrefixName

  /**
   * Address Line 5
   * @type {Edm.String} 
   */
  AdditionalStreetSuffixName

  /**
   * Building
   * @type {Edm.String} 
   */
  BuildingID

  /**
   * c/o
   * @type {Edm.String} 
   */
  CareOfName

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Changed By Name
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * Changed On
   * @type {Edm.DateTimeOffset} 
   */
  ChangedOn

  /**
   * City
   * @type {Edm.String} 
   */
  CityName

  /**
   * Contact Permission
   * @type {Edm.String} 
   */
  ContactPermissionCode

  /**
   * ContactPermissionCodeText
   * @type {Edm.String} 
   */
  ContactPermissionCodeText

  /**
   * Language
   * @type {Edm.String} 
   */
  CorrespondenceLanguageCode

  /**
   * CorrespondenceLanguageCodeText
   * @type {Edm.String} 
   */
  CorrespondenceLanguageCodeText

  /**
   * Country
   * @type {Edm.String} 
   */
  CountryCode

  /**
   * CountryCodeText
   * @type {Edm.String} 
   */
  CountryCodeText

  /**
   * County
   * @type {Edm.String} 
   */
  CountyName

  /**
   * Created By Name
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTimeOffset} 
   */
  CreatedOn

  /**
   * D-U-N-S
   * @type {Edm.String} 
   */
  DUNS

  /**
   * District
   * @type {Edm.String} 
   */
  DistrictName

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  Email

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * House Number
   * @type {Edm.String} 
   */
  HouseID

  /**
   * Industry
   * @type {Edm.String} 
   */
  IndustryCode

  /**
   * IndustryCodeText
   * @type {Edm.String} 
   */
  IndustryCodeText

  /**
   * Legal Form
   * @type {Edm.String} 
   */
  LegalFormCode

  /**
   * LegalFormCodeText
   * @type {Edm.String} 
   */
  LegalFormCodeText

  /**
   * Marketing Lead
   * @type {Edm.Boolean} 
   */
  MarketingLeadIndicator

  /**
   * Mobile
   * @type {Edm.String} 
   */
  Mobile

  /**
   * Nielsen ID
   * @type {Edm.String} 
   */
  NielsenID

  /**
   * NielsenIDText
   * @type {Edm.String} 
   */
  NielsenIDText

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Owner Name
   * @type {Edm.String} 
   */
  OwnerFormattedName

  /**
   * Owner ID
   * @type {Edm.String} 
   */
  OwnerID

  /**
   * Owner
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * P.O. Box City
   * @type {Edm.String} 
   */
  POBoxDeviatingCityName

  /**
   * P.O. Box Country
   * @type {Edm.String} 
   */
  POBoxDeviatingCountryCode

  /**
   * POBoxDeviatingCountryCodeText
   * @type {Edm.String} 
   */
  POBoxDeviatingCountryCodeText

  /**
   * P.O. Box State
   * @type {Edm.String} 
   */
  POBoxDeviatingRegionCode

  /**
   * POBoxDeviatingRegionCodeText
   * @type {Edm.String} 
   */
  POBoxDeviatingRegionCodeText

  /**
   * P.O. Box
   * @type {Edm.String} 
   */
  POBoxID

  /**
   * P.O. Box Postal Code
   * @type {Edm.String} 
   */
  POBoxPostalCode

  /**
   * POBoxPostalCodeText
   * @type {Edm.String} 
   */
  POBoxPostalCodeText

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Best Reached By
   * @type {Edm.String} 
   */
  PreferredCommunicationMediumTypeCode

  /**
   * PreferredCommunicationMediumTypeCodeText
   * @type {Edm.String} 
   */
  PreferredCommunicationMediumTypeCodeText

  /**
   * Main Contact ID
   * @type {Edm.String} 
   */
  PrimaryContactID

  /**
   * Main Contact Name
   * @type {Edm.String} 
   */
  PrimaryContactName

  /**
   * Recommended Visit Frequency
   * @type {Edm.String} 
   */
  RecommendedVisitingFrequency

  /**
   * State
   * @type {Edm.String} 
   */
  RegionCode

  /**
   * RegionCodeText
   * @type {Edm.String} 
   */
  RegionCodeText

  /**
   * Role
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Street
   * @type {Edm.String} 
   */
  StreetName

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  StreetPostalCode

  /**
   * StreetPostalCodeText
   * @type {Edm.String} 
   */
  StreetPostalCodeText

  /**
   * Address Line 1
   * @type {Edm.String} 
   */
  StreetPrefixName

  /**
   * Address Line 4
   * @type {Edm.String} 
   */
  StreetSuffixName

  /**
   * Tax Jurisdiction Code
   * @type {Edm.String} 
   */
  TaxJurisdictionCode

  /**
   * TaxJurisdictionCodeText
   * @type {Edm.String} 
   */
  TaxJurisdictionCodeText

  /**
   * Time Zone
   * @type {Edm.String} 
   */
  TimeZoneCode

  /**
   * TimeZoneCodeText
   * @type {Edm.String} 
   */
  TimeZoneCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * Web Site
   * @type {Edm.String} 
   */
  Web

  /**
   * 
   * @type {DeferredNavigationProperty|AccountAddress|AccountAddress[]} 
   */
  AccountAddress

  /**
   * 
   * @type {DeferredNavigationProperty|AccountAttachment|AccountAttachment[]} 
   */
  AccountAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|AccountContactRelationship|AccountContactRelationship[]} 
   */
  AccountContactRelationship

  /**
   * 
   * @type {DeferredNavigationProperty|AccountNotes|AccountNotes[]} 
   */
  AccountNotes

  /**
   * 
   * @type {DeferredNavigationProperty|AccountRole|AccountRole[]} 
   */
  AccountRole

  /**
   * 
   * @type {DeferredNavigationProperty|AccountSalesData|AccountSalesData[]} 
   */
  AccountSalesData

  /**
   * 
   * @type {DeferredNavigationProperty|AccountTeam|AccountTeam[]} 
   */
  AccountTeam

  /**
   * 
   * @type {DeferredNavigationProperty|ExternalIDMapping|ExternalIDMapping[]} 
   */
  ExternalIDMapping

}

/**
 * AccountAddress
 * 
 * @class AccountAddress
 */
export class AccountAddress extends C4CEntity {

  /**
   * 
   * @type {AccountAddress} 
   */
  _type = AccountAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address Line 2
   * @type {Edm.String} 
   */
  AdditionalStreetPrefixName

  /**
   * Address Line 5
   * @type {Edm.String} 
   */
  AdditionalStreetSuffixName

  /**
   * c/o
   * @type {Edm.String} 
   */
  CareOfName

  /**
   * City
   * @type {Edm.String} 
   */
  City

  /**
   * Country
   * @type {Edm.String} 
   */
  CountryCode

  /**
   * CountryCodeText
   * @type {Edm.String} 
   */
  CountryCodeText

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * Address
   * @type {Edm.String} 
   */
  FormattedAddress

  /**
   * Latitude
   * @type {Edm.Decimal} 
   */
  Latitude

  /**
   * Longitude
   * @type {Edm.Decimal} 
   */
  Longitude

  /**
   * Mobile
   * @type {Edm.String} 
   */
  Mobile

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * P.O. Box
   * @type {Edm.String} 
   */
  POBox

  /**
   * POBoxAddress
   * @type {Edm.Boolean} 
   */
  POBoxAddress

  /**
   * P.O. Box Postal Code
   * @type {Edm.String} 
   */
  POBoxPostalCode

  /**
   * POBoxPostalCodeText
   * @type {Edm.String} 
   */
  POBoxPostalCodeText

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  PostalCode

  /**
   * PostalCodeText
   * @type {Edm.String} 
   */
  PostalCodeText

  /**
   * State
   * @type {Edm.String} 
   */
  State

  /**
   * StateText
   * @type {Edm.String} 
   */
  StateText

  /**
   * Street
   * @type {Edm.String} 
   */
  Street

  /**
   * Address Line 1
   * @type {Edm.String} 
   */
  StreetPrefixName

  /**
   * Address Line 4
   * @type {Edm.String} 
   */
  StreetSuffixName

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Account|Account[]} 
   */
  Account

}

/**
 * AccountAttachment
 * 
 * @class AccountAttachment
 */
export class AccountAttachment extends C4CEntity {

  /**
   * 
   * @type {AccountAttachment} 
   */
  _type = AccountAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * AccountContactCommunicationData
 * 
 * @class AccountContactCommunicationData
 */
export class AccountContactCommunicationData extends C4CEntity {

  /**
   * 
   * @type {AccountContactCommunicationData} 
   */
  _type = AccountContactCommunicationData

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * Job Title
   * @type {Edm.String} 
   */
  JobTitle

  /**
   * Mobile
   * @type {Edm.String} 
   */
  Mobile

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * 
   * @type {DeferredNavigationProperty|AccountContactRelationship|AccountContactRelationship[]} 
   */
  AccountContactRelationship

}

/**
 * AccountContactRelationship
 * 
 * @class AccountContactRelationship
 */
export class AccountContactRelationship extends C4CEntity {

  /**
   * 
   * @type {AccountContactRelationship} 
   */
  _type = AccountContactRelationship

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * AccountUUID
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * CategoryCode
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * ContactUUID
   * @type {Edm.Guid} 
   */
  ContactUUID

  /**
   * Department
   * @type {Edm.String} 
   */
  DepartmentCode

  /**
   * DepartmentCodeText
   * @type {Edm.String} 
   */
  DepartmentCodeText

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * Function
   * @type {Edm.String} 
   */
  FunctionCode

  /**
   * FunctionCodeText
   * @type {Edm.String} 
   */
  FunctionCodeText

  /**
   * Job Title
   * @type {Edm.String} 
   */
  JobTitle

  /**
   * Main
   * @type {Edm.Boolean} 
   */
  Main

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * ReverseDefaultIndicator
   * @type {Edm.Boolean} 
   */
  ReverseDefaultIndicator

  /**
   * VIPReasonCode
   * @type {Edm.String} 
   */
  VIPReasonCode

  /**
   * VIPReasonCodeText
   * @type {Edm.String} 
   */
  VIPReasonCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|AccountContactCommunicationData|AccountContactCommunicationData[]} 
   */
  AccountContactCommunicationData

  /**
   * 
   * @type {DeferredNavigationProperty|AccountContacts|AccountContacts[]} 
   */
  AccountContacts

}

/**
 * AccountContacts
 * 
 * @class AccountContacts
 */
export class AccountContacts extends C4CEntity {

  /**
   * 
   * @type {AccountContacts} 
   */
  _type = AccountContacts

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Contact ID
   * @type {Edm.String} 
   */
  ContactID

  /**
   * Contact
   * @type {Edm.Guid} 
   */
  ContactUUID

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * EndDate
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * FirstName
   * @type {Edm.String} 
   */
  FirstName

  /**
   * LastName
   * @type {Edm.String} 
   */
  LastName

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Role
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * StartDate
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

}

/**
 * AccountNotes
 * 
 * @class AccountNotes
 */
export class AccountNotes extends C4CEntity {

  /**
   * 
   * @type {AccountNotes} 
   */
  _type = AccountNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * AccountRole
 * 
 * @class AccountRole
 */
export class AccountRole extends C4CEntity {

  /**
   * 
   * @type {AccountRole} 
   */
  _type = AccountRole

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * BusinessCharacterCode
   * @type {Edm.String} 
   */
  BusinessCharacterCode

  /**
   * BusinessCharacterCodeText
   * @type {Edm.String} 
   */
  BusinessCharacterCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Role
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Account|Account[]} 
   */
  Account

}

/**
 * AccountSalesData
 * 
 * @class AccountSalesData
 */
export class AccountSalesData extends C4CEntity {

  /**
   * 
   * @type {AccountSalesData} 
   */
  _type = AccountSalesData

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Billing Block
   * @type {Edm.String} 
   */
  BillingBlockingReasonCode

  /**
   * BillingBlockingReasonCodeText
   * @type {Edm.String} 
   */
  BillingBlockingReasonCodeText

  /**
   * Currency
   * @type {Edm.String} 
   */
  CurrencyCode

  /**
   * CurrencyCodeText
   * @type {Edm.String} 
   */
  CurrencyCodeText

  /**
   * Customer Group
   * @type {Edm.String} 
   */
  CustomerGroupCode

  /**
   * CustomerGroupCodeText
   * @type {Edm.String} 
   */
  CustomerGroupCodeText

  /**
   * Customer ID
   * @type {Edm.String} 
   */
  CustomerID

  /**
   * Customer
   * @type {Edm.Guid} 
   */
  CustomerUUID

  /**
   * Delivery Block
   * @type {Edm.String} 
   */
  DeliveryBlockingReasonCode

  /**
   * DeliveryBlockingReasonCodeText
   * @type {Edm.String} 
   */
  DeliveryBlockingReasonCodeText

  /**
   * Delivery Priority
   * @type {Edm.String} 
   */
  DeliveryPriorityCode

  /**
   * DeliveryPriorityCodeText
   * @type {Edm.String} 
   */
  DeliveryPriorityCodeText

  /**
   * Distribution Channel
   * @type {Edm.String} 
   */
  DistributionChannelCode

  /**
   * DistributionChannelCodeText
   * @type {Edm.String} 
   */
  DistributionChannelCodeText

  /**
   * Division
   * @type {Edm.String} 
   */
  DivisionCode

  /**
   * DivisionCodeText
   * @type {Edm.String} 
   */
  DivisionCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Incoterms
   * @type {Edm.String} 
   */
  IncotermsCode

  /**
   * IncotermsCodeText
   * @type {Edm.String} 
   */
  IncotermsCodeText

  /**
   * Incoterms Location
   * @type {Edm.String} 
   */
  IncotermsLocation

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Order Block
   * @type {Edm.String} 
   */
  OrderBlockingReasonCode

  /**
   * OrderBlockingReasonCodeText
   * @type {Edm.String} 
   */
  OrderBlockingReasonCodeText

  /**
   * Payment Terms
   * @type {Edm.String} 
   */
  PaymentTermsCode

  /**
   * PaymentTermsCodeText
   * @type {Edm.String} 
   */
  PaymentTermsCodeText

  /**
   * Sales Group ID
   * @type {Edm.String} 
   */
  SalesGroupID

  /**
   * Sales Group
   * @type {Edm.Guid} 
   */
  SalesGroupUUID

  /**
   * Sales Office ID
   * @type {Edm.String} 
   */
  SalesOfficeID

  /**
   * Sales Office
   * @type {Edm.Guid} 
   */
  SalesOfficeUUID

  /**
   * Sales Organization ID
   * @type {Edm.String} 
   */
  SalesOrganisationID

  /**
   * Sales Organization
   * @type {Edm.Guid} 
   */
  SalesOrganisationUUID

  /**
   * Sales Support Block
   * @type {Edm.Boolean} 
   */
  SalesSupportBlockingIndicator

  /**
   * 
   * @type {DeferredNavigationProperty|AccountSalesGroupName|AccountSalesGroupName[]} 
   */
  AccountSalesGroupName

  /**
   * 
   * @type {DeferredNavigationProperty|AccountSalesOfficeName|AccountSalesOfficeName[]} 
   */
  AccountSalesOfficeName

  /**
   * 
   * @type {DeferredNavigationProperty|AccountSalesOrganisationName|AccountSalesOrganisationName[]} 
   */
  AccountSalesOrganisationName

}

/**
 * AccountSalesGroupName
 * 
 * @class AccountSalesGroupName
 */
export class AccountSalesGroupName extends C4CEntity {

  /**
   * 
   * @type {AccountSalesGroupName} 
   */
  _type = AccountSalesGroupName

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

}

/**
 * AccountSalesOfficeName
 * 
 * @class AccountSalesOfficeName
 */
export class AccountSalesOfficeName extends C4CEntity {

  /**
   * 
   * @type {AccountSalesOfficeName} 
   */
  _type = AccountSalesOfficeName

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

}

/**
 * AccountSalesOrganisationName
 * 
 * @class AccountSalesOrganisationName
 */
export class AccountSalesOrganisationName extends C4CEntity {

  /**
   * 
   * @type {AccountSalesOrganisationName} 
   */
  _type = AccountSalesOrganisationName

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

}

/**
 * AccountTeam
 * 
 * @class AccountTeam
 */
export class AccountTeam extends C4CEntity {

  /**
   * 
   * @type {AccountTeam} 
   */
  _type = AccountTeam

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Distribution Channel
   * @type {Edm.String} 
   */
  DistributionChannelCode

  /**
   * DistributionChannelCodeText
   * @type {Edm.String} 
   */
  DistributionChannelCodeText

  /**
   * Division
   * @type {Edm.String} 
   */
  DivisionCode

  /**
   * DivisionCodeText
   * @type {Edm.String} 
   */
  DivisionCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Employee
   * @type {Edm.Guid} 
   */
  EmployeeUUID

  /**
   * End Date
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * Employee Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Party Role
   * @type {Edm.String} 
   */
  PartyRoleCode

  /**
   * PartyRoleCodeText
   * @type {Edm.String} 
   */
  PartyRoleCodeText

  /**
   * Sales Organization
   * @type {Edm.Guid} 
   */
  SalesOrganisationUUID

  /**
   * Start Date
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Account|Account[]} 
   */
  Account

  /**
   * 
   * @type {DeferredNavigationProperty|AccountTeamAddress|AccountTeamAddress[]} 
   */
  AccountTeamAddress

}

/**
 * AccountTeamAddress
 * 
 * @class AccountTeamAddress
 */
export class AccountTeamAddress extends C4CEntity {

  /**
   * 
   * @type {AccountTeamAddress} 
   */
  _type = AccountTeamAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

}

/**
 * Appointment
 * 
 * @class Appointment
 */
export class Appointment extends C4CEntity {

  /**
   * 
   * @type {Appointment} 
   */
  _type = Appointment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Account
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Account

  /**
   * Account ID
   * @type {Edm.String} 
   */
  AccountID

  /**
   * Account UUID
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Activity Object
   * @type {Edm.String} 
   */
  ActivityObject

  /**
   * Activity Time
   * @type {Edm.DateTimeOffset} 
   */
  ActivityTime

  /**
   * Location Line 2
   * @type {Edm.String} 
   */
  AdditionalLocationName

  /**
   * All Day Event
   * @type {Edm.Boolean} 
   */
  AllDayEvent

  /**
   * Appointment Date
   * @type {Edm.DateTime} 
   */
  AppointmentDate

  /**
   * Arrival Times
   * @type {Edm.String} 
   */
  Arrivals

  /**
   * CampaignIDcontent
   * @type {Edm.String} 
   */
  CampaignIDcontent

  /**
   * Campaign Name
   * @type {Edm.String} 
   */
  CampaignName

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Name
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * Last Changed On
   * @type {Edm.DateTimeOffset} 
   */
  ChangedOn

  /**
   * Comments
   * @type {Edm.String} 
   */
  Comments

  /**
   * Competitor Vehicle Model
   * @type {Edm.String} 
   */
  CompetitorVehicle

  /**
   * Completion
   * @type {Edm.Decimal} 
   */
  CompletionPercent

  /**
   * Name
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTimeOffset} 
   */
  CreatedOn

  /**
   * Creation DateTime
   * @type {Edm.DateTimeOffset} 
   */
  CreationDateTime

  /**
   * Customer ID
   * @type {Edm.String} 
   */
  CustomerInternalID

  /**
   * Customer Name
   * @type {Edm.String} 
   */
  CustomerName

  /**
   * Customer Phone
   * @type {Edm.String} 
   */
  CustomerPhone

  /**
   * Customer Response
   * @type {Edm.String} 
   */
  CustomerResponse

  /**
   * Customer Satisfaction
   * @type {Edm.String} 
   */
  CustomerSatisfaction

  /**
   * CustomerSatisfactionText
   * @type {Edm.String} 
   */
  CustomerSatisfactionText

  /**
   * Data Origin
   * @type {Edm.String} 
   */
  DataOriginTypeCode

  /**
   * DataOriginTypeCodeText
   * @type {Edm.String} 
   */
  DataOriginTypeCodeText

  /**
   * Driven Experience
   * @type {Edm.String} 
   */
  DrivenExperience

  /**
   * DrivenExperienceText
   * @type {Edm.String} 
   */
  DrivenExperienceText

  /**
   * Driver ID
   * @type {Edm.String} 
   */
  DriverID

  /**
   * Driver Name
   * @type {Edm.String} 
   */
  DriverName

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * End Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  EndDateTime

  /**
   * Groupware Item ID
   * @type {Edm.String} 
   */
  GroupwareItemID

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ID Address
   * @type {Edm.String} 
   */
  IDAddress

  /**
   * Intent Model ID
   * @type {Edm.String} 
   */
  IntentModeID

  /**
   * Intent Model Description
   * @type {Edm.String} 
   */
  IntentModel

  /**
   * IntentionTime
   * @type {Edm.DateTime} 
   */
  IntentionTime

  /**
   * Is Customer Own
   * @type {Edm.Boolean} 
   */
  IsCustomerOwn

  /**
   * Is DL Scanned
   * @type {Edm.Boolean} 
   */
  IsDLScanned

  /**
   * Is IDC Scanned
   * @type {Edm.Boolean} 
   */
  IsIDCScanned

  /**
   * Is Recepit Scanned
   * @type {Edm.Boolean} 
   */
  IsRecepitScanned

  /**
   * LeadIDcontent
   * @type {Edm.String} 
   */
  LeadIDcontent

  /**
   * Location
   * @type {Edm.String} 
   */
  LocationName

  /**
   * Mileage_acontent
   * @type {Edm.Decimal} 
   */
  Mileage_acontent

  /**
   * Mileage_aunitCode
   * @type {Edm.String} 
   */
  Mileage_aunitCode

  /**
   * Mileage_aunitCodeText
   * @type {Edm.String} 
   */
  Mileage_aunitCodeText

  /**
   * Mileage_bcontent
   * @type {Edm.Decimal} 
   */
  Mileage_bcontent

  /**
   * Mileage_bunitCode
   * @type {Edm.String} 
   */
  Mileage_bunitCode

  /**
   * Mileage_bunitCodeText
   * @type {Edm.String} 
   */
  Mileage_bunitCodeText

  /**
   * Next Activity Time
   * @type {Edm.DateTimeOffset} 
   */
  NextActivityTime

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Organizer Email
   * @type {Edm.String} 
   */
  OrganizerEmailURI

  /**
   * Party ID
   * @type {Edm.String} 
   */
  OrganizerID

  /**
   * Organizer
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  OrganizerName

  /**
   * Organizer Name
   * @type {Edm.String} 
   */
  OrganizerPartyName

  /**
   * Organizer UUID
   * @type {Edm.Guid} 
   */
  OrganizerUUID

  /**
   * Other Vehicle Model Description
   * @type {Edm.String} 
   */
  OtherVehicleModel

  /**
   * Other Vehicle Model ID
   * @type {Edm.String} 
   */
  OtherVehicleModelID

  /**
   * Owner
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Owner

  /**
   * Owner UUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Duration
   * @type {Edm.String} 
   */
  PhoneDuration

  /**
   * Primary Contact
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  PrimaryContact

  /**
   * Primary Contact ID
   * @type {Edm.String} 
   */
  PrimaryContactID

  /**
   * Primary Contact UUID
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * Priority
   * @type {Edm.String} 
   */
  PriorityCode

  /**
   * PriorityCodeText
   * @type {Edm.String} 
   */
  PriorityCodeText

  /**
   * PurchaseFocuscontent
   * @type {Edm.String} 
   */
  PurchaseFocuscontent

  /**
   * PurchaseFocuscontentText
   * @type {Edm.String} 
   */
  PurchaseFocuscontentText

  /**
   * PurchaseUsagecontent
   * @type {Edm.String} 
   */
  PurchaseUsagecontent

  /**
   * PurchaseUsagecontentText
   * @type {Edm.String} 
   */
  PurchaseUsagecontentText

  /**
   * Purpose
   * @type {Edm.String} 
   */
  Purpose

  /**
   * QuoteAmountcontent
   * @type {Edm.Decimal} 
   */
  QuoteAmountcontent

  /**
   * QuoteAmountcurrencyCode
   * @type {Edm.String} 
   */
  QuoteAmountcurrencyCode

  /**
   * QuoteAmountcurrencyCodeText
   * @type {Edm.String} 
   */
  QuoteAmountcurrencyCodeText

  /**
   * Reported Date/Time
   * @type {Edm.DateTimeOffset} 
   */
  ReportedDateTime

  /**
   * Sales Man ID
   * @type {Edm.String} 
   */
  SalesManID

  /**
   * Sales Man
   * @type {Edm.String} 
   */
  SalesManName

  /**
   * Slaes Rep ID
   * @type {Edm.String} 
   */
  SalesRepID

  /**
   * Sales Rep
   * @type {Edm.String} 
   */
  SalesRepName

  /**
   * Start Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  StartDateTime

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Subject
   * @type {Edm.String} 
   */
  Subject

  /**
   * Test Driven Status
   * @type {Edm.String} 
   */
  TestDrivenStatus

  /**
   * TestDrivenStatusText
   * @type {Edm.String} 
   */
  TestDrivenStatusText

  /**
   * Activity Type
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * Vehicle Model ID
   * @type {Edm.String} 
   */
  VehicleModeID

  /**
   * Vehicle Model Description
   * @type {Edm.String} 
   */
  VehicleModel

  /**
   * 
   * @type {DeferredNavigationProperty|AppointmentAttachment|AppointmentAttachment[]} 
   */
  AppointmentAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|AppointmentInvolvedParties|AppointmentInvolvedParties[]} 
   */
  AppointmentInvolvedParties

  /**
   * 
   * @type {DeferredNavigationProperty|AppointmentNotes|AppointmentNotes[]} 
   */
  AppointmentNotes

}

/**
 * AppointmentAttachment
 * 
 * @class AppointmentAttachment
 */
export class AppointmentAttachment extends C4CEntity {

  /**
   * 
   * @type {AppointmentAttachment} 
   */
  _type = AppointmentAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * AppointmentInvolvedParties
 * 
 * @class AppointmentInvolvedParties
 */
export class AppointmentInvolvedParties extends C4CEntity {

  /**
   * 
   * @type {AppointmentInvolvedParties} 
   */
  _type = AppointmentInvolvedParties

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ActivityGroupCode
   * @type {Edm.String} 
   */
  ActivityGroupCode

  /**
   * ActivityGroupCodeText
   * @type {Edm.String} 
   */
  ActivityGroupCodeText

  /**
   * Address
   * @type {Edm.String} 
   */
  Address

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Party Email
   * @type {Edm.String} 
   */
  PartyEmailURI

  /**
   * PartyID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * Party Name
   * @type {Edm.String} 
   */
  PartyName

  /**
   * PartyTypeCode
   * @type {Edm.String} 
   */
  PartyTypeCode

  /**
   * PartyTypeCodeText
   * @type {Edm.String} 
   */
  PartyTypeCodeText

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Appointment|Appointment[]} 
   */
  Appointment

}

/**
 * AppointmentNotes
 * 
 * @class AppointmentNotes
 */
export class AppointmentNotes extends C4CEntity {

  /**
   * 
   * @type {AppointmentNotes} 
   */
  _type = AppointmentNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * BusinessPartner
 * 
 * @class BusinessPartner
 */
export class BusinessPartner extends C4CEntity {

  /**
   * 
   * @type {BusinessPartner} 
   */
  _type = BusinessPartner

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Thing Type
   * @type {Edm.String} 
   */
  ThingType

  /**
   * Business Partner UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * CodeList
 * 
 * @class CodeList
 */
export class CodeList extends C4CEntity {

  /**
   * 
   * @type {CodeList} 
   */
  _type = CodeList

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Code
   * @type {Edm.String} 
   */
  Code

  /**
   * Description
   * @type {Edm.String} 
   */
  Description

}

/**
 * Contact
 * 
 * @class Contact
 */
export class Contact extends C4CEntity {

  /**
   * 
   * @type {Contact} 
   */
  _type = Contact

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Academic Title
   * @type {Edm.String} 
   */
  AcademicTitleCode

  /**
   * AcademicTitleCodeText
   * @type {Edm.String} 
   */
  AcademicTitleCodeText

  /**
   * Account ID
   * @type {Edm.String} 
   */
  AccountID

  /**
   * Name
   * @type {Edm.String} 
   */
  AccountName

  /**
   * Account
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Additional Academic Title
   * @type {Edm.String} 
   */
  AdditionalAcademicTitleCode

  /**
   * AdditionalAcademicTitleCodeText
   * @type {Edm.String} 
   */
  AdditionalAcademicTitleCodeText

  /**
   * Best Reached By
   * @type {Edm.String} 
   */
  BestReachedByCode

  /**
   * BestReachedByCodeText
   * @type {Edm.String} 
   */
  BestReachedByCodeText

  /**
   * Building
   * @type {Edm.String} 
   */
  Building

  /**
   * City
   * @type {Edm.String} 
   */
  BusinessAddressCity

  /**
   * Country
   * @type {Edm.String} 
   */
  BusinessAddressCountryCode

  /**
   * BusinessAddressCountryCodeText
   * @type {Edm.String} 
   */
  BusinessAddressCountryCodeText

  /**
   * House Number
   * @type {Edm.String} 
   */
  BusinessAddressHouseID

  /**
   * State
   * @type {Edm.String} 
   */
  BusinessAddressStateCode

  /**
   * BusinessAddressStateCodeText
   * @type {Edm.String} 
   */
  BusinessAddressStateCodeText

  /**
   * Street
   * @type {Edm.String} 
   */
  BusinessAddressStreet

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  BusinessAddressStreetPostalCode

  /**
   * BusinessAddressStreetPostalCodeText
   * @type {Edm.String} 
   */
  BusinessAddressStreetPostalCodeText

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Changed By
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * Changed On
   * @type {Edm.DateTimeOffset} 
   */
  ChangedOn

  /**
   * ID
   * @type {Edm.String} 
   */
  ContactID

  /**
   * Name
   * @type {Edm.String} 
   */
  ContactName

  /**
   * Owner
   * @type {Edm.Guid} 
   */
  ContactOwnerUUID

  /**
   * Contact Permission
   * @type {Edm.String} 
   */
  ContactPermissionCode

  /**
   * ContactPermissionCodeText
   * @type {Edm.String} 
   */
  ContactPermissionCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTimeOffset} 
   */
  CreationOn

  /**
   * Department
   * @type {Edm.String} 
   */
  Department

  /**
   * Department
   * @type {Edm.String} 
   */
  DepartmentCode

  /**
   * DepartmentCodeText
   * @type {Edm.String} 
   */
  DepartmentCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  Email

  /**
   * E-Mail Invalid
   * @type {Edm.Boolean} 
   */
  EmailInvalidIndicator

  /**
   * End Date
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * First Name
   * @type {Edm.String} 
   */
  FirstName

  /**
   * Floor
   * @type {Edm.String} 
   */
  Floor

  /**
   * Function
   * @type {Edm.String} 
   */
  FunctionCode

  /**
   * FunctionCodeText
   * @type {Edm.String} 
   */
  FunctionCodeText

  /**
   * Gender
   * @type {Edm.String} 
   */
  GenderCode

  /**
   * GenderCodeText
   * @type {Edm.String} 
   */
  GenderCodeText

  /**
   * Function
   * @type {Edm.String} 
   */
  JobTitle

  /**
   * Language
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Name
   * @type {Edm.String} 
   */
  LastName

  /**
   * Marital Status
   * @type {Edm.String} 
   */
  MaritalStatusCode

  /**
   * MaritalStatusCodeText
   * @type {Edm.String} 
   */
  MaritalStatusCodeText

  /**
   * Marketing Lead
   * @type {Edm.Boolean} 
   */
  MarketingLeadIndicator

  /**
   * Middle Name
   * @type {Edm.String} 
   */
  MiddleName

  /**
   * Mobile
   * @type {Edm.String} 
   */
  Mobile

  /**
   * Nickname
   * @type {Edm.String} 
   */
  NickName

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Perception Of Company
   * @type {Edm.String} 
   */
  PerceptionOfCompanyCode

  /**
   * PerceptionOfCompanyCodeText
   * @type {Edm.String} 
   */
  PerceptionOfCompanyCodeText

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Role
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * Room
   * @type {Edm.String} 
   */
  Room

  /**
   * Start Date
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Title
   * @type {Edm.String} 
   */
  TitleCode

  /**
   * TitleCodeText
   * @type {Edm.String} 
   */
  TitleCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * VIP Contact
   * @type {Edm.String} 
   */
  VIPContactCode

  /**
   * VIPContactCodeText
   * @type {Edm.String} 
   */
  VIPContactCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|ContactAttachment|ContactAttachment[]} 
   */
  ContactAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|ContactBusinessAddress|ContactBusinessAddress[]} 
   */
  ContactBusinessAddress

  /**
   * 
   * @type {DeferredNavigationProperty|ContactCommunicationData|ContactCommunicationData[]} 
   */
  ContactCommunicationData

  /**
   * 
   * @type {DeferredNavigationProperty|ContactNotes|ContactNotes[]} 
   */
  ContactNotes

  /**
   * 
   * @type {DeferredNavigationProperty|ContactPersonalAddress|ContactPersonalAddress[]} 
   */
  ContactPersonalAddress

}

/**
 * ContactAttachment
 * 
 * @class ContactAttachment
 */
export class ContactAttachment extends C4CEntity {

  /**
   * 
   * @type {ContactAttachment} 
   */
  _type = ContactAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * ContactBusinessAddress
 * 
 * @class ContactBusinessAddress
 */
export class ContactBusinessAddress extends C4CEntity {

  /**
   * 
   * @type {ContactBusinessAddress} 
   */
  _type = ContactBusinessAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Account UUID
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Contact UUID
   * @type {Edm.Guid} 
   */
  ContactUUID

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * FirstLineDescription
   * @type {Edm.String} 
   */
  FirstLineDescription

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Address
   * @type {Edm.String} 
   */
  PostalAddress

  /**
   * Best Reached By
   * @type {Edm.String} 
   */
  PreferredCommunicationMediumTypeCode

  /**
   * PreferredCommunicationMediumTypeCodeText
   * @type {Edm.String} 
   */
  PreferredCommunicationMediumTypeCodeText

  /**
   * SecondLineDescription
   * @type {Edm.String} 
   */
  SecondLineDescription

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|ContactBusinessPostalAddress|ContactBusinessPostalAddress[]} 
   */
  ContactBusinessPostalAddress

}

/**
 * ContactBusinessPostalAddress
 * 
 * @class ContactBusinessPostalAddress
 */
export class ContactBusinessPostalAddress extends C4CEntity {

  /**
   * 
   * @type {ContactBusinessPostalAddress} 
   */
  _type = ContactBusinessPostalAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * City
   * @type {Edm.String} 
   */
  City

  /**
   * Country
   * @type {Edm.String} 
   */
  CountryCode

  /**
   * CountryCodeText
   * @type {Edm.String} 
   */
  CountryCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * House Number
   * @type {Edm.String} 
   */
  HouseNumber

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  PostalCode

  /**
   * PostalCodeText
   * @type {Edm.String} 
   */
  PostalCodeText

  /**
   * State
   * @type {Edm.String} 
   */
  State

  /**
   * StateText
   * @type {Edm.String} 
   */
  StateText

  /**
   * Street
   * @type {Edm.String} 
   */
  Street

}

/**
 * ContactCommunicationData
 * 
 * @class ContactCommunicationData
 */
export class ContactCommunicationData extends C4CEntity {

  /**
   * 
   * @type {ContactCommunicationData} 
   */
  _type = ContactCommunicationData

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Building
   * @type {Edm.String} 
   */
  BuildingID

  /**
   * Department
   * @type {Edm.String} 
   */
  DepartmentFromBusinessCard

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * EMailInvalid
   * @type {Edm.Boolean} 
   */
  EMailInvalid

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * Floor
   * @type {Edm.String} 
   */
  FloorID

  /**
   * Function
   * @type {Edm.String} 
   */
  JobTitle

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Room
   * @type {Edm.String} 
   */
  RoomID

  /**
   * 
   * @type {DeferredNavigationProperty|AccountContactRelationship|AccountContactRelationship[]} 
   */
  AccountContactRelationship

}

/**
 * ContactNotes
 * 
 * @class ContactNotes
 */
export class ContactNotes extends C4CEntity {

  /**
   * 
   * @type {ContactNotes} 
   */
  _type = ContactNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * ContactPersonalAddress
 * 
 * @class ContactPersonalAddress
 */
export class ContactPersonalAddress extends C4CEntity {

  /**
   * 
   * @type {ContactPersonalAddress} 
   */
  _type = ContactPersonalAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address Line 2
   * @type {Edm.String} 
   */
  AdditionalStreetPrefixName

  /**
   * Address Line 5
   * @type {Edm.String} 
   */
  AdditionalStreetSuffixName

  /**
   * Address
   * @type {Edm.String} 
   */
  Address

  /**
   * City
   * @type {Edm.String} 
   */
  City

  /**
   * Country
   * @type {Edm.String} 
   */
  CountryCode

  /**
   * CountryCodeText
   * @type {Edm.String} 
   */
  CountryCodeText

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * House Number
   * @type {Edm.String} 
   */
  HouseNumber

  /**
   * Main Personal Address
   * @type {Edm.Boolean} 
   */
  MainPersonalAddress

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * P.O. Box
   * @type {Edm.String} 
   */
  POBox

  /**
   * P.O. Box Postal Code
   * @type {Edm.String} 
   */
  POBoxPostalCode

  /**
   * POBoxPostalCodeText
   * @type {Edm.String} 
   */
  POBoxPostalCodeText

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Mobile
   * @type {Edm.String} 
   */
  Phone

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  PostalCode

  /**
   * PostalCodeText
   * @type {Edm.String} 
   */
  PostalCodeText

  /**
   * State
   * @type {Edm.String} 
   */
  State

  /**
   * StateText
   * @type {Edm.String} 
   */
  StateText

  /**
   * Street
   * @type {Edm.String} 
   */
  Street

  /**
   * Address Line 1
   * @type {Edm.String} 
   */
  StreetPrefixName

  /**
   * Address Line 4
   * @type {Edm.String} 
   */
  StreetSuffixName

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Contact|Contact[]} 
   */
  Contact

  /**
   * 
   * @type {DeferredNavigationProperty|ContactPersonalPostalAddress|ContactPersonalPostalAddress[]} 
   */
  ContactPersonalPostalAddress

}

/**
 * ContactPersonalPostalAddress
 * 
 * @class ContactPersonalPostalAddress
 */
export class ContactPersonalPostalAddress extends C4CEntity {

  /**
   * 
   * @type {ContactPersonalPostalAddress} 
   */
  _type = ContactPersonalPostalAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address Line 2
   * @type {Edm.String} 
   */
  AdditionalStreetPrefixName

  /**
   * Address Line 5
   * @type {Edm.String} 
   */
  AdditionalStreetSuffixName

  /**
   * City
   * @type {Edm.String} 
   */
  City

  /**
   * Country
   * @type {Edm.String} 
   */
  CountryCode

  /**
   * CountryCodeText
   * @type {Edm.String} 
   */
  CountryCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * House Number
   * @type {Edm.String} 
   */
  HouseNumber

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * P.O. Box
   * @type {Edm.String} 
   */
  POBox

  /**
   * P.O. Box Postal Code
   * @type {Edm.String} 
   */
  POBoxPostalCode

  /**
   * POBoxPostalCodeText
   * @type {Edm.String} 
   */
  POBoxPostalCodeText

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  PostalCode

  /**
   * PostalCodeText
   * @type {Edm.String} 
   */
  PostalCodeText

  /**
   * State
   * @type {Edm.String} 
   */
  State

  /**
   * StateText
   * @type {Edm.String} 
   */
  StateText

  /**
   * Street
   * @type {Edm.String} 
   */
  Street

  /**
   * Address Line 1
   * @type {Edm.String} 
   */
  StreetPrefixName

  /**
   * Address Line 4
   * @type {Edm.String} 
   */
  StreetSuffixName

  /**
   * 
   * @type {DeferredNavigationProperty|ContactPersonalAddress|ContactPersonalAddress[]} 
   */
  ContactPersonalAddress

}

/**
 * ContextualCodeList
 * 
 * @class ContextualCodeList
 */
export class ContextualCodeList extends C4CEntity {

  /**
   * 
   * @type {ContextualCodeList} 
   */
  _type = ContextualCodeList

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Code
   * @type {Edm.String} 
   */
  Code

  /**
   * Context
   * @type {Edm.String} 
   */
  Context

  /**
   * Description
   * @type {Edm.String} 
   */
  Description

}

/**
 * EMail
 * 
 * @class EMail
 */
export class EMail extends C4CEntity {

  /**
   * 
   * @type {EMail} 
   */
  _type = EMail

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Account ID
   * @type {Edm.String} 
   */
  AccountID

  /**
   * Account Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  AccountName

  /**
   * Account UUID
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Status
   * @type {Edm.String} 
   */
  CorrespondenceTransmissionStatusCode

  /**
   * CorrespondenceTransmissionStatusCodeText
   * @type {Edm.String} 
   */
  CorrespondenceTransmissionStatusCodeText

  /**
   * Data Origin
   * @type {Edm.String} 
   */
  DataOriginTypeCode

  /**
   * DataOriginTypeCodeText
   * @type {Edm.String} 
   */
  DataOriginTypeCodeText

  /**
   * Transmitted Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  DateTime

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Category
   * @type {Edm.String} 
   */
  GroupCode

  /**
   * GroupCodeText
   * @type {Edm.String} 
   */
  GroupCodeText

  /**
   * Groupware Item ID
   * @type {Edm.String} 
   */
  GroupwareItemID

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  MessageFromEmailURI

  /**
   * Message From Name
   * @type {Edm.String} 
   */
  MessageFromName

  /**
   * Message From Party ID
   * @type {Edm.String} 
   */
  MessageFromPartyID

  /**
   * Message From Party Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  MessageFromPartyName

  /**
   * Message From Party UUID
   * @type {Edm.Guid} 
   */
  MessageFromPartyUUID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Owner
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  OwnerName

  /**
   * Owner UUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * Party ID
   * @type {Edm.String} 
   */
  PrimaryContactID

  /**
   * Primary Contact Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  PrimaryContactName

  /**
   * Primary Contact UUID
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * Priority
   * @type {Edm.String} 
   */
  PriorityCode

  /**
   * PriorityCodeText
   * @type {Edm.String} 
   */
  PriorityCodeText

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Subject
   * @type {Edm.String} 
   */
  SubjectName

  /**
   * Activity Type
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|EMailAttachment|EMailAttachment[]} 
   */
  EMailAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|EMailCcRecipients|EMailCcRecipients[]} 
   */
  EMailCcRecipients

  /**
   * 
   * @type {DeferredNavigationProperty|EMailNotes|EMailNotes[]} 
   */
  EMailNotes

  /**
   * 
   * @type {DeferredNavigationProperty|EMailToRecipients|EMailToRecipients[]} 
   */
  EMailToRecipients

  /**
   * 
   * @type {DeferredNavigationProperty|EmailBusinessTransactionDocumentReference|EmailBusinessTransactionDocumentReference[]} 
   */
  EmailBusinessTransactionDocumentReference

}

/**
 * EMailAttachment
 * 
 * @class EMailAttachment
 */
export class EMailAttachment extends C4CEntity {

  /**
   * 
   * @type {EMailAttachment} 
   */
  _type = EMailAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * EMailCcRecipients
 * 
 * @class EMailCcRecipients
 */
export class EMailCcRecipients extends C4CEntity {

  /**
   * 
   * @type {EMailCcRecipients} 
   */
  _type = EMailCcRecipients

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address
   * @type {Edm.String} 
   */
  Address

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMailID

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  MessageCCEMailID

  /**
   * Message CC Name
   * @type {Edm.String} 
   */
  MessageCCName

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Message CC Party ID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * Message CC Party UUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * RoleCategoryCode
   * @type {Edm.String} 
   */
  RoleCategoryCode

  /**
   * RoleCategoryCodeText
   * @type {Edm.String} 
   */
  RoleCategoryCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|EMail|EMail[]} 
   */
  EMail

}

/**
 * EMailNotes
 * 
 * @class EMailNotes
 */
export class EMailNotes extends C4CEntity {

  /**
   * 
   * @type {EMailNotes} 
   */
  _type = EMailNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * EMailToRecipients
 * 
 * @class EMailToRecipients
 */
export class EMailToRecipients extends C4CEntity {

  /**
   * 
   * @type {EMailToRecipients} 
   */
  _type = EMailToRecipients

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address
   * @type {Edm.String} 
   */
  Address

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMailID

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  MessageToEmailID

  /**
   * Message To Name
   * @type {Edm.String} 
   */
  MessageToName

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Message To Party ID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * Message To Party UUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Role Category Code
   * @type {Edm.String} 
   */
  RoleCategoryCode

  /**
   * RoleCategoryCodeText
   * @type {Edm.String} 
   */
  RoleCategoryCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|EMail|EMail[]} 
   */
  EMail

}

/**
 * EmailBusinessTransactionDocumentReference
 * 
 * @class EmailBusinessTransactionDocumentReference
 */
export class EmailBusinessTransactionDocumentReference extends C4CEntity {

  /**
   * 
   * @type {EmailBusinessTransactionDocumentReference} 
   */
  _type = EmailBusinessTransactionDocumentReference

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Role Code
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|EMail|EMail[]} 
   */
  EMail

}

/**
 * Employee
 * 
 * @class Employee
 */
export class Employee extends C4CEntity {

  /**
   * 
   * @type {Employee} 
   */
  _type = Employee

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Academic Title
   * @type {Edm.String} 
   */
  AcademicTitleCode

  /**
   * AcademicTitleCodeText
   * @type {Edm.String} 
   */
  AcademicTitleCodeText

  /**
   * Address Line 1
   * @type {Edm.String} 
   */
  AddressLine1

  /**
   * Address Line 2
   * @type {Edm.String} 
   */
  AddressLine2

  /**
   * Address Line 4
   * @type {Edm.String} 
   */
  AddressLine4

  /**
   * Address Line 5
   * @type {Edm.String} 
   */
  AddressLine5

  /**
   * Date of Birth
   * @type {Edm.DateTime} 
   */
  BirthDate

  /**
   * Birth Name
   * @type {Edm.String} 
   */
  BirthName

  /**
   * Place of Birth
   * @type {Edm.String} 
   */
  BirthPlaceName

  /**
   * Building
   * @type {Edm.String} 
   */
  Building

  /**
   * c/o
   * @type {Edm.String} 
   */
  CareOfName

  /**
   * City
   * @type {Edm.String} 
   */
  City

  /**
   * Company Postal Code
   * @type {Edm.String} 
   */
  CompanyPostalCode

  /**
   * CompanyPostalCodeText
   * @type {Edm.String} 
   */
  CompanyPostalCodeText

  /**
   * Country
   * @type {Edm.String} 
   */
  CountryCode

  /**
   * CountryCodeText
   * @type {Edm.String} 
   */
  CountryCodeText

  /**
   * County
   * @type {Edm.String} 
   */
  County

  /**
   * Date Format
   * @type {Edm.String} 
   */
  DateFormatCode

  /**
   * DateFormatCodeText
   * @type {Edm.String} 
   */
  DateFormatCodeText

  /**
   * Decimal Format
   * @type {Edm.String} 
   */
  DecimalFormatCode

  /**
   * DecimalFormatCodeText
   * @type {Edm.String} 
   */
  DecimalFormatCodeText

  /**
   * Different City
   * @type {Edm.String} 
   */
  DifferentCity

  /**
   * District
   * @type {Edm.String} 
   */
  District

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  Email

  /**
   * Employee ID
   * @type {Edm.String} 
   */
  EmployeeID

  /**
   * Validity End Date
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * Fax
   * @type {Edm.String} 
   */
  FaxNumber

  /**
   * First Name
   * @type {Edm.String} 
   */
  FirstName

  /**
   * Floor
   * @type {Edm.String} 
   */
  Floor

  /**
   * Phone
   * @type {Edm.String} 
   */
  FormattedNumberDescription

  /**
   * Gender
   * @type {Edm.String} 
   */
  GenderCode

  /**
   * GenderCodeText
   * @type {Edm.String} 
   */
  GenderCodeText

  /**
   * House Number
   * @type {Edm.String} 
   */
  HouseNumber

  /**
   * In-House Mail
   * @type {Edm.String} 
   */
  InhouseMail

  /**
   * Internal Employee
   * @type {Edm.Boolean} 
   */
  InternalEmployeeIndicator

  /**
   * ID
   * @type {Edm.String} 
   */
  InternalID

  /**
   * Language
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Name
   * @type {Edm.String} 
   */
  LastName

  /**
   * Logon Language
   * @type {Edm.String} 
   */
  LogonLanguageCode

  /**
   * LogonLanguageCodeText
   * @type {Edm.String} 
   */
  LogonLanguageCodeText

  /**
   * Marital Status
   * @type {Edm.String} 
   */
  MaritalStatusCode

  /**
   * MaritalStatusCodeText
   * @type {Edm.String} 
   */
  MaritalStatusCodeText

  /**
   * Middle Name
   * @type {Edm.String} 
   */
  MiddleName

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * Nationality
   * @type {Edm.String} 
   */
  NationalityCountryCode

  /**
   * NationalityCountryCodeText
   * @type {Edm.String} 
   */
  NationalityCountryCodeText

  /**
   * Nickname
   * @type {Edm.String} 
   */
  NickName

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  OfficePhoneNumber

  /**
   * P.O. Box
   * @type {Edm.String} 
   */
  POBox

  /**
   * P.O. Box City
   * @type {Edm.String} 
   */
  POBoxCity

  /**
   * P.O. Box Country
   * @type {Edm.String} 
   */
  POBoxCountryCode

  /**
   * POBoxCountryCodeText
   * @type {Edm.String} 
   */
  POBoxCountryCodeText

  /**
   * P.O. Box Postal Code
   * @type {Edm.String} 
   */
  POBoxPostalCode

  /**
   * POBoxPostalCodeText
   * @type {Edm.String} 
   */
  POBoxPostalCodeText

  /**
   * P.O. Box State
   * @type {Edm.String} 
   */
  POBoxRegionCode

  /**
   * POBoxRegionCodeText
   * @type {Edm.String} 
   */
  POBoxRegionCodeText

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  PostalCode

  /**
   * PostalCodeText
   * @type {Edm.String} 
   */
  PostalCodeText

  /**
   * State
   * @type {Edm.String} 
   */
  RegionCode

  /**
   * RegionCodeText
   * @type {Edm.String} 
   */
  RegionCodeText

  /**
   * Room
   * @type {Edm.String} 
   */
  Room

  /**
   * Second Last Name
   * @type {Edm.String} 
   */
  SecondLastName

  /**
   * Name
   * @type {Edm.String} 
   */
  SortingName

  /**
   * Validity Start Date
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * Street
   * @type {Edm.String} 
   */
  Street

  /**
   * Tax Jurisdiction Code
   * @type {Edm.String} 
   */
  TaxJurisdictionCode

  /**
   * TaxJurisdictionCodeText
   * @type {Edm.String} 
   */
  TaxJurisdictionCodeText

  /**
   * Time Format
   * @type {Edm.String} 
   */
  TimeFormatCode

  /**
   * TimeFormatCodeText
   * @type {Edm.String} 
   */
  TimeFormatCodeText

  /**
   * Time Zone
   * @type {Edm.String} 
   */
  TimeZoneCode

  /**
   * TimeZoneCodeText
   * @type {Edm.String} 
   */
  TimeZoneCodeText

  /**
   * Title
   * @type {Edm.String} 
   */
  TitleCode

  /**
   * TitleCodeText
   * @type {Edm.String} 
   */
  TitleCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * User ID
   * @type {Edm.String} 
   */
  UserID

  /**
   * User Password Policy
   * @type {Edm.String} 
   */
  UserPasswordPolicyCode

  /**
   * UserPasswordPolicyCodeText
   * @type {Edm.String} 
   */
  UserPasswordPolicyCodeText

  /**
   * User Validity End Date
   * @type {Edm.DateTime} 
   */
  UserValidityEndDate

  /**
   * User Validity Start Date
   * @type {Edm.DateTime} 
   */
  UserValidityStartDate

  /**
   * 
   * @type {DeferredNavigationProperty|EmployeeBusinessAddress|EmployeeBusinessAddress[]} 
   */
  EmployeeBusinessAddress

  /**
   * 
   * @type {DeferredNavigationProperty|EmployeeCommunicationData|EmployeeCommunicationData[]} 
   */
  EmployeeCommunicationData

}

/**
 * EmployeeBusinessAddress
 * 
 * @class EmployeeBusinessAddress
 */
export class EmployeeBusinessAddress extends C4CEntity {

  /**
   * 
   * @type {EmployeeBusinessAddress} 
   */
  _type = EmployeeBusinessAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * City
   * @type {Edm.String} 
   */
  City

  /**
   * Country
   * @type {Edm.String} 
   */
  CountryCode

  /**
   * CountryCodeText
   * @type {Edm.String} 
   */
  CountryCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * House Number
   * @type {Edm.String} 
   */
  HouseNumber

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  PostalCode

  /**
   * PostalCodeText
   * @type {Edm.String} 
   */
  PostalCodeText

  /**
   * State
   * @type {Edm.String} 
   */
  StateCode

  /**
   * StateCodeText
   * @type {Edm.String} 
   */
  StateCodeText

  /**
   * Street
   * @type {Edm.String} 
   */
  Street

  /**
   * 
   * @type {DeferredNavigationProperty|Employee|Employee[]} 
   */
  Employee

  /**
   * 
   * @type {DeferredNavigationProperty|EmployeeFormattedBusinessAddress|EmployeeFormattedBusinessAddress[]} 
   */
  EmployeeFormattedBusinessAddress

}

/**
 * EmployeeCommunicationData
 * 
 * @class EmployeeCommunicationData
 */
export class EmployeeCommunicationData extends C4CEntity {

  /**
   * 
   * @type {EmployeeCommunicationData} 
   */
  _type = EmployeeCommunicationData

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Building
   * @type {Edm.String} 
   */
  Building

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * Floor
   * @type {Edm.String} 
   */
  Floor

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Room
   * @type {Edm.String} 
   */
  Room

  /**
   * 
   * @type {DeferredNavigationProperty|Employee|Employee[]} 
   */
  Employee

}

/**
 * EmployeeFormattedBusinessAddress
 * 
 * @class EmployeeFormattedBusinessAddress
 */
export class EmployeeFormattedBusinessAddress extends C4CEntity {

  /**
   * 
   * @type {EmployeeFormattedBusinessAddress} 
   */
  _type = EmployeeFormattedBusinessAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Address
   * @type {Edm.String} 
   */
  FormattedAddress

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * 
   * @type {DeferredNavigationProperty|EmployeeBusinessAddress|EmployeeBusinessAddress[]} 
   */
  EmployeeBusinessAddress

}

/**
 * EmployeeValueHelp
 * 
 * @class EmployeeValueHelp
 */
export class EmployeeValueHelp extends C4CEntity {

  /**
   * 
   * @type {EmployeeValueHelp} 
   */
  _type = EmployeeValueHelp

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * EMail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Employee ID
   * @type {Edm.String} 
   */
  EmployeeID

  /**
   * First Name
   * @type {Edm.String} 
   */
  FirstName

  /**
   * Name
   * @type {Edm.String} 
   */
  FormattedName

  /**
   * Address
   * @type {Edm.String} 
   */
  FormattedPostalAddress

  /**
   * Internal ID
   * @type {Edm.String} 
   */
  InternalID

  /**
   * Last Name
   * @type {Edm.String} 
   */
  LastName

  /**
   * Middle Name
   * @type {Edm.String} 
   */
  MiddleName

  /**
   * Nick Name
   * @type {Edm.String} 
   */
  NickName

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

}

/**
 * ExternalIDMapping
 * 
 * @class ExternalIDMapping
 */
export class ExternalIDMapping extends C4CEntity {

  /**
   * 
   * @type {ExternalIDMapping} 
   */
  _type = ExternalIDMapping

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ExternalID
   * @type {Edm.String} 
   */
  ExternalID

  /**
   * ExternalIDSchemeCode
   * @type {Edm.String} 
   */
  ExternalIDSchemeCode

  /**
   * ExternalIDSchemeCodeText
   * @type {Edm.String} 
   */
  ExternalIDSchemeCodeText

  /**
   * ExternalSystemID
   * @type {Edm.String} 
   */
  ExternalSystemID

  /**
   * ExternalSystemUUID
   * @type {Edm.Guid} 
   */
  ExternalSystemUUID

  /**
   * InternalUUID
   * @type {Edm.Guid} 
   */
  InternalUUID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ObjectTypeCode
   * @type {Edm.String} 
   */
  ObjectTypeCode

  /**
   * ObjectTypeCodeText
   * @type {Edm.String} 
   */
  ObjectTypeCodeText

}

/**
 * IndividualCustomer
 * 
 * @class IndividualCustomer
 */
export class IndividualCustomer extends C4CEntity {

  /**
   * 
   * @type {IndividualCustomer} 
   */
  _type = IndividualCustomer

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ABC Classification
   * @type {Edm.String} 
   */
  ABCClassificationCode

  /**
   * ABCClassificationCodeText
   * @type {Edm.String} 
   */
  ABCClassificationCodeText

  /**
   * Academic Title
   * @type {Edm.String} 
   */
  AcademicTitleCode

  /**
   * AcademicTitleCodeText
   * @type {Edm.String} 
   */
  AcademicTitleCodeText

  /**
   * Address Line 2
   * @type {Edm.String} 
   */
  AdditionalStreetPrefixName

  /**
   * Address Line 5
   * @type {Edm.String} 
   */
  AdditionalStreetSuffixName

  /**
   * Billing Block
   * @type {Edm.String} 
   */
  BillingBlockCode

  /**
   * BillingBlockCodeText
   * @type {Edm.String} 
   */
  BillingBlockCodeText

  /**
   * Birth Date Protected
   * @type {Edm.Boolean} 
   */
  BirthDateProtectedIndicator

  /**
   * Building
   * @type {Edm.String} 
   */
  BuildingID

  /**
   * c/o
   * @type {Edm.String} 
   */
  CareOfName

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Changed By
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * Changed On
   * @type {Edm.DateTimeOffset} 
   */
  ChangedOn

  /**
   * City
   * @type {Edm.String} 
   */
  CityName

  /**
   * Company Postal Code
   * @type {Edm.String} 
   */
  CompanyPostalCode

  /**
   * CompanyPostalCodeText
   * @type {Edm.String} 
   */
  CompanyPostalCodeText

  /**
   * Contact Permission
   * @type {Edm.String} 
   */
  ContactPermissionCode

  /**
   * ContactPermissionCodeText
   * @type {Edm.String} 
   */
  ContactPermissionCodeText

  /**
   * Language
   * @type {Edm.String} 
   */
  CorrespondenceLanguageCode

  /**
   * CorrespondenceLanguageCodeText
   * @type {Edm.String} 
   */
  CorrespondenceLanguageCodeText

  /**
   * Country
   * @type {Edm.String} 
   */
  CountryCode

  /**
   * CountryCodeText
   * @type {Edm.String} 
   */
  CountryCodeText

  /**
   * County
   * @type {Edm.String} 
   */
  CountyName

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTimeOffset} 
   */
  CreationOn

  /**
   * Customer ID
   * @type {Edm.String} 
   */
  CustomerID

  /**
   * Date of Birth
   * @type {Edm.DateTime} 
   */
  DateOfBirth

  /**
   * Delivery Block
   * @type {Edm.String} 
   */
  DeliveryBlockCode

  /**
   * DeliveryBlockCodeText
   * @type {Edm.String} 
   */
  DeliveryBlockCodeText

  /**
   * District
   * @type {Edm.String} 
   */
  DistrictName

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Valid To
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * First Name
   * @type {Edm.String} 
   */
  FirstName

  /**
   * Gender
   * @type {Edm.String} 
   */
  GenderCode

  /**
   * GenderCodeText
   * @type {Edm.String} 
   */
  GenderCodeText

  /**
   * House Number
   * @type {Edm.String} 
   */
  HouseID

  /**
   * Initials
   * @type {Edm.String} 
   */
  Initials

  /**
   * Language
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Name
   * @type {Edm.String} 
   */
  LastName

  /**
   * Marital Status
   * @type {Edm.String} 
   */
  MaritalStatusCode

  /**
   * MaritalStatusCodeText
   * @type {Edm.String} 
   */
  MaritalStatusCodeText

  /**
   * Marital Status
   * @type {Edm.Boolean} 
   */
  MaritalStatusProtectedIndicator

  /**
   * Marketing Lead
   * @type {Edm.Boolean} 
   */
  MarketingLeadIndicator

  /**
   * Middle Name
   * @type {Edm.String} 
   */
  MiddleName

  /**
   * Mobile
   * @type {Edm.String} 
   */
  Mobile

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * Nationality
   * @type {Edm.String} 
   */
  NationalityCode

  /**
   * NationalityCodeText
   * @type {Edm.String} 
   */
  NationalityCodeText

  /**
   * Nickname
   * @type {Edm.String} 
   */
  NickName

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Order Block
   * @type {Edm.String} 
   */
  OrderBlockCode

  /**
   * OrderBlockCodeText
   * @type {Edm.String} 
   */
  OrderBlockCodeText

  /**
   * Owner Name
   * @type {Edm.String} 
   */
  Owner

  /**
   * Owner ID
   * @type {Edm.String} 
   */
  OwnerID

  /**
   * Owner
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * P.O. Box City
   * @type {Edm.String} 
   */
  POBoxDeviatingCityName

  /**
   * P.O. Box Country
   * @type {Edm.String} 
   */
  POBoxDeviatingCountryCode

  /**
   * POBoxDeviatingCountryCodeText
   * @type {Edm.String} 
   */
  POBoxDeviatingCountryCodeText

  /**
   * P.O. Box State
   * @type {Edm.String} 
   */
  POBoxDeviatingRegionCode

  /**
   * POBoxDeviatingRegionCodeText
   * @type {Edm.String} 
   */
  POBoxDeviatingRegionCodeText

  /**
   * P.O. Box
   * @type {Edm.String} 
   */
  POBoxID

  /**
   * P.O. Box Postal Code
   * @type {Edm.String} 
   */
  POBoxPostalCode

  /**
   * POBoxPostalCodeText
   * @type {Edm.String} 
   */
  POBoxPostalCodeText

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Best Reached By
   * @type {Edm.String} 
   */
  PreferredCommunicationMediumTypeCode

  /**
   * PreferredCommunicationMediumTypeCodeText
   * @type {Edm.String} 
   */
  PreferredCommunicationMediumTypeCodeText

  /**
   * Prefix
   * @type {Edm.String} 
   */
  PrefixCode

  /**
   * PrefixCodeText
   * @type {Edm.String} 
   */
  PrefixCodeText

  /**
   * Profession
   * @type {Edm.String} 
   */
  ProfessionCode

  /**
   * ProfessionCodeText
   * @type {Edm.String} 
   */
  ProfessionCodeText

  /**
   * State
   * @type {Edm.String} 
   */
  RegionCode

  /**
   * RegionCodeText
   * @type {Edm.String} 
   */
  RegionCodeText

  /**
   * Role
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * Sales Support Block
   * @type {Edm.Boolean} 
   */
  SalesSupportBlock

  /**
   * Valid From
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Street
   * @type {Edm.String} 
   */
  StreetName

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  StreetPostalCode

  /**
   * StreetPostalCodeText
   * @type {Edm.String} 
   */
  StreetPostalCodeText

  /**
   * Address Line 1
   * @type {Edm.String} 
   */
  StreetPrefixName

  /**
   * Address Line 4
   * @type {Edm.String} 
   */
  StreetSuffixName

  /**
   * Tax Jurisdiction Code
   * @type {Edm.String} 
   */
  TaxJurisdictionCode

  /**
   * TaxJurisdictionCodeText
   * @type {Edm.String} 
   */
  TaxJurisdictionCodeText

  /**
   * Time Zone
   * @type {Edm.String} 
   */
  TimeZoneCode

  /**
   * TimeZoneCodeText
   * @type {Edm.String} 
   */
  TimeZoneCodeText

  /**
   * Title
   * @type {Edm.String} 
   */
  TitleCode

  /**
   * TitleCodeText
   * @type {Edm.String} 
   */
  TitleCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * Web Site
   * @type {Edm.String} 
   */
  Web

  /**
   * 
   * @type {DeferredNavigationProperty|IndividualCustomerAttachment|IndividualCustomerAttachment[]} 
   */
  IndividualCustomerAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|IndividualCustomerCommon|IndividualCustomerCommon[]} 
   */
  IndividualCustomerCommon

  /**
   * 
   * @type {DeferredNavigationProperty|IndividualCustomerNotes|IndividualCustomerNotes[]} 
   */
  IndividualCustomerNotes

}

/**
 * IndividualCustomerAttachment
 * 
 * @class IndividualCustomerAttachment
 */
export class IndividualCustomerAttachment extends C4CEntity {

  /**
   * 
   * @type {IndividualCustomerAttachment} 
   */
  _type = IndividualCustomerAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * IndividualCustomerCommon
 * 
 * @class IndividualCustomerCommon
 */
export class IndividualCustomerCommon extends C4CEntity {

  /**
   * 
   * @type {IndividualCustomerCommon} 
   */
  _type = IndividualCustomerCommon

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * AcademicTitleCode
   * @type {Edm.String} 
   */
  AcademicTitleCode

  /**
   * AcademicTitleCodeText
   * @type {Edm.String} 
   */
  AcademicTitleCodeText

  /**
   * BirthDate
   * @type {Edm.DateTime} 
   */
  BirthDate

  /**
   * BirthDateProtectedIndicator
   * @type {Edm.Boolean} 
   */
  BirthDateProtectedIndicator

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Valid To
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * FamilyName
   * @type {Edm.String} 
   */
  FamilyName

  /**
   * GenderCode
   * @type {Edm.String} 
   */
  GenderCode

  /**
   * GenderCodeText
   * @type {Edm.String} 
   */
  GenderCodeText

  /**
   * GivenName
   * @type {Edm.String} 
   */
  GivenName

  /**
   * Marital Status
   * @type {Edm.String} 
   */
  MaritalStatusCode

  /**
   * MaritalStatusCodeText
   * @type {Edm.String} 
   */
  MaritalStatusCodeText

  /**
   * MaritalStatusProtectedIndicator
   * @type {Edm.Boolean} 
   */
  MaritalStatusProtectedIndicator

  /**
   * MiddleName
   * @type {Edm.String} 
   */
  MiddleName

  /**
   * Nationality
   * @type {Edm.String} 
   */
  NationalityCountryCode

  /**
   * NationalityCountryCodeText
   * @type {Edm.String} 
   */
  NationalityCountryCodeText

  /**
   * NonVerbalCommunicationLanguageCode
   * @type {Edm.String} 
   */
  NonVerbalCommunicationLanguageCode

  /**
   * NonVerbalCommunicationLanguageCodeText
   * @type {Edm.String} 
   */
  NonVerbalCommunicationLanguageCodeText

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * OccupationCode
   * @type {Edm.String} 
   */
  OccupationCode

  /**
   * OccupationCodeText
   * @type {Edm.String} 
   */
  OccupationCodeText

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Valid From
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * 
   * @type {DeferredNavigationProperty|IndividualCustomer|IndividualCustomer[]} 
   */
  IndividualCustomer

}

/**
 * IndividualCustomerNotes
 * 
 * @class IndividualCustomerNotes
 */
export class IndividualCustomerNotes extends C4CEntity {

  /**
   * 
   * @type {IndividualCustomerNotes} 
   */
  _type = IndividualCustomerNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * Lead
 * 
 * @class Lead
 */
export class Lead extends C4CEntity {

  /**
   * 
   * @type {Lead} 
   */
  _type = Lead

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * AccountID
   * @type {Edm.String} 
   */
  AccountID

  /**
   * AccountName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  AccountName

  /**
   * AccountUUID
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Name
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * ChangedByUUID
   * @type {Edm.Guid} 
   */
  ChangedByUUID

  /**
   * ChangedOn
   * @type {Edm.DateTimeOffset} 
   */
  ChangedOn

  /**
   * ConversionStatusCode
   * @type {Edm.String} 
   */
  ConversionStatusCode

  /**
   * ConversionStatusCodeText
   * @type {Edm.String} 
   */
  ConversionStatusCodeText

  /**
   * Name
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * CreatedByUUID
   * @type {Edm.Guid} 
   */
  CreatedByUUID

  /**
   * CreatedOn
   * @type {Edm.DateTimeOffset} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * End Date
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * LeadConsistencyCode
   * @type {Edm.String} 
   */
  LeadConsistencyCode

  /**
   * LeadConsistencyCodeText
   * @type {Edm.String} 
   */
  LeadConsistencyCodeText

  /**
   * ID
   * @type {Edm.String} 
   */
  LeadID

  /**
   * MarketingOwnerFormattedName
   * @type {Edm.String} 
   */
  MarketingOwnerFormattedName

  /**
   * MarketingOwnerID
   * @type {Edm.String} 
   */
  MarketingOwnerID

  /**
   * MarketingOwnerUUID
   * @type {Edm.Guid} 
   */
  MarketingOwnerUUID

  /**
   * MarketingUnitFormattedName
   * @type {Edm.String} 
   */
  MarketingUnitFormattedName

  /**
   * MarketingUnitUUID
   * @type {Edm.Guid} 
   */
  MarketingUnitUUID

  /**
   * Name
   * @type {c4codata.EXTENDED_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * PrimaryContactFormattedName
   * @type {Edm.String} 
   */
  PrimaryContactFormattedName

  /**
   * PrimaryContactUUID
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * PriorityCode
   * @type {Edm.String} 
   */
  PriorityCode

  /**
   * PriorityCodeText
   * @type {Edm.String} 
   */
  PriorityCodeText

  /**
   * ProcessingDatePeriod
   * @type {c4codata.CLOSED_DatePeriod} 
   */
  ProcessingDatePeriod

  /**
   * Qualification
   * @type {Edm.String} 
   */
  QualificationLevelCode

  /**
   * QualificationLevelCodeText
   * @type {Edm.String} 
   */
  QualificationLevelCodeText

  /**
   * ReasonForStatusCode
   * @type {Edm.String} 
   */
  ReasonForStatusCode

  /**
   * ReasonForStatusCodeText
   * @type {Edm.String} 
   */
  ReasonForStatusCodeText

  /**
   * SalesOwnerFormattedName
   * @type {Edm.String} 
   */
  SalesOwnerFormattedName

  /**
   * SalesOwnerID
   * @type {Edm.String} 
   */
  SalesOwnerID

  /**
   * SalesOwnerUUID
   * @type {Edm.Guid} 
   */
  SalesOwnerUUID

  /**
   * SalesTerritoryID
   * @type {Edm.String} 
   */
  SalesTerritoryID

  /**
   * SalesTerritoryUUID
   * @type {Edm.Guid} 
   */
  SalesTerritoryUUID

  /**
   * SalesUnitFormattedName
   * @type {Edm.String} 
   */
  SalesUnitFormattedName

  /**
   * SalesUnitUUID
   * @type {Edm.Guid} 
   */
  SalesUnitUUID

  /**
   * Source
   * @type {Edm.String} 
   */
  SourceCode

  /**
   * SourceCodeText
   * @type {Edm.String} 
   */
  SourceCodeText

  /**
   * Start Date
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|LeadAttachment|LeadAttachment[]} 
   */
  LeadAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|LeadBusinessDocumentReference|LeadBusinessDocumentReference[]} 
   */
  LeadBusinessDocumentReference

  /**
   * 
   * @type {DeferredNavigationProperty|LeadInvolvedParties|LeadInvolvedParties[]} 
   */
  LeadInvolvedParties

  /**
   * 
   * @type {DeferredNavigationProperty|LeadProduct|LeadProduct[]} 
   */
  LeadProduct

  /**
   * 
   * @type {DeferredNavigationProperty|LeadSalesAndMarketingTeam|LeadSalesAndMarketingTeam[]} 
   */
  LeadSalesAndMarketingTeam

}

/**
 * LeadAttachment
 * 
 * @class LeadAttachment
 */
export class LeadAttachment extends C4CEntity {

  /**
   * 
   * @type {LeadAttachment} 
   */
  _type = LeadAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * LeadBusinessDocumentReference
 * 
 * @class LeadBusinessDocumentReference
 */
export class LeadBusinessDocumentReference extends C4CEntity {

  /**
   * 
   * @type {LeadBusinessDocumentReference} 
   */
  _type = LeadBusinessDocumentReference

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ItemID
   * @type {Edm.String} 
   */
  ItemID

  /**
   * ItemTypeCode
   * @type {Edm.String} 
   */
  ItemTypeCode

  /**
   * ItemTypeCodeText
   * @type {Edm.String} 
   */
  ItemTypeCodeText

  /**
   * ItemUUID
   * @type {Edm.Guid} 
   */
  ItemUUID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Appointment|Appointment[]} 
   */
  Appointment

  /**
   * 
   * @type {DeferredNavigationProperty|EMail|EMail[]} 
   */
  EMail

  /**
   * 
   * @type {DeferredNavigationProperty|Lead|Lead[]} 
   */
  Lead

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

  /**
   * 
   * @type {DeferredNavigationProperty|PhoneCall|PhoneCall[]} 
   */
  PhoneCall

  /**
   * 
   * @type {DeferredNavigationProperty|Task|Task[]} 
   */
  Task

}

/**
 * LeadInvolvedParties
 * 
 * @class LeadInvolvedParties
 */
export class LeadInvolvedParties extends C4CEntity {

  /**
   * 
   * @type {LeadInvolvedParties} 
   */
  _type = LeadInvolvedParties

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * PartyID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Main
   * @type {Edm.Boolean} 
   */
  Primary

  /**
   * PrimaryContactID
   * @type {Edm.String} 
   */
  PrimaryContactID

  /**
   * PrimaryContactName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  PrimaryContactName

  /**
   * PrimaryContactUUID
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Lead|Lead[]} 
   */
  Lead

}

/**
 * LeadProduct
 * 
 * @class LeadProduct
 */
export class LeadProduct extends C4CEntity {

  /**
   * 
   * @type {LeadProduct} 
   */
  _type = LeadProduct

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Category
   * @type {c4codata.MEDIUM_Description} 
   */
  Category

  /**
   * CategoryID
   * @type {Edm.String} 
   */
  CategoryID

  /**
   * Description
   * @type {c4codata.SHORT_Description} 
   */
  Description

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * ProductID
   * @type {Edm.String} 
   */
  ProductID

  /**
   * Quantity
   * @type {c4codata.Quantity} 
   */
  Quantity

  /**
   * 
   * @type {DeferredNavigationProperty|Lead|Lead[]} 
   */
  Lead

}

/**
 * LeadSalesAndMarketingTeam
 * 
 * @class LeadSalesAndMarketingTeam
 */
export class LeadSalesAndMarketingTeam extends C4CEntity {

  /**
   * 
   * @type {LeadSalesAndMarketingTeam} 
   */
  _type = LeadSalesAndMarketingTeam

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Main
   * @type {Edm.Boolean} 
   */
  Primary

  /**
   * RoleCategoryCode
   * @type {Edm.String} 
   */
  RoleCategoryCode

  /**
   * RoleCategoryCodeText
   * @type {Edm.String} 
   */
  RoleCategoryCodeText

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Lead|Lead[]} 
   */
  Lead

}

/**
 * LeanLead
 * 
 * @class LeanLead
 */
export class LeanLead extends C4CEntity {

  /**
   * 
   * @type {LeanLead} 
   */
  _type = LeanLead

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * APP跟进时效
   * @type {Edm.DateTimeOffset} 
   */
  APPActivityDateTime

  /**
   * APP任务类型
   * @type {Edm.String} 
   */
  APPTaskType

  /**
   * APPTaskTypeText
   * @type {Edm.String} 
   */
  APPTaskTypeText

  /**
   * Customer Information City
   * @type {Edm.String} 
   */
  AccountCity

  /**
   * Account Information Language
   * @type {Edm.String} 
   */
  AccountCorrespondenceLanguageCode

  /**
   * Customer Information Country
   * @type {Edm.String} 
   */
  AccountCountry

  /**
   * Account Information D-U-N-S
   * @type {Edm.String} 
   */
  AccountDUNS

  /**
   * Individual Customer Information E-Mail
   * @type {Edm.String} 
   */
  AccountEMail

  /**
   * Account Information Fax
   * @type {Edm.String} 
   */
  AccountFax

  /**
   * Account Information Latitude
   * @type {Edm.Decimal} 
   */
  AccountLatitudeMeasure

  /**
   * AccountLatitudeMeasureUnitCode
   * @type {Edm.String} 
   */
  AccountLatitudeMeasureUnitCode

  /**
   * Account Information Legal Form
   * @type {Edm.String} 
   */
  AccountLegalForm

  /**
   * Account Information Longitude
   * @type {Edm.Decimal} 
   */
  AccountLongitudeMeasure

  /**
   * AccountLongitudeMeasureUnitCode
   * @type {Edm.String} 
   */
  AccountLongitudeMeasureUnitCode

  /**
   * Account Information Mobile
   * @type {Edm.String} 
   */
  AccountMobile

  /**
   * Account Information Note
   * @type {Edm.String} 
   */
  AccountNote

  /**
   * Account Party ID
   * @type {Edm.String} 
   */
  AccountPartyID

  /**
   * AccountPartyName
   * @type {Edm.String} 
   */
  AccountPartyName

  /**
   * Account Party UUID
   * @type {Edm.Guid} 
   */
  AccountPartyUUID

  /**
   * Account Information Phone
   * @type {Edm.String} 
   */
  AccountPhone

  /**
   * Account Information Address Line 2
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsAdditionalStreetPrefixName

  /**
   * Account Information Address Line 5
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsAdditionalStreetSuffixName

  /**
   * Account Information County
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsCountyName

  /**
   * AccountPostalAddressElementsHouseID
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsHouseID

  /**
   * Account Information P.O.Box
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsPOBoxID

  /**
   * Individual Customer Information Street
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsStreetName

  /**
   * Individual Customer Information Postal Code
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsStreetPostalCode

  /**
   * Account Information Address Line 1
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsStreetPrefix

  /**
   * Account Information Address Line 4
   * @type {Edm.String} 
   */
  AccountPostalAddressElementsStreetSufix

  /**
   * AccountPreferredCommunicationMediumTypeCode
   * @type {Edm.String} 
   */
  AccountPreferredCommunicationMediumTypeCode

  /**
   * Customer Information State
   * @type {Edm.String} 
   */
  AccountState

  /**
   * Account Information Web Site
   * @type {Edm.String} 
   */
  AccountWebsite

  /**
   * 跟进时效
   * @type {Edm.String} 
   */
  ActionDuration

  /**
   * 跟进次数
   * @type {Edm.Decimal} 
   */
  ActionTimes

  /**
   * 激活日期
   * @type {Edm.DateTime} 
   */
  ActiveDate

  /**
   * 激活时间
   * @type {Edm.DateTimeOffset} 
   */
  ActiveDateTime

  /**
   * 激活月
   * @type {Edm.String} 
   */
  ActiveMonth

  /**
   * ActiveMonthText
   * @type {Edm.String} 
   */
  ActiveMonthText

  /**
   * 激活季度
   * @type {Edm.String} 
   */
  ActiveQuarter

  /**
   * ActiveQuarterText
   * @type {Edm.String} 
   */
  ActiveQuarterText

  /**
   * 激活年
   * @type {Edm.String} 
   */
  ActiveYear

  /**
   * 激活年月
   * @type {Edm.String} 
   */
  ActiveYearMOnth

  /**
   * 激活年季
   * @type {Edm.String} 
   */
  ActiveYearQuarter

  /**
   * 激活年周
   * @type {Edm.String} 
   */
  ActiveYearWeek

  /**
   * 详细地址
   * @type {Edm.String} 
   */
  Address

  /**
   * 审批申请人
   * @type {Edm.String} 
   */
  Applicant

  /**
   * 审批申请人ID
   * @type {Edm.String} 
   */
  ApplicantID

  /**
   * 审批时间
   * @type {Edm.DateTimeOffset} 
   */
  ApprovalDateTime

  /**
   * 审批备注
   * @type {Edm.String} 
   */
  ApprovalNotes

  /**
   * 审批状态
   * @type {Edm.String} 
   */
  ApprovalStatus

  /**
   * Approval Status
   * @type {Edm.String} 
   */
  ApprovalStatusCode

  /**
   * ApprovalStatusCodeText
   * @type {Edm.String} 
   */
  ApprovalStatusCodeText

  /**
   * ApprovalStatusText
   * @type {Edm.String} 
   */
  ApprovalStatusText

  /**
   * 审批人
   * @type {Edm.String} 
   */
  Approver

  /**
   * 审批人ID
   * @type {Edm.String} 
   */
  ApproverID

  /**
   * 分配时间
   * @type {Edm.DateTimeOffset} 
   */
  ArrageDateTime

  /**
   * 到店次数
   * @type {Edm.Decimal} 
   */
  ArrivalTimes

  /**
   * A转H时间
   * @type {Edm.DateTimeOffset} 
   */
  AtoHDateTime

  /**
   * A转H时效
   * @type {Edm.String} 
   */
  AtoHDuration

  /**
   * 生日
   * @type {Edm.DateTime} 
   */
  BirthDate

  /**
   * B转A时间
   * @type {Edm.DateTimeOffset} 
   */
  BtoADateTime

  /**
   * B转A时效
   * @type {Edm.String} 
   */
  BtoADuration

  /**
   * 购车预算(万元)
   * @type {Edm.Decimal} 
   */
  Budget

  /**
   * Contact Information Function
   * @type {Edm.String} 
   */
  BusinessPartnerRelationshipBusinessPartnerFunctionTypeCode

  /**
   * Contact Information Department
   * @type {Edm.String} 
   */
  BusinessPartnerRelationshipBusinessPartnerFunctionalAreaCode

  /**
   * Contact Information VIP Contact
   * @type {Edm.String} 
   */
  BusinessPartnerRelationshipContactVIPReasonCode

  /**
   * Contact Information Engagement Score
   * @type {Edm.String} 
   */
  BusinessPartnerRelationshipEngagementScoreNumberValue

  /**
   * 购买方式
   * @type {Edm.String} 
   */
  BuyMethod2

  /**
   * BuyMethod2Text
   * @type {Edm.String} 
   */
  BuyMethod2Text

  /**
   * Campaign ID
   * @type {Edm.String} 
   */
  CampaignID

  /**
   * 退订时间
   * @type {Edm.DateTimeOffset} 
   */
  CancelOrderTime

  /**
   * 证件号码
   * @type {Edm.String} 
   */
  CertificateID

  /**
   * 证件类型
   * @type {Edm.String} 
   */
  CertificateTyep

  /**
   * CertificateTyepText
   * @type {Edm.String} 
   */
  CertificateTyepText

  /**
   * Changed By
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * 城市ID
   * @type {Edm.String} 
   */
  CityID

  /**
   * 城市
   * @type {Edm.String} 
   */
  CityName2

  /**
   * Company
   * @type {Edm.String} 
   */
  Company

  /**
   * Account Information Addtional Name 3
   * @type {Edm.String} 
   */
  CompanyFourthName

  /**
   * Account Information Additional Name
   * @type {Edm.String} 
   */
  CompanySecondName

  /**
   * Account Information Additional Name 2
   * @type {Edm.String} 
   */
  CompanyThirdName

  /**
   * 竞品车型补充
   * @type {Edm.String} 
   */
  CompetitorNotes

  /**
   * Consistency Status
   * @type {Edm.String} 
   */
  ConsistencyStatusCode

  /**
   * ConsistencyStatusCodeText
   * @type {Edm.String} 
   */
  ConsistencyStatusCodeText

  /**
   * Contact Information Academic Title
   * @type {Edm.String} 
   */
  ContactAcademicTitleCode

  /**
   * Contact Information Additional Academic Title
   * @type {Edm.String} 
   */
  ContactAdditionalAcademicTitleCode

  /**
   * Contact Information Contact Permission
   * @type {Edm.String} 
   */
  ContactAllowedCode

  /**
   * Contact Information Building
   * @type {Edm.String} 
   */
  ContactBuildingID

  /**
   * Contact Information Language
   * @type {Edm.String} 
   */
  ContactCorrespondenceLanguageCode

  /**
   * Contact Information Department from Business Card
   * @type {Edm.String} 
   */
  ContactDepartmentName

  /**
   * Contact Information EMail
   * @type {Edm.String} 
   */
  ContactEMail

  /**
   * Contact Information E-Mail Invalid
   * @type {Edm.String} 
   */
  ContactEMailUsageDeniedIndicator

  /**
   * Contact Information Fax
   * @type {Edm.String} 
   */
  ContactFacsimileFormattedNumberDescription

  /**
   * Contact First Name
   * @type {Edm.String} 
   */
  ContactFirstName

  /**
   * Contact Information Floor
   * @type {Edm.String} 
   */
  ContactFloorID

  /**
   * Contact Information Title
   * @type {Edm.String} 
   */
  ContactFormOfAddressCode

  /**
   * Contact Information Job Title
   * @type {Edm.String} 
   */
  ContactFunctionalTitleName

  /**
   * Contact Information Gender
   * @type {Edm.String} 
   */
  ContactGenderCode

  /**
   * Main Contact ID
   * @type {Edm.String} 
   */
  ContactID

  /**
   * Contact Last Name
   * @type {Edm.String} 
   */
  ContactLastName

  /**
   * Contact Information Marital Status
   * @type {Edm.String} 
   */
  ContactMaritalStatusCode

  /**
   * Contact Middle Name
   * @type {Edm.String} 
   */
  ContactMiddleName

  /**
   * Contact Information Mobile
   * @type {Edm.String} 
   */
  ContactMobile

  /**
   * Main Contact Name
   * @type {Edm.String} 
   */
  ContactName

  /**
   * Contact Information Nickname
   * @type {Edm.String} 
   */
  ContactNickName

  /**
   * Contact Information Note
   * @type {Edm.String} 
   */
  ContactNote

  /**
   * Contact Information Phone
   * @type {Edm.String} 
   */
  ContactPhone

  /**
   * Contact Information Room
   * @type {Edm.String} 
   */
  ContactRoomID

  /**
   * Contact UUID
   * @type {Edm.Guid} 
   */
  ContactUUID

  /**
   * 国家/地区
   * @type {Edm.String} 
   */
  Country

  /**
   * CountryText
   * @type {Edm.String} 
   */
  CountryText

  /**
   * 区县
   * @type {Edm.String} 
   */
  County

  /**
   * 创建来源
   * @type {Edm.String} 
   */
  CreatSoucre

  /**
   * CreatSoucreText
   * @type {Edm.String} 
   */
  CreatSoucreText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Creation Date Time
   * @type {Edm.DateTimeOffset} 
   */
  CreationDateTime

  /**
   * CreationIdentityUUID
   * @type {Edm.Guid} 
   */
  CreationIdentityUUID

  /**
   * 创建人名
   * @type {Edm.String} 
   */
  Creator

  /**
   * 创建人ID
   * @type {Edm.String} 
   */
  CreatorID

  /**
   * C转B时间
   * @type {Edm.DateTimeOffset} 
   */
  CtoBDateTime

  /**
   * C转B时效
   * @type {Edm.String} 
   */
  CtoBDuration

  /**
   * 客户编码
   * @type {Edm.String} 
   */
  CustomerID

  /**
   * CustomerIntentioncontent
   * @type {Edm.String} 
   */
  CustomerIntentioncontent

  /**
   * CustomerIntentioncontentText
   * @type {Edm.String} 
   */
  CustomerIntentioncontentText

  /**
   * CustomerUUIDcontent
   * @type {Edm.Guid} 
   */
  CustomerUUIDcontent

  /**
   * DMS合同编号
   * @type {Edm.String} 
   */
  DMSContractID

  /**
   * 经销商集团
   * @type {Edm.String} 
   */
  DealerGroup

  /**
   * 经销商ID
   * @type {Edm.String} 
   */
  DealerID

  /**
   * 经销商名
   * @type {Edm.String} 
   */
  Dearler

  /**
   * DepositAmountcontent
   * @type {Edm.Decimal} 
   */
  DepositAmountcontent

  /**
   * DepositAmountcurrencyCode
   * @type {Edm.String} 
   */
  DepositAmountcurrencyCode

  /**
   * DepositAmountcurrencyCodeText
   * @type {Edm.String} 
   */
  DepositAmountcurrencyCodeText

  /**
   * 下定时间
   * @type {Edm.DateTimeOffset} 
   */
  DepositTime

  /**
   * 派发时间
   * @type {Edm.DateTimeOffset} 
   */
  DistributeDateTime

  /**
   * 派发时效
   * @type {Edm.String} 
   */
  DistributeDuration

  /**
   * Distribution Channel
   * @type {Edm.String} 
   */
  DistributionChannelCode

  /**
   * DistributionChannelCodeText
   * @type {Edm.String} 
   */
  DistributionChannelCodeText

  /**
   * Division
   * @type {Edm.String} 
   */
  DivisionCode

  /**
   * DivisionCodeText
   * @type {Edm.String} 
   */
  DivisionCodeText

  /**
   * 电商核销时间
   * @type {Edm.DateTimeOffset} 
   */
  ECommerceCheckTime

  /**
   * 电商名
   * @type {Edm.String} 
   */
  ECommerceName

  /**
   * 电商订单ID
   * @type {Edm.String} 
   */
  ECommerceOrderID

  /**
   * 电商付款时间
   * @type {Edm.DateTimeOffset} 
   */
  ECommercePayTime

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Emailcontent
   * @type {Edm.String} 
   */
  Emailcontent

  /**
   * EmployeeResponsibleUUID
   * @type {Edm.Guid} 
   */
  EmployeeResponsibleUUID

  /**
   * End Date
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * Expected Revenue Value
   * @type {Edm.Decimal} 
   */
  ExpectedRevenueAmount

  /**
   * Expected Revenue Amount Currency
   * @type {Edm.String} 
   */
  ExpectedRevenueCurrencyCode

  /**
   * ExpectedRevenueCurrencyCodeText
   * @type {Edm.String} 
   */
  ExpectedRevenueCurrencyCodeText

  /**
   * External ID
   * @type {Edm.String} 
   */
  ExternalID

  /**
   * 首次跟进时间
   * @type {Edm.DateTimeOffset} 
   */
  FirstActionTime

  /**
   * 首触渠道
   * @type {Edm.String} 
   */
  FirstTouch

  /**
   * 首触时间
   * @type {Edm.DateTimeOffset} 
   */
  FirstTouchDateTime

  /**
   * 客户名称
   * @type {Edm.String} 
   */
  FullName

  /**
   * 性别
   * @type {Edm.String} 
   */
  Gender

  /**
   * GenderText
   * @type {Edm.String} 
   */
  GenderText

  /**
   * Category
   * @type {Edm.String} 
   */
  GroupCode

  /**
   * GroupCodeText
   * @type {Edm.String} 
   */
  GroupCodeText

  /**
   * 是否核验
   * @type {Edm.Boolean} 
   */
  HasChecked

  /**
   * 是否清洗
   * @type {Edm.Boolean} 
   */
  HasCleaned

  /**
   * 兴趣爱好
   * @type {Edm.String} 
   */
  Hobby

  /**
   * H转下订时效
   * @type {Edm.String} 
   */
  HtoDepositDuration

  /**
   * 下订转成交时效
   * @type {Edm.String} 
   */
  HtoOrderDuration

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * 失效时间
   * @type {Edm.DateTimeOffset} 
   */
  InActiveTime

  /**
   * Individual Customer Information ABC Classification
   * @type {Edm.String} 
   */
  IndividualCustomerABCClassificationCode

  /**
   * Individual Customer Information Academic Title
   * @type {Edm.String} 
   */
  IndividualCustomerAcademicTitleCode

  /**
   * Individual Customer Information City
   * @type {Edm.String} 
   */
  IndividualCustomerAddressCity

  /**
   * Individual Customer Information Country
   * @type {Edm.String} 
   */
  IndividualCustomerAddressCountry

  /**
   * Individual Customer Information County Name
   * @type {Edm.String} 
   */
  IndividualCustomerAddressCountyName

  /**
   * Individual Customer Information House Number
   * @type {Edm.String} 
   */
  IndividualCustomerAddressHouseID

  /**
   * Individual Customer Information Postal Code
   * @type {Edm.String} 
   */
  IndividualCustomerAddressPostalCode

  /**
   * Individual Customer Information State
   * @type {Edm.String} 
   */
  IndividualCustomerAddressState

  /**
   * Individual Customer Information Street Name
   * @type {Edm.String} 
   */
  IndividualCustomerAddressStreetName

  /**
   * Individual Customer Information Date of Birth
   * @type {Edm.DateTime} 
   */
  IndividualCustomerBirthDate

  /**
   * Individual Customer Information Contact Permission
   * @type {Edm.String} 
   */
  IndividualCustomerContactAllowedCode

  /**
   * Individual Customer Information E-Mail
   * @type {Edm.String} 
   */
  IndividualCustomerEMail

  /**
   * Last Name of Indiv. Customer
   * @type {Edm.String} 
   */
  IndividualCustomerFamilyName

  /**
   * Individual Customer Information Fax
   * @type {Edm.String} 
   */
  IndividualCustomerFax

  /**
   * Individual Customer Information Title
   * @type {Edm.String} 
   */
  IndividualCustomerFormOfAddressCode

  /**
   * Individual Customer Information Gender
   * @type {Edm.String} 
   */
  IndividualCustomerGenderCode

  /**
   * First Name of Indiv. Customer
   * @type {Edm.String} 
   */
  IndividualCustomerGivenName

  /**
   * Individual Customer Information Initials
   * @type {Edm.String} 
   */
  IndividualCustomerInitialsName

  /**
   * Individual Customer Information Marital Status
   * @type {Edm.String} 
   */
  IndividualCustomerMaritalStatusCode

  /**
   * Middle Name of Indiv. Customer
   * @type {Edm.String} 
   */
  IndividualCustomerMiddleName

  /**
   * Individual Customer Information Mobile
   * @type {Edm.String} 
   */
  IndividualCustomerMobile

  /**
   * Individual Customer Information Prefix
   * @type {Edm.String} 
   */
  IndividualCustomerNamePrefixCode

  /**
   * Individual Customer Information Nationality
   * @type {Edm.String} 
   */
  IndividualCustomerNationalityCountryCode

  /**
   * Individual Customer Information Language
   * @type {Edm.String} 
   */
  IndividualCustomerNonVerbalCommunicationLanguageCode

  /**
   * Individual Customer Information Profession
   * @type {Edm.String} 
   */
  IndividualCustomerOccupationCode

  /**
   * Individual Customer Information Phone
   * @type {Edm.String} 
   */
  IndividualCustomerPhone

  /**
   * 意向车型ID
   * @type {Edm.String} 
   */
  IntentionCarCategoryID

  /**
   * 意向车型
   * @type {Edm.String} 
   */
  IntentionCarName

  /**
   * 意向车型一层
   * @type {Edm.String} 
   */
  IntentionCarNameLevel1

  /**
   * 意向车型二层
   * @type {Edm.String} 
   */
  IntentionCarNameLevel2

  /**
   * 意向车型三层
   * @type {Edm.String} 
   */
  IntentionCarNameLevel3

  /**
   * 意向车型四层
   * @type {Edm.String} 
   */
  IntentionCarNameLevel4

  /**
   * 意向车型五层
   * @type {Edm.String} 
   */
  IntentionCarNameLevel5

  /**
   * 意向车型一层ID
   * @type {Edm.String} 
   */
  IntentionCaraCategoryLevel1ID

  /**
   * 意向车型二层ID
   * @type {Edm.String} 
   */
  IntentionCaraCategoryLevel2ID

  /**
   * 意向车型三层ID
   * @type {Edm.String} 
   */
  IntentionCaraCategoryLevel3ID

  /**
   * 意向车型四层ID
   * @type {Edm.String} 
   */
  IntentionCaraCategoryLevel4ID

  /**
   * 意向车型五层ID
   * @type {Edm.String} 
   */
  IntentionCaraCategoryLevel5ID

  /**
   * 颜色
   * @type {Edm.String} 
   */
  IntentionColor

  /**
   * 颜色MappingID
   * @type {Edm.String} 
   */
  IntentionColorID

  /**
   * IntentionDiscountAmountcontent
   * @type {Edm.Decimal} 
   */
  IntentionDiscountAmountcontent

  /**
   * IntentionDiscountAmountcurrencyCode
   * @type {Edm.String} 
   */
  IntentionDiscountAmountcurrencyCode

  /**
   * IntentionDiscountAmountcurrencyCodeText
   * @type {Edm.String} 
   */
  IntentionDiscountAmountcurrencyCodeText

  /**
   * 意向购车时间
   * @type {Edm.DateTime} 
   */
  IntentionOrderTime

  /**
   * 线上互动次数
   * @type {Edm.Decimal} 
   */
  InteractionTimes

  /**
   * InvoiceAmountcontent
   * @type {Edm.Decimal} 
   */
  InvoiceAmountcontent

  /**
   * InvoiceAmountcurrencyCode
   * @type {Edm.String} 
   */
  InvoiceAmountcurrencyCode

  /**
   * InvoiceAmountcurrencyCodeText
   * @type {Edm.String} 
   */
  InvoiceAmountcurrencyCodeText

  /**
   * 开票车型
   * @type {Edm.String} 
   */
  InvoiceCar

  /**
   * 开票车型
   * @type {Edm.String} 
   */
  InvoiceCarID2

  /**
   * 发票代码
   * @type {Edm.String} 
   */
  InvoiceCodeID

  /**
   * 开票日期
   * @type {Edm.DateTime} 
   */
  InvoiceDate

  /**
   * 发票号码
   * @type {Edm.String} 
   */
  InvoiceID

  /**
   * 是否代办上牌保险
   * @type {Edm.Boolean} 
   */
  IsAgentService

  /**
   * 是否逾期未分配
   * @type {Edm.Boolean} 
   */
  IsArrangeOverDue

  /**
   * 是否公司购车
   * @type {Edm.Boolean} 
   */
  IsBuyForCompany

  /**
   * 是否本人购车
   * @type {Edm.Boolean} 
   */
  IsBuyForSelf

  /**
   * 是否保客
   * @type {Edm.Boolean} 
   */
  IsCustomer

  /**
   * 是否逾期未派发
   * @type {Edm.Boolean} 
   */
  IsDistributeOverDue

  /**
   * 是否电商下定
   * @type {Edm.Boolean} 
   */
  IsECommerceDeposit

  /**
   * 是否集团客户
   * @type {Edm.Boolean} 
   */
  IsGroupCompany

  /**
   * 是否需要自动检查
   * @type {Edm.Boolean} 
   */
  IsNeedAutoCheck

  /**
   * 需要更新Mykt
   * @type {Edm.Boolean} 
   */
  IsNeedUpdateMykt

  /**
   * Last Change Date Time
   * @type {Edm.DateTimeOffset} 
   */
  LastChangeDateTime

  /**
   * LastChangeIdentityUUID
   * @type {Edm.Guid} 
   */
  LastChangeIdentityUUID

  /**
   * 线索级别-人工
   * @type {Edm.String} 
   */
  LeadLevel

  /**
   * LeadLevelText
   * @type {Edm.String} 
   */
  LeadLevelText

  /**
   * LeadOwnerShipcontent
   * @type {Edm.String} 
   */
  LeadOwnerShipcontent

  /**
   * LeadOwnerShipcontentText
   * @type {Edm.String} 
   */
  LeadOwnerShipcontentText

  /**
   * 线索评级-系统
   * @type {Edm.Decimal} 
   */
  LeadPoints

  /**
   * 线索来源一级ID
   * @type {Edm.String} 
   */
  LeadSource1ID

  /**
   * 线索来源一级
   * @type {Edm.String} 
   */
  LeadSource1Name

  /**
   * 线索来源二级ID
   * @type {Edm.String} 
   */
  LeadSource2ID

  /**
   * 线索来源二级
   * @type {Edm.String} 
   */
  LeadSource2Name

  /**
   * 线索来源三级ID
   * @type {Edm.String} 
   */
  LeadSource3ID

  /**
   * 线索来源三级
   * @type {Edm.String} 
   */
  LeadSource3Name

  /**
   * Life Cycle Status
   * @type {Edm.String} 
   */
  LifeCycleStatusCode

  /**
   * LifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  LifeCycleStatusCodeText

  /**
   * LoseReason2content
   * @type {Edm.String} 
   */
  LoseReason2content

  /**
   * LoseReason2contentText
   * @type {Edm.String} 
   */
  LoseReason2contentText

  /**
   * 确认战败/流失时间
   * @type {Edm.DateTimeOffset} 
   */
  LoseTime

  /**
   * MainPurchaseFocuscontent
   * @type {Edm.String} 
   */
  MainPurchaseFocuscontent

  /**
   * MainPurchaseFocuscontentText
   * @type {Edm.String} 
   */
  MainPurchaseFocuscontentText

  /**
   * MaritalStatuscontent
   * @type {Edm.String} 
   */
  MaritalStatuscontent

  /**
   * MaritalStatuscontentText
   * @type {Edm.String} 
   */
  MaritalStatuscontentText

  /**
   * Marketing Unit Name
   * @type {Edm.String} 
   */
  MarketingUnitName

  /**
   * Marketing Unit Party ID
   * @type {Edm.String} 
   */
  MarketingUnitPartyID

  /**
   * Marketing Unit Party UUID
   * @type {Edm.Guid} 
   */
  MarketingUnitPartyUUID

  /**
   * 手机号码
   * @type {Edm.String} 
   */
  Mobile

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * Name Language Code
   * @type {Edm.String} 
   */
  NameLanguageCode

  /**
   * NameLanguageCodeText
   * @type {Edm.String} 
   */
  NameLanguageCodeText

  /**
   * Note
   * @type {Edm.String} 
   */
  Note

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Occupationcontent
   * @type {Edm.String} 
   */
  Occupationcontent

  /**
   * OccupationcontentText
   * @type {Edm.String} 
   */
  OccupationcontentText

  /**
   * 成交时间
   * @type {Edm.DateTimeOffset} 
   */
  OrderTime

  /**
   * Account Information ABC Classification
   * @type {Edm.String} 
   */
  OrganisationAccountABCClassificationCode

  /**
   * Customer Information Contact Permission
   * @type {Edm.String} 
   */
  OrganisationAccountContactAllowedCode

  /**
   * Account Information Industry
   * @type {Edm.String} 
   */
  OrganisationAccountIndustrialSectorCode

  /**
   * Source
   * @type {Edm.String} 
   */
  OriginTypeCode

  /**
   * OriginTypeCodeText
   * @type {Edm.String} 
   */
  OriginTypeCodeText

  /**
   * Owner Party ID
   * @type {Edm.String} 
   */
  OwnerPartyID

  /**
   * Owner Party ID  (Sales)
   * @type {Edm.String} 
   */
  OwnerPartyIDSales

  /**
   * OwnerPartyName
   * @type {Edm.String} 
   */
  OwnerPartyName

  /**
   * Owner Party UUID
   * @type {Edm.Guid} 
   */
  OwnerPartyUUID

  /**
   * Owner Party UUID (Sales)
   * @type {Edm.Guid} 
   */
  OwnerPartyUUIDSales

  /**
   * Owner (Sales)
   * @type {Edm.String} 
   */
  OwnerSalesName

  /**
   * Paymentcontent
   * @type {Edm.String} 
   */
  Paymentcontent

  /**
   * PaymentcontentText
   * @type {Edm.String} 
   */
  PaymentcontentText

  /**
   * 固定号码
   * @type {Edm.String} 
   */
  Phone

  /**
   * 邮编
   * @type {Edm.String} 
   */
  PostCode

  /**
   * Priority
   * @type {Edm.String} 
   */
  PriorityCode

  /**
   * PriorityCodeText
   * @type {Edm.String} 
   */
  PriorityCodeText

  /**
   * 合格证号码
   * @type {Edm.String} 
   */
  ProofCertificateID

  /**
   * PurchaseUsecontent
   * @type {Edm.String} 
   */
  PurchaseUsecontent

  /**
   * PurchaseUsecontentText
   * @type {Edm.String} 
   */
  PurchaseUsecontentText

  /**
   * QQ号
   * @type {Edm.String} 
   */
  QQID

  /**
   * Qualification Level
   * @type {Edm.String} 
   */
  QualificationLevelCode

  /**
   * QualificationLevelCodeText
   * @type {Edm.String} 
   */
  QualificationLevelCodeText

  /**
   * Regioncontent
   * @type {Edm.String} 
   */
  Regioncontent

  /**
   * RegioncontentText
   * @type {Edm.String} 
   */
  RegioncontentText

  /**
   * Reason Code
   * @type {Edm.String} 
   */
  ResultReasonCode

  /**
   * ResultReasonCodeText
   * @type {Edm.String} 
   */
  ResultReasonCodeText

  /**
   * 退回原因
   * @type {Edm.String} 
   */
  ReturnReason

  /**
   * 退货时间
   * @type {Edm.DateTimeOffset} 
   */
  ReturnTime

  /**
   * 销售代表
   * @type {Edm.String} 
   */
  Sales

  /**
   * 实销延迟原因
   * @type {Edm.String} 
   */
  SalesDelayReason

  /**
   * Sales Group
   * @type {Edm.String} 
   */
  SalesGroupID

  /**
   * SalesGroupUUID
   * @type {Edm.Guid} 
   */
  SalesGroupUUID

  /**
   * 销售代表ID
   * @type {Edm.String} 
   */
  SalesID

  /**
   * 销售经理
   * @type {Edm.String} 
   */
  SalesManager

  /**
   * 销售经理ID
   * @type {Edm.String} 
   */
  SalesManagerID

  /**
   * Sales Office
   * @type {Edm.String} 
   */
  SalesOfficeID

  /**
   * SalesOfficeUUID
   * @type {Edm.Guid} 
   */
  SalesOfficeUUID

  /**
   * Sales Organisation
   * @type {Edm.String} 
   */
  SalesOrganisationID

  /**
   * SalesOrganisationUUID
   * @type {Edm.Guid} 
   */
  SalesOrganisationUUID

  /**
   * Sales Territory ID
   * @type {Edm.String} 
   */
  SalesTerritoryID

  /**
   * Sales Territory Name
   * @type {Edm.String} 
   */
  SalesTerritoryName

  /**
   * Sales Territory UUID
   * @type {Edm.Guid} 
   */
  SalesTerritoryUUID

  /**
   * Sales Unit Name
   * @type {Edm.String} 
   */
  SalesUnitName

  /**
   * Sales Unit Party ID
   * @type {Edm.String} 
   */
  SalesUnitPartyID

  /**
   * Sales Unit Party UUID
   * @type {Edm.Guid} 
   */
  SalesUnitPartyUUID

  /**
   * 接待结果
   * @type {Edm.String} 
   */
  ServeResult

  /**
   * 交车时间
   * @type {Edm.DateTimeOffset} 
   */
  ShipmentTime

  /**
   * 原始线索ID
   * @type {Edm.String} 
   */
  SourceLeadID

  /**
   * 特销号
   * @type {Edm.String} 
   */
  SpecialSalesID

  /**
   * Start Date
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * Survey Score
   * @type {Edm.Int32} 
   */
  SurveyTotalScoreValue

  /**
   * Status
   * @type {Edm.String} 
   */
  UserStatusCode

  /**
   * UserStatusCodeText
   * @type {Edm.String} 
   */
  UserStatusCodeText

  /**
   * VIN码/底盘码
   * @type {Edm.String} 
   */
  VINCode

  /**
   * 微信号
   * @type {Edm.String} 
   */
  WechatID

  /**
   * 微信OpneID
   * @type {Edm.String} 
   */
  WechatOpenID

  /**
   * 微博号
   * @type {Edm.String} 
   */
  WeiboID

  /**
   * YmktContactUUIDcontent
   * @type {Edm.Guid} 
   */
  YmktContactUUIDcontent

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLeadAttachmentFolder|LeanLeadAttachmentFolder[]} 
   */
  LeanLeadAttachmentFolder

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLeadBusinessTransactionDocumentReference|LeanLeadBusinessTransactionDocumentReference[]} 
   */
  LeanLeadBusinessTransactionDocumentReference

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLeadContact|LeanLeadContact[]} 
   */
  LeanLeadContact

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLeadExternalParty|LeanLeadExternalParty[]} 
   */
  LeanLeadExternalParty

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLeadItem|LeanLeadItem[]} 
   */
  LeanLeadItem

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLeadSalesAndMarketingTeam|LeanLeadSalesAndMarketingTeam[]} 
   */
  LeanLeadSalesAndMarketingTeam

}

/**
 * LeanLeadAttachmentFolder
 * 
 * @class LeanLeadAttachmentFolder
 */
export class LeanLeadAttachmentFolder extends C4CEntity {

  /**
   * 
   * @type {LeanLeadAttachmentFolder} 
   */
  _type = LeanLeadAttachmentFolder

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * LeanLeadBusinessTransactionDocumentReference
 * 
 * @class LeanLeadBusinessTransactionDocumentReference
 */
export class LeanLeadBusinessTransactionDocumentReference extends C4CEntity {

  /**
   * 
   * @type {LeanLeadBusinessTransactionDocumentReference} 
   */
  _type = LeanLeadBusinessTransactionDocumentReference

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ItemID
   * @type {Edm.String} 
   */
  ItemID

  /**
   * ItemTypeCode
   * @type {Edm.String} 
   */
  ItemTypeCode

  /**
   * ItemTypeCodeText
   * @type {Edm.String} 
   */
  ItemTypeCodeText

  /**
   * ItemUUID
   * @type {Edm.Guid} 
   */
  ItemUUID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Appointment|Appointment[]} 
   */
  Appointment

  /**
   * 
   * @type {DeferredNavigationProperty|EMail|EMail[]} 
   */
  EMail

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLead|LeanLead[]} 
   */
  LeanLead

  /**
   * 
   * @type {DeferredNavigationProperty|PhoneCall|PhoneCall[]} 
   */
  PhoneCall

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequest|ServiceRequest[]} 
   */
  ServiceRequest

  /**
   * 
   * @type {DeferredNavigationProperty|Task|Task[]} 
   */
  Task

}

/**
 * LeanLeadContact
 * 
 * @class LeanLeadContact
 */
export class LeanLeadContact extends C4CEntity {

  /**
   * 
   * @type {LeanLeadContact} 
   */
  _type = LeanLeadContact

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Main
   * @type {Edm.Boolean} 
   */
  MainIndicator

  /**
   * Mobile
   * @type {Edm.String} 
   */
  Mobile

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Party ID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * Party Name
   * @type {Edm.String} 
   */
  PartyName

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLead|LeanLead[]} 
   */
  LeanLead

}

/**
 * LeanLeadExternalParty
 * 
 * @class LeanLeadExternalParty
 */
export class LeanLeadExternalParty extends C4CEntity {

  /**
   * 
   * @type {LeanLeadExternalParty} 
   */
  _type = LeanLeadExternalParty

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Primary
   * @type {Edm.Boolean} 
   */
  MainIndicator

  /**
   * Primary Contact ID
   * @type {Edm.String} 
   */
  MainPartyContactPartyID

  /**
   * Primary Contact Name
   * @type {Edm.String} 
   */
  MainPartyContactPartyName

  /**
   * Primary Contact UUID
   * @type {Edm.Guid} 
   */
  MainPartyContactPartyUUID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Party ID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * Party Name
   * @type {Edm.String} 
   */
  PartyName

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Role
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLead|LeanLead[]} 
   */
  LeanLead

}

/**
 * LeanLeadItem
 * 
 * @class LeanLeadItem
 */
export class LeanLeadItem extends C4CEntity {

  /**
   * 
   * @type {LeanLeadItem} 
   */
  _type = LeanLeadItem

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Description
   * @type {Edm.String} 
   */
  Description

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Product Category Description
   * @type {Edm.String} 
   */
  ProductCategoryDescription

  /**
   * Catetory
   * @type {Edm.String} 
   */
  ProductCategoryInternalID

  /**
   * Product ID
   * @type {Edm.String} 
   */
  ProductID

  /**
   * Product Description
   * @type {Edm.String} 
   */
  ProductName

  /**
   * Product UUID
   * @type {Edm.Guid} 
   */
  ProductUUID

  /**
   * Quantity
   * @type {Edm.Decimal} 
   */
  Quantity

  /**
   * Quantity UnitCode
   * @type {Edm.String} 
   */
  unitCode

  /**
   * unitCodeText
   * @type {Edm.String} 
   */
  unitCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLead|LeanLead[]} 
   */
  LeanLead

}

/**
 * LeanLeadSalesAndMarketingTeam
 * 
 * @class LeanLeadSalesAndMarketingTeam
 */
export class LeanLeadSalesAndMarketingTeam extends C4CEntity {

  /**
   * 
   * @type {LeanLeadSalesAndMarketingTeam} 
   */
  _type = LeanLeadSalesAndMarketingTeam

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Primary
   * @type {Edm.Boolean} 
   */
  MainIndicator

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Party ID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * Party Name
   * @type {Edm.String} 
   */
  PartyName

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Role
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|LeanLead|LeanLead[]} 
   */
  LeanLead

}

/**
 * Opportunity
 * 
 * @class Opportunity
 */
export class Opportunity extends C4CEntity {

  /**
   * 
   * @type {Opportunity} 
   */
  _type = Opportunity

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Account
   * @type {Edm.String} 
   */
  AccountID

  /**
   * Account Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  AccountName

  /**
   * Account UUID
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Approval Status
   * @type {Edm.String} 
   */
  ApprovalStatusCode

  /**
   * ApprovalStatusCodeText
   * @type {Edm.String} 
   */
  ApprovalStatusCodeText

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Name
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * Changed By UUID
   * @type {Edm.Guid} 
   */
  ChangedByUUID

  /**
   * Changed On
   * @type {Edm.DateTimeOffset} 
   */
  ChangedOn

  /**
   * Close Date
   * @type {Edm.DateTime} 
   */
  CloseDate

  /**
   * Consistency Status
   * @type {Edm.String} 
   */
  ConsistencyStatusCode

  /**
   * ConsistencyStatusCodeText
   * @type {Edm.String} 
   */
  ConsistencyStatusCodeText

  /**
   * Name
   * @type {Edm.String} 
   */
  CreatedByFormattedName

  /**
   * Created By UUID
   * @type {Edm.Guid} 
   */
  CreatedByUUID

  /**
   * Created On
   * @type {Edm.DateTimeOffset} 
   */
  CreatedOn

  /**
   * Custom Status
   * @type {Edm.String} 
   */
  CustomStatusCode

  /**
   * CustomStatusCodeText
   * @type {Edm.String} 
   */
  CustomStatusCodeText

  /**
   * Distribution Channel
   * @type {Edm.String} 
   */
  DistributionChannelCode

  /**
   * DistributionChannelCodeText
   * @type {Edm.String} 
   */
  DistributionChannelCodeText

  /**
   * Division
   * @type {Edm.String} 
   */
  DivisionCode

  /**
   * DivisionCodeText
   * @type {Edm.String} 
   */
  DivisionCodeText

  /**
   * Document Type
   * @type {Edm.String} 
   */
  DocumentTypeCode

  /**
   * DocumentTypeCodeText
   * @type {Edm.String} 
   */
  DocumentTypeCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Expected Value
   * @type {c4codata.Amount} 
   */
  ExpectedValue

  /**
   * Forecast Category
   * @type {Edm.String} 
   */
  ForecastCategoryCode

  /**
   * ForecastCategoryCodeText
   * @type {Edm.String} 
   */
  ForecastCategoryCodeText

  /**
   * Last Change Date
   * @type {Edm.DateTime} 
   */
  LastChangeDate

  /**
   * Name
   * @type {c4codata.ENCRYPTED_EXTENDED_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Opportunity ID
   * @type {Edm.String} 
   */
  OpportunityID

  /**
   * Owner ID
   * @type {Edm.String} 
   */
  OwnerID

  /**
   * Owner Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  OwnerName

  /**
   * Owner UUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * Contact
   * @type {Edm.String} 
   */
  PrimaryContactID

  /**
   * Contact Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  PrimaryContactName

  /**
   * Contact UUID
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * Priority
   * @type {Edm.String} 
   */
  PriorityCode

  /**
   * PriorityCodeText
   * @type {Edm.String} 
   */
  PriorityCodeText

  /**
   * Probability
   * @type {Edm.Decimal} 
   */
  ProbabilityPercent

  /**
   * Progress
   * @type {Edm.String} 
   */
  ProgressCode

  /**
   * ProgressCodeText
   * @type {Edm.String} 
   */
  ProgressCodeText

  /**
   * Relevant for Forecast
   * @type {Edm.Boolean} 
   */
  PublishToForecast

  /**
   * Reason for Status
   * @type {Edm.String} 
   */
  ReasonForStatusCode

  /**
   * ReasonForStatusCodeText
   * @type {Edm.String} 
   */
  ReasonForStatusCodeText

  /**
   * Sales Cycle
   * @type {Edm.String} 
   */
  SalesCycleCode

  /**
   * SalesCycleCodeText
   * @type {Edm.String} 
   */
  SalesCycleCodeText

  /**
   * Sales Group
   * @type {Edm.String} 
   */
  SalesGroupID

  /**
   * Sales Office
   * @type {Edm.String} 
   */
  SalesOfficeID

  /**
   * Sales Organisation
   * @type {Edm.String} 
   */
  SalesOrganisationID

  /**
   * Sales Organisation UUID
   * @type {Edm.Guid} 
   */
  SalesOrganisationUUID

  /**
   * Sales Phase
   * @type {Edm.String} 
   */
  SalesPhaseCode

  /**
   * SalesPhaseCodeText
   * @type {Edm.String} 
   */
  SalesPhaseCodeText

  /**
   * Sales Territory
   * @type {Edm.String} 
   */
  SalesTerritoryID

  /**
   * Sales Territory UUID
   * @type {Edm.Guid} 
   */
  SalesTerritoryUUID

  /**
   * Sales Unit
   * @type {Edm.String} 
   */
  SalesUnitID

  /**
   * Sales Unit UUID
   * @type {Edm.Guid} 
   */
  SalesUnitUUID

  /**
   * Source
   * @type {Edm.String} 
   */
  SourceCode

  /**
   * SourceCodeText
   * @type {Edm.String} 
   */
  SourceCodeText

  /**
   * Start Date
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Total Negotiated Value
   * @type {c4codata.Amount} 
   */
  TotalNegotiatedValue

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * Weighted Value
   * @type {c4codata.Amount} 
   */
  WeightedValue

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityAppointmentSalesActivity|OpportunityAppointmentSalesActivity[]} 
   */
  OpportunityAppointmentSalesActivity

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityAttachment|OpportunityAttachment[]} 
   */
  OpportunityAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityBusinessDocumentReference|OpportunityBusinessDocumentReference[]} 
   */
  OpportunityBusinessDocumentReference

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityContact|OpportunityContact[]} 
   */
  OpportunityContact

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityEMailSalesActivity|OpportunityEMailSalesActivity[]} 
   */
  OpportunityEMailSalesActivity

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityInvolvedParties|OpportunityInvolvedParties[]} 
   */
  OpportunityInvolvedParties

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityNotes|OpportunityNotes[]} 
   */
  OpportunityNotes

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityPhoneCallSalesActivity|OpportunityPhoneCallSalesActivity[]} 
   */
  OpportunityPhoneCallSalesActivity

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityProduct|OpportunityProduct[]} 
   */
  OpportunityProduct

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunitySalesTeam|OpportunitySalesTeam[]} 
   */
  OpportunitySalesTeam

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityTaskSalesActivity|OpportunityTaskSalesActivity[]} 
   */
  OpportunityTaskSalesActivity

}

/**
 * OpportunityAppointmentSalesActivity
 * 
 * @class OpportunityAppointmentSalesActivity
 */
export class OpportunityAppointmentSalesActivity extends C4CEntity {

  /**
   * 
   * @type {OpportunityAppointmentSalesActivity} 
   */
  _type = OpportunityAppointmentSalesActivity

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * DueDateTime
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  DueDateTime

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * OwnerID
   * @type {Edm.String} 
   */
  OwnerID

  /**
   * OwnerName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  OwnerName

  /**
   * OwnerUUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * SalesPhaseCode
   * @type {Edm.String} 
   */
  SalesPhaseCode

  /**
   * SalesPhaseCodeText
   * @type {Edm.String} 
   */
  SalesPhaseCodeText

  /**
   * StartDateTime
   * @type {Edm.DateTimeOffset} 
   */
  StartDateTime

  /**
   * StatusCode
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Subject
   * @type {Edm.String} 
   */
  Subject

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

}

/**
 * OpportunityAttachment
 * 
 * @class OpportunityAttachment
 */
export class OpportunityAttachment extends C4CEntity {

  /**
   * 
   * @type {OpportunityAttachment} 
   */
  _type = OpportunityAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * OpportunityBusinessDocumentReference
 * 
 * @class OpportunityBusinessDocumentReference
 */
export class OpportunityBusinessDocumentReference extends C4CEntity {

  /**
   * 
   * @type {OpportunityBusinessDocumentReference} 
   */
  _type = OpportunityBusinessDocumentReference

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ItemID
   * @type {Edm.String} 
   */
  ItemID

  /**
   * ItemTypeCode
   * @type {Edm.String} 
   */
  ItemTypeCode

  /**
   * ItemTypeCodeText
   * @type {Edm.String} 
   */
  ItemTypeCodeText

  /**
   * ItemUUID
   * @type {Edm.Guid} 
   */
  ItemUUID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Appointment|Appointment[]} 
   */
  Appointment

  /**
   * 
   * @type {DeferredNavigationProperty|EMail|EMail[]} 
   */
  EMail

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

  /**
   * 
   * @type {DeferredNavigationProperty|PhoneCall|PhoneCall[]} 
   */
  PhoneCall

  /**
   * 
   * @type {DeferredNavigationProperty|Task|Task[]} 
   */
  Task

  /**
   * 
   * @type {DeferredNavigationProperty|Visit|Visit[]} 
   */
  Visit

}

/**
 * OpportunityContact
 * 
 * @class OpportunityContact
 */
export class OpportunityContact extends C4CEntity {

  /**
   * 
   * @type {OpportunityContact} 
   */
  _type = OpportunityContact

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address
   * @type {Edm.String} 
   */
  Address

  /**
   * Attitude Toward Opportunity
   * @type {Edm.String} 
   */
  AttitudeTowardOpportunityCode

  /**
   * AttitudeTowardOpportunityCodeText
   * @type {Edm.String} 
   */
  AttitudeTowardOpportunityCodeText

  /**
   * Contact
   * @type {Edm.String} 
   */
  ContactID

  /**
   * ContactUUID
   * @type {Edm.Guid} 
   */
  ContactUUID

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Main
   * @type {Edm.Boolean} 
   */
  PrimaryContact

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

}

/**
 * OpportunityEMailSalesActivity
 * 
 * @class OpportunityEMailSalesActivity
 */
export class OpportunityEMailSalesActivity extends C4CEntity {

  /**
   * 
   * @type {OpportunityEMailSalesActivity} 
   */
  _type = OpportunityEMailSalesActivity

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * OwnerID
   * @type {Edm.String} 
   */
  OwnerID

  /**
   * OwnerName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  OwnerName

  /**
   * OwnerUUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * SalesPhaseCode
   * @type {Edm.String} 
   */
  SalesPhaseCode

  /**
   * SalesPhaseCodeText
   * @type {Edm.String} 
   */
  SalesPhaseCodeText

  /**
   * StartDateTime
   * @type {Edm.DateTimeOffset} 
   */
  StartDateTime

  /**
   * StatusCode
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Subject
   * @type {Edm.String} 
   */
  Subject

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

}

/**
 * OpportunityInvolvedParties
 * 
 * @class OpportunityInvolvedParties
 */
export class OpportunityInvolvedParties extends C4CEntity {

  /**
   * 
   * @type {OpportunityInvolvedParties} 
   */
  _type = OpportunityInvolvedParties

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address
   * @type {Edm.String} 
   */
  Address

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * PartyID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Primary
   * @type {Edm.Boolean} 
   */
  Primary

  /**
   * Contact
   * @type {Edm.String} 
   */
  PrimaryContactID

  /**
   * PrimaryContactName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  PrimaryContactName

  /**
   * PrimaryContactUUID
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

}

/**
 * OpportunityNotes
 * 
 * @class OpportunityNotes
 */
export class OpportunityNotes extends C4CEntity {

  /**
   * 
   * @type {OpportunityNotes} 
   */
  _type = OpportunityNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * OpportunityPhoneCallSalesActivity
 * 
 * @class OpportunityPhoneCallSalesActivity
 */
export class OpportunityPhoneCallSalesActivity extends C4CEntity {

  /**
   * 
   * @type {OpportunityPhoneCallSalesActivity} 
   */
  _type = OpportunityPhoneCallSalesActivity

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * BusinessTransactionDocumentRelationshipRoleCode
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCode

  /**
   * BusinessTransactionDocumentRelationshipRoleCodeText
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentRelationshipRoleCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * OwnerID
   * @type {Edm.String} 
   */
  OwnerID

  /**
   * OwnerName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  OwnerName

  /**
   * OwnerUUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * SalesPhaseCode
   * @type {Edm.String} 
   */
  SalesPhaseCode

  /**
   * SalesPhaseCodeText
   * @type {Edm.String} 
   */
  SalesPhaseCodeText

  /**
   * StartDateTime
   * @type {Edm.DateTimeOffset} 
   */
  StartDateTime

  /**
   * StatusCode
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Subject
   * @type {Edm.String} 
   */
  Subject

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

}

/**
 * OpportunityProduct
 * 
 * @class OpportunityProduct
 */
export class OpportunityProduct extends C4CEntity {

  /**
   * 
   * @type {OpportunityProduct} 
   */
  _type = OpportunityProduct

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Description
   * @type {c4codata.SHORT_Description} 
   */
  Description

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Line
   * @type {Edm.String} 
   */
  ID

  /**
   * NegotiatedValue
   * @type {c4codata.Amount} 
   */
  NegotiatedValue

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * ProductCategoryDescription
   * @type {c4codata.MEDIUM_Description} 
   */
  ProductCategoryDescription

  /**
   * Product Category
   * @type {Edm.String} 
   */
  ProductCategoryID

  /**
   * ProductDescription
   * @type {c4codata.SHORT_Description} 
   */
  ProductDescription

  /**
   * ProductID
   * @type {Edm.String} 
   */
  ProductID

  /**
   * ProductUUID
   * @type {Edm.Guid} 
   */
  ProductUUID

  /**
   * ProposedValue
   * @type {c4codata.Amount} 
   */
  ProposedValue

  /**
   * Quantity
   * @type {c4codata.Quantity} 
   */
  Quantity

  /**
   * RevenueEndDate
   * @type {Edm.DateTime} 
   */
  RevenueEndDate

  /**
   * RevenueStartDate
   * @type {Edm.DateTime} 
   */
  RevenueStartDate

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

  /**
   * 
   * @type {DeferredNavigationProperty|OpportunityProductNotes|OpportunityProductNotes[]} 
   */
  OpportunityProductNotes

}

/**
 * OpportunityProductNotes
 * 
 * @class OpportunityProductNotes
 */
export class OpportunityProductNotes extends C4CEntity {

  /**
   * 
   * @type {OpportunityProductNotes} 
   */
  _type = OpportunityProductNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * OpportunitySalesTeam
 * 
 * @class OpportunitySalesTeam
 */
export class OpportunitySalesTeam extends C4CEntity {

  /**
   * 
   * @type {OpportunitySalesTeam} 
   */
  _type = OpportunitySalesTeam

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * FormattedName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  FormattedName

  /**
   * Main
   * @type {Edm.Boolean} 
   */
  Main

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

}

/**
 * OpportunityTaskSalesActivity
 * 
 * @class OpportunityTaskSalesActivity
 */
export class OpportunityTaskSalesActivity extends C4CEntity {

  /**
   * 
   * @type {OpportunityTaskSalesActivity} 
   */
  _type = OpportunityTaskSalesActivity

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * DueEndDateTime
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  DueEndDateTime

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * OwnerID
   * @type {Edm.String} 
   */
  OwnerID

  /**
   * OwnerName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  OwnerName

  /**
   * OwnerUUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * PriorityCode
   * @type {Edm.String} 
   */
  PriorityCode

  /**
   * PriorityCodeText
   * @type {Edm.String} 
   */
  PriorityCodeText

  /**
   * SalesPhaseCode
   * @type {Edm.String} 
   */
  SalesPhaseCode

  /**
   * SalesPhaseCodeText
   * @type {Edm.String} 
   */
  SalesPhaseCodeText

  /**
   * StartDateTime
   * @type {Edm.DateTimeOffset} 
   */
  StartDateTime

  /**
   * StatusCode
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Subject
   * @type {Edm.String} 
   */
  Subject

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|Opportunity|Opportunity[]} 
   */
  Opportunity

}

/**
 * PhoneCall
 * 
 * @class PhoneCall
 */
export class PhoneCall extends C4CEntity {

  /**
   * 
   * @type {PhoneCall} 
   */
  _type = PhoneCall

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Account
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  AccountFormattedName

  /**
   * Account UUID
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Campaign
   * @type {c4codata.MEDIUM_Description} 
   */
  CampaignDescription

  /**
   * Campaign UUID
   * @type {Edm.Guid} 
   */
  CampaignUUID

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Name
   * @type {Edm.String} 
   */
  CreatedByFormattedName

  /**
   * Created By UUID
   * @type {Edm.Guid} 
   */
  CreatedByUUID

  /**
   * Created On
   * @type {Edm.DateTimeOffset} 
   */
  CreatedOn

  /**
   * Start Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  DateTime

  /**
   * Direction
   * @type {Edm.String} 
   */
  DirectionCode

  /**
   * DirectionCodeText
   * @type {Edm.String} 
   */
  DirectionCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Owner
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  OwnerFormattedName

  /**
   * Owner UUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Primary Contact
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  PrimaryContactFormattedName

  /**
   * Primary Contact UUID
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * Priority
   * @type {Edm.String} 
   */
  PriorityCode

  /**
   * PriorityCodeText
   * @type {Edm.String} 
   */
  PriorityCodeText

  /**
   * Response Option
   * @type {c4codata.MEDIUM_Description} 
   */
  ResponseOptionDescription

  /**
   * Response Option ID
   * @type {Edm.String} 
   */
  ResponseOptionID

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Subject
   * @type {Edm.String} 
   */
  SubjectName

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|PhoneCallAttachment|PhoneCallAttachment[]} 
   */
  PhoneCallAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|PhoneCallNotes|PhoneCallNotes[]} 
   */
  PhoneCallNotes

  /**
   * 
   * @type {DeferredNavigationProperty|PhoneCallParticipants|PhoneCallParticipants[]} 
   */
  PhoneCallParticipants

}

/**
 * PhoneCallAttachment
 * 
 * @class PhoneCallAttachment
 */
export class PhoneCallAttachment extends C4CEntity {

  /**
   * 
   * @type {PhoneCallAttachment} 
   */
  _type = PhoneCallAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * PhoneCallNotes
 * 
 * @class PhoneCallNotes
 */
export class PhoneCallNotes extends C4CEntity {

  /**
   * 
   * @type {PhoneCallNotes} 
   */
  _type = PhoneCallNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * PhoneCallParticipants
 * 
 * @class PhoneCallParticipants
 */
export class PhoneCallParticipants extends C4CEntity {

  /**
   * 
   * @type {PhoneCallParticipants} 
   */
  _type = PhoneCallParticipants

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address
   * @type {Edm.String} 
   */
  Address

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * PartyEmailURI
   * @type {Edm.String} 
   */
  PartyEmailURI

  /**
   * PartyID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * PartyName
   * @type {Edm.String} 
   */
  PartyName

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|PhoneCall|PhoneCall[]} 
   */
  PhoneCall

}

/**
 * Product
 * 
 * @class Product
 */
export class Product extends C4CEntity {

  /**
   * 
   * @type {Product} 
   */
  _type = Product

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ChangedOn
   * @type {Edm.DateTimeOffset} 
   */
  ChangedOn

  /**
   * 颜色码
   * @type {Edm.String} 
   */
  ColorCode

  /**
   * 颜色
   * @type {Edm.String} 
   */
  Color_M

  /**
   * CompetitorProductIndicator
   * @type {Edm.Boolean} 
   */
  CompetitorProductIndicator

  /**
   * 配置
   * @type {Edm.String} 
   */
  Config

  /**
   * Name
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * CreatedOn
   * @type {Edm.DateTimeOffset} 
   */
  CreatedOn

  /**
   * Product Description
   * @type {Edm.String} 
   */
  Description

  /**
   * 排量
   * @type {Edm.String} 
   */
  Displacement

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * 尾气排放标准
   * @type {Edm.String} 
   */
  ExhaustEmissionStd

  /**
   * 燃油类型
   * @type {Edm.String} 
   */
  FuelType

  /**
   * Product ID
   * @type {Edm.String} 
   */
  ID

  /**
   * 手自动
   * @type {Edm.String} 
   */
  ManualAuto

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * 订货周期
   * @type {Edm.Decimal} 
   */
  OrderCycle

  /**
   * ProdcutLifecyclecontent
   * @type {Edm.String} 
   */
  ProdcutLifecyclecontent

  /**
   * ProdcutLifecyclecontentText
   * @type {Edm.String} 
   */
  ProdcutLifecyclecontentText

  /**
   * 采购周期
   * @type {Edm.Decimal} 
   */
  PurchaseCycle

  /**
   * StatusCode
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * Base UoM
   * @type {Edm.String} 
   */
  UnitOfMeasureCode

  /**
   * UnitOfMeasureCodeText
   * @type {Edm.String} 
   */
  UnitOfMeasureCodeText

  /**
   * 内饰
   * @type {Edm.String} 
   */
  VIC_Upholstery

  /**
   * 版本
   * @type {Edm.String} 
   */
  Version

  /**
   * languageCode
   * @type {Edm.String} 
   */
  languageCode

  /**
   * languageCodeText
   * @type {Edm.String} 
   */
  languageCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|ExternalIDMapping|ExternalIDMapping[]} 
   */
  ExternalIDMapping

  /**
   * 
   * @type {DeferredNavigationProperty|ProductAttachment|ProductAttachment[]} 
   */
  ProductAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|ProductCategoryAssignment|ProductCategoryAssignment[]} 
   */
  ProductCategoryAssignment

  /**
   * 
   * @type {DeferredNavigationProperty|ProductChangedBy|ProductChangedBy[]} 
   */
  ProductChangedBy

  /**
   * 
   * @type {DeferredNavigationProperty|ProductSales|ProductSales[]} 
   */
  ProductSales

}

/**
 * ProductAttachment
 * 
 * @class ProductAttachment
 */
export class ProductAttachment extends C4CEntity {

  /**
   * 
   * @type {ProductAttachment} 
   */
  _type = ProductAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * ProductCategoryAssignment
 * 
 * @class ProductCategoryAssignment
 */
export class ProductCategoryAssignment extends C4CEntity {

  /**
   * 
   * @type {ProductCategoryAssignment} 
   */
  _type = ProductCategoryAssignment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * ProductCategoryDescription
   * @type {c4codata.MEDIUM_Description} 
   */
  ProductCategoryDescription

  /**
   * Product Category ID
   * @type {Edm.String} 
   */
  ProductCategoryID

  /**
   * Product Category
   * @type {Edm.Guid} 
   */
  ProductCategoryUUID

  /**
   * 
   * @type {DeferredNavigationProperty|Product|Product[]} 
   */
  Product

}

/**
 * ProductCategoryHierarchy
 * 
 * @class ProductCategoryHierarchy
 */
export class ProductCategoryHierarchy extends C4CEntity {

  /**
   * 
   * @type {ProductCategoryHierarchy} 
   */
  _type = ProductCategoryHierarchy

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Product Category ID
   * @type {Edm.String} 
   */
  InternalID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentInternalID
   * @type {Edm.String} 
   */
  ParentInternalID

  /**
   * Product Assignment Allowed
   * @type {Edm.Boolean} 
   */
  ProductAssignmentAllowedIndicator

  /**
   * 
   * @type {DeferredNavigationProperty|ProductCategoryHierarchyDescription|ProductCategoryHierarchyDescription[]} 
   */
  ProductCategoryHierarchyDescription

}

/**
 * ProductCategoryHierarchyDescription
 * 
 * @class ProductCategoryHierarchyDescription
 */
export class ProductCategoryHierarchyDescription extends C4CEntity {

  /**
   * 
   * @type {ProductCategoryHierarchyDescription} 
   */
  _type = ProductCategoryHierarchyDescription

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Product Category Description
   * @type {Edm.String} 
   */
  Description

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * languageCode
   * @type {Edm.String} 
   */
  languageCode

  /**
   * languageCodeText
   * @type {Edm.String} 
   */
  languageCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|ProductCategoryHierarchy|ProductCategoryHierarchy[]} 
   */
  ProductCategoryHierarchy

}

/**
 * ProductChangedBy
 * 
 * @class ProductChangedBy
 */
export class ProductChangedBy extends C4CEntity {

  /**
   * 
   * @type {ProductChangedBy} 
   */
  _type = ProductChangedBy

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Name
   * @type {Edm.String} 
   */
  BusinessPartnerFormattedName

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

}

/**
 * ProductSales
 * 
 * @class ProductSales
 */
export class ProductSales extends C4CEntity {

  /**
   * 
   * @type {ProductSales} 
   */
  _type = ProductSales

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Distribution Channel
   * @type {Edm.String} 
   */
  DistributionChannelCode

  /**
   * DistributionChannelCodeText
   * @type {Edm.String} 
   */
  DistributionChannelCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * MinimumOrderQuantity
   * @type {c4codata.Quantity} 
   */
  MinimumOrderQuantity

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Sales Organization ID
   * @type {Edm.String} 
   */
  SalesOrganisationID

  /**
   * SalesOrganisationUUID
   * @type {Edm.Guid} 
   */
  SalesOrganisationUUID

  /**
   * SalesUoMCode
   * @type {Edm.String} 
   */
  SalesUoMCode

  /**
   * SalesUoMCodeText
   * @type {Edm.String} 
   */
  SalesUoMCodeText

  /**
   * StatusCode
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Product|Product[]} 
   */
  Product

  /**
   * 
   * @type {DeferredNavigationProperty|ProductSalesOrganisation|ProductSalesOrganisation[]} 
   */
  ProductSalesOrganisation

}

/**
 * ProductSalesOrganisation
 * 
 * @class ProductSalesOrganisation
 */
export class ProductSalesOrganisation extends C4CEntity {

  /**
   * 
   * @type {ProductSalesOrganisation} 
   */
  _type = ProductSalesOrganisation

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

}

/**
 * ServiceAssignment
 * 
 * @class ServiceAssignment
 */
export class ServiceAssignment extends C4CEntity {

  /**
   * 
   * @type {ServiceAssignment} 
   */
  _type = ServiceAssignment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * AssignmentUUID
   * @type {Edm.Guid} 
   */
  AssignmentUUID

  /**
   * BusinessActivityUUID
   * @type {Edm.Guid} 
   */
  BusinessActivityUUID

  /**
   * CreatedBy
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * CreationDateTime
   * @type {Edm.DateTimeOffset} 
   */
  CreationDateTime

  /**
   * Name
   * @type {Edm.String} 
   */
  Customer

  /**
   * Party ID
   * @type {Edm.String} 
   */
  CustomerID

  /**
   * Party Type
   * @type {Edm.String} 
   */
  CustomerTypeCode

  /**
   * CustomerTypeCodeText
   * @type {Edm.String} 
   */
  CustomerTypeCodeText

  /**
   * Division
   * @type {Edm.String} 
   */
  DivisionCode

  /**
   * DivisionCodeText
   * @type {Edm.String} 
   */
  DivisionCodeText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Scheduled End Date Time
   * @type {Edm.DateTimeOffset} 
   */
  EndDateTime

  /**
   * EndDateTimeZoneCode
   * @type {Edm.String} 
   */
  EndDateTimeZoneCode

  /**
   * EndDateTimeZoneCodeText
   * @type {Edm.String} 
   */
  EndDateTimeZoneCodeText

  /**
   * Fixed
   * @type {Edm.String} 
   */
  Fixed

  /**
   * FixedText
   * @type {Edm.String} 
   */
  FixedText

  /**
   * Full Day
   * @type {Edm.Boolean} 
   */
  FullDayIndicator

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * LastChangedBy
   * @type {Edm.String} 
   */
  LastChangedBy

  /**
   * Status
   * @type {Edm.String} 
   */
  LifeCycleStatusCode

  /**
   * LifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  LifeCycleStatusCodeText

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Party ID
   * @type {Edm.String} 
   */
  OrganizerID

  /**
   * Name
   * @type {Edm.String} 
   */
  OrganizerName

  /**
   * Party Type
   * @type {Edm.String} 
   */
  OrganizerTypeCode

  /**
   * OrganizerTypeCodeText
   * @type {Edm.String} 
   */
  OrganizerTypeCodeText

  /**
   * Name
   * @type {Edm.String} 
   */
  PrimaryContact

  /**
   * Party ID
   * @type {Edm.String} 
   */
  PrimaryContactID

  /**
   * Party Type
   * @type {Edm.String} 
   */
  PrimaryContactTypeCode

  /**
   * PrimaryContactTypeCodeText
   * @type {Edm.String} 
   */
  PrimaryContactTypeCodeText

  /**
   * Priority
   * @type {Edm.String} 
   */
  Priority

  /**
   * PriorityText
   * @type {Edm.String} 
   */
  PriorityText

  /**
   * Document Type
   * @type {Edm.String} 
   */
  ProcessingTypeCode

  /**
   * ProcessingTypeCodeText
   * @type {Edm.String} 
   */
  ProcessingTypeCodeText

  /**
   * Released
   * @type {Edm.String} 
   */
  Released

  /**
   * ReleasedText
   * @type {Edm.String} 
   */
  ReleasedText

  /**
   * Name
   * @type {Edm.String} 
   */
  ServiceTechnician

  /**
   * Party ID
   * @type {Edm.String} 
   */
  ServiceTechnicianID

  /**
   * Party Type
   * @type {Edm.String} 
   */
  ServiceTechnicianTypeCode

  /**
   * ServiceTechnicianTypeCodeText
   * @type {Edm.String} 
   */
  ServiceTechnicianTypeCodeText

  /**
   * Scheduled Start Date Time
   * @type {Edm.DateTimeOffset} 
   */
  StartDateTime

  /**
   * StartDateTimeZoneCode
   * @type {Edm.String} 
   */
  StartDateTimeZoneCode

  /**
   * StartDateTimeZoneCodeText
   * @type {Edm.String} 
   */
  StartDateTimeZoneCodeText

  /**
   * Assignment External Status Code
   * @type {Edm.String} 
   */
  Status

  /**
   * StatusText
   * @type {Edm.String} 
   */
  StatusText

  /**
   * Subject
   * @type {Edm.String} 
   */
  Subject

  /**
   * Activity Type
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceAssignmentBusinessTransactionDocReference|ServiceAssignmentBusinessTransactionDocReference[]} 
   */
  ServiceAssignmentBusinessTransactionDocReference

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceAssignmentNotes|ServiceAssignmentNotes[]} 
   */
  ServiceAssignmentNotes

}

/**
 * ServiceAssignmentBusinessTransactionDocReference
 * 
 * @class ServiceAssignmentBusinessTransactionDocReference
 */
export class ServiceAssignmentBusinessTransactionDocReference extends C4CEntity {

  /**
   * 
   * @type {ServiceAssignmentBusinessTransactionDocReference} 
   */
  _type = ServiceAssignmentBusinessTransactionDocReference

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Document ID
   * @type {Edm.String} 
   */
  ReferenceDocumentID

  /**
   * Reference Item
   * @type {Edm.String} 
   */
  ReferenceDocumentItemID

  /**
   * Reference Type
   * @type {Edm.String} 
   */
  ReferenceDocumentItemTypeCode

  /**
   * ReferenceDocumentItemTypeCodeText
   * @type {Edm.String} 
   */
  ReferenceDocumentItemTypeCodeText

  /**
   * ReferenceDocumentItemUUID
   * @type {Edm.Guid} 
   */
  ReferenceDocumentItemUUID

  /**
   * Source Document
   * @type {Edm.String} 
   */
  ReferenceDocumentTypeCode

  /**
   * ReferenceDocumentTypeCodeText
   * @type {Edm.String} 
   */
  ReferenceDocumentTypeCodeText

  /**
   * ReferenceDocumentUUID
   * @type {Edm.Guid} 
   */
  ReferenceDocumentUUID

}

/**
 * ServiceAssignmentNotes
 * 
 * @class ServiceAssignmentNotes
 */
export class ServiceAssignmentNotes extends C4CEntity {

  /**
   * 
   * @type {ServiceAssignmentNotes} 
   */
  _type = ServiceAssignmentNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * ServiceIssueCategoryCatalogue
 * 
 * @class ServiceIssueCategoryCatalogue
 */
export class ServiceIssueCategoryCatalogue extends C4CEntity {

  /**
   * 
   * @type {ServiceIssueCategoryCatalogue} 
   */
  _type = ServiceIssueCategoryCatalogue

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Valid To
   * @type {Edm.DateTimeOffset} 
   */
  EndDateTime

  /**
   * LifeCycleStatusCode
   * @type {Edm.String} 
   */
  LifeCycleStatusCode

  /**
   * LifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  LifeCycleStatusCodeText

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Main Personal Address
   * @type {Edm.Boolean} 
   */
  ShowActive

  /**
   * Valid From
   * @type {Edm.DateTimeOffset} 
   */
  StartDateTime

  /**
   * Version
   * @type {Edm.String} 
   */
  VersionID

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceIssueCategoryCatalogueCategory|ServiceIssueCategoryCatalogueCategory[]} 
   */
  ServiceIssueCategoryCatalogueCategory

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceIssueCategoryCatalogueParentCategory|ServiceIssueCategoryCatalogueParentCategory[]} 
   */
  ServiceIssueCategoryCatalogueParentCategory

}

/**
 * ServiceIssueCategoryCatalogueCategory
 * 
 * @class ServiceIssueCategoryCatalogueCategory
 */
export class ServiceIssueCategoryCatalogueCategory extends C4CEntity {

  /**
   * 
   * @type {ServiceIssueCategoryCatalogueCategory} 
   */
  _type = ServiceIssueCategoryCatalogueCategory

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Name
   * @type {c4codata.MEDIUM_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentCategoryUUID
   * @type {Edm.Guid} 
   */
  ParentCategoryUUID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * ServiceIssueCategoryID
   * @type {Edm.String} 
   */
  ServiceIssueCategoryID

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceIssueCategoryCatalogue|ServiceIssueCategoryCatalogue[]} 
   */
  ServiceIssueCategoryCatalogue

}

/**
 * ServiceIssueCategoryCatalogueParentCategory
 * 
 * @class ServiceIssueCategoryCatalogueParentCategory
 */
export class ServiceIssueCategoryCatalogueParentCategory extends C4CEntity {

  /**
   * 
   * @type {ServiceIssueCategoryCatalogueParentCategory} 
   */
  _type = ServiceIssueCategoryCatalogueParentCategory

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Name
   * @type {c4codata.MEDIUM_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * ServiceIssueCategoryID
   * @type {Edm.String} 
   */
  ServiceIssueCategoryID

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceIssueCategoryCatalogue|ServiceIssueCategoryCatalogue[]} 
   */
  ServiceIssueCategoryCatalogue

}

/**
 * ServicePointLocationAddress
 * 
 * @class ServicePointLocationAddress
 */
export class ServicePointLocationAddress extends C4CEntity {

  /**
   * 
   * @type {ServicePointLocationAddress} 
   */
  _type = ServicePointLocationAddress

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * AddressLine1
   * @type {Edm.String} 
   */
  AddressLine1

  /**
   * AddressLine2
   * @type {Edm.String} 
   */
  AddressLine2

  /**
   * AddressLine4
   * @type {Edm.String} 
   */
  AddressLine4

  /**
   * AddressLine5
   * @type {Edm.String} 
   */
  AddressLine5

  /**
   * City
   * @type {Edm.String} 
   */
  City

  /**
   * Country
   * @type {Edm.String} 
   */
  Country

  /**
   * CountryText
   * @type {Edm.String} 
   */
  CountryText

  /**
   * County
   * @type {Edm.String} 
   */
  County

  /**
   * District
   * @type {Edm.String} 
   */
  District

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  Email

  /**
   * Fax
   * @type {Edm.String} 
   */
  Fax

  /**
   * House Number
   * @type {Edm.String} 
   */
  HouseNumber

  /**
   * Language
   * @type {Edm.String} 
   */
  Language

  /**
   * LanguageText
   * @type {Edm.String} 
   */
  LanguageText

  /**
   * Phone
   * @type {Edm.String} 
   */
  Mobile

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * POBox
   * @type {Edm.String} 
   */
  POBox

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  POBoxPostalCode

  /**
   * POBoxPostalCodeText
   * @type {Edm.String} 
   */
  POBoxPostalCodeText

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * Postal Code
   * @type {Edm.String} 
   */
  PostalCode

  /**
   * PostalCodeText
   * @type {Edm.String} 
   */
  PostalCodeText

  /**
   * State
   * @type {Edm.String} 
   */
  State

  /**
   * StateText
   * @type {Edm.String} 
   */
  StateText

  /**
   * Street
   * @type {Edm.String} 
   */
  Street

  /**
   * Web Site
   * @type {Edm.String} 
   */
  WebSite

}

/**
 * ServiceRequest
 * 
 * @class ServiceRequest
 */
export class ServiceRequest extends C4CEntity {

  /**
   * 
   * @type {ServiceRequest} 
   */
  _type = ServiceRequest

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * 接收时间
   * @type {Edm.DateTimeOffset} 
   */
  AcceptedTime

  /**
   * ActivityCategoryName
   * @type {c4codata.MEDIUM_Name} 
   */
  ActivityCategoryName

  /**
   * ActivityServiceIssueCategoryID
   * @type {Edm.String} 
   */
  ActivityServiceIssueCategoryID

  /**
   * 预约改派时间
   * @type {Edm.DateTimeOffset} 
   */
  AppointChangedTime

  /**
   * 确认预约的时间
   * @type {Edm.DateTimeOffset} 
   */
  AppointConfirmedTime

  /**
   * 确认预约状态
   * @type {Edm.String} 
   */
  AppointStatus

  /**
   * AppointStatusText
   * @type {Edm.String} 
   */
  AppointStatusText

  /**
   * 预约进站时间
   * @type {Edm.DateTimeOffset} 
   */
  AppointTime

  /**
   * ApprovalStatusCode
   * @type {Edm.String} 
   */
  ApprovalStatusCode

  /**
   * ApprovalStatusCodeText
   * @type {Edm.String} 
   */
  ApprovalStatusCodeText

  /**
   * AssignedTo
   * @type {Edm.String} 
   */
  AssignedTo

  /**
   * AssignedToName
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  AssignedToName

  /**
   * 派发时间
   * @type {Edm.DateTimeOffset} 
   */
  AssigningTime

  /**
   * 审核状态
   * @type {Edm.String} 
   */
  AuditStatus

  /**
   * AuditStatusText
   * @type {Edm.String} 
   */
  AuditStatusText

  /**
   * AutoOutCall
   * @type {Edm.Boolean} 
   */
  AutoOutCall

  /**
   * 已取消
   * @type {Edm.Boolean} 
   */
  Cancelled

  /**
   * 取消原因
   * @type {Edm.String} 
   */
  CancelledReason

  /**
   * 取消时间
   * @type {Edm.DateTimeOffset} 
   */
  CancelledTime

  /**
   * 车型描述
   * @type {Edm.String} 
   */
  Car_Desc

  /**
   * 车辆纬度
   * @type {Edm.String} 
   */
  Car_Latitute

  /**
   * 车辆经度
   * @type {Edm.String} 
   */
  Car_Longtitude

  /**
   * CauseCategoryName
   * @type {c4codata.MEDIUM_Name} 
   */
  CauseCategoryName

  /**
   * CauseServiceIssueCategoryID
   * @type {Edm.String} 
   */
  CauseServiceIssueCategoryID

  /**
   * Name
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * CharRecordIDcontent
   * @type {Edm.String} 
   */
  CharRecordIDcontent

  /**
   * Warranty Reference Date
   * @type {Edm.DateTime} 
   */
  CompletedOnDate

  /**
   * 闭环时间
   * @type {Edm.DateTimeOffset} 
   */
  CompletedTime

  /**
   * Warranty Reference Date
   * @type {Edm.DateTime} 
   */
  CompletionDueDate

  /**
   * Contact
   * @type {Edm.String} 
   */
  Contact

  /**
   * ContractID
   * @type {Edm.String} 
   */
  ContractID

  /**
   * Name
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * CreationDate
   * @type {Edm.DateTime} 
   */
  CreationDate

  /**
   * CreationDateTime
   * @type {Edm.DateTimeOffset} 
   */
  CreationDateTime

  /**
   * 当前处理部门
   * @type {Edm.String} 
   */
  CurDept

  /**
   * 当前处理部门ID
   * @type {Edm.String} 
   */
  CurDeptID

  /**
   * CurProcessorIDcontent
   * @type {Edm.String} 
   */
  CurProcessorIDcontent

  /**
   * 当前处理人姓名
   * @type {Edm.String} 
   */
  CurrentProcessor

  /**
   * Customer
   * @type {Edm.String} 
   */
  Customer

  /**
   * CustomerID
   * @type {Edm.String} 
   */
  CustomerID

  /**
   * Main Contact
   * @type {Edm.String} 
   */
  CustomerMainContactPartyID

  /**
   * Origin
   * @type {Edm.String} 
   */
  DataOriginTypeCode

  /**
   * DataOriginTypeCodeText
   * @type {Edm.String} 
   */
  DataOriginTypeCodeText

  /**
   * 拒绝原因
   * @type {Edm.String} 
   */
  DeclinedReason

  /**
   * 拒绝时间
   * @type {Edm.DateTimeOffset} 
   */
  DeclinedTime

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * EscalationStatus
   * @type {Edm.String} 
   */
  EscalationStatus

  /**
   * EscalationStatusText
   * @type {Edm.String} 
   */
  EscalationStatusText

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * IncidentCategoryName
   * @type {c4codata.MEDIUM_Name} 
   */
  IncidentCategoryName

  /**
   * IncidentServiceIssueCategoryID
   * @type {Edm.String} 
   */
  IncidentServiceIssueCategoryID

  /**
   * Warranty Reference Date
   * @type {Edm.DateTime} 
   */
  InitialResponseDate

  /**
   * Warranty Reference Date
   * @type {Edm.DateTime} 
   */
  InitialReviewDueDate

  /**
   * ID
   * @type {Edm.String} 
   */
  InstallationPointID

  /**
   * ID
   * @type {Edm.String} 
   */
  InstalledBaseID

  /**
   * 自动回访
   * @type {Edm.Boolean} 
   */
  IsAutoVisit

  /**
   * 在线客服工单
   * @type {Edm.Boolean} 
   */
  IsLineTicket

  /**
   * 人工回访
   * @type {Edm.Boolean} 
   */
  IsManualVisit

  /**
   * 是否通知派发部门
   * @type {Edm.Boolean} 
   */
  IsNotifyAssignedTeam

  /**
   * 是否通知客户
   * @type {Edm.Boolean} 
   */
  IsNotifyCustomer

  /**
   * 是否通知大区
   * @type {Edm.Boolean} 
   */
  IsNotifyDQ

  /**
   * 短信通知客户
   * @type {Edm.Boolean} 
   */
  IsSMSforCustomer

  /**
   * ItemListServiceRequestExecutionLifeCycleStatusCode
   * @type {Edm.String} 
   */
  ItemListServiceRequestExecutionLifeCycleStatusCode

  /**
   * ItemListServiceRequestExecutionLifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  ItemListServiceRequestExecutionLifeCycleStatusCodeText

  /**
   * LastChangeDate
   * @type {Edm.DateTime} 
   */
  LastChangeDate

  /**
   * LastChangeDateTime
   * @type {Edm.DateTimeOffset} 
   */
  LastChangeDateTime

  /**
   * Warranty Reference Date
   * @type {Edm.DateTime} 
   */
  LastResponseOnDate

  /**
   * 车牌号
   * @type {Edm.String} 
   */
  LicensePlateID

  /**
   * Name
   * @type {c4codata.EXTENDED_Name} 
   */
  Name

  /**
   * 需要下派维修
   * @type {Edm.Boolean} 
   */
  NeedRepair

  /**
   * 是否需要救援
   * @type {Edm.Boolean} 
   */
  NeedRescue

  /**
   * Warranty Reference Date
   * @type {Edm.DateTime} 
   */
  NextResponseDueDate

  /**
   * ObjectCategoryName
   * @type {c4codata.MEDIUM_Name} 
   */
  ObjectCategoryName

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ObjectServiceIssueCategoryID
   * @type {Edm.String} 
   */
  ObjectServiceIssueCategoryID

  /**
   * 里程数
   * @type {Edm.String} 
   */
  OdometerReading

  /**
   * 外呼工单批次ID
   * @type {Edm.String} 
   */
  OutCallID

  /**
   * PUserID
   * @type {Edm.String} 
   */
  PUserID

  /**
   * ParentServiceRequest
   * @type {Edm.String} 
   */
  ParentServiceRequest

  /**
   * Partner
   * @type {Edm.String} 
   */
  Partner

  /**
   * PartnerID
   * @type {Edm.String} 
   */
  PartnerID

  /**
   * 手机号
   * @type {Edm.String} 
   */
  PhoneNo

  /**
   * Ticket Type
   * @type {Edm.String} 
   */
  ProcessingTypeCode

  /**
   * ProcessingTypeCodeText
   * @type {Edm.String} 
   */
  ProcessingTypeCodeText

  /**
   * Product Category Description
   * @type {Edm.String} 
   */
  ProductCategoryDescription

  /**
   * ProductID
   * @type {Edm.String} 
   */
  ProductID

  /**
   * Warranty Reference Date
   * @type {Edm.DateTime} 
   */
  ReferenceDate

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  ReportedForEmail

  /**
   * ReportedForPartyID
   * @type {Edm.String} 
   */
  ReportedForPartyID

  /**
   * ReporterEmail
   * @type {Edm.String} 
   */
  ReporterEmail

  /**
   * ReporterPartyID
   * @type {Edm.String} 
   */
  ReporterPartyID

  /**
   * 申请业务支持时间
   * @type {Edm.DateTimeOffset} 
   */
  RequesTime

  /**
   * Invoice Status
   * @type {Edm.String} 
   */
  RequestAssignmentStatusCode

  /**
   * RequestAssignmentStatusCodeText
   * @type {Edm.String} 
   */
  RequestAssignmentStatusCodeText

  /**
   * 申请闭环时间
   * @type {Edm.DateTimeOffset} 
   */
  RequestCompletedTime

  /**
   * RequestedEnd
   * @type {Edm.String} 
   */
  RequestedEnd

  /**
   * RequestedEndTimeZoneCode
   * @type {Edm.String} 
   */
  RequestedEndTimeZoneCode

  /**
   * RequestedEndTimeZoneCodeText
   * @type {Edm.String} 
   */
  RequestedEndTimeZoneCodeText

  /**
   * Requested Date
   * @type {Edm.String} 
   */
  RequestedStart

  /**
   * RequestedStartTimeZoneCode
   * @type {Edm.String} 
   */
  RequestedStartTimeZoneCode

  /**
   * RequestedStartTimeZoneCodeText
   * @type {Edm.String} 
   */
  RequestedStartTimeZoneCodeText

  /**
   * 是否符合救援
   * @type {Edm.Boolean} 
   */
  RescueCondition

  /**
   * 救援阶段类型
   * @type {Edm.String} 
   */
  RescuedPhaseType

  /**
   * RescuedPhaseTypeText
   * @type {Edm.String} 
   */
  RescuedPhaseTypeText

  /**
   * 救援人员纬度
   * @type {Edm.String} 
   */
  Rescuer_Latitude

  /**
   * 救援人员经度
   * @type {Edm.String} 
   */
  Rescuer_Longtitude

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * SalesTerritoryID
   * @type {Edm.String} 
   */
  SalesTerritoryID

  /**
   * SerialID
   * @type {Edm.String} 
   */
  SerialID

  /**
   * ServiceAndSupportTeam
   * @type {Edm.String} 
   */
  ServiceAndSupportTeam

  /**
   * ServiceCategoryName
   * @type {c4codata.MEDIUM_Name} 
   */
  ServiceCategoryName

  /**
   * Service Category
   * @type {Edm.String} 
   */
  ServiceIssueCategoryID

  /**
   * ServiceLevelAgreement
   * @type {Edm.String} 
   */
  ServiceLevelAgreement

  /**
   * Priority
   * @type {Edm.String} 
   */
  ServicePriorityCode

  /**
   * ServicePriorityCodeText
   * @type {Edm.String} 
   */
  ServicePriorityCodeText

  /**
   * Service Request Classification
   * @type {Edm.String} 
   */
  ServiceRequestClassificationCode

  /**
   * ServiceRequestClassificationCodeText
   * @type {Edm.String} 
   */
  ServiceRequestClassificationCodeText

  /**
   * ServiceRequestLifeCycleStatusCode
   * @type {Edm.String} 
   */
  ServiceRequestLifeCycleStatusCode

  /**
   * ServiceRequestLifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  ServiceRequestLifeCycleStatusCodeText

  /**
   * Status
   * @type {Edm.String} 
   */
  ServiceRequestUserLifeCycleStatusCode

  /**
   * ServiceRequestUserLifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  ServiceRequestUserLifeCycleStatusCodeText

  /**
   * ServiceTechnician
   * @type {Edm.String} 
   */
  ServiceTechnician

  /**
   * ServiceTechnicianTeam
   * @type {Edm.String} 
   */
  ServiceTechnicianTeam

  /**
   * 特殊标记
   * @type {Edm.String} 
   */
  SpecialMark

  /**
   * SpecialMarkText
   * @type {Edm.String} 
   */
  SpecialMarkText

  /**
   * 业务支持状态
   * @type {Edm.String} 
   */
  SupportStatus

  /**
   * SupportStatusText
   * @type {Edm.String} 
   */
  SupportStatusText

  /**
   * 工单来源
   * @type {Edm.String} 
   */
  TicketSource

  /**
   * TicketSourceText
   * @type {Edm.String} 
   */
  TicketSourceText

  /**
   * VIN码
   * @type {Edm.String} 
   */
  VINID

  /**
   * VOC-Id
   * @type {Edm.String} 
   */
  VOCId

  /**
   * VOC
   * @type {Edm.String} 
   */
  VOCName

  /**
   * Product Description
   * @type {Edm.String} 
   */
  WarrantyDescription

  /**
   * Warranty From
   * @type {Edm.DateTime} 
   */
  WarrantyFrom

  /**
   * Warranty Until
   * @type {Edm.DateTime} 
   */
  WarrantyTo

  /**
   * 
   * @type {DeferredNavigationProperty|ServicePointLocationAddress|ServicePointLocationAddress[]} 
   */
  ServicePointLocationAddress

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequestAttachmentFolder|ServiceRequestAttachmentFolder[]} 
   */
  ServiceRequestAttachmentFolder

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequestBusinessTransactionDocumentReference|ServiceRequestBusinessTransactionDocumentReference[]} 
   */
  ServiceRequestBusinessTransactionDocumentReference

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequestDescription|ServiceRequestDescription[]} 
   */
  ServiceRequestDescription

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequestHistoricalVersion|ServiceRequestHistoricalVersion[]} 
   */
  ServiceRequestHistoricalVersion

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequestItem|ServiceRequestItem[]} 
   */
  ServiceRequestItem

}

/**
 * ServiceRequestAttachmentFolder
 * 
 * @class ServiceRequestAttachmentFolder
 */
export class ServiceRequestAttachmentFolder extends C4CEntity {

  /**
   * 
   * @type {ServiceRequestAttachmentFolder} 
   */
  _type = ServiceRequestAttachmentFolder

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * ServiceRequestBusinessTransactionDocumentReference
 * 
 * @class ServiceRequestBusinessTransactionDocumentReference
 */
export class ServiceRequestBusinessTransactionDocumentReference extends C4CEntity {

  /**
   * 
   * @type {ServiceRequestBusinessTransactionDocumentReference} 
   */
  _type = ServiceRequestBusinessTransactionDocumentReference

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * Channel Type
   * @type {Edm.String} 
   */
  SocialMediaChannelCode

  /**
   * SocialMediaChannelCodeText
   * @type {Edm.String} 
   */
  SocialMediaChannelCodeText

  /**
   * Activity Type
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequest|ServiceRequest[]} 
   */
  ServiceRequest

}

/**
 * ServiceRequestDescription
 * 
 * @class ServiceRequestDescription
 */
export class ServiceRequestDescription extends C4CEntity {

  /**
   * 
   * @type {ServiceRequestDescription} 
   */
  _type = ServiceRequestDescription

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * ServiceRequestHistoricalVersion
 * 
 * @class ServiceRequestHistoricalVersion
 */
export class ServiceRequestHistoricalVersion extends C4CEntity {

  /**
   * 
   * @type {ServiceRequestHistoricalVersion} 
   */
  _type = ServiceRequestHistoricalVersion

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.String} 
   */
  ETag

  /**
   * EndDateTime
   * @type {Edm.DateTimeOffset} 
   */
  EndDateTime

  /**
   * EscalationStatusCode
   * @type {Edm.String} 
   */
  EscalationStatusCode

  /**
   * EscalationStatusCodeText
   * @type {Edm.String} 
   */
  EscalationStatusCodeText

  /**
   * MainIncidentServiceIssueCategoryCatalogueID
   * @type {Edm.String} 
   */
  MainIncidentServiceIssueCategoryCatalogueID

  /**
   * MainIncidentServiceIssueCategoryID
   * @type {Edm.String} 
   */
  MainIncidentServiceIssueCategoryID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * ProcessorPartyUUID
   * @type {Edm.Guid} 
   */
  ProcessorPartyUUID

  /**
   * SalesAndServiceBusinessAreaServiceOrganisationUUID
   * @type {Edm.Guid} 
   */
  SalesAndServiceBusinessAreaServiceOrganisationUUID

  /**
   * ServiceRequestLifeCycleStatusCode
   * @type {Edm.String} 
   */
  ServiceRequestLifeCycleStatusCode

  /**
   * ServiceRequestLifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  ServiceRequestLifeCycleStatusCodeText

  /**
   * ServiceSupportTeamPartyUUID
   * @type {Edm.Guid} 
   */
  ServiceSupportTeamPartyUUID

  /**
   * ServiceTermsServiceIssueCategoryCatalogueID
   * @type {Edm.String} 
   */
  ServiceTermsServiceIssueCategoryCatalogueID

  /**
   * ServiceTermsServiceIssueCategoryID
   * @type {Edm.String} 
   */
  ServiceTermsServiceIssueCategoryID

  /**
   * ServiceTermsServicePriorityCode
   * @type {Edm.String} 
   */
  ServiceTermsServicePriorityCode

  /**
   * ServiceTermsServicePriorityCodeText
   * @type {Edm.String} 
   */
  ServiceTermsServicePriorityCodeText

  /**
   * ServiceTermsServiceRequestUserLifeCycleStatusCode
   * @type {Edm.String} 
   */
  ServiceTermsServiceRequestUserLifeCycleStatusCode

  /**
   * ServiceTermsServiceRequestUserLifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  ServiceTermsServiceRequestUserLifeCycleStatusCodeText

  /**
   * StartDateTime
   * @type {Edm.DateTimeOffset} 
   */
  StartDateTime

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequest|ServiceRequest[]} 
   */
  ServiceRequest

}

/**
 * ServiceRequestInteraction
 * 
 * @class ServiceRequestInteraction
 */
export class ServiceRequestInteraction extends C4CEntity {

  /**
   * 
   * @type {ServiceRequestInteraction} 
   */
  _type = ServiceRequestInteraction

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * InteractionType
   * @type {Edm.String} 
   */
  InteractionType

  /**
   * InteractionUUID
   * @type {Edm.String} 
   */
  InteractionUUID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ServiceRequestObjectID
   * @type {Edm.String} 
   */
  ServiceRequestObjectID

}

/**
 * ServiceRequestItem
 * 
 * @class ServiceRequestItem
 */
export class ServiceRequestItem extends C4CEntity {

  /**
   * 
   * @type {ServiceRequestItem} 
   */
  _type = ServiceRequestItem

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Description
   * @type {Edm.String} 
   */
  Description

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Product Category Description
   * @type {Edm.String} 
   */
  ProductCategoryDescription

  /**
   * Product Description
   * @type {Edm.String} 
   */
  ProductDescription

  /**
   * ProductID
   * @type {Edm.String} 
   */
  ProductID

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequest|ServiceRequest[]} 
   */
  ServiceRequest

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequestItemScheduleLine|ServiceRequestItemScheduleLine[]} 
   */
  ServiceRequestItemScheduleLine

}

/**
 * ServiceRequestItemScheduleLine
 * 
 * @class ServiceRequestItemScheduleLine
 */
export class ServiceRequestItemScheduleLine extends C4CEntity {

  /**
   * 
   * @type {ServiceRequestItemScheduleLine} 
   */
  _type = ServiceRequestItemScheduleLine

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Quantity
   * @type {c4codata.Quantity} 
   */
  Quantity

  /**
   * Type
   * @type {Edm.String} 
   */
  Type

  /**
   * TypeText
   * @type {Edm.String} 
   */
  TypeText

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequest|ServiceRequest[]} 
   */
  ServiceRequest

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequestItem|ServiceRequestItem[]} 
   */
  ServiceRequestItem

}

/**
 * Task
 * 
 * @class Task
 */
export class Task extends C4CEntity {

  /**
   * 
   * @type {Task} 
   */
  _type = Task

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Account
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Account

  /**
   * Account ID
   * @type {Edm.String} 
   */
  AccountID

  /**
   * Account UUID
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Category
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Date Completed
   * @type {Edm.DateTimeOffset} 
   */
  CompletionDateTime

  /**
   * Completion (%)
   * @type {Edm.Decimal} 
   */
  CompletionPercent

  /**
   * Data Origin
   * @type {Edm.String} 
   */
  DataOriginTypeCode

  /**
   * DataOriginTypeCodeText
   * @type {Edm.String} 
   */
  DataOriginTypeCodeText

  /**
   * Due Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  DueDateTime

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Owner
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Owner

  /**
   * Owner UUID
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * Primary Contact
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  PrimaryContact

  /**
   * Primary Contact ID
   * @type {Edm.String} 
   */
  PrimaryContactID

  /**
   * Primary Contact UUID
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * Priority
   * @type {Edm.String} 
   */
  PriorityCode

  /**
   * PriorityCodeText
   * @type {Edm.String} 
   */
  PriorityCodeText

  /**
   * Processor
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Processor

  /**
   * Processor Email
   * @type {Edm.String} 
   */
  ProcessorEmailURI

  /**
   * Processor ID
   * @type {Edm.String} 
   */
  ProcessorID

  /**
   * Processor Name
   * @type {Edm.String} 
   */
  ProcessorPartyName

  /**
   * Processor UUID
   * @type {Edm.Guid} 
   */
  ProcessorUUID

  /**
   * Reported Date Time
   * @type {Edm.DateTimeOffset} 
   */
  ReportedDateTime

  /**
   * Start Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  StartDateTime

  /**
   * Status
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * Subject
   * @type {Edm.String} 
   */
  Subject

  /**
   * Activity Type
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|TaskAttachment|TaskAttachment[]} 
   */
  TaskAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|TaskInvolvedParties|TaskInvolvedParties[]} 
   */
  TaskInvolvedParties

  /**
   * 
   * @type {DeferredNavigationProperty|TaskNotes|TaskNotes[]} 
   */
  TaskNotes

}

/**
 * TaskAttachment
 * 
 * @class TaskAttachment
 */
export class TaskAttachment extends C4CEntity {

  /**
   * 
   * @type {TaskAttachment} 
   */
  _type = TaskAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * TaskInvolvedParties
 * 
 * @class TaskInvolvedParties
 */
export class TaskInvolvedParties extends C4CEntity {

  /**
   * 
   * @type {TaskInvolvedParties} 
   */
  _type = TaskInvolvedParties

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Address
   * @type {Edm.String} 
   */
  Address

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  EMail

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Name
   * @type {c4codata.ENCRYPTED_LONG_Name} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Party Email
   * @type {Edm.String} 
   */
  PartyEmailURI

  /**
   * PartyID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * Party Name
   * @type {Edm.String} 
   */
  PartyName

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * Phone
   * @type {Edm.String} 
   */
  Phone

  /**
   * RoleCategoryCode
   * @type {Edm.String} 
   */
  RoleCategoryCode

  /**
   * RoleCategoryCodeText
   * @type {Edm.String} 
   */
  RoleCategoryCodeText

  /**
   * RoleCode
   * @type {Edm.String} 
   */
  RoleCode

  /**
   * RoleCodeText
   * @type {Edm.String} 
   */
  RoleCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Task|Task[]} 
   */
  Task

}

/**
 * TaskNotes
 * 
 * @class TaskNotes
 */
export class TaskNotes extends C4CEntity {

  /**
   * 
   * @type {TaskNotes} 
   */
  _type = TaskNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * TimeEntry
 * 
 * @class TimeEntry
 */
export class TimeEntry extends C4CEntity {

  /**
   * 
   * @type {TimeEntry} 
   */
  _type = TimeEntry

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * AutoTimeRecordingIndicator
   * @type {Edm.Boolean} 
   */
  AutoTimeRecordingIndicator

  /**
   * BillingRelevanceIndicator
   * @type {Edm.Boolean} 
   */
  BillingRelevanceIndicator

  /**
   * BusinessTransactionDocumentTypeCode
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentTypeCode

  /**
   * BusinessTransactionDocumentTypeCodeText
   * @type {Edm.String} 
   */
  BusinessTransactionDocumentTypeCodeText

  /**
   * Date
   * @type {Edm.DateTime} 
   */
  Date

  /**
   * Description
   * @type {c4codata.EXTENDED_Name} 
   */
  Description

  /**
   * Duration
   * @type {Edm.String} 
   */
  Duration

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * EmployeeUUID
   * @type {Edm.Guid} 
   */
  EmployeeUUID

  /**
   * EndDateTime
   * @type {Edm.Time} 
   */
  EndDateTime

  /**
   * HeaderReferenceUUID
   * @type {Edm.Guid} 
   */
  HeaderReferenceUUID

  /**
   * ItemReferenceUUID
   * @type {Edm.Guid} 
   */
  ItemReferenceUUID

  /**
   * LifeCycleStatusCode
   * @type {Edm.String} 
   */
  LifeCycleStatusCode

  /**
   * LifeCycleStatusCodeText
   * @type {Edm.String} 
   */
  LifeCycleStatusCodeText

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * StartDateTime
   * @type {Edm.Time} 
   */
  StartDateTime

  /**
   * TimeReportUUID
   * @type {Edm.Guid} 
   */
  TimeReportUUID

  /**
   * Time Type
   * @type {Edm.String} 
   */
  TimeTypeCode

  /**
   * TimeTypeCodeText
   * @type {Edm.String} 
   */
  TimeTypeCodeText

  /**
   * TimeZone
   * @type {Edm.String} 
   */
  TimeZone

  /**
   * TimeZoneText
   * @type {Edm.String} 
   */
  TimeZoneText

  /**
   * 
   * @type {DeferredNavigationProperty|Employee|Employee[]} 
   */
  Employee

  /**
   * 
   * @type {DeferredNavigationProperty|ServiceRequest|ServiceRequest[]} 
   */
  ServiceRequest

  /**
   * 
   * @type {DeferredNavigationProperty|TimeEntryItem|TimeEntryItem[]} 
   */
  TimeEntryItem

  /**
   * 
   * @type {DeferredNavigationProperty|TimeReport|TimeReport[]} 
   */
  TimeReport

}

/**
 * TimeEntryItem
 * 
 * @class TimeEntryItem
 */
export class TimeEntryItem extends C4CEntity {

  /**
   * 
   * @type {TimeEntryItem} 
   */
  _type = TimeEntryItem

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * ProductID
   * @type {Edm.String} 
   */
  ProductID

  /**
   * ServiceItemUUID
   * @type {Edm.Guid} 
   */
  ServiceItemUUID

  /**
   * TimeItemDuration
   * @type {Edm.String} 
   */
  TimeItemDuration

  /**
   * TimeItemEndDate
   * @type {Edm.DateTime} 
   */
  TimeItemEndDate

  /**
   * TimeItemEndTime
   * @type {Edm.Time} 
   */
  TimeItemEndTime

  /**
   * TimeItemStartDate
   * @type {Edm.DateTime} 
   */
  TimeItemStartDate

  /**
   * TimeItemStartTime
   * @type {Edm.Time} 
   */
  TimeItemStartTime

  /**
   * TimeItemUUID
   * @type {Edm.Guid} 
   */
  TimeItemUUID

  /**
   * TimeZoneCode
   * @type {Edm.String} 
   */
  TimeZoneCode

  /**
   * TimeZoneCodeText
   * @type {Edm.String} 
   */
  TimeZoneCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|TimeEntry|TimeEntry[]} 
   */
  TimeEntry

}

/**
 * TimeReport
 * 
 * @class TimeReport
 */
export class TimeReport extends C4CEntity {

  /**
   * 
   * @type {TimeReport} 
   */
  _type = TimeReport

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Description
   * @type {c4codata.EXTENDED_Name} 
   */
  Description

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * EmployeeUUID
   * @type {Edm.Guid} 
   */
  EmployeeUUID

  /**
   * End Date
   * @type {Edm.DateTime} 
   */
  EndDate

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * RejectionReason
   * @type {c4codata.Text} 
   */
  RejectionReason

  /**
   * ReportName
   * @type {c4codata.EXTENDED_Name} 
   */
  ReportName

  /**
   * StartDate
   * @type {Edm.DateTime} 
   */
  StartDate

  /**
   * Status
   * @type {Edm.String} 
   */
  Status

  /**
   * StatusText
   * @type {Edm.String} 
   */
  StatusText

  /**
   * TotalDuration
   * @type {Edm.String} 
   */
  TotalDuration

  /**
   * 
   * @type {DeferredNavigationProperty|Employee|Employee[]} 
   */
  Employee

  /**
   * 
   * @type {DeferredNavigationProperty|TimeEntry|TimeEntry[]} 
   */
  TimeEntry

}

/**
 * User
 * 
 * @class User
 */
export class User extends C4CEntity {

  /**
   * 
   * @type {User} 
   */
  _type = User

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Name
   * @type {Edm.String} 
   */
  ChangedBy

  /**
   * Changed By
   * @type {Edm.Guid} 
   */
  ChangedByUUID

  /**
   * ChangedOn
   * @type {Edm.DateTimeOffset} 
   */
  ChangedOn

  /**
   * Name
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created By
   * @type {Edm.Guid} 
   */
  CreatedByUUID

  /**
   * CreatedOn
   * @type {Edm.DateTimeOffset} 
   */
  CreatedOn

  /**
   * DateFormatCode
   * @type {Edm.String} 
   */
  DateFormatCode

  /**
   * DateFormatCodeText
   * @type {Edm.String} 
   */
  DateFormatCodeText

  /**
   * DecimalFormatCode
   * @type {Edm.String} 
   */
  DecimalFormatCode

  /**
   * DecimalFormatCodeText
   * @type {Edm.String} 
   */
  DecimalFormatCodeText

  /**
   * E-Mail
   * @type {Edm.String} 
   */
  Email

  /**
   * ID
   * @type {Edm.String} 
   */
  EmployeeID

  /**
   * EmployeeUUID
   * @type {Edm.Guid} 
   */
  EmployeeUUID

  /**
   * InactiveIndicator
   * @type {Edm.Boolean} 
   */
  InactiveIndicator

  /**
   * LogonLanguageCode
   * @type {Edm.String} 
   */
  LogonLanguageCode

  /**
   * LogonLanguageCodeText
   * @type {Edm.String} 
   */
  LogonLanguageCodeText

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * PasswordInactiveIndicator
   * @type {Edm.Boolean} 
   */
  PasswordInactiveIndicator

  /**
   * PasswordLockedIndicator
   * @type {Edm.Boolean} 
   */
  PasswordLockedIndicator

  /**
   * PasswordPolicyCode
   * @type {Edm.String} 
   */
  PasswordPolicyCode

  /**
   * PasswordPolicyCodeText
   * @type {Edm.String} 
   */
  PasswordPolicyCodeText

  /**
   * StatusCode
   * @type {Edm.String} 
   */
  StatusCode

  /**
   * StatusCodeText
   * @type {Edm.String} 
   */
  StatusCodeText

  /**
   * TimeFormatCode
   * @type {Edm.String} 
   */
  TimeFormatCode

  /**
   * TimeFormatCodeText
   * @type {Edm.String} 
   */
  TimeFormatCodeText

  /**
   * TimeZoneCode
   * @type {Edm.String} 
   */
  TimeZoneCode

  /**
   * TimeZoneCodeText
   * @type {Edm.String} 
   */
  TimeZoneCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * UserAccountID
   * @type {Edm.String} 
   */
  UserAccountID

  /**
   * UserAccountTypeCode
   * @type {Edm.String} 
   */
  UserAccountTypeCode

  /**
   * UserAccountTypeCodeText
   * @type {Edm.String} 
   */
  UserAccountTypeCodeText

  /**
   * UserID
   * @type {Edm.String} 
   */
  UserID

  /**
   * Name
   * @type {Edm.String} 
   */
  UserName

}

/**
 * UserSubscription
 * 
 * @class UserSubscription
 */
export class UserSubscription extends C4CEntity {

  /**
   * 
   * @type {UserSubscription} 
   */
  _type = UserSubscription

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * CountedUser
   * @type {Edm.Boolean} 
   */
  CountedUser

  /**
   * CountedUserAsOfDate
   * @type {Edm.DateTimeOffset} 
   */
  CountedUserAsOfDate

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * UserID
   * @type {Edm.String} 
   */
  UserID

  /**
   * Name
   * @type {Edm.String} 
   */
  UserName

  /**
   * 
   * @type {DeferredNavigationProperty|UserTypeAssignment|UserTypeAssignment[]} 
   */
  UserTypeAssignment

}

/**
 * UserTypeAssignment
 * 
 * @class UserTypeAssignment
 */
export class UserTypeAssignment extends C4CEntity {

  /**
   * 
   * @type {UserTypeAssignment} 
   */
  _type = UserTypeAssignment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * SubscriptionType
   * @type {Edm.String} 
   */
  SubscriptionType

  /**
   * SubscriptionTypeText
   * @type {Edm.String} 
   */
  SubscriptionTypeText

  /**
   * UserType
   * @type {Edm.String} 
   */
  UserType

  /**
   * UserTypeText
   * @type {Edm.String} 
   */
  UserTypeText

  /**
   * 
   * @type {DeferredNavigationProperty|UserSubscription|UserSubscription[]} 
   */
  UserSubscription

}

/**
 * Visit
 * 
 * @class Visit
 */
export class Visit extends C4CEntity {

  /**
   * 
   * @type {Visit} 
   */
  _type = Visit

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Account ID
   * @type {Edm.String} 
   */
  AccountPartyID

  /**
   * Account Name
   * @type {Edm.String} 
   */
  AccountPartyName

  /**
   * Account
   * @type {Edm.Guid} 
   */
  AccountUUID

  /**
   * Location Line 2
   * @type {Edm.String} 
   */
  AdditionalLocationName

  /**
   * All Day Event
   * @type {Edm.Boolean} 
   */
  AllDayEvent

  /**
   * Created On
   * @type {Edm.DateTimeOffset} 
   */
  CreationDateTime

  /**
   * Data Origin
   * @type {Edm.String} 
   */
  DataOriginTypeCode

  /**
   * DataOriginTypeCodeText
   * @type {Edm.String} 
   */
  DataOriginTypeCodeText

  /**
   * Distribution Channel
   * @type {Edm.String} 
   */
  DistributionChannel

  /**
   * DistributionChannelText
   * @type {Edm.String} 
   */
  DistributionChannelText

  /**
   * Division
   * @type {Edm.String} 
   */
  Division

  /**
   * DivisionText
   * @type {Edm.String} 
   */
  DivisionText

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * End Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  EndDateTime

  /**
   * Category
   * @type {Edm.String} 
   */
  GroupCode

  /**
   * GroupCodeText
   * @type {Edm.String} 
   */
  GroupCodeText

  /**
   * Groupware Item Id
   * @type {Edm.String} 
   */
  GroupwareItemID

  /**
   * Visit ID
   * @type {Edm.String} 
   */
  ID

  /**
   * Changed On
   * @type {Edm.DateTimeOffset} 
   */
  LastChangeDateTime

  /**
   * Location Name
   * @type {Edm.String} 
   */
  Location

  /**
   * Marked For Deletion
   * @type {Edm.Boolean} 
   */
  MarkedForDeletion

  /**
   * Marked For Deletion Date
   * @type {Edm.DateTime} 
   */
  MarkedForDeletionDate

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Organizer Email
   * @type {Edm.String} 
   */
  OrganizerEmailURI

  /**
   * Organizer Party ID
   * @type {Edm.String} 
   */
  OrganizerPartyID

  /**
   * Organizer Party Name
   * @type {Edm.String} 
   */
  OrganizerPartyName

  /**
   * Organizer
   * @type {Edm.Guid} 
   */
  OrganizerUUID

  /**
   * Owner Email
   * @type {Edm.String} 
   */
  OwnerEmailURI

  /**
   * Owner Party ID
   * @type {Edm.String} 
   */
  OwnerPartyID

  /**
   * Owner Party Name
   * @type {Edm.String} 
   */
  OwnerPartyName

  /**
   * Owner
   * @type {Edm.Guid} 
   */
  OwnerUUID

  /**
   * Primary Contact ID
   * @type {Edm.String} 
   */
  PrimaryContactPartyID

  /**
   * Primary Contact Name
   * @type {Edm.String} 
   */
  PrimaryContactPartyName

  /**
   * PrimaryContact
   * @type {Edm.Guid} 
   */
  PrimaryContactUUID

  /**
   * Reported Date/Time
   * @type {Edm.DateTimeOffset} 
   */
  ReportedDateTime

  /**
   * Route
   * @type {Edm.Guid} 
   */
  Route

  /**
   * Sales Organization
   * @type {Edm.String} 
   */
  SalesOrganisation

  /**
   * Territory ID
   * @type {Edm.String} 
   */
  SalesTerritory

  /**
   * Start Date/Time
   * @type {c4codata.LOCALNORMALISED_DateTime} 
   */
  StartDateTime

  /**
   * Status
   * @type {Edm.String} 
   */
  Status

  /**
   * StatusText
   * @type {Edm.String} 
   */
  StatusText

  /**
   * Subject
   * @type {Edm.String} 
   */
  Subject

  /**
   * Tour
   * @type {Edm.Guid} 
   */
  Tour

  /**
   * Activity Type
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

  /**
   * 
   * @type {DeferredNavigationProperty|VisitAttachment|VisitAttachment[]} 
   */
  VisitAttachment

  /**
   * 
   * @type {DeferredNavigationProperty|VisitNotes|VisitNotes[]} 
   */
  VisitNotes

  /**
   * 
   * @type {DeferredNavigationProperty|VisitParty|VisitParty[]} 
   */
  VisitParty

  /**
   * 
   * @type {DeferredNavigationProperty|VisitReference|VisitReference[]} 
   */
  VisitReference

}

/**
 * VisitAttachment
 * 
 * @class VisitAttachment
 */
export class VisitAttachment extends C4CEntity {

  /**
   * 
   * @type {VisitAttachment} 
   */
  _type = VisitAttachment

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Binary
   * @type {Edm.Binary} 
   */
  Binary

  /**
   * Category Code
   * @type {Edm.String} 
   */
  CategoryCode

  /**
   * CategoryCodeText
   * @type {Edm.String} 
   */
  CategoryCodeText

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * Document Link
   * @type {Edm.String} 
   */
  DocumentLink

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * Last Updated On
   * @type {Edm.DateTime} 
   */
  LastUpdatedOn

  /**
   * Link Web URI
   * @type {Edm.String} 
   */
  LinkWebURI

  /**
   * Mime Type
   * @type {Edm.String} 
   */
  MimeType

  /**
   * Name
   * @type {Edm.String} 
   */
  Name

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Size In KiloBytes
   * @type {Edm.Decimal} 
   */
  SizeInkB

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * UUID
   * @type {Edm.Guid} 
   */
  UUID

}

/**
 * VisitNotes
 * 
 * @class VisitNotes
 */
export class VisitNotes extends C4CEntity {

  /**
   * 
   * @type {VisitNotes} 
   */
  _type = VisitNotes

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * Author Name
   * @type {Edm.String} 
   */
  AuthorName

  /**
   * Author UUID
   * @type {Edm.Guid} 
   */
  AuthorUUID

  /**
   * Created By
   * @type {Edm.String} 
   */
  CreatedBy

  /**
   * Created On
   * @type {Edm.DateTime} 
   */
  CreatedOn

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Language Code
   * @type {Edm.String} 
   */
  LanguageCode

  /**
   * LanguageCodeText
   * @type {Edm.String} 
   */
  LanguageCodeText

  /**
   * Last Updated By
   * @type {Edm.String} 
   */
  LastUpdatedBy

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * Text
   * @type {Edm.String} 
   */
  Text

  /**
   * Type Code
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * Updated On
   * @type {Edm.DateTime} 
   */
  UpdatedOn

}

/**
 * VisitParty
 * 
 * @class VisitParty
 */
export class VisitParty extends C4CEntity {

  /**
   * 
   * @type {VisitParty} 
   */
  _type = VisitParty

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Party Email
   * @type {Edm.String} 
   */
  Email

  /**
   * FormattedPhoneNumber
   * @type {Edm.String} 
   */
  FormattedPhoneNumber

  /**
   * MainIndicator
   * @type {Edm.Boolean} 
   */
  MainIndicator

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * PartyID
   * @type {Edm.String} 
   */
  PartyID

  /**
   * Party Name
   * @type {Edm.String} 
   */
  PartyName

  /**
   * PartyRoleCode
   * @type {Edm.String} 
   */
  PartyRoleCode

  /**
   * PartyRoleCodeText
   * @type {Edm.String} 
   */
  PartyRoleCodeText

  /**
   * PartyUUID
   * @type {Edm.Guid} 
   */
  PartyUUID

  /**
   * VisitGroupCode
   * @type {Edm.String} 
   */
  VisitGroupCode

  /**
   * VisitGroupCodeText
   * @type {Edm.String} 
   */
  VisitGroupCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Visit|Visit[]} 
   */
  Visit

}

/**
 * VisitReference
 * 
 * @class VisitReference
 */
export class VisitReference extends C4CEntity {

  /**
   * 
   * @type {VisitReference} 
   */
  _type = VisitReference

  /**
   * 
   * @type {OData} 
   */
  _odata = odata

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * ID
   * @type {Edm.String} 
   */
  ID

  /**
   * ItemUUID
   * @type {Edm.Guid} 
   */
  ItemUUID

  /**
   * ObjectID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * ParentObjectID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * ReferenceRoleCode
   * @type {Edm.String} 
   */
  ReferenceRoleCode

  /**
   * ReferenceRoleCodeText
   * @type {Edm.String} 
   */
  ReferenceRoleCodeText

  /**
   * TypeCode
   * @type {Edm.String} 
   */
  TypeCode

  /**
   * TypeCodeText
   * @type {Edm.String} 
   */
  TypeCodeText

  /**
   * VisitGroupCode
   * @type {Edm.String} 
   */
  VisitGroupCode

  /**
   * VisitGroupCodeText
   * @type {Edm.String} 
   */
  VisitGroupCodeText

  /**
   * 
   * @type {DeferredNavigationProperty|Visit|Visit[]} 
   */
  Visit

}
/**
 * readAccountABCClassificationCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountABCClassificationCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountABCClassificationCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountABCClassificationCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountABCClassificationCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountABCClassificationCodeCollection", id, params), CodeList)
}


/**
 * readAccountAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountAddress>>}
 */
export function readAccountAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountAddressCollection", undefined, params), AccountAddress)
}


/**
 * readSingleAccountAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountAddress>>}
 */
export function readSingleAccountAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAddressCollection", id, params), AccountAddress)
}


/**
 * createAccountAddressCollection
 * 
 * @param {AccountAddress} entity 
 * @returns {Promise<C4CODataSingleResult<AccountAddress>>}
 */
export function createAccountAddressCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAddressCollection", undefined, undefined, "POST", entity), AccountAddress)
}


/**
 * updateAccountAddressCollection
 * 
 * @param {string} id 
 * @param {AccountAddress} entity 
 * @returns {Promise<C4CODataSingleResult<AccountAddress>>}
 */
export function updateAccountAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAddressCollection", id, undefined, "PATCH", entity), AccountAddress)
}


/**
 * replaceAccountAddressCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountAddress} entity 
 * @returns {Promise<C4CODataSingleResult<AccountAddress>>}
 */
export function replaceAccountAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAddressCollection", id, undefined, "PUT", entity), AccountAddress)
}


/**
 * deleteSingleAccountAddressCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountAddressCollection(id) {
  return odata.request("AccountAddressCollection", id, undefined ,"DELETE")
}


/**
 * readAccountAddressInformationCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountAddressInformationCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountAddressInformationCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountAddressInformationCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountAddressInformationCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAddressInformationCountryCodeCollection", id, params), CodeList)
}


/**
 * readAccountAddressInformationPOBoxPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountAddressInformationPOBoxPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountAddressInformationPOBoxPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountAddressInformationPOBoxPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountAddressInformationPOBoxPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAddressInformationPOBoxPostalCodeCollection", id, params), CodeList)
}


/**
 * readAccountAddressInformationPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountAddressInformationPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountAddressInformationPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountAddressInformationPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountAddressInformationPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAddressInformationPostalCodeCollection", id, params), CodeList)
}


/**
 * readAccountAddressStateCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readAccountAddressStateCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountAddressStateCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleAccountAddressStateCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleAccountAddressStateCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAddressStateCollection", id, params), ContextualCodeList)
}


/**
 * readAccountAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountAttachment>>}
 */
export function readAccountAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountAttachmentCollection", undefined, params), AccountAttachment)
}


/**
 * readSingleAccountAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountAttachment>>}
 */
export function readSingleAccountAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAttachmentCollection", id, params), AccountAttachment)
}


/**
 * createAccountAttachmentCollection
 * 
 * @param {AccountAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<AccountAttachment>>}
 */
export function createAccountAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAttachmentCollection", undefined, undefined, "POST", entity), AccountAttachment)
}


/**
 * updateAccountAttachmentCollection
 * 
 * @param {string} id 
 * @param {AccountAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<AccountAttachment>>}
 */
export function updateAccountAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAttachmentCollection", id, undefined, "PATCH", entity), AccountAttachment)
}


/**
 * replaceAccountAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<AccountAttachment>>}
 */
export function replaceAccountAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountAttachmentCollection", id, undefined, "PUT", entity), AccountAttachment)
}


/**
 * deleteSingleAccountAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountAttachmentCollection(id) {
  return odata.request("AccountAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readAccountCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountCategoryCodeCollection", id, params), CodeList)
}


/**
 * readAccountCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Account>>}
 */
export function readAccountCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountCollection", undefined, params), Account)
}


/**
 * readSingleAccountCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Account>>}
 */
export function readSingleAccountCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountCollection", id, params), Account)
}


/**
 * createAccountCollection
 * 
 * @param {Account} entity 
 * @returns {Promise<C4CODataSingleResult<Account>>}
 */
export function createAccountCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountCollection", undefined, undefined, "POST", entity), Account)
}


/**
 * updateAccountCollection
 * 
 * @param {string} id 
 * @param {Account} entity 
 * @returns {Promise<C4CODataSingleResult<Account>>}
 */
export function updateAccountCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountCollection", id, undefined, "PATCH", entity), Account)
}


/**
 * replaceAccountCollection
 * replace a entity
 * @param {string} id 
 * @param {Account} entity 
 * @returns {Promise<C4CODataSingleResult<Account>>}
 */
export function replaceAccountCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountCollection", id, undefined, "PUT", entity), Account)
}


/**
 * deleteSingleAccountCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountCollection(id) {
  return odata.request("AccountCollection", id, undefined ,"DELETE")
}


/**
 * readAccountContactAllowedCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountContactAllowedCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactAllowedCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountContactAllowedCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountContactAllowedCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactAllowedCodeCollection", id, params), CodeList)
}


/**
 * readAccountContactCommunicationDataCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountContactCommunicationData>>}
 */
export function readAccountContactCommunicationDataCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactCommunicationDataCollection", undefined, params), AccountContactCommunicationData)
}


/**
 * readSingleAccountContactCommunicationDataCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountContactCommunicationData>>}
 */
export function readSingleAccountContactCommunicationDataCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactCommunicationDataCollection", id, params), AccountContactCommunicationData)
}


/**
 * createAccountContactCommunicationDataCollection
 * 
 * @param {AccountContactCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContactCommunicationData>>}
 */
export function createAccountContactCommunicationDataCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactCommunicationDataCollection", undefined, undefined, "POST", entity), AccountContactCommunicationData)
}


/**
 * updateAccountContactCommunicationDataCollection
 * 
 * @param {string} id 
 * @param {AccountContactCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContactCommunicationData>>}
 */
export function updateAccountContactCommunicationDataCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactCommunicationDataCollection", id, undefined, "PATCH", entity), AccountContactCommunicationData)
}


/**
 * replaceAccountContactCommunicationDataCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountContactCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContactCommunicationData>>}
 */
export function replaceAccountContactCommunicationDataCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactCommunicationDataCollection", id, undefined, "PUT", entity), AccountContactCommunicationData)
}


/**
 * deleteSingleAccountContactCommunicationDataCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountContactCommunicationDataCollection(id) {
  return odata.request("AccountContactCommunicationDataCollection", id, undefined ,"DELETE")
}


/**
 * readAccountContactRelationshipBusinessPartnerFunctionTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountContactRelationshipBusinessPartnerFunctionTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactRelationshipBusinessPartnerFunctionTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountContactRelationshipBusinessPartnerFunctionTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountContactRelationshipBusinessPartnerFunctionTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactRelationshipBusinessPartnerFunctionTypeCodeCollection", id, params), CodeList)
}


/**
 * readAccountContactRelationshipBusinessPartnerFunctionalAreaCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountContactRelationshipBusinessPartnerFunctionalAreaCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactRelationshipBusinessPartnerFunctionalAreaCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountContactRelationshipBusinessPartnerFunctionalAreaCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountContactRelationshipBusinessPartnerFunctionalAreaCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactRelationshipBusinessPartnerFunctionalAreaCodeCollection", id, params), CodeList)
}


/**
 * readAccountContactRelationshipCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountContactRelationship>>}
 */
export function readAccountContactRelationshipCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactRelationshipCollection", undefined, params), AccountContactRelationship)
}


/**
 * readSingleAccountContactRelationshipCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountContactRelationship>>}
 */
export function readSingleAccountContactRelationshipCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactRelationshipCollection", id, params), AccountContactRelationship)
}


/**
 * createAccountContactRelationshipCollection
 * 
 * @param {AccountContactRelationship} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContactRelationship>>}
 */
export function createAccountContactRelationshipCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactRelationshipCollection", undefined, undefined, "POST", entity), AccountContactRelationship)
}


/**
 * updateAccountContactRelationshipCollection
 * 
 * @param {string} id 
 * @param {AccountContactRelationship} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContactRelationship>>}
 */
export function updateAccountContactRelationshipCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactRelationshipCollection", id, undefined, "PATCH", entity), AccountContactRelationship)
}


/**
 * replaceAccountContactRelationshipCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountContactRelationship} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContactRelationship>>}
 */
export function replaceAccountContactRelationshipCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactRelationshipCollection", id, undefined, "PUT", entity), AccountContactRelationship)
}


/**
 * deleteSingleAccountContactRelationshipCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountContactRelationshipCollection(id) {
  return odata.request("AccountContactRelationshipCollection", id, undefined ,"DELETE")
}


/**
 * readAccountContactRelationshipVIPReasonCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountContactRelationshipVIPReasonCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactRelationshipVIPReasonCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountContactRelationshipVIPReasonCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountContactRelationshipVIPReasonCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactRelationshipVIPReasonCodeCollection", id, params), CodeList)
}


/**
 * readAccountContactsCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountContactsCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactsCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountContactsCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountContactsCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactsCategoryCodeCollection", id, params), CodeList)
}


/**
 * readAccountContactsCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountContacts>>}
 */
export function readAccountContactsCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactsCollection", undefined, params), AccountContacts)
}


/**
 * readSingleAccountContactsCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountContacts>>}
 */
export function readSingleAccountContactsCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactsCollection", id, params), AccountContacts)
}


/**
 * createAccountContactsCollection
 * 
 * @param {AccountContacts} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContacts>>}
 */
export function createAccountContactsCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactsCollection", undefined, undefined, "POST", entity), AccountContacts)
}


/**
 * updateAccountContactsCollection
 * 
 * @param {string} id 
 * @param {AccountContacts} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContacts>>}
 */
export function updateAccountContactsCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactsCollection", id, undefined, "PATCH", entity), AccountContacts)
}


/**
 * replaceAccountContactsCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountContacts} entity 
 * @returns {Promise<C4CODataSingleResult<AccountContacts>>}
 */
export function replaceAccountContactsCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactsCollection", id, undefined, "PUT", entity), AccountContacts)
}


/**
 * deleteSingleAccountContactsCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountContactsCollection(id) {
  return odata.request("AccountContactsCollection", id, undefined ,"DELETE")
}


/**
 * readAccountContactsStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountContactsStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountContactsStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountContactsStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountContactsStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountContactsStatusCodeCollection", id, params), CodeList)
}


/**
 * readAccountCorrespondenceLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountCorrespondenceLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountCorrespondenceLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountCorrespondenceLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountCorrespondenceLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountCorrespondenceLanguageCodeCollection", id, params), CodeList)
}


/**
 * readAccountCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountCountryCodeCollection", id, params), CodeList)
}


/**
 * readAccountIndustryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readAccountIndustryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountIndustryCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleAccountIndustryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleAccountIndustryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountIndustryCodeCollection", id, params), ContextualCodeList)
}


/**
 * readAccountLegalFormCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountLegalFormCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountLegalFormCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountLegalFormCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountLegalFormCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountLegalFormCodeCollection", id, params), CodeList)
}


/**
 * readAccountMainAddressDefaultPostalAddrRep_ObjectID1Collection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountMainAddressDefaultPostalAddrRep_ObjectID1Collection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountMainAddressDefaultPostalAddrRep_ObjectID1Collection", undefined, params), CodeList)
}


/**
 * readSingleAccountMainAddressDefaultPostalAddrRep_ObjectID1Collection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountMainAddressDefaultPostalAddrRep_ObjectID1Collection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountMainAddressDefaultPostalAddrRep_ObjectID1Collection", id, params), CodeList)
}


/**
 * readAccountNielsenRegionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountNielsenRegionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountNielsenRegionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountNielsenRegionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountNielsenRegionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountNielsenRegionCodeCollection", id, params), CodeList)
}


/**
 * readAccountNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountNotes>>}
 */
export function readAccountNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountNotesCollection", undefined, params), AccountNotes)
}


/**
 * readSingleAccountNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountNotes>>}
 */
export function readSingleAccountNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountNotesCollection", id, params), AccountNotes)
}


/**
 * createAccountNotesCollection
 * 
 * @param {AccountNotes} entity 
 * @returns {Promise<C4CODataSingleResult<AccountNotes>>}
 */
export function createAccountNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountNotesCollection", undefined, undefined, "POST", entity), AccountNotes)
}


/**
 * updateAccountNotesCollection
 * 
 * @param {string} id 
 * @param {AccountNotes} entity 
 * @returns {Promise<C4CODataSingleResult<AccountNotes>>}
 */
export function updateAccountNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountNotesCollection", id, undefined, "PATCH", entity), AccountNotes)
}


/**
 * replaceAccountNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountNotes} entity 
 * @returns {Promise<C4CODataSingleResult<AccountNotes>>}
 */
export function replaceAccountNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountNotesCollection", id, undefined, "PUT", entity), AccountNotes)
}


/**
 * deleteSingleAccountNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountNotesCollection(id) {
  return odata.request("AccountNotesCollection", id, undefined ,"DELETE")
}


/**
 * readAccountPOBoxDeviatingCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountPOBoxDeviatingCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountPOBoxDeviatingCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountPOBoxDeviatingCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountPOBoxDeviatingCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountPOBoxDeviatingCountryCodeCollection", id, params), CodeList)
}


/**
 * readAccountPOBoxDeviatingRegionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readAccountPOBoxDeviatingRegionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountPOBoxDeviatingRegionCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleAccountPOBoxDeviatingRegionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleAccountPOBoxDeviatingRegionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountPOBoxDeviatingRegionCodeCollection", id, params), ContextualCodeList)
}


/**
 * readAccountPOBoxPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountPOBoxPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountPOBoxPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountPOBoxPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountPOBoxPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountPOBoxPostalCodeCollection", id, params), CodeList)
}


/**
 * readAccountPreferredCommunicationMediumTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountPreferredCommunicationMediumTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountPreferredCommunicationMediumTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountPreferredCommunicationMediumTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountPreferredCommunicationMediumTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountPreferredCommunicationMediumTypeCodeCollection", id, params), CodeList)
}


/**
 * readAccountRegionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readAccountRegionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountRegionCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleAccountRegionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleAccountRegionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountRegionCodeCollection", id, params), ContextualCodeList)
}


/**
 * readAccountRoleBusinessCharacterCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountRoleBusinessCharacterCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountRoleBusinessCharacterCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountRoleBusinessCharacterCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountRoleBusinessCharacterCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountRoleBusinessCharacterCodeCollection", id, params), CodeList)
}


/**
 * readAccountRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountRoleCodeCollection", id, params), CodeList)
}


/**
 * readAccountRoleCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountRole>>}
 */
export function readAccountRoleCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountRoleCollection", undefined, params), AccountRole)
}


/**
 * readSingleAccountRoleCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountRole>>}
 */
export function readSingleAccountRoleCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountRoleCollection", id, params), AccountRole)
}


/**
 * createAccountRoleCollection
 * 
 * @param {AccountRole} entity 
 * @returns {Promise<C4CODataSingleResult<AccountRole>>}
 */
export function createAccountRoleCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountRoleCollection", undefined, undefined, "POST", entity), AccountRole)
}


/**
 * updateAccountRoleCollection
 * 
 * @param {string} id 
 * @param {AccountRole} entity 
 * @returns {Promise<C4CODataSingleResult<AccountRole>>}
 */
export function updateAccountRoleCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountRoleCollection", id, undefined, "PATCH", entity), AccountRole)
}


/**
 * replaceAccountRoleCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountRole} entity 
 * @returns {Promise<C4CODataSingleResult<AccountRole>>}
 */
export function replaceAccountRoleCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountRoleCollection", id, undefined, "PUT", entity), AccountRole)
}


/**
 * deleteSingleAccountRoleCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountRoleCollection(id) {
  return odata.request("AccountRoleCollection", id, undefined ,"DELETE")
}


/**
 * readAccountRoleRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountRoleRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountRoleRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountRoleRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountRoleRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountRoleRoleCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataBillingBlockingReasonCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataBillingBlockingReasonCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataBillingBlockingReasonCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataBillingBlockingReasonCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataBillingBlockingReasonCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataBillingBlockingReasonCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountSalesData>>}
 */
export function readAccountSalesDataCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataCollection", undefined, params), AccountSalesData)
}


/**
 * readSingleAccountSalesDataCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountSalesData>>}
 */
export function readSingleAccountSalesDataCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataCollection", id, params), AccountSalesData)
}


/**
 * createAccountSalesDataCollection
 * 
 * @param {AccountSalesData} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesData>>}
 */
export function createAccountSalesDataCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataCollection", undefined, undefined, "POST", entity), AccountSalesData)
}


/**
 * updateAccountSalesDataCollection
 * 
 * @param {string} id 
 * @param {AccountSalesData} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesData>>}
 */
export function updateAccountSalesDataCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataCollection", id, undefined, "PATCH", entity), AccountSalesData)
}


/**
 * replaceAccountSalesDataCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountSalesData} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesData>>}
 */
export function replaceAccountSalesDataCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataCollection", id, undefined, "PUT", entity), AccountSalesData)
}


/**
 * deleteSingleAccountSalesDataCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountSalesDataCollection(id) {
  return odata.request("AccountSalesDataCollection", id, undefined ,"DELETE")
}


/**
 * readAccountSalesDataCurrencyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataCurrencyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataCurrencyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataCurrencyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataCurrencyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataCurrencyCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataCustomerGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataCustomerGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataCustomerGroupCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataCustomerGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataCustomerGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataCustomerGroupCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataDeliveryBlockingReasonCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataDeliveryBlockingReasonCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataDeliveryBlockingReasonCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataDeliveryBlockingReasonCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataDeliveryBlockingReasonCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataDeliveryBlockingReasonCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataDeliveryPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataDeliveryPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataDeliveryPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataDeliveryPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataDeliveryPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataDeliveryPriorityCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataDistributionChannelCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataDistributionChannelCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataDistributionChannelCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataDistributionChannelCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataDistributionChannelCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataDistributionChannelCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataDivisionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataDivisionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataDivisionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataDivisionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataDivisionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataDivisionCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataIncotermsCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataIncotermsCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataIncotermsCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataIncotermsCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataIncotermsCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataIncotermsCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataOrderBlockingReasonCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataOrderBlockingReasonCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataOrderBlockingReasonCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataOrderBlockingReasonCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataOrderBlockingReasonCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataOrderBlockingReasonCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesDataPaymentTermsCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountSalesDataPaymentTermsCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesDataPaymentTermsCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountSalesDataPaymentTermsCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountSalesDataPaymentTermsCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesDataPaymentTermsCodeCollection", id, params), CodeList)
}


/**
 * readAccountSalesGroupNameCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountSalesGroupName>>}
 */
export function readAccountSalesGroupNameCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesGroupNameCollection", undefined, params), AccountSalesGroupName)
}


/**
 * readSingleAccountSalesGroupNameCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountSalesGroupName>>}
 */
export function readSingleAccountSalesGroupNameCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesGroupNameCollection", id, params), AccountSalesGroupName)
}


/**
 * createAccountSalesGroupNameCollection
 * 
 * @param {AccountSalesGroupName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesGroupName>>}
 */
export function createAccountSalesGroupNameCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesGroupNameCollection", undefined, undefined, "POST", entity), AccountSalesGroupName)
}


/**
 * updateAccountSalesGroupNameCollection
 * 
 * @param {string} id 
 * @param {AccountSalesGroupName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesGroupName>>}
 */
export function updateAccountSalesGroupNameCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesGroupNameCollection", id, undefined, "PATCH", entity), AccountSalesGroupName)
}


/**
 * replaceAccountSalesGroupNameCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountSalesGroupName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesGroupName>>}
 */
export function replaceAccountSalesGroupNameCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesGroupNameCollection", id, undefined, "PUT", entity), AccountSalesGroupName)
}


/**
 * deleteSingleAccountSalesGroupNameCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountSalesGroupNameCollection(id) {
  return odata.request("AccountSalesGroupNameCollection", id, undefined ,"DELETE")
}


/**
 * readAccountSalesOfficeNameCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountSalesOfficeName>>}
 */
export function readAccountSalesOfficeNameCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesOfficeNameCollection", undefined, params), AccountSalesOfficeName)
}


/**
 * readSingleAccountSalesOfficeNameCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountSalesOfficeName>>}
 */
export function readSingleAccountSalesOfficeNameCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesOfficeNameCollection", id, params), AccountSalesOfficeName)
}


/**
 * createAccountSalesOfficeNameCollection
 * 
 * @param {AccountSalesOfficeName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesOfficeName>>}
 */
export function createAccountSalesOfficeNameCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesOfficeNameCollection", undefined, undefined, "POST", entity), AccountSalesOfficeName)
}


/**
 * updateAccountSalesOfficeNameCollection
 * 
 * @param {string} id 
 * @param {AccountSalesOfficeName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesOfficeName>>}
 */
export function updateAccountSalesOfficeNameCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesOfficeNameCollection", id, undefined, "PATCH", entity), AccountSalesOfficeName)
}


/**
 * replaceAccountSalesOfficeNameCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountSalesOfficeName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesOfficeName>>}
 */
export function replaceAccountSalesOfficeNameCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesOfficeNameCollection", id, undefined, "PUT", entity), AccountSalesOfficeName)
}


/**
 * deleteSingleAccountSalesOfficeNameCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountSalesOfficeNameCollection(id) {
  return odata.request("AccountSalesOfficeNameCollection", id, undefined ,"DELETE")
}


/**
 * readAccountSalesOrganisationNameCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountSalesOrganisationName>>}
 */
export function readAccountSalesOrganisationNameCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountSalesOrganisationNameCollection", undefined, params), AccountSalesOrganisationName)
}


/**
 * readSingleAccountSalesOrganisationNameCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountSalesOrganisationName>>}
 */
export function readSingleAccountSalesOrganisationNameCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesOrganisationNameCollection", id, params), AccountSalesOrganisationName)
}


/**
 * createAccountSalesOrganisationNameCollection
 * 
 * @param {AccountSalesOrganisationName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesOrganisationName>>}
 */
export function createAccountSalesOrganisationNameCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesOrganisationNameCollection", undefined, undefined, "POST", entity), AccountSalesOrganisationName)
}


/**
 * updateAccountSalesOrganisationNameCollection
 * 
 * @param {string} id 
 * @param {AccountSalesOrganisationName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesOrganisationName>>}
 */
export function updateAccountSalesOrganisationNameCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesOrganisationNameCollection", id, undefined, "PATCH", entity), AccountSalesOrganisationName)
}


/**
 * replaceAccountSalesOrganisationNameCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountSalesOrganisationName} entity 
 * @returns {Promise<C4CODataSingleResult<AccountSalesOrganisationName>>}
 */
export function replaceAccountSalesOrganisationNameCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountSalesOrganisationNameCollection", id, undefined, "PUT", entity), AccountSalesOrganisationName)
}


/**
 * deleteSingleAccountSalesOrganisationNameCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountSalesOrganisationNameCollection(id) {
  return odata.request("AccountSalesOrganisationNameCollection", id, undefined ,"DELETE")
}


/**
 * readAccountStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountStatusCodeCollection", id, params), CodeList)
}


/**
 * readAccountStreetPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountStreetPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountStreetPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountStreetPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountStreetPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountStreetPostalCodeCollection", id, params), CodeList)
}


/**
 * readAccountTaxJurisdictionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountTaxJurisdictionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountTaxJurisdictionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountTaxJurisdictionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountTaxJurisdictionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTaxJurisdictionCodeCollection", id, params), CodeList)
}


/**
 * readAccountTeamAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountTeamAddress>>}
 */
export function readAccountTeamAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountTeamAddressCollection", undefined, params), AccountTeamAddress)
}


/**
 * readSingleAccountTeamAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountTeamAddress>>}
 */
export function readSingleAccountTeamAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamAddressCollection", id, params), AccountTeamAddress)
}


/**
 * createAccountTeamAddressCollection
 * 
 * @param {AccountTeamAddress} entity 
 * @returns {Promise<C4CODataSingleResult<AccountTeamAddress>>}
 */
export function createAccountTeamAddressCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamAddressCollection", undefined, undefined, "POST", entity), AccountTeamAddress)
}


/**
 * updateAccountTeamAddressCollection
 * 
 * @param {string} id 
 * @param {AccountTeamAddress} entity 
 * @returns {Promise<C4CODataSingleResult<AccountTeamAddress>>}
 */
export function updateAccountTeamAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamAddressCollection", id, undefined, "PATCH", entity), AccountTeamAddress)
}


/**
 * replaceAccountTeamAddressCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountTeamAddress} entity 
 * @returns {Promise<C4CODataSingleResult<AccountTeamAddress>>}
 */
export function replaceAccountTeamAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamAddressCollection", id, undefined, "PUT", entity), AccountTeamAddress)
}


/**
 * deleteSingleAccountTeamAddressCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountTeamAddressCollection(id) {
  return odata.request("AccountTeamAddressCollection", id, undefined ,"DELETE")
}


/**
 * readAccountTeamCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AccountTeam>>}
 */
export function readAccountTeamCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountTeamCollection", undefined, params), AccountTeam)
}


/**
 * readSingleAccountTeamCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AccountTeam>>}
 */
export function readSingleAccountTeamCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamCollection", id, params), AccountTeam)
}


/**
 * createAccountTeamCollection
 * 
 * @param {AccountTeam} entity 
 * @returns {Promise<C4CODataSingleResult<AccountTeam>>}
 */
export function createAccountTeamCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamCollection", undefined, undefined, "POST", entity), AccountTeam)
}


/**
 * updateAccountTeamCollection
 * 
 * @param {string} id 
 * @param {AccountTeam} entity 
 * @returns {Promise<C4CODataSingleResult<AccountTeam>>}
 */
export function updateAccountTeamCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamCollection", id, undefined, "PATCH", entity), AccountTeam)
}


/**
 * replaceAccountTeamCollection
 * replace a entity
 * @param {string} id 
 * @param {AccountTeam} entity 
 * @returns {Promise<C4CODataSingleResult<AccountTeam>>}
 */
export function replaceAccountTeamCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamCollection", id, undefined, "PUT", entity), AccountTeam)
}


/**
 * deleteSingleAccountTeamCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAccountTeamCollection(id) {
  return odata.request("AccountTeamCollection", id, undefined ,"DELETE")
}


/**
 * readAccountTeamDistributionChannelCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountTeamDistributionChannelCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountTeamDistributionChannelCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountTeamDistributionChannelCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountTeamDistributionChannelCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamDistributionChannelCodeCollection", id, params), CodeList)
}


/**
 * readAccountTeamDivisionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountTeamDivisionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountTeamDivisionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountTeamDivisionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountTeamDivisionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamDivisionCodeCollection", id, params), CodeList)
}


/**
 * readAccountTeamPartyRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountTeamPartyRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountTeamPartyRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountTeamPartyRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountTeamPartyRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTeamPartyRoleCodeCollection", id, params), CodeList)
}


/**
 * readAccountTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAccountTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AccountTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAccountTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAccountTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AccountTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readActivityAttachmentFolderCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readActivityAttachmentFolderCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ActivityAttachmentFolderCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleActivityAttachmentFolderCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleActivityAttachmentFolderCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ActivityAttachmentFolderCategoryCodeCollection", id, params), CodeList)
}


/**
 * readActivityAttachmentFolderTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readActivityAttachmentFolderTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ActivityAttachmentFolderTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleActivityAttachmentFolderTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleActivityAttachmentFolderTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ActivityAttachmentFolderTypeCodeCollection", id, params), CodeList)
}


/**
 * readActivityBusinessTransactionDocumentReferenceReferenceDocumentTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readActivityBusinessTransactionDocumentReferenceReferenceDocumentTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ActivityBusinessTransactionDocumentReferenceReferenceDocumentTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleActivityBusinessTransactionDocumentReferenceReferenceDocumentTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleActivityBusinessTransactionDocumentReferenceReferenceDocumentTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ActivityBusinessTransactionDocumentReferenceReferenceDocumentTypeCodeCollection", id, params), CodeList)
}


/**
 * readActivityCommunicationPartyRoleCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readActivityCommunicationPartyRoleCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ActivityCommunicationPartyRoleCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleActivityCommunicationPartyRoleCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleActivityCommunicationPartyRoleCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ActivityCommunicationPartyRoleCategoryCodeCollection", id, params), CodeList)
}


/**
 * readActivityCopyMessageToPartyRoleCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readActivityCopyMessageToPartyRoleCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ActivityCopyMessageToPartyRoleCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleActivityCopyMessageToPartyRoleCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleActivityCopyMessageToPartyRoleCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ActivityCopyMessageToPartyRoleCategoryCodeCollection", id, params), CodeList)
}


/**
 * readActivityTextCollectionLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readActivityTextCollectionLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ActivityTextCollectionLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleActivityTextCollectionLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleActivityTextCollectionLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ActivityTextCollectionLanguageCodeCollection", id, params), CodeList)
}


/**
 * readActivityTextCollectionTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readActivityTextCollectionTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ActivityTextCollectionTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleActivityTextCollectionTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleActivityTextCollectionTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ActivityTextCollectionTypeCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AppointmentAttachment>>}
 */
export function readAppointmentAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentAttachmentCollection", undefined, params), AppointmentAttachment)
}


/**
 * readSingleAppointmentAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AppointmentAttachment>>}
 */
export function readSingleAppointmentAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentAttachmentCollection", id, params), AppointmentAttachment)
}


/**
 * createAppointmentAttachmentCollection
 * 
 * @param {AppointmentAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentAttachment>>}
 */
export function createAppointmentAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentAttachmentCollection", undefined, undefined, "POST", entity), AppointmentAttachment)
}


/**
 * updateAppointmentAttachmentCollection
 * 
 * @param {string} id 
 * @param {AppointmentAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentAttachment>>}
 */
export function updateAppointmentAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentAttachmentCollection", id, undefined, "PATCH", entity), AppointmentAttachment)
}


/**
 * replaceAppointmentAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {AppointmentAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentAttachment>>}
 */
export function replaceAppointmentAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentAttachmentCollection", id, undefined, "PUT", entity), AppointmentAttachment)
}


/**
 * deleteSingleAppointmentAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAppointmentAttachmentCollection(id) {
  return odata.request("AppointmentAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readAppointmentCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readAppointmentCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentCategoryCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleAppointmentCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleAppointmentCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentCategoryCodeCollection", id, params), ContextualCodeList)
}


/**
 * readAppointmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Appointment>>}
 */
export function readAppointmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentCollection", undefined, params), Appointment)
}


/**
 * readSingleAppointmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Appointment>>}
 */
export function readSingleAppointmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentCollection", id, params), Appointment)
}


/**
 * createAppointmentCollection
 * 
 * @param {Appointment} entity 
 * @returns {Promise<C4CODataSingleResult<Appointment>>}
 */
export function createAppointmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentCollection", undefined, undefined, "POST", entity), Appointment)
}


/**
 * updateAppointmentCollection
 * 
 * @param {string} id 
 * @param {Appointment} entity 
 * @returns {Promise<C4CODataSingleResult<Appointment>>}
 */
export function updateAppointmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentCollection", id, undefined, "PATCH", entity), Appointment)
}


/**
 * replaceAppointmentCollection
 * replace a entity
 * @param {string} id 
 * @param {Appointment} entity 
 * @returns {Promise<C4CODataSingleResult<Appointment>>}
 */
export function replaceAppointmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentCollection", id, undefined, "PUT", entity), Appointment)
}


/**
 * deleteSingleAppointmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAppointmentCollection(id) {
  return odata.request("AppointmentCollection", id, undefined ,"DELETE")
}


/**
 * readAppointmentCustomerSatisfactionCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentCustomerSatisfactionCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentCustomerSatisfactionCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentCustomerSatisfactionCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentCustomerSatisfactionCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentCustomerSatisfactionCollection", id, params), CodeList)
}


/**
 * readAppointmentDataOriginTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentDataOriginTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentDataOriginTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentDataOriginTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentDataOriginTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentDataOriginTypeCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentDrivenExperienceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentDrivenExperienceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentDrivenExperienceCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentDrivenExperienceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentDrivenExperienceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentDrivenExperienceCollection", id, params), CodeList)
}


/**
 * readAppointmentInvolvedPartiesActivityGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readAppointmentInvolvedPartiesActivityGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesActivityGroupCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleAppointmentInvolvedPartiesActivityGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleAppointmentInvolvedPartiesActivityGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesActivityGroupCodeCollection", id, params), ContextualCodeList)
}


/**
 * readAppointmentInvolvedPartiesAppointmentTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentInvolvedPartiesAppointmentTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesAppointmentTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentInvolvedPartiesAppointmentTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentInvolvedPartiesAppointmentTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesAppointmentTypeCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentInvolvedPartiesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AppointmentInvolvedParties>>}
 */
export function readAppointmentInvolvedPartiesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesCollection", undefined, params), AppointmentInvolvedParties)
}


/**
 * readSingleAppointmentInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AppointmentInvolvedParties>>}
 */
export function readSingleAppointmentInvolvedPartiesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesCollection", id, params), AppointmentInvolvedParties)
}


/**
 * createAppointmentInvolvedPartiesCollection
 * 
 * @param {AppointmentInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentInvolvedParties>>}
 */
export function createAppointmentInvolvedPartiesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesCollection", undefined, undefined, "POST", entity), AppointmentInvolvedParties)
}


/**
 * updateAppointmentInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @param {AppointmentInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentInvolvedParties>>}
 */
export function updateAppointmentInvolvedPartiesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesCollection", id, undefined, "PATCH", entity), AppointmentInvolvedParties)
}


/**
 * replaceAppointmentInvolvedPartiesCollection
 * replace a entity
 * @param {string} id 
 * @param {AppointmentInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentInvolvedParties>>}
 */
export function replaceAppointmentInvolvedPartiesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesCollection", id, undefined, "PUT", entity), AppointmentInvolvedParties)
}


/**
 * deleteSingleAppointmentInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAppointmentInvolvedPartiesCollection(id) {
  return odata.request("AppointmentInvolvedPartiesCollection", id, undefined ,"DELETE")
}


/**
 * readAppointmentInvolvedPartiesPartyTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentInvolvedPartiesPartyTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesPartyTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentInvolvedPartiesPartyTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentInvolvedPartiesPartyTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesPartyTypeCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentInvolvedPartiesRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentInvolvedPartiesRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentInvolvedPartiesRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentInvolvedPartiesRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentInvolvedPartiesRoleCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentMileage_aunitCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentMileage_aunitCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentMileage_aunitCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentMileage_aunitCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentMileage_aunitCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentMileage_aunitCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentMileage_bunitCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentMileage_bunitCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentMileage_bunitCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentMileage_bunitCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentMileage_bunitCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentMileage_bunitCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<AppointmentNotes>>}
 */
export function readAppointmentNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentNotesCollection", undefined, params), AppointmentNotes)
}


/**
 * readSingleAppointmentNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<AppointmentNotes>>}
 */
export function readSingleAppointmentNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentNotesCollection", id, params), AppointmentNotes)
}


/**
 * createAppointmentNotesCollection
 * 
 * @param {AppointmentNotes} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentNotes>>}
 */
export function createAppointmentNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentNotesCollection", undefined, undefined, "POST", entity), AppointmentNotes)
}


/**
 * updateAppointmentNotesCollection
 * 
 * @param {string} id 
 * @param {AppointmentNotes} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentNotes>>}
 */
export function updateAppointmentNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentNotesCollection", id, undefined, "PATCH", entity), AppointmentNotes)
}


/**
 * replaceAppointmentNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {AppointmentNotes} entity 
 * @returns {Promise<C4CODataSingleResult<AppointmentNotes>>}
 */
export function replaceAppointmentNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentNotesCollection", id, undefined, "PUT", entity), AppointmentNotes)
}


/**
 * deleteSingleAppointmentNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleAppointmentNotesCollection(id) {
  return odata.request("AppointmentNotesCollection", id, undefined ,"DELETE")
}


/**
 * readAppointmentPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentPriorityCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentPurchaseFocuscontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentPurchaseFocuscontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentPurchaseFocuscontentCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentPurchaseFocuscontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentPurchaseFocuscontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentPurchaseFocuscontentCollection", id, params), CodeList)
}


/**
 * readAppointmentPurchaseUsagecontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentPurchaseUsagecontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentPurchaseUsagecontentCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentPurchaseUsagecontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentPurchaseUsagecontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentPurchaseUsagecontentCollection", id, params), CodeList)
}


/**
 * readAppointmentQuoteAmountcurrencyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentQuoteAmountcurrencyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentQuoteAmountcurrencyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentQuoteAmountcurrencyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentQuoteAmountcurrencyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentQuoteAmountcurrencyCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentStatusCodeCollection", id, params), CodeList)
}


/**
 * readAppointmentTestDrivenStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentTestDrivenStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentTestDrivenStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentTestDrivenStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentTestDrivenStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentTestDrivenStatusCollection", id, params), CodeList)
}


/**
 * readAppointmentTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readAppointmentTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("AppointmentTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleAppointmentTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleAppointmentTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("AppointmentTypeCodeCollection", id, params), CodeList)
}


/**
 * readBusinessPartnerAddressPreferredCommunicationMediumTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBusinessPartnerAddressPreferredCommunicationMediumTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerAddressPreferredCommunicationMediumTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleBusinessPartnerAddressPreferredCommunicationMediumTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBusinessPartnerAddressPreferredCommunicationMediumTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerAddressPreferredCommunicationMediumTypeCodeCollection", id, params), CodeList)
}


/**
 * readBusinessPartnerAttachmentFolderCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBusinessPartnerAttachmentFolderCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerAttachmentFolderCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleBusinessPartnerAttachmentFolderCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBusinessPartnerAttachmentFolderCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerAttachmentFolderCategoryCodeCollection", id, params), CodeList)
}


/**
 * readBusinessPartnerAttachmentFolderTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBusinessPartnerAttachmentFolderTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerAttachmentFolderTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleBusinessPartnerAttachmentFolderTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBusinessPartnerAttachmentFolderTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerAttachmentFolderTypeCodeCollection", id, params), CodeList)
}


/**
 * readBusinessPartnerCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BusinessPartner>>}
 */
export function readBusinessPartnerCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerCollection", undefined, params), BusinessPartner)
}


/**
 * readSingleBusinessPartnerCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BusinessPartner>>}
 */
export function readSingleBusinessPartnerCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerCollection", id, params), BusinessPartner)
}


/**
 * readBusinessPartnerRelationshipHasContactPersonBusinessPartnerRelationshipCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBusinessPartnerRelationshipHasContactPersonBusinessPartnerRelationshipCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerRelationshipHasContactPersonBusinessPartnerRelationshipCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleBusinessPartnerRelationshipHasContactPersonBusinessPartnerRelationshipCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBusinessPartnerRelationshipHasContactPersonBusinessPartnerRelationshipCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerRelationshipHasContactPersonBusinessPartnerRelationshipCategoryCodeCollection", id, params), CodeList)
}


/**
 * readBusinessPartnerRelationshipIsContactPersonForBusinessPartnerRelationshipCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBusinessPartnerRelationshipIsContactPersonForBusinessPartnerRelationshipCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerRelationshipIsContactPersonForBusinessPartnerRelationshipCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleBusinessPartnerRelationshipIsContactPersonForBusinessPartnerRelationshipCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBusinessPartnerRelationshipIsContactPersonForBusinessPartnerRelationshipCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerRelationshipIsContactPersonForBusinessPartnerRelationshipCategoryCodeCollection", id, params), CodeList)
}


/**
 * readBusinessPartnerRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBusinessPartnerRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleBusinessPartnerRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBusinessPartnerRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerRoleCodeCollection", id, params), CodeList)
}


/**
 * readBusinessPartnerTextCollectionLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBusinessPartnerTextCollectionLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerTextCollectionLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleBusinessPartnerTextCollectionLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBusinessPartnerTextCollectionLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerTextCollectionLanguageCodeCollection", id, params), CodeList)
}


/**
 * readBusinessPartnerTextCollectionTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBusinessPartnerTextCollectionTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BusinessPartnerTextCollectionTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleBusinessPartnerTextCollectionTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBusinessPartnerTextCollectionTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BusinessPartnerTextCollectionTypeCodeCollection", id, params), CodeList)
}


/**
 * readCodTimeEntryBusinessTransactionDocumentTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCodTimeEntryBusinessTransactionDocumentTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CodTimeEntryBusinessTransactionDocumentTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleCodTimeEntryBusinessTransactionDocumentTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCodTimeEntryBusinessTransactionDocumentTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CodTimeEntryBusinessTransactionDocumentTypeCodeCollection", id, params), CodeList)
}


/**
 * readCodTimeEntryLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCodTimeEntryLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CodTimeEntryLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleCodTimeEntryLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCodTimeEntryLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CodTimeEntryLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readCodTimeEntryTimeEntryItemTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCodTimeEntryTimeEntryItemTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CodTimeEntryTimeEntryItemTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleCodTimeEntryTimeEntryItemTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCodTimeEntryTimeEntryItemTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CodTimeEntryTimeEntryItemTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readCodTimeEntryTimeTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCodTimeEntryTimeTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CodTimeEntryTimeTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleCodTimeEntryTimeTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCodTimeEntryTimeTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CodTimeEntryTimeTypeCodeCollection", id, params), CodeList)
}


/**
 * readCodTimeEntryTimeZoneCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCodTimeEntryTimeZoneCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CodTimeEntryTimeZoneCollection", undefined, params), CodeList)
}


/**
 * readSingleCodTimeEntryTimeZoneCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCodTimeEntryTimeZoneCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CodTimeEntryTimeZoneCollection", id, params), CodeList)
}


/**
 * readCodTimeReportTimeReportStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCodTimeReportTimeReportStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CodTimeReportTimeReportStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleCodTimeReportTimeReportStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCodTimeReportTimeReportStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CodTimeReportTimeReportStatusCollection", id, params), CodeList)
}


/**
 * readContactAcademicTitleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactAcademicTitleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactAcademicTitleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactAcademicTitleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactAcademicTitleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactAcademicTitleCodeCollection", id, params), CodeList)
}


/**
 * readContactAdditionalAcademicTitleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactAdditionalAcademicTitleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactAdditionalAcademicTitleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactAdditionalAcademicTitleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactAdditionalAcademicTitleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactAdditionalAcademicTitleCodeCollection", id, params), CodeList)
}


/**
 * readContactAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContactAttachment>>}
 */
export function readContactAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactAttachmentCollection", undefined, params), ContactAttachment)
}


/**
 * readSingleContactAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContactAttachment>>}
 */
export function readSingleContactAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactAttachmentCollection", id, params), ContactAttachment)
}


/**
 * createContactAttachmentCollection
 * 
 * @param {ContactAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<ContactAttachment>>}
 */
export function createContactAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactAttachmentCollection", undefined, undefined, "POST", entity), ContactAttachment)
}


/**
 * updateContactAttachmentCollection
 * 
 * @param {string} id 
 * @param {ContactAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<ContactAttachment>>}
 */
export function updateContactAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactAttachmentCollection", id, undefined, "PATCH", entity), ContactAttachment)
}


/**
 * replaceContactAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {ContactAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<ContactAttachment>>}
 */
export function replaceContactAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactAttachmentCollection", id, undefined, "PUT", entity), ContactAttachment)
}


/**
 * deleteSingleContactAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleContactAttachmentCollection(id) {
  return odata.request("ContactAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readContactBestReachedByCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactBestReachedByCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBestReachedByCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactBestReachedByCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactBestReachedByCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBestReachedByCodeCollection", id, params), CodeList)
}


/**
 * readContactBusinessAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContactBusinessAddress>>}
 */
export function readContactBusinessAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessAddressCollection", undefined, params), ContactBusinessAddress)
}


/**
 * readSingleContactBusinessAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContactBusinessAddress>>}
 */
export function readSingleContactBusinessAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessAddressCollection", id, params), ContactBusinessAddress)
}


/**
 * createContactBusinessAddressCollection
 * 
 * @param {ContactBusinessAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactBusinessAddress>>}
 */
export function createContactBusinessAddressCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessAddressCollection", undefined, undefined, "POST", entity), ContactBusinessAddress)
}


/**
 * updateContactBusinessAddressCollection
 * 
 * @param {string} id 
 * @param {ContactBusinessAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactBusinessAddress>>}
 */
export function updateContactBusinessAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessAddressCollection", id, undefined, "PATCH", entity), ContactBusinessAddress)
}


/**
 * replaceContactBusinessAddressCollection
 * replace a entity
 * @param {string} id 
 * @param {ContactBusinessAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactBusinessAddress>>}
 */
export function replaceContactBusinessAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessAddressCollection", id, undefined, "PUT", entity), ContactBusinessAddress)
}


/**
 * deleteSingleContactBusinessAddressCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleContactBusinessAddressCollection(id) {
  return odata.request("ContactBusinessAddressCollection", id, undefined ,"DELETE")
}


/**
 * readContactBusinessAddressCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactBusinessAddressCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessAddressCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactBusinessAddressCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactBusinessAddressCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessAddressCountryCodeCollection", id, params), CodeList)
}


/**
 * readContactBusinessAddressPreferredCommunicationMediumTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactBusinessAddressPreferredCommunicationMediumTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessAddressPreferredCommunicationMediumTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactBusinessAddressPreferredCommunicationMediumTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactBusinessAddressPreferredCommunicationMediumTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessAddressPreferredCommunicationMediumTypeCodeCollection", id, params), CodeList)
}


/**
 * readContactBusinessAddressStateCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readContactBusinessAddressStateCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessAddressStateCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleContactBusinessAddressStateCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleContactBusinessAddressStateCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessAddressStateCodeCollection", id, params), ContextualCodeList)
}


/**
 * readContactBusinessAddressStreetPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactBusinessAddressStreetPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessAddressStreetPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactBusinessAddressStreetPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactBusinessAddressStreetPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessAddressStreetPostalCodeCollection", id, params), CodeList)
}


/**
 * readContactBusinessPartnerVIPReasonCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactBusinessPartnerVIPReasonCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessPartnerVIPReasonCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactBusinessPartnerVIPReasonCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactBusinessPartnerVIPReasonCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessPartnerVIPReasonCodeCollection", id, params), CodeList)
}


/**
 * readContactBusinessPostalAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContactBusinessPostalAddress>>}
 */
export function readContactBusinessPostalAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessPostalAddressCollection", undefined, params), ContactBusinessPostalAddress)
}


/**
 * readSingleContactBusinessPostalAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContactBusinessPostalAddress>>}
 */
export function readSingleContactBusinessPostalAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessPostalAddressCollection", id, params), ContactBusinessPostalAddress)
}


/**
 * createContactBusinessPostalAddressCollection
 * 
 * @param {ContactBusinessPostalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactBusinessPostalAddress>>}
 */
export function createContactBusinessPostalAddressCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessPostalAddressCollection", undefined, undefined, "POST", entity), ContactBusinessPostalAddress)
}


/**
 * updateContactBusinessPostalAddressCollection
 * 
 * @param {string} id 
 * @param {ContactBusinessPostalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactBusinessPostalAddress>>}
 */
export function updateContactBusinessPostalAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessPostalAddressCollection", id, undefined, "PATCH", entity), ContactBusinessPostalAddress)
}


/**
 * replaceContactBusinessPostalAddressCollection
 * replace a entity
 * @param {string} id 
 * @param {ContactBusinessPostalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactBusinessPostalAddress>>}
 */
export function replaceContactBusinessPostalAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessPostalAddressCollection", id, undefined, "PUT", entity), ContactBusinessPostalAddress)
}


/**
 * deleteSingleContactBusinessPostalAddressCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleContactBusinessPostalAddressCollection(id) {
  return odata.request("ContactBusinessPostalAddressCollection", id, undefined ,"DELETE")
}


/**
 * readContactBusinessPostalAddressCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactBusinessPostalAddressCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessPostalAddressCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactBusinessPostalAddressCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactBusinessPostalAddressCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessPostalAddressCountryCodeCollection", id, params), CodeList)
}


/**
 * readContactBusinessPostalAddressPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactBusinessPostalAddressPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessPostalAddressPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactBusinessPostalAddressPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactBusinessPostalAddressPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessPostalAddressPostalCodeCollection", id, params), CodeList)
}


/**
 * readContactBusinessPostalAddressStateCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readContactBusinessPostalAddressStateCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactBusinessPostalAddressStateCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleContactBusinessPostalAddressStateCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleContactBusinessPostalAddressStateCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactBusinessPostalAddressStateCollection", id, params), ContextualCodeList)
}


/**
 * readContactCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCategoryCodeCollection", id, params), CodeList)
}


/**
 * readContactCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Contact>>}
 */
export function readContactCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactCollection", undefined, params), Contact)
}


/**
 * readSingleContactCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Contact>>}
 */
export function readSingleContactCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCollection", id, params), Contact)
}


/**
 * createContactCollection
 * 
 * @param {Contact} entity 
 * @returns {Promise<C4CODataSingleResult<Contact>>}
 */
export function createContactCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCollection", undefined, undefined, "POST", entity), Contact)
}


/**
 * updateContactCollection
 * 
 * @param {string} id 
 * @param {Contact} entity 
 * @returns {Promise<C4CODataSingleResult<Contact>>}
 */
export function updateContactCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCollection", id, undefined, "PATCH", entity), Contact)
}


/**
 * replaceContactCollection
 * replace a entity
 * @param {string} id 
 * @param {Contact} entity 
 * @returns {Promise<C4CODataSingleResult<Contact>>}
 */
export function replaceContactCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCollection", id, undefined, "PUT", entity), Contact)
}


/**
 * deleteSingleContactCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleContactCollection(id) {
  return odata.request("ContactCollection", id, undefined ,"DELETE")
}


/**
 * readContactCommunicationDataCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContactCommunicationData>>}
 */
export function readContactCommunicationDataCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactCommunicationDataCollection", undefined, params), ContactCommunicationData)
}


/**
 * readSingleContactCommunicationDataCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContactCommunicationData>>}
 */
export function readSingleContactCommunicationDataCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCommunicationDataCollection", id, params), ContactCommunicationData)
}


/**
 * createContactCommunicationDataCollection
 * 
 * @param {ContactCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<ContactCommunicationData>>}
 */
export function createContactCommunicationDataCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCommunicationDataCollection", undefined, undefined, "POST", entity), ContactCommunicationData)
}


/**
 * updateContactCommunicationDataCollection
 * 
 * @param {string} id 
 * @param {ContactCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<ContactCommunicationData>>}
 */
export function updateContactCommunicationDataCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCommunicationDataCollection", id, undefined, "PATCH", entity), ContactCommunicationData)
}


/**
 * replaceContactCommunicationDataCollection
 * replace a entity
 * @param {string} id 
 * @param {ContactCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<ContactCommunicationData>>}
 */
export function replaceContactCommunicationDataCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactCommunicationDataCollection", id, undefined, "PUT", entity), ContactCommunicationData)
}


/**
 * deleteSingleContactCommunicationDataCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleContactCommunicationDataCollection(id) {
  return odata.request("ContactCommunicationDataCollection", id, undefined ,"DELETE")
}


/**
 * readContactContactAllowedCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactContactAllowedCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactContactAllowedCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactContactAllowedCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactContactAllowedCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactContactAllowedCodeCollection", id, params), CodeList)
}


/**
 * readContactDepartmentCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactDepartmentCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactDepartmentCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactDepartmentCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactDepartmentCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactDepartmentCodeCollection", id, params), CodeList)
}


/**
 * readContactFunctionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactFunctionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactFunctionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactFunctionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactFunctionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactFunctionCodeCollection", id, params), CodeList)
}


/**
 * readContactGenderCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactGenderCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactGenderCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactGenderCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactGenderCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactGenderCodeCollection", id, params), CodeList)
}


/**
 * readContactLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactLanguageCodeCollection", id, params), CodeList)
}


/**
 * readContactMaritalStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactMaritalStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactMaritalStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactMaritalStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactMaritalStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactMaritalStatusCodeCollection", id, params), CodeList)
}


/**
 * readContactNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContactNotes>>}
 */
export function readContactNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactNotesCollection", undefined, params), ContactNotes)
}


/**
 * readSingleContactNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContactNotes>>}
 */
export function readSingleContactNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactNotesCollection", id, params), ContactNotes)
}


/**
 * createContactNotesCollection
 * 
 * @param {ContactNotes} entity 
 * @returns {Promise<C4CODataSingleResult<ContactNotes>>}
 */
export function createContactNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactNotesCollection", undefined, undefined, "POST", entity), ContactNotes)
}


/**
 * updateContactNotesCollection
 * 
 * @param {string} id 
 * @param {ContactNotes} entity 
 * @returns {Promise<C4CODataSingleResult<ContactNotes>>}
 */
export function updateContactNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactNotesCollection", id, undefined, "PATCH", entity), ContactNotes)
}


/**
 * replaceContactNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {ContactNotes} entity 
 * @returns {Promise<C4CODataSingleResult<ContactNotes>>}
 */
export function replaceContactNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactNotesCollection", id, undefined, "PUT", entity), ContactNotes)
}


/**
 * deleteSingleContactNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleContactNotesCollection(id) {
  return odata.request("ContactNotesCollection", id, undefined ,"DELETE")
}


/**
 * readContactPerceptionOfCompanyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactPerceptionOfCompanyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPerceptionOfCompanyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactPerceptionOfCompanyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactPerceptionOfCompanyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPerceptionOfCompanyCodeCollection", id, params), CodeList)
}


/**
 * readContactPersonalAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContactPersonalAddress>>}
 */
export function readContactPersonalAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPersonalAddressCollection", undefined, params), ContactPersonalAddress)
}


/**
 * readSingleContactPersonalAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContactPersonalAddress>>}
 */
export function readSingleContactPersonalAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalAddressCollection", id, params), ContactPersonalAddress)
}


/**
 * createContactPersonalAddressCollection
 * 
 * @param {ContactPersonalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactPersonalAddress>>}
 */
export function createContactPersonalAddressCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalAddressCollection", undefined, undefined, "POST", entity), ContactPersonalAddress)
}


/**
 * updateContactPersonalAddressCollection
 * 
 * @param {string} id 
 * @param {ContactPersonalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactPersonalAddress>>}
 */
export function updateContactPersonalAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalAddressCollection", id, undefined, "PATCH", entity), ContactPersonalAddress)
}


/**
 * replaceContactPersonalAddressCollection
 * replace a entity
 * @param {string} id 
 * @param {ContactPersonalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactPersonalAddress>>}
 */
export function replaceContactPersonalAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalAddressCollection", id, undefined, "PUT", entity), ContactPersonalAddress)
}


/**
 * deleteSingleContactPersonalAddressCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleContactPersonalAddressCollection(id) {
  return odata.request("ContactPersonalAddressCollection", id, undefined ,"DELETE")
}


/**
 * readContactPersonalAddressCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactPersonalAddressCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPersonalAddressCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactPersonalAddressCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactPersonalAddressCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalAddressCountryCodeCollection", id, params), CodeList)
}


/**
 * readContactPersonalAddressPOBoxPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactPersonalAddressPOBoxPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPersonalAddressPOBoxPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactPersonalAddressPOBoxPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactPersonalAddressPOBoxPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalAddressPOBoxPostalCodeCollection", id, params), CodeList)
}


/**
 * readContactPersonalAddressPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactPersonalAddressPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPersonalAddressPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactPersonalAddressPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactPersonalAddressPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalAddressPostalCodeCollection", id, params), CodeList)
}


/**
 * readContactPersonalAddressStateCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readContactPersonalAddressStateCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPersonalAddressStateCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleContactPersonalAddressStateCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleContactPersonalAddressStateCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalAddressStateCollection", id, params), ContextualCodeList)
}


/**
 * readContactPersonalPostalAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContactPersonalPostalAddress>>}
 */
export function readContactPersonalPostalAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPersonalPostalAddressCollection", undefined, params), ContactPersonalPostalAddress)
}


/**
 * readSingleContactPersonalPostalAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContactPersonalPostalAddress>>}
 */
export function readSingleContactPersonalPostalAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalPostalAddressCollection", id, params), ContactPersonalPostalAddress)
}


/**
 * createContactPersonalPostalAddressCollection
 * 
 * @param {ContactPersonalPostalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactPersonalPostalAddress>>}
 */
export function createContactPersonalPostalAddressCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalPostalAddressCollection", undefined, undefined, "POST", entity), ContactPersonalPostalAddress)
}


/**
 * updateContactPersonalPostalAddressCollection
 * 
 * @param {string} id 
 * @param {ContactPersonalPostalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactPersonalPostalAddress>>}
 */
export function updateContactPersonalPostalAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalPostalAddressCollection", id, undefined, "PATCH", entity), ContactPersonalPostalAddress)
}


/**
 * replaceContactPersonalPostalAddressCollection
 * replace a entity
 * @param {string} id 
 * @param {ContactPersonalPostalAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ContactPersonalPostalAddress>>}
 */
export function replaceContactPersonalPostalAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalPostalAddressCollection", id, undefined, "PUT", entity), ContactPersonalPostalAddress)
}


/**
 * deleteSingleContactPersonalPostalAddressCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleContactPersonalPostalAddressCollection(id) {
  return odata.request("ContactPersonalPostalAddressCollection", id, undefined ,"DELETE")
}


/**
 * readContactPersonalPostalAddressStateCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readContactPersonalPostalAddressStateCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPersonalPostalAddressStateCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleContactPersonalPostalAddressStateCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleContactPersonalPostalAddressStateCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPersonalPostalAddressStateCollection", id, params), ContextualCodeList)
}


/**
 * readContactPostalAddressCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactPostalAddressCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPostalAddressCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactPostalAddressCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactPostalAddressCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPostalAddressCountryCodeCollection", id, params), CodeList)
}


/**
 * readContactPostalAddressPOBoxPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactPostalAddressPOBoxPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPostalAddressPOBoxPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactPostalAddressPOBoxPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactPostalAddressPOBoxPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPostalAddressPOBoxPostalCodeCollection", id, params), CodeList)
}


/**
 * readContactPostalAddressPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactPostalAddressPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactPostalAddressPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactPostalAddressPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactPostalAddressPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactPostalAddressPostalCodeCollection", id, params), CodeList)
}


/**
 * readContactRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactRoleCodeCollection", id, params), CodeList)
}


/**
 * readContactStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactStatusCodeCollection", id, params), CodeList)
}


/**
 * readContactTitleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactTitleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactTitleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactTitleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactTitleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactTitleCodeCollection", id, params), CodeList)
}


/**
 * readContactVIPContactCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readContactVIPContactCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ContactVIPContactCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleContactVIPContactCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleContactVIPContactCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ContactVIPContactCodeCollection", id, params), CodeList)
}


/**
 * readCustomerAttachmentFolderCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCustomerAttachmentFolderCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CustomerAttachmentFolderCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleCustomerAttachmentFolderCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCustomerAttachmentFolderCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CustomerAttachmentFolderCategoryCodeCollection", id, params), CodeList)
}


/**
 * readCustomerAttachmentFolderTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCustomerAttachmentFolderTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CustomerAttachmentFolderTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleCustomerAttachmentFolderTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCustomerAttachmentFolderTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CustomerAttachmentFolderTypeCodeCollection", id, params), CodeList)
}


/**
 * readCustomerTextCollectionLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCustomerTextCollectionLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CustomerTextCollectionLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleCustomerTextCollectionLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCustomerTextCollectionLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CustomerTextCollectionLanguageCodeCollection", id, params), CodeList)
}


/**
 * readCustomerTextCollectionTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readCustomerTextCollectionTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("CustomerTextCollectionTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleCustomerTextCollectionTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleCustomerTextCollectionTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("CustomerTextCollectionTypeCodeCollection", id, params), CodeList)
}


/**
 * readEMailAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EMailAttachment>>}
 */
export function readEMailAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailAttachmentCollection", undefined, params), EMailAttachment)
}


/**
 * readSingleEMailAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EMailAttachment>>}
 */
export function readSingleEMailAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailAttachmentCollection", id, params), EMailAttachment)
}


/**
 * createEMailAttachmentCollection
 * 
 * @param {EMailAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<EMailAttachment>>}
 */
export function createEMailAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailAttachmentCollection", undefined, undefined, "POST", entity), EMailAttachment)
}


/**
 * updateEMailAttachmentCollection
 * 
 * @param {string} id 
 * @param {EMailAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<EMailAttachment>>}
 */
export function updateEMailAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailAttachmentCollection", id, undefined, "PATCH", entity), EMailAttachment)
}


/**
 * replaceEMailAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {EMailAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<EMailAttachment>>}
 */
export function replaceEMailAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailAttachmentCollection", id, undefined, "PUT", entity), EMailAttachment)
}


/**
 * deleteSingleEMailAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEMailAttachmentCollection(id) {
  return odata.request("EMailAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readEMailCcRecipientsCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EMailCcRecipients>>}
 */
export function readEMailCcRecipientsCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailCcRecipientsCollection", undefined, params), EMailCcRecipients)
}


/**
 * readSingleEMailCcRecipientsCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EMailCcRecipients>>}
 */
export function readSingleEMailCcRecipientsCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCcRecipientsCollection", id, params), EMailCcRecipients)
}


/**
 * createEMailCcRecipientsCollection
 * 
 * @param {EMailCcRecipients} entity 
 * @returns {Promise<C4CODataSingleResult<EMailCcRecipients>>}
 */
export function createEMailCcRecipientsCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCcRecipientsCollection", undefined, undefined, "POST", entity), EMailCcRecipients)
}


/**
 * updateEMailCcRecipientsCollection
 * 
 * @param {string} id 
 * @param {EMailCcRecipients} entity 
 * @returns {Promise<C4CODataSingleResult<EMailCcRecipients>>}
 */
export function updateEMailCcRecipientsCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCcRecipientsCollection", id, undefined, "PATCH", entity), EMailCcRecipients)
}


/**
 * replaceEMailCcRecipientsCollection
 * replace a entity
 * @param {string} id 
 * @param {EMailCcRecipients} entity 
 * @returns {Promise<C4CODataSingleResult<EMailCcRecipients>>}
 */
export function replaceEMailCcRecipientsCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCcRecipientsCollection", id, undefined, "PUT", entity), EMailCcRecipients)
}


/**
 * deleteSingleEMailCcRecipientsCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEMailCcRecipientsCollection(id) {
  return odata.request("EMailCcRecipientsCollection", id, undefined ,"DELETE")
}


/**
 * readEMailCcRecipientsEMailTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEMailCcRecipientsEMailTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailCcRecipientsEMailTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEMailCcRecipientsEMailTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEMailCcRecipientsEMailTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCcRecipientsEMailTypeCodeCollection", id, params), CodeList)
}


/**
 * readEMailCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EMail>>}
 */
export function readEMailCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailCollection", undefined, params), EMail)
}


/**
 * readSingleEMailCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EMail>>}
 */
export function readSingleEMailCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCollection", id, params), EMail)
}


/**
 * createEMailCollection
 * 
 * @param {EMail} entity 
 * @returns {Promise<C4CODataSingleResult<EMail>>}
 */
export function createEMailCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCollection", undefined, undefined, "POST", entity), EMail)
}


/**
 * updateEMailCollection
 * 
 * @param {string} id 
 * @param {EMail} entity 
 * @returns {Promise<C4CODataSingleResult<EMail>>}
 */
export function updateEMailCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCollection", id, undefined, "PATCH", entity), EMail)
}


/**
 * replaceEMailCollection
 * replace a entity
 * @param {string} id 
 * @param {EMail} entity 
 * @returns {Promise<C4CODataSingleResult<EMail>>}
 */
export function replaceEMailCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCollection", id, undefined, "PUT", entity), EMail)
}


/**
 * deleteSingleEMailCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEMailCollection(id) {
  return odata.request("EMailCollection", id, undefined ,"DELETE")
}


/**
 * readEMailCorrespondenceTransmissionStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEMailCorrespondenceTransmissionStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailCorrespondenceTransmissionStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEMailCorrespondenceTransmissionStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEMailCorrespondenceTransmissionStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailCorrespondenceTransmissionStatusCodeCollection", id, params), CodeList)
}


/**
 * readEMailDataOriginTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEMailDataOriginTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailDataOriginTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEMailDataOriginTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEMailDataOriginTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailDataOriginTypeCodeCollection", id, params), CodeList)
}


/**
 * readEMailGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readEMailGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailGroupCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleEMailGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleEMailGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailGroupCodeCollection", id, params), ContextualCodeList)
}


/**
 * readEMailNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EMailNotes>>}
 */
export function readEMailNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailNotesCollection", undefined, params), EMailNotes)
}


/**
 * readSingleEMailNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EMailNotes>>}
 */
export function readSingleEMailNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailNotesCollection", id, params), EMailNotes)
}


/**
 * createEMailNotesCollection
 * 
 * @param {EMailNotes} entity 
 * @returns {Promise<C4CODataSingleResult<EMailNotes>>}
 */
export function createEMailNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailNotesCollection", undefined, undefined, "POST", entity), EMailNotes)
}


/**
 * updateEMailNotesCollection
 * 
 * @param {string} id 
 * @param {EMailNotes} entity 
 * @returns {Promise<C4CODataSingleResult<EMailNotes>>}
 */
export function updateEMailNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailNotesCollection", id, undefined, "PATCH", entity), EMailNotes)
}


/**
 * replaceEMailNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {EMailNotes} entity 
 * @returns {Promise<C4CODataSingleResult<EMailNotes>>}
 */
export function replaceEMailNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailNotesCollection", id, undefined, "PUT", entity), EMailNotes)
}


/**
 * deleteSingleEMailNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEMailNotesCollection(id) {
  return odata.request("EMailNotesCollection", id, undefined ,"DELETE")
}


/**
 * readEMailPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEMailPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEMailPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEMailPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailPriorityCodeCollection", id, params), CodeList)
}


/**
 * readEMailStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEMailStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEMailStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEMailStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailStatusCodeCollection", id, params), CodeList)
}


/**
 * readEMailToRecipientsCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EMailToRecipients>>}
 */
export function readEMailToRecipientsCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailToRecipientsCollection", undefined, params), EMailToRecipients)
}


/**
 * readSingleEMailToRecipientsCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EMailToRecipients>>}
 */
export function readSingleEMailToRecipientsCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailToRecipientsCollection", id, params), EMailToRecipients)
}


/**
 * createEMailToRecipientsCollection
 * 
 * @param {EMailToRecipients} entity 
 * @returns {Promise<C4CODataSingleResult<EMailToRecipients>>}
 */
export function createEMailToRecipientsCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailToRecipientsCollection", undefined, undefined, "POST", entity), EMailToRecipients)
}


/**
 * updateEMailToRecipientsCollection
 * 
 * @param {string} id 
 * @param {EMailToRecipients} entity 
 * @returns {Promise<C4CODataSingleResult<EMailToRecipients>>}
 */
export function updateEMailToRecipientsCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailToRecipientsCollection", id, undefined, "PATCH", entity), EMailToRecipients)
}


/**
 * replaceEMailToRecipientsCollection
 * replace a entity
 * @param {string} id 
 * @param {EMailToRecipients} entity 
 * @returns {Promise<C4CODataSingleResult<EMailToRecipients>>}
 */
export function replaceEMailToRecipientsCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailToRecipientsCollection", id, undefined, "PUT", entity), EMailToRecipients)
}


/**
 * deleteSingleEMailToRecipientsCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEMailToRecipientsCollection(id) {
  return odata.request("EMailToRecipientsCollection", id, undefined ,"DELETE")
}


/**
 * readEMailToRecipientsEMailTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEMailToRecipientsEMailTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailToRecipientsEMailTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEMailToRecipientsEMailTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEMailToRecipientsEMailTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailToRecipientsEMailTypeCodeCollection", id, params), CodeList)
}


/**
 * readEMailToRecipientsRoleCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEMailToRecipientsRoleCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailToRecipientsRoleCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEMailToRecipientsRoleCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEMailToRecipientsRoleCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailToRecipientsRoleCategoryCodeCollection", id, params), CodeList)
}


/**
 * readEMailTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEMailTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EMailTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEMailTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEMailTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EMailTypeCodeCollection", id, params), CodeList)
}


/**
 * readEmailBusinessTransactionDocumentReferenceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EmailBusinessTransactionDocumentReference>>}
 */
export function readEmailBusinessTransactionDocumentReferenceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceCollection", undefined, params), EmailBusinessTransactionDocumentReference)
}


/**
 * readSingleEmailBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EmailBusinessTransactionDocumentReference>>}
 */
export function readSingleEmailBusinessTransactionDocumentReferenceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceCollection", id, params), EmailBusinessTransactionDocumentReference)
}


/**
 * createEmailBusinessTransactionDocumentReferenceCollection
 * 
 * @param {EmailBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<EmailBusinessTransactionDocumentReference>>}
 */
export function createEmailBusinessTransactionDocumentReferenceCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceCollection", undefined, undefined, "POST", entity), EmailBusinessTransactionDocumentReference)
}


/**
 * updateEmailBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {EmailBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<EmailBusinessTransactionDocumentReference>>}
 */
export function updateEmailBusinessTransactionDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceCollection", id, undefined, "PATCH", entity), EmailBusinessTransactionDocumentReference)
}


/**
 * replaceEmailBusinessTransactionDocumentReferenceCollection
 * replace a entity
 * @param {string} id 
 * @param {EmailBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<EmailBusinessTransactionDocumentReference>>}
 */
export function replaceEmailBusinessTransactionDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceCollection", id, undefined, "PUT", entity), EmailBusinessTransactionDocumentReference)
}


/**
 * deleteSingleEmailBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEmailBusinessTransactionDocumentReferenceCollection(id) {
  return odata.request("EmailBusinessTransactionDocumentReferenceCollection", id, undefined ,"DELETE")
}


/**
 * readEmailBusinessTransactionDocumentReferenceRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmailBusinessTransactionDocumentReferenceRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmailBusinessTransactionDocumentReferenceRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmailBusinessTransactionDocumentReferenceRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceRoleCodeCollection", id, params), CodeList)
}


/**
 * readEmailBusinessTransactionDocumentReferenceTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmailBusinessTransactionDocumentReferenceTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmailBusinessTransactionDocumentReferenceTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmailBusinessTransactionDocumentReferenceTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmailBusinessTransactionDocumentReferenceTypeCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeAcademicTitleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeAcademicTitleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeAcademicTitleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeAcademicTitleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeAcademicTitleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeAcademicTitleCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeAddressInformationCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeAddressInformationCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeAddressInformationCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeAddressInformationCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeAddressInformationCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeAddressInformationCountryCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeAddressInformationPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeAddressInformationPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeAddressInformationPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeAddressInformationPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeAddressInformationPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeAddressInformationPostalCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeBusinessAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EmployeeBusinessAddress>>}
 */
export function readEmployeeBusinessAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeBusinessAddressCollection", undefined, params), EmployeeBusinessAddress)
}


/**
 * readSingleEmployeeBusinessAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EmployeeBusinessAddress>>}
 */
export function readSingleEmployeeBusinessAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeBusinessAddressCollection", id, params), EmployeeBusinessAddress)
}


/**
 * createEmployeeBusinessAddressCollection
 * 
 * @param {EmployeeBusinessAddress} entity 
 * @returns {Promise<C4CODataSingleResult<EmployeeBusinessAddress>>}
 */
export function createEmployeeBusinessAddressCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeBusinessAddressCollection", undefined, undefined, "POST", entity), EmployeeBusinessAddress)
}


/**
 * updateEmployeeBusinessAddressCollection
 * 
 * @param {string} id 
 * @param {EmployeeBusinessAddress} entity 
 * @returns {Promise<C4CODataSingleResult<EmployeeBusinessAddress>>}
 */
export function updateEmployeeBusinessAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeBusinessAddressCollection", id, undefined, "PATCH", entity), EmployeeBusinessAddress)
}


/**
 * replaceEmployeeBusinessAddressCollection
 * replace a entity
 * @param {string} id 
 * @param {EmployeeBusinessAddress} entity 
 * @returns {Promise<C4CODataSingleResult<EmployeeBusinessAddress>>}
 */
export function replaceEmployeeBusinessAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeBusinessAddressCollection", id, undefined, "PUT", entity), EmployeeBusinessAddress)
}


/**
 * deleteSingleEmployeeBusinessAddressCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEmployeeBusinessAddressCollection(id) {
  return odata.request("EmployeeBusinessAddressCollection", id, undefined ,"DELETE")
}


/**
 * readEmployeeBusinessAddressCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeBusinessAddressCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeBusinessAddressCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeBusinessAddressCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeBusinessAddressCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeBusinessAddressCountryCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeBusinessAddressPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeBusinessAddressPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeBusinessAddressPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeBusinessAddressPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeBusinessAddressPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeBusinessAddressPostalCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeBusinessAddressStateCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readEmployeeBusinessAddressStateCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeBusinessAddressStateCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleEmployeeBusinessAddressStateCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleEmployeeBusinessAddressStateCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeBusinessAddressStateCodeCollection", id, params), ContextualCodeList)
}


/**
 * readEmployeeCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCategoryCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Employee>>}
 */
export function readEmployeeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeCollection", undefined, params), Employee)
}


/**
 * readSingleEmployeeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Employee>>}
 */
export function readSingleEmployeeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCollection", id, params), Employee)
}


/**
 * createEmployeeCollection
 * 
 * @param {Employee} entity 
 * @returns {Promise<C4CODataSingleResult<Employee>>}
 */
export function createEmployeeCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCollection", undefined, undefined, "POST", entity), Employee)
}


/**
 * updateEmployeeCollection
 * 
 * @param {string} id 
 * @param {Employee} entity 
 * @returns {Promise<C4CODataSingleResult<Employee>>}
 */
export function updateEmployeeCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCollection", id, undefined, "PATCH", entity), Employee)
}


/**
 * replaceEmployeeCollection
 * replace a entity
 * @param {string} id 
 * @param {Employee} entity 
 * @returns {Promise<C4CODataSingleResult<Employee>>}
 */
export function replaceEmployeeCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCollection", id, undefined, "PUT", entity), Employee)
}


/**
 * deleteSingleEmployeeCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEmployeeCollection(id) {
  return odata.request("EmployeeCollection", id, undefined ,"DELETE")
}


/**
 * readEmployeeCommunicationDataCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EmployeeCommunicationData>>}
 */
export function readEmployeeCommunicationDataCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeCommunicationDataCollection", undefined, params), EmployeeCommunicationData)
}


/**
 * readSingleEmployeeCommunicationDataCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EmployeeCommunicationData>>}
 */
export function readSingleEmployeeCommunicationDataCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCommunicationDataCollection", id, params), EmployeeCommunicationData)
}


/**
 * createEmployeeCommunicationDataCollection
 * 
 * @param {EmployeeCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<EmployeeCommunicationData>>}
 */
export function createEmployeeCommunicationDataCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCommunicationDataCollection", undefined, undefined, "POST", entity), EmployeeCommunicationData)
}


/**
 * updateEmployeeCommunicationDataCollection
 * 
 * @param {string} id 
 * @param {EmployeeCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<EmployeeCommunicationData>>}
 */
export function updateEmployeeCommunicationDataCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCommunicationDataCollection", id, undefined, "PATCH", entity), EmployeeCommunicationData)
}


/**
 * replaceEmployeeCommunicationDataCollection
 * replace a entity
 * @param {string} id 
 * @param {EmployeeCommunicationData} entity 
 * @returns {Promise<C4CODataSingleResult<EmployeeCommunicationData>>}
 */
export function replaceEmployeeCommunicationDataCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCommunicationDataCollection", id, undefined, "PUT", entity), EmployeeCommunicationData)
}


/**
 * deleteSingleEmployeeCommunicationDataCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleEmployeeCommunicationDataCollection(id) {
  return odata.request("EmployeeCommunicationDataCollection", id, undefined ,"DELETE")
}


/**
 * readEmployeeCompanyPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeCompanyPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeCompanyPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeCompanyPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeCompanyPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCompanyPostalCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeCountryCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeDateFormatCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeDateFormatCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeDateFormatCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeDateFormatCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeDateFormatCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeDateFormatCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeDecimalFormatCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeDecimalFormatCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeDecimalFormatCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeDecimalFormatCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeDecimalFormatCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeDecimalFormatCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeFormattedBusinessAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EmployeeFormattedBusinessAddress>>}
 */
export function readEmployeeFormattedBusinessAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeFormattedBusinessAddressCollection", undefined, params), EmployeeFormattedBusinessAddress)
}


/**
 * readSingleEmployeeFormattedBusinessAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EmployeeFormattedBusinessAddress>>}
 */
export function readSingleEmployeeFormattedBusinessAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeFormattedBusinessAddressCollection", id, params), EmployeeFormattedBusinessAddress)
}


/**
 * readEmployeeGenderCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeGenderCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeGenderCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeGenderCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeGenderCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeGenderCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeLanguageCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeLogonLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeLogonLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeLogonLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeLogonLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeLogonLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeLogonLanguageCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeMaritalStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeMaritalStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeMaritalStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeMaritalStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeMaritalStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeMaritalStatusCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeNationalityCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeNationalityCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeNationalityCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeNationalityCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeNationalityCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeNationalityCountryCodeCollection", id, params), CodeList)
}


/**
 * readEmployeePOBoxCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeePOBoxCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeePOBoxCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeePOBoxCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeePOBoxCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeePOBoxCountryCodeCollection", id, params), CodeList)
}


/**
 * readEmployeePOBoxPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeePOBoxPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeePOBoxPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeePOBoxPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeePOBoxPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeePOBoxPostalCodeCollection", id, params), CodeList)
}


/**
 * readEmployeePOBoxRegionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readEmployeePOBoxRegionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeePOBoxRegionCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleEmployeePOBoxRegionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleEmployeePOBoxRegionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeePOBoxRegionCodeCollection", id, params), ContextualCodeList)
}


/**
 * readEmployeePostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeePostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeePostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeePostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeePostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeePostalCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeRegionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readEmployeeRegionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeRegionCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleEmployeeRegionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleEmployeeRegionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeRegionCodeCollection", id, params), ContextualCodeList)
}


/**
 * readEmployeeTaxJurisdictionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeTaxJurisdictionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeTaxJurisdictionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeTaxJurisdictionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeTaxJurisdictionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeTaxJurisdictionCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeTimeFormatCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeTimeFormatCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeTimeFormatCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeTimeFormatCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeTimeFormatCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeTimeFormatCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeTitleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeTitleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeTitleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeTitleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeTitleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeTitleCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeUserPasswordPolicyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readEmployeeUserPasswordPolicyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeUserPasswordPolicyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleEmployeeUserPasswordPolicyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleEmployeeUserPasswordPolicyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeUserPasswordPolicyCodeCollection", id, params), CodeList)
}


/**
 * readEmployeeValueHelpCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<EmployeeValueHelp>>}
 */
export function readEmployeeValueHelpCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("EmployeeValueHelpCollection", undefined, params), EmployeeValueHelp)
}


/**
 * readSingleEmployeeValueHelpCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<EmployeeValueHelp>>}
 */
export function readSingleEmployeeValueHelpCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("EmployeeValueHelpCollection", id, params), EmployeeValueHelp)
}


/**
 * readExternalIDMappingCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ExternalIDMapping>>}
 */
export function readExternalIDMappingCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ExternalIDMappingCollection", undefined, params), ExternalIDMapping)
}


/**
 * readSingleExternalIDMappingCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ExternalIDMapping>>}
 */
export function readSingleExternalIDMappingCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ExternalIDMappingCollection", id, params), ExternalIDMapping)
}


/**
 * readExternalIDMappingExternalIDSchemeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readExternalIDMappingExternalIDSchemeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ExternalIDMappingExternalIDSchemeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleExternalIDMappingExternalIDSchemeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleExternalIDMappingExternalIDSchemeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ExternalIDMappingExternalIDSchemeCodeCollection", id, params), CodeList)
}


/**
 * readExternalIDMappingObjectTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readExternalIDMappingObjectTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ExternalIDMappingObjectTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleExternalIDMappingObjectTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleExternalIDMappingObjectTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ExternalIDMappingObjectTypeCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerAcademicTitleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerAcademicTitleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerAcademicTitleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerAcademicTitleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerAcademicTitleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerAcademicTitleCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<IndividualCustomerAttachment>>}
 */
export function readIndividualCustomerAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerAttachmentCollection", undefined, params), IndividualCustomerAttachment)
}


/**
 * readSingleIndividualCustomerAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerAttachment>>}
 */
export function readSingleIndividualCustomerAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerAttachmentCollection", id, params), IndividualCustomerAttachment)
}


/**
 * createIndividualCustomerAttachmentCollection
 * 
 * @param {IndividualCustomerAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerAttachment>>}
 */
export function createIndividualCustomerAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerAttachmentCollection", undefined, undefined, "POST", entity), IndividualCustomerAttachment)
}


/**
 * updateIndividualCustomerAttachmentCollection
 * 
 * @param {string} id 
 * @param {IndividualCustomerAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerAttachment>>}
 */
export function updateIndividualCustomerAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerAttachmentCollection", id, undefined, "PATCH", entity), IndividualCustomerAttachment)
}


/**
 * replaceIndividualCustomerAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {IndividualCustomerAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerAttachment>>}
 */
export function replaceIndividualCustomerAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerAttachmentCollection", id, undefined, "PUT", entity), IndividualCustomerAttachment)
}


/**
 * deleteSingleIndividualCustomerAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleIndividualCustomerAttachmentCollection(id) {
  return odata.request("IndividualCustomerAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readIndividualCustomerBillingBlockCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerBillingBlockCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerBillingBlockCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerBillingBlockCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerBillingBlockCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerBillingBlockCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCategoryCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<IndividualCustomer>>}
 */
export function readIndividualCustomerCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCollection", undefined, params), IndividualCustomer)
}


/**
 * readSingleIndividualCustomerCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomer>>}
 */
export function readSingleIndividualCustomerCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCollection", id, params), IndividualCustomer)
}


/**
 * createIndividualCustomerCollection
 * 
 * @param {IndividualCustomer} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomer>>}
 */
export function createIndividualCustomerCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCollection", undefined, undefined, "POST", entity), IndividualCustomer)
}


/**
 * updateIndividualCustomerCollection
 * 
 * @param {string} id 
 * @param {IndividualCustomer} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomer>>}
 */
export function updateIndividualCustomerCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCollection", id, undefined, "PATCH", entity), IndividualCustomer)
}


/**
 * replaceIndividualCustomerCollection
 * replace a entity
 * @param {string} id 
 * @param {IndividualCustomer} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomer>>}
 */
export function replaceIndividualCustomerCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCollection", id, undefined, "PUT", entity), IndividualCustomer)
}


/**
 * deleteSingleIndividualCustomerCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleIndividualCustomerCollection(id) {
  return odata.request("IndividualCustomerCollection", id, undefined ,"DELETE")
}


/**
 * readIndividualCustomerCommonAcademicTitleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCommonAcademicTitleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCommonAcademicTitleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCommonAcademicTitleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCommonAcademicTitleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonAcademicTitleCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCommonCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<IndividualCustomerCommon>>}
 */
export function readIndividualCustomerCommonCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCommonCollection", undefined, params), IndividualCustomerCommon)
}


/**
 * readSingleIndividualCustomerCommonCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerCommon>>}
 */
export function readSingleIndividualCustomerCommonCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonCollection", id, params), IndividualCustomerCommon)
}


/**
 * createIndividualCustomerCommonCollection
 * 
 * @param {IndividualCustomerCommon} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerCommon>>}
 */
export function createIndividualCustomerCommonCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonCollection", undefined, undefined, "POST", entity), IndividualCustomerCommon)
}


/**
 * updateIndividualCustomerCommonCollection
 * 
 * @param {string} id 
 * @param {IndividualCustomerCommon} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerCommon>>}
 */
export function updateIndividualCustomerCommonCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonCollection", id, undefined, "PATCH", entity), IndividualCustomerCommon)
}


/**
 * replaceIndividualCustomerCommonCollection
 * replace a entity
 * @param {string} id 
 * @param {IndividualCustomerCommon} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerCommon>>}
 */
export function replaceIndividualCustomerCommonCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonCollection", id, undefined, "PUT", entity), IndividualCustomerCommon)
}


/**
 * deleteSingleIndividualCustomerCommonCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleIndividualCustomerCommonCollection(id) {
  return odata.request("IndividualCustomerCommonCollection", id, undefined ,"DELETE")
}


/**
 * readIndividualCustomerCommonGenderCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCommonGenderCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCommonGenderCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCommonGenderCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCommonGenderCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonGenderCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCommonMaritalStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCommonMaritalStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCommonMaritalStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCommonMaritalStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCommonMaritalStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonMaritalStatusCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCommonNameFormatCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCommonNameFormatCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCommonNameFormatCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCommonNameFormatCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCommonNameFormatCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonNameFormatCountryCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCommonNationalityCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCommonNationalityCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCommonNationalityCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCommonNationalityCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCommonNationalityCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonNationalityCountryCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCommonNonVerbalCommunicationLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCommonNonVerbalCommunicationLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCommonNonVerbalCommunicationLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCommonNonVerbalCommunicationLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCommonNonVerbalCommunicationLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonNonVerbalCommunicationLanguageCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCommonOccupationCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCommonOccupationCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCommonOccupationCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCommonOccupationCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCommonOccupationCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCommonOccupationCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCompanyPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCompanyPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCompanyPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCompanyPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCompanyPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCompanyPostalCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerContactPermissionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerContactPermissionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerContactPermissionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerContactPermissionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerContactPermissionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerContactPermissionCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCorrespondenceLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCorrespondenceLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCorrespondenceLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCorrespondenceLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCorrespondenceLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCorrespondenceLanguageCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCountryCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerCustomerABCClassificationCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerCustomerABCClassificationCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerCustomerABCClassificationCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerCustomerABCClassificationCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerCustomerABCClassificationCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerCustomerABCClassificationCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerDeliveryBlockCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerDeliveryBlockCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerDeliveryBlockCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerDeliveryBlockCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerDeliveryBlockCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerDeliveryBlockCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerGenderCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerGenderCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerGenderCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerGenderCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerGenderCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerGenderCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerLanguageCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerMaritalStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerMaritalStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerMaritalStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerMaritalStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerMaritalStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerMaritalStatusCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerNationalityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerNationalityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerNationalityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerNationalityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerNationalityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerNationalityCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<IndividualCustomerNotes>>}
 */
export function readIndividualCustomerNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerNotesCollection", undefined, params), IndividualCustomerNotes)
}


/**
 * readSingleIndividualCustomerNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerNotes>>}
 */
export function readSingleIndividualCustomerNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerNotesCollection", id, params), IndividualCustomerNotes)
}


/**
 * createIndividualCustomerNotesCollection
 * 
 * @param {IndividualCustomerNotes} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerNotes>>}
 */
export function createIndividualCustomerNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerNotesCollection", undefined, undefined, "POST", entity), IndividualCustomerNotes)
}


/**
 * updateIndividualCustomerNotesCollection
 * 
 * @param {string} id 
 * @param {IndividualCustomerNotes} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerNotes>>}
 */
export function updateIndividualCustomerNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerNotesCollection", id, undefined, "PATCH", entity), IndividualCustomerNotes)
}


/**
 * replaceIndividualCustomerNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {IndividualCustomerNotes} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualCustomerNotes>>}
 */
export function replaceIndividualCustomerNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerNotesCollection", id, undefined, "PUT", entity), IndividualCustomerNotes)
}


/**
 * deleteSingleIndividualCustomerNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleIndividualCustomerNotesCollection(id) {
  return odata.request("IndividualCustomerNotesCollection", id, undefined ,"DELETE")
}


/**
 * readIndividualCustomerOrderBlockCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerOrderBlockCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerOrderBlockCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerOrderBlockCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerOrderBlockCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerOrderBlockCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerPOBoxDeviatingCountryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerPOBoxDeviatingCountryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerPOBoxDeviatingCountryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerPOBoxDeviatingCountryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerPOBoxDeviatingCountryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerPOBoxDeviatingCountryCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerPOBoxDeviatingRegionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readIndividualCustomerPOBoxDeviatingRegionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerPOBoxDeviatingRegionCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleIndividualCustomerPOBoxDeviatingRegionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleIndividualCustomerPOBoxDeviatingRegionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerPOBoxDeviatingRegionCodeCollection", id, params), ContextualCodeList)
}


/**
 * readIndividualCustomerPOBoxPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerPOBoxPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerPOBoxPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerPOBoxPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerPOBoxPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerPOBoxPostalCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerPreferredCommunicationMediumTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerPreferredCommunicationMediumTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerPreferredCommunicationMediumTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerPreferredCommunicationMediumTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerPreferredCommunicationMediumTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerPreferredCommunicationMediumTypeCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerPrefixCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerPrefixCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerPrefixCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerPrefixCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerPrefixCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerPrefixCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerProfessionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerProfessionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerProfessionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerProfessionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerProfessionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerProfessionCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerRegionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readIndividualCustomerRegionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerRegionCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleIndividualCustomerRegionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleIndividualCustomerRegionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerRegionCodeCollection", id, params), ContextualCodeList)
}


/**
 * readIndividualCustomerRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerRoleCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerStatusCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerStreetPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerStreetPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerStreetPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerStreetPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerStreetPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerStreetPostalCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerTaxJurisdictionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerTaxJurisdictionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerTaxJurisdictionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerTaxJurisdictionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerTaxJurisdictionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerTaxJurisdictionCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readIndividualCustomerTitleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualCustomerTitleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualCustomerTitleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualCustomerTitleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualCustomerTitleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualCustomerTitleCodeCollection", id, params), CodeList)
}


/**
 * readLeadAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeadAttachment>>}
 */
export function readLeadAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadAttachmentCollection", undefined, params), LeadAttachment)
}


/**
 * readSingleLeadAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeadAttachment>>}
 */
export function readSingleLeadAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadAttachmentCollection", id, params), LeadAttachment)
}


/**
 * createLeadAttachmentCollection
 * 
 * @param {LeadAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<LeadAttachment>>}
 */
export function createLeadAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadAttachmentCollection", undefined, undefined, "POST", entity), LeadAttachment)
}


/**
 * updateLeadAttachmentCollection
 * 
 * @param {string} id 
 * @param {LeadAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<LeadAttachment>>}
 */
export function updateLeadAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadAttachmentCollection", id, undefined, "PATCH", entity), LeadAttachment)
}


/**
 * replaceLeadAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {LeadAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<LeadAttachment>>}
 */
export function replaceLeadAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadAttachmentCollection", id, undefined, "PUT", entity), LeadAttachment)
}


/**
 * deleteSingleLeadAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeadAttachmentCollection(id) {
  return odata.request("LeadAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readLeadAttachmentFolderCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadAttachmentFolderCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadAttachmentFolderCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadAttachmentFolderCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadAttachmentFolderCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadAttachmentFolderCategoryCodeCollection", id, params), CodeList)
}


/**
 * readLeadAttachmentFolderTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadAttachmentFolderTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadAttachmentFolderTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadAttachmentFolderTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadAttachmentFolderTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadAttachmentFolderTypeCodeCollection", id, params), CodeList)
}


/**
 * readLeadBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection", id, params), CodeList)
}


/**
 * readLeadBusinessDocumentReferenceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeadBusinessDocumentReference>>}
 */
export function readLeadBusinessDocumentReferenceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceCollection", undefined, params), LeadBusinessDocumentReference)
}


/**
 * readSingleLeadBusinessDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeadBusinessDocumentReference>>}
 */
export function readSingleLeadBusinessDocumentReferenceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceCollection", id, params), LeadBusinessDocumentReference)
}


/**
 * createLeadBusinessDocumentReferenceCollection
 * 
 * @param {LeadBusinessDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<LeadBusinessDocumentReference>>}
 */
export function createLeadBusinessDocumentReferenceCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceCollection", undefined, undefined, "POST", entity), LeadBusinessDocumentReference)
}


/**
 * updateLeadBusinessDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {LeadBusinessDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<LeadBusinessDocumentReference>>}
 */
export function updateLeadBusinessDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceCollection", id, undefined, "PATCH", entity), LeadBusinessDocumentReference)
}


/**
 * replaceLeadBusinessDocumentReferenceCollection
 * replace a entity
 * @param {string} id 
 * @param {LeadBusinessDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<LeadBusinessDocumentReference>>}
 */
export function replaceLeadBusinessDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceCollection", id, undefined, "PUT", entity), LeadBusinessDocumentReference)
}


/**
 * deleteSingleLeadBusinessDocumentReferenceCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeadBusinessDocumentReferenceCollection(id) {
  return odata.request("LeadBusinessDocumentReferenceCollection", id, undefined ,"DELETE")
}


/**
 * readLeadBusinessDocumentReferenceItemTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadBusinessDocumentReferenceItemTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceItemTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadBusinessDocumentReferenceItemTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadBusinessDocumentReferenceItemTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceItemTypeCodeCollection", id, params), CodeList)
}


/**
 * readLeadBusinessDocumentReferenceTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadBusinessDocumentReferenceTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadBusinessDocumentReferenceTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadBusinessDocumentReferenceTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadBusinessDocumentReferenceTypeCodeCollection", id, params), CodeList)
}


/**
 * readLeadCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Lead>>}
 */
export function readLeadCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadCollection", undefined, params), Lead)
}


/**
 * readSingleLeadCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Lead>>}
 */
export function readSingleLeadCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadCollection", id, params), Lead)
}


/**
 * createLeadCollection
 * 
 * @param {Lead} entity 
 * @returns {Promise<C4CODataSingleResult<Lead>>}
 */
export function createLeadCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadCollection", undefined, undefined, "POST", entity), Lead)
}


/**
 * updateLeadCollection
 * 
 * @param {string} id 
 * @param {Lead} entity 
 * @returns {Promise<C4CODataSingleResult<Lead>>}
 */
export function updateLeadCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadCollection", id, undefined, "PATCH", entity), Lead)
}


/**
 * replaceLeadCollection
 * replace a entity
 * @param {string} id 
 * @param {Lead} entity 
 * @returns {Promise<C4CODataSingleResult<Lead>>}
 */
export function replaceLeadCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadCollection", id, undefined, "PUT", entity), Lead)
}


/**
 * deleteSingleLeadCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeadCollection(id) {
  return odata.request("LeadCollection", id, undefined ,"DELETE")
}


/**
 * readLeadConversionStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadConversionStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadConversionStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadConversionStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadConversionStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadConversionStatusCodeCollection", id, params), CodeList)
}


/**
 * readLeadGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadGroupCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadGroupCodeCollection", id, params), CodeList)
}


/**
 * readLeadInvolvedPartiesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeadInvolvedParties>>}
 */
export function readLeadInvolvedPartiesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadInvolvedPartiesCollection", undefined, params), LeadInvolvedParties)
}


/**
 * readSingleLeadInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeadInvolvedParties>>}
 */
export function readSingleLeadInvolvedPartiesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadInvolvedPartiesCollection", id, params), LeadInvolvedParties)
}


/**
 * createLeadInvolvedPartiesCollection
 * 
 * @param {LeadInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<LeadInvolvedParties>>}
 */
export function createLeadInvolvedPartiesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadInvolvedPartiesCollection", undefined, undefined, "POST", entity), LeadInvolvedParties)
}


/**
 * updateLeadInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @param {LeadInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<LeadInvolvedParties>>}
 */
export function updateLeadInvolvedPartiesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadInvolvedPartiesCollection", id, undefined, "PATCH", entity), LeadInvolvedParties)
}


/**
 * replaceLeadInvolvedPartiesCollection
 * replace a entity
 * @param {string} id 
 * @param {LeadInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<LeadInvolvedParties>>}
 */
export function replaceLeadInvolvedPartiesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadInvolvedPartiesCollection", id, undefined, "PUT", entity), LeadInvolvedParties)
}


/**
 * deleteSingleLeadInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeadInvolvedPartiesCollection(id) {
  return odata.request("LeadInvolvedPartiesCollection", id, undefined ,"DELETE")
}


/**
 * readLeadInvolvedPartiesRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadInvolvedPartiesRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadInvolvedPartiesRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadInvolvedPartiesRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadInvolvedPartiesRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadInvolvedPartiesRoleCodeCollection", id, params), CodeList)
}


/**
 * readLeadLeadConsistencyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadLeadConsistencyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadLeadConsistencyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadLeadConsistencyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadLeadConsistencyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadLeadConsistencyCodeCollection", id, params), CodeList)
}


/**
 * readLeadPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadPriorityCodeCollection", id, params), CodeList)
}


/**
 * readLeadProductCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeadProduct>>}
 */
export function readLeadProductCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadProductCollection", undefined, params), LeadProduct)
}


/**
 * readSingleLeadProductCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeadProduct>>}
 */
export function readSingleLeadProductCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadProductCollection", id, params), LeadProduct)
}


/**
 * createLeadProductCollection
 * 
 * @param {LeadProduct} entity 
 * @returns {Promise<C4CODataSingleResult<LeadProduct>>}
 */
export function createLeadProductCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadProductCollection", undefined, undefined, "POST", entity), LeadProduct)
}


/**
 * updateLeadProductCollection
 * 
 * @param {string} id 
 * @param {LeadProduct} entity 
 * @returns {Promise<C4CODataSingleResult<LeadProduct>>}
 */
export function updateLeadProductCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadProductCollection", id, undefined, "PATCH", entity), LeadProduct)
}


/**
 * replaceLeadProductCollection
 * replace a entity
 * @param {string} id 
 * @param {LeadProduct} entity 
 * @returns {Promise<C4CODataSingleResult<LeadProduct>>}
 */
export function replaceLeadProductCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadProductCollection", id, undefined, "PUT", entity), LeadProduct)
}


/**
 * deleteSingleLeadProductCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeadProductCollection(id) {
  return odata.request("LeadProductCollection", id, undefined ,"DELETE")
}


/**
 * readLeadQualificationLevelCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadQualificationLevelCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadQualificationLevelCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadQualificationLevelCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadQualificationLevelCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadQualificationLevelCodeCollection", id, params), CodeList)
}


/**
 * readLeadReasonForStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadReasonForStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadReasonForStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadReasonForStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadReasonForStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadReasonForStatusCodeCollection", id, params), CodeList)
}


/**
 * readLeadSalesAndMarketingTeamCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeadSalesAndMarketingTeam>>}
 */
export function readLeadSalesAndMarketingTeamCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamCollection", undefined, params), LeadSalesAndMarketingTeam)
}


/**
 * readSingleLeadSalesAndMarketingTeamCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeadSalesAndMarketingTeam>>}
 */
export function readSingleLeadSalesAndMarketingTeamCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamCollection", id, params), LeadSalesAndMarketingTeam)
}


/**
 * createLeadSalesAndMarketingTeamCollection
 * 
 * @param {LeadSalesAndMarketingTeam} entity 
 * @returns {Promise<C4CODataSingleResult<LeadSalesAndMarketingTeam>>}
 */
export function createLeadSalesAndMarketingTeamCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamCollection", undefined, undefined, "POST", entity), LeadSalesAndMarketingTeam)
}


/**
 * updateLeadSalesAndMarketingTeamCollection
 * 
 * @param {string} id 
 * @param {LeadSalesAndMarketingTeam} entity 
 * @returns {Promise<C4CODataSingleResult<LeadSalesAndMarketingTeam>>}
 */
export function updateLeadSalesAndMarketingTeamCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamCollection", id, undefined, "PATCH", entity), LeadSalesAndMarketingTeam)
}


/**
 * replaceLeadSalesAndMarketingTeamCollection
 * replace a entity
 * @param {string} id 
 * @param {LeadSalesAndMarketingTeam} entity 
 * @returns {Promise<C4CODataSingleResult<LeadSalesAndMarketingTeam>>}
 */
export function replaceLeadSalesAndMarketingTeamCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamCollection", id, undefined, "PUT", entity), LeadSalesAndMarketingTeam)
}


/**
 * deleteSingleLeadSalesAndMarketingTeamCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeadSalesAndMarketingTeamCollection(id) {
  return odata.request("LeadSalesAndMarketingTeamCollection", id, undefined ,"DELETE")
}


/**
 * readLeadSalesAndMarketingTeamRoleCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadSalesAndMarketingTeamRoleCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamRoleCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadSalesAndMarketingTeamRoleCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadSalesAndMarketingTeamRoleCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamRoleCategoryCodeCollection", id, params), CodeList)
}


/**
 * readLeadSalesAndMarketingTeamRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadSalesAndMarketingTeamRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadSalesAndMarketingTeamRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadSalesAndMarketingTeamRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadSalesAndMarketingTeamRoleCodeCollection", id, params), CodeList)
}


/**
 * readLeadSourceCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadSourceCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadSourceCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadSourceCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadSourceCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadSourceCodeCollection", id, params), CodeList)
}


/**
 * readLeadStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeadStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeadStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeadStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeadStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeadStatusCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadAPPTaskTypeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadAPPTaskTypeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadAPPTaskTypeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadAPPTaskTypeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadAPPTaskTypeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadAPPTaskTypeCollection", id, params), CodeList)
}


/**
 * readLeanLeadActiveMonthCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadActiveMonthCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadActiveMonthCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadActiveMonthCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadActiveMonthCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadActiveMonthCollection", id, params), CodeList)
}


/**
 * readLeanLeadActiveQuarterCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadActiveQuarterCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadActiveQuarterCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadActiveQuarterCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadActiveQuarterCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadActiveQuarterCollection", id, params), CodeList)
}


/**
 * readLeanLeadApprovalStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadApprovalStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadApprovalStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadApprovalStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadApprovalStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadApprovalStatusCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadApprovalStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadApprovalStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadApprovalStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadApprovalStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadApprovalStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadApprovalStatusCollection", id, params), CodeList)
}


/**
 * readLeanLeadAttachmentFolderCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeanLeadAttachmentFolder>>}
 */
export function readLeanLeadAttachmentFolderCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadAttachmentFolderCollection", undefined, params), LeanLeadAttachmentFolder)
}


/**
 * readSingleLeanLeadAttachmentFolderCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeanLeadAttachmentFolder>>}
 */
export function readSingleLeanLeadAttachmentFolderCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadAttachmentFolderCollection", id, params), LeanLeadAttachmentFolder)
}


/**
 * createLeanLeadAttachmentFolderCollection
 * 
 * @param {LeanLeadAttachmentFolder} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadAttachmentFolder>>}
 */
export function createLeanLeadAttachmentFolderCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadAttachmentFolderCollection", undefined, undefined, "POST", entity), LeanLeadAttachmentFolder)
}


/**
 * updateLeanLeadAttachmentFolderCollection
 * 
 * @param {string} id 
 * @param {LeanLeadAttachmentFolder} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadAttachmentFolder>>}
 */
export function updateLeanLeadAttachmentFolderCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadAttachmentFolderCollection", id, undefined, "PATCH", entity), LeanLeadAttachmentFolder)
}


/**
 * replaceLeanLeadAttachmentFolderCollection
 * replace a entity
 * @param {string} id 
 * @param {LeanLeadAttachmentFolder} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadAttachmentFolder>>}
 */
export function replaceLeanLeadAttachmentFolderCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadAttachmentFolderCollection", id, undefined, "PUT", entity), LeanLeadAttachmentFolder)
}


/**
 * deleteSingleLeanLeadAttachmentFolderCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeanLeadAttachmentFolderCollection(id) {
  return odata.request("LeanLeadAttachmentFolderCollection", id, undefined ,"DELETE")
}


/**
 * readLeanLeadBusinessTransactionDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadBusinessTransactionDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadBusinessTransactionDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadBusinessTransactionDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadBusinessTransactionDocumentReferenceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeanLeadBusinessTransactionDocumentReference>>}
 */
export function readLeanLeadBusinessTransactionDocumentReferenceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceCollection", undefined, params), LeanLeadBusinessTransactionDocumentReference)
}


/**
 * readSingleLeanLeadBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeanLeadBusinessTransactionDocumentReference>>}
 */
export function readSingleLeanLeadBusinessTransactionDocumentReferenceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceCollection", id, params), LeanLeadBusinessTransactionDocumentReference)
}


/**
 * createLeanLeadBusinessTransactionDocumentReferenceCollection
 * 
 * @param {LeanLeadBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadBusinessTransactionDocumentReference>>}
 */
export function createLeanLeadBusinessTransactionDocumentReferenceCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceCollection", undefined, undefined, "POST", entity), LeanLeadBusinessTransactionDocumentReference)
}


/**
 * updateLeanLeadBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {LeanLeadBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadBusinessTransactionDocumentReference>>}
 */
export function updateLeanLeadBusinessTransactionDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceCollection", id, undefined, "PATCH", entity), LeanLeadBusinessTransactionDocumentReference)
}


/**
 * replaceLeanLeadBusinessTransactionDocumentReferenceCollection
 * replace a entity
 * @param {string} id 
 * @param {LeanLeadBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadBusinessTransactionDocumentReference>>}
 */
export function replaceLeanLeadBusinessTransactionDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceCollection", id, undefined, "PUT", entity), LeanLeadBusinessTransactionDocumentReference)
}


/**
 * deleteSingleLeanLeadBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeanLeadBusinessTransactionDocumentReferenceCollection(id) {
  return odata.request("LeanLeadBusinessTransactionDocumentReferenceCollection", id, undefined ,"DELETE")
}


/**
 * readLeanLeadBusinessTransactionDocumentReferenceItemTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadBusinessTransactionDocumentReferenceItemTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceItemTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadBusinessTransactionDocumentReferenceItemTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadBusinessTransactionDocumentReferenceItemTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceItemTypeCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadBusinessTransactionDocumentReferenceTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadBusinessTransactionDocumentReferenceTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadBusinessTransactionDocumentReferenceTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadBusinessTransactionDocumentReferenceTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadBusinessTransactionDocumentReferenceTypeCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadBuyMethod2Collection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadBuyMethod2Collection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadBuyMethod2Collection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadBuyMethod2Collection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadBuyMethod2Collection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadBuyMethod2Collection", id, params), CodeList)
}


/**
 * readLeanLeadCertificateTyepCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadCertificateTyepCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadCertificateTyepCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadCertificateTyepCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadCertificateTyepCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadCertificateTyepCollection", id, params), CodeList)
}


/**
 * readLeanLeadCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeanLead>>}
 */
export function readLeanLeadCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadCollection", undefined, params), LeanLead)
}


/**
 * readSingleLeanLeadCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeanLead>>}
 */
export function readSingleLeanLeadCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadCollection", id, params), LeanLead)
}


/**
 * createLeanLeadCollection
 * 
 * @param {LeanLead} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLead>>}
 */
export function createLeanLeadCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadCollection", undefined, undefined, "POST", entity), LeanLead)
}


/**
 * updateLeanLeadCollection
 * 
 * @param {string} id 
 * @param {LeanLead} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLead>>}
 */
export function updateLeanLeadCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadCollection", id, undefined, "PATCH", entity), LeanLead)
}


/**
 * replaceLeanLeadCollection
 * replace a entity
 * @param {string} id 
 * @param {LeanLead} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLead>>}
 */
export function replaceLeanLeadCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadCollection", id, undefined, "PUT", entity), LeanLead)
}


/**
 * deleteSingleLeanLeadCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeanLeadCollection(id) {
  return odata.request("LeanLeadCollection", id, undefined ,"DELETE")
}


/**
 * readLeanLeadConsistencyStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadConsistencyStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadConsistencyStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadConsistencyStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadConsistencyStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadConsistencyStatusCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadContactCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeanLeadContact>>}
 */
export function readLeanLeadContactCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadContactCollection", undefined, params), LeanLeadContact)
}


/**
 * readSingleLeanLeadContactCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeanLeadContact>>}
 */
export function readSingleLeanLeadContactCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadContactCollection", id, params), LeanLeadContact)
}


/**
 * createLeanLeadContactCollection
 * 
 * @param {LeanLeadContact} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadContact>>}
 */
export function createLeanLeadContactCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadContactCollection", undefined, undefined, "POST", entity), LeanLeadContact)
}


/**
 * updateLeanLeadContactCollection
 * 
 * @param {string} id 
 * @param {LeanLeadContact} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadContact>>}
 */
export function updateLeanLeadContactCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadContactCollection", id, undefined, "PATCH", entity), LeanLeadContact)
}


/**
 * replaceLeanLeadContactCollection
 * replace a entity
 * @param {string} id 
 * @param {LeanLeadContact} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadContact>>}
 */
export function replaceLeanLeadContactCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadContactCollection", id, undefined, "PUT", entity), LeanLeadContact)
}


/**
 * deleteSingleLeanLeadContactCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeanLeadContactCollection(id) {
  return odata.request("LeanLeadContactCollection", id, undefined ,"DELETE")
}


/**
 * readLeanLeadCountryCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadCountryCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadCountryCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadCountryCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadCountryCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadCountryCollection", id, params), CodeList)
}


/**
 * readLeanLeadCreatSoucreCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadCreatSoucreCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadCreatSoucreCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadCreatSoucreCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadCreatSoucreCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadCreatSoucreCollection", id, params), CodeList)
}


/**
 * readLeanLeadCustomerIntentioncontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadCustomerIntentioncontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadCustomerIntentioncontentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadCustomerIntentioncontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadCustomerIntentioncontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadCustomerIntentioncontentCollection", id, params), CodeList)
}


/**
 * readLeanLeadDepositAmountcurrencyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadDepositAmountcurrencyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadDepositAmountcurrencyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadDepositAmountcurrencyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadDepositAmountcurrencyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadDepositAmountcurrencyCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadDistributionChannelCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadDistributionChannelCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadDistributionChannelCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadDistributionChannelCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadDistributionChannelCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadDistributionChannelCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadDivisionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadDivisionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadDivisionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadDivisionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadDivisionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadDivisionCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadExpectedRevenueCurrencyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadExpectedRevenueCurrencyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadExpectedRevenueCurrencyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadExpectedRevenueCurrencyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadExpectedRevenueCurrencyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadExpectedRevenueCurrencyCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadExternalPartyCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeanLeadExternalParty>>}
 */
export function readLeanLeadExternalPartyCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadExternalPartyCollection", undefined, params), LeanLeadExternalParty)
}


/**
 * readSingleLeanLeadExternalPartyCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeanLeadExternalParty>>}
 */
export function readSingleLeanLeadExternalPartyCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadExternalPartyCollection", id, params), LeanLeadExternalParty)
}


/**
 * createLeanLeadExternalPartyCollection
 * 
 * @param {LeanLeadExternalParty} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadExternalParty>>}
 */
export function createLeanLeadExternalPartyCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadExternalPartyCollection", undefined, undefined, "POST", entity), LeanLeadExternalParty)
}


/**
 * updateLeanLeadExternalPartyCollection
 * 
 * @param {string} id 
 * @param {LeanLeadExternalParty} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadExternalParty>>}
 */
export function updateLeanLeadExternalPartyCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadExternalPartyCollection", id, undefined, "PATCH", entity), LeanLeadExternalParty)
}


/**
 * replaceLeanLeadExternalPartyCollection
 * replace a entity
 * @param {string} id 
 * @param {LeanLeadExternalParty} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadExternalParty>>}
 */
export function replaceLeanLeadExternalPartyCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadExternalPartyCollection", id, undefined, "PUT", entity), LeanLeadExternalParty)
}


/**
 * deleteSingleLeanLeadExternalPartyCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeanLeadExternalPartyCollection(id) {
  return odata.request("LeanLeadExternalPartyCollection", id, undefined ,"DELETE")
}


/**
 * readLeanLeadExternalPartyRoleCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadExternalPartyRoleCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadExternalPartyRoleCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadExternalPartyRoleCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadExternalPartyRoleCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadExternalPartyRoleCategoryCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadExternalPartyRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadExternalPartyRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadExternalPartyRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadExternalPartyRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadExternalPartyRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadExternalPartyRoleCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadGenderCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadGenderCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadGenderCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadGenderCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadGenderCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadGenderCollection", id, params), CodeList)
}


/**
 * readLeanLeadGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadGroupCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadGroupCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadIntentionDiscountAmountcurrencyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadIntentionDiscountAmountcurrencyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadIntentionDiscountAmountcurrencyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadIntentionDiscountAmountcurrencyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadIntentionDiscountAmountcurrencyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadIntentionDiscountAmountcurrencyCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadInvoiceAmountcurrencyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadInvoiceAmountcurrencyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadInvoiceAmountcurrencyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadInvoiceAmountcurrencyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadInvoiceAmountcurrencyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadInvoiceAmountcurrencyCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadItemCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeanLeadItem>>}
 */
export function readLeanLeadItemCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadItemCollection", undefined, params), LeanLeadItem)
}


/**
 * readSingleLeanLeadItemCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeanLeadItem>>}
 */
export function readSingleLeanLeadItemCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadItemCollection", id, params), LeanLeadItem)
}


/**
 * createLeanLeadItemCollection
 * 
 * @param {LeanLeadItem} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadItem>>}
 */
export function createLeanLeadItemCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadItemCollection", undefined, undefined, "POST", entity), LeanLeadItem)
}


/**
 * updateLeanLeadItemCollection
 * 
 * @param {string} id 
 * @param {LeanLeadItem} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadItem>>}
 */
export function updateLeanLeadItemCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadItemCollection", id, undefined, "PATCH", entity), LeanLeadItem)
}


/**
 * replaceLeanLeadItemCollection
 * replace a entity
 * @param {string} id 
 * @param {LeanLeadItem} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadItem>>}
 */
export function replaceLeanLeadItemCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadItemCollection", id, undefined, "PUT", entity), LeanLeadItem)
}


/**
 * deleteSingleLeanLeadItemCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeanLeadItemCollection(id) {
  return odata.request("LeanLeadItemCollection", id, undefined ,"DELETE")
}


/**
 * readLeanLeadItemunitCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadItemunitCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadItemunitCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadItemunitCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadItemunitCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadItemunitCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadLeadLevelCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadLeadLevelCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadLeadLevelCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadLeadLevelCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadLeadLevelCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadLeadLevelCollection", id, params), CodeList)
}


/**
 * readLeanLeadLeadOwnerShipcontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadLeadOwnerShipcontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadLeadOwnerShipcontentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadLeadOwnerShipcontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadLeadOwnerShipcontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadLeadOwnerShipcontentCollection", id, params), CodeList)
}


/**
 * readLeanLeadLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadLoseReason2contentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadLoseReason2contentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadLoseReason2contentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadLoseReason2contentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadLoseReason2contentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadLoseReason2contentCollection", id, params), CodeList)
}


/**
 * readLeanLeadMainPurchaseFocuscontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadMainPurchaseFocuscontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadMainPurchaseFocuscontentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadMainPurchaseFocuscontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadMainPurchaseFocuscontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadMainPurchaseFocuscontentCollection", id, params), CodeList)
}


/**
 * readLeanLeadMaritalStatuscontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadMaritalStatuscontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadMaritalStatuscontentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadMaritalStatuscontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadMaritalStatuscontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadMaritalStatuscontentCollection", id, params), CodeList)
}


/**
 * readLeanLeadNameLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadNameLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadNameLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadNameLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadNameLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadNameLanguageCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadOccupationcontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadOccupationcontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadOccupationcontentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadOccupationcontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadOccupationcontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadOccupationcontentCollection", id, params), CodeList)
}


/**
 * readLeanLeadOriginTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadOriginTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadOriginTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadOriginTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadOriginTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadOriginTypeCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadPaymentcontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadPaymentcontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadPaymentcontentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadPaymentcontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadPaymentcontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadPaymentcontentCollection", id, params), CodeList)
}


/**
 * readLeanLeadPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadPriorityCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadProcessingTypeCodeleaCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadProcessingTypeCodeleaCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadProcessingTypeCodeleaCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadProcessingTypeCodeleaCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadProcessingTypeCodeleaCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadProcessingTypeCodeleaCollection", id, params), CodeList)
}


/**
 * readLeanLeadPurchaseUsecontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadPurchaseUsecontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadPurchaseUsecontentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadPurchaseUsecontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadPurchaseUsecontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadPurchaseUsecontentCollection", id, params), CodeList)
}


/**
 * readLeanLeadQualificationLevelCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadQualificationLevelCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadQualificationLevelCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadQualificationLevelCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadQualificationLevelCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadQualificationLevelCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadRegioncontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadRegioncontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadRegioncontentCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadRegioncontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadRegioncontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadRegioncontentCollection", id, params), CodeList)
}


/**
 * readLeanLeadResultReasonCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadResultReasonCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadResultReasonCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadResultReasonCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadResultReasonCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadResultReasonCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadSalesAndMarketingTeamCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<LeanLeadSalesAndMarketingTeam>>}
 */
export function readLeanLeadSalesAndMarketingTeamCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamCollection", undefined, params), LeanLeadSalesAndMarketingTeam)
}


/**
 * readSingleLeanLeadSalesAndMarketingTeamCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<LeanLeadSalesAndMarketingTeam>>}
 */
export function readSingleLeanLeadSalesAndMarketingTeamCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamCollection", id, params), LeanLeadSalesAndMarketingTeam)
}


/**
 * createLeanLeadSalesAndMarketingTeamCollection
 * 
 * @param {LeanLeadSalesAndMarketingTeam} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadSalesAndMarketingTeam>>}
 */
export function createLeanLeadSalesAndMarketingTeamCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamCollection", undefined, undefined, "POST", entity), LeanLeadSalesAndMarketingTeam)
}


/**
 * updateLeanLeadSalesAndMarketingTeamCollection
 * 
 * @param {string} id 
 * @param {LeanLeadSalesAndMarketingTeam} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadSalesAndMarketingTeam>>}
 */
export function updateLeanLeadSalesAndMarketingTeamCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamCollection", id, undefined, "PATCH", entity), LeanLeadSalesAndMarketingTeam)
}


/**
 * replaceLeanLeadSalesAndMarketingTeamCollection
 * replace a entity
 * @param {string} id 
 * @param {LeanLeadSalesAndMarketingTeam} entity 
 * @returns {Promise<C4CODataSingleResult<LeanLeadSalesAndMarketingTeam>>}
 */
export function replaceLeanLeadSalesAndMarketingTeamCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamCollection", id, undefined, "PUT", entity), LeanLeadSalesAndMarketingTeam)
}


/**
 * deleteSingleLeanLeadSalesAndMarketingTeamCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleLeanLeadSalesAndMarketingTeamCollection(id) {
  return odata.request("LeanLeadSalesAndMarketingTeamCollection", id, undefined ,"DELETE")
}


/**
 * readLeanLeadSalesAndMarketingTeamRoleCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadSalesAndMarketingTeamRoleCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamRoleCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadSalesAndMarketingTeamRoleCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadSalesAndMarketingTeamRoleCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamRoleCategoryCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadSalesAndMarketingTeamRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadSalesAndMarketingTeamRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadSalesAndMarketingTeamRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadSalesAndMarketingTeamRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadSalesAndMarketingTeamRoleCodeCollection", id, params), CodeList)
}


/**
 * readLeanLeadUserStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readLeanLeadUserStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("LeanLeadUserStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleLeanLeadUserStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleLeanLeadUserStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("LeanLeadUserStatusCodeCollection", id, params), CodeList)
}


/**
 * readMaterialAttachmentFolderCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readMaterialAttachmentFolderCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("MaterialAttachmentFolderCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleMaterialAttachmentFolderCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleMaterialAttachmentFolderCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("MaterialAttachmentFolderCategoryCodeCollection", id, params), CodeList)
}


/**
 * readMaterialAttachmentFolderTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readMaterialAttachmentFolderTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("MaterialAttachmentFolderTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleMaterialAttachmentFolderTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleMaterialAttachmentFolderTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("MaterialAttachmentFolderTypeCodeCollection", id, params), CodeList)
}


/**
 * readObjectIdentifierMappingObjectIdentifierMappingObjectTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readObjectIdentifierMappingObjectIdentifierMappingObjectTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ObjectIdentifierMappingObjectIdentifierMappingObjectTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleObjectIdentifierMappingObjectIdentifierMappingObjectTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleObjectIdentifierMappingObjectIdentifierMappingObjectTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ObjectIdentifierMappingObjectIdentifierMappingObjectTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityAppointmentSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityAppointmentSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityAppointmentSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityAppointmentSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityAppointmentSalesActivityCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityAppointmentSalesActivity>>}
 */
export function readOpportunityAppointmentSalesActivityCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityCollection", undefined, params), OpportunityAppointmentSalesActivity)
}


/**
 * readSingleOpportunityAppointmentSalesActivityCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityAppointmentSalesActivity>>}
 */
export function readSingleOpportunityAppointmentSalesActivityCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityCollection", id, params), OpportunityAppointmentSalesActivity)
}


/**
 * createOpportunityAppointmentSalesActivityCollection
 * 
 * @param {OpportunityAppointmentSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityAppointmentSalesActivity>>}
 */
export function createOpportunityAppointmentSalesActivityCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityCollection", undefined, undefined, "POST", entity), OpportunityAppointmentSalesActivity)
}


/**
 * updateOpportunityAppointmentSalesActivityCollection
 * 
 * @param {string} id 
 * @param {OpportunityAppointmentSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityAppointmentSalesActivity>>}
 */
export function updateOpportunityAppointmentSalesActivityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityCollection", id, undefined, "PATCH", entity), OpportunityAppointmentSalesActivity)
}


/**
 * replaceOpportunityAppointmentSalesActivityCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityAppointmentSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityAppointmentSalesActivity>>}
 */
export function replaceOpportunityAppointmentSalesActivityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityCollection", id, undefined, "PUT", entity), OpportunityAppointmentSalesActivity)
}


/**
 * deleteSingleOpportunityAppointmentSalesActivityCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityAppointmentSalesActivityCollection(id) {
  return odata.request("OpportunityAppointmentSalesActivityCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityAppointmentSalesActivitySalesPhaseCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityAppointmentSalesActivitySalesPhaseCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivitySalesPhaseCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityAppointmentSalesActivitySalesPhaseCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityAppointmentSalesActivitySalesPhaseCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivitySalesPhaseCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityAppointmentSalesActivityStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityAppointmentSalesActivityStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityAppointmentSalesActivityStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityAppointmentSalesActivityStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityStatusCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityAppointmentSalesActivityTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityAppointmentSalesActivityTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityAppointmentSalesActivityTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityAppointmentSalesActivityTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAppointmentSalesActivityTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityApprovalStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityApprovalStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityApprovalStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityApprovalStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityApprovalStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityApprovalStatusCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityAttachment>>}
 */
export function readOpportunityAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityAttachmentCollection", undefined, params), OpportunityAttachment)
}


/**
 * readSingleOpportunityAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityAttachment>>}
 */
export function readSingleOpportunityAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAttachmentCollection", id, params), OpportunityAttachment)
}


/**
 * createOpportunityAttachmentCollection
 * 
 * @param {OpportunityAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityAttachment>>}
 */
export function createOpportunityAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAttachmentCollection", undefined, undefined, "POST", entity), OpportunityAttachment)
}


/**
 * updateOpportunityAttachmentCollection
 * 
 * @param {string} id 
 * @param {OpportunityAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityAttachment>>}
 */
export function updateOpportunityAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAttachmentCollection", id, undefined, "PATCH", entity), OpportunityAttachment)
}


/**
 * replaceOpportunityAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityAttachment>>}
 */
export function replaceOpportunityAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAttachmentCollection", id, undefined, "PUT", entity), OpportunityAttachment)
}


/**
 * deleteSingleOpportunityAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityAttachmentCollection(id) {
  return odata.request("OpportunityAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityAttachmentFolderCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityAttachmentFolderCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityAttachmentFolderCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityAttachmentFolderCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityAttachmentFolderCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAttachmentFolderCategoryCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityAttachmentFolderTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityAttachmentFolderTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityAttachmentFolderTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityAttachmentFolderTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityAttachmentFolderTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityAttachmentFolderTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityBusinessDocumentReferenceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityBusinessDocumentReference>>}
 */
export function readOpportunityBusinessDocumentReferenceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceCollection", undefined, params), OpportunityBusinessDocumentReference)
}


/**
 * readSingleOpportunityBusinessDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityBusinessDocumentReference>>}
 */
export function readSingleOpportunityBusinessDocumentReferenceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceCollection", id, params), OpportunityBusinessDocumentReference)
}


/**
 * createOpportunityBusinessDocumentReferenceCollection
 * 
 * @param {OpportunityBusinessDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityBusinessDocumentReference>>}
 */
export function createOpportunityBusinessDocumentReferenceCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceCollection", undefined, undefined, "POST", entity), OpportunityBusinessDocumentReference)
}


/**
 * updateOpportunityBusinessDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {OpportunityBusinessDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityBusinessDocumentReference>>}
 */
export function updateOpportunityBusinessDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceCollection", id, undefined, "PATCH", entity), OpportunityBusinessDocumentReference)
}


/**
 * replaceOpportunityBusinessDocumentReferenceCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityBusinessDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityBusinessDocumentReference>>}
 */
export function replaceOpportunityBusinessDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceCollection", id, undefined, "PUT", entity), OpportunityBusinessDocumentReference)
}


/**
 * deleteSingleOpportunityBusinessDocumentReferenceCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityBusinessDocumentReferenceCollection(id) {
  return odata.request("OpportunityBusinessDocumentReferenceCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityBusinessDocumentReferenceItemTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityBusinessDocumentReferenceItemTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceItemTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityBusinessDocumentReferenceItemTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityBusinessDocumentReferenceItemTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceItemTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityBusinessDocumentReferenceTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityBusinessDocumentReferenceTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityBusinessDocumentReferenceTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityBusinessDocumentReferenceTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityBusinessDocumentReferenceTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Opportunity>>}
 */
export function readOpportunityCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityCollection", undefined, params), Opportunity)
}


/**
 * readSingleOpportunityCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Opportunity>>}
 */
export function readSingleOpportunityCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityCollection", id, params), Opportunity)
}


/**
 * createOpportunityCollection
 * 
 * @param {Opportunity} entity 
 * @returns {Promise<C4CODataSingleResult<Opportunity>>}
 */
export function createOpportunityCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityCollection", undefined, undefined, "POST", entity), Opportunity)
}


/**
 * updateOpportunityCollection
 * 
 * @param {string} id 
 * @param {Opportunity} entity 
 * @returns {Promise<C4CODataSingleResult<Opportunity>>}
 */
export function updateOpportunityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityCollection", id, undefined, "PATCH", entity), Opportunity)
}


/**
 * replaceOpportunityCollection
 * replace a entity
 * @param {string} id 
 * @param {Opportunity} entity 
 * @returns {Promise<C4CODataSingleResult<Opportunity>>}
 */
export function replaceOpportunityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityCollection", id, undefined, "PUT", entity), Opportunity)
}


/**
 * deleteSingleOpportunityCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityCollection(id) {
  return odata.request("OpportunityCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityConsistencyStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityConsistencyStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityConsistencyStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityConsistencyStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityConsistencyStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityConsistencyStatusCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityContactAttitudeTowardOpportunityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityContactAttitudeTowardOpportunityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityContactAttitudeTowardOpportunityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityContactAttitudeTowardOpportunityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityContactAttitudeTowardOpportunityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityContactAttitudeTowardOpportunityCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityContactCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityContact>>}
 */
export function readOpportunityContactCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityContactCollection", undefined, params), OpportunityContact)
}


/**
 * readSingleOpportunityContactCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityContact>>}
 */
export function readSingleOpportunityContactCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityContactCollection", id, params), OpportunityContact)
}


/**
 * createOpportunityContactCollection
 * 
 * @param {OpportunityContact} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityContact>>}
 */
export function createOpportunityContactCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityContactCollection", undefined, undefined, "POST", entity), OpportunityContact)
}


/**
 * updateOpportunityContactCollection
 * 
 * @param {string} id 
 * @param {OpportunityContact} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityContact>>}
 */
export function updateOpportunityContactCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityContactCollection", id, undefined, "PATCH", entity), OpportunityContact)
}


/**
 * replaceOpportunityContactCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityContact} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityContact>>}
 */
export function replaceOpportunityContactCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityContactCollection", id, undefined, "PUT", entity), OpportunityContact)
}


/**
 * deleteSingleOpportunityContactCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityContactCollection(id) {
  return odata.request("OpportunityContactCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityContactRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityContactRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityContactRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityContactRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityContactRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityContactRoleCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityCustomStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readOpportunityCustomStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityCustomStatusCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleOpportunityCustomStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleOpportunityCustomStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityCustomStatusCodeCollection", id, params), ContextualCodeList)
}


/**
 * readOpportunityDistributionChannelCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityDistributionChannelCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityDistributionChannelCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityDistributionChannelCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityDistributionChannelCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityDistributionChannelCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityDivisionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityDivisionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityDivisionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityDivisionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityDivisionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityDivisionCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityDocumentTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityDocumentTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityDocumentTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityDocumentTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityDocumentTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityDocumentTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityEMailSalesActivityCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityEMailSalesActivity>>}
 */
export function readOpportunityEMailSalesActivityCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityCollection", undefined, params), OpportunityEMailSalesActivity)
}


/**
 * readSingleOpportunityEMailSalesActivityCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityEMailSalesActivity>>}
 */
export function readSingleOpportunityEMailSalesActivityCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityCollection", id, params), OpportunityEMailSalesActivity)
}


/**
 * createOpportunityEMailSalesActivityCollection
 * 
 * @param {OpportunityEMailSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityEMailSalesActivity>>}
 */
export function createOpportunityEMailSalesActivityCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityCollection", undefined, undefined, "POST", entity), OpportunityEMailSalesActivity)
}


/**
 * updateOpportunityEMailSalesActivityCollection
 * 
 * @param {string} id 
 * @param {OpportunityEMailSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityEMailSalesActivity>>}
 */
export function updateOpportunityEMailSalesActivityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityCollection", id, undefined, "PATCH", entity), OpportunityEMailSalesActivity)
}


/**
 * replaceOpportunityEMailSalesActivityCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityEMailSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityEMailSalesActivity>>}
 */
export function replaceOpportunityEMailSalesActivityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityCollection", id, undefined, "PUT", entity), OpportunityEMailSalesActivity)
}


/**
 * deleteSingleOpportunityEMailSalesActivityCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityEMailSalesActivityCollection(id) {
  return odata.request("OpportunityEMailSalesActivityCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityEMailSalesActivityLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityEMailSalesActivityLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityEMailSalesActivityLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityEMailSalesActivityLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityEMailSalesActivitySalesCyclePhaseCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityEMailSalesActivitySalesCyclePhaseCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityEMailSalesActivitySalesCyclePhaseCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityEMailSalesActivitySalesCyclePhaseCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityEMailSalesActivitySalesCyclePhaseCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityEMailSalesActivitySalesCyclePhaseCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityEMailSalesActivityTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityEMailSalesActivityTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityEMailSalesActivityTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityEMailSalesActivityTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityEMailSalesActivityTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityGroupCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityGroupCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityInvolvedPartiesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityInvolvedParties>>}
 */
export function readOpportunityInvolvedPartiesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityInvolvedPartiesCollection", undefined, params), OpportunityInvolvedParties)
}


/**
 * readSingleOpportunityInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityInvolvedParties>>}
 */
export function readSingleOpportunityInvolvedPartiesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityInvolvedPartiesCollection", id, params), OpportunityInvolvedParties)
}


/**
 * createOpportunityInvolvedPartiesCollection
 * 
 * @param {OpportunityInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityInvolvedParties>>}
 */
export function createOpportunityInvolvedPartiesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityInvolvedPartiesCollection", undefined, undefined, "POST", entity), OpportunityInvolvedParties)
}


/**
 * updateOpportunityInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @param {OpportunityInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityInvolvedParties>>}
 */
export function updateOpportunityInvolvedPartiesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityInvolvedPartiesCollection", id, undefined, "PATCH", entity), OpportunityInvolvedParties)
}


/**
 * replaceOpportunityInvolvedPartiesCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityInvolvedParties>>}
 */
export function replaceOpportunityInvolvedPartiesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityInvolvedPartiesCollection", id, undefined, "PUT", entity), OpportunityInvolvedParties)
}


/**
 * deleteSingleOpportunityInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityInvolvedPartiesCollection(id) {
  return odata.request("OpportunityInvolvedPartiesCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityInvolvedPartiesRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityInvolvedPartiesRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityInvolvedPartiesRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityInvolvedPartiesRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityInvolvedPartiesRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityInvolvedPartiesRoleCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityItemTextCollectionLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityItemTextCollectionLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityItemTextCollectionLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityItemTextCollectionLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityItemTextCollectionLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityItemTextCollectionLanguageCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityItemTextCollectionTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityItemTextCollectionTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityItemTextCollectionTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityItemTextCollectionTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityItemTextCollectionTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityItemTextCollectionTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityNotes>>}
 */
export function readOpportunityNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityNotesCollection", undefined, params), OpportunityNotes)
}


/**
 * readSingleOpportunityNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityNotes>>}
 */
export function readSingleOpportunityNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityNotesCollection", id, params), OpportunityNotes)
}


/**
 * createOpportunityNotesCollection
 * 
 * @param {OpportunityNotes} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityNotes>>}
 */
export function createOpportunityNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityNotesCollection", undefined, undefined, "POST", entity), OpportunityNotes)
}


/**
 * updateOpportunityNotesCollection
 * 
 * @param {string} id 
 * @param {OpportunityNotes} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityNotes>>}
 */
export function updateOpportunityNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityNotesCollection", id, undefined, "PATCH", entity), OpportunityNotes)
}


/**
 * replaceOpportunityNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityNotes} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityNotes>>}
 */
export function replaceOpportunityNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityNotesCollection", id, undefined, "PUT", entity), OpportunityNotes)
}


/**
 * deleteSingleOpportunityNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityNotesCollection(id) {
  return odata.request("OpportunityNotesCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityOriginTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityOriginTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityOriginTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityOriginTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityOriginTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityOriginTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityPhoneCallSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityPhoneCallSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityPhoneCallSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityPhoneCallSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityPhoneCallSalesActivityCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityPhoneCallSalesActivity>>}
 */
export function readOpportunityPhoneCallSalesActivityCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityCollection", undefined, params), OpportunityPhoneCallSalesActivity)
}


/**
 * readSingleOpportunityPhoneCallSalesActivityCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityPhoneCallSalesActivity>>}
 */
export function readSingleOpportunityPhoneCallSalesActivityCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityCollection", id, params), OpportunityPhoneCallSalesActivity)
}


/**
 * createOpportunityPhoneCallSalesActivityCollection
 * 
 * @param {OpportunityPhoneCallSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityPhoneCallSalesActivity>>}
 */
export function createOpportunityPhoneCallSalesActivityCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityCollection", undefined, undefined, "POST", entity), OpportunityPhoneCallSalesActivity)
}


/**
 * updateOpportunityPhoneCallSalesActivityCollection
 * 
 * @param {string} id 
 * @param {OpportunityPhoneCallSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityPhoneCallSalesActivity>>}
 */
export function updateOpportunityPhoneCallSalesActivityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityCollection", id, undefined, "PATCH", entity), OpportunityPhoneCallSalesActivity)
}


/**
 * replaceOpportunityPhoneCallSalesActivityCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityPhoneCallSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityPhoneCallSalesActivity>>}
 */
export function replaceOpportunityPhoneCallSalesActivityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityCollection", id, undefined, "PUT", entity), OpportunityPhoneCallSalesActivity)
}


/**
 * deleteSingleOpportunityPhoneCallSalesActivityCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityPhoneCallSalesActivityCollection(id) {
  return odata.request("OpportunityPhoneCallSalesActivityCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityPhoneCallSalesActivityLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityPhoneCallSalesActivityLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityPhoneCallSalesActivityLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityPhoneCallSalesActivityLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityPhoneCallSalesActivitySalesCyclePhaseCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityPhoneCallSalesActivitySalesCyclePhaseCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivitySalesCyclePhaseCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityPhoneCallSalesActivitySalesCyclePhaseCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityPhoneCallSalesActivitySalesCyclePhaseCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivitySalesCyclePhaseCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityPhoneCallSalesActivityTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityPhoneCallSalesActivityTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityPhoneCallSalesActivityTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityPhoneCallSalesActivityTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPhoneCallSalesActivityTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityPriorityCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityProductCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityProduct>>}
 */
export function readOpportunityProductCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityProductCollection", undefined, params), OpportunityProduct)
}


/**
 * readSingleOpportunityProductCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityProduct>>}
 */
export function readSingleOpportunityProductCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProductCollection", id, params), OpportunityProduct)
}


/**
 * createOpportunityProductCollection
 * 
 * @param {OpportunityProduct} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityProduct>>}
 */
export function createOpportunityProductCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProductCollection", undefined, undefined, "POST", entity), OpportunityProduct)
}


/**
 * updateOpportunityProductCollection
 * 
 * @param {string} id 
 * @param {OpportunityProduct} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityProduct>>}
 */
export function updateOpportunityProductCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProductCollection", id, undefined, "PATCH", entity), OpportunityProduct)
}


/**
 * replaceOpportunityProductCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityProduct} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityProduct>>}
 */
export function replaceOpportunityProductCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProductCollection", id, undefined, "PUT", entity), OpportunityProduct)
}


/**
 * deleteSingleOpportunityProductCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityProductCollection(id) {
  return odata.request("OpportunityProductCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityProductNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityProductNotes>>}
 */
export function readOpportunityProductNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityProductNotesCollection", undefined, params), OpportunityProductNotes)
}


/**
 * readSingleOpportunityProductNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityProductNotes>>}
 */
export function readSingleOpportunityProductNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProductNotesCollection", id, params), OpportunityProductNotes)
}


/**
 * createOpportunityProductNotesCollection
 * 
 * @param {OpportunityProductNotes} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityProductNotes>>}
 */
export function createOpportunityProductNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProductNotesCollection", undefined, undefined, "POST", entity), OpportunityProductNotes)
}


/**
 * updateOpportunityProductNotesCollection
 * 
 * @param {string} id 
 * @param {OpportunityProductNotes} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityProductNotes>>}
 */
export function updateOpportunityProductNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProductNotesCollection", id, undefined, "PATCH", entity), OpportunityProductNotes)
}


/**
 * replaceOpportunityProductNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityProductNotes} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityProductNotes>>}
 */
export function replaceOpportunityProductNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProductNotesCollection", id, undefined, "PUT", entity), OpportunityProductNotes)
}


/**
 * deleteSingleOpportunityProductNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityProductNotesCollection(id) {
  return odata.request("OpportunityProductNotesCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityProgressCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityProgressCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityProgressCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityProgressCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityProgressCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityProgressCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityResultReasonCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityResultReasonCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityResultReasonCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityResultReasonCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityResultReasonCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityResultReasonCodeCollection", id, params), CodeList)
}


/**
 * readOpportunitySalesCycleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunitySalesCycleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunitySalesCycleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunitySalesCycleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunitySalesCycleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunitySalesCycleCodeCollection", id, params), CodeList)
}


/**
 * readOpportunitySalesForecastCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunitySalesForecastCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunitySalesForecastCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunitySalesForecastCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunitySalesForecastCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunitySalesForecastCategoryCodeCollection", id, params), CodeList)
}


/**
 * readOpportunitySalesPhaseCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunitySalesPhaseCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunitySalesPhaseCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunitySalesPhaseCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunitySalesPhaseCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunitySalesPhaseCodeCollection", id, params), CodeList)
}


/**
 * readOpportunitySalesTeamCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunitySalesTeam>>}
 */
export function readOpportunitySalesTeamCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunitySalesTeamCollection", undefined, params), OpportunitySalesTeam)
}


/**
 * readSingleOpportunitySalesTeamCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunitySalesTeam>>}
 */
export function readSingleOpportunitySalesTeamCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunitySalesTeamCollection", id, params), OpportunitySalesTeam)
}


/**
 * createOpportunitySalesTeamCollection
 * 
 * @param {OpportunitySalesTeam} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunitySalesTeam>>}
 */
export function createOpportunitySalesTeamCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunitySalesTeamCollection", undefined, undefined, "POST", entity), OpportunitySalesTeam)
}


/**
 * updateOpportunitySalesTeamCollection
 * 
 * @param {string} id 
 * @param {OpportunitySalesTeam} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunitySalesTeam>>}
 */
export function updateOpportunitySalesTeamCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunitySalesTeamCollection", id, undefined, "PATCH", entity), OpportunitySalesTeam)
}


/**
 * replaceOpportunitySalesTeamCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunitySalesTeam} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunitySalesTeam>>}
 */
export function replaceOpportunitySalesTeamCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunitySalesTeamCollection", id, undefined, "PUT", entity), OpportunitySalesTeam)
}


/**
 * deleteSingleOpportunitySalesTeamCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunitySalesTeamCollection(id) {
  return odata.request("OpportunitySalesTeamCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunitySalesTeamRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunitySalesTeamRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunitySalesTeamRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunitySalesTeamRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunitySalesTeamRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunitySalesTeamRoleCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityStatusCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityTaskSalesActivityCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<OpportunityTaskSalesActivity>>}
 */
export function readOpportunityTaskSalesActivityCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityCollection", undefined, params), OpportunityTaskSalesActivity)
}


/**
 * readSingleOpportunityTaskSalesActivityCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<OpportunityTaskSalesActivity>>}
 */
export function readSingleOpportunityTaskSalesActivityCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityCollection", id, params), OpportunityTaskSalesActivity)
}


/**
 * createOpportunityTaskSalesActivityCollection
 * 
 * @param {OpportunityTaskSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityTaskSalesActivity>>}
 */
export function createOpportunityTaskSalesActivityCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityCollection", undefined, undefined, "POST", entity), OpportunityTaskSalesActivity)
}


/**
 * updateOpportunityTaskSalesActivityCollection
 * 
 * @param {string} id 
 * @param {OpportunityTaskSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityTaskSalesActivity>>}
 */
export function updateOpportunityTaskSalesActivityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityCollection", id, undefined, "PATCH", entity), OpportunityTaskSalesActivity)
}


/**
 * replaceOpportunityTaskSalesActivityCollection
 * replace a entity
 * @param {string} id 
 * @param {OpportunityTaskSalesActivity} entity 
 * @returns {Promise<C4CODataSingleResult<OpportunityTaskSalesActivity>>}
 */
export function replaceOpportunityTaskSalesActivityCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityCollection", id, undefined, "PUT", entity), OpportunityTaskSalesActivity)
}


/**
 * deleteSingleOpportunityTaskSalesActivityCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleOpportunityTaskSalesActivityCollection(id) {
  return odata.request("OpportunityTaskSalesActivityCollection", id, undefined ,"DELETE")
}


/**
 * readOpportunityTaskSalesActivityLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityTaskSalesActivityLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityTaskSalesActivityLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityTaskSalesActivityLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityTaskSalesActivityPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityTaskSalesActivityPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityTaskSalesActivityPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityTaskSalesActivityPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityPriorityCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityTaskSalesActivitySalesPhaseCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityTaskSalesActivitySalesPhaseCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityTaskSalesActivitySalesPhaseCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityTaskSalesActivitySalesPhaseCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityTaskSalesActivitySalesPhaseCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivitySalesPhaseCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityTaskSalesActivityStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityTaskSalesActivityStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityTaskSalesActivityStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityTaskSalesActivityStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityStatusCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityTaskSalesActivityTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityTaskSalesActivityTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityTaskSalesActivityTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityTaskSalesActivityTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTaskSalesActivityTypeCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityTextCollectionLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityTextCollectionLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityTextCollectionLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityTextCollectionLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityTextCollectionLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTextCollectionLanguageCodeCollection", id, params), CodeList)
}


/**
 * readOpportunityTextCollectionTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readOpportunityTextCollectionTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("OpportunityTextCollectionTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleOpportunityTextCollectionTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleOpportunityTextCollectionTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("OpportunityTextCollectionTypeCodeCollection", id, params), CodeList)
}


/**
 * readPhoneCallAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<PhoneCallAttachment>>}
 */
export function readPhoneCallAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallAttachmentCollection", undefined, params), PhoneCallAttachment)
}


/**
 * readSinglePhoneCallAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<PhoneCallAttachment>>}
 */
export function readSinglePhoneCallAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallAttachmentCollection", id, params), PhoneCallAttachment)
}


/**
 * createPhoneCallAttachmentCollection
 * 
 * @param {PhoneCallAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallAttachment>>}
 */
export function createPhoneCallAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallAttachmentCollection", undefined, undefined, "POST", entity), PhoneCallAttachment)
}


/**
 * updatePhoneCallAttachmentCollection
 * 
 * @param {string} id 
 * @param {PhoneCallAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallAttachment>>}
 */
export function updatePhoneCallAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallAttachmentCollection", id, undefined, "PATCH", entity), PhoneCallAttachment)
}


/**
 * replacePhoneCallAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {PhoneCallAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallAttachment>>}
 */
export function replacePhoneCallAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallAttachmentCollection", id, undefined, "PUT", entity), PhoneCallAttachment)
}


/**
 * deleteSinglePhoneCallAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSinglePhoneCallAttachmentCollection(id) {
  return odata.request("PhoneCallAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readPhoneCallCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readPhoneCallCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallCategoryCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSinglePhoneCallCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSinglePhoneCallCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallCategoryCodeCollection", id, params), ContextualCodeList)
}


/**
 * readPhoneCallCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<PhoneCall>>}
 */
export function readPhoneCallCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallCollection", undefined, params), PhoneCall)
}


/**
 * readSinglePhoneCallCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<PhoneCall>>}
 */
export function readSinglePhoneCallCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallCollection", id, params), PhoneCall)
}


/**
 * createPhoneCallCollection
 * 
 * @param {PhoneCall} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCall>>}
 */
export function createPhoneCallCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallCollection", undefined, undefined, "POST", entity), PhoneCall)
}


/**
 * updatePhoneCallCollection
 * 
 * @param {string} id 
 * @param {PhoneCall} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCall>>}
 */
export function updatePhoneCallCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallCollection", id, undefined, "PATCH", entity), PhoneCall)
}


/**
 * replacePhoneCallCollection
 * replace a entity
 * @param {string} id 
 * @param {PhoneCall} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCall>>}
 */
export function replacePhoneCallCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallCollection", id, undefined, "PUT", entity), PhoneCall)
}


/**
 * deleteSinglePhoneCallCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSinglePhoneCallCollection(id) {
  return odata.request("PhoneCallCollection", id, undefined ,"DELETE")
}


/**
 * readPhoneCallDirectionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readPhoneCallDirectionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallDirectionCodeCollection", undefined, params), CodeList)
}


/**
 * readSinglePhoneCallDirectionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSinglePhoneCallDirectionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallDirectionCodeCollection", id, params), CodeList)
}


/**
 * readPhoneCallNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<PhoneCallNotes>>}
 */
export function readPhoneCallNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallNotesCollection", undefined, params), PhoneCallNotes)
}


/**
 * readSinglePhoneCallNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<PhoneCallNotes>>}
 */
export function readSinglePhoneCallNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallNotesCollection", id, params), PhoneCallNotes)
}


/**
 * createPhoneCallNotesCollection
 * 
 * @param {PhoneCallNotes} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallNotes>>}
 */
export function createPhoneCallNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallNotesCollection", undefined, undefined, "POST", entity), PhoneCallNotes)
}


/**
 * updatePhoneCallNotesCollection
 * 
 * @param {string} id 
 * @param {PhoneCallNotes} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallNotes>>}
 */
export function updatePhoneCallNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallNotesCollection", id, undefined, "PATCH", entity), PhoneCallNotes)
}


/**
 * replacePhoneCallNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {PhoneCallNotes} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallNotes>>}
 */
export function replacePhoneCallNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallNotesCollection", id, undefined, "PUT", entity), PhoneCallNotes)
}


/**
 * deleteSinglePhoneCallNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSinglePhoneCallNotesCollection(id) {
  return odata.request("PhoneCallNotesCollection", id, undefined ,"DELETE")
}


/**
 * readPhoneCallParticipantsCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<PhoneCallParticipants>>}
 */
export function readPhoneCallParticipantsCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallParticipantsCollection", undefined, params), PhoneCallParticipants)
}


/**
 * readSinglePhoneCallParticipantsCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<PhoneCallParticipants>>}
 */
export function readSinglePhoneCallParticipantsCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallParticipantsCollection", id, params), PhoneCallParticipants)
}


/**
 * createPhoneCallParticipantsCollection
 * 
 * @param {PhoneCallParticipants} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallParticipants>>}
 */
export function createPhoneCallParticipantsCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallParticipantsCollection", undefined, undefined, "POST", entity), PhoneCallParticipants)
}


/**
 * updatePhoneCallParticipantsCollection
 * 
 * @param {string} id 
 * @param {PhoneCallParticipants} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallParticipants>>}
 */
export function updatePhoneCallParticipantsCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallParticipantsCollection", id, undefined, "PATCH", entity), PhoneCallParticipants)
}


/**
 * replacePhoneCallParticipantsCollection
 * replace a entity
 * @param {string} id 
 * @param {PhoneCallParticipants} entity 
 * @returns {Promise<C4CODataSingleResult<PhoneCallParticipants>>}
 */
export function replacePhoneCallParticipantsCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallParticipantsCollection", id, undefined, "PUT", entity), PhoneCallParticipants)
}


/**
 * deleteSinglePhoneCallParticipantsCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSinglePhoneCallParticipantsCollection(id) {
  return odata.request("PhoneCallParticipantsCollection", id, undefined ,"DELETE")
}


/**
 * readPhoneCallParticipantsPhoneCallTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readPhoneCallParticipantsPhoneCallTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallParticipantsPhoneCallTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSinglePhoneCallParticipantsPhoneCallTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSinglePhoneCallParticipantsPhoneCallTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallParticipantsPhoneCallTypeCodeCollection", id, params), CodeList)
}


/**
 * readPhoneCallParticipantsRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readPhoneCallParticipantsRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallParticipantsRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSinglePhoneCallParticipantsRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSinglePhoneCallParticipantsRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallParticipantsRoleCodeCollection", id, params), CodeList)
}


/**
 * readPhoneCallPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readPhoneCallPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSinglePhoneCallPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSinglePhoneCallPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallPriorityCodeCollection", id, params), CodeList)
}


/**
 * readPhoneCallStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readPhoneCallStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSinglePhoneCallStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSinglePhoneCallStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallStatusCodeCollection", id, params), CodeList)
}


/**
 * readPhoneCallTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readPhoneCallTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("PhoneCallTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSinglePhoneCallTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSinglePhoneCallTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("PhoneCallTypeCodeCollection", id, params), CodeList)
}


/**
 * readProductAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ProductAttachment>>}
 */
export function readProductAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductAttachmentCollection", undefined, params), ProductAttachment)
}


/**
 * readSingleProductAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ProductAttachment>>}
 */
export function readSingleProductAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductAttachmentCollection", id, params), ProductAttachment)
}


/**
 * createProductAttachmentCollection
 * 
 * @param {ProductAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<ProductAttachment>>}
 */
export function createProductAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductAttachmentCollection", undefined, undefined, "POST", entity), ProductAttachment)
}


/**
 * updateProductAttachmentCollection
 * 
 * @param {string} id 
 * @param {ProductAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<ProductAttachment>>}
 */
export function updateProductAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductAttachmentCollection", id, undefined, "PATCH", entity), ProductAttachment)
}


/**
 * replaceProductAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {ProductAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<ProductAttachment>>}
 */
export function replaceProductAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductAttachmentCollection", id, undefined, "PUT", entity), ProductAttachment)
}


/**
 * deleteSingleProductAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleProductAttachmentCollection(id) {
  return odata.request("ProductAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readProductCategoryAssignmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ProductCategoryAssignment>>}
 */
export function readProductCategoryAssignmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductCategoryAssignmentCollection", undefined, params), ProductCategoryAssignment)
}


/**
 * readSingleProductCategoryAssignmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryAssignment>>}
 */
export function readSingleProductCategoryAssignmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryAssignmentCollection", id, params), ProductCategoryAssignment)
}


/**
 * createProductCategoryAssignmentCollection
 * 
 * @param {ProductCategoryAssignment} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryAssignment>>}
 */
export function createProductCategoryAssignmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryAssignmentCollection", undefined, undefined, "POST", entity), ProductCategoryAssignment)
}


/**
 * updateProductCategoryAssignmentCollection
 * 
 * @param {string} id 
 * @param {ProductCategoryAssignment} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryAssignment>>}
 */
export function updateProductCategoryAssignmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryAssignmentCollection", id, undefined, "PATCH", entity), ProductCategoryAssignment)
}


/**
 * replaceProductCategoryAssignmentCollection
 * replace a entity
 * @param {string} id 
 * @param {ProductCategoryAssignment} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryAssignment>>}
 */
export function replaceProductCategoryAssignmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryAssignmentCollection", id, undefined, "PUT", entity), ProductCategoryAssignment)
}


/**
 * deleteSingleProductCategoryAssignmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleProductCategoryAssignmentCollection(id) {
  return odata.request("ProductCategoryAssignmentCollection", id, undefined ,"DELETE")
}


/**
 * readProductCategoryHierarchyCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ProductCategoryHierarchy>>}
 */
export function readProductCategoryHierarchyCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductCategoryHierarchyCollection", undefined, params), ProductCategoryHierarchy)
}


/**
 * readSingleProductCategoryHierarchyCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryHierarchy>>}
 */
export function readSingleProductCategoryHierarchyCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyCollection", id, params), ProductCategoryHierarchy)
}


/**
 * createProductCategoryHierarchyCollection
 * 
 * @param {ProductCategoryHierarchy} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryHierarchy>>}
 */
export function createProductCategoryHierarchyCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyCollection", undefined, undefined, "POST", entity), ProductCategoryHierarchy)
}


/**
 * updateProductCategoryHierarchyCollection
 * 
 * @param {string} id 
 * @param {ProductCategoryHierarchy} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryHierarchy>>}
 */
export function updateProductCategoryHierarchyCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyCollection", id, undefined, "PATCH", entity), ProductCategoryHierarchy)
}


/**
 * replaceProductCategoryHierarchyCollection
 * replace a entity
 * @param {string} id 
 * @param {ProductCategoryHierarchy} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryHierarchy>>}
 */
export function replaceProductCategoryHierarchyCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyCollection", id, undefined, "PUT", entity), ProductCategoryHierarchy)
}


/**
 * deleteSingleProductCategoryHierarchyCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleProductCategoryHierarchyCollection(id) {
  return odata.request("ProductCategoryHierarchyCollection", id, undefined ,"DELETE")
}


/**
 * readProductCategoryHierarchyDescriptionCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ProductCategoryHierarchyDescription>>}
 */
export function readProductCategoryHierarchyDescriptionCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductCategoryHierarchyDescriptionCollection", undefined, params), ProductCategoryHierarchyDescription)
}


/**
 * readSingleProductCategoryHierarchyDescriptionCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryHierarchyDescription>>}
 */
export function readSingleProductCategoryHierarchyDescriptionCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyDescriptionCollection", id, params), ProductCategoryHierarchyDescription)
}


/**
 * createProductCategoryHierarchyDescriptionCollection
 * 
 * @param {ProductCategoryHierarchyDescription} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryHierarchyDescription>>}
 */
export function createProductCategoryHierarchyDescriptionCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyDescriptionCollection", undefined, undefined, "POST", entity), ProductCategoryHierarchyDescription)
}


/**
 * updateProductCategoryHierarchyDescriptionCollection
 * 
 * @param {string} id 
 * @param {ProductCategoryHierarchyDescription} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryHierarchyDescription>>}
 */
export function updateProductCategoryHierarchyDescriptionCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyDescriptionCollection", id, undefined, "PATCH", entity), ProductCategoryHierarchyDescription)
}


/**
 * replaceProductCategoryHierarchyDescriptionCollection
 * replace a entity
 * @param {string} id 
 * @param {ProductCategoryHierarchyDescription} entity 
 * @returns {Promise<C4CODataSingleResult<ProductCategoryHierarchyDescription>>}
 */
export function replaceProductCategoryHierarchyDescriptionCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyDescriptionCollection", id, undefined, "PUT", entity), ProductCategoryHierarchyDescription)
}


/**
 * deleteSingleProductCategoryHierarchyDescriptionCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleProductCategoryHierarchyDescriptionCollection(id) {
  return odata.request("ProductCategoryHierarchyDescriptionCollection", id, undefined ,"DELETE")
}


/**
 * readProductCategoryHierarchyDescriptionlanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readProductCategoryHierarchyDescriptionlanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductCategoryHierarchyDescriptionlanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleProductCategoryHierarchyDescriptionlanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleProductCategoryHierarchyDescriptionlanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCategoryHierarchyDescriptionlanguageCodeCollection", id, params), CodeList)
}


/**
 * readProductChangedByCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ProductChangedBy>>}
 */
export function readProductChangedByCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductChangedByCollection", undefined, params), ProductChangedBy)
}


/**
 * readSingleProductChangedByCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ProductChangedBy>>}
 */
export function readSingleProductChangedByCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductChangedByCollection", id, params), ProductChangedBy)
}


/**
 * createProductChangedByCollection
 * 
 * @param {ProductChangedBy} entity 
 * @returns {Promise<C4CODataSingleResult<ProductChangedBy>>}
 */
export function createProductChangedByCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductChangedByCollection", undefined, undefined, "POST", entity), ProductChangedBy)
}


/**
 * updateProductChangedByCollection
 * 
 * @param {string} id 
 * @param {ProductChangedBy} entity 
 * @returns {Promise<C4CODataSingleResult<ProductChangedBy>>}
 */
export function updateProductChangedByCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductChangedByCollection", id, undefined, "PATCH", entity), ProductChangedBy)
}


/**
 * replaceProductChangedByCollection
 * replace a entity
 * @param {string} id 
 * @param {ProductChangedBy} entity 
 * @returns {Promise<C4CODataSingleResult<ProductChangedBy>>}
 */
export function replaceProductChangedByCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductChangedByCollection", id, undefined, "PUT", entity), ProductChangedBy)
}


/**
 * deleteSingleProductChangedByCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleProductChangedByCollection(id) {
  return odata.request("ProductChangedByCollection", id, undefined ,"DELETE")
}


/**
 * readProductCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Product>>}
 */
export function readProductCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductCollection", undefined, params), Product)
}


/**
 * readSingleProductCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Product>>}
 */
export function readSingleProductCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCollection", id, params), Product)
}


/**
 * createProductCollection
 * 
 * @param {Product} entity 
 * @returns {Promise<C4CODataSingleResult<Product>>}
 */
export function createProductCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCollection", undefined, undefined, "POST", entity), Product)
}


/**
 * updateProductCollection
 * 
 * @param {string} id 
 * @param {Product} entity 
 * @returns {Promise<C4CODataSingleResult<Product>>}
 */
export function updateProductCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCollection", id, undefined, "PATCH", entity), Product)
}


/**
 * replaceProductCollection
 * replace a entity
 * @param {string} id 
 * @param {Product} entity 
 * @returns {Promise<C4CODataSingleResult<Product>>}
 */
export function replaceProductCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductCollection", id, undefined, "PUT", entity), Product)
}


/**
 * deleteSingleProductCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleProductCollection(id) {
  return odata.request("ProductCollection", id, undefined ,"DELETE")
}


/**
 * readProductProdcutLifecyclecontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readProductProdcutLifecyclecontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductProdcutLifecyclecontentCollection", undefined, params), CodeList)
}


/**
 * readSingleProductProdcutLifecyclecontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleProductProdcutLifecyclecontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductProdcutLifecyclecontentCollection", id, params), CodeList)
}


/**
 * readProductSalesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ProductSales>>}
 */
export function readProductSalesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductSalesCollection", undefined, params), ProductSales)
}


/**
 * readSingleProductSalesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ProductSales>>}
 */
export function readSingleProductSalesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesCollection", id, params), ProductSales)
}


/**
 * createProductSalesCollection
 * 
 * @param {ProductSales} entity 
 * @returns {Promise<C4CODataSingleResult<ProductSales>>}
 */
export function createProductSalesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesCollection", undefined, undefined, "POST", entity), ProductSales)
}


/**
 * updateProductSalesCollection
 * 
 * @param {string} id 
 * @param {ProductSales} entity 
 * @returns {Promise<C4CODataSingleResult<ProductSales>>}
 */
export function updateProductSalesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesCollection", id, undefined, "PATCH", entity), ProductSales)
}


/**
 * replaceProductSalesCollection
 * replace a entity
 * @param {string} id 
 * @param {ProductSales} entity 
 * @returns {Promise<C4CODataSingleResult<ProductSales>>}
 */
export function replaceProductSalesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesCollection", id, undefined, "PUT", entity), ProductSales)
}


/**
 * deleteSingleProductSalesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleProductSalesCollection(id) {
  return odata.request("ProductSalesCollection", id, undefined ,"DELETE")
}


/**
 * readProductSalesDistributionChannelCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readProductSalesDistributionChannelCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductSalesDistributionChannelCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleProductSalesDistributionChannelCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleProductSalesDistributionChannelCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesDistributionChannelCodeCollection", id, params), CodeList)
}


/**
 * readProductSalesLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readProductSalesLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductSalesLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleProductSalesLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleProductSalesLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readProductSalesOrganisationCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ProductSalesOrganisation>>}
 */
export function readProductSalesOrganisationCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductSalesOrganisationCollection", undefined, params), ProductSalesOrganisation)
}


/**
 * readSingleProductSalesOrganisationCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ProductSalesOrganisation>>}
 */
export function readSingleProductSalesOrganisationCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesOrganisationCollection", id, params), ProductSalesOrganisation)
}


/**
 * createProductSalesOrganisationCollection
 * 
 * @param {ProductSalesOrganisation} entity 
 * @returns {Promise<C4CODataSingleResult<ProductSalesOrganisation>>}
 */
export function createProductSalesOrganisationCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesOrganisationCollection", undefined, undefined, "POST", entity), ProductSalesOrganisation)
}


/**
 * updateProductSalesOrganisationCollection
 * 
 * @param {string} id 
 * @param {ProductSalesOrganisation} entity 
 * @returns {Promise<C4CODataSingleResult<ProductSalesOrganisation>>}
 */
export function updateProductSalesOrganisationCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesOrganisationCollection", id, undefined, "PATCH", entity), ProductSalesOrganisation)
}


/**
 * replaceProductSalesOrganisationCollection
 * replace a entity
 * @param {string} id 
 * @param {ProductSalesOrganisation} entity 
 * @returns {Promise<C4CODataSingleResult<ProductSalesOrganisation>>}
 */
export function replaceProductSalesOrganisationCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesOrganisationCollection", id, undefined, "PUT", entity), ProductSalesOrganisation)
}


/**
 * deleteSingleProductSalesOrganisationCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleProductSalesOrganisationCollection(id) {
  return odata.request("ProductSalesOrganisationCollection", id, undefined ,"DELETE")
}


/**
 * readProductSalesSalesMeasureUnitCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readProductSalesSalesMeasureUnitCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductSalesSalesMeasureUnitCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleProductSalesSalesMeasureUnitCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleProductSalesSalesMeasureUnitCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductSalesSalesMeasureUnitCodeCollection", id, params), CodeList)
}


/**
 * readProductStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readProductStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleProductStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleProductStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductStatusCodeCollection", id, params), CodeList)
}


/**
 * readProductUnitOfMeasureCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readProductUnitOfMeasureCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductUnitOfMeasureCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleProductUnitOfMeasureCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleProductUnitOfMeasureCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductUnitOfMeasureCodeCollection", id, params), CodeList)
}


/**
 * readProductlanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readProductlanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ProductlanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleProductlanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleProductlanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ProductlanguageCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentBusinessTransactionDocReferenceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceAssignmentBusinessTransactionDocReference>>}
 */
export function readServiceAssignmentBusinessTransactionDocReferenceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentBusinessTransactionDocReferenceCollection", undefined, params), ServiceAssignmentBusinessTransactionDocReference)
}


/**
 * readSingleServiceAssignmentBusinessTransactionDocReferenceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignmentBusinessTransactionDocReference>>}
 */
export function readSingleServiceAssignmentBusinessTransactionDocReferenceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentBusinessTransactionDocReferenceCollection", id, params), ServiceAssignmentBusinessTransactionDocReference)
}


/**
 * createServiceAssignmentBusinessTransactionDocReferenceCollection
 * 
 * @param {ServiceAssignmentBusinessTransactionDocReference} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignmentBusinessTransactionDocReference>>}
 */
export function createServiceAssignmentBusinessTransactionDocReferenceCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentBusinessTransactionDocReferenceCollection", undefined, undefined, "POST", entity), ServiceAssignmentBusinessTransactionDocReference)
}


/**
 * updateServiceAssignmentBusinessTransactionDocReferenceCollection
 * 
 * @param {string} id 
 * @param {ServiceAssignmentBusinessTransactionDocReference} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignmentBusinessTransactionDocReference>>}
 */
export function updateServiceAssignmentBusinessTransactionDocReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentBusinessTransactionDocReferenceCollection", id, undefined, "PATCH", entity), ServiceAssignmentBusinessTransactionDocReference)
}


/**
 * replaceServiceAssignmentBusinessTransactionDocReferenceCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceAssignmentBusinessTransactionDocReference} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignmentBusinessTransactionDocReference>>}
 */
export function replaceServiceAssignmentBusinessTransactionDocReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentBusinessTransactionDocReferenceCollection", id, undefined, "PUT", entity), ServiceAssignmentBusinessTransactionDocReference)
}


/**
 * deleteSingleServiceAssignmentBusinessTransactionDocReferenceCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceAssignmentBusinessTransactionDocReferenceCollection(id) {
  return odata.request("ServiceAssignmentBusinessTransactionDocReferenceCollection", id, undefined ,"DELETE")
}


/**
 * readServiceAssignmentBusinessTransactionDocReferenceReferenceDocumentItemTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentBusinessTransactionDocReferenceReferenceDocumentItemTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentBusinessTransactionDocReferenceReferenceDocumentItemTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentBusinessTransactionDocReferenceReferenceDocumentItemTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentBusinessTransactionDocReferenceReferenceDocumentItemTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentBusinessTransactionDocReferenceReferenceDocumentItemTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceAssignment>>}
 */
export function readServiceAssignmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentCollection", undefined, params), ServiceAssignment)
}


/**
 * readSingleServiceAssignmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignment>>}
 */
export function readSingleServiceAssignmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentCollection", id, params), ServiceAssignment)
}


/**
 * updateServiceAssignmentCollection
 * 
 * @param {string} id 
 * @param {ServiceAssignment} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignment>>}
 */
export function updateServiceAssignmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentCollection", id, undefined, "PATCH", entity), ServiceAssignment)
}


/**
 * replaceServiceAssignmentCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceAssignment} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignment>>}
 */
export function replaceServiceAssignmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentCollection", id, undefined, "PUT", entity), ServiceAssignment)
}


/**
 * deleteSingleServiceAssignmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceAssignmentCollection(id) {
  return odata.request("ServiceAssignmentCollection", id, undefined ,"DELETE")
}


/**
 * readServiceAssignmentCustomerTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentCustomerTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentCustomerTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentCustomerTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentCustomerTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentCustomerTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentDivisionCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentDivisionCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentDivisionCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentDivisionCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentDivisionCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentDivisionCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentEndDateTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentEndDateTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentEndDateTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentEndDateTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentEndDateTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentEndDateTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentFixedCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentFixedCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentFixedCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentFixedCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentFixedCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentFixedCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceAssignmentNotes>>}
 */
export function readServiceAssignmentNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentNotesCollection", undefined, params), ServiceAssignmentNotes)
}


/**
 * readSingleServiceAssignmentNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignmentNotes>>}
 */
export function readSingleServiceAssignmentNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentNotesCollection", id, params), ServiceAssignmentNotes)
}


/**
 * createServiceAssignmentNotesCollection
 * 
 * @param {ServiceAssignmentNotes} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignmentNotes>>}
 */
export function createServiceAssignmentNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentNotesCollection", undefined, undefined, "POST", entity), ServiceAssignmentNotes)
}


/**
 * updateServiceAssignmentNotesCollection
 * 
 * @param {string} id 
 * @param {ServiceAssignmentNotes} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignmentNotes>>}
 */
export function updateServiceAssignmentNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentNotesCollection", id, undefined, "PATCH", entity), ServiceAssignmentNotes)
}


/**
 * replaceServiceAssignmentNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceAssignmentNotes} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceAssignmentNotes>>}
 */
export function replaceServiceAssignmentNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentNotesCollection", id, undefined, "PUT", entity), ServiceAssignmentNotes)
}


/**
 * deleteSingleServiceAssignmentNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceAssignmentNotesCollection(id) {
  return odata.request("ServiceAssignmentNotesCollection", id, undefined ,"DELETE")
}


/**
 * readServiceAssignmentNotesTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentNotesTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentNotesTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentNotesTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentNotesTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentNotesTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentOrganizerTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentOrganizerTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentOrganizerTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentOrganizerTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentOrganizerTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentOrganizerTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentPrimaryContactTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentPrimaryContactTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentPrimaryContactTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentPrimaryContactTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentPrimaryContactTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentPrimaryContactTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentPriorityCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentPriorityCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentPriorityCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentPriorityCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentPriorityCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentPriorityCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentProcessingTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentProcessingTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentProcessingTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentProcessingTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentProcessingTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentProcessingTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentReleasedCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentReleasedCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentReleasedCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentReleasedCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentReleasedCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentReleasedCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentServiceTechnicianTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentServiceTechnicianTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentServiceTechnicianTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentServiceTechnicianTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentServiceTechnicianTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentServiceTechnicianTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentStartDateTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentStartDateTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentStartDateTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentStartDateTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentStartDateTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentStartDateTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentStatusCollection", id, params), CodeList)
}


/**
 * readServiceAssignmentTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceAssignmentTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceAssignmentTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceAssignmentTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceAssignmentTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceAssignmentTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceIssueCategoryCatalogueCategoryCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceIssueCategoryCatalogueCategory>>}
 */
export function readServiceIssueCategoryCatalogueCategoryCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueCategoryCollection", undefined, params), ServiceIssueCategoryCatalogueCategory)
}


/**
 * readSingleServiceIssueCategoryCatalogueCategoryCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceIssueCategoryCatalogueCategory>>}
 */
export function readSingleServiceIssueCategoryCatalogueCategoryCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueCategoryCollection", id, params), ServiceIssueCategoryCatalogueCategory)
}


/**
 * deleteSingleServiceIssueCategoryCatalogueCategoryCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceIssueCategoryCatalogueCategoryCollection(id) {
  return odata.request("ServiceIssueCategoryCatalogueCategoryCollection", id, undefined ,"DELETE")
}


/**
 * readServiceIssueCategoryCatalogueCategoryTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceIssueCategoryCatalogueCategoryTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueCategoryTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceIssueCategoryCatalogueCategoryTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceIssueCategoryCatalogueCategoryTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueCategoryTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceIssueCategoryCatalogueCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceIssueCategoryCatalogue>>}
 */
export function readServiceIssueCategoryCatalogueCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueCollection", undefined, params), ServiceIssueCategoryCatalogue)
}


/**
 * readSingleServiceIssueCategoryCatalogueCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceIssueCategoryCatalogue>>}
 */
export function readSingleServiceIssueCategoryCatalogueCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueCollection", id, params), ServiceIssueCategoryCatalogue)
}


/**
 * deleteSingleServiceIssueCategoryCatalogueCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceIssueCategoryCatalogueCollection(id) {
  return odata.request("ServiceIssueCategoryCatalogueCollection", id, undefined ,"DELETE")
}


/**
 * readServiceIssueCategoryCatalogueLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceIssueCategoryCatalogueLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceIssueCategoryCatalogueLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceIssueCategoryCatalogueLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceIssueCategoryCatalogueParentCategoryCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceIssueCategoryCatalogueParentCategory>>}
 */
export function readServiceIssueCategoryCatalogueParentCategoryCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueParentCategoryCollection", undefined, params), ServiceIssueCategoryCatalogueParentCategory)
}


/**
 * readSingleServiceIssueCategoryCatalogueParentCategoryCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceIssueCategoryCatalogueParentCategory>>}
 */
export function readSingleServiceIssueCategoryCatalogueParentCategoryCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueParentCategoryCollection", id, params), ServiceIssueCategoryCatalogueParentCategory)
}


/**
 * deleteSingleServiceIssueCategoryCatalogueParentCategoryCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceIssueCategoryCatalogueParentCategoryCollection(id) {
  return odata.request("ServiceIssueCategoryCatalogueParentCategoryCollection", id, undefined ,"DELETE")
}


/**
 * readServiceIssueCategoryCatalogueParentCategoryTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceIssueCategoryCatalogueParentCategoryTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueParentCategoryTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceIssueCategoryCatalogueParentCategoryTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceIssueCategoryCatalogueParentCategoryTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceIssueCategoryCatalogueParentCategoryTypeCodeCollection", id, params), CodeList)
}


/**
 * readServicePointLocationAddressCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServicePointLocationAddress>>}
 */
export function readServicePointLocationAddressCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServicePointLocationAddressCollection", undefined, params), ServicePointLocationAddress)
}


/**
 * readSingleServicePointLocationAddressCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServicePointLocationAddress>>}
 */
export function readSingleServicePointLocationAddressCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServicePointLocationAddressCollection", id, params), ServicePointLocationAddress)
}


/**
 * createServicePointLocationAddressCollection
 * 
 * @param {ServicePointLocationAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ServicePointLocationAddress>>}
 */
export function createServicePointLocationAddressCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServicePointLocationAddressCollection", undefined, undefined, "POST", entity), ServicePointLocationAddress)
}


/**
 * updateServicePointLocationAddressCollection
 * 
 * @param {string} id 
 * @param {ServicePointLocationAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ServicePointLocationAddress>>}
 */
export function updateServicePointLocationAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServicePointLocationAddressCollection", id, undefined, "PATCH", entity), ServicePointLocationAddress)
}


/**
 * replaceServicePointLocationAddressCollection
 * replace a entity
 * @param {string} id 
 * @param {ServicePointLocationAddress} entity 
 * @returns {Promise<C4CODataSingleResult<ServicePointLocationAddress>>}
 */
export function replaceServicePointLocationAddressCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServicePointLocationAddressCollection", id, undefined, "PUT", entity), ServicePointLocationAddress)
}


/**
 * readServiceRequestAppointStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestAppointStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestAppointStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestAppointStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestAppointStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestAppointStatusCollection", id, params), CodeList)
}


/**
 * readServiceRequestApprovalStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestApprovalStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestApprovalStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestApprovalStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestApprovalStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestApprovalStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestAttachmentFolderCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestAttachmentFolderCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestAttachmentFolderCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestAttachmentFolderCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderCategoryCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestAttachmentFolderCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceRequestAttachmentFolder>>}
 */
export function readServiceRequestAttachmentFolderCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderCollection", undefined, params), ServiceRequestAttachmentFolder)
}


/**
 * readSingleServiceRequestAttachmentFolderCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestAttachmentFolder>>}
 */
export function readSingleServiceRequestAttachmentFolderCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderCollection", id, params), ServiceRequestAttachmentFolder)
}


/**
 * createServiceRequestAttachmentFolderCollection
 * 
 * @param {ServiceRequestAttachmentFolder} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestAttachmentFolder>>}
 */
export function createServiceRequestAttachmentFolderCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderCollection", undefined, undefined, "POST", entity), ServiceRequestAttachmentFolder)
}


/**
 * updateServiceRequestAttachmentFolderCollection
 * 
 * @param {string} id 
 * @param {ServiceRequestAttachmentFolder} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestAttachmentFolder>>}
 */
export function updateServiceRequestAttachmentFolderCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderCollection", id, undefined, "PATCH", entity), ServiceRequestAttachmentFolder)
}


/**
 * replaceServiceRequestAttachmentFolderCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceRequestAttachmentFolder} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestAttachmentFolder>>}
 */
export function replaceServiceRequestAttachmentFolderCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderCollection", id, undefined, "PUT", entity), ServiceRequestAttachmentFolder)
}


/**
 * deleteSingleServiceRequestAttachmentFolderCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceRequestAttachmentFolderCollection(id) {
  return odata.request("ServiceRequestAttachmentFolderCollection", id, undefined ,"DELETE")
}


/**
 * readServiceRequestAttachmentFolderTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestAttachmentFolderTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestAttachmentFolderTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestAttachmentFolderTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestAttachmentFolderTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestAuditStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestAuditStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestAuditStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestAuditStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestAuditStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestAuditStatusCollection", id, params), CodeList)
}


/**
 * readServiceRequestBusinessTransactionDocumentReferenceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceRequestBusinessTransactionDocumentReference>>}
 */
export function readServiceRequestBusinessTransactionDocumentReferenceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceCollection", undefined, params), ServiceRequestBusinessTransactionDocumentReference)
}


/**
 * readSingleServiceRequestBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestBusinessTransactionDocumentReference>>}
 */
export function readSingleServiceRequestBusinessTransactionDocumentReferenceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceCollection", id, params), ServiceRequestBusinessTransactionDocumentReference)
}


/**
 * createServiceRequestBusinessTransactionDocumentReferenceCollection
 * 
 * @param {ServiceRequestBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestBusinessTransactionDocumentReference>>}
 */
export function createServiceRequestBusinessTransactionDocumentReferenceCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceCollection", undefined, undefined, "POST", entity), ServiceRequestBusinessTransactionDocumentReference)
}


/**
 * updateServiceRequestBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @param {ServiceRequestBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestBusinessTransactionDocumentReference>>}
 */
export function updateServiceRequestBusinessTransactionDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceCollection", id, undefined, "PATCH", entity), ServiceRequestBusinessTransactionDocumentReference)
}


/**
 * replaceServiceRequestBusinessTransactionDocumentReferenceCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceRequestBusinessTransactionDocumentReference} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestBusinessTransactionDocumentReference>>}
 */
export function replaceServiceRequestBusinessTransactionDocumentReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceCollection", id, undefined, "PUT", entity), ServiceRequestBusinessTransactionDocumentReference)
}


/**
 * deleteSingleServiceRequestBusinessTransactionDocumentReferenceCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceRequestBusinessTransactionDocumentReferenceCollection(id) {
  return odata.request("ServiceRequestBusinessTransactionDocumentReferenceCollection", id, undefined ,"DELETE")
}


/**
 * readServiceRequestBusinessTransactionDocumentReferenceRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestBusinessTransactionDocumentReferenceRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestBusinessTransactionDocumentReferenceRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestBusinessTransactionDocumentReferenceRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceRoleCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestBusinessTransactionDocumentReferenceSocialMediaChannelCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestBusinessTransactionDocumentReferenceSocialMediaChannelCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceSocialMediaChannelCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestBusinessTransactionDocumentReferenceSocialMediaChannelCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestBusinessTransactionDocumentReferenceSocialMediaChannelCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceSocialMediaChannelCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestBusinessTransactionDocumentReferenceTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestBusinessTransactionDocumentReferenceTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestBusinessTransactionDocumentReferenceTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestBusinessTransactionDocumentReferenceTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestBusinessTransactionDocumentReferenceTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceRequest>>}
 */
export function readServiceRequestCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestCollection", undefined, params), ServiceRequest)
}


/**
 * readSingleServiceRequestCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceRequest>>}
 */
export function readSingleServiceRequestCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestCollection", id, params), ServiceRequest)
}


/**
 * createServiceRequestCollection
 * 
 * @param {ServiceRequest} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequest>>}
 */
export function createServiceRequestCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestCollection", undefined, undefined, "POST", entity), ServiceRequest)
}


/**
 * updateServiceRequestCollection
 * 
 * @param {string} id 
 * @param {ServiceRequest} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequest>>}
 */
export function updateServiceRequestCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestCollection", id, undefined, "PATCH", entity), ServiceRequest)
}


/**
 * replaceServiceRequestCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceRequest} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequest>>}
 */
export function replaceServiceRequestCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestCollection", id, undefined, "PUT", entity), ServiceRequest)
}


/**
 * deleteSingleServiceRequestCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceRequestCollection(id) {
  return odata.request("ServiceRequestCollection", id, undefined ,"DELETE")
}


/**
 * readServiceRequestDataOriginTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestDataOriginTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestDataOriginTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestDataOriginTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestDataOriginTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestDataOriginTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestDescriptionCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceRequestDescription>>}
 */
export function readServiceRequestDescriptionCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestDescriptionCollection", undefined, params), ServiceRequestDescription)
}


/**
 * readSingleServiceRequestDescriptionCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestDescription>>}
 */
export function readSingleServiceRequestDescriptionCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestDescriptionCollection", id, params), ServiceRequestDescription)
}


/**
 * createServiceRequestDescriptionCollection
 * 
 * @param {ServiceRequestDescription} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestDescription>>}
 */
export function createServiceRequestDescriptionCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestDescriptionCollection", undefined, undefined, "POST", entity), ServiceRequestDescription)
}


/**
 * updateServiceRequestDescriptionCollection
 * 
 * @param {string} id 
 * @param {ServiceRequestDescription} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestDescription>>}
 */
export function updateServiceRequestDescriptionCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestDescriptionCollection", id, undefined, "PATCH", entity), ServiceRequestDescription)
}


/**
 * replaceServiceRequestDescriptionCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceRequestDescription} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestDescription>>}
 */
export function replaceServiceRequestDescriptionCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestDescriptionCollection", id, undefined, "PUT", entity), ServiceRequestDescription)
}


/**
 * deleteSingleServiceRequestDescriptionCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceRequestDescriptionCollection(id) {
  return odata.request("ServiceRequestDescriptionCollection", id, undefined ,"DELETE")
}


/**
 * readServiceRequestEscalationStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestEscalationStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestEscalationStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestEscalationStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestEscalationStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestEscalationStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestHistoricalVersionCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceRequestHistoricalVersion>>}
 */
export function readServiceRequestHistoricalVersionCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionCollection", undefined, params), ServiceRequestHistoricalVersion)
}


/**
 * readSingleServiceRequestHistoricalVersionCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestHistoricalVersion>>}
 */
export function readSingleServiceRequestHistoricalVersionCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionCollection", id, params), ServiceRequestHistoricalVersion)
}


/**
 * createServiceRequestHistoricalVersionCollection
 * 
 * @param {ServiceRequestHistoricalVersion} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestHistoricalVersion>>}
 */
export function createServiceRequestHistoricalVersionCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionCollection", undefined, undefined, "POST", entity), ServiceRequestHistoricalVersion)
}


/**
 * readServiceRequestHistoricalVersionEscalationStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestHistoricalVersionEscalationStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionEscalationStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestHistoricalVersionEscalationStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestHistoricalVersionEscalationStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionEscalationStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestHistoricalVersionServiceRequestLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestHistoricalVersionServiceRequestLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionServiceRequestLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestHistoricalVersionServiceRequestLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestHistoricalVersionServiceRequestLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionServiceRequestLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestHistoricalVersionServiceTermsServicePriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestHistoricalVersionServiceTermsServicePriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionServiceTermsServicePriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestHistoricalVersionServiceTermsServicePriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestHistoricalVersionServiceTermsServicePriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionServiceTermsServicePriorityCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestHistoricalVersionServiceTermsServiceRequestUserLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestHistoricalVersionServiceTermsServiceRequestUserLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionServiceTermsServiceRequestUserLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestHistoricalVersionServiceTermsServiceRequestUserLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestHistoricalVersionServiceTermsServiceRequestUserLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestHistoricalVersionServiceTermsServiceRequestUserLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestInteractionCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceRequestInteraction>>}
 */
export function readServiceRequestInteractionCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestInteractionCollection", undefined, params), ServiceRequestInteraction)
}


/**
 * readSingleServiceRequestInteractionCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestInteraction>>}
 */
export function readSingleServiceRequestInteractionCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestInteractionCollection", id, params), ServiceRequestInteraction)
}


/**
 * readServiceRequestItemCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceRequestItem>>}
 */
export function readServiceRequestItemCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestItemCollection", undefined, params), ServiceRequestItem)
}


/**
 * readSingleServiceRequestItemCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestItem>>}
 */
export function readSingleServiceRequestItemCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemCollection", id, params), ServiceRequestItem)
}


/**
 * createServiceRequestItemCollection
 * 
 * @param {ServiceRequestItem} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestItem>>}
 */
export function createServiceRequestItemCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemCollection", undefined, undefined, "POST", entity), ServiceRequestItem)
}


/**
 * updateServiceRequestItemCollection
 * 
 * @param {string} id 
 * @param {ServiceRequestItem} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestItem>>}
 */
export function updateServiceRequestItemCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemCollection", id, undefined, "PATCH", entity), ServiceRequestItem)
}


/**
 * replaceServiceRequestItemCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceRequestItem} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestItem>>}
 */
export function replaceServiceRequestItemCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemCollection", id, undefined, "PUT", entity), ServiceRequestItem)
}


/**
 * deleteSingleServiceRequestItemCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceRequestItemCollection(id) {
  return odata.request("ServiceRequestItemCollection", id, undefined ,"DELETE")
}


/**
 * readServiceRequestItemListServiceRequestExecutionLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestItemListServiceRequestExecutionLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestItemListServiceRequestExecutionLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestItemListServiceRequestExecutionLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestItemListServiceRequestExecutionLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemListServiceRequestExecutionLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestItemScheduleLineCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ServiceRequestItemScheduleLine>>}
 */
export function readServiceRequestItemScheduleLineCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestItemScheduleLineCollection", undefined, params), ServiceRequestItemScheduleLine)
}


/**
 * readSingleServiceRequestItemScheduleLineCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestItemScheduleLine>>}
 */
export function readSingleServiceRequestItemScheduleLineCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemScheduleLineCollection", id, params), ServiceRequestItemScheduleLine)
}


/**
 * createServiceRequestItemScheduleLineCollection
 * 
 * @param {ServiceRequestItemScheduleLine} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestItemScheduleLine>>}
 */
export function createServiceRequestItemScheduleLineCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemScheduleLineCollection", undefined, undefined, "POST", entity), ServiceRequestItemScheduleLine)
}


/**
 * updateServiceRequestItemScheduleLineCollection
 * 
 * @param {string} id 
 * @param {ServiceRequestItemScheduleLine} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestItemScheduleLine>>}
 */
export function updateServiceRequestItemScheduleLineCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemScheduleLineCollection", id, undefined, "PATCH", entity), ServiceRequestItemScheduleLine)
}


/**
 * replaceServiceRequestItemScheduleLineCollection
 * replace a entity
 * @param {string} id 
 * @param {ServiceRequestItemScheduleLine} entity 
 * @returns {Promise<C4CODataSingleResult<ServiceRequestItemScheduleLine>>}
 */
export function replaceServiceRequestItemScheduleLineCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemScheduleLineCollection", id, undefined, "PUT", entity), ServiceRequestItemScheduleLine)
}


/**
 * deleteSingleServiceRequestItemScheduleLineCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleServiceRequestItemScheduleLineCollection(id) {
  return odata.request("ServiceRequestItemScheduleLineCollection", id, undefined ,"DELETE")
}


/**
 * readServiceRequestItemScheduleLineTypeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestItemScheduleLineTypeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestItemScheduleLineTypeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestItemScheduleLineTypeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestItemScheduleLineTypeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestItemScheduleLineTypeCollection", id, params), CodeList)
}


/**
 * readServiceRequestProcessingTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestProcessingTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestProcessingTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestProcessingTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestProcessingTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestProcessingTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestRequestAssignmentStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestRequestAssignmentStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestRequestAssignmentStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestRequestAssignmentStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestRequestAssignmentStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestRequestAssignmentStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestRequestedEndTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestRequestedEndTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestRequestedEndTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestRequestedEndTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestRequestedEndTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestRequestedEndTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestRequestedStartTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestRequestedStartTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestRequestedStartTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestRequestedStartTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestRequestedStartTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestRequestedStartTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestRescuedPhaseTypeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestRescuedPhaseTypeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestRescuedPhaseTypeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestRescuedPhaseTypeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestRescuedPhaseTypeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestRescuedPhaseTypeCollection", id, params), CodeList)
}


/**
 * readServiceRequestRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestRoleCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestServicePriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestServicePriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestServicePriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestServicePriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestServicePriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestServicePriorityCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestServiceRequestClassificationCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestServiceRequestClassificationCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestServiceRequestClassificationCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestServiceRequestClassificationCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestServiceRequestClassificationCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestServiceRequestClassificationCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestServiceRequestLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestServiceRequestLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestServiceRequestLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestServiceRequestLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestServiceRequestLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestServiceRequestLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestServiceRequestUserLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestServiceRequestUserLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestServiceRequestUserLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestServiceRequestUserLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestServiceRequestUserLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestServiceRequestUserLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestSpecialMarkCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestSpecialMarkCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestSpecialMarkCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestSpecialMarkCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestSpecialMarkCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestSpecialMarkCollection", id, params), CodeList)
}


/**
 * readServiceRequestTextCollectionLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestTextCollectionLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestTextCollectionLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestTextCollectionLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestTextCollectionLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestTextCollectionLanguageCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestTextCollectionTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestTextCollectionTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestTextCollectionTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestTextCollectionTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestTextCollectionTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestTextCollectionTypeCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestTicketSourceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestTicketSourceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestTicketSourceCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestTicketSourceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestTicketSourceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestTicketSourceCollection", id, params), CodeList)
}


/**
 * readServiceRequestUsedAddressCountryCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestUsedAddressCountryCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestUsedAddressCountryCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestUsedAddressCountryCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestUsedAddressCountryCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestUsedAddressCountryCollection", id, params), CodeList)
}


/**
 * readServiceRequestUsedAddressLanguageCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestUsedAddressLanguageCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestUsedAddressLanguageCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestUsedAddressLanguageCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestUsedAddressLanguageCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestUsedAddressLanguageCollection", id, params), CodeList)
}


/**
 * readServiceRequestUsedAddressPOBoxPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestUsedAddressPOBoxPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestUsedAddressPOBoxPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestUsedAddressPOBoxPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestUsedAddressPOBoxPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestUsedAddressPOBoxPostalCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestUsedAddressPostalCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestUsedAddressPostalCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestUsedAddressPostalCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestUsedAddressPostalCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestUsedAddressPostalCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestUsedAddressPostalCodeCollection", id, params), CodeList)
}


/**
 * readServiceRequestUsedAddressStateCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestUsedAddressStateCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestUsedAddressStateCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestUsedAddressStateCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestUsedAddressStateCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestUsedAddressStateCollection", id, params), CodeList)
}


/**
 * readServiceRequestlanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestlanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestlanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestlanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestlanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestlanguageCodeCollection", id, params), CodeList)
}


/**
 * readTaskAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<TaskAttachment>>}
 */
export function readTaskAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskAttachmentCollection", undefined, params), TaskAttachment)
}


/**
 * readSingleTaskAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<TaskAttachment>>}
 */
export function readSingleTaskAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskAttachmentCollection", id, params), TaskAttachment)
}


/**
 * createTaskAttachmentCollection
 * 
 * @param {TaskAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<TaskAttachment>>}
 */
export function createTaskAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskAttachmentCollection", undefined, undefined, "POST", entity), TaskAttachment)
}


/**
 * updateTaskAttachmentCollection
 * 
 * @param {string} id 
 * @param {TaskAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<TaskAttachment>>}
 */
export function updateTaskAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskAttachmentCollection", id, undefined, "PATCH", entity), TaskAttachment)
}


/**
 * replaceTaskAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {TaskAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<TaskAttachment>>}
 */
export function replaceTaskAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskAttachmentCollection", id, undefined, "PUT", entity), TaskAttachment)
}


/**
 * deleteSingleTaskAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleTaskAttachmentCollection(id) {
  return odata.request("TaskAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readTaskCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readTaskCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskCategoryCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleTaskCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleTaskCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskCategoryCodeCollection", id, params), ContextualCodeList)
}


/**
 * readTaskCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Task>>}
 */
export function readTaskCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskCollection", undefined, params), Task)
}


/**
 * readSingleTaskCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Task>>}
 */
export function readSingleTaskCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskCollection", id, params), Task)
}


/**
 * createTaskCollection
 * 
 * @param {Task} entity 
 * @returns {Promise<C4CODataSingleResult<Task>>}
 */
export function createTaskCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskCollection", undefined, undefined, "POST", entity), Task)
}


/**
 * updateTaskCollection
 * 
 * @param {string} id 
 * @param {Task} entity 
 * @returns {Promise<C4CODataSingleResult<Task>>}
 */
export function updateTaskCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskCollection", id, undefined, "PATCH", entity), Task)
}


/**
 * replaceTaskCollection
 * replace a entity
 * @param {string} id 
 * @param {Task} entity 
 * @returns {Promise<C4CODataSingleResult<Task>>}
 */
export function replaceTaskCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskCollection", id, undefined, "PUT", entity), Task)
}


/**
 * deleteSingleTaskCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleTaskCollection(id) {
  return odata.request("TaskCollection", id, undefined ,"DELETE")
}


/**
 * readTaskDataOriginTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readTaskDataOriginTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskDataOriginTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleTaskDataOriginTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleTaskDataOriginTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskDataOriginTypeCodeCollection", id, params), CodeList)
}


/**
 * readTaskInvolvedPartiesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<TaskInvolvedParties>>}
 */
export function readTaskInvolvedPartiesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskInvolvedPartiesCollection", undefined, params), TaskInvolvedParties)
}


/**
 * readSingleTaskInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<TaskInvolvedParties>>}
 */
export function readSingleTaskInvolvedPartiesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskInvolvedPartiesCollection", id, params), TaskInvolvedParties)
}


/**
 * createTaskInvolvedPartiesCollection
 * 
 * @param {TaskInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<TaskInvolvedParties>>}
 */
export function createTaskInvolvedPartiesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskInvolvedPartiesCollection", undefined, undefined, "POST", entity), TaskInvolvedParties)
}


/**
 * updateTaskInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @param {TaskInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<TaskInvolvedParties>>}
 */
export function updateTaskInvolvedPartiesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskInvolvedPartiesCollection", id, undefined, "PATCH", entity), TaskInvolvedParties)
}


/**
 * replaceTaskInvolvedPartiesCollection
 * replace a entity
 * @param {string} id 
 * @param {TaskInvolvedParties} entity 
 * @returns {Promise<C4CODataSingleResult<TaskInvolvedParties>>}
 */
export function replaceTaskInvolvedPartiesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskInvolvedPartiesCollection", id, undefined, "PUT", entity), TaskInvolvedParties)
}


/**
 * deleteSingleTaskInvolvedPartiesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleTaskInvolvedPartiesCollection(id) {
  return odata.request("TaskInvolvedPartiesCollection", id, undefined ,"DELETE")
}


/**
 * readTaskInvolvedPartiesRoleCategoryCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readTaskInvolvedPartiesRoleCategoryCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskInvolvedPartiesRoleCategoryCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleTaskInvolvedPartiesRoleCategoryCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleTaskInvolvedPartiesRoleCategoryCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskInvolvedPartiesRoleCategoryCodeCollection", id, params), CodeList)
}


/**
 * readTaskInvolvedPartiesRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readTaskInvolvedPartiesRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskInvolvedPartiesRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleTaskInvolvedPartiesRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleTaskInvolvedPartiesRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskInvolvedPartiesRoleCodeCollection", id, params), CodeList)
}


/**
 * readTaskInvolvedPartiesTaskTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readTaskInvolvedPartiesTaskTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskInvolvedPartiesTaskTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleTaskInvolvedPartiesTaskTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleTaskInvolvedPartiesTaskTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskInvolvedPartiesTaskTypeCodeCollection", id, params), CodeList)
}


/**
 * readTaskNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<TaskNotes>>}
 */
export function readTaskNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskNotesCollection", undefined, params), TaskNotes)
}


/**
 * readSingleTaskNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<TaskNotes>>}
 */
export function readSingleTaskNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskNotesCollection", id, params), TaskNotes)
}


/**
 * createTaskNotesCollection
 * 
 * @param {TaskNotes} entity 
 * @returns {Promise<C4CODataSingleResult<TaskNotes>>}
 */
export function createTaskNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskNotesCollection", undefined, undefined, "POST", entity), TaskNotes)
}


/**
 * updateTaskNotesCollection
 * 
 * @param {string} id 
 * @param {TaskNotes} entity 
 * @returns {Promise<C4CODataSingleResult<TaskNotes>>}
 */
export function updateTaskNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskNotesCollection", id, undefined, "PATCH", entity), TaskNotes)
}


/**
 * replaceTaskNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {TaskNotes} entity 
 * @returns {Promise<C4CODataSingleResult<TaskNotes>>}
 */
export function replaceTaskNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskNotesCollection", id, undefined, "PUT", entity), TaskNotes)
}


/**
 * deleteSingleTaskNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleTaskNotesCollection(id) {
  return odata.request("TaskNotesCollection", id, undefined ,"DELETE")
}


/**
 * readTaskPriorityCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readTaskPriorityCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskPriorityCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleTaskPriorityCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleTaskPriorityCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskPriorityCodeCollection", id, params), CodeList)
}


/**
 * readTaskStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readTaskStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleTaskStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleTaskStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskStatusCodeCollection", id, params), CodeList)
}


/**
 * readTaskTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readTaskTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TaskTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleTaskTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleTaskTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TaskTypeCodeCollection", id, params), CodeList)
}


/**
 * readTimeEntryCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<TimeEntry>>}
 */
export function readTimeEntryCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TimeEntryCollection", undefined, params), TimeEntry)
}


/**
 * readSingleTimeEntryCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<TimeEntry>>}
 */
export function readSingleTimeEntryCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeEntryCollection", id, params), TimeEntry)
}


/**
 * createTimeEntryCollection
 * 
 * @param {TimeEntry} entity 
 * @returns {Promise<C4CODataSingleResult<TimeEntry>>}
 */
export function createTimeEntryCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeEntryCollection", undefined, undefined, "POST", entity), TimeEntry)
}


/**
 * updateTimeEntryCollection
 * 
 * @param {string} id 
 * @param {TimeEntry} entity 
 * @returns {Promise<C4CODataSingleResult<TimeEntry>>}
 */
export function updateTimeEntryCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeEntryCollection", id, undefined, "PATCH", entity), TimeEntry)
}


/**
 * replaceTimeEntryCollection
 * replace a entity
 * @param {string} id 
 * @param {TimeEntry} entity 
 * @returns {Promise<C4CODataSingleResult<TimeEntry>>}
 */
export function replaceTimeEntryCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeEntryCollection", id, undefined, "PUT", entity), TimeEntry)
}


/**
 * deleteSingleTimeEntryCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleTimeEntryCollection(id) {
  return odata.request("TimeEntryCollection", id, undefined ,"DELETE")
}


/**
 * readTimeEntryItemCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<TimeEntryItem>>}
 */
export function readTimeEntryItemCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TimeEntryItemCollection", undefined, params), TimeEntryItem)
}


/**
 * readSingleTimeEntryItemCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<TimeEntryItem>>}
 */
export function readSingleTimeEntryItemCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeEntryItemCollection", id, params), TimeEntryItem)
}


/**
 * createTimeEntryItemCollection
 * 
 * @param {TimeEntryItem} entity 
 * @returns {Promise<C4CODataSingleResult<TimeEntryItem>>}
 */
export function createTimeEntryItemCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeEntryItemCollection", undefined, undefined, "POST", entity), TimeEntryItem)
}


/**
 * updateTimeEntryItemCollection
 * 
 * @param {string} id 
 * @param {TimeEntryItem} entity 
 * @returns {Promise<C4CODataSingleResult<TimeEntryItem>>}
 */
export function updateTimeEntryItemCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeEntryItemCollection", id, undefined, "PATCH", entity), TimeEntryItem)
}


/**
 * replaceTimeEntryItemCollection
 * replace a entity
 * @param {string} id 
 * @param {TimeEntryItem} entity 
 * @returns {Promise<C4CODataSingleResult<TimeEntryItem>>}
 */
export function replaceTimeEntryItemCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeEntryItemCollection", id, undefined, "PUT", entity), TimeEntryItem)
}


/**
 * deleteSingleTimeEntryItemCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleTimeEntryItemCollection(id) {
  return odata.request("TimeEntryItemCollection", id, undefined ,"DELETE")
}


/**
 * readTimeReportCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<TimeReport>>}
 */
export function readTimeReportCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("TimeReportCollection", undefined, params), TimeReport)
}


/**
 * readSingleTimeReportCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<TimeReport>>}
 */
export function readSingleTimeReportCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeReportCollection", id, params), TimeReport)
}


/**
 * createTimeReportCollection
 * 
 * @param {TimeReport} entity 
 * @returns {Promise<C4CODataSingleResult<TimeReport>>}
 */
export function createTimeReportCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeReportCollection", undefined, undefined, "POST", entity), TimeReport)
}


/**
 * updateTimeReportCollection
 * 
 * @param {string} id 
 * @param {TimeReport} entity 
 * @returns {Promise<C4CODataSingleResult<TimeReport>>}
 */
export function updateTimeReportCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeReportCollection", id, undefined, "PATCH", entity), TimeReport)
}


/**
 * replaceTimeReportCollection
 * replace a entity
 * @param {string} id 
 * @param {TimeReport} entity 
 * @returns {Promise<C4CODataSingleResult<TimeReport>>}
 */
export function replaceTimeReportCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("TimeReportCollection", id, undefined, "PUT", entity), TimeReport)
}


/**
 * deleteSingleTimeReportCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleTimeReportCollection(id) {
  return odata.request("TimeReportCollection", id, undefined ,"DELETE")
}


/**
 * readUserCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<User>>}
 */
export function readUserCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserCollection", undefined, params), User)
}


/**
 * readSingleUserCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<User>>}
 */
export function readSingleUserCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserCollection", id, params), User)
}


/**
 * updateUserCollection
 * 
 * @param {string} id 
 * @param {User} entity 
 * @returns {Promise<C4CODataSingleResult<User>>}
 */
export function updateUserCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserCollection", id, undefined, "PATCH", entity), User)
}


/**
 * replaceUserCollection
 * replace a entity
 * @param {string} id 
 * @param {User} entity 
 * @returns {Promise<C4CODataSingleResult<User>>}
 */
export function replaceUserCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserCollection", id, undefined, "PUT", entity), User)
}


/**
 * readUserDateFormatCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserDateFormatCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserDateFormatCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserDateFormatCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserDateFormatCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserDateFormatCodeCollection", id, params), CodeList)
}


/**
 * readUserDecimalFormatCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserDecimalFormatCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserDecimalFormatCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserDecimalFormatCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserDecimalFormatCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserDecimalFormatCodeCollection", id, params), CodeList)
}


/**
 * readUserLifeCycleStatusCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserLifeCycleStatusCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserLifeCycleStatusCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserLifeCycleStatusCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserLifeCycleStatusCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserLifeCycleStatusCodeCollection", id, params), CodeList)
}


/**
 * readUserLogonLanguageCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserLogonLanguageCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserLogonLanguageCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserLogonLanguageCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserLogonLanguageCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserLogonLanguageCodeCollection", id, params), CodeList)
}


/**
 * readUserPasswordPolicyCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserPasswordPolicyCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserPasswordPolicyCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserPasswordPolicyCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserPasswordPolicyCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserPasswordPolicyCodeCollection", id, params), CodeList)
}


/**
 * readUserSubscriptionCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<UserSubscription>>}
 */
export function readUserSubscriptionCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserSubscriptionCollection", undefined, params), UserSubscription)
}


/**
 * readSingleUserSubscriptionCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<UserSubscription>>}
 */
export function readSingleUserSubscriptionCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserSubscriptionCollection", id, params), UserSubscription)
}


/**
 * readUserTimeFormatCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserTimeFormatCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserTimeFormatCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserTimeFormatCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserTimeFormatCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserTimeFormatCodeCollection", id, params), CodeList)
}


/**
 * readUserTimeZoneCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserTimeZoneCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserTimeZoneCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserTimeZoneCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserTimeZoneCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserTimeZoneCodeCollection", id, params), CodeList)
}


/**
 * readUserTypeAssignmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<UserTypeAssignment>>}
 */
export function readUserTypeAssignmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserTypeAssignmentCollection", undefined, params), UserTypeAssignment)
}


/**
 * readSingleUserTypeAssignmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<UserTypeAssignment>>}
 */
export function readSingleUserTypeAssignmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserTypeAssignmentCollection", id, params), UserTypeAssignment)
}


/**
 * createUserTypeAssignmentCollection
 * 
 * @param {UserTypeAssignment} entity 
 * @returns {Promise<C4CODataSingleResult<UserTypeAssignment>>}
 */
export function createUserTypeAssignmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserTypeAssignmentCollection", undefined, undefined, "POST", entity), UserTypeAssignment)
}


/**
 * updateUserTypeAssignmentCollection
 * 
 * @param {string} id 
 * @param {UserTypeAssignment} entity 
 * @returns {Promise<C4CODataSingleResult<UserTypeAssignment>>}
 */
export function updateUserTypeAssignmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserTypeAssignmentCollection", id, undefined, "PATCH", entity), UserTypeAssignment)
}


/**
 * replaceUserTypeAssignmentCollection
 * replace a entity
 * @param {string} id 
 * @param {UserTypeAssignment} entity 
 * @returns {Promise<C4CODataSingleResult<UserTypeAssignment>>}
 */
export function replaceUserTypeAssignmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserTypeAssignmentCollection", id, undefined, "PUT", entity), UserTypeAssignment)
}


/**
 * deleteSingleUserTypeAssignmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleUserTypeAssignmentCollection(id) {
  return odata.request("UserTypeAssignmentCollection", id, undefined ,"DELETE")
}


/**
 * readUserTypeAssignmentSubscriptionTypeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserTypeAssignmentSubscriptionTypeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserTypeAssignmentSubscriptionTypeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserTypeAssignmentSubscriptionTypeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserTypeAssignmentSubscriptionTypeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserTypeAssignmentSubscriptionTypeCollection", id, params), CodeList)
}


/**
 * readUserTypeAssignmentUserTypeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserTypeAssignmentUserTypeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserTypeAssignmentUserTypeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserTypeAssignmentUserTypeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserTypeAssignmentUserTypeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserTypeAssignmentUserTypeCollection", id, params), CodeList)
}


/**
 * readUserUserAccountTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readUserUserAccountTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("UserUserAccountTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleUserUserAccountTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleUserUserAccountTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("UserUserAccountTypeCodeCollection", id, params), CodeList)
}


/**
 * readVisitAttachmentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<VisitAttachment>>}
 */
export function readVisitAttachmentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitAttachmentCollection", undefined, params), VisitAttachment)
}


/**
 * readSingleVisitAttachmentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<VisitAttachment>>}
 */
export function readSingleVisitAttachmentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitAttachmentCollection", id, params), VisitAttachment)
}


/**
 * createVisitAttachmentCollection
 * 
 * @param {VisitAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<VisitAttachment>>}
 */
export function createVisitAttachmentCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitAttachmentCollection", undefined, undefined, "POST", entity), VisitAttachment)
}


/**
 * updateVisitAttachmentCollection
 * 
 * @param {string} id 
 * @param {VisitAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<VisitAttachment>>}
 */
export function updateVisitAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitAttachmentCollection", id, undefined, "PATCH", entity), VisitAttachment)
}


/**
 * replaceVisitAttachmentCollection
 * replace a entity
 * @param {string} id 
 * @param {VisitAttachment} entity 
 * @returns {Promise<C4CODataSingleResult<VisitAttachment>>}
 */
export function replaceVisitAttachmentCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitAttachmentCollection", id, undefined, "PUT", entity), VisitAttachment)
}


/**
 * deleteSingleVisitAttachmentCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleVisitAttachmentCollection(id) {
  return odata.request("VisitAttachmentCollection", id, undefined ,"DELETE")
}


/**
 * readVisitCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<Visit>>}
 */
export function readVisitCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitCollection", undefined, params), Visit)
}


/**
 * readSingleVisitCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<Visit>>}
 */
export function readSingleVisitCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitCollection", id, params), Visit)
}


/**
 * createVisitCollection
 * 
 * @param {Visit} entity 
 * @returns {Promise<C4CODataSingleResult<Visit>>}
 */
export function createVisitCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitCollection", undefined, undefined, "POST", entity), Visit)
}


/**
 * updateVisitCollection
 * 
 * @param {string} id 
 * @param {Visit} entity 
 * @returns {Promise<C4CODataSingleResult<Visit>>}
 */
export function updateVisitCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitCollection", id, undefined, "PATCH", entity), Visit)
}


/**
 * replaceVisitCollection
 * replace a entity
 * @param {string} id 
 * @param {Visit} entity 
 * @returns {Promise<C4CODataSingleResult<Visit>>}
 */
export function replaceVisitCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitCollection", id, undefined, "PUT", entity), Visit)
}


/**
 * deleteSingleVisitCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleVisitCollection(id) {
  return odata.request("VisitCollection", id, undefined ,"DELETE")
}


/**
 * readVisitDataOriginTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitDataOriginTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitDataOriginTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitDataOriginTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitDataOriginTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitDataOriginTypeCodeCollection", id, params), CodeList)
}


/**
 * readVisitDistributionChannelCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitDistributionChannelCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitDistributionChannelCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitDistributionChannelCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitDistributionChannelCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitDistributionChannelCollection", id, params), CodeList)
}


/**
 * readVisitDivisionCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitDivisionCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitDivisionCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitDivisionCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitDivisionCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitDivisionCollection", id, params), CodeList)
}


/**
 * readVisitGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readVisitGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitGroupCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleVisitGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleVisitGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitGroupCodeCollection", id, params), ContextualCodeList)
}


/**
 * readVisitNotesCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<VisitNotes>>}
 */
export function readVisitNotesCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitNotesCollection", undefined, params), VisitNotes)
}


/**
 * readSingleVisitNotesCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<VisitNotes>>}
 */
export function readSingleVisitNotesCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitNotesCollection", id, params), VisitNotes)
}


/**
 * createVisitNotesCollection
 * 
 * @param {VisitNotes} entity 
 * @returns {Promise<C4CODataSingleResult<VisitNotes>>}
 */
export function createVisitNotesCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitNotesCollection", undefined, undefined, "POST", entity), VisitNotes)
}


/**
 * updateVisitNotesCollection
 * 
 * @param {string} id 
 * @param {VisitNotes} entity 
 * @returns {Promise<C4CODataSingleResult<VisitNotes>>}
 */
export function updateVisitNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitNotesCollection", id, undefined, "PATCH", entity), VisitNotes)
}


/**
 * replaceVisitNotesCollection
 * replace a entity
 * @param {string} id 
 * @param {VisitNotes} entity 
 * @returns {Promise<C4CODataSingleResult<VisitNotes>>}
 */
export function replaceVisitNotesCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitNotesCollection", id, undefined, "PUT", entity), VisitNotes)
}


/**
 * deleteSingleVisitNotesCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleVisitNotesCollection(id) {
  return odata.request("VisitNotesCollection", id, undefined ,"DELETE")
}


/**
 * readVisitPartyCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<VisitParty>>}
 */
export function readVisitPartyCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitPartyCollection", undefined, params), VisitParty)
}


/**
 * readSingleVisitPartyCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<VisitParty>>}
 */
export function readSingleVisitPartyCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitPartyCollection", id, params), VisitParty)
}


/**
 * createVisitPartyCollection
 * 
 * @param {VisitParty} entity 
 * @returns {Promise<C4CODataSingleResult<VisitParty>>}
 */
export function createVisitPartyCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitPartyCollection", undefined, undefined, "POST", entity), VisitParty)
}


/**
 * updateVisitPartyCollection
 * 
 * @param {string} id 
 * @param {VisitParty} entity 
 * @returns {Promise<C4CODataSingleResult<VisitParty>>}
 */
export function updateVisitPartyCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitPartyCollection", id, undefined, "PATCH", entity), VisitParty)
}


/**
 * replaceVisitPartyCollection
 * replace a entity
 * @param {string} id 
 * @param {VisitParty} entity 
 * @returns {Promise<C4CODataSingleResult<VisitParty>>}
 */
export function replaceVisitPartyCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitPartyCollection", id, undefined, "PUT", entity), VisitParty)
}


/**
 * deleteSingleVisitPartyCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleVisitPartyCollection(id) {
  return odata.request("VisitPartyCollection", id, undefined ,"DELETE")
}


/**
 * readVisitPartyRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitPartyRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitPartyRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitPartyRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitPartyRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitPartyRoleCodeCollection", id, params), CodeList)
}


/**
 * readVisitPartyVisitGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readVisitPartyVisitGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitPartyVisitGroupCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleVisitPartyVisitGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleVisitPartyVisitGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitPartyVisitGroupCodeCollection", id, params), ContextualCodeList)
}


/**
 * readVisitPartyVisitTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitPartyVisitTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitPartyVisitTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitPartyVisitTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitPartyVisitTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitPartyVisitTypeCodeCollection", id, params), CodeList)
}


/**
 * readVisitReferenceCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<VisitReference>>}
 */
export function readVisitReferenceCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitReferenceCollection", undefined, params), VisitReference)
}


/**
 * readSingleVisitReferenceCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<VisitReference>>}
 */
export function readSingleVisitReferenceCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitReferenceCollection", id, params), VisitReference)
}


/**
 * createVisitReferenceCollection
 * 
 * @param {VisitReference} entity 
 * @returns {Promise<C4CODataSingleResult<VisitReference>>}
 */
export function createVisitReferenceCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitReferenceCollection", undefined, undefined, "POST", entity), VisitReference)
}


/**
 * updateVisitReferenceCollection
 * 
 * @param {string} id 
 * @param {VisitReference} entity 
 * @returns {Promise<C4CODataSingleResult<VisitReference>>}
 */
export function updateVisitReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitReferenceCollection", id, undefined, "PATCH", entity), VisitReference)
}


/**
 * replaceVisitReferenceCollection
 * replace a entity
 * @param {string} id 
 * @param {VisitReference} entity 
 * @returns {Promise<C4CODataSingleResult<VisitReference>>}
 */
export function replaceVisitReferenceCollection(id, entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitReferenceCollection", id, undefined, "PUT", entity), VisitReference)
}


/**
 * deleteSingleVisitReferenceCollection
 * 
 * @param {string} id 
 * @returns {Promise<string>}
 */
export function deleteSingleVisitReferenceCollection(id) {
  return odata.request("VisitReferenceCollection", id, undefined ,"DELETE")
}


/**
 * readVisitReferenceReferenceRoleCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitReferenceReferenceRoleCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitReferenceReferenceRoleCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitReferenceReferenceRoleCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitReferenceReferenceRoleCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitReferenceReferenceRoleCodeCollection", id, params), CodeList)
}


/**
 * readVisitReferenceTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitReferenceTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitReferenceTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitReferenceTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitReferenceTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitReferenceTypeCodeCollection", id, params), CodeList)
}


/**
 * readVisitReferenceVisitGroupCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<ContextualCodeList>>}
 */
export function readVisitReferenceVisitGroupCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitReferenceVisitGroupCodeCollection", undefined, params), ContextualCodeList)
}


/**
 * readSingleVisitReferenceVisitGroupCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<ContextualCodeList>>}
 */
export function readSingleVisitReferenceVisitGroupCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitReferenceVisitGroupCodeCollection", id, params), ContextualCodeList)
}


/**
 * readVisitStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitStatusCollection", id, params), CodeList)
}


/**
 * readVisitTypeCodeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readVisitTypeCodeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("VisitTypeCodeCollection", undefined, params), CodeList)
}


/**
 * readSingleVisitTypeCodeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleVisitTypeCodeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("VisitTypeCodeCollection", id, params), CodeList)
}

export const CollectionOperation = {
  CodeList: {
    readAccountABCClassificationCodeCollection,
    readSingleAccountABCClassificationCodeCollection,
    readAccountAddressInformationCountryCodeCollection,
    readSingleAccountAddressInformationCountryCodeCollection,
    readAccountAddressInformationPOBoxPostalCodeCollection,
    readSingleAccountAddressInformationPOBoxPostalCodeCollection,
    readAccountAddressInformationPostalCodeCollection,
    readSingleAccountAddressInformationPostalCodeCollection,
    readAccountAddressStateCollection,
    readSingleAccountAddressStateCollection,
    readAccountCategoryCodeCollection,
    readSingleAccountCategoryCodeCollection,
    readAccountContactAllowedCodeCollection,
    readSingleAccountContactAllowedCodeCollection,
    readAccountContactRelationshipBusinessPartnerFunctionTypeCodeCollection,
    readSingleAccountContactRelationshipBusinessPartnerFunctionTypeCodeCollection,
    readAccountContactRelationshipBusinessPartnerFunctionalAreaCodeCollection,
    readSingleAccountContactRelationshipBusinessPartnerFunctionalAreaCodeCollection,
    readAccountContactRelationshipVIPReasonCodeCollection,
    readSingleAccountContactRelationshipVIPReasonCodeCollection,
    readAccountContactsCategoryCodeCollection,
    readSingleAccountContactsCategoryCodeCollection,
    readAccountContactsStatusCodeCollection,
    readSingleAccountContactsStatusCodeCollection,
    readAccountCorrespondenceLanguageCodeCollection,
    readSingleAccountCorrespondenceLanguageCodeCollection,
    readAccountCountryCodeCollection,
    readSingleAccountCountryCodeCollection,
    readAccountIndustryCodeCollection,
    readSingleAccountIndustryCodeCollection,
    readAccountLegalFormCodeCollection,
    readSingleAccountLegalFormCodeCollection,
    readAccountMainAddressDefaultPostalAddrRep_ObjectID1Collection,
    readSingleAccountMainAddressDefaultPostalAddrRep_ObjectID1Collection,
    readAccountNielsenRegionCodeCollection,
    readSingleAccountNielsenRegionCodeCollection,
    readAccountPOBoxDeviatingCountryCodeCollection,
    readSingleAccountPOBoxDeviatingCountryCodeCollection,
    readAccountPOBoxDeviatingRegionCodeCollection,
    readSingleAccountPOBoxDeviatingRegionCodeCollection,
    readAccountPOBoxPostalCodeCollection,
    readSingleAccountPOBoxPostalCodeCollection,
    readAccountPreferredCommunicationMediumTypeCodeCollection,
    readSingleAccountPreferredCommunicationMediumTypeCodeCollection,
    readAccountRegionCodeCollection,
    readSingleAccountRegionCodeCollection,
    readAccountRoleBusinessCharacterCodeCollection,
    readSingleAccountRoleBusinessCharacterCodeCollection,
    readAccountRoleCodeCollection,
    readSingleAccountRoleCodeCollection,
    readAccountRoleRoleCodeCollection,
    readSingleAccountRoleRoleCodeCollection,
    readAccountSalesDataBillingBlockingReasonCodeCollection,
    readSingleAccountSalesDataBillingBlockingReasonCodeCollection,
    readAccountSalesDataCurrencyCodeCollection,
    readSingleAccountSalesDataCurrencyCodeCollection,
    readAccountSalesDataCustomerGroupCodeCollection,
    readSingleAccountSalesDataCustomerGroupCodeCollection,
    readAccountSalesDataDeliveryBlockingReasonCodeCollection,
    readSingleAccountSalesDataDeliveryBlockingReasonCodeCollection,
    readAccountSalesDataDeliveryPriorityCodeCollection,
    readSingleAccountSalesDataDeliveryPriorityCodeCollection,
    readAccountSalesDataDistributionChannelCodeCollection,
    readSingleAccountSalesDataDistributionChannelCodeCollection,
    readAccountSalesDataDivisionCodeCollection,
    readSingleAccountSalesDataDivisionCodeCollection,
    readAccountSalesDataIncotermsCodeCollection,
    readSingleAccountSalesDataIncotermsCodeCollection,
    readAccountSalesDataOrderBlockingReasonCodeCollection,
    readSingleAccountSalesDataOrderBlockingReasonCodeCollection,
    readAccountSalesDataPaymentTermsCodeCollection,
    readSingleAccountSalesDataPaymentTermsCodeCollection,
    readAccountStatusCodeCollection,
    readSingleAccountStatusCodeCollection,
    readAccountStreetPostalCodeCollection,
    readSingleAccountStreetPostalCodeCollection,
    readAccountTaxJurisdictionCodeCollection,
    readSingleAccountTaxJurisdictionCodeCollection,
    readAccountTeamDistributionChannelCodeCollection,
    readSingleAccountTeamDistributionChannelCodeCollection,
    readAccountTeamDivisionCodeCollection,
    readSingleAccountTeamDivisionCodeCollection,
    readAccountTeamPartyRoleCodeCollection,
    readSingleAccountTeamPartyRoleCodeCollection,
    readAccountTimeZoneCodeCollection,
    readSingleAccountTimeZoneCodeCollection,
    readActivityAttachmentFolderCategoryCodeCollection,
    readSingleActivityAttachmentFolderCategoryCodeCollection,
    readActivityAttachmentFolderTypeCodeCollection,
    readSingleActivityAttachmentFolderTypeCodeCollection,
    readActivityBusinessTransactionDocumentReferenceReferenceDocumentTypeCodeCollection,
    readSingleActivityBusinessTransactionDocumentReferenceReferenceDocumentTypeCodeCollection,
    readActivityCommunicationPartyRoleCategoryCodeCollection,
    readSingleActivityCommunicationPartyRoleCategoryCodeCollection,
    readActivityCopyMessageToPartyRoleCategoryCodeCollection,
    readSingleActivityCopyMessageToPartyRoleCategoryCodeCollection,
    readActivityTextCollectionLanguageCodeCollection,
    readSingleActivityTextCollectionLanguageCodeCollection,
    readActivityTextCollectionTypeCodeCollection,
    readSingleActivityTextCollectionTypeCodeCollection,
    readAppointmentCategoryCodeCollection,
    readSingleAppointmentCategoryCodeCollection,
    readAppointmentCustomerSatisfactionCollection,
    readSingleAppointmentCustomerSatisfactionCollection,
    readAppointmentDataOriginTypeCodeCollection,
    readSingleAppointmentDataOriginTypeCodeCollection,
    readAppointmentDrivenExperienceCollection,
    readSingleAppointmentDrivenExperienceCollection,
    readAppointmentInvolvedPartiesActivityGroupCodeCollection,
    readSingleAppointmentInvolvedPartiesActivityGroupCodeCollection,
    readAppointmentInvolvedPartiesAppointmentTypeCodeCollection,
    readSingleAppointmentInvolvedPartiesAppointmentTypeCodeCollection,
    readAppointmentInvolvedPartiesPartyTypeCodeCollection,
    readSingleAppointmentInvolvedPartiesPartyTypeCodeCollection,
    readAppointmentInvolvedPartiesRoleCodeCollection,
    readSingleAppointmentInvolvedPartiesRoleCodeCollection,
    readAppointmentMileage_aunitCodeCollection,
    readSingleAppointmentMileage_aunitCodeCollection,
    readAppointmentMileage_bunitCodeCollection,
    readSingleAppointmentMileage_bunitCodeCollection,
    readAppointmentPriorityCodeCollection,
    readSingleAppointmentPriorityCodeCollection,
    readAppointmentPurchaseFocuscontentCollection,
    readSingleAppointmentPurchaseFocuscontentCollection,
    readAppointmentPurchaseUsagecontentCollection,
    readSingleAppointmentPurchaseUsagecontentCollection,
    readAppointmentQuoteAmountcurrencyCodeCollection,
    readSingleAppointmentQuoteAmountcurrencyCodeCollection,
    readAppointmentStatusCodeCollection,
    readSingleAppointmentStatusCodeCollection,
    readAppointmentTestDrivenStatusCollection,
    readSingleAppointmentTestDrivenStatusCollection,
    readAppointmentTypeCodeCollection,
    readSingleAppointmentTypeCodeCollection,
    readBusinessPartnerAddressPreferredCommunicationMediumTypeCodeCollection,
    readSingleBusinessPartnerAddressPreferredCommunicationMediumTypeCodeCollection,
    readBusinessPartnerAttachmentFolderCategoryCodeCollection,
    readSingleBusinessPartnerAttachmentFolderCategoryCodeCollection,
    readBusinessPartnerAttachmentFolderTypeCodeCollection,
    readSingleBusinessPartnerAttachmentFolderTypeCodeCollection,
    readBusinessPartnerRelationshipHasContactPersonBusinessPartnerRelationshipCategoryCodeCollection,
    readSingleBusinessPartnerRelationshipHasContactPersonBusinessPartnerRelationshipCategoryCodeCollection,
    readBusinessPartnerRelationshipIsContactPersonForBusinessPartnerRelationshipCategoryCodeCollection,
    readSingleBusinessPartnerRelationshipIsContactPersonForBusinessPartnerRelationshipCategoryCodeCollection,
    readBusinessPartnerRoleCodeCollection,
    readSingleBusinessPartnerRoleCodeCollection,
    readBusinessPartnerTextCollectionLanguageCodeCollection,
    readSingleBusinessPartnerTextCollectionLanguageCodeCollection,
    readBusinessPartnerTextCollectionTypeCodeCollection,
    readSingleBusinessPartnerTextCollectionTypeCodeCollection,
    readCodTimeEntryBusinessTransactionDocumentTypeCodeCollection,
    readSingleCodTimeEntryBusinessTransactionDocumentTypeCodeCollection,
    readCodTimeEntryLifeCycleStatusCodeCollection,
    readSingleCodTimeEntryLifeCycleStatusCodeCollection,
    readCodTimeEntryTimeEntryItemTimeZoneCodeCollection,
    readSingleCodTimeEntryTimeEntryItemTimeZoneCodeCollection,
    readCodTimeEntryTimeTypeCodeCollection,
    readSingleCodTimeEntryTimeTypeCodeCollection,
    readCodTimeEntryTimeZoneCollection,
    readSingleCodTimeEntryTimeZoneCollection,
    readCodTimeReportTimeReportStatusCollection,
    readSingleCodTimeReportTimeReportStatusCollection,
    readContactAcademicTitleCodeCollection,
    readSingleContactAcademicTitleCodeCollection,
    readContactAdditionalAcademicTitleCodeCollection,
    readSingleContactAdditionalAcademicTitleCodeCollection,
    readContactBestReachedByCodeCollection,
    readSingleContactBestReachedByCodeCollection,
    readContactBusinessAddressCountryCodeCollection,
    readSingleContactBusinessAddressCountryCodeCollection,
    readContactBusinessAddressPreferredCommunicationMediumTypeCodeCollection,
    readSingleContactBusinessAddressPreferredCommunicationMediumTypeCodeCollection,
    readContactBusinessAddressStateCodeCollection,
    readSingleContactBusinessAddressStateCodeCollection,
    readContactBusinessAddressStreetPostalCodeCollection,
    readSingleContactBusinessAddressStreetPostalCodeCollection,
    readContactBusinessPartnerVIPReasonCodeCollection,
    readSingleContactBusinessPartnerVIPReasonCodeCollection,
    readContactBusinessPostalAddressCountryCodeCollection,
    readSingleContactBusinessPostalAddressCountryCodeCollection,
    readContactBusinessPostalAddressPostalCodeCollection,
    readSingleContactBusinessPostalAddressPostalCodeCollection,
    readContactBusinessPostalAddressStateCollection,
    readSingleContactBusinessPostalAddressStateCollection,
    readContactCategoryCodeCollection,
    readSingleContactCategoryCodeCollection,
    readContactContactAllowedCodeCollection,
    readSingleContactContactAllowedCodeCollection,
    readContactDepartmentCodeCollection,
    readSingleContactDepartmentCodeCollection,
    readContactFunctionCodeCollection,
    readSingleContactFunctionCodeCollection,
    readContactGenderCodeCollection,
    readSingleContactGenderCodeCollection,
    readContactLanguageCodeCollection,
    readSingleContactLanguageCodeCollection,
    readContactMaritalStatusCodeCollection,
    readSingleContactMaritalStatusCodeCollection,
    readContactPerceptionOfCompanyCodeCollection,
    readSingleContactPerceptionOfCompanyCodeCollection,
    readContactPersonalAddressCountryCodeCollection,
    readSingleContactPersonalAddressCountryCodeCollection,
    readContactPersonalAddressPOBoxPostalCodeCollection,
    readSingleContactPersonalAddressPOBoxPostalCodeCollection,
    readContactPersonalAddressPostalCodeCollection,
    readSingleContactPersonalAddressPostalCodeCollection,
    readContactPersonalAddressStateCollection,
    readSingleContactPersonalAddressStateCollection,
    readContactPersonalPostalAddressStateCollection,
    readSingleContactPersonalPostalAddressStateCollection,
    readContactPostalAddressCountryCodeCollection,
    readSingleContactPostalAddressCountryCodeCollection,
    readContactPostalAddressPOBoxPostalCodeCollection,
    readSingleContactPostalAddressPOBoxPostalCodeCollection,
    readContactPostalAddressPostalCodeCollection,
    readSingleContactPostalAddressPostalCodeCollection,
    readContactRoleCodeCollection,
    readSingleContactRoleCodeCollection,
    readContactStatusCodeCollection,
    readSingleContactStatusCodeCollection,
    readContactTitleCodeCollection,
    readSingleContactTitleCodeCollection,
    readContactVIPContactCodeCollection,
    readSingleContactVIPContactCodeCollection,
    readCustomerAttachmentFolderCategoryCodeCollection,
    readSingleCustomerAttachmentFolderCategoryCodeCollection,
    readCustomerAttachmentFolderTypeCodeCollection,
    readSingleCustomerAttachmentFolderTypeCodeCollection,
    readCustomerTextCollectionLanguageCodeCollection,
    readSingleCustomerTextCollectionLanguageCodeCollection,
    readCustomerTextCollectionTypeCodeCollection,
    readSingleCustomerTextCollectionTypeCodeCollection,
    readEMailCcRecipientsEMailTypeCodeCollection,
    readSingleEMailCcRecipientsEMailTypeCodeCollection,
    readEMailCorrespondenceTransmissionStatusCodeCollection,
    readSingleEMailCorrespondenceTransmissionStatusCodeCollection,
    readEMailDataOriginTypeCodeCollection,
    readSingleEMailDataOriginTypeCodeCollection,
    readEMailGroupCodeCollection,
    readSingleEMailGroupCodeCollection,
    readEMailPriorityCodeCollection,
    readSingleEMailPriorityCodeCollection,
    readEMailStatusCodeCollection,
    readSingleEMailStatusCodeCollection,
    readEMailToRecipientsEMailTypeCodeCollection,
    readSingleEMailToRecipientsEMailTypeCodeCollection,
    readEMailToRecipientsRoleCategoryCodeCollection,
    readSingleEMailToRecipientsRoleCategoryCodeCollection,
    readEMailTypeCodeCollection,
    readSingleEMailTypeCodeCollection,
    readEmailBusinessTransactionDocumentReferenceRoleCodeCollection,
    readSingleEmailBusinessTransactionDocumentReferenceRoleCodeCollection,
    readEmailBusinessTransactionDocumentReferenceTypeCodeCollection,
    readSingleEmailBusinessTransactionDocumentReferenceTypeCodeCollection,
    readEmployeeAcademicTitleCodeCollection,
    readSingleEmployeeAcademicTitleCodeCollection,
    readEmployeeAddressInformationCountryCodeCollection,
    readSingleEmployeeAddressInformationCountryCodeCollection,
    readEmployeeAddressInformationPostalCodeCollection,
    readSingleEmployeeAddressInformationPostalCodeCollection,
    readEmployeeBusinessAddressCountryCodeCollection,
    readSingleEmployeeBusinessAddressCountryCodeCollection,
    readEmployeeBusinessAddressPostalCodeCollection,
    readSingleEmployeeBusinessAddressPostalCodeCollection,
    readEmployeeBusinessAddressStateCodeCollection,
    readSingleEmployeeBusinessAddressStateCodeCollection,
    readEmployeeCategoryCodeCollection,
    readSingleEmployeeCategoryCodeCollection,
    readEmployeeCompanyPostalCodeCollection,
    readSingleEmployeeCompanyPostalCodeCollection,
    readEmployeeCountryCodeCollection,
    readSingleEmployeeCountryCodeCollection,
    readEmployeeDateFormatCodeCollection,
    readSingleEmployeeDateFormatCodeCollection,
    readEmployeeDecimalFormatCodeCollection,
    readSingleEmployeeDecimalFormatCodeCollection,
    readEmployeeGenderCodeCollection,
    readSingleEmployeeGenderCodeCollection,
    readEmployeeLanguageCodeCollection,
    readSingleEmployeeLanguageCodeCollection,
    readEmployeeLogonLanguageCodeCollection,
    readSingleEmployeeLogonLanguageCodeCollection,
    readEmployeeMaritalStatusCodeCollection,
    readSingleEmployeeMaritalStatusCodeCollection,
    readEmployeeNationalityCountryCodeCollection,
    readSingleEmployeeNationalityCountryCodeCollection,
    readEmployeePOBoxCountryCodeCollection,
    readSingleEmployeePOBoxCountryCodeCollection,
    readEmployeePOBoxPostalCodeCollection,
    readSingleEmployeePOBoxPostalCodeCollection,
    readEmployeePOBoxRegionCodeCollection,
    readSingleEmployeePOBoxRegionCodeCollection,
    readEmployeePostalCodeCollection,
    readSingleEmployeePostalCodeCollection,
    readEmployeeRegionCodeCollection,
    readSingleEmployeeRegionCodeCollection,
    readEmployeeTaxJurisdictionCodeCollection,
    readSingleEmployeeTaxJurisdictionCodeCollection,
    readEmployeeTimeFormatCodeCollection,
    readSingleEmployeeTimeFormatCodeCollection,
    readEmployeeTimeZoneCodeCollection,
    readSingleEmployeeTimeZoneCodeCollection,
    readEmployeeTitleCodeCollection,
    readSingleEmployeeTitleCodeCollection,
    readEmployeeUserPasswordPolicyCodeCollection,
    readSingleEmployeeUserPasswordPolicyCodeCollection,
    readExternalIDMappingExternalIDSchemeCodeCollection,
    readSingleExternalIDMappingExternalIDSchemeCodeCollection,
    readExternalIDMappingObjectTypeCodeCollection,
    readSingleExternalIDMappingObjectTypeCodeCollection,
    readIndividualCustomerAcademicTitleCodeCollection,
    readSingleIndividualCustomerAcademicTitleCodeCollection,
    readIndividualCustomerBillingBlockCodeCollection,
    readSingleIndividualCustomerBillingBlockCodeCollection,
    readIndividualCustomerCategoryCodeCollection,
    readSingleIndividualCustomerCategoryCodeCollection,
    readIndividualCustomerCommonAcademicTitleCodeCollection,
    readSingleIndividualCustomerCommonAcademicTitleCodeCollection,
    readIndividualCustomerCommonGenderCodeCollection,
    readSingleIndividualCustomerCommonGenderCodeCollection,
    readIndividualCustomerCommonMaritalStatusCodeCollection,
    readSingleIndividualCustomerCommonMaritalStatusCodeCollection,
    readIndividualCustomerCommonNameFormatCountryCodeCollection,
    readSingleIndividualCustomerCommonNameFormatCountryCodeCollection,
    readIndividualCustomerCommonNationalityCountryCodeCollection,
    readSingleIndividualCustomerCommonNationalityCountryCodeCollection,
    readIndividualCustomerCommonNonVerbalCommunicationLanguageCodeCollection,
    readSingleIndividualCustomerCommonNonVerbalCommunicationLanguageCodeCollection,
    readIndividualCustomerCommonOccupationCodeCollection,
    readSingleIndividualCustomerCommonOccupationCodeCollection,
    readIndividualCustomerCompanyPostalCodeCollection,
    readSingleIndividualCustomerCompanyPostalCodeCollection,
    readIndividualCustomerContactPermissionCodeCollection,
    readSingleIndividualCustomerContactPermissionCodeCollection,
    readIndividualCustomerCorrespondenceLanguageCodeCollection,
    readSingleIndividualCustomerCorrespondenceLanguageCodeCollection,
    readIndividualCustomerCountryCodeCollection,
    readSingleIndividualCustomerCountryCodeCollection,
    readIndividualCustomerCustomerABCClassificationCodeCollection,
    readSingleIndividualCustomerCustomerABCClassificationCodeCollection,
    readIndividualCustomerDeliveryBlockCodeCollection,
    readSingleIndividualCustomerDeliveryBlockCodeCollection,
    readIndividualCustomerGenderCodeCollection,
    readSingleIndividualCustomerGenderCodeCollection,
    readIndividualCustomerLanguageCodeCollection,
    readSingleIndividualCustomerLanguageCodeCollection,
    readIndividualCustomerMaritalStatusCodeCollection,
    readSingleIndividualCustomerMaritalStatusCodeCollection,
    readIndividualCustomerNationalityCodeCollection,
    readSingleIndividualCustomerNationalityCodeCollection,
    readIndividualCustomerOrderBlockCodeCollection,
    readSingleIndividualCustomerOrderBlockCodeCollection,
    readIndividualCustomerPOBoxDeviatingCountryCodeCollection,
    readSingleIndividualCustomerPOBoxDeviatingCountryCodeCollection,
    readIndividualCustomerPOBoxDeviatingRegionCodeCollection,
    readSingleIndividualCustomerPOBoxDeviatingRegionCodeCollection,
    readIndividualCustomerPOBoxPostalCodeCollection,
    readSingleIndividualCustomerPOBoxPostalCodeCollection,
    readIndividualCustomerPreferredCommunicationMediumTypeCodeCollection,
    readSingleIndividualCustomerPreferredCommunicationMediumTypeCodeCollection,
    readIndividualCustomerPrefixCodeCollection,
    readSingleIndividualCustomerPrefixCodeCollection,
    readIndividualCustomerProfessionCodeCollection,
    readSingleIndividualCustomerProfessionCodeCollection,
    readIndividualCustomerRegionCodeCollection,
    readSingleIndividualCustomerRegionCodeCollection,
    readIndividualCustomerRoleCodeCollection,
    readSingleIndividualCustomerRoleCodeCollection,
    readIndividualCustomerStatusCodeCollection,
    readSingleIndividualCustomerStatusCodeCollection,
    readIndividualCustomerStreetPostalCodeCollection,
    readSingleIndividualCustomerStreetPostalCodeCollection,
    readIndividualCustomerTaxJurisdictionCodeCollection,
    readSingleIndividualCustomerTaxJurisdictionCodeCollection,
    readIndividualCustomerTimeZoneCodeCollection,
    readSingleIndividualCustomerTimeZoneCodeCollection,
    readIndividualCustomerTitleCodeCollection,
    readSingleIndividualCustomerTitleCodeCollection,
    readLeadAttachmentFolderCategoryCodeCollection,
    readSingleLeadAttachmentFolderCategoryCodeCollection,
    readLeadAttachmentFolderTypeCodeCollection,
    readSingleLeadAttachmentFolderTypeCodeCollection,
    readLeadBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readSingleLeadBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readLeadBusinessDocumentReferenceItemTypeCodeCollection,
    readSingleLeadBusinessDocumentReferenceItemTypeCodeCollection,
    readLeadBusinessDocumentReferenceTypeCodeCollection,
    readSingleLeadBusinessDocumentReferenceTypeCodeCollection,
    readLeadConversionStatusCodeCollection,
    readSingleLeadConversionStatusCodeCollection,
    readLeadGroupCodeCollection,
    readSingleLeadGroupCodeCollection,
    readLeadInvolvedPartiesRoleCodeCollection,
    readSingleLeadInvolvedPartiesRoleCodeCollection,
    readLeadLeadConsistencyCodeCollection,
    readSingleLeadLeadConsistencyCodeCollection,
    readLeadPriorityCodeCollection,
    readSingleLeadPriorityCodeCollection,
    readLeadQualificationLevelCodeCollection,
    readSingleLeadQualificationLevelCodeCollection,
    readLeadReasonForStatusCodeCollection,
    readSingleLeadReasonForStatusCodeCollection,
    readLeadSalesAndMarketingTeamRoleCategoryCodeCollection,
    readSingleLeadSalesAndMarketingTeamRoleCategoryCodeCollection,
    readLeadSalesAndMarketingTeamRoleCodeCollection,
    readSingleLeadSalesAndMarketingTeamRoleCodeCollection,
    readLeadSourceCodeCollection,
    readSingleLeadSourceCodeCollection,
    readLeadStatusCodeCollection,
    readSingleLeadStatusCodeCollection,
    readLeanLeadAPPTaskTypeCollection,
    readSingleLeanLeadAPPTaskTypeCollection,
    readLeanLeadActiveMonthCollection,
    readSingleLeanLeadActiveMonthCollection,
    readLeanLeadActiveQuarterCollection,
    readSingleLeanLeadActiveQuarterCollection,
    readLeanLeadApprovalStatusCodeCollection,
    readSingleLeanLeadApprovalStatusCodeCollection,
    readLeanLeadApprovalStatusCollection,
    readSingleLeanLeadApprovalStatusCollection,
    readLeanLeadBusinessTransactionDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readSingleLeanLeadBusinessTransactionDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readLeanLeadBusinessTransactionDocumentReferenceItemTypeCodeCollection,
    readSingleLeanLeadBusinessTransactionDocumentReferenceItemTypeCodeCollection,
    readLeanLeadBusinessTransactionDocumentReferenceTypeCodeCollection,
    readSingleLeanLeadBusinessTransactionDocumentReferenceTypeCodeCollection,
    readLeanLeadBuyMethod2Collection,
    readSingleLeanLeadBuyMethod2Collection,
    readLeanLeadCertificateTyepCollection,
    readSingleLeanLeadCertificateTyepCollection,
    readLeanLeadConsistencyStatusCodeCollection,
    readSingleLeanLeadConsistencyStatusCodeCollection,
    readLeanLeadCountryCollection,
    readSingleLeanLeadCountryCollection,
    readLeanLeadCreatSoucreCollection,
    readSingleLeanLeadCreatSoucreCollection,
    readLeanLeadCustomerIntentioncontentCollection,
    readSingleLeanLeadCustomerIntentioncontentCollection,
    readLeanLeadDepositAmountcurrencyCodeCollection,
    readSingleLeanLeadDepositAmountcurrencyCodeCollection,
    readLeanLeadDistributionChannelCodeCollection,
    readSingleLeanLeadDistributionChannelCodeCollection,
    readLeanLeadDivisionCodeCollection,
    readSingleLeanLeadDivisionCodeCollection,
    readLeanLeadExpectedRevenueCurrencyCodeCollection,
    readSingleLeanLeadExpectedRevenueCurrencyCodeCollection,
    readLeanLeadExternalPartyRoleCategoryCodeCollection,
    readSingleLeanLeadExternalPartyRoleCategoryCodeCollection,
    readLeanLeadExternalPartyRoleCodeCollection,
    readSingleLeanLeadExternalPartyRoleCodeCollection,
    readLeanLeadGenderCollection,
    readSingleLeanLeadGenderCollection,
    readLeanLeadGroupCodeCollection,
    readSingleLeanLeadGroupCodeCollection,
    readLeanLeadIntentionDiscountAmountcurrencyCodeCollection,
    readSingleLeanLeadIntentionDiscountAmountcurrencyCodeCollection,
    readLeanLeadInvoiceAmountcurrencyCodeCollection,
    readSingleLeanLeadInvoiceAmountcurrencyCodeCollection,
    readLeanLeadItemunitCodeCollection,
    readSingleLeanLeadItemunitCodeCollection,
    readLeanLeadLeadLevelCollection,
    readSingleLeanLeadLeadLevelCollection,
    readLeanLeadLeadOwnerShipcontentCollection,
    readSingleLeanLeadLeadOwnerShipcontentCollection,
    readLeanLeadLifeCycleStatusCodeCollection,
    readSingleLeanLeadLifeCycleStatusCodeCollection,
    readLeanLeadLoseReason2contentCollection,
    readSingleLeanLeadLoseReason2contentCollection,
    readLeanLeadMainPurchaseFocuscontentCollection,
    readSingleLeanLeadMainPurchaseFocuscontentCollection,
    readLeanLeadMaritalStatuscontentCollection,
    readSingleLeanLeadMaritalStatuscontentCollection,
    readLeanLeadNameLanguageCodeCollection,
    readSingleLeanLeadNameLanguageCodeCollection,
    readLeanLeadOccupationcontentCollection,
    readSingleLeanLeadOccupationcontentCollection,
    readLeanLeadOriginTypeCodeCollection,
    readSingleLeanLeadOriginTypeCodeCollection,
    readLeanLeadPaymentcontentCollection,
    readSingleLeanLeadPaymentcontentCollection,
    readLeanLeadPriorityCodeCollection,
    readSingleLeanLeadPriorityCodeCollection,
    readLeanLeadProcessingTypeCodeleaCollection,
    readSingleLeanLeadProcessingTypeCodeleaCollection,
    readLeanLeadPurchaseUsecontentCollection,
    readSingleLeanLeadPurchaseUsecontentCollection,
    readLeanLeadQualificationLevelCodeCollection,
    readSingleLeanLeadQualificationLevelCodeCollection,
    readLeanLeadRegioncontentCollection,
    readSingleLeanLeadRegioncontentCollection,
    readLeanLeadResultReasonCodeCollection,
    readSingleLeanLeadResultReasonCodeCollection,
    readLeanLeadSalesAndMarketingTeamRoleCategoryCodeCollection,
    readSingleLeanLeadSalesAndMarketingTeamRoleCategoryCodeCollection,
    readLeanLeadSalesAndMarketingTeamRoleCodeCollection,
    readSingleLeanLeadSalesAndMarketingTeamRoleCodeCollection,
    readLeanLeadUserStatusCodeCollection,
    readSingleLeanLeadUserStatusCodeCollection,
    readMaterialAttachmentFolderCategoryCodeCollection,
    readSingleMaterialAttachmentFolderCategoryCodeCollection,
    readMaterialAttachmentFolderTypeCodeCollection,
    readSingleMaterialAttachmentFolderTypeCodeCollection,
    readObjectIdentifierMappingObjectIdentifierMappingObjectTypeCodeCollection,
    readSingleObjectIdentifierMappingObjectIdentifierMappingObjectTypeCodeCollection,
    readOpportunityAppointmentSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readSingleOpportunityAppointmentSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readOpportunityAppointmentSalesActivitySalesPhaseCodeCollection,
    readSingleOpportunityAppointmentSalesActivitySalesPhaseCodeCollection,
    readOpportunityAppointmentSalesActivityStatusCodeCollection,
    readSingleOpportunityAppointmentSalesActivityStatusCodeCollection,
    readOpportunityAppointmentSalesActivityTypeCodeCollection,
    readSingleOpportunityAppointmentSalesActivityTypeCodeCollection,
    readOpportunityApprovalStatusCodeCollection,
    readSingleOpportunityApprovalStatusCodeCollection,
    readOpportunityAttachmentFolderCategoryCodeCollection,
    readSingleOpportunityAttachmentFolderCategoryCodeCollection,
    readOpportunityAttachmentFolderTypeCodeCollection,
    readSingleOpportunityAttachmentFolderTypeCodeCollection,
    readOpportunityBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readSingleOpportunityBusinessDocumentReferenceBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readOpportunityBusinessDocumentReferenceItemTypeCodeCollection,
    readSingleOpportunityBusinessDocumentReferenceItemTypeCodeCollection,
    readOpportunityBusinessDocumentReferenceTypeCodeCollection,
    readSingleOpportunityBusinessDocumentReferenceTypeCodeCollection,
    readOpportunityConsistencyStatusCodeCollection,
    readSingleOpportunityConsistencyStatusCodeCollection,
    readOpportunityContactAttitudeTowardOpportunityCodeCollection,
    readSingleOpportunityContactAttitudeTowardOpportunityCodeCollection,
    readOpportunityContactRoleCodeCollection,
    readSingleOpportunityContactRoleCodeCollection,
    readOpportunityCustomStatusCodeCollection,
    readSingleOpportunityCustomStatusCodeCollection,
    readOpportunityDistributionChannelCodeCollection,
    readSingleOpportunityDistributionChannelCodeCollection,
    readOpportunityDivisionCodeCollection,
    readSingleOpportunityDivisionCodeCollection,
    readOpportunityDocumentTypeCodeCollection,
    readSingleOpportunityDocumentTypeCodeCollection,
    readOpportunityEMailSalesActivityLifeCycleStatusCodeCollection,
    readSingleOpportunityEMailSalesActivityLifeCycleStatusCodeCollection,
    readOpportunityEMailSalesActivitySalesCyclePhaseCodeCollection,
    readSingleOpportunityEMailSalesActivitySalesCyclePhaseCodeCollection,
    readOpportunityEMailSalesActivityTypeCodeCollection,
    readSingleOpportunityEMailSalesActivityTypeCodeCollection,
    readOpportunityGroupCodeCollection,
    readSingleOpportunityGroupCodeCollection,
    readOpportunityInvolvedPartiesRoleCodeCollection,
    readSingleOpportunityInvolvedPartiesRoleCodeCollection,
    readOpportunityItemTextCollectionLanguageCodeCollection,
    readSingleOpportunityItemTextCollectionLanguageCodeCollection,
    readOpportunityItemTextCollectionTypeCodeCollection,
    readSingleOpportunityItemTextCollectionTypeCodeCollection,
    readOpportunityOriginTypeCodeCollection,
    readSingleOpportunityOriginTypeCodeCollection,
    readOpportunityPhoneCallSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readSingleOpportunityPhoneCallSalesActivityBusinessTransactionDocumentRelationshipRoleCodeCollection,
    readOpportunityPhoneCallSalesActivityLifeCycleStatusCodeCollection,
    readSingleOpportunityPhoneCallSalesActivityLifeCycleStatusCodeCollection,
    readOpportunityPhoneCallSalesActivitySalesCyclePhaseCodeCollection,
    readSingleOpportunityPhoneCallSalesActivitySalesCyclePhaseCodeCollection,
    readOpportunityPhoneCallSalesActivityTypeCodeCollection,
    readSingleOpportunityPhoneCallSalesActivityTypeCodeCollection,
    readOpportunityPriorityCodeCollection,
    readSingleOpportunityPriorityCodeCollection,
    readOpportunityProgressCodeCollection,
    readSingleOpportunityProgressCodeCollection,
    readOpportunityResultReasonCodeCollection,
    readSingleOpportunityResultReasonCodeCollection,
    readOpportunitySalesCycleCodeCollection,
    readSingleOpportunitySalesCycleCodeCollection,
    readOpportunitySalesForecastCategoryCodeCollection,
    readSingleOpportunitySalesForecastCategoryCodeCollection,
    readOpportunitySalesPhaseCodeCollection,
    readSingleOpportunitySalesPhaseCodeCollection,
    readOpportunitySalesTeamRoleCodeCollection,
    readSingleOpportunitySalesTeamRoleCodeCollection,
    readOpportunityStatusCodeCollection,
    readSingleOpportunityStatusCodeCollection,
    readOpportunityTaskSalesActivityLifeCycleStatusCodeCollection,
    readSingleOpportunityTaskSalesActivityLifeCycleStatusCodeCollection,
    readOpportunityTaskSalesActivityPriorityCodeCollection,
    readSingleOpportunityTaskSalesActivityPriorityCodeCollection,
    readOpportunityTaskSalesActivitySalesPhaseCodeCollection,
    readSingleOpportunityTaskSalesActivitySalesPhaseCodeCollection,
    readOpportunityTaskSalesActivityStatusCodeCollection,
    readSingleOpportunityTaskSalesActivityStatusCodeCollection,
    readOpportunityTaskSalesActivityTypeCodeCollection,
    readSingleOpportunityTaskSalesActivityTypeCodeCollection,
    readOpportunityTextCollectionLanguageCodeCollection,
    readSingleOpportunityTextCollectionLanguageCodeCollection,
    readOpportunityTextCollectionTypeCodeCollection,
    readSingleOpportunityTextCollectionTypeCodeCollection,
    readPhoneCallCategoryCodeCollection,
    readSinglePhoneCallCategoryCodeCollection,
    readPhoneCallDirectionCodeCollection,
    readSinglePhoneCallDirectionCodeCollection,
    readPhoneCallParticipantsPhoneCallTypeCodeCollection,
    readSinglePhoneCallParticipantsPhoneCallTypeCodeCollection,
    readPhoneCallParticipantsRoleCodeCollection,
    readSinglePhoneCallParticipantsRoleCodeCollection,
    readPhoneCallPriorityCodeCollection,
    readSinglePhoneCallPriorityCodeCollection,
    readPhoneCallStatusCodeCollection,
    readSinglePhoneCallStatusCodeCollection,
    readPhoneCallTypeCodeCollection,
    readSinglePhoneCallTypeCodeCollection,
    readProductCategoryHierarchyDescriptionlanguageCodeCollection,
    readSingleProductCategoryHierarchyDescriptionlanguageCodeCollection,
    readProductProdcutLifecyclecontentCollection,
    readSingleProductProdcutLifecyclecontentCollection,
    readProductSalesDistributionChannelCodeCollection,
    readSingleProductSalesDistributionChannelCodeCollection,
    readProductSalesLifeCycleStatusCodeCollection,
    readSingleProductSalesLifeCycleStatusCodeCollection,
    readProductSalesSalesMeasureUnitCodeCollection,
    readSingleProductSalesSalesMeasureUnitCodeCollection,
    readProductStatusCodeCollection,
    readSingleProductStatusCodeCollection,
    readProductUnitOfMeasureCodeCollection,
    readSingleProductUnitOfMeasureCodeCollection,
    readProductlanguageCodeCollection,
    readSingleProductlanguageCodeCollection,
    readServiceAssignmentBusinessTransactionDocReferenceReferenceDocumentItemTypeCodeCollection,
    readSingleServiceAssignmentBusinessTransactionDocReferenceReferenceDocumentItemTypeCodeCollection,
    readServiceAssignmentCustomerTypeCodeCollection,
    readSingleServiceAssignmentCustomerTypeCodeCollection,
    readServiceAssignmentDivisionCodeCollection,
    readSingleServiceAssignmentDivisionCodeCollection,
    readServiceAssignmentEndDateTimeZoneCodeCollection,
    readSingleServiceAssignmentEndDateTimeZoneCodeCollection,
    readServiceAssignmentFixedCollection,
    readSingleServiceAssignmentFixedCollection,
    readServiceAssignmentLifeCycleStatusCodeCollection,
    readSingleServiceAssignmentLifeCycleStatusCodeCollection,
    readServiceAssignmentNotesTypeCodeCollection,
    readSingleServiceAssignmentNotesTypeCodeCollection,
    readServiceAssignmentOrganizerTypeCodeCollection,
    readSingleServiceAssignmentOrganizerTypeCodeCollection,
    readServiceAssignmentPrimaryContactTypeCodeCollection,
    readSingleServiceAssignmentPrimaryContactTypeCodeCollection,
    readServiceAssignmentPriorityCollection,
    readSingleServiceAssignmentPriorityCollection,
    readServiceAssignmentProcessingTypeCodeCollection,
    readSingleServiceAssignmentProcessingTypeCodeCollection,
    readServiceAssignmentReleasedCollection,
    readSingleServiceAssignmentReleasedCollection,
    readServiceAssignmentServiceTechnicianTypeCodeCollection,
    readSingleServiceAssignmentServiceTechnicianTypeCodeCollection,
    readServiceAssignmentStartDateTimeZoneCodeCollection,
    readSingleServiceAssignmentStartDateTimeZoneCodeCollection,
    readServiceAssignmentStatusCollection,
    readSingleServiceAssignmentStatusCollection,
    readServiceAssignmentTypeCodeCollection,
    readSingleServiceAssignmentTypeCodeCollection,
    readServiceIssueCategoryCatalogueCategoryTypeCodeCollection,
    readSingleServiceIssueCategoryCatalogueCategoryTypeCodeCollection,
    readServiceIssueCategoryCatalogueLifeCycleStatusCodeCollection,
    readSingleServiceIssueCategoryCatalogueLifeCycleStatusCodeCollection,
    readServiceIssueCategoryCatalogueParentCategoryTypeCodeCollection,
    readSingleServiceIssueCategoryCatalogueParentCategoryTypeCodeCollection,
    readServiceRequestAppointStatusCollection,
    readSingleServiceRequestAppointStatusCollection,
    readServiceRequestApprovalStatusCodeCollection,
    readSingleServiceRequestApprovalStatusCodeCollection,
    readServiceRequestAttachmentFolderCategoryCodeCollection,
    readSingleServiceRequestAttachmentFolderCategoryCodeCollection,
    readServiceRequestAttachmentFolderTypeCodeCollection,
    readSingleServiceRequestAttachmentFolderTypeCodeCollection,
    readServiceRequestAuditStatusCollection,
    readSingleServiceRequestAuditStatusCollection,
    readServiceRequestBusinessTransactionDocumentReferenceRoleCodeCollection,
    readSingleServiceRequestBusinessTransactionDocumentReferenceRoleCodeCollection,
    readServiceRequestBusinessTransactionDocumentReferenceSocialMediaChannelCodeCollection,
    readSingleServiceRequestBusinessTransactionDocumentReferenceSocialMediaChannelCodeCollection,
    readServiceRequestBusinessTransactionDocumentReferenceTypeCodeCollection,
    readSingleServiceRequestBusinessTransactionDocumentReferenceTypeCodeCollection,
    readServiceRequestDataOriginTypeCodeCollection,
    readSingleServiceRequestDataOriginTypeCodeCollection,
    readServiceRequestEscalationStatusCodeCollection,
    readSingleServiceRequestEscalationStatusCodeCollection,
    readServiceRequestHistoricalVersionEscalationStatusCodeCollection,
    readSingleServiceRequestHistoricalVersionEscalationStatusCodeCollection,
    readServiceRequestHistoricalVersionServiceRequestLifeCycleStatusCodeCollection,
    readSingleServiceRequestHistoricalVersionServiceRequestLifeCycleStatusCodeCollection,
    readServiceRequestHistoricalVersionServiceTermsServicePriorityCodeCollection,
    readSingleServiceRequestHistoricalVersionServiceTermsServicePriorityCodeCollection,
    readServiceRequestHistoricalVersionServiceTermsServiceRequestUserLifeCycleStatusCodeCollection,
    readSingleServiceRequestHistoricalVersionServiceTermsServiceRequestUserLifeCycleStatusCodeCollection,
    readServiceRequestItemListServiceRequestExecutionLifeCycleStatusCodeCollection,
    readSingleServiceRequestItemListServiceRequestExecutionLifeCycleStatusCodeCollection,
    readServiceRequestItemScheduleLineTypeCollection,
    readSingleServiceRequestItemScheduleLineTypeCollection,
    readServiceRequestProcessingTypeCodeCollection,
    readSingleServiceRequestProcessingTypeCodeCollection,
    readServiceRequestRequestAssignmentStatusCodeCollection,
    readSingleServiceRequestRequestAssignmentStatusCodeCollection,
    readServiceRequestRequestedEndTimeZoneCodeCollection,
    readSingleServiceRequestRequestedEndTimeZoneCodeCollection,
    readServiceRequestRequestedStartTimeZoneCodeCollection,
    readSingleServiceRequestRequestedStartTimeZoneCodeCollection,
    readServiceRequestRescuedPhaseTypeCollection,
    readSingleServiceRequestRescuedPhaseTypeCollection,
    readServiceRequestRoleCodeCollection,
    readSingleServiceRequestRoleCodeCollection,
    readServiceRequestServicePriorityCodeCollection,
    readSingleServiceRequestServicePriorityCodeCollection,
    readServiceRequestServiceRequestClassificationCodeCollection,
    readSingleServiceRequestServiceRequestClassificationCodeCollection,
    readServiceRequestServiceRequestLifeCycleStatusCodeCollection,
    readSingleServiceRequestServiceRequestLifeCycleStatusCodeCollection,
    readServiceRequestServiceRequestUserLifeCycleStatusCodeCollection,
    readSingleServiceRequestServiceRequestUserLifeCycleStatusCodeCollection,
    readServiceRequestSpecialMarkCollection,
    readSingleServiceRequestSpecialMarkCollection,
    readServiceRequestTextCollectionLanguageCodeCollection,
    readSingleServiceRequestTextCollectionLanguageCodeCollection,
    readServiceRequestTextCollectionTypeCodeCollection,
    readSingleServiceRequestTextCollectionTypeCodeCollection,
    readServiceRequestTicketSourceCollection,
    readSingleServiceRequestTicketSourceCollection,
    readServiceRequestUsedAddressCountryCollection,
    readSingleServiceRequestUsedAddressCountryCollection,
    readServiceRequestUsedAddressLanguageCollection,
    readSingleServiceRequestUsedAddressLanguageCollection,
    readServiceRequestUsedAddressPOBoxPostalCodeCollection,
    readSingleServiceRequestUsedAddressPOBoxPostalCodeCollection,
    readServiceRequestUsedAddressPostalCodeCollection,
    readSingleServiceRequestUsedAddressPostalCodeCollection,
    readServiceRequestUsedAddressStateCollection,
    readSingleServiceRequestUsedAddressStateCollection,
    readServiceRequestlanguageCodeCollection,
    readSingleServiceRequestlanguageCodeCollection,
    readTaskCategoryCodeCollection,
    readSingleTaskCategoryCodeCollection,
    readTaskDataOriginTypeCodeCollection,
    readSingleTaskDataOriginTypeCodeCollection,
    readTaskInvolvedPartiesRoleCategoryCodeCollection,
    readSingleTaskInvolvedPartiesRoleCategoryCodeCollection,
    readTaskInvolvedPartiesRoleCodeCollection,
    readSingleTaskInvolvedPartiesRoleCodeCollection,
    readTaskInvolvedPartiesTaskTypeCodeCollection,
    readSingleTaskInvolvedPartiesTaskTypeCodeCollection,
    readTaskPriorityCodeCollection,
    readSingleTaskPriorityCodeCollection,
    readTaskStatusCodeCollection,
    readSingleTaskStatusCodeCollection,
    readTaskTypeCodeCollection,
    readSingleTaskTypeCodeCollection,
    readUserDateFormatCodeCollection,
    readSingleUserDateFormatCodeCollection,
    readUserDecimalFormatCodeCollection,
    readSingleUserDecimalFormatCodeCollection,
    readUserLifeCycleStatusCodeCollection,
    readSingleUserLifeCycleStatusCodeCollection,
    readUserLogonLanguageCodeCollection,
    readSingleUserLogonLanguageCodeCollection,
    readUserPasswordPolicyCodeCollection,
    readSingleUserPasswordPolicyCodeCollection,
    readUserTimeFormatCodeCollection,
    readSingleUserTimeFormatCodeCollection,
    readUserTimeZoneCodeCollection,
    readSingleUserTimeZoneCodeCollection,
    readUserTypeAssignmentSubscriptionTypeCollection,
    readSingleUserTypeAssignmentSubscriptionTypeCollection,
    readUserTypeAssignmentUserTypeCollection,
    readSingleUserTypeAssignmentUserTypeCollection,
    readUserUserAccountTypeCodeCollection,
    readSingleUserUserAccountTypeCodeCollection,
    readVisitDataOriginTypeCodeCollection,
    readSingleVisitDataOriginTypeCodeCollection,
    readVisitDistributionChannelCollection,
    readSingleVisitDistributionChannelCollection,
    readVisitDivisionCollection,
    readSingleVisitDivisionCollection,
    readVisitGroupCodeCollection,
    readSingleVisitGroupCodeCollection,
    readVisitPartyRoleCodeCollection,
    readSingleVisitPartyRoleCodeCollection,
    readVisitPartyVisitGroupCodeCollection,
    readSingleVisitPartyVisitGroupCodeCollection,
    readVisitPartyVisitTypeCodeCollection,
    readSingleVisitPartyVisitTypeCodeCollection,
    readVisitReferenceReferenceRoleCodeCollection,
    readSingleVisitReferenceReferenceRoleCodeCollection,
    readVisitReferenceTypeCodeCollection,
    readSingleVisitReferenceTypeCodeCollection,
    readVisitReferenceVisitGroupCodeCollection,
    readSingleVisitReferenceVisitGroupCodeCollection,
    readVisitStatusCollection,
    readSingleVisitStatusCollection,
    readVisitTypeCodeCollection,
    readSingleVisitTypeCodeCollection
  },
  AccountAddress: {
    readAccountAddressCollection,
    readSingleAccountAddressCollection,
    createAccountAddressCollection,
    updateAccountAddressCollection,
    replaceAccountAddressCollection,
    deleteSingleAccountAddressCollection
  },
  AccountAttachment: {
    readAccountAttachmentCollection,
    readSingleAccountAttachmentCollection,
    createAccountAttachmentCollection,
    updateAccountAttachmentCollection,
    replaceAccountAttachmentCollection,
    deleteSingleAccountAttachmentCollection
  },
  Account: {
    readAccountCollection,
    readSingleAccountCollection,
    createAccountCollection,
    updateAccountCollection,
    replaceAccountCollection,
    deleteSingleAccountCollection
  },
  AccountContactCommunicationData: {
    readAccountContactCommunicationDataCollection,
    readSingleAccountContactCommunicationDataCollection,
    createAccountContactCommunicationDataCollection,
    updateAccountContactCommunicationDataCollection,
    replaceAccountContactCommunicationDataCollection,
    deleteSingleAccountContactCommunicationDataCollection
  },
  AccountContactRelationship: {
    readAccountContactRelationshipCollection,
    readSingleAccountContactRelationshipCollection,
    createAccountContactRelationshipCollection,
    updateAccountContactRelationshipCollection,
    replaceAccountContactRelationshipCollection,
    deleteSingleAccountContactRelationshipCollection
  },
  AccountContacts: {
    readAccountContactsCollection,
    readSingleAccountContactsCollection,
    createAccountContactsCollection,
    updateAccountContactsCollection,
    replaceAccountContactsCollection,
    deleteSingleAccountContactsCollection
  },
  AccountNotes: {
    readAccountNotesCollection,
    readSingleAccountNotesCollection,
    createAccountNotesCollection,
    updateAccountNotesCollection,
    replaceAccountNotesCollection,
    deleteSingleAccountNotesCollection
  },
  AccountRole: {
    readAccountRoleCollection,
    readSingleAccountRoleCollection,
    createAccountRoleCollection,
    updateAccountRoleCollection,
    replaceAccountRoleCollection,
    deleteSingleAccountRoleCollection
  },
  AccountSalesData: {
    readAccountSalesDataCollection,
    readSingleAccountSalesDataCollection,
    createAccountSalesDataCollection,
    updateAccountSalesDataCollection,
    replaceAccountSalesDataCollection,
    deleteSingleAccountSalesDataCollection
  },
  AccountSalesGroupName: {
    readAccountSalesGroupNameCollection,
    readSingleAccountSalesGroupNameCollection,
    createAccountSalesGroupNameCollection,
    updateAccountSalesGroupNameCollection,
    replaceAccountSalesGroupNameCollection,
    deleteSingleAccountSalesGroupNameCollection
  },
  AccountSalesOfficeName: {
    readAccountSalesOfficeNameCollection,
    readSingleAccountSalesOfficeNameCollection,
    createAccountSalesOfficeNameCollection,
    updateAccountSalesOfficeNameCollection,
    replaceAccountSalesOfficeNameCollection,
    deleteSingleAccountSalesOfficeNameCollection
  },
  AccountSalesOrganisationName: {
    readAccountSalesOrganisationNameCollection,
    readSingleAccountSalesOrganisationNameCollection,
    createAccountSalesOrganisationNameCollection,
    updateAccountSalesOrganisationNameCollection,
    replaceAccountSalesOrganisationNameCollection,
    deleteSingleAccountSalesOrganisationNameCollection
  },
  AccountTeamAddress: {
    readAccountTeamAddressCollection,
    readSingleAccountTeamAddressCollection,
    createAccountTeamAddressCollection,
    updateAccountTeamAddressCollection,
    replaceAccountTeamAddressCollection,
    deleteSingleAccountTeamAddressCollection
  },
  AccountTeam: {
    readAccountTeamCollection,
    readSingleAccountTeamCollection,
    createAccountTeamCollection,
    updateAccountTeamCollection,
    replaceAccountTeamCollection,
    deleteSingleAccountTeamCollection
  },
  AppointmentAttachment: {
    readAppointmentAttachmentCollection,
    readSingleAppointmentAttachmentCollection,
    createAppointmentAttachmentCollection,
    updateAppointmentAttachmentCollection,
    replaceAppointmentAttachmentCollection,
    deleteSingleAppointmentAttachmentCollection
  },
  Appointment: {
    readAppointmentCollection,
    readSingleAppointmentCollection,
    createAppointmentCollection,
    updateAppointmentCollection,
    replaceAppointmentCollection,
    deleteSingleAppointmentCollection
  },
  AppointmentInvolvedParties: {
    readAppointmentInvolvedPartiesCollection,
    readSingleAppointmentInvolvedPartiesCollection,
    createAppointmentInvolvedPartiesCollection,
    updateAppointmentInvolvedPartiesCollection,
    replaceAppointmentInvolvedPartiesCollection,
    deleteSingleAppointmentInvolvedPartiesCollection
  },
  AppointmentNotes: {
    readAppointmentNotesCollection,
    readSingleAppointmentNotesCollection,
    createAppointmentNotesCollection,
    updateAppointmentNotesCollection,
    replaceAppointmentNotesCollection,
    deleteSingleAppointmentNotesCollection
  },
  BusinessPartner: {
    readBusinessPartnerCollection,
    readSingleBusinessPartnerCollection
  },
  ContactAttachment: {
    readContactAttachmentCollection,
    readSingleContactAttachmentCollection,
    createContactAttachmentCollection,
    updateContactAttachmentCollection,
    replaceContactAttachmentCollection,
    deleteSingleContactAttachmentCollection
  },
  ContactBusinessAddress: {
    readContactBusinessAddressCollection,
    readSingleContactBusinessAddressCollection,
    createContactBusinessAddressCollection,
    updateContactBusinessAddressCollection,
    replaceContactBusinessAddressCollection,
    deleteSingleContactBusinessAddressCollection
  },
  ContactBusinessPostalAddress: {
    readContactBusinessPostalAddressCollection,
    readSingleContactBusinessPostalAddressCollection,
    createContactBusinessPostalAddressCollection,
    updateContactBusinessPostalAddressCollection,
    replaceContactBusinessPostalAddressCollection,
    deleteSingleContactBusinessPostalAddressCollection
  },
  Contact: {
    readContactCollection,
    readSingleContactCollection,
    createContactCollection,
    updateContactCollection,
    replaceContactCollection,
    deleteSingleContactCollection,
    readLeanLeadContactCollection,
    readSingleLeanLeadContactCollection,
    createLeanLeadContactCollection,
    updateLeanLeadContactCollection,
    replaceLeanLeadContactCollection,
    deleteSingleLeanLeadContactCollection,
    readOpportunityContactCollection,
    readSingleOpportunityContactCollection,
    createOpportunityContactCollection,
    updateOpportunityContactCollection,
    replaceOpportunityContactCollection,
    deleteSingleOpportunityContactCollection
  },
  ContactCommunicationData: {
    readContactCommunicationDataCollection,
    readSingleContactCommunicationDataCollection,
    createContactCommunicationDataCollection,
    updateContactCommunicationDataCollection,
    replaceContactCommunicationDataCollection,
    deleteSingleContactCommunicationDataCollection
  },
  ContactNotes: {
    readContactNotesCollection,
    readSingleContactNotesCollection,
    createContactNotesCollection,
    updateContactNotesCollection,
    replaceContactNotesCollection,
    deleteSingleContactNotesCollection
  },
  ContactPersonalAddress: {
    readContactPersonalAddressCollection,
    readSingleContactPersonalAddressCollection,
    createContactPersonalAddressCollection,
    updateContactPersonalAddressCollection,
    replaceContactPersonalAddressCollection,
    deleteSingleContactPersonalAddressCollection
  },
  ContactPersonalPostalAddress: {
    readContactPersonalPostalAddressCollection,
    readSingleContactPersonalPostalAddressCollection,
    createContactPersonalPostalAddressCollection,
    updateContactPersonalPostalAddressCollection,
    replaceContactPersonalPostalAddressCollection,
    deleteSingleContactPersonalPostalAddressCollection
  },
  EMailAttachment: {
    readEMailAttachmentCollection,
    readSingleEMailAttachmentCollection,
    createEMailAttachmentCollection,
    updateEMailAttachmentCollection,
    replaceEMailAttachmentCollection,
    deleteSingleEMailAttachmentCollection
  },
  EMailCcRecipients: {
    readEMailCcRecipientsCollection,
    readSingleEMailCcRecipientsCollection,
    createEMailCcRecipientsCollection,
    updateEMailCcRecipientsCollection,
    replaceEMailCcRecipientsCollection,
    deleteSingleEMailCcRecipientsCollection
  },
  EMail: {
    readEMailCollection,
    readSingleEMailCollection,
    createEMailCollection,
    updateEMailCollection,
    replaceEMailCollection,
    deleteSingleEMailCollection
  },
  EMailNotes: {
    readEMailNotesCollection,
    readSingleEMailNotesCollection,
    createEMailNotesCollection,
    updateEMailNotesCollection,
    replaceEMailNotesCollection,
    deleteSingleEMailNotesCollection
  },
  EMailToRecipients: {
    readEMailToRecipientsCollection,
    readSingleEMailToRecipientsCollection,
    createEMailToRecipientsCollection,
    updateEMailToRecipientsCollection,
    replaceEMailToRecipientsCollection,
    deleteSingleEMailToRecipientsCollection
  },
  EmailBusinessTransactionDocumentReference: {
    readEmailBusinessTransactionDocumentReferenceCollection,
    readSingleEmailBusinessTransactionDocumentReferenceCollection,
    createEmailBusinessTransactionDocumentReferenceCollection,
    updateEmailBusinessTransactionDocumentReferenceCollection,
    replaceEmailBusinessTransactionDocumentReferenceCollection,
    deleteSingleEmailBusinessTransactionDocumentReferenceCollection
  },
  EmployeeBusinessAddress: {
    readEmployeeBusinessAddressCollection,
    readSingleEmployeeBusinessAddressCollection,
    createEmployeeBusinessAddressCollection,
    updateEmployeeBusinessAddressCollection,
    replaceEmployeeBusinessAddressCollection,
    deleteSingleEmployeeBusinessAddressCollection
  },
  Employee: {
    readEmployeeCollection,
    readSingleEmployeeCollection,
    createEmployeeCollection,
    updateEmployeeCollection,
    replaceEmployeeCollection,
    deleteSingleEmployeeCollection
  },
  EmployeeCommunicationData: {
    readEmployeeCommunicationDataCollection,
    readSingleEmployeeCommunicationDataCollection,
    createEmployeeCommunicationDataCollection,
    updateEmployeeCommunicationDataCollection,
    replaceEmployeeCommunicationDataCollection,
    deleteSingleEmployeeCommunicationDataCollection
  },
  EmployeeFormattedBusinessAddress: {
    readEmployeeFormattedBusinessAddressCollection,
    readSingleEmployeeFormattedBusinessAddressCollection
  },
  EmployeeValueHelp: {
    readEmployeeValueHelpCollection,
    readSingleEmployeeValueHelpCollection
  },
  ExternalIDMapping: {
    readExternalIDMappingCollection,
    readSingleExternalIDMappingCollection
  },
  IndividualCustomerAttachment: {
    readIndividualCustomerAttachmentCollection,
    readSingleIndividualCustomerAttachmentCollection,
    createIndividualCustomerAttachmentCollection,
    updateIndividualCustomerAttachmentCollection,
    replaceIndividualCustomerAttachmentCollection,
    deleteSingleIndividualCustomerAttachmentCollection
  },
  IndividualCustomer: {
    readIndividualCustomerCollection,
    readSingleIndividualCustomerCollection,
    createIndividualCustomerCollection,
    updateIndividualCustomerCollection,
    replaceIndividualCustomerCollection,
    deleteSingleIndividualCustomerCollection
  },
  IndividualCustomerCommon: {
    readIndividualCustomerCommonCollection,
    readSingleIndividualCustomerCommonCollection,
    createIndividualCustomerCommonCollection,
    updateIndividualCustomerCommonCollection,
    replaceIndividualCustomerCommonCollection,
    deleteSingleIndividualCustomerCommonCollection
  },
  IndividualCustomerNotes: {
    readIndividualCustomerNotesCollection,
    readSingleIndividualCustomerNotesCollection,
    createIndividualCustomerNotesCollection,
    updateIndividualCustomerNotesCollection,
    replaceIndividualCustomerNotesCollection,
    deleteSingleIndividualCustomerNotesCollection
  },
  LeadAttachment: {
    readLeadAttachmentCollection,
    readSingleLeadAttachmentCollection,
    createLeadAttachmentCollection,
    updateLeadAttachmentCollection,
    replaceLeadAttachmentCollection,
    deleteSingleLeadAttachmentCollection
  },
  LeadBusinessDocumentReference: {
    readLeadBusinessDocumentReferenceCollection,
    readSingleLeadBusinessDocumentReferenceCollection,
    createLeadBusinessDocumentReferenceCollection,
    updateLeadBusinessDocumentReferenceCollection,
    replaceLeadBusinessDocumentReferenceCollection,
    deleteSingleLeadBusinessDocumentReferenceCollection
  },
  Lead: {
    readLeadCollection,
    readSingleLeadCollection,
    createLeadCollection,
    updateLeadCollection,
    replaceLeadCollection,
    deleteSingleLeadCollection,
    readLeanLeadCollection,
    readSingleLeanLeadCollection,
    createLeanLeadCollection,
    updateLeanLeadCollection,
    replaceLeanLeadCollection,
    deleteSingleLeanLeadCollection
  },
  LeadInvolvedParties: {
    readLeadInvolvedPartiesCollection,
    readSingleLeadInvolvedPartiesCollection,
    createLeadInvolvedPartiesCollection,
    updateLeadInvolvedPartiesCollection,
    replaceLeadInvolvedPartiesCollection,
    deleteSingleLeadInvolvedPartiesCollection
  },
  LeadProduct: {
    readLeadProductCollection,
    readSingleLeadProductCollection,
    createLeadProductCollection,
    updateLeadProductCollection,
    replaceLeadProductCollection,
    deleteSingleLeadProductCollection
  },
  LeadSalesAndMarketingTeam: {
    readLeadSalesAndMarketingTeamCollection,
    readSingleLeadSalesAndMarketingTeamCollection,
    createLeadSalesAndMarketingTeamCollection,
    updateLeadSalesAndMarketingTeamCollection,
    replaceLeadSalesAndMarketingTeamCollection,
    deleteSingleLeadSalesAndMarketingTeamCollection,
    readLeanLeadSalesAndMarketingTeamCollection,
    readSingleLeanLeadSalesAndMarketingTeamCollection,
    createLeanLeadSalesAndMarketingTeamCollection,
    updateLeanLeadSalesAndMarketingTeamCollection,
    replaceLeanLeadSalesAndMarketingTeamCollection,
    deleteSingleLeanLeadSalesAndMarketingTeamCollection
  },
  LeanLeadAttachmentFolder: {
    readLeanLeadAttachmentFolderCollection,
    readSingleLeanLeadAttachmentFolderCollection,
    createLeanLeadAttachmentFolderCollection,
    updateLeanLeadAttachmentFolderCollection,
    replaceLeanLeadAttachmentFolderCollection,
    deleteSingleLeanLeadAttachmentFolderCollection
  },
  LeanLeadBusinessTransactionDocumentReference: {
    readLeanLeadBusinessTransactionDocumentReferenceCollection,
    readSingleLeanLeadBusinessTransactionDocumentReferenceCollection,
    createLeanLeadBusinessTransactionDocumentReferenceCollection,
    updateLeanLeadBusinessTransactionDocumentReferenceCollection,
    replaceLeanLeadBusinessTransactionDocumentReferenceCollection,
    deleteSingleLeanLeadBusinessTransactionDocumentReferenceCollection
  },
  LeanLeadExternalParty: {
    readLeanLeadExternalPartyCollection,
    readSingleLeanLeadExternalPartyCollection,
    createLeanLeadExternalPartyCollection,
    updateLeanLeadExternalPartyCollection,
    replaceLeanLeadExternalPartyCollection,
    deleteSingleLeanLeadExternalPartyCollection
  },
  LeanLeadItem: {
    readLeanLeadItemCollection,
    readSingleLeanLeadItemCollection,
    createLeanLeadItemCollection,
    updateLeanLeadItemCollection,
    replaceLeanLeadItemCollection,
    deleteSingleLeanLeadItemCollection
  },
  OpportunityAppointmentSalesActivity: {
    readOpportunityAppointmentSalesActivityCollection,
    readSingleOpportunityAppointmentSalesActivityCollection,
    createOpportunityAppointmentSalesActivityCollection,
    updateOpportunityAppointmentSalesActivityCollection,
    replaceOpportunityAppointmentSalesActivityCollection,
    deleteSingleOpportunityAppointmentSalesActivityCollection
  },
  OpportunityAttachment: {
    readOpportunityAttachmentCollection,
    readSingleOpportunityAttachmentCollection,
    createOpportunityAttachmentCollection,
    updateOpportunityAttachmentCollection,
    replaceOpportunityAttachmentCollection,
    deleteSingleOpportunityAttachmentCollection
  },
  OpportunityBusinessDocumentReference: {
    readOpportunityBusinessDocumentReferenceCollection,
    readSingleOpportunityBusinessDocumentReferenceCollection,
    createOpportunityBusinessDocumentReferenceCollection,
    updateOpportunityBusinessDocumentReferenceCollection,
    replaceOpportunityBusinessDocumentReferenceCollection,
    deleteSingleOpportunityBusinessDocumentReferenceCollection
  },
  Opportunity: {
    readOpportunityCollection,
    readSingleOpportunityCollection,
    createOpportunityCollection,
    updateOpportunityCollection,
    replaceOpportunityCollection,
    deleteSingleOpportunityCollection
  },
  OpportunityEMailSalesActivity: {
    readOpportunityEMailSalesActivityCollection,
    readSingleOpportunityEMailSalesActivityCollection,
    createOpportunityEMailSalesActivityCollection,
    updateOpportunityEMailSalesActivityCollection,
    replaceOpportunityEMailSalesActivityCollection,
    deleteSingleOpportunityEMailSalesActivityCollection
  },
  OpportunityInvolvedParties: {
    readOpportunityInvolvedPartiesCollection,
    readSingleOpportunityInvolvedPartiesCollection,
    createOpportunityInvolvedPartiesCollection,
    updateOpportunityInvolvedPartiesCollection,
    replaceOpportunityInvolvedPartiesCollection,
    deleteSingleOpportunityInvolvedPartiesCollection
  },
  OpportunityNotes: {
    readOpportunityNotesCollection,
    readSingleOpportunityNotesCollection,
    createOpportunityNotesCollection,
    updateOpportunityNotesCollection,
    replaceOpportunityNotesCollection,
    deleteSingleOpportunityNotesCollection
  },
  OpportunityPhoneCallSalesActivity: {
    readOpportunityPhoneCallSalesActivityCollection,
    readSingleOpportunityPhoneCallSalesActivityCollection,
    createOpportunityPhoneCallSalesActivityCollection,
    updateOpportunityPhoneCallSalesActivityCollection,
    replaceOpportunityPhoneCallSalesActivityCollection,
    deleteSingleOpportunityPhoneCallSalesActivityCollection
  },
  OpportunityProduct: {
    readOpportunityProductCollection,
    readSingleOpportunityProductCollection,
    createOpportunityProductCollection,
    updateOpportunityProductCollection,
    replaceOpportunityProductCollection,
    deleteSingleOpportunityProductCollection
  },
  OpportunityProductNotes: {
    readOpportunityProductNotesCollection,
    readSingleOpportunityProductNotesCollection,
    createOpportunityProductNotesCollection,
    updateOpportunityProductNotesCollection,
    replaceOpportunityProductNotesCollection,
    deleteSingleOpportunityProductNotesCollection
  },
  OpportunitySalesTeam: {
    readOpportunitySalesTeamCollection,
    readSingleOpportunitySalesTeamCollection,
    createOpportunitySalesTeamCollection,
    updateOpportunitySalesTeamCollection,
    replaceOpportunitySalesTeamCollection,
    deleteSingleOpportunitySalesTeamCollection
  },
  OpportunityTaskSalesActivity: {
    readOpportunityTaskSalesActivityCollection,
    readSingleOpportunityTaskSalesActivityCollection,
    createOpportunityTaskSalesActivityCollection,
    updateOpportunityTaskSalesActivityCollection,
    replaceOpportunityTaskSalesActivityCollection,
    deleteSingleOpportunityTaskSalesActivityCollection
  },
  PhoneCallAttachment: {
    readPhoneCallAttachmentCollection,
    readSinglePhoneCallAttachmentCollection,
    createPhoneCallAttachmentCollection,
    updatePhoneCallAttachmentCollection,
    replacePhoneCallAttachmentCollection,
    deleteSinglePhoneCallAttachmentCollection
  },
  PhoneCall: {
    readPhoneCallCollection,
    readSinglePhoneCallCollection,
    createPhoneCallCollection,
    updatePhoneCallCollection,
    replacePhoneCallCollection,
    deleteSinglePhoneCallCollection
  },
  PhoneCallNotes: {
    readPhoneCallNotesCollection,
    readSinglePhoneCallNotesCollection,
    createPhoneCallNotesCollection,
    updatePhoneCallNotesCollection,
    replacePhoneCallNotesCollection,
    deleteSinglePhoneCallNotesCollection
  },
  PhoneCallParticipants: {
    readPhoneCallParticipantsCollection,
    readSinglePhoneCallParticipantsCollection,
    createPhoneCallParticipantsCollection,
    updatePhoneCallParticipantsCollection,
    replacePhoneCallParticipantsCollection,
    deleteSinglePhoneCallParticipantsCollection
  },
  ProductAttachment: {
    readProductAttachmentCollection,
    readSingleProductAttachmentCollection,
    createProductAttachmentCollection,
    updateProductAttachmentCollection,
    replaceProductAttachmentCollection,
    deleteSingleProductAttachmentCollection
  },
  ProductCategoryAssignment: {
    readProductCategoryAssignmentCollection,
    readSingleProductCategoryAssignmentCollection,
    createProductCategoryAssignmentCollection,
    updateProductCategoryAssignmentCollection,
    replaceProductCategoryAssignmentCollection,
    deleteSingleProductCategoryAssignmentCollection
  },
  ProductCategoryHierarchy: {
    readProductCategoryHierarchyCollection,
    readSingleProductCategoryHierarchyCollection,
    createProductCategoryHierarchyCollection,
    updateProductCategoryHierarchyCollection,
    replaceProductCategoryHierarchyCollection,
    deleteSingleProductCategoryHierarchyCollection
  },
  ProductCategoryHierarchyDescription: {
    readProductCategoryHierarchyDescriptionCollection,
    readSingleProductCategoryHierarchyDescriptionCollection,
    createProductCategoryHierarchyDescriptionCollection,
    updateProductCategoryHierarchyDescriptionCollection,
    replaceProductCategoryHierarchyDescriptionCollection,
    deleteSingleProductCategoryHierarchyDescriptionCollection
  },
  ProductChangedBy: {
    readProductChangedByCollection,
    readSingleProductChangedByCollection,
    createProductChangedByCollection,
    updateProductChangedByCollection,
    replaceProductChangedByCollection,
    deleteSingleProductChangedByCollection
  },
  Product: {
    readProductCollection,
    readSingleProductCollection,
    createProductCollection,
    updateProductCollection,
    replaceProductCollection,
    deleteSingleProductCollection
  },
  ProductSales: {
    readProductSalesCollection,
    readSingleProductSalesCollection,
    createProductSalesCollection,
    updateProductSalesCollection,
    replaceProductSalesCollection,
    deleteSingleProductSalesCollection
  },
  ProductSalesOrganisation: {
    readProductSalesOrganisationCollection,
    readSingleProductSalesOrganisationCollection,
    createProductSalesOrganisationCollection,
    updateProductSalesOrganisationCollection,
    replaceProductSalesOrganisationCollection,
    deleteSingleProductSalesOrganisationCollection
  },
  ServiceAssignmentBusinessTransactionDocReference: {
    readServiceAssignmentBusinessTransactionDocReferenceCollection,
    readSingleServiceAssignmentBusinessTransactionDocReferenceCollection,
    createServiceAssignmentBusinessTransactionDocReferenceCollection,
    updateServiceAssignmentBusinessTransactionDocReferenceCollection,
    replaceServiceAssignmentBusinessTransactionDocReferenceCollection,
    deleteSingleServiceAssignmentBusinessTransactionDocReferenceCollection
  },
  ServiceAssignment: {
    readServiceAssignmentCollection,
    readSingleServiceAssignmentCollection,
    updateServiceAssignmentCollection,
    replaceServiceAssignmentCollection,
    deleteSingleServiceAssignmentCollection
  },
  ServiceAssignmentNotes: {
    readServiceAssignmentNotesCollection,
    readSingleServiceAssignmentNotesCollection,
    createServiceAssignmentNotesCollection,
    updateServiceAssignmentNotesCollection,
    replaceServiceAssignmentNotesCollection,
    deleteSingleServiceAssignmentNotesCollection
  },
  ServiceIssueCategoryCatalogueCategory: {
    readServiceIssueCategoryCatalogueCategoryCollection,
    readSingleServiceIssueCategoryCatalogueCategoryCollection,
    deleteSingleServiceIssueCategoryCatalogueCategoryCollection
  },
  ServiceIssueCategoryCatalogue: {
    readServiceIssueCategoryCatalogueCollection,
    readSingleServiceIssueCategoryCatalogueCollection,
    deleteSingleServiceIssueCategoryCatalogueCollection
  },
  ServiceIssueCategoryCatalogueParentCategory: {
    readServiceIssueCategoryCatalogueParentCategoryCollection,
    readSingleServiceIssueCategoryCatalogueParentCategoryCollection,
    deleteSingleServiceIssueCategoryCatalogueParentCategoryCollection
  },
  ServicePointLocationAddress: {
    readServicePointLocationAddressCollection,
    readSingleServicePointLocationAddressCollection,
    createServicePointLocationAddressCollection,
    updateServicePointLocationAddressCollection,
    replaceServicePointLocationAddressCollection
  },
  ServiceRequestAttachmentFolder: {
    readServiceRequestAttachmentFolderCollection,
    readSingleServiceRequestAttachmentFolderCollection,
    createServiceRequestAttachmentFolderCollection,
    updateServiceRequestAttachmentFolderCollection,
    replaceServiceRequestAttachmentFolderCollection,
    deleteSingleServiceRequestAttachmentFolderCollection
  },
  ServiceRequestBusinessTransactionDocumentReference: {
    readServiceRequestBusinessTransactionDocumentReferenceCollection,
    readSingleServiceRequestBusinessTransactionDocumentReferenceCollection,
    createServiceRequestBusinessTransactionDocumentReferenceCollection,
    updateServiceRequestBusinessTransactionDocumentReferenceCollection,
    replaceServiceRequestBusinessTransactionDocumentReferenceCollection,
    deleteSingleServiceRequestBusinessTransactionDocumentReferenceCollection
  },
  ServiceRequest: {
    readServiceRequestCollection,
    readSingleServiceRequestCollection,
    createServiceRequestCollection,
    updateServiceRequestCollection,
    replaceServiceRequestCollection,
    deleteSingleServiceRequestCollection
  },
  ServiceRequestDescription: {
    readServiceRequestDescriptionCollection,
    readSingleServiceRequestDescriptionCollection,
    createServiceRequestDescriptionCollection,
    updateServiceRequestDescriptionCollection,
    replaceServiceRequestDescriptionCollection,
    deleteSingleServiceRequestDescriptionCollection
  },
  ServiceRequestHistoricalVersion: {
    readServiceRequestHistoricalVersionCollection,
    readSingleServiceRequestHistoricalVersionCollection,
    createServiceRequestHistoricalVersionCollection
  },
  ServiceRequestInteraction: {
    readServiceRequestInteractionCollection,
    readSingleServiceRequestInteractionCollection
  },
  ServiceRequestItem: {
    readServiceRequestItemCollection,
    readSingleServiceRequestItemCollection,
    createServiceRequestItemCollection,
    updateServiceRequestItemCollection,
    replaceServiceRequestItemCollection,
    deleteSingleServiceRequestItemCollection
  },
  ServiceRequestItemScheduleLine: {
    readServiceRequestItemScheduleLineCollection,
    readSingleServiceRequestItemScheduleLineCollection,
    createServiceRequestItemScheduleLineCollection,
    updateServiceRequestItemScheduleLineCollection,
    replaceServiceRequestItemScheduleLineCollection,
    deleteSingleServiceRequestItemScheduleLineCollection
  },
  TaskAttachment: {
    readTaskAttachmentCollection,
    readSingleTaskAttachmentCollection,
    createTaskAttachmentCollection,
    updateTaskAttachmentCollection,
    replaceTaskAttachmentCollection,
    deleteSingleTaskAttachmentCollection
  },
  Task: {
    readTaskCollection,
    readSingleTaskCollection,
    createTaskCollection,
    updateTaskCollection,
    replaceTaskCollection,
    deleteSingleTaskCollection
  },
  TaskInvolvedParties: {
    readTaskInvolvedPartiesCollection,
    readSingleTaskInvolvedPartiesCollection,
    createTaskInvolvedPartiesCollection,
    updateTaskInvolvedPartiesCollection,
    replaceTaskInvolvedPartiesCollection,
    deleteSingleTaskInvolvedPartiesCollection
  },
  TaskNotes: {
    readTaskNotesCollection,
    readSingleTaskNotesCollection,
    createTaskNotesCollection,
    updateTaskNotesCollection,
    replaceTaskNotesCollection,
    deleteSingleTaskNotesCollection
  },
  TimeEntry: {
    readTimeEntryCollection,
    readSingleTimeEntryCollection,
    createTimeEntryCollection,
    updateTimeEntryCollection,
    replaceTimeEntryCollection,
    deleteSingleTimeEntryCollection
  },
  TimeEntryItem: {
    readTimeEntryItemCollection,
    readSingleTimeEntryItemCollection,
    createTimeEntryItemCollection,
    updateTimeEntryItemCollection,
    replaceTimeEntryItemCollection,
    deleteSingleTimeEntryItemCollection
  },
  TimeReport: {
    readTimeReportCollection,
    readSingleTimeReportCollection,
    createTimeReportCollection,
    updateTimeReportCollection,
    replaceTimeReportCollection,
    deleteSingleTimeReportCollection
  },
  User: {
    readUserCollection,
    readSingleUserCollection,
    updateUserCollection,
    replaceUserCollection
  },
  UserSubscription: {
    readUserSubscriptionCollection,
    readSingleUserSubscriptionCollection
  },
  UserTypeAssignment: {
    readUserTypeAssignmentCollection,
    readSingleUserTypeAssignmentCollection,
    createUserTypeAssignmentCollection,
    updateUserTypeAssignmentCollection,
    replaceUserTypeAssignmentCollection,
    deleteSingleUserTypeAssignmentCollection
  },
  VisitAttachment: {
    readVisitAttachmentCollection,
    readSingleVisitAttachmentCollection,
    createVisitAttachmentCollection,
    updateVisitAttachmentCollection,
    replaceVisitAttachmentCollection,
    deleteSingleVisitAttachmentCollection
  },
  Visit: {
    readVisitCollection,
    readSingleVisitCollection,
    createVisitCollection,
    updateVisitCollection,
    replaceVisitCollection,
    deleteSingleVisitCollection
  },
  VisitNotes: {
    readVisitNotesCollection,
    readSingleVisitNotesCollection,
    createVisitNotesCollection,
    updateVisitNotesCollection,
    replaceVisitNotesCollection,
    deleteSingleVisitNotesCollection
  },
  VisitParty: {
    readVisitPartyCollection,
    readSingleVisitPartyCollection,
    createVisitPartyCollection,
    updateVisitPartyCollection,
    replaceVisitPartyCollection,
    deleteSingleVisitPartyCollection
  },
  VisitReference: {
    readVisitReferenceCollection,
    readSingleVisitReferenceCollection,
    createVisitReferenceCollection,
    updateVisitReferenceCollection,
    replaceVisitReferenceCollection,
    deleteSingleVisitReferenceCollection
  }
}  
