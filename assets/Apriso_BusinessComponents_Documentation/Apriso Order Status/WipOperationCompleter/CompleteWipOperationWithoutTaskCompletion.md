# CompleteWipOperationWithoutTaskCompletion

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationCompleter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component is used to change the status of a WIP Operation to 'Complete' (5). This BC requires that no child/singular tasks (other than the task specified) be open for this Operation. The BC provides the option to complete the parent WIP Order at the same time as the WIP Operation (by setting the CompleteOrder flag to True). The parent WIP Order will be completed only if all the child WIP Operations are completed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Conditional | The WIP Order of the WIP Operation to be completed. Must exist in the system. |
| Input | WipOrderType | Integer | Yes | The WIP order type of the WIP Operation to be completed. |
| Input | OprSequenceNo | Char | Yes | The WIP Operation to be completed. |
| Input | CompleteOrder | Boolean | Yes | Indicates if the WIP Order is to be completed. The WIP Order can be completed only if all the assigned WIP Operations are completed; otherwise, an error is returned. |
| Input | TaskID | Integer | No | The current task (child task ID). Not required if there are no open tasks assigned to the specified WIP Operation. A WIP Operation cannot be completed if there are tasks assigned to it, but it is possible to do this if the provided task ID is the last child task open against the WIP Operation. |

## Validations

- The system checks that the inputted OprSequenceNo, WIPOrderNo, and WIPOrderType exist. 
- The system validates that the WIP Order and WIP Operation is not on hold and that their status is New or Started. 
- If TaskID is specified, the system validates that the task exists. 
- The system validates that there are no WIP serials started on the WIP Operation. 
- If TaskID is provided, the system validates that there is only one open child/singular task for the WIP Operation and it is the inputted task. If no task is found, the system continues. Otherwise, if TaskID is not provided, the system checks that there are no open tasks (apart from the inputted TaskID, if any) for that WIP Operation. (If the open tasks are found, the system returns an error message).

## System Processing

- The system changes the status of the retrieved WIP Operation to Completed (5). 
- The system persists the actual UTC time in WIP_OPERATON.ActualCompletionDate.  
- The system persists the actual duration in seconds in WIP_OPERATION.ActualDurationSeconds. 
- If CompleteOrder = True and if all the children WIP Operations of the retrieved parent order are completed, the system completes the parent order by setting WIP_ORDER.WorkOrderStatus to Completed and WIP_ORDER.ActualCompletionDate to the current UTC time. 
- If CompleteOrder = False, the system continues processing. 
- If TaskID is specified, the system retrieves the master task and deletes it by calling the DeleteTask BC. If the master task is not found, an error message is returned. Otherwise, if TaskID is not specified, the system deletes the master task (if found) by calling the DeleteTask BC. 
- The transaction history is recorded for all the WIP Orders and Operations for which the status is successfully changed.

## Pre-Conditions

The WIP Operation must exist.

## Published Events

The tasking system is notified to delete the master task.

## History Recording in Production

The system records the transaction history each time a WIP Operation or WIP Order status is changed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WipOrderNo | The inputted WipOrderNo (required). |
| WIP_ORDER | WipOrderType | The inputted WipOrderType (required). |
| WIP_ORDER | WorkOrderStatus | 3 - Completed (if CompleteOrder=1 and all the children WIP Operations are completed). |
| WIP_OPERATION | WipOrderNo | The inputted WipOrderNo. |
| WIP_OPERATION | WipOrderType | The inputted WipOrderType. |
| WIP_OPERATION | OprSequenceNo | The inputted OprSequenceNo (required). |
| WIP_OPERATION | OperationStatus | 5 - Completed (if no open tasks) |
