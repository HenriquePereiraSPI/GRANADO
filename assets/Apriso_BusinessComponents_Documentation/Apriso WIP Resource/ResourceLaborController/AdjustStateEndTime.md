# AdjustStateEndTime

**Category:** Apriso/WIP/Resource
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceLaborController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This Business Component method is used to modify the end time of an event of the State type by providing the end time, the Reason Code of the modification, and a comment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The resource labor ID for the state that is being adjusted. |
| Input | NewEndTime | DateTime | Yes | The new end time for the state. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | ReasonCode | Char | No | The Reason Code for the change in the state start time. |
| Input | Comment | Char | No | The comment for the change. |

## Validations

- The system checks if the record identified by the ResourceLaborID identifier exists in the system and its type is State. 
- The system checks if the appropriate master record exists in DELMIA Apriso when the Reason Code is specified. 
- The system checks if the status of the state is Closed. If it is not, an error message is displayed starting that the resource labor status is not valid for adjust. 
- The system checks to make sure that the start time is not greater then the new end time. If it is, an error message is displayed stating that the start time must be less then the end time. 
- The system checks if there is any closed state contained entirely in the current updated state. If there is, an error message is displayed starting that the end time cannot be changed and the modification would delete the state record. 
- The system checks if there is any closed order/product that would be entirely contained in the state being modified. If such a record exists, an error message is displayed starting that the start time cannot be changed and the modification would delete the order/product record.

## System Processing

- If the end time is changed forwards, then the following actions are performed: 
 
- If the end time is within any other state, the system adjusts the start time of the next state. 
- The system retrieves all the child order/product events that have end times equal to the end time of the state. If the CoupleState flag was set for the state, then the end time of all the child records are updated accordingly to match the end time of the state. The CoupleState flag is set when the state is created using the CreateEvent_v94 BC.  
 
- If the end time is changed backwards, then the following actions are performed: 
 
- If the start time is equal to the new end time, then the state record is deleted; otherwise, it is updated with the new end time value. 
- If the AutoAdjust flag was set for the state being changed, then the next state is updated to match the new end time. The AutoAdjust flag is set when the state is created using the CreateEvent_v94 BC. 
- The system retrieves all the child order/product events and the start times of all those child records is updated accordingly to match the start time of the state.  
 
- If the new end time of the event is within the other span record, it is split accordingly as many times as Span records exist between the previous and the new end time. All the child order/product records are also split.

## History Recording in Production

- TRANSACTION_HISTORY – transaction name: FlexNet.BusinessFacade.MachineTimenufacturing.ResourceLaborController 
- TRANSACTION_HISTORY_WIP 
- TRANSACTION_HISTORY_RESOURCE

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | NoteID | Comment |
|  | ReasonCode | ReasonCode |
|  | EndTime | ActivityTime |
