# EnqueueSequenceItem_v2

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemEnqueuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component inserts a new item into the sequence queue. The item is inserted as the last item in the queue, so it will be the last to be removed (except when the queue is reversed).
 

The BC will insert a new record into SEQUENCE_QUEUE_ITEM with the specified values for WipOrderNo, WipOrderType, OrderNo, OrderType, ProductID, SerialNo, Container, and ExternalSequence.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | Yes | The sequence queue that this item belongs to. |
| Input | WipOrderNo | Char | No | The WIP order to which this item refers. When populated, implies that the queue is a queue of WIP orders. |
| Input | WipOrderType | Short | No | The WIP order to which this item refers. When populated, implies that the queue is a queue of WIP orders. |
| Input | OrderNo | Char | No | The order to which the item refers. This field is populated when the item in the queue is an order. |
| Input | OrderType | Short | No | The order to which the item refers. This field is populated when the item in the queue is an order. |
| Input | OrderLineNo | Integer | No | The order line to which the item refers. This field is populated when the item in the queue is an order line. |
| Input | ProductID | Integer | No | The product to which this item refers. When populated, this is considered a queue of products. This field is also required to queue serial numbers. |
| Input | SerialNo | Char | No | The serial number that this item refers to. Implies that this is a queue of serial numbers. |
| Input | Container | Char | No | The container number that this item refers to. Implies that this is a queue of containers. |
| Input | ExternalSequence | Integer | No | The sequence number specified by an external system. Used only as a reference. |
| Input | ItemStatus | Integer | No | Item status for the queue item. |
| Input | Message | Integer | No | comment for the queue item. |
| Output | SequenceQueueItemID | Integer | No | The added or replaced sequence queue item's ID. |

## System Processing

- Sequence queue record is read. If a record is not found, it returns with no error message. 
- Sequence queue definition ID is obtained from the queue record, and queue definition record is read from the database. If a queue definition record is not found, it returns with no error message. 
- The BC calculates the value of Sequence, EnqueueSequence, SequenceQueueItemGroupID, SequenceInGroup, and EnqueueSequenceInGroup based on the configuration of the queue. This calculation may also result in a new record being inserted into SEQUENCE_QUEUE_ITEM_GROUP if the current group is full. For example: 
 

 

 Before
 

 Item A B C D 
 

 Sequence 1 2 3 4 
 

Enqueue item E
 

 Item A B C D E 
 

 Sequence 1 2 3 4 5 
 

The following is another example with IsReverse set to true and GroupSize to 5. Initially the queue is empty:
 

 WipOrderNo 
 

 IsEmpty 
 

 EnqueueSequence 
 

 Group ID 
 

 SequenceInGroup 
 

 EnqueueSequenceInGroup 
 

 Sequence 
 

Enqueue WipOrderNo A, and the queue looks like:
 

 WipOrderNo A 
 

 IsEmpty F T T T T 
 

 EnqueueSequence 1 2 3 4 5 
 

 Group ID 1 1 1 1 1 
 

 SequenceInGroup 5 4 3 2 1 
 

 EnqueueSequenceInGroup 1 2 3 4 5 
 

 Sequence 5 4 3 2 1 
 

Now if you enqueue B, C, D you get:
 

 WipOrderNo A B C D 
 

 IsEmpty F F F F T 
 

 EnqueueSequence 1 2 3 4 5 
 

 Group ID 1 1 1 1 1 
 

 SequenceInGroup 5 4 3 2 1 
 

 EnqueueSequenceInGroup 1 2 3 4 5 
 

 Sequence 5 4 3 2 1 
 

If dequeue is invoked it will say the queue is empty because the first item to dequeue (Sequence 1) is empty. Suppose then you enqueue E:
 

 WipOrderNo A B C D E 
 

 IsEmpty F F F F F 
 

 EnqueueSequence 1 2 3 4 5 
 

 Group ID 1 1 1 1 1 
 

 SequenceInGroup 5 4 3 2 1 
 

 EnqueueSequenceInGroup 1 2 3 4 5 
 

 Sequence 5 4 3 2 1 
 

Now dequeue will return WipOrderNo E and the result is:
 

 WipOrderNo A B C D 
 

 IsEmpty F F F F 
 

 EnqueueSequence 1 2 3 4 
 

 Group ID 1 1 1 1 
 

 SequenceInGroup 5 4 3 2 
 

 EnqueueSequenceInGroup 1 2 3 4 
 

 Sequence 5 4 3 2 
 

Finally, suppose you enqueue WipOrderNo F:
 

 WipOrderNo A B C D F 
 

 IsEmpty F F F F F T T T T 
 

 EnqueueSequence 1 2 3 4 6 7 8 9 10 
 

 Group ID 1 1 1 1 2 2 2 2 2 
 

 SequenceInGroup 5 4 3 2 5 4 3 2 1 
 

 EnqueueSequenceInGroup 1 2 3 4 1 2 3 4 5 
 

 Sequence 5 4 3 2 10 9 8 7 6 
 

 
 

A new group (Group ID 2) is created. In the database, Group ID 1 will have GroupSize 5 and DequeuedCount 1. Group ID will have GroupSize 5, DequeuedCount 0.
 

The invariant is that GroupSize - DequeuedCount = Number of elements in group including empty elements.

## History Recording in Production

This business component will generate an XML document that will then populate transaction history.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence | System calculated |
|  | NextSequenceQueueItemID | System calculated |
|  | LastSequenceQueueItemID | System calculated |
| SEQUENCE_QUEUE_ITEM | All |  |
| SEQUENCE_QUEUE_ITEM_GROUP | All |  |
