# ContinueTask

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.TaskManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

The ContinueTask method re-starts a previously abandoned task, setting the Task.EmployeeID to Task.LastEmployeeID and Task.LastEmployeeID to NULL.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TaskID | Integer | Yes | Task to continue. |
| Input | EmployeeID | Integer | Yes | Employee which is continuing task. |

## Validations

- Task exists. 
- Employee exists.

## System Processing

- Task last employee id field is populated with task employee id field. 
- Task employee id field is populated parameter employee id.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TASK | EmployeeID | Parameter EMPLOYEEID |
|  | LastEmployeeID | The old TASK.EmployeeID |
