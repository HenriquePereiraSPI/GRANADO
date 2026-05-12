# CompleteWipOrder

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderCompleter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to change the status of a WIP Order to Complete. This functionality will generally be used in conjunction with other BCs (e.g., ReportProduct) and usually after the CompleteWIPOperation BC has been executed for all the Operations on that WIP Order. 
 

The scope of this BC only covers the actual completing of the WIP Order and will perform the necessary checks to see if there are open WIP Operations for that WIP Order. If there are WIP Operations still open, then an option is provided to either force a closure, which will automatically complete all the open Operations, or not permit the closure until all the Operations are completed.
 

This BC also affects the tasking, because when a WIP Operation is closed, all the subsequent related tasks should also be taken care of (that is, removed).
 

 **Supported Features** 
 
 
-  

WIP Order status validation
  
-  

WIP Order hold validation (cannot be Completed when WIP Order is on hold)
  
-  

WIP Operation hold validation (the WIP Order cannot be Completed when the WIP Operations are on hold)
  
-  

The force Complete option to allow for completing all the open WIP Operations
  
-  

Transaction history
  
 

 **Unsupported Features** 
 
 
-  

Completing a WIP Order when it is on hold
  
-  

Completing a WIP Order when there are open tasks for any Operation on that WIP Order (apart from the current task)

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order to be completed. |
| Input | WipOrderType | Integer | Yes | Wip order type of the wip order to be completed. |
| Input | ForceComplete | Boolean | Yes | Bool, Indicates if wip operations are to be comleted too. If there are some wip operations not completed or cancelled yet and the flag is set to false then an error is returned, |

## Validations

- The system checks that the inputted WIPOrderNo and WIPOrderType exist. 
- The system validates that the WIP Order status is either new or started (returns an error if the WIP Order is on hold). 
- The system validates that ForceComplete is True if any of the WIP Operations of the WIP Order is not completed or cancelled. 
- If there is any WIP Operation to be completed, the system validates that it is new or started and not on hold. Additionally, the system validates that there are no WIP serials started on that WIP Operation and that there is no child/singular task attached to the WIP Operation.

## System Processing

- If ForceComplete = True, the system completes all the new and started WIP Operations by setting its status to Completed and persisting the completion date with the current UTC time (WIP_OPERAION. ActualCompletionDate). Additionally, the system deletes the master task attached to the WIP Operation (if found). 
- If ForceComplete = False, the system continues processing. 
- The system completes the WIP Order by setting its status to Completed and persisting the completion date with the current UTC time (WIP_ORDER. ActualCompletionDate). 
- The transaction history is recorded for all the WIP Orders and Operations for which the status is successfully changed.

## Pre-Conditions

See the Validations section.

## Published Events

The tasking system is notified to delete the master task.

## History Recording in Production

The transaction history is recorded for all the WIP Orders and Operations for which the status is successfully changed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WipOrderNo | The inputted WipOrderNo (required). |
| WIP_ORDER | WipOrderType | The inputted WipOrderType (required). |
| WIP_ORDER | WorkOrderStatus | 3 - Completed |
| WIP_OPERATION | WipOrderNo | The inputted WipOrderNo. |
| WIP_OPERATION | WipOrderType | The inputted WipOrderType. |
| WIP_OPERATION | OprSequenceNo | All the retrieved Operations of the given WipOrder. |
| WIP_OPERATION | OperationStatus | 5 - Completed (if ForceComplete=1 & no open tasks). |
