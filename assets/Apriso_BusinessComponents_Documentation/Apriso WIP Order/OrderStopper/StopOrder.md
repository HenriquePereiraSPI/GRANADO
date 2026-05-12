# StopOrder

**Category:** Apriso/WIP/Order
**Class:** `FlexNet.BusinessFacade.Manufacturing.OrderStopper`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

This method allows for indicating that a production order has been stopped on a given resource or production line, by passing the end time for the link created by the StartOrder_v92 BC method.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number. |
| Input | WipOrderType | Integer | Yes | WIP Order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | ResourceName | Char | No | Resource name. |
| Input | ResourceType | Integer | No | Resource type. |
| Input | ProductionLine | Char | No | Production line number. |
| Input | EmployeeID | Integer | No | Employee id. |
| Input | ActivityTime | DateTime | No | Activity time. The value should be specified as local (it will be automatically converted and stored as UTC). |
| Input | ProductID | Integer | No | Product ID. |
| Input | LotNo | Char | No | Lot number. |

## Validations

-  

System validates the Production Order, Production Order Type and Operation Sequence Number.
  
- System validates the Resource Name and Resource Type (if entered). 
- System validates the Production Line (if entered).  
- System validates the product ID (if entered) - if the product is Lot Tracked, then the Lot Number is required. 
- System validates the ID of the employee who ends an order and is passed as the EndEmployeeID parameter. 
- System validates the Occupation Code against the OCCUPATION table (if entered). 
- System validates the Work Center against the WORK_CENTER table. 
- System validates that there is exactly one open Order record (a resource labor record of ORDER type) for ResourceName, ResourceType, WipOrderNo, WipOrderType, OprSequenceNo, LotNo and ProductId. 
 
- If the key above returns more than 1 record: "Multiple Started Orders Found For Resource" 
- If the key above returns 0 records: "No Started Order Found For Resource" 
 
- System validates that EndTime >= StartTime ("Start Time For Order Greater Than Stop Time") 
- System validates that there is exactly one State record (a resource labor record of STATE type) per each resource of the ActivityTime parameter.

## System Processing

- If the EmployeeID parameter is passed and EmployeeID > 0, system closes the open LABOR record for this employee (after validation that the employee exists) by executing the StopDirectEmployee BC method and passing the following: 
 
- WipOrderNo 
- WipOrderType 
- OprSequenceNo 
- ProductID 
- LotNo 
- ActivityTime 
 
- If the EmployeeID parameter is passed and EmployeeID = -1, system closes all open LABOR records based on the following: 
 
- WipOrderNo 
- WipOrderType 
- OprSequenceNo. 
 
- System retrieves the open resource labor record, RESOURCE_LABOR, based on the passed parameters: 
 
- WipOrderNo, WipOrderType, OprSequenceNo (if LotNo and ProductId were not provided) 
- WipOrderNo, WipOrderType, OprSequenceNo, LotNo, ProductId (if LotNo is provided) 
- WipOrderNo, WipOrderType, OprSequenceNo, ProductId (if LotNo is not provided and ProductId is provided) 
 
- If a State event corresponding to the ActivityTime parameter is found during the validation (see above) and it is different than the ParentID value of the Order record being stopped, then this Order event is divided accordingly. 
 

Example:
 

State Events:
 

08:00 AM - 09:00 AM
 

09:00 AM - 10:00 AM
 

10:00 AM - 11:00 AM
 

11:00 AM - 12:00 PM
 

Order event (before) - created by StartOrder BC method:
 

StartTime: 08:30 AM, EndTime: NULL, WO:1000200, Status: Open
 

Order event is stopped at 11:30 AM (StopOrder BC method)
 

Order events (after) - updated/created by StopOrder BC method:
 

StartTime: 08:30 AM, EndTime: 09:00 AM, WO:1000200, Status: Closed
 

StartTime: 09:00 AM, EndTime: 10:00 AM, WO:1000200, Status: Closed
 

StartTime: 10:00 AM, EndTime: 11:00 AM, WO:1000200, Status: Closed
 

StartTime: 11:00 AM, EndTime: 11:30 AM, WO:1000200, Status: Closed

## Pre-Conditions

- The StartOrder BC method was the call that generated the open Order event (a resource labor record of ORDER type) for ResourceName, ResourceType, WipOrderNo, WipOrderType, OprSequenceNo, LotNo and ProductId. 
- The State event must exist (open or closed but exactly one) for a resource corresponding to the activity time (ActivityTime parameter).

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Manufacturing.OrderStopper.StopOrder 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | EndEmployeeID | EmployeeID |
|  | Status | 2 |
| LABOR | EndTime | The time at which the labor ended in UTC. Populated from the ActivityTime Input. |
|  | EndTimeLocal | EndTime in the time zone local to the entity that closed it. |
|  | AdjustedStopTimeLocal | EndTimeLocal adjusted for clock tick, variance windows, and idle time. |
|  | LaborStatus | Set to 2 – Closed. |
|  | RegularHours | The duration calculated by the LABOR record’s StartTime and EndTime and adjusted for overtime and double time. |
|  | OverTimeHours | Same as RegularHours. |
|  | DoubleTimeHours | Same as RegularHours. |
|  | AdjustedStopTime | EndTime adjusted for clock tick, variance windows, and idle time. |
