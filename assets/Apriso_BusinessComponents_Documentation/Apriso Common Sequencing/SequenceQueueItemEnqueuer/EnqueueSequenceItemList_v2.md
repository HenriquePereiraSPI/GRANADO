# EnqueueSequenceItemList_v2

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemEnqueuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business components inserts a list of new items into the specified sequence queue. The list is inserted in order and sequenced in order. This component is functionally equivalent to invoking EnqueueSequenceItem iteratively.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | Yes | The sequence queue that this item belongs to. |
| Input | WipOrderNoList | Char | No | List of WIP orders to which this item refers. When populated, implies that the queue is a queue of WIP orders. |
| Input | WipOrderTypeList | Short | No | List of WIP order type of the WIP order to which this item refers. |
| Input | OrderNoList | Char | No | List of orders to which the item refers. This field is populated when the item in the queue is an order. |
| Input | OrderTypeList | Short | No | List of order type of the reference order. |
| Input | OrderLineNoList | Integer | No | List of order lines to which the item refers. This field is populated when the item in the queue is an order line. |
| Input | ProductIDList | Integer | No | List of products to which this item refers. When populated, this is considered a queue of products. This field is also required to queue serial numbers. |
| Input | SerialNoList | Char | No | List of serial numbers that this item refers to. Implies that this is a queue of serial numbers. |
| Input | ContainerList | Char | No | List of container numbers that this item refers to. Implies that this is a queue of containers. |
| Input | ExternalSequenceList | Integer | No | List of sequence numbers specified by an external system. Used only as a reference. |
| Output | SequenceQueueItemIDList | Integer | No | Inserted or updated sequence queue items' IDs. |

## System Processing

- List item count is obtained from WipOrderNoList. 
- EnqueueSequenceItem is called iteratively for each item in the list.

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
