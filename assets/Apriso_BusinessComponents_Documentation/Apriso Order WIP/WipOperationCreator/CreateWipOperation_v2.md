# CreateWipOperation_v2

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** createwipoperation

## Description

The purpose of this business component is to create an operation for an existing execution order. Based on the inputs, the system creates a new WIP operation with the specified operation sequence number andWwork center and re-explodes the order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP order. |
| Input | WipOrderType | Integer | Yes | WIP order type. |
| Input | OprSequenceNo | Char | Yes | Operation sequence number. |
| Input | Instruction | Char | No | Work instruction for the WIP operation step. |
| Input | LanguageID | Short | No | Language ID of the instruction and description. |
| Input | WorkCenter | Char | No | The work center for the operation. |
| Input | TargetQuantity | Decimal | Yes | WIP content quantity. |
| Input | ExpectedStartDate | DateTime | No | The expected start date of the WIP order. |
| Input | InsertExpectedStartDate | Boolean | Yes | Whether or not the expected start date is to be inserted. |
| Input | ScheduledStartDate | DateTime | No | The scheduled start date of the operation. |
| Input | InsertScheduledStartDate | Boolean | Yes | Whether or not the scheduled start date is to be inserted. |
| Input | ExpectedCompletion | DateTime | No | The expected completion date of the WIP operation. |
| Input | InsertExpectedCompletionDate | Boolean | Yes | Whether or not the expected completion date is to be inserted. |
| Input | ScheduledCompletionDate | DateTime | No | The scheduled completion date of the WIP operation. |
| Input | InsertScheduledCompletionDate | Boolean | Yes | Whether or not the scheduled completion date is to be inserted. |
| Input | ExpectedDurationSeconds | Integer | No | The expected duration of the WIP operation in seconds. |
| Input | ScheuledDurationSeconds | Integer | No | The scheduled duration of the WIP operation in seconds. |
| Input | PredecessorOprSequenceNo | Char | Conditional | Previous OprSequenceNo from WIP operation sequence. |
| Input | WipContentClassID | Integer | Conditional | WIP content class from WIP operation aequence. |
| Input | ReasonCode | Char | Conditional | Reason Code from WIP operation sequence. |
| Input | ReExplodeOrder | Boolean | Yes | Determines if the order should be re-exploded or not. |
| Input | ReExplodeImmediately | Boolean | Yes | If the order is to be re-exploded, used to determine if it is done immediately. |
| Input | FormatInstructionText | Boolean | Yes | If this input is true, the text is formated, otherwise it is not. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Milestone | Boolean | Populates the Milestone column of WIP Operation. |
| IsFirstOperation | Boolean | If true, WIP Operation PreviousSequenceNo is set to "FIRST". |
| SkipCreatingSteps | Boolean | If set to true, WIP Operation Steps are not created. |
| TaskStrategyType | Integer | Strategy type for creating tasks. (Zero is treated as a null value.) |
| Description | Char | The description of the WIP Operation. |

## Validations

- System checks that the inputted Order exist (for WipOrderNo and WipOrderType) in the WIP_ORDER table. 
- System checks that the inputted Operation does not exist (for WipOrderNo, WipOrderType and OprSequenceNo) in the WIP_OPERATION table. 
- System verifies that the inputted WorkCenter exists. 
- System verifies that WipContentClassID and ReasonCode are provided together with PredecessorOprSequenceNo. 
- System checks that the inputted predecessor Operation exists (for WipOrderNo, WipOrderType and PredecessorOprSequenceNo) in the WIP_OPERATION table. 
- If provided, WipContentClassID and ReasonCode are validated if they exist. 
- If PredecessorOprSequenceNo is provided, system validates if Determination Strategy of WIP Order is Type 2 (Standard Operation).

## System Processing

- System inserts a new record into the WIP_OPERATION and WIP_CONTENT and WIP_OPERATION_STEP tables. 
 
- Date type input is added only if the correxponding Boolean flag is set to true. 
- Duration columns are populated from input. If input is not defined (i.e. 0), the difference is calculated in seconds between start and end times if both start and end times are provided. If both duration and start/end times are provided, the system always persists the inputted duration.  
 
- If an Instruction is inputted, the system inserts a new record into the TEXT_TRANSLATION table for the given instruction. The system uses the default database language defined by the user's personalization if the LanguageID is not provided, otherwise it creates the instruction in the inputted language. 
- System creates records in WIP_OPERATION_SEQUENCE table using provided WipContentClassID, ReasonCode and PredecessorOprSequenceNo. 
- System invokes Re-Explosion if the input ReExplodeOrder is set to true. 
 
- ReExplodeImmediately input determines if the explosion is done synchronously or asynchronously.

## Pre-Conditions

The WIP Order and Work Center must exist.

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
|  | Operation Status | 1(=New) |
|  | PreviousSequenceNo | If IsFirstOperation is true, set to "FIRST". |
|  | Milestone | Milestone |
|  | TaskStrategyType | TaskStrategyType |
|  | TextID | Link to TEXT table (1). |
| WIP_CONTENT | ID | System Generated |
|  | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
|  | ProductID | Copied from WIP_ORDER |
|  | WipContentClass | 1(=Good) |
|  | WipContentStatus | 2(=Finished Goods) |
|  | TargetQuantity | Inputted TargetQuantity |
| WIP_OPERATION_STEP | WipOrderNo | Inputted WipOrder |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
|  | SequenceNo | 1 |
|  | TextID | Link to TEXT table (2). |
| WIP_OPERATION_SEQUENCE | (all) | Based on WipContentClassID, ReasonCode and PredecessorOprSequenceNo. |
| TEXT (1) | ID | (system generated) |
| TEXT_TRANSLATION (1) | TextID | TEXT.ID (1) |
|  | LanguageID | LanguageID (or current user's language if LanguageID is zero) |
|  | Medium | Description |
| TEXT (2) | ID | (system generated) |
| TEXT_TRANSLATION (2) | TextID | TEXT.ID (2) |
|  | LanguageID | LanguageID (or current user's language if LanguageID is zero) |
|  | Text | Instruction |
