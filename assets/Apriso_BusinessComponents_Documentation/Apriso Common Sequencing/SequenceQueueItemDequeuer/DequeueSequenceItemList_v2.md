# DequeueSequenceItemList_v2

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemDequeuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component returns a list of items that are removed from the queue. The BC is functionally equivalent to invoking DequeueSequenceItem iteratively ItemsCount times. The actual number of items the BC is able to dequeue is returned in ItemsFoundCount.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | No | The sequence queue that this item belongs to. |
| Input | DequeueEmptyItems | Boolean | No | If the next item in the queue is empty (IsEmpty is true) and DequeueEmptyItems is false, then the queue is considered to be empty. Enqueue or add business components can then be used to fill in the empty item for dequeuing. If DequeueEmptyItems is set to true, then the next item will be dequeued even if it is currently empty, and ItemFound will be true. |
| Input | ItemsCount | Integer | No | Number of items to be dequeued. |
| Output | ItemFoundCount | Integer | No | Number of items dequeued. |
| Output | WipOrderNoList | Char | No | List of WIP order numbers from the dequeued item. |
| Output | WipOrderTypeList | Short | No | List of order types from the dequeued item. |
| Output | OrderNoList | Char | No | List of order numbers from the dequeued item. |
| Output | OrderTypeList | Short | No | List of order types from the dequeued item. |
| Output | OrderLineNoList | Integer | No | List of order line numbers from the dequeued item. |
| Output | ProductIDList | Integer | No | List of product IDs from the dequeued item. |
| Output | SerialNoList | Char | No | List of serial numbers from the dequeued item. |
| Output | ContainerList | Char | No | List of containers from the dequeued item. |
| Output | ExternalSequenceList | Char | No | List of external sequences of the dequeued item. |
| Output | SequenceQueueItemIDList | Integer | No | List of dequeued items' IDs. |

## System Processing

System calls DequeueSequenceItem iteratively ItemsCount times. See DequeueSequenceItem for further details.

## History Recording in Production

This business component will create a single XML that will map to several transaction history records. The final result in the history will be equivalent to invoking DequeueSequenceItem iteratively.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE | NextSequence | System calculated |
|  | NextSequenceQueueItemID | System calculated |
|  | LastSequenceQueueItemID | System calculated |
| SEQUENCE_QUEUE_ITEM | All |  |
| SEQUENCE_QUEUE_ITEM_GROUP | DequeuedCount | System calculated |
