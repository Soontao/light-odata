// eslint-disable-next-line
import { OData, ODataQueryParam, ODataFilter, C4CODataResult, C4CEntity, DeferredNavigationProperty, C4CODataSingleResult } from "c4codata";

const metadataUri = "https://my500248.c4c.saphybriscloud.cn/sap/c4c/odata/cust/v1/servicemobileapp/$metadata?sap-label=true"
// set object value to change odata credential
const initCredential = { username: "theosun", password: "71402587" }
export const odata = new OData(metadataUri, initCredential);

/**
 * BO_AppealRoot
 * 
 * @class BO_AppealRoot
 */
export class BO_AppealRoot extends C4CEntity {

  /**
   * 申诉类别
   * @type {Edm.String} 
   */
  AppealType

  /**
   * 申诉内容
   * @type {Edm.String} 
   */
  Content

  /**
   * CreationDateTime
   * @type {Edm.DateTimeOffset} 
   */
  CreationDateTime

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * 状态
   * @type {Edm.String} 
   */
  Status

  /**
   * 
   * @type {Edm.String} 
   */
  StatusText

  /**
   * 业务部门意见1
   * @type {Edm.String} 
   */
  SuggestContent

  /**
   * 业务部门意见2
   * @type {Edm.String} 
   */
  SuggestContent2

  /**
   * 抱怨工单ID
   * @type {Edm.String} 
   */
  TicketID

  /**
   * 工单类型
   * @type {Edm.String} 
   */
  TicketType

  /**
   * 
   * @type {Edm.String} 
   */
  TicketTypeText

}

/**
 * BO_AssignmentHistAssignments
 * 
 * @class BO_AssignmentHistAssignments
 */
export class BO_AssignmentHistAssignments extends C4CEntity {

  /**
   * 工单派发编号
   * @type {Edm.String} 
   */
  AssignmentID

  /**
   * 工单派发内部编号
   * @type {Edm.Guid} 
   */
  AssignmentUUID

  /**
   * 销售服务商团队
   * @type {Edm.Boolean} 
   */
  IsXSFWS

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Parent Object ID
   * @type {Edm.String} 
   */
  ParentObjectID

  /**
   * 处理人前缀
   * @type {Edm.String} 
   */
  PrefixofProcessor

  /**
   * 团队前缀
   * @type {Edm.String} 
   */
  PrefixofTeam

  /**
   * 已分配给
   * @type {Edm.String} 
   */
  ProcessorAssignedID

  /**
   * 工单编号SMS
   * @type {Edm.String} 
   */
  SMSTicketID

  /**
   * 团队
   * @type {Edm.String} 
   */
  TeamAssignedID

  /**
   * 工单客服审核状态
   * @type {Edm.String} 
   */
  TicketAuditStatus

  /**
   * 
   * @type {Edm.String} 
   */
  TicketAuditStatusText

  /**
   * 工单业务支持状态
   * @type {Edm.String} 
   */
  TicketBusinessSupportStatus

  /**
   * 
   * @type {Edm.String} 
   */
  TicketBusinessSupportStatusText

  /**
   * 处理时间
   * @type {Edm.String} 
   */
  TicketProcessingTime

  /**
   * 工单状态
   * @type {Edm.String} 
   */
  TicketRealStatus

  /**
   * 
   * @type {Edm.String} 
   */
  TicketRealStatusText

  /**
   * 工单状态（作废）
   * @type {Edm.String} 
   */
  TicketStatus

  /**
   * 
   * @type {Edm.String} 
   */
  TicketStatusText

  /**
   * 
   * @type {DeferredNavigationProperty|BO_AssignmentHistRoot|BO_AssignmentHistRoot[]} 
   */
  BO_AssignmentHistRoot

}

/**
 * BO_AssignmentHistRoot
 * 
 * @class BO_AssignmentHistRoot
 */
export class BO_AssignmentHistRoot extends C4CEntity {

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * 工单编号
   * @type {Edm.String} 
   */
  TicketID

  /**
   * 
   * @type {DeferredNavigationProperty|BO_AssignmentHistAssignments|BO_AssignmentHistAssignments[]} 
   */
  BO_AssignmentHistAssignments

}

/**
 * BO_DealerRoot
 * 
 * @class BO_DealerRoot
 */
export class BO_DealerRoot extends C4CEntity {

  /**
   * 经销商编号
   * @type {Edm.String} 
   */
  DealerID

  /**
   * 经销商名称
   * @type {Edm.String} 
   */
  DealerName

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * 服务ERP
   * @type {Edm.String} 
   */
  ServiceERP

  /**
   * 整车ERP
   * @type {Edm.String} 
   */
  VehicleERP

}

/**
 * BO_PhoneEventRoot
 * 
 * @class BO_PhoneEventRoot
 */
export class BO_PhoneEventRoot extends C4CEntity {

  /**
   * 事件坐席ID
   * @type {Edm.String} 
   */
  AgentID

  /**
   * 事件DN
   * @type {Edm.String} 
   */
  DN

  /**
   * 事件描述
   * @type {Edm.String} 
   */
  Description

  /**
   * 事件员工ID
   * @type {Edm.String} 
   */
  EmployeeID

  /**
   * 事件当前ConnID
   * @type {Edm.String} 
   */
  EventConnID

  /**
   * 事件类型
   * @type {Edm.String} 
   */
  EventType

  /**
   * 
   * @type {Edm.String} 
   */
  EventTypeText

  /**
   * 休息原因
   * @type {Edm.String} 
   */
  NotReadyReason

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

}

/**
 * BO_ReportPreparationRoot
 * 
 * @class BO_ReportPreparationRoot
 */
export class BO_ReportPreparationRoot extends C4CEntity {

  /**
   * 品牌
   * @type {Edm.String} 
   */
  CarBrand

  /**
   * 
   * @type {Edm.String} 
   */
  CarBrandText

  /**
   * 车主姓名
   * @type {Edm.String} 
   */
  CarOwnerName

  /**
   * 车型描述
   * @type {Edm.String} 
   */
  Car_Desc

  /**
   * CreationDateTime
   * @type {Edm.DateTimeOffset} 
   */
  CreationDateTime

  /**
   * 客户ID
   * @type {Edm.String} 
   */
  CustomerId

  /**
   * 服务商ERP号
   * @type {Edm.String} 
   */
  DealerERPID

  /**
   * 车牌号
   * @type {Edm.String} 
   */
  LicensePlateID

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * 手机号
   * @type {Edm.String} 
   */
  PhoneNo

  /**
   * 报备分类 - 废弃，请使用RPCategory2
   * @type {Edm.String} 
   */
  RPCategory

  /**
   * 报备分类
   * @type {Edm.String} 
   */
  RPCategory2

  /**
   * 
   * @type {Edm.String} 
   */
  RPCategory2Text

  /**
   * 
   * @type {Edm.String} 
   */
  RPCategoryText

  /**
   * 报备内容
   * @type {Edm.String} 
   */
  ReportContent

  /**
   * 网点
   * @type {Edm.String} 
   */
  ServiceID

  /**
   * 销售服务商
   * @type {Edm.String} 
   */
  ServiceName

  /**
   * VIN码
   * @type {Edm.String} 
   */
  VINID

  /**
   * 车辆ID
   * @type {Edm.String} 
   */
  ViechleID

}

/**
 * BO_TV_MappingRoot
 * 
 * @class BO_TV_MappingRoot
 */
export class BO_TV_MappingRoot extends C4CEntity {

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Ticket Type
   * @type {Edm.String} 
   */
  TicketTypeCode2

  /**
   * 
   * @type {Edm.String} 
   */
  TicketTypeCode2Text

  /**
   * VOC Code
   * @type {Edm.String} 
   */
  VOCId

}

/**
 * BO_VOCRoot
 * 
 * @class BO_VOCRoot
 */
export class BO_VOCRoot extends C4CEntity {

