# DequeueSequenceItemByIDList

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemDequeuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component is logically equivalent to invoking DequeueSequenceItemByID on each ID specified in SequenceQueueItemIdList. ItemCount returns the total number of items that were found and removed from the queue (equivalent to count of ItemFound = true).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueItemIDList | Integer | No | List of queue item's ID to be dequeued. |
| Output | ItemCount | Integer | No | Count of queue items dequeued. |

## System Processing

It calls DequeueSequenceItemByID iteratively for all the sequence queue items in the list. See DequeueSequenceItemByID for more details.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence | System calculated |
|  | NextSequenceQueueItemID | System calculated |
|  | LastSequenceQueueItemID | System calculated |
| SEQUENCE_QUEUE_ITEM | All |  |
| SEQUENCE_QUEUE_ITEM_GROUP | DequeuedCount | System calculated |
