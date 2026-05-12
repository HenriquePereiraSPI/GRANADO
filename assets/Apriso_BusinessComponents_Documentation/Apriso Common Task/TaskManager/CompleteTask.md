# CompleteTask

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.TaskManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

This Business Component method is used to complete a task being worked on by a machine or an employee Resource. The BC deletes the child task (which includes the FI Cube) and its dependent entities and also decrements the number of concurrent Resources, which is tracked in the master task. The BC does not delete the master task.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TaskID | Integer | Yes | The task to complete. |

## Validations

- The system validates that the task exists. 
- The system validates that the task is not a master task. 
- The system validates that the task is started or cancelled.

## System Processing

- The system decrements the master task concurrent Resources by 1. 
- The system deletes the task. 
- The system deletes the task (if not singular). 
- The system deletes the task Resource uses. 
- The system deletes the FI Cube attached to the task.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TASK | MaxConcurrentResources | Decremented by 1 (only master task). |
|  | ALL | Record is deleted (child task, if not singular task). |
| FI_CUBE | ALL | Records removed if referencing deleted task. |
| TASK_RESOURCE_USE | ALL | Records removed if referencing deleted task. |
