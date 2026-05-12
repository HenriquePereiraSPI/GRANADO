# CreateSimpleCheckListRecord

**Category:** Apriso/Common/Checklist
**Class:** `FlexNet.BusinessFacade.Common.ChecklistController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

Creates new entries in following tables: CHECK_LIST_HISTORY, CHECK_POINT_HISTORY, additionally component allows updates in CHECK_LIST_HISTORY.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CheckListHistoryId | Integer | No | Id of the checklist that user is answering. Can be null, if user answers only one checkpoint. |
| Input | ResourceName | Char | No | Name of resource user is using. Can be null. |
| Input | ResourceType | Integer | No | Type of resource user is using. Can be null. |
| Input | EmployeeId | Integer | Yes | Id of an employee, who is answering checklist. Cannot be null. |
| Input | WipOrderNo | Char | No | WipOrderNo user is executing. Can be null. |
| Input | WipOrderType | Integer | No | WipOrderType user is executing. Can be null |
| Input | OprSequenceNo | Char | No | OprSequenceNo user is executing. Can be null. |
| Input | CheckPointId | DateTime | Yes | Id of the checkpoint that was used to show the question. Cannot be null. |
| Input | CheckPointValueId | Integer | No | Id of an answer user gave. Can be null. |
| Input | Value | Char | No | Value of an answer user gave. Can be null. |
| Input | AnsweredOn | DateTime | No | Date/time user answered the question. Cannot be null. |

## Validations

- CheckListId must exist in CHECK_LIST table (if specified). 
- ResourceType and ResourceName must exist in RESOURCE_ table (if specified). 
- EmployeeID must exist in EMPLOYEE table. 
- StartedOn should have values different than DateTime.MinValue = 00:00:00.0000000, January 1, 0001). 
- CheckListHistoryID must exist in CHECK_LIST_HISTORY table. 
- CheckPointID must exist in CHECK_POINT table. 
- CheckPointValueId must exist in CHECK_POINT_VALUE table (if specified). 
- If AnsweredOn was provided it should have values different than DateTime.MinValue = 00:00:00.0000000, January 1, 0001). 
- CheckListHistoryID must exist in CHECK_LIST_HISTORY table. 
- CompletedOn must be provided and it should have values different than DateTime.MinValue = 00:00:00.0000000, January 1, 0001).

## System Processing

- System creates Checklist History Record. 
- System adds Checklist Answer. 
- System closed Checklist History.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CHECK_LIST_HISTORY | CheckListID | Inputted CheckListID |
|  | ResourceName | Inputted ResourceName |
|  | ResourceType | Inputted ResourceType |
|  | EmployeeId | Inputted EmployeeId |
|  | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
|  | StartedOn | Inputted StartedOn |
| CHECK_POINT_HISTORY | CheckListHistoryID | Inputted CheckListHistoryID |
|  | CheckPointID | Inputted CheckPointID |
|  | CheckPointValueId | Inputted CheckPointValueId |
| CHECK_LIST_HISTORY | CheckListHistoryID | Inputted CheckListHistoryID |
|  | CheckListHistoryID | Inputted CheckListHistoryID |