  /**
   * VOC Description
   * @type {Edm.String} 
   */
  Description

  /**
   * HasChild
   * @type {Edm.Boolean} 
   */
  HasChild

  /**
   * HasParent
   * @type {Edm.Boolean} 
   */
  HasParent

  /**
   * VOC Code
   * @type {Edm.String} 
   */
  Id

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * Parent Code
   * @type {Edm.String} 
   */
  ParentId

  /**
   * Verified
   * @type {Edm.Boolean} 
   */
  Verified

  /**
   * Deleted Flag
   * @type {Edm.Boolean} 
   */
  toDeleteIndicator

}

/**
 * CodeList
 * 
 * @class CodeList
 */
export class CodeList extends C4CEntity {

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
 * IndividualProductServiceProcessInformation
 * 
 * @class IndividualProductServiceProcessInformation
 */
export class IndividualProductServiceProcessInformation extends C4CEntity {

  /**
   * 批次
   * @type {Edm.String} 
   */
  Batch

  /**
   * 开票日期/购车日期
   * @type {Edm.DateTime} 
   */
  Bill_PurchaseDate

  /**
   * 类型
   * @type {Edm.String} 
   */
  CarOwnerTypecontent

  /**
   * 
   * @type {Edm.String} 
   */
  CarOwnerTypecontentText

  /**
   * 车辆性质
   * @type {Edm.String} 
   */
  CarPropertycontent

  /**
   * 
   * @type {Edm.String} 
   */
  CarPropertycontentText

  /**
   * 购车年限
   * @type {Edm.String} 
   */
  CarPurchaseYear

  /**
   * 车辆级别
   * @type {Edm.String} 
   */
  CarRankcontent

  /**
   * 
   * @type {Edm.String} 
   */
  CarRankcontentText

  /**
   * 售出经销商
   * @type {Edm.String} 
   */
  CarSoldDealer

  /**
   * 售出经销商ERP
   * @type {Edm.String} 
   */
  CarSoldDealerERP

  /**
   * 购车用途
   * @type {Edm.String} 
   */
  CarUsagecontent

  /**
   * 
   * @type {Edm.String} 
   */
  CarUsagecontentText

  /**
   * 合同单位
   * @type {Edm.String} 
   */
  ContractDepartment

  /**
   * 客户编号
   * @type {Edm.String} 
   */
  CustomerID_IndPrd

  /**
   * 交车日期
   * @type {Edm.DateTime} 
   */
  DeliveryDate

  /**
   * ETag
   * @type {Edm.DateTimeOffset} 
   */
  ETag

  /**
   * 发动机号
   * @type {Edm.String} 
   */
  EngineID

  /**
   * 首保到期日
   * @type {Edm.DateTime} 
   */
  FirstInsuranceExpiredDate

  /**
   * 保险到期日
   * @type {Edm.DateTime} 
   */
  InsuranceExpiredDate

  /**
   * 发票号
   * @type {Edm.String} 
   */
  InvoiceNo

  /**
   * 客户反馈开票日期
   * @type {Edm.DateTime} 
   */
  InvoideDateByCustomer

  /**
   * 是否转卖车辆
   * @type {Edm.Boolean} 
   */
  IsResellingVehicle

  /**
   * 是否在保车辆
   * @type {Edm.String} 
   */
  IsVehicleWarrantycontent

  /**
   * 
   * @type {Edm.String} 
   */
  IsVehicleWarrantycontentText

  /**
   * 二级经销商名称
   * @type {Edm.String} 
   */
  Level2DealerName

  /**
   * 上牌日期
   * @type {Edm.DateTime} 
   */
  LicensePlateDate

  /**
   * 车牌号
   * @type {Edm.String} 
   */
  LicensePlateID_IP

  /**
   * 贷款渠道
   * @type {Edm.String} 
   */
  LoanChannel

  /**
   * 
   * @type {Edm.String} 
   */
  LoanChannelText

  /**
   * 贷款方案
   * @type {Edm.String} 
   */
  LoanType

  /**
   * 
   * @type {Edm.String} 
   */
  LoanTypeText

  /**
   * 公告号
   * @type {Edm.String} 
   */
  NotificationNumber

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * 原始经销商ERP
   * @type {Edm.String} 
   */
  OriginalDealerERP

  /**
   * 出库日期
   * @type {Edm.DateTime} 
   */
  OutboundDeliveryDate

  /**
   * 付款方式
   * @type {Edm.String} 
   */
  PaymentTypeBCOcontent

  /**
   * 
   * @type {Edm.String} 
   */
  PaymentTypeBCOcontentText

  /**
   * Purchase Date Time
   * @type {Edm.String} 
   */
  PurchaseDateTime

  /**
   * 曾购车品牌
   * @type {Edm.String} 
   */
  PurchasedCarBrand

  /**
   * 合格证号
   * @type {Edm.String} 
   */
  QualifiedID

  /**
   * Serial ID
   * @type {Edm.String} 
   */
  SerialID

  /**
   * 是否特销
   * @type {Edm.String} 
   */
  SpecialPricecontent

  /**
   * 
   * @type {Edm.String} 
   */
  SpecialPricecontentText

  /**
   * 特销号
   * @type {Edm.String} 
   */
  SpecialSalesNO

  /**
   * 车型名称
   * @type {Edm.String} 
   */
  VIC_ModelName

  /**
   * 车辆品牌
   * @type {Edm.String} 
   */
  VehicleBrand

}

/**
 * ServiceRequest
 * 
 * @class ServiceRequest
 */
export class ServiceRequest extends C4CEntity {

  /**
   * 客户确认结果
   * @type {Edm.String} 
   */
  ArrivalConfirmbyCust

  /**
   * 
   * @type {Edm.String} 
   */
  ArrivalConfirmbyCustText

  /**
   * 派发超时提醒时间
   * @type {Edm.DateTimeOffset} 
   */
  AssignOverTime

  /**
   * 派发时间-APP
   * @type {Edm.String} 
   */
  AssigningTimeStr

  /**
   * 底盘号
   * @type {Edm.String} 
   */
  CarsSerialID

  /**
   * 闭环超时提醒时间
   * @type {Edm.DateTimeOffset} 
   */
  CloseOverTime

  /**
   * 抱怨级别
   * @type {Edm.String} 
   */
  ComplainClasscontent

  /**
   * 
   * @type {Edm.String} 
   */
  ComplainClasscontentText

  /**
   * CreationDateTime
   * @type {Edm.DateTimeOffset} 
   */
  CreationDateTime

  /**
   * 车主姓名
   * @type {Edm.String} 
   */
  Customer

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
   * 是否更换备件
   * @type {Edm.String} 
   */
  IsChangeSparePart

  /**
   * 
   * @type {Edm.String} 
   */
  IsChangeSparePartText

  /**
   * 销售服务商是否回复
   * @type {Edm.Boolean} 
   */
  IsDealerReply

  /**
   * 第三方拖车
   * @type {Edm.Boolean} 
   */
  IsNeedTrailer

  /**
   * 是否产品质量原因
   * @type {Edm.String} 
   */
  IsProQuality

  /**
   * 
   * @type {Edm.String} 
   */
  IsProQualityText

  /**
   * 车牌号（废弃）
   * @type {Edm.String} 
   */
  LicensePlateID

  /**
   * Description
   * @type {Edm.String} 
   */
  Name

  /**
   * 需要救援状态
   * @type {Edm.String} 
   */
  NeedRescueStatus

  /**
   * 
   * @type {Edm.String} 
   */
  NeedRescueStatusText

  /**
   * 未更换备件原因
   * @type {Edm.String} 
   */
  NoChangePartReason

  /**
   * 
   * @type {Edm.String} 
   */
  NoChangePartReasonText

  /**
   * Object ID
   * @type {Edm.String} 
   */
  ObjectID

  /**
   * PUserID
   * @type {Edm.String} 
   */
  PUserID

