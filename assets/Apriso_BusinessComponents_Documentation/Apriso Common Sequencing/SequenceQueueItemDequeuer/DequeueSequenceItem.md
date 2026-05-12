# DequeueSequenceItem

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemDequeuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component removes the top item from the specified sequence queue and returns the removed item's properties. This business component is used when the user is ready to process the next item in the queue and to remove the item from the queue.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | No | The sequence queue that this item belongs to. |
| Input | DequeueEmptyItems | Boolean | No | If the next item in the queue is empty (IsEmpty is true) and DequeueEmptyItems is false, then the queue is considered to be empty, and dequeue will return ItemFound false. Enqueue or add business components can then be used to fill in the empty item for dequeuing. If DequeueEmptyItems is set to true, then the next item will be dequeued even if it is currently empty, and ItemFound will be true. |
| Output | ItemFound | Boolean | No | True if an item found. |
| Output | WipOrderNo | Char | No | WIP order number from the dequeued item. |
| Output | WipOrderType | Short | No | WIP order type from the dequeued item. |
| Output | OrderNo | Char | No | Order number from the dequeued item. |
| Output | OrderType | Short | No | Order type from the dequeued item. |
| Output | OrderLineNo | Integer | No | Order line number from the dequeued item. |
| Output | ProductID | Integer | No | Product ID from the dequeued item. |
| Output | SerialNo | Char | No | Serial number from the dequeued item. |
| Output | Container | Char | No | Container from the dequeued item. |
| Output | ExternalSequence | Char | No | External sequence of the dequeued item. |
| Output | SequenceQueueItemID | Integer | No | Dequeued item's ID. |

## System Processing

- Sequence queue items are read from the database for the given sequence queue ID. If there are no queue items found, it errors out. 
- The BC identifies the record in SEQUENCE_QUEUE_ITEM with the lowest sequence value, delete the record, and return the record properties. 

For example:
 

Before:
 

 Item A B C D 
 

 Sequence 1 2 3 4 
 

 
 

After Dequeue is invoked and returns item A, the queue looks like this:
 

 Item B C D 
 

 Sequence 2 3 4 
 

 
 

 If the next item in the queue is empty (IsEmpty is true) and DequeueEmptyItems is false, then the queue is considered to be empty, and dequeue will return ItemFound false. Enqueue or add business components can then be used to fill in the empty item for dequeuing. If DequeueEmptyItems is set to true, then the next item will be dequeued even if it is currently empty, and ItemFound will be true. 
 

 See EnqueueSequenceItem for additional examples.

## History Recording in Production

This business component will generate an XML document that will then populate transaction history.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence | System calculated |
|  | NextSequenceQueueItemID | System calculated |
|  | LastSequenceQueueItemID | System calculated |
| SEQUENCE_QUEUE_ITEM | All |  |
| SEQUENCE_QUEUE_ITEM_GROUP | DequeuedCount | System calculated |
