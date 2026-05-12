# StopOrder_v2

**Category:** Apriso/WIP/Order
**Class:** `FlexNet.BusinessFacade.Manufacturing.OrderStopper`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

This method allows for indicating that a Production Order has been stopped on a given Resource or Production Line by passing the End Time for the link created by the StartOrder_v92 BC method.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order number. |
| Input | WipOrderType | Integer | Yes | The WIP Order type. |
| Input | OprSequenceNo | Char | Yes | The Operation Sequence Number. |
| Input | ResourceName | Char | No | The Resource name. |
| Input | ResourceType | Integer | No | The Resource type. |
| Input | ProductionLine | Char | No | The Production Line Number. |
| Input | EmployeeID | Integer | No | The employee ID. |
| Input | ActivityTime | DateTime | No | The activity time. The value should be specified as local (it will be automatically converted and stored as UTC). |
| Input | ProductID | Integer | No | The Product ID. |
| Input | LotNo | Char | No | The Lot Number. |
| Output | LaborID | Integer | No | The ID of the updated LABOR record. |

## Validations

-  

The system validates the Production Order, Production Order Type, and Operation Sequence Number
  
- The system validates the Resource Name and Resource Type (if entered) 
- The system validates the Production Line (if entered)  
- The system validates the Product ID (if entered) 
 
- If the product is Lot-tracked, then the Lot Number is required 
 
- The system validates the ID of the employee who ends an order and is passed as the EndEmployeeID parameter 
- The system validates the Occupation Code against the OCCUPATION table (if entered) 
- The system validates the Work Center against the WORK_CENTER table 
- The system validates that there is exactly one open order record (a Resource labor record of the ORDER type) for ResourceName, ResourceType, WipOrderNo, WipOrderType, OprSequenceNo, LotNo, and ProductId 
 
- If the key above returns more than 1 record: "Multiple Started Orders Found For Resource" 
- If the key above returns 0 records: "No Started Order Found For Resource"  
 
- The system validates that EndTime >= StartTime ("Start Time For Order Greater Than Stop Time") 
- The system validates that there is exactly one State record (a Resource labor record of the STATE type) per each Resource of the ActivityTime parameter 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting

## System Processing

- If the EmployeeID parameter is passed and EmployeeID > 0, the system closes the open LABOR record for this employee (after validating that the employee exists) by executing the StopDirectEmployee BC method and passing the following: 
 
- WipOrderNo 
- WipOrderType 
- OprSequenceNo 
- ProductID 
- LotNo 
- ActivityTime 
 
- If the EmployeeID parameter is passed and EmployeeID = -1, the system closes all open LABOR records based on the following: 
 
- WipOrderNo 
- WipOrderType 
- OprSequenceNo. 
 
- The system retrieves the open Resource labor record, RESOURCE_LABOR, based on the passed parameters: 
 
- WipOrderNo, WipOrderType, OprSequenceNo (if LotNo and ProductId were not provided) 
- WipOrderNo, WipOrderType, OprSequenceNo, LotNo, ProductId (if LotNo is provided) 
- WipOrderNo, WipOrderType, OprSequenceNo, ProductId (if LotNo is not provided and ProductId is provided) 
 
- If a State event corresponding to the ActivityTime parameter is found during the validation (see above) and it is different than the ParentID value of the order record being stopped, then this Order event is divided accordingly 
 

 

For example:
 

 
 
- State events: 
 
- 08:00 AM - 09:00 AM 
- 09:00 AM - 10:00 AM 
- 10:00 AM - 11:00 AM 
- 11:00 AM - 12:00 PM 
 
- Order event (before) - created by the StartOrder BC method: 
 
- StartTime: 08:30 AM, EndTime: NULL, WO:1000200, Status: Open 
- The order event is stopped at 11:30 AM (StopOrder BC method) 
 
- Order events (after) - updated/created by StopOrder BC method: 
 
- StartTime: 08:30 AM, EndTime: 09:00 AM, WO:1000200, Status: Closed 
- StartTime: 09:00 AM, EndTime: 10:00 AM, WO:1000200, Status: Closed 
- StartTime: 10:00 AM, EndTime: 11:00 AM, WO:1000200, Status: Closed 
- StartTime: 11:00 AM, EndTime: 11:30 AM, WO:1000200, Status: Closed

## Pre-Conditions

- The StartOrder BC method was the call that generated the open order event (a Resource labor record of the ORDER type) for ResourceName, ResourceType, WipOrderNo, WipOrderType, OprSequenceNo, LotNo, and ProductId  
- The State event must exist (exactly one, open or closed) for a Resource corresponding to the activity time (ActivityTime parameter)

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Manufacturing.OrderStopper.StopOrder 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | EndEmployed | EmployeeID |
|  | Status | 2 |
| LABOR | EndTime | The time at which the labor ended in UTC. Populated from the ActivityTime Input. |
|  | EndTimeLocal | EndTime in the time zone local to the entity that closed it. |
|  | AdjustedStopTimeLocal | EndTimeLocal adjusted for clock tick, variance windows, and idle time. |
|  | LaborStatus | Set to 2 – Closed. |
|  | RegularHours | The duration calculated by the LABOR record’s StartTime and EndTime and adjusted for overtime and double time. |
|  | OverTimeHours | Same as RegularHours. |
|  | DoubleTimeHours | Same as RegularHours. |
|  | AdjustedStopTime | EndTime adjusted for clock tick, variance windows, and idle time. |
