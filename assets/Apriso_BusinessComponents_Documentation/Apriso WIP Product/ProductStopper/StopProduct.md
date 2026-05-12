# StopProduct

**Category:** Apriso/WIP/Product
**Class:** `FlexNet.BusinessFacade.Manufacturing.ProductStopper`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

This BC method stops a Product Event on a Machine (or all machines on a production line). It updates the status of one or more records in Resource_labor with LaborType=10 to CLOSED (2) and sets the EndTime. Refer to the description of StartProduct_v91 in Section 3.2.1 for more information on how Product Events are processed in DELMIA Apriso.
 

The Product Event is also stopped when an opened parent State (Machine Event) is being closed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID. |
| Input | LotNo | Char | No | Lot number. |
| Input | ResourceName | Char | No | Resource name. |
| Input | ResourceType | Integer | No | Resource type. |
| Input | ProductionLine | Char | No | Production line number. Optional if resource is specified. |
| Input | WorkCenter | Char | Yes | Work center. |
| Input | EmployeeID | Integer | No | Employee ID. |
| Input | ActivityTime | DateTime | Yes | Activity time. |

## Validations

- Validates the Resource Name and Resource Type (if entered). 
- Validates the Production Line (if entered). 
- Validates the product ID (required parameter) against the PRODUCT table - if the product is Lot Tracked, then the Lot Number is required. 
- Validates the Occupation Code and Facility against the OCCUPATION table (if Occupation Code entered). 
- Validates the Work Center against the WORK_CENTER table.

## System Processing

- If the Resource is specified (ResourceName and ResourceType parameters passed), further processing is done on exactly 1 record in RESOURCE_LABOR table. If ProductionLine is specified instead, processing is done for each record in the RESOURCE_LABOR table representing Resources (Machines) that belong to the Production Line. 
- All other parameters are validated as specified above. 
- The Product Event (one or more records) is selected (by: ProductId, ActivityTime, ResourceName and ResourceType or ProductionLine). Further processing is applied to all selected records: 
 
- If ActivityTime is earlier (or equal) then the EndTime of the Parent State, all selected records are closed (ActivityTime is put into the EndTime column, status updated to closed (2). 
- If ActivityTime is later then the EndTime of the Parent State, the Product Event is closed with an EndTime equal to the Parent State's EndTime and new Product Events are created with a StartTime equal to the EndTime of the closed Events.

## Pre-Conditions

- The opened State event must exist for each resource for the activity time (ActivityTime parameter)

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Manufacturing.ProductStarter 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | STOPEMPLOYEEID | EmployeeID |
|  | ENDTIME | ActivityTime (local) |
|  | STATUS | 2 |
| NOTE: If the Product Event is split, the same logic as for StartProduct_v91 is applied to all new records created. |  |  |
