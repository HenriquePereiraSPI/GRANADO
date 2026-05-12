# HoldWipOrder

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderHolder`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to place a WIP Order on Hold.
 

When this occurs, no transactions can occur against that WIP Order or its Operations until the Hold has been released. When the WIP Order is placed on Hold, a valid Hold reason code must also be entered. Functionality also includes the ability to place the WIP order on more than one Hold reason code.
 

 **Supported Features** 
 
 
-  

Placing WIP Order on one or more Hold Reason Codes
  
-  

WIP Order Validation
  
-  

Hold Reason Code validation
  
-  

Transaction history recorded

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The number of WIP Order to be put on hold. |
| Input | WipOrderType | Integer | Yes | The type of WIP Order to be put on hold. |
| Input | ReasonCode | Char | Yes | The reason code to put the WIP Order on hold for. |
| Input | AllowMultipleHolds | Boolean | No | Indicates if the multiple holds are allowed. |

## Validations

- System verifies that the inputted WipOrderNo and WipOrderType are valid in system and that WIP Order is New or Started. 
- System verifies that the inputted ReasonCode is of a Hold Reason Type. 
- If AllowMultipleHolds is TRUE, the system validates that the WIP Order is not on hold for the reason code specified.  
- Else if AllowMultipleHolds is FALSE, the system validates that the WIP Order is not on hold.

## System Processing

- System places the WIP Order on Hold with the entered reason code. A new record is generated for in the WIP_ORDER_HOLD table. 
- System s notifies tasking system to hold master task for every WIP Operation of the WIP Order being put on hold. It calls the HoldTask business component, that holds all task (except completed ones).  
- System records the transaction history each time a new record is created in the WIP_ORDER_HOLD table.

## Published Events

Tasking system is notified to put on hold all master tasks attached to WIP Operations.

## History Recording in Production

The system records the transaction history each time a new record is created in the WIP_ORDER_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_HOLD | WipOrderType | Inputted WipOrderType |
|  | WipOrderNo | Inputted WipOrderNo |
|  | ReasonCode | Inputted ReasonCode |
