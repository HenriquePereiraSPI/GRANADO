# StartOrder_v2

**Category:** Apriso/WIP/Order
**Class:** `FlexNet.BusinessFacade.Manufacturing.OrderStarter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

This method creates a link between a Production Order and its Resources or Production Line. The link has the form of a record with a Start and End Time. The Start Time indicates when the given order was started on the Resource(s), while the End Time indicates when the order was finished. The method not only allows for passing an order, an order type, and the Operation Sequence Number that is being started, but also a Lot Number and the Product ID of the produced entity.
 

The method can be successfully called only when there is an appropriate State event that exists for the given Resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order number. |
| Input | WipOrderType | Integer | Yes | The WIP Order type. |
| Input | OprSequenceNo | Char | Yes | The Operation Sequence Number. |
| Input | ResourceName | Char | No | The Resource name. |
| Input | ResourceType | Integer | No | The Resource type. |
| Input | ProductionLine | Char | No | The Production Line Number. |
| Input | WorkCenter | Char | No | The Work Center. |
| Input | EmployeeID | Integer | No | The employee ID. |
| Input | ActivityTime | DateTime | Yes | The activity time. The value should be specified as local (it will be automatically converted and stored as UTC). |
| Input | ProductID | Integer | No | The product ID. |
| Input | LotNo | Char | No | The Lot Number. |
| Input | OccupationCode | Char | No | The Occupation Code. |
| Input | ReasonCode | Char | No | The Reason Code. |
| Input | LaborCode | Char | No | The Labor Code |
| Output | LaborID | Integer | No | The ID of the created LABOR record. |

## Validations

- The system validates the Production Order, Production Order Type, and Operation Sequence Number 
- The system validates the Resource Name and Resource Type (if entered) 
- The system validates the Production Line (if entered) 
- The system validates the product ID (if entered) 
 
- If the product is Lot Tracked, then the Lot Number is required 
 
- The system validates the ID of the employee who starts an order and is passed as the StartEmployeeID parameter 
 
- If the employee ID is provided, the system validates that there is a Work Center assigned to either the WIP Operation or the employee's Facility  
 
- The system validates the Occupation Code against the OCCUPATION table (if entered) 
- The system validates the Work Center against the WORK_CENTER table 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting 
- The system validates that there is exactly one State record (a resource labor record of the STATE type) per each Resource for the Start Time parameter 
 
- Otherwise, the following error message is displayed: "Multiple Events Found For Resource"

## System Processing

- The system creates a resource labor record - RESOURCE_LABOR - with the following values for the resource (if ResourceName and ResourceType are provided) or all of the resources that belong to the Production Line (if ProductionLine is provided) 
 
- This record is linked to the parent State record found based on the ActivityTime parameter passed to the component 
- The system populates the WorkCenter for the resource labor record by first checking the component input, then the WIP Operation, and finally the Resource configuration. 
- The system populates the ProductionLine for the resource labor record by first checking the Production Line input, then the resource Production Line, then finally the Production Line of the Work Center assigned to the resource (only if the Work Center is assigned to only ONE Production Line) 
 
-  The system creates an open labor record - LABOR - for a given employee (EmployeeID) by calling the labor controller StartOrder method and passing the parameters WipOrderNo, WipOrderType, OprSequenceNo, ActivityTime, EmployeeID, Occupation, ReasonCode, and LaborCode if the EmployeeID parameter was provided and the employee has the LaborTracking flag set to true  
 
-  The system populates the WorkCenter for the labor record by first checking the component input, then the WIP Operation, and finally the employee Facility

## Pre-Conditions

- The State event must exist (exactly one, open or closed) for each resource within the activity time (ActivityTime parameter)

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Manufacturing.OrderStarter.StartOrder 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | ResourceName | ResourceName |
|  | ResourceType | ResourceType |
|  | StartedEmployeeID | EmployeeID |
|  | LaborType | 9 |
|  | StartTime | ActivityTime (in local time zone) |
|  | Status | 1 |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
|  | ParentID | The ID of the parent State event found by component |
|  | ProductID | ProductID |
|  | LotNo | LotNo |
|  | ProductionLine | ProductionLine |
|  | WorkCenter | WorkCenter |
|  | OccupationCode | OccupationCode |
|  | ReasonCode | ReasonCode |
| LABOR | WorkCenter | WorkCenter |
