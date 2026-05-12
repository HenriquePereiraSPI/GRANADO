# UpdateNote

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.NoteManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks`
**Status:** Active
**Keywords:** Note, Task, UpdateNote, Update

## Description

Updates a NOTE record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoteID | Integer | Yes | ID of a note to be updated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| NoteType | Short | Type of a note as configured in the NOTE_TYPE table. |
| Group | Char | Name of the group. |
| GroupType | Short | Type of the group. |
| GroupClassID | Integer | Class ID of the group. |
| Subject | Char | Subject of the note. Limited to 50 characters. |
| Keywords | Char | Keywords for the note. Limited to 50 characters. |
| EmployeeID | Integer | Specifies the EmployeeID that entered the note. Must exist in the EMPLOYEE table. |
| WorkCenter | Char | Links a note to a work center. WorkCenter must exist in the WORK_CENTER table. |
| LanguageID | Integer | Specifies the language of the entity. LanguageID must exist in the LANGUAGE table. |
| InstanceName | Char | Name of the server where the note has been created. Limited to 255 characters. |
| ProgressStatus | Integer | The link to ProgressStatus. |
| Description | Char | Description of the note. |

## Validations

Validation fails if:
 
 
- NoteID does not exist in the NOTE table. 
- NoteType does not exist in the NOTE_TYPE table. 
- Group, GroupType, and GroupClassID do not exist as primary keys in the GROUP_ table. 
- Group, GroupType, and GroupClassID are not specified together and do not exist in the GROUP_ table. 
- Subject contains more than 50 characters. 
- Keywords contain more than 50 characters. 
- EmployeeID does not exist in the EMPLOYEE table. 
- WorkCenter does not exist in the WORK_CENTER table. 
- LanguageID does not exist in the LANGUAGE table. 
- InstanceName contains more than 255 characters. 
- ProgressStatus does not exist in the PROGRESS_STATUS table. 
 

Validation passes if:
 
 
- Foreign Key and Character limit constraints are met. 
- Parameters are omitted (if omitting Group, GroupType, or GroupClassID parameters, all 3 must be omitted).

## System Processing

A note is updated.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTE | NoteType | Parameter NoteType |
|  | Group_ | Parameter Group |
|  | GroupType | Parameter GroupType |
|  | GroupClassID | Parameter GroupClassID |
|  | Subject | Parameter Subject |
|  | Keywords | Parameter Keywords |
|  | EmployeeID | Parameter EmployeeID |
|  | WorkCenter | Parameter WorkCenter |
|  | LanguageID | Parameter LanguageID |
|  | InstanceName | Parameter InstanceName |
|  | ProgressStatus | Parameter ProgressStatus |
|  | Description | Parameter Description |
