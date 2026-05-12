# ReleaseWipOrder

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderReleaser`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to release a Wip Order from a Hold Reason Code.
 

When there is more than one Hold Reason codes placed on the Wip Order, then each must be released individually.
 

An option is provided to make the release reason code a required input or not.
 

 **Supported Features** 
 
 
-  

Releasing a Wip Order from a Hold Reason Code
  
-  

Wip Order Validation
  
-  

Release Reason Code validation
  
-  

Transaction history recorded
  
 

 **Unsupported Features** 
 
 
-  

Releasing a Wip Order from more than one Hold Reason Code at a time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | No | The number of wip order to be released. Must exist in the system |
| Input | WipOrderType | Integer | No | The type of wip order to be released. |
| Input | ReasonCodeRequired | Boolean | No | Indicates if the release reason code is required. If the flag is true and release reason code is not provided then an error is returned. |
| Input | ReleaseReasonCode | Char | No | The reason code of the realeasing operation. If ReasonCodeRequired is true then it must exist in the sytem |
| Input | HoldReasonCode | Char | No | The hold reason code the wip order is to be released from. Required if wip order is on hold for mutlple reasons. If so then it must exist in the system. |

## Validations

- System verifies that wip order exists and it is New or Started. 
- System verifies that there is at least one Hold against the inputted Wip OrderNo and WipOrderType. 
- If there is more than one hold against wip order, system validates that a hold against inputted HoldReasonCode exists. 
- If the ReleaseReasonRequired is set, system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of 'Release' Reason Type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of 'Hold' Reason Type.

## System Processing

- System retrieves the Hold Reason Codes that match the inputs. 
- If no record found or if more than one record are retrieved, then system returns an error message. 
- Else, system deletes the retrieved record from the WIP_ORDER_HOLD table. 
- If the deleted hold was the last one against the wip order, system releases all master tasks for all wip operations of that wip order by calling ReleaseTask business component. 
- System records the transaction history whenever a record in the WIP_ORDER_HOLD table is deleted.

## Pre-Conditions

- Wip Order and reason codes must exist. 
- Hold Reason code must be of type 'Hold'. 
- Release Reason code must be of type 'Release'.

## Published Events

Tasking system is notified to release all master tasks of all wip operations if all holds were removed against wip order specified

## History Recording in Production

The System records the transaction history each time a record is deleted in the WIP_ORDER_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_HOLD | All |  |
