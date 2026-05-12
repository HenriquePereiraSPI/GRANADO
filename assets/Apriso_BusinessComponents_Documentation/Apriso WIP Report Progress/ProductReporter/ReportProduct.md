# ReportProduct

**Category:** Apriso/WIP/Report Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.ProductReporter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to report quantity produced in an order less environment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | Employee reporting production. |
| Input | WorkCenter | Char | Yes | Work center. |
| Input | WipContentClass | Integer | No | Wip content class of the reported product. |
| Input | ReasonCode | Char | No | Reason Code. |
| Input | ResourceName | Char | No | Resource Name. |
| Input | ResourceType | Integer | No | Resource Type. |
| Input | ProductionLine | Char | No | Production Line. |
| Input | ProductID | Integer | Yes | Product ID. |
| Input | SerialNo | Char | No | Serial Number. |
| Input | LotNo | Char | No | Lot Number. |
| Input | ContainerNo | Char | No | Container Number. |
| Input | ActivityTime | DateTime | No | Activity Time (local). The records are saved with milliseconds accuracy. |
| Input | Quantity | Decimal | No | Quantity to be reported. |
| Input | UomCode | Char | Yes | Uom code. |
| Input | ReportNegative | Boolean | No | Flag indicating if negative quantity is to be reported. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ActivityTimeUtc | DateTime | The time the event was created. The value should be specified as UTC. If provided, it will be used instead of the ActivityTime input. |

## Validations

- System validates that UomCode, ProductID and WorkCenter are specified and exist. 
- If EmployeeID is specified, system validates that employee exists. 
- If ReasonCode is specified, system validates that reason exists. 
- If ContainerNo is specified, system validates that container exists. 
- If ResourceName and ResourceType are specified, system validates that resource exists. 
- If ProductionLine is specified, system validates it exists. 
- If product is lot tracked and LotNo is specified, system validates that it exists. 
- Else if product is not lot tracked and LotNo is specified an error message is returned. 
- If product is serial tracked and SerialNo is specified, system validates that it exists and that lot number is the same as LotNo (if specified). Additionally system validates that wip serial exists and is New or Started. 
- Else if product is not serial tracked and SerialNo is specified an error message is returned.

## System Processing

** Progress Management ** 
 

As no order is involved, no progress is involved
 

 ** Labor Management ** 
 

This section applies when resource EmployeeID, ProductID, and Work Center is specified.
 
 
- System converts the ActivityTime into UTC time. 
- System retrieves all open product records for ProductID, WorkCenter, EmployeeID, LotNo and ActivityTime. The product and lot are managed as following: 
 
- If the EmployeeID is specified, all open labor records for the employee (with other given inputs) is read. 
- If LotNo is specified then system checks if there is a labor for this lot. If the labor exists, system uses LotNo otherwise it retrieves labors with LotNo = null. 
- Else if LotNo is not specified, system retrieves labors for LotNo = null. 
 
- For every Labor, the System inserts a record into Labor_Detail populating Labor ID, FromContentClass (always 1), LotNo, ProductID, Quantity (using Quantity), UomCode, ReasonCode, SerialNo, ToWipContentClass (WipContentClass), TransactionTime (ActivityTime). 
 

 ** Machine Time Management ** 
 

This section applies when resource (ResourceName and ResourceType) or ProductionLine is specified. If only the ProductionLine is specified, all the following processing will be applied to all resources assigned to the production line.
 
 
- System converts the ActivityTime into UTC time. 
 
- System retrieves all product records (Resource_Labor.LaborType = 10) for ProductID, WorkCenter, ResourceName, ResourceType, ProductionLine, LotNo and ActivityTime. The product and lot are managed as following: 
- If LotNo is specified then system checks if there is a product record for this lot. If the product record exists, system uses LotNo otherwise it retrieves product records with LotNo = null. This is because it is possible to report lot against started product (only product was used when starting a product) or lot (product and lot were used when starting a product). 
- Else if LotNo is not specified, system retrieves product records for LotNo = null (it is forbidden to report product against started lot) 
 
 

For every product selected, system inserts a record into Resource_Labor_Detail populating Container, EmployeeID, FromContentClass (always 1), LotNo, ProductID, Quantity, UomCode, ReasonCode, SerialNo, StartTime (ActivityTime), Status (always Open), ToWipContentClass (WipContentClass), TransactionTime (ActivityTime), ResourceLaborID (id of the product).)

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Manufacturing.ProductReporter.ReportProduct  
- TRANSACTION_HISTORY_LABOR  
- TRANSACTION_HISTORY_RESOURCE  
- TRANSACTION_HISTORY_WIP

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR_DETAIL | Container | ContainerNo |
|  | EmployeeID | EmployeeID |
|  | FromContentClass | 1 |
|  | LotNo | LotNo |
|  | ProductID | ProductID (Required) |
|  | Quantity | Quantity (Required) - negative value if ReportNegative is TRUE |
|  | UomCode | UomCode (Required) |
|  | ResonCode | ReasonCode |
|  | SerialNo | SerialNo |
|  | StartTime | ActivityTime (Required) |
|  | Status | Open |
|  | ToWipContentClass | WipContentClass (Required) |
|  | TransactionTime | ActivityTime (Required) |
|  | ResourceLaborID | ID of the order, the Quantity is reported against. |
| LABOR_DETAIL | Labor ID | ID (Required) of the Labor, the Quantity is reported against. |
|  | FromContentClass | 1 |
|  | LotNo | LotNo |
|  | ProductID | ProductID |
|  | Quantity | Quantity (Required) - negative value if ReportNegative is TRUE |
|  | UomCode | UomCode (Required) |
|  | ResonCode | ReasonCode |
|  | SerialNo | SerialNo |
|  | ToWipContentClass | WipContentClass (Required) |
|  | TransactionTime | ActivityTime (Required) |
