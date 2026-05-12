# InsertSequenceQueueItem

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component allows process authors to insert a new item into any spot in the queue, as if the item had been enqueued at the exact specified time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | No | Sequence to which the item belongs to. |
| Input | NextToSequenceQueueItemID | Integer | No | Inserted after this queue item if IsBefore is false. If IsBefore is true, it is inserted before this item. |
| Input | IsBefore | Boolean | No | Inserted after the specified queue item if IsBefore is false. If IsBefore is true, it is inserted before the specified item. |
| Input | WipOrderNo | Char | No | The WIP order to which this item refers. When populated, implies that the queue is a queue of WIP orders. |
| Input | WipOrderType | Short | No | The WIP order type of the WIP order to which this item refers. |
| Input | OrderNo | Char | No | The order to which the item refers. This field is populated when the item in the queue is an order. |
| Input | OrderType | Short | No | The order type of the reference order. |
| Input | OrderLineNo | Integer | No | The order line to which the item refers. This field is populated when the item in the queue is an order line. |
| Input | ProductID | Integer | No | The product to which this item refers. When populated, this is considered a queue of products. This field is also required to queue serial numbers. |
| Input | SerialNo | Char | No | The serial number that this item refers to. Implies that this is a queue of serial numbers. |
| Input | Container | Char | No | The container number that this item refers to. Implies that this is a queue of containers. |
| Input | ExternalSequence | Integer | No | The sequence number specified by an external system. Used only as a reference. |
| Input | SequenceQueueItemID | Integer | No | Inserted queue item's ID. |

## System Processing

- The BC will insert the new record. 
- It updates the rest of the queue to make sure that none of the Sequence numbers are repeated and that all the groups are updated correctly. 
 

For example:
 

Before:
 

 Item A B C E F G H I 
 

 Sequence 1 2 3 4 5 6 7 8 
 

After inserting item D before item E:
 

 Item A B C D E F G H I 
 

 Sequence 1 2 3 4 5 6 7 8 9

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE_ITEM | SequenceQueueID | Inputted SequenceQueueID |
|  | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OrderNo | Inputted OrderNo |
|  | OrderType | Inputted OrderType |
|  | OrderLineNo | Inputted OrderLineNo |
|  | ProductID | Inputted ProductID |
|  | SerialNo | Inputted SerialNo |
|  | Container | Inputted Container |
|  | ExternalSequence | Inputted ExternalSequence |
