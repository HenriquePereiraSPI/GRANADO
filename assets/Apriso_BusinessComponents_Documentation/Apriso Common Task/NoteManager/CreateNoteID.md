# CreateNoteID

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.NoteManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

The purpose of this Business Component is to generate or retrieve a NoteID for any table. This NoteID can then be used to link notes to the record in the specified table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TableName | Char | Yes | Name of the table to create the note for. |
| Output | NoteID | Integer | No | Created note ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| The name of the primary key column for the specified table as they appear in the table definition. | The data type of the primary key. | The value of the primary key used to match for a record in the table specified in the TableName input. Create additional input as necessary if the table requires more than one column as primary key. For example, if the specified TableName is ATTENDANCE_APPROVAL, then add three additional input to the business component, named AttendanceID, ApprovalEmployeeID, and Revision with the data types as Integer. |

## Validations

- The TableName Input must be provided. 
- The table specified must contain a NoteID column. 
- Dynamic Input(s) matching the primary key column(s) of the table specified must be provided. 
- Dynamic Input(s) data type also must match the data type of the primary key column(s). 
- The value of the primary key column specified must exist in the specified table.

## System Processing

System retrieves the record from specified table using the dynamic input of primary keys. System checks if a NoteID is linked to this record: If a NoteID is already linked to the record, then this NoteID is outputted. Else System generates a NoteID for this record: System creates a record in NOTE table and updates the record.NoteID with the NoteID just created. System outputs the NoteID

## Pre-Conditions

Record must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TableName input | PKs | Inputted TableName and PK |
|  | NoteID | NOTE.ID |
| NOTE | ID | Outputted NoteID |
