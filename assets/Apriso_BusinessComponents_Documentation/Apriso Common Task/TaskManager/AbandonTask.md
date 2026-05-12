# AbandonTask

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.TaskManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

This Business Component method is used to alter the state of a task in order to reflect an abandoned status.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TaskID | Integer | Yes | The task to abandon. |

## Validations

- The task must exist.  
- The task type must be Labor. 
- The task must be currently started, held, or cancelled.

## System Processing

- The system sets the task's Last Employee field to the current task employee. 
- The system sets the task's Current Employee field to blank. 
- The system sets the task's Status to Abandoned.

## History Recording in Production

FlexNet.BusinessFacade.Common.Tasks.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TASK | ID | Inputted TaskID |
|  | EmployeeID | NULL |
|  | LastEmployeeID | TASK.EmployeeID |
|  | TaskStatus | Abandoned |
