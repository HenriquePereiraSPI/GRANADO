# StopProduct_v2

**Category:** Apriso/WIP/Product
**Class:** `FlexNet.BusinessFacade.Manufacturing.ProductStopper`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

This Business Component method stops a Product Event on a machine (or all machines on a Production Line). It updates the status of one or more records in RESOURCE_LABOR with LaborType=10 to CLOSED (2) and sets the EndTime. The Product event is also stopped when an opened parent State (Machine Event) is being closed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The Product ID. |
| Input | LotNo | Char | No | The Lot Number. |
| Input | ResourceName | Char | No | The Resource name. |
| Input | ResourceType | Integer | No | The Resource type. |
| Input | ProductionLine | Char | No | The Production Line Number. Optional if the Resource is specified. |
| Input | WorkCenter | Char | Yes | The Work Center. |
| Input | EmployeeID | Integer | No | The employee ID. |
| Input | ActivityTime | DateTime | Yes | The activity time. |
| Output | LaborID | Integer | No | The ID of the updated LABOR record. |

## Validations

- Validates the Resource Name and Resource Type (if entered) 
- Validates the Production Line (if entered) 
- Validates the Product ID (required parameter) against the PRODUCT table 
 
- If the Product is Lot-tracked, then the Lot Number is required  
 
- Validates the Occupation Code and Facility against the OCCUPATION table (if the Occupation Code was entered) 
- Validates the Work Center against the WORK_CENTER table 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting

## System Processing

- If the Resource is specified (ResourceName and ResourceType parameters passed), further processing is done on exactly 1 record in the RESOURCE_LABOR table  
 
- If ProductionLine is specified instead, processing is done for each record in the RESOURCE_LABOR table representing Resources (Machines) that belong to the Production Line  
 
- All other parameters are validated as specified above 
- The Product event (one or more records) is selected (by: ProductId, ActivityTime, ResourceName and ResourceType or ProductionLine), and further processing is applied to all of the selected records: 
 
- If ActivityTime is earlier (or equal) than the EndTime of the parent State, all of the selected records are closed (ActivityTime is put into the EndTime column, status updated to closed (2) 
- If ActivityTime is later than the EndTime of the parent State, the Product event is closed with an EndTime equal to the Parent State's EndTime and the new Product events are created with a StartTime equal to the EndTime of the closed events

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
