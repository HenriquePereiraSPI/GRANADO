# CreateWipOperation_v92

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to create an operation for an existing execution order. Based on the inputs, system creates a new WIP operation with the specified operation sequence number and work center and re-explodes the order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP order. |
| Input | wipOrderType | Integer | Yes | WIP order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | Instruction | Char | No | Work instruction for the operation step. |
| Input | LanguageID | Integer | Yes | language ID of the instruction. |
| Input | WorkCenter | Char | Yes | Work center for the operation. |
| Input | TargetQuantity | Decimal | Yes | WIP content quantity. |
| Input | ReExplodeOrder | Boolean | Yes | Determines if the order should be re-exploded or not. |
| Input | ReExplodeImmediately | Boolean | Yes | If the order is to be re-exploded, used to determine if it is done immediately. |

## Validations

- System checks that the inputted order exist (WipOrderNo + WipOrderType) in the WIP_ORDER table. 
- System checks that the inputted operation does not exist (WipOrderNo + WipOrderType + OprSequenceNo) in the WIP_OPERATION table. 
- System verifies that the inputted WorkCenter exists. 
- If instruction is inputted, system checks that a valid LanguageID has been inputted.

## System Processing

- System inserts a new record into the WIP_OPERATION, WIP_CONTENT and WIP_OPERATION_STEP tables with the inputs. 
- System inserts a new record in the text_translation table. 
- System invokes re-explosion if the ReExplodeOrder input is set to true. The ReExplodeImmediately input determines if the explosion is done synchronously or asynchronously through an immediate job.

## Pre-Conditions

The WIP order and work center must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | WipOrderNo | Inputted WipOrderNo |
| WIP_OPERATION | WipOrderType | Inputted WipOrderType |
| WIP_OPERATION | OprSequenceNo | Inputted OprSequenceNo |
| WIP_OPERATION | OperationType | 1 |
| WIP_OPERATION | WorkCenter | Inputted WorkCenter |
| WIP_OPERATION | Operation Status | 1 (=New) |
| WIP_CONTENT | ID | System Generated |
| WIP_CONTENT | WipOrderNo | Inputted WipOrderNo |
| WIP_CONTENT | WipOrderType | Inputted WipOrderType |
| WIP_CONTENT | OprSequenceNo | Inputted OprSequenceNo |
| WIP_CONTENT | ProductID | Copied from WIP_ORDER |
| WIP_CONTENT | WipContentClass | 1 (=Good) |
| WIP_CONTENT | WipContentStatus | 2 (=Finished Goods) |
| WIP_CONTENT | TargetQuantity | Inputted TargetQuantity |
| WIP_OPERATION_STEP | WipOrderNo | Inputted WipOrderNo |
| WIP_OPERATION_STEP | WipOrderType | Inputted WipOrderType |
| WIP_OPERATION_STEP | OprSequenceNo | Inputted OprSequenceNo |
| WIP_OPERATION_STEP | SequenceNo | 1 |
| WIP_OPERATION_STEP | TextID | TEXT.ID |
| TEXT | TextID | System Generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
| TEXT_TRANSLATION | LanguageID | LanguageID |
| TEXT_TRANSLATION | TextMedium | Inputted Instruction |
