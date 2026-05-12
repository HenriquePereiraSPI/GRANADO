# CancelWipOrder

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderCanceller`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to cancel a WIP Order. When this happens, no transactions can occur against that WIP Order or its Operations. Once the order has been cancelled, it can no longer be worked on and cannot be un-cancelled.
 

This transaction cannot be reversed.
 

An option has been provided to allow for the cancellation of a started WIP Order. Whenever a cancellation is to be performed, the employee must select a valid "cancel" Reason Code and will also have the option of entering a user comment. When the WIP Order has holds against it, these holds will be removed upon deletion.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order to be cancelled. |
| Input | WipOrderType | Integer | Yes | The WIP Order type of the WIP Order to be cancelled. |
| Input | ReasonCode | Char | Yes | The Reason Code of the cancelling Operation. |
| Input | UserComment | Char | Yes | The user comment used to populate the transaction history. |
| Input | CancelStartedOrder | Boolean | No | Indicates if a started WIP Order is to be cancelled. If the WIP Order is already started and the flag is false, an error is returned. |

## Validations

- The system validates that the inputted WIPOrderNo and WIPOrderType exist. 
- The system validates that the WIP Order status is either New or Started (an error is returned if the WIP Order is on hold). 
- The system validates that the CancelStartedOrder flag is set to True when the WIP Order is started. 
- The system validates that the Reason Code entered is valid for this function, of the Cance type, and valid within the Department. 
- The system validates that for each WIP Operation of the WIP Order, there is no WIP serial started on the WIP Operation and that there is no child/singular task attached to the WIP Operation.

## System Processing

- The system cancels the specified WIP Order. If the type is MaintenanceOrder, PreventiveMaintenanceOrder, or ReactiveMaintenanceOrder and it was previously in the New state, then the system updates the next related Maintenance date for the related Equipment.

## Pre-Conditions

See Validations.

## Published Events

The tasking system is notified.

## History Recording in Production

A transaction history record is created for all WIP Orders and WIP Operations for which the status is successfully changed to Cancelled. The inputted Reason Code & user comment are stored in the history records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WipOrderNo | The inputted WipOrderNo. |
| WIP_ORDER | WipOrderType | The inputted WipOrderType. |
| WIP_ORDER | WorkOrderStatus | 5 - Cancelled |
| WIP_OPERATION | WipOrderNo | The inputted WipOrderNo. |
| WIP_OPERATION | WipOrderType | The inputted WipOrderType. |
| WIP_OPERATION | OprSequenceNo | All the retrieved Operations of the given WIP Order. |
| WIP_OPERATION | OperationStatus | 6 - Cancelled |
| EQUIPMENT | NextMaintenanceDate | The minimum date of all the WIP Orders that are in the New state and in one of the following WIP Order types: MaintenanceOrder, PreventiveMaintenanceOrder, ReactiveMaintenanceOrder. |