  /**
   * 手机号
   * @type {Edm.String} 
   */
  PhoneNo

  /**
   * 产品质量具体原因
   * @type {Edm.String} 
   */
  ProQuality

  /**
   * 
   * @type {Edm.String} 
   */
  ProQualityText

  /**
   * Ticket Type
   * @type {Edm.String} 
   */
  ProcessingTypeCode

  /**
   * 
   * @type {Edm.String} 
   */
  ProcessingTypeCodeText

  /**
   * 催单次数
   * @type {Edm.Decimal} 
   */
  RemindingCount

  /**
   * ServiceAndSupportTeam
   * @type {Edm.String} 
   */
  ServiceAndSupportTeam

  /**
   * Status
   * @type {Edm.String} 
   */
  ServiceRequestUserLifeCycleStatusCode

  /**
   * 
   * @type {Edm.String} 
   */
  ServiceRequestUserLifeCycleStatusCodeText

  /**
   * VIN码
   * @type {Edm.String} 
   */
  VINID

}

/**
 * BO_AppealRootType
 * 
 * @class BO_AppealRootType
 */
export class BO_AppealRootType {

  /**
   * 申诉类别
   * @type {string} 
   */
  static AppealType = "AppealType"

  /**
   * 申诉内容
   * @type {string} 
   */
  static Content = "Content"

  /**
   * CreationDateTime
   * @type {string} 
   */
  static CreationDateTime = "CreationDateTime"

  /**
   * ETag
   * @type {string} 
   */
  static ETag = "ETag"

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * 状态
   * @type {string} 
   */
  static Status = "Status"

  /**
   * 
   * @type {string} 
   */
  static StatusText = "StatusText"

  /**
   * 业务部门意见1
   * @type {string} 
   */
  static SuggestContent = "SuggestContent"

  /**
   * 业务部门意见2
   * @type {string} 
   */
  static SuggestContent2 = "SuggestContent2"

  /**
   * 抱怨工单ID
   * @type {string} 
   */
  static TicketID = "TicketID"

  /**
   * 工单类型
   * @type {string} 
   */
  static TicketType = "TicketType"

  /**
   * 
   * @type {string} 
   */
  static TicketTypeText = "TicketTypeText"

}

/**
 * BO_AssignmentHistAssignmentsType
 * 
 * @class BO_AssignmentHistAssignmentsType
 */
export class BO_AssignmentHistAssignmentsType {

  /**
   * 工单派发编号
   * @type {string} 
   */
  static AssignmentID = "AssignmentID"

  /**
   * 工单派发内部编号
   * @type {string} 
   */
  static AssignmentUUID = "AssignmentUUID"

  /**
   * 销售服务商团队
   * @type {string} 
   */
  static IsXSFWS = "IsXSFWS"

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * Parent Object ID
   * @type {string} 
   */
  static ParentObjectID = "ParentObjectID"

  /**
   * 处理人前缀
   * @type {string} 
   */
  static PrefixofProcessor = "PrefixofProcessor"

  /**
   * 团队前缀
   * @type {string} 
   */
  static PrefixofTeam = "PrefixofTeam"

  /**
   * 已分配给
   * @type {string} 
   */
  static ProcessorAssignedID = "ProcessorAssignedID"

  /**
   * 工单编号SMS
   * @type {string} 
   */
  static SMSTicketID = "SMSTicketID"

  /**
   * 团队
   * @type {string} 
   */
  static TeamAssignedID = "TeamAssignedID"

  /**
   * 工单客服审核状态
   * @type {string} 
   */
  static TicketAuditStatus = "TicketAuditStatus"

  /**
   * 
   * @type {string} 
   */
  static TicketAuditStatusText = "TicketAuditStatusText"

  /**
   * 工单业务支持状态
   * @type {string} 
   */
  static TicketBusinessSupportStatus = "TicketBusinessSupportStatus"

  /**
   * 
   * @type {string} 
   */
  static TicketBusinessSupportStatusText = "TicketBusinessSupportStatusText"

  /**
   * 处理时间
   * @type {string} 
   */
  static TicketProcessingTime = "TicketProcessingTime"

  /**
   * 工单状态
   * @type {string} 
   */
  static TicketRealStatus = "TicketRealStatus"

  /**
   * 
   * @type {string} 
   */
  static TicketRealStatusText = "TicketRealStatusText"

  /**
   * 工单状态（作废）
   * @type {string} 
   */
  static TicketStatus = "TicketStatus"

  /**
   * 
   * @type {string} 
   */
  static TicketStatusText = "TicketStatusText"

  /**
   * 
   * @type {string} 
   */
  static BO_AssignmentHistRoot = BO_AssignmentHistRoot

}

/**
 * BO_AssignmentHistRootType
 * 
 * @class BO_AssignmentHistRootType
 */
export class BO_AssignmentHistRootType {

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * 工单编号
   * @type {string} 
   */
  static TicketID = "TicketID"

  /**
   * 
   * @type {string} 
   */
  static BO_AssignmentHistAssignments = BO_AssignmentHistAssignments

}

/**
 * BO_DealerRootType
 * 
 * @class BO_DealerRootType
 */
export class BO_DealerRootType {

  /**
   * 经销商编号
   * @type {string} 
   */
  static DealerID = "DealerID"

  /**
   * 经销商名称
   * @type {string} 
   */
  static DealerName = "DealerName"

  /**
   * ETag
   * @type {string} 
   */
  static ETag = "ETag"

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * 服务ERP
   * @type {string} 
   */
  static ServiceERP = "ServiceERP"

  /**
   * 整车ERP
   * @type {string} 
   */
  static VehicleERP = "VehicleERP"

}

/**
 * BO_PhoneEventRootType
 * 
 * @class BO_PhoneEventRootType
 */
export class BO_PhoneEventRootType {

  /**
   * 事件坐席ID
   * @type {string} 
   */
  static AgentID = "AgentID"

  /**
   * 事件DN
   * @type {string} 
   */
  static DN = "DN"

  /**
   * 事件描述
   * @type {string} 
   */
  static Description = "Description"

  /**
   * 事件员工ID
   * @type {string} 
   */
  static EmployeeID = "EmployeeID"

  /**
   * 事件当前ConnID
   * @type {string} 
   */
  static EventConnID = "EventConnID"

  /**
   * 事件类型
   * @type {string} 
   */
  static EventType = "EventType"

  /**
   * 
   * @type {string} 
   */
  static EventTypeText = "EventTypeText"

  /**
   * 休息原因
   * @type {string} 
   */
  static NotReadyReason = "NotReadyReason"

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

}

/**
 * BO_ReportPreparationRootType
 * 
 * @class BO_ReportPreparationRootType
 */
export class BO_ReportPreparationRootType {

  /**
   * 品牌
   * @type {string} 
   */
  static CarBrand = "CarBrand"

  /**
   * 
   * @type {string} 
   */
  static CarBrandText = "CarBrandText"

  /**
   * 车主姓名
   * @type {string} 
   */
  static CarOwnerName = "CarOwnerName"

  /**
   * 车型描述
   * @type {string} 
   */
  static Car_Desc = "Car_Desc"

  /**
   * CreationDateTime
   * @type {string} 
   */
  static CreationDateTime = "CreationDateTime"

  /**
   * 客户ID
   * @type {string} 
   */
  static CustomerId = "CustomerId"

  /**
   * 服务商ERP号
   * @type {string} 
   */
  static DealerERPID = "DealerERPID"

  /**
   * 车牌号
   * @type {string} 
   */
  static LicensePlateID = "LicensePlateID"

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * 手机号
   * @type {string} 
   */
  static PhoneNo = "PhoneNo"

  /**
   * 报备分类 - 废弃，请使用RPCategory2
   * @type {string} 
   */
  static RPCategory = "RPCategory"

  /**
   * 报备分类
   * @type {string} 
   */
  static RPCategory2 = "RPCategory2"

