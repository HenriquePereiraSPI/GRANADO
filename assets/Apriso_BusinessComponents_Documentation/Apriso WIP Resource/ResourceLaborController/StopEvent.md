# StopEvent

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This Business Component method is used to stop an event of the State type and involves closing all the child product/order events.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | The Resource name of the event to be stopped. |
| Input | ResourceType | Integer | Yes | The Resource type of the event to be stopped. |
| Input | EmployeeID | Integer | No | The ID of the employee that stops the event. |
| Input | ActivityTime | DateTime | Yes | The stop time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | ReasonCode | Char | No | The Reason Code. |
| Input | Comment | Char | No | The comment to be added as note. |
| Input | Occupation | Char | No | The occupation of the employee. |

## Validations

- The system checks if a valid time is passed. If not, an error message is displayed stating that StopTime has not been specified. 
- The system checks if there is an open event of the State type that exists for the ResourceName and ResourceType parameters in which StartTime is greater than ActivityTime. If there is no such event, an error message is displayed stating that the open speed event does not exist. 
- The system validates if there is exactly one State found. If not, an error message is displayed stating that multiple open States are found within the end time. 
- The system checks if the Activity time is not within a different State. If it is, an error message is displayed stating that the EndTime is within another State. 
- The system checks if the appropriate master records exist in DELMIA Apriso when ReasonCode, EmployeeID, and Occupation are specified.

## System Processing

- The system updates the EndTime of the open State record found for the ResourceName and ResourceType parameters in which StartTime is greater than ActivityTime and the EndTime is equal to ActivityTime. 
- The system updates all the child product/order events with the new EndTime equal to ActivityTime (if the product/order events events start during the previous State events, StopOrder [StopProduct] is called to split the child event according to the State events).

## History Recording in Production

- TRANSACTION_HISTORY – Transaction Name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | EndTime | ActivityTime |
|  | EndEmployeeID | EmployeeID (if provided) |
|  | Status | 2 (Closed) |
|  | RegularHours | Difference of EndTime and StartTime in hours |
|  | NoteID | Comment |
|  | ReasonCode | ReasonCode |
|  | Facility | Occupation Facility |
|  | Occupation | Occupation |
| NOTE | Description | Comment |
