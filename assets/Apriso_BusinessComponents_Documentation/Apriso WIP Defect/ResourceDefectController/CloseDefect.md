# CloseDefect

**Category:** Apriso/WIP/Defect
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceDefectController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This Business Component method is used to close an opened event of the Defect type. Each defect is represented in the database as a record in RESOURCE_LABOR, column LaborType=11. The opened defect has 1 in the Status column and the EndTime column empty (NULL). This BC sets EndTime passed as an ActivityTime BC parameter and updates Status column to 2.
 

Because the defect is coupled only with the Resource, the method passes neither the order nor the product information to the RESOURCE_LABOR table. Neither the information about the machine span nor the machine event (= State) is populated.
 
 
- If any of the ReasonCode, Occupation, or Comment parameters is passed (the passed value is not NULL), the new value overwrites the previous value (set by the StartDefect BC). 
- The ReasonCode, Occupation, and Comment properties can be modified only once, when the defect is being closed. The CloseDefect BC cannot be used to modify any parameter of a CLOSED defect. The parameters for the CLOSED defect can be modified only in Machine Time Cockpit.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | The defect Resource labor to close. |
| Input | ReasonCode | Char | No | The Reason Code for closing the defect. |
| Input | Comment | Char | No | The closing time for the defect. |
| Input | Occupation | Char | No | The occupation for closing the defect. |
| Input | ActivityTime | DateTime | Yes | The end time of closing the defect. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |

## Validations

- The system validates if a record with the given ResourceLaborID exists in the RESOURCE_LABOR table in the Open status (Status=1, EndTime is null). 
- The system validates if a given occupation exists in the same Facility as the Resource. 
- The system validates if a given Reason Code exists in the REASON_CODE table. It is not validated if it exists in the RESOURCE_REASON_CODE table.

## System Processing

- The system finds the defect to be closed (the record in the RESOURCE_LABOR table) via the passed ResourceLaborID. If the defect is closed, an error message is displayed. 
- If a Comment parameter is passed to the method is not null, the record is also created in the NOTE table and is linked to the Resource labor by these fields: RESOURCE_LABOR.NOTEID and NOTEID. If the Comment has existed since the defect start, the same NOTEID is used (RESOURCE_LABOR.NOTEID is not updated), and the old comment text in the NOTE.DESCRIPTION column is replaced with a new value of the Comment parameter. If the Comment was set during the defect start and a null parameter was passed to the CloseDefect method, the old value of the comment is left. 
- The same logic as for Comments is applied to the ReasonCode and Occupation parameters: if values are passed to the CloseDefect BC that are not null, the new values replace the old ones.

## Pre-Conditions

-  **Important**: there must be a valid ResourceLaborId provided as an Input. 
- ActivityTime must be provided as an Input, but it is not validated against the current time or the existence of any other machine events (like Spans).

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.MachineTime.ResourceDefectController  
- TRANSACTION_HISTORY_RESOURCE  
- TRANSACTION_HISTORY_LABOR

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | ID (read only) | * ResourceLaborId |
|  | ENDTIME | * ActivityTime (local) |
|  | STATUS | 2 |
|  | REASONCODE | ReasonCode |
|  | OCCUPATIONCODE | OccupationCode |
|  | FACILITY | Populated from RESOURCE_.Facility if OccupationCode provided. |
|  | NOTEID | The reference to NOTE.Id containing the comment's text. |
| NOTE | ID | Populated from RESOURCE_LABOR.NoteId |
|  | NOTETYPE | 2 |
|  | SUBJECT | ResourceName |
|  | KEYWORDS | Populated from RESOURCE_LABOR.Id. |
|  | DESCRIPTION | The comment. |
|  | LANGUAGEID | From the employee personalization. |