  /**
   * 
   * @type {string} 
   */
  static RPCategory2Text = "RPCategory2Text"

  /**
   * 
   * @type {string} 
   */
  static RPCategoryText = "RPCategoryText"

  /**
   * 报备内容
   * @type {string} 
   */
  static ReportContent = "ReportContent"

  /**
   * 网点
   * @type {string} 
   */
  static ServiceID = "ServiceID"

  /**
   * 销售服务商
   * @type {string} 
   */
  static ServiceName = "ServiceName"

  /**
   * VIN码
   * @type {string} 
   */
  static VINID = "VINID"

  /**
   * 车辆ID
   * @type {string} 
   */
  static ViechleID = "ViechleID"

}

/**
 * BO_TV_MappingRootType
 * 
 * @class BO_TV_MappingRootType
 */
export class BO_TV_MappingRootType {

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * Ticket Type
   * @type {string} 
   */
  static TicketTypeCode2 = "TicketTypeCode2"

  /**
   * 
   * @type {string} 
   */
  static TicketTypeCode2Text = "TicketTypeCode2Text"

  /**
   * VOC Code
   * @type {string} 
   */
  static VOCId = "VOCId"

}

/**
 * BO_VOCRootType
 * 
 * @class BO_VOCRootType
 */
export class BO_VOCRootType {

  /**
   * VOC Description
   * @type {string} 
   */
  static Description = "Description"

  /**
   * HasChild
   * @type {string} 
   */
  static HasChild = "HasChild"

  /**
   * HasParent
   * @type {string} 
   */
  static HasParent = "HasParent"

  /**
   * VOC Code
   * @type {string} 
   */
  static Id = "Id"

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * Parent Code
   * @type {string} 
   */
  static ParentId = "ParentId"

  /**
   * Verified
   * @type {string} 
   */
  static Verified = "Verified"

  /**
   * Deleted Flag
   * @type {string} 
   */
  static toDeleteIndicator = "toDeleteIndicator"

}

/**
 * CodeListType
 * 
 * @class CodeListType
 */
export class CodeListType {

  /**
   * Code
   * @type {string} 
   */
  static Code = "Code"

  /**
   * Description
   * @type {string} 
   */
  static Description = "Description"

}

/**
 * IndividualProductServiceProcessInformationType
 * 
 * @class IndividualProductServiceProcessInformationType
 */
export class IndividualProductServiceProcessInformationType {

  /**
   * 批次
   * @type {string} 
   */
  static Batch = "Batch"

  /**
   * 开票日期/购车日期
   * @type {string} 
   */
  static Bill_PurchaseDate = "Bill_PurchaseDate"

  /**
   * 类型
   * @type {string} 
   */
  static CarOwnerTypecontent = "CarOwnerTypecontent"

  /**
   * 
   * @type {string} 
   */
  static CarOwnerTypecontentText = "CarOwnerTypecontentText"

  /**
   * 车辆性质
   * @type {string} 
   */
  static CarPropertycontent = "CarPropertycontent"

  /**
   * 
   * @type {string} 
   */
  static CarPropertycontentText = "CarPropertycontentText"

  /**
   * 购车年限
   * @type {string} 
   */
  static CarPurchaseYear = "CarPurchaseYear"

  /**
   * 车辆级别
   * @type {string} 
   */
  static CarRankcontent = "CarRankcontent"

  /**
   * 
   * @type {string} 
   */
  static CarRankcontentText = "CarRankcontentText"

  /**
   * 售出经销商
   * @type {string} 
   */
  static CarSoldDealer = "CarSoldDealer"

  /**
   * 售出经销商ERP
   * @type {string} 
   */
  static CarSoldDealerERP = "CarSoldDealerERP"

  /**
   * 购车用途
   * @type {string} 
   */
  static CarUsagecontent = "CarUsagecontent"

  /**
   * 
   * @type {string} 
   */
  static CarUsagecontentText = "CarUsagecontentText"

  /**
   * 合同单位
   * @type {string} 
   */
  static ContractDepartment = "ContractDepartment"

  /**
   * 客户编号
   * @type {string} 
   */
  static CustomerID_IndPrd = "CustomerID_IndPrd"

  /**
   * 交车日期
   * @type {string} 
   */
  static DeliveryDate = "DeliveryDate"

  /**
   * ETag
   * @type {string} 
   */
  static ETag = "ETag"

  /**
   * 发动机号
   * @type {string} 
   */
  static EngineID = "EngineID"

  /**
   * 首保到期日
   * @type {string} 
   */
  static FirstInsuranceExpiredDate = "FirstInsuranceExpiredDate"

  /**
   * 保险到期日
   * @type {string} 
   */
  static InsuranceExpiredDate = "InsuranceExpiredDate"

  /**
   * 发票号
   * @type {string} 
   */
  static InvoiceNo = "InvoiceNo"

  /**
   * 客户反馈开票日期
   * @type {string} 
   */
  static InvoideDateByCustomer = "InvoideDateByCustomer"

  /**
   * 是否转卖车辆
   * @type {string} 
   */
  static IsResellingVehicle = "IsResellingVehicle"

  /**
   * 是否在保车辆
   * @type {string} 
   */
  static IsVehicleWarrantycontent = "IsVehicleWarrantycontent"

  /**
   * 
   * @type {string} 
   */
  static IsVehicleWarrantycontentText = "IsVehicleWarrantycontentText"

  /**
   * 二级经销商名称
   * @type {string} 
   */
  static Level2DealerName = "Level2DealerName"

  /**
   * 上牌日期
   * @type {string} 
   */
  static LicensePlateDate = "LicensePlateDate"

  /**
   * 车牌号
   * @type {string} 
   */
  static LicensePlateID_IP = "LicensePlateID_IP"

  /**
   * 贷款渠道
   * @type {string} 
   */
  static LoanChannel = "LoanChannel"

  /**
   * 
   * @type {string} 
   */
  static LoanChannelText = "LoanChannelText"

  /**
   * 贷款方案
   * @type {string} 
   */
  static LoanType = "LoanType"

  /**
   * 
   * @type {string} 
   */
  static LoanTypeText = "LoanTypeText"

  /**
   * 公告号
   * @type {string} 
   */
  static NotificationNumber = "NotificationNumber"

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * 原始经销商ERP
   * @type {string} 
   */
  static OriginalDealerERP = "OriginalDealerERP"

  /**
   * 出库日期
   * @type {string} 
   */
  static OutboundDeliveryDate = "OutboundDeliveryDate"

  /**
   * 付款方式
   * @type {string} 
   */
  static PaymentTypeBCOcontent = "PaymentTypeBCOcontent"

  /**
   * 
   * @type {string} 
   */
  static PaymentTypeBCOcontentText = "PaymentTypeBCOcontentText"

  /**
   * Purchase Date Time
   * @type {string} 
   */
  static PurchaseDateTime = "PurchaseDateTime"

  /**
   * 曾购车品牌
   * @type {string} 
   */
  static PurchasedCarBrand = "PurchasedCarBrand"

  /**
   * 合格证号
   * @type {string} 
   */
  static QualifiedID = "QualifiedID"

  /**
   * Serial ID
   * @type {string} 
   */
  static SerialID = "SerialID"

  /**
   * 是否特销
   * @type {string} 
   */
  static SpecialPricecontent = "SpecialPricecontent"

  /**
   * 
   * @type {string} 
   */
  static SpecialPricecontentText = "SpecialPricecontentText"

  /**
   * 特销号
   * @type {string} 
   */
  static SpecialSalesNO = "SpecialSalesNO"

  /**
   * 车型名称
   * @type {string} 
   */
  static VIC_ModelName = "VIC_ModelName"

  /**
   * 车辆品牌
   * @type {string} 
   */
  static VehicleBrand = "VehicleBrand"

}

/**
 * ServiceRequestType
 * 
 * @class ServiceRequestType
 */
export class ServiceRequestType {

