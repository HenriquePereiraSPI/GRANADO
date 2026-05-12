# DeleteSequenceQueue

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

Enables users to delete sequence queues that are no longer necessary. Only possible if the queue is empty, that is, there are no records in SEQUENCE_QUEUE_ITEM for this queue. Deletes the SEQUENCE_QUEUE record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueId | Integer | No | ID of the sequence queue that is deleted. |
| Output | Name | Char | No | This is the user-specified name queue. The name with the definition must be unique. Process designers can use the name to identify the appropriate queues to use for a particular process or operation. |
| Output | SequenceQueueId | Integer | No | ID of the sequence queue that is deleted. |

## System Processing

- Name is validated. Empty string or NULL is an invaid input. 
- Revision is validated. Empty string or NULL is an invaid input. 
- If a queue is found, the queue is updated with the input values. If a queue is not found, a new queue is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | All | Inputted SequenceQueueId |
