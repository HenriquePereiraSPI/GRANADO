# CreateWipOperation_v93

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to create an operation for an existing execution order. Based on the inputs, system creates a new WIP operation with the specified operation sequence number and work center and re-explodes the order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip Order. |
| Input | wipOrderType | Integer | Yes | Wip Order Type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | Instruction | Char | No | Work instruction for the operation step |
| Input | LanguageID | Integer | Yes | language ID of the instruction. |
| Input | WorkCenter | Char | Yes | Work center for the operation. |
| Input | TargetQuantity | Decimal | Yes | Wip Content quantity. |
| Input | ExpectedStartDate | DateTime | No | The expected start date of the wip operation. |
| Input | InsertExpectedStartDate | Boolean | Yes | Whether or not the expected start date is to be inserted. |
| Input | ScheduledStartDate | DateTime | No | The scheduled start date of the operation. |
| Input | InsertScheduledStartDate | Boolean | Yes | Whether or not the scheduled start date is to be inserted. |
| Input | ExpectedCompletionDate | DateTime | No | The expected completion date of the wip operation. |
| Input | InsertExpectedCompletionDate | Boolean | Yes | Whether or not the expected completion date is to be inserted. |
| Input | ScheduledCompletionDate | DateTime | No | The scheduled completion date of the wip operation. |
| Input | InsertScheduledCompletionDate | Boolean | Yes | Whether or not the scheduled completion date is to be inserted. |
| Input | ExpectedDurationSeconds | Integer | No | The expected duration of the wip operation in seconds. |
| Input | ScheuledDurationSeconds | Integer | No | The scheduled duration of the wip operation in seconds. |
| Input | ReExplodeOrder | Boolean | Yes | Determines if the order should be re-exploded or not. |
| Input | ReExplodeImmediately | Boolean | Yes | If the order is to be re-exploded, used to determine if it is done immediately. |

## Validations

- System checks that the inputted Order exist (WipOrderNo + WipOrderType) in the WIP_ORDER table. 
- System checks that the inputted Operation does not exist (WipOrderNo + WipOrderType + OprSequenceNo) in the WIP_OPERATION table. 
- System verifies that the inputted WorkCenter exists. 
- If instruction is inputted, system checks that a valid LanguageID has been inputted.

## System Processing

- System inserts a new record into the WIP_OPERATION, WIP_CONTENT and WIP_OPERATION_STEP tables with the inputs. 
 
- Will only input a date input if its corresponding Boolean flag is set to true. 
- For the duration columns, will populate from input. If input not defined (that is, 0), then will calculate difference in seconds between start and end times if both start and end times are provided. 
 
- System inserts a new record in the text_translation table. 
- System invokes re-explosion if the ReExplodeOrder input is set to true. The ReExplodeImmediately input determines if the explosion is done synchronously or asynchronously through an immediate job.

## Pre-Conditions

The WIP order and work center must exist.

## Published Events

Explosion event if input ReExplodeOrder is true and input ReExplodeImmediately is false.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
|  | OperationType | 1 |
|  | WorkCenter | Inputted WorkCenter |
|  | Operation Status | 1 (=New) |
| WIP_CONTENT | ID | System Generated |
|  | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
|  | ProductID | Copied from WIP_ORDER |
|  | WipContentClass | 1 (=Good) |
|  | WipContentStatus | 2 (=Finished Goods) |
|  | TargetQuantity | Inputted TargetQuantity |
| WIP_OPERATION_STEP | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
|  | SequenceNo | 1 |
|  | TextID | TEXT.ID |
| TEXT | TextID | System Generated |
| TEXT_TRANSLATION | TextID | TEXT.ID |
|  | LanguageID | LanguageID |
|  | TextMedium | Inputted Instruction |