  /**
   * 客户确认结果
   * @type {string} 
   */
  static ArrivalConfirmbyCust = "ArrivalConfirmbyCust"

  /**
   * 
   * @type {string} 
   */
  static ArrivalConfirmbyCustText = "ArrivalConfirmbyCustText"

  /**
   * 派发超时提醒时间
   * @type {string} 
   */
  static AssignOverTime = "AssignOverTime"

  /**
   * 派发时间-APP
   * @type {string} 
   */
  static AssigningTimeStr = "AssigningTimeStr"

  /**
   * 底盘号
   * @type {string} 
   */
  static CarsSerialID = "CarsSerialID"

  /**
   * 闭环超时提醒时间
   * @type {string} 
   */
  static CloseOverTime = "CloseOverTime"

  /**
   * 抱怨级别
   * @type {string} 
   */
  static ComplainClasscontent = "ComplainClasscontent"

  /**
   * 
   * @type {string} 
   */
  static ComplainClasscontentText = "ComplainClasscontentText"

  /**
   * CreationDateTime
   * @type {string} 
   */
  static CreationDateTime = "CreationDateTime"

  /**
   * 车主姓名
   * @type {string} 
   */
  static Customer = "Customer"

  /**
   * ETag
   * @type {string} 
   */
  static ETag = "ETag"

  /**
   * ID
   * @type {string} 
   */
  static ID = "ID"

  /**
   * 是否更换备件
   * @type {string} 
   */
  static IsChangeSparePart = "IsChangeSparePart"

  /**
   * 
   * @type {string} 
   */
  static IsChangeSparePartText = "IsChangeSparePartText"

  /**
   * 销售服务商是否回复
   * @type {string} 
   */
  static IsDealerReply = "IsDealerReply"

  /**
   * 第三方拖车
   * @type {string} 
   */
  static IsNeedTrailer = "IsNeedTrailer"

  /**
   * 是否产品质量原因
   * @type {string} 
   */
  static IsProQuality = "IsProQuality"

  /**
   * 
   * @type {string} 
   */
  static IsProQualityText = "IsProQualityText"

  /**
   * 车牌号（废弃）
   * @type {string} 
   */
  static LicensePlateID = "LicensePlateID"

  /**
   * Description
   * @type {string} 
   */
  static Name = "Name"

  /**
   * 需要救援状态
   * @type {string} 
   */
  static NeedRescueStatus = "NeedRescueStatus"

  /**
   * 
   * @type {string} 
   */
  static NeedRescueStatusText = "NeedRescueStatusText"

  /**
   * 未更换备件原因
   * @type {string} 
   */
  static NoChangePartReason = "NoChangePartReason"

  /**
   * 
   * @type {string} 
   */
  static NoChangePartReasonText = "NoChangePartReasonText"

  /**
   * Object ID
   * @type {string} 
   */
  static ObjectID = "ObjectID"

  /**
   * PUserID
   * @type {string} 
   */
  static PUserID = "PUserID"

  /**
   * 手机号
   * @type {string} 
   */
  static PhoneNo = "PhoneNo"

  /**
   * 产品质量具体原因
   * @type {string} 
   */
  static ProQuality = "ProQuality"

  /**
   * 
   * @type {string} 
   */
  static ProQualityText = "ProQualityText"

  /**
   * Ticket Type
   * @type {string} 
   */
  static ProcessingTypeCode = "ProcessingTypeCode"

  /**
   * 
   * @type {string} 
   */
  static ProcessingTypeCodeText = "ProcessingTypeCodeText"

  /**
   * 催单次数
   * @type {string} 
   */
  static RemindingCount = "RemindingCount"

  /**
   * ServiceAndSupportTeam
   * @type {string} 
   */
  static ServiceAndSupportTeam = "ServiceAndSupportTeam"

  /**
   * Status
   * @type {string} 
   */
  static ServiceRequestUserLifeCycleStatusCode = "ServiceRequestUserLifeCycleStatusCode"

  /**
   * 
   * @type {string} 
   */
  static ServiceRequestUserLifeCycleStatusCodeText = "ServiceRequestUserLifeCycleStatusCodeText"

  /**
   * VIN码
   * @type {string} 
   */
  static VINID = "VINID"

}
/**
 * readBO_AppealRootCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BO_AppealRoot>>}
 */
export function readBO_AppealRootCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AppealRootCollection", undefined, params), BO_AppealRoot)
}


/**
 * readSingleBO_AppealRootCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BO_AppealRoot>>}
 */
export function readSingleBO_AppealRootCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AppealRootCollection", id, params), BO_AppealRoot)
}


/**
 * createBO_AppealRootCollection
 * 
 * @param {BO_AppealRoot} entity 
 * @returns {Promise<C4CODataSingleResult<BO_AppealRoot>>}
 */
export function createBO_AppealRootCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AppealRootCollection", undefined, undefined, "POST", entity), BO_AppealRoot)
}


/**
 * updateBO_AppealRootCollection
 * 
 * @param {string} id 
 * @param {BO_AppealRoot} entity 
 * @returns {Promise<void>}
 */
export function updateBO_AppealRootCollection(id, entity) {
  return odata.request("BO_AppealRootCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleBO_AppealRootCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleBO_AppealRootCollection(id) {
  return odata.request("BO_AppealRootCollection", id, undefined ,"DELETE")
}


/**
 * readBO_AppealRootStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_AppealRootStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AppealRootStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_AppealRootStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_AppealRootStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AppealRootStatusCollection", id, params), CodeList)
}


/**
 * readBO_AppealRootTicketTypeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_AppealRootTicketTypeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AppealRootTicketTypeCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_AppealRootTicketTypeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_AppealRootTicketTypeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AppealRootTicketTypeCollection", id, params), CodeList)
}


/**
 * readBO_AssignmentHistAssignmentsCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BO_AssignmentHistAssignments>>}
 */
export function readBO_AssignmentHistAssignmentsCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsCollection", undefined, params), BO_AssignmentHistAssignments)
}


/**
 * readSingleBO_AssignmentHistAssignmentsCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BO_AssignmentHistAssignments>>}
 */
export function readSingleBO_AssignmentHistAssignmentsCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsCollection", id, params), BO_AssignmentHistAssignments)
}


/**
 * createBO_AssignmentHistAssignmentsCollection
 * 
 * @param {BO_AssignmentHistAssignments} entity 
 * @returns {Promise<C4CODataSingleResult<BO_AssignmentHistAssignments>>}
 */
export function createBO_AssignmentHistAssignmentsCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsCollection", undefined, undefined, "POST", entity), BO_AssignmentHistAssignments)
}


/**
 * updateBO_AssignmentHistAssignmentsCollection
 * 
 * @param {string} id 
 * @param {BO_AssignmentHistAssignments} entity 
 * @returns {Promise<void>}
 */
export function updateBO_AssignmentHistAssignmentsCollection(id, entity) {
  return odata.request("BO_AssignmentHistAssignmentsCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleBO_AssignmentHistAssignmentsCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleBO_AssignmentHistAssignmentsCollection(id) {
  return odata.request("BO_AssignmentHistAssignmentsCollection", id, undefined ,"DELETE")
}


/**
 * readBO_AssignmentHistAssignmentsTicketAuditStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_AssignmentHistAssignmentsTicketAuditStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsTicketAuditStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_AssignmentHistAssignmentsTicketAuditStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_AssignmentHistAssignmentsTicketAuditStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsTicketAuditStatusCollection", id, params), CodeList)
}


/**
 * readBO_AssignmentHistAssignmentsTicketBusinessSupportStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_AssignmentHistAssignmentsTicketBusinessSupportStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsTicketBusinessSupportStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_AssignmentHistAssignmentsTicketBusinessSupportStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_AssignmentHistAssignmentsTicketBusinessSupportStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsTicketBusinessSupportStatusCollection", id, params), CodeList)
}


/**
 * readBO_AssignmentHistAssignmentsTicketRealStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_AssignmentHistAssignmentsTicketRealStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsTicketRealStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_AssignmentHistAssignmentsTicketRealStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_AssignmentHistAssignmentsTicketRealStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsTicketRealStatusCollection", id, params), CodeList)
}


/**
 * readBO_AssignmentHistAssignmentsTicketStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_AssignmentHistAssignmentsTicketStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsTicketStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_AssignmentHistAssignmentsTicketStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_AssignmentHistAssignmentsTicketStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AssignmentHistAssignmentsTicketStatusCollection", id, params), CodeList)
}


/**
 * readBO_AssignmentHistRootCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BO_AssignmentHistRoot>>}
 */
export function readBO_AssignmentHistRootCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_AssignmentHistRootCollection", undefined, params), BO_AssignmentHistRoot)
}


