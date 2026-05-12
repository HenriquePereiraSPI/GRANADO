# StartCloseDefect

**Category:** Apriso/WIP/Defect
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceDefectController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This method acts in almost the same way as StartDefect. The only differences are:
 
 
- Both StartTime and EndTime must be passed, the new Defect is created in CLOSED status (2). 
- Parameters: ReasonCode, Occupation and Comment can be set only once, when CLOSED defect is created (but still can be modified in Machine Time Cockpit). 
 This BC uses the validation, system processing, and conditions of StartDefect and CloseDefect, respectively. It also affects the same database tables. If StartDefect fails, StopDefect is not executed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | Resource name. |
| Input | ResourceType | Integer | Yes | Resource type. |
| Input | ReasonCode | Char | No | Reason Code. |
| Input | Comment | Char | No | Comment. |
| Input | Occupation | Char | No | Occupation code. |
| Input | StartTime | DateTime | Yes | Defect start time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | CloseTime | DateTime | Yes | Defect close time. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Input | CreatedResourceLaborID | Integer | No | ID of the created defect. |
