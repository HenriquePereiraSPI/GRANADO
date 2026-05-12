# SequenceNewItems

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemEnqueuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component identifies SEQUENCE_QUEUE_ITEM records that do not have a sequence number or an enqueue sequence number and will enqueue these records into the specified queue in ascending order of ID.
 

This BC is useful when downloading new items from external systems. The items can be inserted directly into SEQUENCE_QUEUE_ITEM, then this BC can be invoked to enqueue all the new items directly into the queue.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | No | The sequence queue that this item belongs to. |

## System Processing

-  All the queue items are read. If there are no queue items found, it returns without error.  
-  Queue items with NULL (or 0) sequence or enqueue are deleted, and inserted using enqueue sequence.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence | System calculated |
|  | NextSequenceQueueItemID | System calculated |
|  | LastSequenceQueueItemID | System calculated |
| SEQUENCE_QUEUE_ITEM | All |  |
| SEQUENCE_QUEUE_ITEM_GROUP | All |  |
