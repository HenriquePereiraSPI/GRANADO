# MaintainSequenceQueueDefinition

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueDefinitionBase`
**Assembly:** `FlexNet.BusinessFacace.Sequencing.dll`
**Status:** Active

## Description

Enables users to create or update sequence queue definitions. Inserts or updates SEQUENCE_QUEUE_DEFINITION records. If SequenceQueueDefinitionID is specified, update, otherwise insert. Name and revision cannot be empty string or NULL.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueDefinitionId | Integer | No | Sequence queue definition’s ID if a queue definition is updated. 0 for a new queue definition. |
| Input | Name | Char | No | This is the user-specified name of queue definition. Process designers can use the name to identify the appropriate queues definition to use for a particular process or operation. |
| Input | Revision | Char | No | This is the user-specified revision number for the queue definition. |
| Input | GroupSize | Integer | No | Specifies the standard group size to group items in the queue. When a positive value is specified, items will be automatically grouped. When IsReversed is true, the group size is the number of items that will be reversed at a time. Applies only to new groups added to the sequence. When a zero or negative value is specified (or NULL), the queue is not grouped and no SEQUENCE_QUEUE_ITEM_GROUP records will be created for the queue. |
| Input | IsReversed | Boolean | No | When true, the sequence in which items are removed from the queue is reversed from the sequence in which items are added. When a GroupSize is specified, the reversal happens only within groups, so that items in the same group are dequeued in reverse order, but the groups themselves remain in the original order. |
| Input | ShortDescription | Char | No | Description for the queue definition. |
| Input | MediumDescription | Char | No | Medium description for the queue definition. |
| Input | LongDescription | Char | No | Short description for the queue definition. |
| Output | SequenceQueueDefinitionId | Integer | No | ID of the queue definition created or updated. |

## System Processing

- Name is validated. Empty string or NULL is an invaid input. 
- Revision is validated. Empty string or NULL is an invaid input. 
- GroupSize is validated. A groupsize < 0 is an invalid input. 
- If a queue definition is found, the queue definition is updated with the input values. If a queue definition is not found, a new queue definition is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE_DEFINITION | Name | Inputted Name |
|  | Revision | Inputted Revision |
|  | GroupSize | Inputted GroupSize |
|  | IsReversed | Inputted IsReversed |
|  | TextID | System generated |
| TEXT | ID | System generated |
| TEXT_TRANSLATION | Short | Inputted ShortDescription |
| TEXT_TRANSLATION | Medium | Inputted MediumDescription |
| TEXT_TRANSLATION | Extended | Inputted LongDescription |
