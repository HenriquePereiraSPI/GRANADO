# CompleteOrderSchedule

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderRestatuser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to change the status of a WIP Operation to Complete (5). The BC requires that no child tasks are open for this Operation. The BC also makes it possible to complete the parent WIP Order at the same time as the WIP Operation (by setting the CompleteOrder flag to True). The parent WIP Order will be completed only if all the child WIP Operations are completed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order of the WIP Operation to be completed. |
| Input | WipOrderType | Integer | Yes | The WIP Order type of the WIP Operation to be completed. |
| Input | OprSequenceNo | Char | Yes | The WIP Operation to be completed. |
| Input | CompleteOrder | Boolean | Yes | Indicates if the WIP Order is to be completed. The WIP Order can be completed only if all the assinged WIP Operations are completed. Otherwise, an error is returned. |

## Validations

- The system checks that the inputted OprSequenceNo, WipOrderNo, and WipOrderType exist. 
- The system validates that the WIP Order and WIP Operation is not on hold and that their status is New or Started. 
- The system validates that there are no WIP Serials started on the WIP Operation. 
- The system validates that there are no open child/singular tasks (apart from the current master task) for that WIP Operation. If the open child/singular tasks are found, the system returns an error message.

## System Processing

- The system changes the status of the retrieved WIP Operation to Completed (5).  
- The system persists the actual UTC time in WIP_OPERATON.ActualCompletionDate.  
- If CompleteOrder = True and if all the children WIP Operations of the retrieved parent order are completed, then the system completes the parent order by setting WIP_ORDER.WorkOrderStatus to Completed and WIP_ORDER.ActualCompletionDate to the current UTC time. 
- If CompleteOrder = False, the system continues processing. 
- The system deletes the master task (if found) by calling the DeleteTask BC. 
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
| WIP_ORDER | WipOrderNo | The inputted WipOrderNo (required) |
| WIP_ORDER | WipOrderType | The inputted WipOrderType (required) |
| WIP_ORDER | WorkOrderStatus | 3 - Completed (if CompleteOrder=1 and all the children WIP Operations are completed) |
| WIP_OPERATION | WipOrderNo | The inputted WipOrderNo |
| WIP_OPERATION | WipOrderType | The inputted WipOrderType |
| WIP_OPERATION | OprSequenceNo | The inputted OprSequenceNo (required) |
| WIP_OPERATION | OperationStatus | 5 - Completed (if no open tasks) |
