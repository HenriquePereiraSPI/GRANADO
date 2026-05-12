# DequeueSequenceItemByID

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemDequeuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component removes the specified item from the sequence queue. This BC is used when the process author knows the ID of the item that has been processed and wishes to dequeue the item even if it is out of sequence. In this case, the sequence is not a hard requirement for the execution and the operator may have control over the final order in which items are processed. This BC is then used to dequeue items that have been processed even if the item was processed ahead of other items in the queue.
 

Note that this is not the same as deleting the item (see DeleteSequenceQueueItem for more details).
 

If the SequenceQueueItemID is the same as the SequenceQueue.NextSequenceQueueItemID, then this BC behaves exactly like DequeueSequenceItem.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueItemID | Integer | No | Queue item's ID to be dequeued. |
| Output | ItemFound | Boolean | No | True if an item is found, false if not found. |

## System Processing

- System reads sequence queue item record for the given queue item's ID. If a sequence queue item is not found, returns with no error. 
- Example usage: 
 

 **Before:** 
 

 WipOrderNo A B C D F Group ID 1 2 
 

 IsEmpty F F F F F T T T T GroupSize 5 5 
 

 EnqueueSequence 1 2 3 4 6 7 8 9 10 DequeueCount 1 0 
 

 Group ID 1 1 1 1 2 2 2 2 2 
 

 Sequence 5 4 3 2 10 9 8 7 6 
 

 

 **Invoking DequeueSequenceItemByID on the item with WipOrderNo C will result in:** 
 

 WipOrderNo A B D F Group ID 1 2 
 

 IsEmpty F F F F T T T T GroupSize 5 5 
 

 EnqueueSequence 1 2 4 6 7 8 9 10 DequeueCount 2 0 
 

 Group ID 1 1 1 2 2 2 2 2 
 

 Sequence 5 4 2 10 9 8 7 6

## History Recording in Production

This Business Component will create an XML that will map to transaction history and create records equivalent to DequeueSequenceItem.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence | System calculated |
|  | NextSequenceQueueItemID | System calculated |
|  | LastSequenceQueueItemID | System calculated |
| SEQUENCE_QUEUE_ITEM | All |  |
| SEQUENCE_QUEUE_ITEM_GROUP | DequeuedCount | System calculated |
