# StartOrder_v92

**Category:** Apriso/WIP/Order
**Class:** `FlexNet.BusinessFacade.Manufacturing.OrderStarter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

This method creates a link between a production order and its resources or production line. The link has the form of a record, having a Start and End Time. The Start Time indicates when the given order was started on the resource(s), while the End Time indicates when the order was finished. The method not only allows for passing an order, order type and operation sequence number that is being started, but also a Lot Number and the Product ID of the produced entity.
 

The method can be successfully called only when there is an appropriate State event existing for the given resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order number. |
| Input | WipOrderType | Integer | Yes | Wip order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | ResourceName | Char | No | Resource name. |
| Input | ResourceType | Integer | No | Resource type. |
| Input | ProductionLine | Char | No | Production line number. |
| Input | WorkCenter | Char | No | Work center. |
| Input | EmployeeID | Integer | No | Employee id. |
| Input | ProductID | Integer | No | Product ID. |
| Input | LotNo | Char | No | Lot number. |
| Input | ActivityTime | DateTime | Yes | Activity time. The value should be specified as local (it will be automatically converted and stored as UTC). |
| Input | OccupationCode | Char | No | Occupation code. |
| Input | ReasonCode | Char | No | Reason code. |
| Input | LaborCode | Char | No | Labor Code |

## Validations

- The system validates the Production Order, Production Order Type and Operation Sequence Number. 
- The system validates the Resource Name and Resource Type (if entered). 
- The system validates the Production Line (if entered).  
- The system validates the product ID (if entered) - if the product is Lot Tracked, then the Lot Number is required. 
- The system validates the ID of the employee who starts an order and is passed as the StartEmployeeID parameter. 
- The system validates the Occupation Code against the OCCUPATION table (if entered). 
- The system validates the Work Center against the WORK_CENTER table. 
- The system validates that there is exactly one State record (a resource labor record of STATE type) per each resource for the Start Time parameter - otherwise, the following error message is displayed: "Multiple Events Found For Resource". 
-  System validates the Reason Code against the REASON_CODE table (if entered). 
-  System validates the Labor Code against the LABOR_CODE table (if entered).

## System Processing

-  Determines if the wip order status is not started or Actual Start date is not populated, then system updates wip order status to started (2) and actual start date to current date time in UTC format. 
-  Determines if the wip operation status is not started or Actual Start date is not populated, then system update wip operation status to started (2) and actual start date to current date time in UTC format. 
- The system creates a resource labor record, RESOURCE_LABOR, with the following values for the resource (if ResourceName and ResourceType is provided) or all resources that belong to the production line (if ProductionLine is provided). This record is linked to the parent State record found based on the ActivityTime parameter passed to the component. 
-  The system populates the ProductionLine for the resource labor record by first checking the Production Line input, then the resource Production Line, then finally the Production Line of the Work Center assigned to the resource (only if the Work Center is assigned to only ONE Production Line)  
- The system creates an open labor record - LABOR - for a given employee (EmployeeId) by calling the business rules labor controller StartOrder method, see StartOrder_v92 BC method for more details.

## Pre-Conditions

- The State event must exist (open or closed, but exactly one) for each resource within the activity time (ActivityTime parameter).

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Manufacturing.OrderStarter.StartOrder 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WorkOrderStatus | 2 (Started Status) |
|  | ActualStartDate | Current date time in UTC format |
| WIP_OPERATION | OperationStatus | 2 (Started Status) |
|  | ActualStartDate | Current date time in UTC format |
| RESOURCE_LABOR | RESOURCENAME | ResourceName |
|  | RESOURCETYPE | ResourceType |
|  | STARTEDEMPLOYEEID | EmployeeID |
|  | LABORTYPE | 9 |
|  | STARTTIME | ActivityTime (local) |
|  | STATUS | 1 |
|  | WIPORDERNO | WipOrderNo |
|  | WIPORDERTYPE | WipOrderType |
|  | OPRSEQUENCENO | OprSequenceNo |
|  | PARENTID | ID of parent State event found by component |
|  | PRODUCTID | ProductID |
|  | LOTNO | LotNo |
|  | PRODUCTIONLINE | ProductionLine |
|  | WORKCENTER | WorkCenter |
|  | OCCUPATIONCODE | OccupationCode |
|  | REASONCODE | ReasonCode |
