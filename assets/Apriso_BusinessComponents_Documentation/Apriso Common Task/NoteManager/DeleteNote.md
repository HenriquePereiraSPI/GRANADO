# DeleteNote

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.NoteManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks`
**Status:** Active
**Keywords:** Note, Task, Delete, DeleteNote

## Description

Deletes an existing NOTE record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoteID | Integer | Yes | ID of a note to be deleted. |

## Validations

Validation fails if:
 
 
- NoteID does not exist in the NOTE table.

## System Processing

A note is deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTE | All Columns | Row will be deleted |
