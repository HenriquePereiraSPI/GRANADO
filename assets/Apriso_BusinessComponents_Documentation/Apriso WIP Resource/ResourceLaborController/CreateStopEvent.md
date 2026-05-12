# CreateStopEvent

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

The purpose of this business component is to create a closed State event.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | The resource name. |
| Input | ResourceType | Integer | Yes | The resource type. |
| Input | EmployeeID | Integer | No | The ID of an employee who creates the event. |
| Input | Speed | Decimal | No | The speed of the resource for the event. |
| Input | SpeedPercentage | Decimal | No | The speed percentage for the resource for the event. |
| Input | SpeedUom | Char | No | The UOM of the speed for the resource for the event. |
| Input | ReasonCode | Char | No | The reason code. |
| Input | Comment | Char | No | A comment. |
| Input | StartTime | DateTime | Yes | The local start time for the event. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | StopTime | DateTime | Yes | The local stop time for the event. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | Occupation | Char | No | The occupation code. |
| Input | ReopenChildren | Boolean | Yes | Defines if any previous event is reopened. |

## Validations

- System checks if the appropriate master records exist in DELMIA Apriso when the ResourceName, ResourceType, EmployeeID, Reason Code and SpeedUOM, Occupation are specified. 
- System checks if there is a Span record existing for the specified StartTime. 
- System checks if the new event will not be overlapping with the existing State records. 
- System checks if the new event will not be entirely covered by another existing State record. 
- System validates if the Start Time is not later than the End Time.

## System Processing

System creates the new State record(s) with the following attributes:
 
 
- Start Time 
- End Time 
- StartEmployeeID 
- Speed 
- Speed UOM 
- Speed Percentage 
- Reason Code 
- Comment 
- Occupation 
- ParentID - Identifier of Span record found based on ResourceName, ResourceType, StartTime passed as the parameters 
 

The number of new State records created depends on the number of Span records existing for the given ResourceName, ResourceType for the period <StartTime;EndTime>, where StartTime and EndTime are values passed as parameters of the BC method. For each Span there is one State created with the same attributes but different Start/End Time (adjusted to Start/End Time of the Span record).
 

Note: ReopenChildren parameter is not used and planned for the future version.

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | ResourceName | ResourceName* |
|  | ResourceType | ResourceType* |
|  | StartEmployeeId | EmployeeID |
|  | Speed | Speed* |
|  | UomCode | SpeedUOM* |
|  | SpeedPercentage | SpeedPercentage |
|  | ReasonCode | ReasonCode |
|  | NoteID | Comment |
|  | StartTime | StartTime* |
|  | EndTime | EndTime* |
|  | Occupation | Occupation |
|  | Facility | RESOURCE_.Facility |
|  | Status | 1 |
|  | LaborType | 8 |
