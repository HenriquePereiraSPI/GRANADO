# InsertOperation

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

The purpose of this method is to insert a work operation with a sequence that is between the inputted predecessor and the predecessor's previous next operation. The system will also explode the newly created operation based on the standard explosion logic.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StdOperationID | Integer | Yes | The std operation which the work operation will execute. |
| Input | PredecessorWipOrderNo | Char | Yes | The predecessor work operation PK. |
| Input | PredecessorWipOrderType | Integer | Yes | The predecessor work operation PK. |
| Input | predecessorOprSequenceNo | Char | Yes | The predecessor work operation PK. |
| Input | WorkCenter | Char | Yes | The work center the operation will be executed in. |
| Input | ScheduledStartDate | DateTime | Yes | The scheduled start date for the operation. |
| Input | ScheduledCompletionDate | DateTime | Yes | The scheduled completion date for the operation. |
| Input | WipContentClassID | Integer | Yes | The production class that will trigger input quantities from the predecessor operation. GOOD with no reason code for example. |
| Input | ReasonCode | Char | Yes | The production reason code that will trigger input quantities from the predecessor operation. For example: FAIL with "Too Small" as a reason code. |

## System Processing

- Generates an operation sequence number unique for that work order. 
- Creates a work operation in that work order with the following fields: 
 
- WipOrderNo - Inputted "predecessorWipOrderNo" 
- WipOrderType - Inputted "predecessorWipOrderType" 
- OprSequenceNo - As generated in the step above 
- WorkCenter - Inputted "workCenter" 
- ScheduledStartDate - Inputted "scheduledStartDate" 
- ScheduledCompletionDate - Inputted "scheduledCompletionDate" 
 
- Updates the wip operation sequence as follows: 
 
- Updates the predecessor operation "next" operation to the newly created operation 
- Updates the sequence of the new operation to now point to the old next of the predecessor operation 
 
- The system will then explode the newly created operation using the standard operation based explosion.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | ALL | Creates a new record. |
| WIP_COMPONENT | ALL | Explodes work components as per operation explosion. |
| WIP_REQ_RESOURCE | ALL | Explodes work operation resources as per operation explosion. |
| WIP_CONTENT | ALL | Creates default wip content as per operation explosion |
| WIP_CONTENT_DETAIL | ALL | Creates default wip content detail as per operation explosion |
| WIP_OPERATION_SEQUENCE | ALL | Updates the order sequence by inserting the new operation between the existing predecessor operation its old next operation. |
