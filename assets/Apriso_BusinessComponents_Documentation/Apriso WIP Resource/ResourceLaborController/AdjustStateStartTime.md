# AdjustStateStartTime

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This Business Component method is used to modify the start type of an event of the state type by providing the start time, the Reason Code of the modification, and a comment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The resource labor ID for the state that is being adjusted. |
| Input | NewStartTime | DateTime | Yes | The new start time for the state. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | ReasonCode | Char | No | The Reason Code for the change in the state start time. |
| Input | Comment | Char | No | The comment for the change. |

## Validations

- The system checks if the record identified by the ResourceLaborID identifier exists in the system and its type is State. 
- The system checks if the start time is not greater than the end time. 
- The system checks if an appropriate master record exists in DELMIA Apriso when the Reason Code is specified. 
- The system checks if there is any open state started at or after the new start time. If it is, an error message is displayed stating that the adjusted start time is within another state. 
- The system checks if there is any closed state contained entirely in the current state. If there is, an error message is displayed stating that the start time cannot be changed and the modification would delete the state record. 
- The system checks if the start time changed backwards and if there is any open order/product started at or after the new start time. If such a record exists, an error message is displayed stating that the start time cannot be changed and the modification would delete the order/product record. 
- The system checks if the start time changed backwards and if there is any closed order/product contained entirely in the current state. If such a record exists, an error message is displayed stating that the start time cannot be changed and the modification would delete the order/product record. 
- The system checks if the start time changed forwards and if there is any closed order/product that would be deleted. If there is, an error message is displayed stating that the start time cannot be changed and the modification would delete the order/product record.

## System Processing

- If the start time is changed backwards, then the following actions are performed:  
 
- If the start time is within any other state, then the system adjusts the end time of that state. 
- The system retrieves all the child order/product events with start times equal to the start time of the state. If CoupleState flag was set for the state, than the start time of all the child records are updated accordingly to match the start time of the state.  
 
- If the start time is changed forwards, then the following actions are performed: 
 
- If the end time is equal to the new start time, then the state record is deleted; otherwise, it is updated with the new start time value. 
- If there are child records with end times less than the new start time, an error message is displayed stating that a child record has been found with an end time less than the adjust time. 
- The system retrieves all the child order/product events and the start times of all those child records are updated accordingly to match the start time of the state.  
 
- If the new start time of the event is within the other span record, it is split accordingly as many times as Span records exist between the previous and the new start time. All child order/product records are also split.

## History Recording in Production

- TRANSACTION_HISTORY – transaction name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP  
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | NoteID | Comment |
|  | ReasonCode | ReasonCode |
|  | StartTime | ActivityTime |