/**
 * readSingleBO_AssignmentHistRootCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BO_AssignmentHistRoot>>}
 */
export function readSingleBO_AssignmentHistRootCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AssignmentHistRootCollection", id, params), BO_AssignmentHistRoot)
}


/**
 * createBO_AssignmentHistRootCollection
 * 
 * @param {BO_AssignmentHistRoot} entity 
 * @returns {Promise<C4CODataSingleResult<BO_AssignmentHistRoot>>}
 */
export function createBO_AssignmentHistRootCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_AssignmentHistRootCollection", undefined, undefined, "POST", entity), BO_AssignmentHistRoot)
}


/**
 * updateBO_AssignmentHistRootCollection
 * 
 * @param {string} id 
 * @param {BO_AssignmentHistRoot} entity 
 * @returns {Promise<void>}
 */
export function updateBO_AssignmentHistRootCollection(id, entity) {
  return odata.request("BO_AssignmentHistRootCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleBO_AssignmentHistRootCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleBO_AssignmentHistRootCollection(id) {
  return odata.request("BO_AssignmentHistRootCollection", id, undefined ,"DELETE")
}


/**
 * readBO_DealerRootCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BO_DealerRoot>>}
 */
export function readBO_DealerRootCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_DealerRootCollection", undefined, params), BO_DealerRoot)
}


/**
 * readSingleBO_DealerRootCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BO_DealerRoot>>}
 */
export function readSingleBO_DealerRootCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_DealerRootCollection", id, params), BO_DealerRoot)
}


/**
 * createBO_DealerRootCollection
 * 
 * @param {BO_DealerRoot} entity 
 * @returns {Promise<C4CODataSingleResult<BO_DealerRoot>>}
 */
export function createBO_DealerRootCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_DealerRootCollection", undefined, undefined, "POST", entity), BO_DealerRoot)
}


/**
 * updateBO_DealerRootCollection
 * 
 * @param {string} id 
 * @param {BO_DealerRoot} entity 
 * @returns {Promise<void>}
 */
export function updateBO_DealerRootCollection(id, entity) {
  return odata.request("BO_DealerRootCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleBO_DealerRootCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleBO_DealerRootCollection(id) {
  return odata.request("BO_DealerRootCollection", id, undefined ,"DELETE")
}


/**
 * readBO_PhoneEventRootCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BO_PhoneEventRoot>>}
 */
export function readBO_PhoneEventRootCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_PhoneEventRootCollection", undefined, params), BO_PhoneEventRoot)
}


/**
 * readSingleBO_PhoneEventRootCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BO_PhoneEventRoot>>}
 */
export function readSingleBO_PhoneEventRootCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_PhoneEventRootCollection", id, params), BO_PhoneEventRoot)
}


/**
 * createBO_PhoneEventRootCollection
 * 
 * @param {BO_PhoneEventRoot} entity 
 * @returns {Promise<C4CODataSingleResult<BO_PhoneEventRoot>>}
 */
export function createBO_PhoneEventRootCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_PhoneEventRootCollection", undefined, undefined, "POST", entity), BO_PhoneEventRoot)
}


/**
 * updateBO_PhoneEventRootCollection
 * 
 * @param {string} id 
 * @param {BO_PhoneEventRoot} entity 
 * @returns {Promise<void>}
 */
export function updateBO_PhoneEventRootCollection(id, entity) {
  return odata.request("BO_PhoneEventRootCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleBO_PhoneEventRootCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleBO_PhoneEventRootCollection(id) {
  return odata.request("BO_PhoneEventRootCollection", id, undefined ,"DELETE")
}


/**
 * readBO_PhoneEventRootEventTypeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_PhoneEventRootEventTypeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_PhoneEventRootEventTypeCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_PhoneEventRootEventTypeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_PhoneEventRootEventTypeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_PhoneEventRootEventTypeCollection", id, params), CodeList)
}


/**
 * readBO_ReportPreparationRootCarBrandCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_ReportPreparationRootCarBrandCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_ReportPreparationRootCarBrandCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_ReportPreparationRootCarBrandCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_ReportPreparationRootCarBrandCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_ReportPreparationRootCarBrandCollection", id, params), CodeList)
}


/**
 * readBO_ReportPreparationRootCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BO_ReportPreparationRoot>>}
 */
export function readBO_ReportPreparationRootCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_ReportPreparationRootCollection", undefined, params), BO_ReportPreparationRoot)
}


/**
 * readSingleBO_ReportPreparationRootCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BO_ReportPreparationRoot>>}
 */
export function readSingleBO_ReportPreparationRootCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_ReportPreparationRootCollection", id, params), BO_ReportPreparationRoot)
}


/**
 * createBO_ReportPreparationRootCollection
 * 
 * @param {BO_ReportPreparationRoot} entity 
 * @returns {Promise<C4CODataSingleResult<BO_ReportPreparationRoot>>}
 */
export function createBO_ReportPreparationRootCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_ReportPreparationRootCollection", undefined, undefined, "POST", entity), BO_ReportPreparationRoot)
}


/**
 * updateBO_ReportPreparationRootCollection
 * 
 * @param {string} id 
 * @param {BO_ReportPreparationRoot} entity 
 * @returns {Promise<void>}
 */
export function updateBO_ReportPreparationRootCollection(id, entity) {
  return odata.request("BO_ReportPreparationRootCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleBO_ReportPreparationRootCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleBO_ReportPreparationRootCollection(id) {
  return odata.request("BO_ReportPreparationRootCollection", id, undefined ,"DELETE")
}


/**
 * readBO_ReportPreparationRootRPCategory2Collection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_ReportPreparationRootRPCategory2Collection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_ReportPreparationRootRPCategory2Collection", undefined, params), CodeList)
}


/**
 * readSingleBO_ReportPreparationRootRPCategory2Collection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_ReportPreparationRootRPCategory2Collection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_ReportPreparationRootRPCategory2Collection", id, params), CodeList)
}


/**
 * readBO_ReportPreparationRootRPCategoryCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_ReportPreparationRootRPCategoryCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_ReportPreparationRootRPCategoryCollection", undefined, params), CodeList)
}


/**
 * readSingleBO_ReportPreparationRootRPCategoryCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_ReportPreparationRootRPCategoryCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_ReportPreparationRootRPCategoryCollection", id, params), CodeList)
}


/**
 * readBO_TV_MappingRootCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BO_TV_MappingRoot>>}
 */
export function readBO_TV_MappingRootCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_TV_MappingRootCollection", undefined, params), BO_TV_MappingRoot)
}


/**
 * readSingleBO_TV_MappingRootCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BO_TV_MappingRoot>>}
 */
export function readSingleBO_TV_MappingRootCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_TV_MappingRootCollection", id, params), BO_TV_MappingRoot)
}


/**
 * createBO_TV_MappingRootCollection
 * 
 * @param {BO_TV_MappingRoot} entity 
 * @returns {Promise<C4CODataSingleResult<BO_TV_MappingRoot>>}
 */
