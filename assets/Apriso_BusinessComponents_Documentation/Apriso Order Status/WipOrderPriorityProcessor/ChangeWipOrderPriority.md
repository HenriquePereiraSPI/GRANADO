# ChangeWipOrderPriority

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderPriorityProcessor`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to change the priority of a WIP Order. The features supported include the following: 
 
-  

WIP Order hold validation (cannot be changed when the WIP Order is on hold)
  
-  

Sending a message of change to tasking
  
-  

Transaction history

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The number of the WIP Order for which the priority is to be changed. |
| Input | WipOrderType | Integer | Yes | The type of WIP Order for which the priority is to be changed. |
| Input | Priority | Short | Yes | The new priority of the WIP Order. |

## Validations

- The system validates that the priority specified is not less than -1.  
- The system checks that the inputted WIPOrderNo and WIPOrderType exist. 
- The system validates that the WIP Order status is either new or started (an error is returned if the WIP Order is on hold).

## System Processing

- The system updates the priority for the WIP Order and WIP Order type (WIP_ORDER.Priority). If the priority is -1, the WIP_ORDER.Priority is set do DBNull. 
-  The system updates the task priority for all the tasks of that WIP Order that are to be updated to the new priority (TASK.Priority). If the priority is -1, TASK.Priority is set do DBNull.  
- The system records the transaction history.

## Pre-Conditions

- The WIP Order must exist and not be on hold.

## History Recording in Production

The transaction history record created for the WIP Order for which the priority is successfully changed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WipOrderNo | The inputted WipOrderNo. |
| WIP_ORDER | WipOrderType | The inputted WipOrderType. |
| WIP_ORDER | Priority | The inputted Priority or DBNull if Priority is -1. |
| TASK | Priority | The inputted Priority (converted to string) or empty string if Priority is -1. |
