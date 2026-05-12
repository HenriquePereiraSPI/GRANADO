# StartDefect

**Category:** Apriso/WIP/Defect
**Class:** `FlexNet.BusinessFacade.MachineTime.ResourceDefectController`
**Assembly:** `FlexNet.BusinessFacade.MachineTime.dll`
**Status:** Active

## Description

This method creates an opened event of type Defect. Each Defect is represented in the database as a record in Resource_labor, column LaborType=11. The opened Defect has a 1 in the Status column and an empty (NULL) EndTime column.
 

StartTime indicates when the given Defect was started on the resource, while EndTime indicates when the problem was fixed and production was started again. Since the Defect is coupled only with the Resource, the method passes neither the Order nor Product information to the Resource_labor table. Neither the information about the Machine Span nor Machine Event (=State) is populated. The method passes only the ReasonCode, Occupation and Comment parameters that describe the problem.
 

The method returns the ID of the newly created record in Resource_Labor.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | The resource name to start the defect on. |
| Input | ResourceType | Integer | Yes | The resource type. |
| Input | ReasonCode | Char | No | The reason code for starting the defect. |
| Input | Comment | Char | No | Any comments to be associated with the defect. |
| Input | Occupation | Char | No | The occupation to be used for indirect labor. |
| Input | ActivityTime | DateTime | Yes | The start time of the defect. The value should be specified as local (it will be automatically converted and stored as UTC). The records are saved with milliseconds accuracy. |
| Output | CreatedResourceLaborID | Integer | No | The ID of the created Resource Labor Defect record. |

## Validations

- System validates if a record with a given ResourceName and ResourceType exists in the Resource_ table. 
- System validates if a given Occupation exists in the same Facility as the Resource 
- System validates if a given Reason Code exists in the Reason_code table, not validated if it exists in the Resource_reason_code table.

## System Processing

System creates a resource labor - record in RESOURCE_LABOR table - with the values specified in the table below. If not null Comment parameter is passed to the method, additionally the note record is created - record in NOTE table - linked to resource labor by the fields: RESOURCE_LABOR.NOTEID and NOTEID.

## Pre-Conditions

-  ** Important **: There must be both a valid ResourceName and ResourceType provided as inputs. 
- There must be an ActivityTime provided as an input, but it is validated neither against the current time nor existence of any other Machine Events (like Spans)

## History Recording in Production

- TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.MachineTime.ResourceDefectController 
- TRANSACTION_HISTORY_RESOURCE 
- TRANSACTION_HISTORY_LABOR

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | RESOURCENAME | * ResourceName |
|  | RESOURCETYPE | * ResourceType |
|  | LABORTYPE | 11 |
|  | STARTTIME | * ActivityTime (local) |
|  | STATUS | 1 |
|  | REASONCODE | ReasonCode |
|  | OCCUPATIONCODE | OccupationCode |
|  | FACILITY | Populated from Resource_.Facility if OccupationCode provided |
|  | NOTEID | Reference to NOTE.Id table containing the comment's text. |
| NOTE | ID | Populated from RESOURCE_LABOR.NoteId |
|  | NOTETYPE | 2 |
|  | SUBJECT | ResourceName |
|  | KEYWORDS | Populated from RESOURCE_LABOR.Id |
|  | DESCRIPTION | Comment |
|  | LANGUAGEID | From employee personalization |
