# HoldWipOperation

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationHolder`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to place a WIP Operation on Hold.
 

When this occurs, no transactions can occur against that WIP Operation until the Hold has been released. When the WIP Operation is placed on Hold, a valid Hold reason code must also be entered. Functionality also includes the ability to place the WIP Operation on more than one Hold reason code.
 

In certain circumstances this Business Component may modify LastTaskStatus and TaskStatus in the TASK table. It updates the TaskStatus of the master task and all child tasks to the Held status and replaces the value of LastTaskStatus with the value of TaskStatus before updating TaskStatus to Held. For example, if a Task has the Dispatched status, this Business Component changes the status of LastTaskStatus to Dispatched and then updates TaskStatus to Held.
 

 **Supported Features** 
 
 
-  

Placing WIP Operation on one or more Hold Reason Codes
  
-  

WIP Operation Validation
  
-  

Hold Reason Code validation
  
-  

Transaction history recorded
  
-  

Changing the statuses of all tasks assigned to the WIP Operation

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number of the WIP Operation to be placed on hold. Must exist in the system. |
| Input | WipOrderType | Integer | Yes | WIP Order type of the WIP Operation to be placed on hold. |
| Input | OprSequenceNo | Char | Yes | WIP Operation sequence number to be placed on hold. Must exist in the system. |
| Input | ReasonCode | Char | Yes | Reason code for the hold operation. Must exist in the system. |
| Input | AllowMultipleHolds | Boolean | No | Flag indicating if multiple holds are allowed. |

## Validations

- System verifies that the inputted WipOrderNo, WipOrderType, and OprSequenceNo exist. 
- System verifies that the WIP Order is New or Started and is not on hold. 
- System verifies that the WIP Operation is New or Started. 
- System verifies that the inputted ReasonCode is of a Hold Reason Type and it is defined for the current department (taken from the context).  
- If AllowMultipleHolds is TRUE, the system validates that the WIP Operation is not on hold for the reason code specified. 
- When AllowMultipleHolds is FALSE, the system validates that the WIP Operation is not on hold. 
- System verifies that the master task status is Dispatched or Started.

## System Processing

- System places the WIP Operation on Hold with the entered reason code. A new record is generated for in the WIP_OPERATION_HOLD table. 
- System holds the master task assigned to the WIP Operation (except for ones in Completed or Cancelled task status). Then it executes business logic that holds all child tasks in any task status of the Held master task. 
- System updates the TaskStatus and LastTaskStatus in the TASK table.  
- System records the transaction history each time a new record is created in the WIP_OPERATION_HOLD table.

## Pre-Conditions

- WIP Operation and reason codes must exist. 
- Master task status must be Dispatched or Started. 
- WIP Order status must be New or Started and cannot be on hold. 
- WIP Operation status must be New or Started.

## Published Events

Tasking system is notified to put the task on hold.

## History Recording in Production

The System records the transaction history each time a new record is created in the WIP_OPERATION_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_HOLD | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
|  | ReasonCode | Inputted ReasonCode |
| TASK | TaskStatus |  |
|  | LastTaskStatus |  |
