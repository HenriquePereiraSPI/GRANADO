# CancelTask

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.TaskManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

This Business Component method is used to change the state of the task into a cancelled state.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TaskID | Integer | Yes | The task to cancel. |

## Validations

- The system validates that the task exists.

## System Processing

- The system sets the task status to Cancelled. 
- The system sets all the child task statuses to Cancelled.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TASK | TaskStatus | Cancelled |