export function createBO_TV_MappingRootCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_TV_MappingRootCollection", undefined, undefined, "POST", entity), BO_TV_MappingRoot)
}


/**
 * updateBO_TV_MappingRootCollection
 * 
 * @param {string} id 
 * @param {BO_TV_MappingRoot} entity 
 * @returns {Promise<void>}
 */
export function updateBO_TV_MappingRootCollection(id, entity) {
  return odata.request("BO_TV_MappingRootCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleBO_TV_MappingRootCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleBO_TV_MappingRootCollection(id) {
  return odata.request("BO_TV_MappingRootCollection", id, undefined ,"DELETE")
}


/**
 * readBO_TV_MappingRootTicketTypeCode2Collection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readBO_TV_MappingRootTicketTypeCode2Collection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_TV_MappingRootTicketTypeCode2Collection", undefined, params), CodeList)
}


/**
 * readSingleBO_TV_MappingRootTicketTypeCode2Collection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleBO_TV_MappingRootTicketTypeCode2Collection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_TV_MappingRootTicketTypeCode2Collection", id, params), CodeList)
}


/**
 * readBO_VOCRootCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<BO_VOCRoot>>}
 */
export function readBO_VOCRootCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("BO_VOCRootCollection", undefined, params), BO_VOCRoot)
}


/**
 * readSingleBO_VOCRootCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<BO_VOCRoot>>}
 */
export function readSingleBO_VOCRootCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_VOCRootCollection", id, params), BO_VOCRoot)
}


/**
 * createBO_VOCRootCollection
 * 
 * @param {BO_VOCRoot} entity 
 * @returns {Promise<C4CODataSingleResult<BO_VOCRoot>>}
 */
export function createBO_VOCRootCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("BO_VOCRootCollection", undefined, undefined, "POST", entity), BO_VOCRoot)
}


/**
 * updateBO_VOCRootCollection
 * 
 * @param {string} id 
 * @param {BO_VOCRoot} entity 
 * @returns {Promise<void>}
 */
export function updateBO_VOCRootCollection(id, entity) {
  return odata.request("BO_VOCRootCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleBO_VOCRootCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleBO_VOCRootCollection(id) {
  return odata.request("BO_VOCRootCollection", id, undefined ,"DELETE")
}


/**
 * readIndividualProductServiceProcessInformationCarOwnerTypecontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationCarOwnerTypecontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCarOwnerTypecontentCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationCarOwnerTypecontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationCarOwnerTypecontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCarOwnerTypecontentCollection", id, params), CodeList)
}


/**
 * readIndividualProductServiceProcessInformationCarPropertycontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationCarPropertycontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCarPropertycontentCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationCarPropertycontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationCarPropertycontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCarPropertycontentCollection", id, params), CodeList)
}


/**
 * readIndividualProductServiceProcessInformationCarRankcontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationCarRankcontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCarRankcontentCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationCarRankcontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationCarRankcontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCarRankcontentCollection", id, params), CodeList)
}


/**
 * readIndividualProductServiceProcessInformationCarUsagecontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationCarUsagecontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCarUsagecontentCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationCarUsagecontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationCarUsagecontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCarUsagecontentCollection", id, params), CodeList)
}


/**
 * readIndividualProductServiceProcessInformationCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<IndividualProductServiceProcessInformation>>}
 */
export function readIndividualProductServiceProcessInformationCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCollection", undefined, params), IndividualProductServiceProcessInformation)
}


/**
 * readSingleIndividualProductServiceProcessInformationCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<IndividualProductServiceProcessInformation>>}
 */
export function readSingleIndividualProductServiceProcessInformationCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCollection", id, params), IndividualProductServiceProcessInformation)
}


/**
 * createIndividualProductServiceProcessInformationCollection
 * 
 * @param {IndividualProductServiceProcessInformation} entity 
 * @returns {Promise<C4CODataSingleResult<IndividualProductServiceProcessInformation>>}
 */
export function createIndividualProductServiceProcessInformationCollection(entity) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationCollection", undefined, undefined, "POST", entity), IndividualProductServiceProcessInformation)
}


/**
 * updateIndividualProductServiceProcessInformationCollection
 * 
 * @param {string} id 
 * @param {IndividualProductServiceProcessInformation} entity 
 * @returns {Promise<void>}
 */
