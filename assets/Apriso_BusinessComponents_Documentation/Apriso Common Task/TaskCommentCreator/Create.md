# Create

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Foundation.TaskCommentCreator`
**Assembly:** `FlexNet.BusinessFacade.Foundation.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create a note for the specified task. The note is associated to the task by the ReferenceID field.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes |  |
| Input | TaskID | Integer | Yes |  |
| Input | NoteType | Integer | Yes |  |
| Input | Group | Char | Yes |  |
| Input | GroupType | Integer | Yes |  |
| Input | GroupClass | Integer | Yes |  |
| Input | Subject | Char | No |  |
| Input | Keywords | Char | No |  |
| Input | Description | Char | No |  |
| Input | LanguageID | Integer | Yes |  |

## System Processing

System creates an entry in the Note table; the ReferenceID field is populated with the TaskID parameter provided.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTE | new row | All provided parameters are inserted directly
      into the corresponding data columns. |
