# ReleaseWipOperation

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationReleaser`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to release a WIP Operation from a Hold Reason Code.
 

When there are more than one Hold Reason codes placed on the WIP Operation, then each must be released individually.
 

An option is provided to make the release reason code a required input or not.
 

In certain circumstances this Business Component may modify TaskStatus in the TASK table. It updates the TaskStatus of the master task and all child tasks to the value stored in LastTaskStatus. For example, if a Task has the Held status and the status of LastTaskStatus is Dispatched, this Business Component updates TaskStatus to Dispatched.
 

 **Supported Features** 
 
 
-  

Releasing a WIP Operation from a Hold Reason Code
  
-  

WIP Operation Validation
  
-  

Release Reason Code validation
  
-  

Transaction history recorded
  
-  

Releasing all master tasks assigned to the WIP Operation, together with all their child tasks
  
 

 **Unsupported Features** 
 
 
-  

Releasing a WIP Operation from more than one Hold Reason Code at a time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number of the WIP Operation to be released. Must exist in the system. |
| Input | WipOrderType | Integer | Yes | WIP Order type of the WIP Order to be released from hold. |
| Input | OprSequenceNo | Char | Yes | WIP Operation number to be released. Must exist in the system. |
| Input | ReasonCodeRequired | Boolean | No | Indicates if Release Reason Code is required. |
| Input | ReleaseReasonCode | Char | Conditional | Release Reason Code. If ReasonCodeRequired is true then it must exist in the system. |
| Input | HoldReasonCode | Char | No | Reason code for which the operation has been held. Required if the operation is put on hold multiple - in such case it must exist in the system. |

## Validations

- System validates that WIP Order and WIP Operation exist. 
- System validates that WIP Order is New or Started and not on hold. 
- System verifies that there is at least one Hold against the inputted WipOrderNo, WipOrderType, and OprSequenceNo. 
- If HoldReasonCode is inputted, system validates that the hold is against this reason code. 
- If the ReleaseReasonRequired is set, system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of Release reason type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of Hold reason type. 
- System verifies that the master task status is Held or Abandoned and if LastTaskStatus of the TASK table is populated for the master task. 
- System verifies that LastTaskStatus of the master task is populated, if MaxConcurrentResource of the master task is greater than 1 or its AllocationPending is equal to 1 in the TASK table.

## System Processing

- System retrieves the Hold Reason Codes that match the inputs. 
- If no record is found or if more than one record is retrieved, the system returns an error message. 
- Under other circumstances, the system deletes the retrieved record from the WIP_OPERATION_HOLD table. 
- System releases all tasks assigned to the WIP Operation (except for ones in Completed or Cancelled task status). Then it executes business logic that releases all child tasks in any task status of the released master task. 
- System updates TaskStatus in the TASK table. 
- System records the transaction history whenever a record in the WIP_OPERATION_HOLD table is deleted.

## Pre-Conditions

- WIP Operation and reason codes must exist. 
- Master task status must be Held or Abandoned. 
- WIP Order status is New or Started. 
- WIP Operation is on hold. 
- Hold Reason code must be of type Hold. 
- Release Reason code must be of type Release.

## Published Events

Tasking system is notified to release the tasks assigned to the WIP Operation.

## History Recording in Production

The System records the transaction history each time a record is deleted in the WIP_OPERATION_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_HOLD | All |  |
| TASK | TaskStatus |  |