export function updateIndividualProductServiceProcessInformationCollection(id, entity) {
  return odata.request("IndividualProductServiceProcessInformationCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleIndividualProductServiceProcessInformationCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleIndividualProductServiceProcessInformationCollection(id) {
  return odata.request("IndividualProductServiceProcessInformationCollection", id, undefined ,"DELETE")
}


/**
 * readIndividualProductServiceProcessInformationIsVehicleWarrantycontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationIsVehicleWarrantycontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationIsVehicleWarrantycontentCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationIsVehicleWarrantycontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationIsVehicleWarrantycontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationIsVehicleWarrantycontentCollection", id, params), CodeList)
}


/**
 * readIndividualProductServiceProcessInformationLoanChannelCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationLoanChannelCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationLoanChannelCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationLoanChannelCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationLoanChannelCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationLoanChannelCollection", id, params), CodeList)
}


/**
 * readIndividualProductServiceProcessInformationLoanTypeCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationLoanTypeCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationLoanTypeCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationLoanTypeCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationLoanTypeCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationLoanTypeCollection", id, params), CodeList)
}


/**
 * readIndividualProductServiceProcessInformationPaymentTypeBCOcontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationPaymentTypeBCOcontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationPaymentTypeBCOcontentCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationPaymentTypeBCOcontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationPaymentTypeBCOcontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationPaymentTypeBCOcontentCollection", id, params), CodeList)
}


/**
 * readIndividualProductServiceProcessInformationSpecialPricecontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readIndividualProductServiceProcessInformationSpecialPricecontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationSpecialPricecontentCollection", undefined, params), CodeList)
}


/**
 * readSingleIndividualProductServiceProcessInformationSpecialPricecontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleIndividualProductServiceProcessInformationSpecialPricecontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("IndividualProductServiceProcessInformationSpecialPricecontentCollection", id, params), CodeList)
}


/**
 * readServiceRequestArrivalConfirmbyCustCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestArrivalConfirmbyCustCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestArrivalConfirmbyCustCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestArrivalConfirmbyCustCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestArrivalConfirmbyCustCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestArrivalConfirmbyCustCollection", id, params), CodeList)
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
 * @returns {Promise<void>}
 */
export function updateServiceRequestCollection(id, entity) {
  return odata.request("ServiceRequestCollection", id, undefined, "PATCH", entity)
}


/**
 * deleteSingleServiceRequestCollection
 * 
 * @param {string} id 
 * @returns {Promise<void>}
 */
export function deleteSingleServiceRequestCollection(id) {
  return odata.request("ServiceRequestCollection", id, undefined ,"DELETE")
}


/**
 * readServiceRequestComplainClasscontentCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestComplainClasscontentCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestComplainClasscontentCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestComplainClasscontentCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestComplainClasscontentCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestComplainClasscontentCollection", id, params), CodeList)
}


/**
 * readServiceRequestIsChangeSparePartCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestIsChangeSparePartCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestIsChangeSparePartCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestIsChangeSparePartCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestIsChangeSparePartCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestIsChangeSparePartCollection", id, params), CodeList)
}


/**
 * readServiceRequestIsProQualityCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestIsProQualityCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestIsProQualityCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestIsProQualityCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestIsProQualityCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestIsProQualityCollection", id, params), CodeList)
}


/**
 * readServiceRequestNeedRescueStatusCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestNeedRescueStatusCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestNeedRescueStatusCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestNeedRescueStatusCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestNeedRescueStatusCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestNeedRescueStatusCollection", id, params), CodeList)
}


/**
 * readServiceRequestNoChangePartReasonCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestNoChangePartReasonCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestNoChangePartReasonCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestNoChangePartReasonCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestNoChangePartReasonCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestNoChangePartReasonCollection", id, params), CodeList)
}


/**
 * readServiceRequestProQualityCollection
 * 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataResult<CodeList>>}
 */
export function readServiceRequestProQualityCollection(params) {
  return C4CODataResult.fromRequestResult(odata.request("ServiceRequestProQualityCollection", undefined, params), CodeList)
}


/**
 * readSingleServiceRequestProQualityCollection
 * 
 * @param {string} id 
 * @param {ODataQueryParam} params 
 * @returns {Promise<C4CODataSingleResult<CodeList>>}
 */
export function readSingleServiceRequestProQualityCollection(id, params) {
  return C4CODataSingleResult.fromRequestResult(odata.request("ServiceRequestProQualityCollection", id, params), CodeList)
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

export const CollectionOperation = {
  BO_AppealRoot: {
    readBO_AppealRootCollection,
    readSingleBO_AppealRootCollection,
    createBO_AppealRootCollection,
    updateBO_AppealRootCollection,
    deleteSingleBO_AppealRootCollection
  },
  CodeList: {
    readBO_AppealRootStatusCollection,
    readSingleBO_AppealRootStatusCollection,
    readBO_AppealRootTicketTypeCollection,
    readSingleBO_AppealRootTicketTypeCollection,
    readBO_AssignmentHistAssignmentsTicketAuditStatusCollection,
    readSingleBO_AssignmentHistAssignmentsTicketAuditStatusCollection,
    readBO_AssignmentHistAssignmentsTicketBusinessSupportStatusCollection,
    readSingleBO_AssignmentHistAssignmentsTicketBusinessSupportStatusCollection,
    readBO_AssignmentHistAssignmentsTicketRealStatusCollection,
    readSingleBO_AssignmentHistAssignmentsTicketRealStatusCollection,
    readBO_AssignmentHistAssignmentsTicketStatusCollection,
    readSingleBO_AssignmentHistAssignmentsTicketStatusCollection,
    readBO_PhoneEventRootEventTypeCollection,
    readSingleBO_PhoneEventRootEventTypeCollection,
    readBO_ReportPreparationRootCarBrandCollection,
    readSingleBO_ReportPreparationRootCarBrandCollection,
    readBO_ReportPreparationRootRPCategory2Collection,
    readSingleBO_ReportPreparationRootRPCategory2Collection,
    readBO_ReportPreparationRootRPCategoryCollection,
    readSingleBO_ReportPreparationRootRPCategoryCollection,
    readBO_TV_MappingRootTicketTypeCode2Collection,
    readSingleBO_TV_MappingRootTicketTypeCode2Collection,
    readIndividualProductServiceProcessInformationCarOwnerTypecontentCollection,
    readSingleIndividualProductServiceProcessInformationCarOwnerTypecontentCollection,
    readIndividualProductServiceProcessInformationCarPropertycontentCollection,
    readSingleIndividualProductServiceProcessInformationCarPropertycontentCollection,
    readIndividualProductServiceProcessInformationCarRankcontentCollection,
    readSingleIndividualProductServiceProcessInformationCarRankcontentCollection,
    readIndividualProductServiceProcessInformationCarUsagecontentCollection,
    readSingleIndividualProductServiceProcessInformationCarUsagecontentCollection,
    readIndividualProductServiceProcessInformationIsVehicleWarrantycontentCollection,
    readSingleIndividualProductServiceProcessInformationIsVehicleWarrantycontentCollection,
    readIndividualProductServiceProcessInformationLoanChannelCollection,
    readSingleIndividualProductServiceProcessInformationLoanChannelCollection,
    readIndividualProductServiceProcessInformationLoanTypeCollection,
    readSingleIndividualProductServiceProcessInformationLoanTypeCollection,
    readIndividualProductServiceProcessInformationPaymentTypeBCOcontentCollection,
    readSingleIndividualProductServiceProcessInformationPaymentTypeBCOcontentCollection,
    readIndividualProductServiceProcessInformationSpecialPricecontentCollection,
    readSingleIndividualProductServiceProcessInformationSpecialPricecontentCollection,
    readServiceRequestArrivalConfirmbyCustCollection,
    readSingleServiceRequestArrivalConfirmbyCustCollection,
    readServiceRequestComplainClasscontentCollection,
    readSingleServiceRequestComplainClasscontentCollection,
    readServiceRequestIsChangeSparePartCollection,
    readSingleServiceRequestIsChangeSparePartCollection,
    readServiceRequestIsProQualityCollection,
    readSingleServiceRequestIsProQualityCollection,
    readServiceRequestNeedRescueStatusCollection,
    readSingleServiceRequestNeedRescueStatusCollection,
    readServiceRequestNoChangePartReasonCollection,
    readSingleServiceRequestNoChangePartReasonCollection,
    readServiceRequestProQualityCollection,
    readSingleServiceRequestProQualityCollection,
    readServiceRequestProcessingTypeCodeCollection,
    readSingleServiceRequestProcessingTypeCodeCollection,
    readServiceRequestServiceRequestUserLifeCycleStatusCodeCollection,
    readSingleServiceRequestServiceRequestUserLifeCycleStatusCodeCollection
  },
  BO_AssignmentHistAssignments: {
    readBO_AssignmentHistAssignmentsCollection,
    readSingleBO_AssignmentHistAssignmentsCollection,
    createBO_AssignmentHistAssignmentsCollection,
    updateBO_AssignmentHistAssignmentsCollection,
    deleteSingleBO_AssignmentHistAssignmentsCollection
  },
  BO_AssignmentHistRoot: {
    readBO_AssignmentHistRootCollection,
    readSingleBO_AssignmentHistRootCollection,
    createBO_AssignmentHistRootCollection,
    updateBO_AssignmentHistRootCollection,
    deleteSingleBO_AssignmentHistRootCollection
  },
  BO_DealerRoot: {
    readBO_DealerRootCollection,
    readSingleBO_DealerRootCollection,
    createBO_DealerRootCollection,
    updateBO_DealerRootCollection,
    deleteSingleBO_DealerRootCollection
  },
  BO_PhoneEventRoot: {
    readBO_PhoneEventRootCollection,
    readSingleBO_PhoneEventRootCollection,
    createBO_PhoneEventRootCollection,
    updateBO_PhoneEventRootCollection,
    deleteSingleBO_PhoneEventRootCollection
  },
  BO_ReportPreparationRoot: {
    readBO_ReportPreparationRootCollection,
    readSingleBO_ReportPreparationRootCollection,
    createBO_ReportPreparationRootCollection,
    updateBO_ReportPreparationRootCollection,
    deleteSingleBO_ReportPreparationRootCollection
  },
  BO_TV_MappingRoot: {
    readBO_TV_MappingRootCollection,
    readSingleBO_TV_MappingRootCollection,
    createBO_TV_MappingRootCollection,
    updateBO_TV_MappingRootCollection,
    deleteSingleBO_TV_MappingRootCollection
  },
  BO_VOCRoot: {
    readBO_VOCRootCollection,
    readSingleBO_VOCRootCollection,
    createBO_VOCRootCollection,
    updateBO_VOCRootCollection,
    deleteSingleBO_VOCRootCollection
  },
  IndividualProductServiceProcessInformation: {
    readIndividualProductServiceProcessInformationCollection,
    readSingleIndividualProductServiceProcessInformationCollection,
    createIndividualProductServiceProcessInformationCollection,
    updateIndividualProductServiceProcessInformationCollection,
    deleteSingleIndividualProductServiceProcessInformationCollection
  },
  ServiceRequest: {
    readServiceRequestCollection,
    readSingleServiceRequestCollection,
    createServiceRequestCollection,
    updateServiceRequestCollection,
    deleteSingleServiceRequestCollection
  }
}  
