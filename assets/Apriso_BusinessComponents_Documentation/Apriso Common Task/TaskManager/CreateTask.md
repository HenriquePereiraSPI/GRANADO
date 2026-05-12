# CreateTask

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.TaskManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

This Business Component method creates a task for a Standard Operation that is not invoked as part of an Execution order. For example, DELMIA Apriso uses this method to create tasks for Standard Operations. The OutTaskId (output) is the TaskId for the created task.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StdOperationID | Integer | Yes | Standard Operation. |
| Input | WipOrderNo | Char | Yes | Number of the Wip order. |
| Input | WipOrderType | Integer | Yes | The type of the Wip order. |
| Input | OprSequenceNo | Char | Yes | The operation sequence number. |
| Output | OutTaskID | Integer | No | The resulting task. |

## Validations

- System checks if a Standard Operation exists . 
- System checks if work operation exists.

## System Processing

- New record is created. 
- Task type is set to Standard Operation. 
- Task work operations fields are populated with parameter wip operation fields. 
- Task status is new. 
- Task is committed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TASK | TaskType | StandardOperation |
|  | OperationID | Parameter OperationID |
|  | WipOrderNo | Parameter WipOrderNo |
|  | WipOrderType | Parameter WipOrderType |
|  | OprSequenceNo | Parameter OprSequenceNo |
|  | TaskStatus | New |
