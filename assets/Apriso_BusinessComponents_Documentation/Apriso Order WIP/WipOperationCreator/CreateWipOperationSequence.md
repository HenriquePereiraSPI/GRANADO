# CreateWipOperationSequence

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationCreator`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Create Insert WIP Operation Sequence

## Description

The purpose of this Business Component method is to create a record in the WIP_OPERATION_SEQUENCE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order. |
| Input | WipOrderType | Integer | Yes | WIP Order Type. |
| Input | OprSequenceNo | Char | Yes | Operation Sequence Number. |
| Input | SequenceType | Char | Yes | The type of the sequence (FIRST, NEXT, PREVIOUS or END). |
| Output | CreatedWipOperationSequenceID | Integer | Yes | ID of created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WipContentClass | Integer | The WIP Content Class. (Zero is treated as a null value.) |
| ReasonCode | Char | The Reason Code. (Empty string is treated as a null value.) |
| DestinationWipOrderNo | Char | The destination WIP Order Number. (Empty string is treated as a null value.) |
| DestinationWipOrderType | Integer | The destination WIP Order Type. (Zero is treated as a null value.) |
| DestinationOprSequenceNo | Char | The destination WIP Operation Sequence Number. (Empty string is treated as a null value.) |
| SequencingGroup | Char | Code describing the group to which the sequence belongs. (Empty string is treated as a null value.) |
| LevelingGroup | Char | (internal use) (Empty string is treated as a null value.) |
| MergeGroup | Char | Code identifying the merge group to which the sequence belongs. (Empty string is treated as a null value.) |
| PreferredNext | Boolean | (future use) |
| ProcessID | Integer | Reference to the Process. (Zero is treated as a null value.) |
| ProcessOperationID | Integer | Reference to the Process Operation. (Zero is treated as a null value.) |
| OperationID | Integer | Reference to the Operation. (Zero is treated as a null value.) |
| NavigationType | Integer | Specifies how the quantity from child order operation contents will be merged into the good operation content . (Zero is treated as a null value.) |
| Level | Integer | (internal use) |
| DispatchSequenceType | Integer | The type of sequence. Indicates whether the link is from the start or end of the "From" entity to the start or end of the "To" entity. If not populated, start to start is assumed. |
| LagDurationSeconds | Integer | Specifies the minimum time from the "From" entity to the "To" entity. |

## Validations

- The system checks that the WIP Operation exists in the WIP_OPERATION table (for provided WipOrderNo, WipOrderType and OprSequenceNo). 
- The system validates a record with inputted values does not exists in the WIP_OPERATION_SEQUENCE table (for WIP Operation, Sequence Type, WIP Content Class, Reason Code and destination WIP Operation). 
- The system validates the WIP Content Class and destination WIP Operation are provided for Sequence Types NEXT or PREVIOUS. 
- The system validates the inputted values (if provided as Dynamic Inputs): 
 
- System verifies that the WipContentClass exists. 
- System verifies that the ReasonCode exists. 
- System verifies that the values of DestinationWipOrderNo, DestinationWipOrderType and DestinationOprSequenceNo are provided together and the destination WIP Operation exists. 
- System verifies that the ProcessID exists. 
- System verifies that the ProcessOperationID exists. 
- System verifies that the OperationID exists. 
- System verifies that the NavigationType exists.

## System Processing

- System inserts a new record into the WIP_OPERATION_SEQUENCE table and returns the ID of created record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_SEQUENCE | ID | CreatedWipOperationSequenceID |
|  | (all) | All column names match the names of Inputs. |
