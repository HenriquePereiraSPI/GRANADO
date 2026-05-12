# RebuildQueue

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemEnqueuer`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component method rebuilds a queue based on the list of inputs provided. The whole queue is rebuilt but the next sequence number is preserved.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | Yes | Queue ID for the queue that will be rebuilt. |
| Input | IsEmpty | ListofBool | No | Is Empty flag |
| Input | WipOrderNo | ListofChar | No | WIP order number |
| Input | WipOrderType | ListofInteger | No | WIP order type |
| Input | OrderNo | ListofChar | No | Order number |
| Input | OrderType | ListofInteger | No | Order type |
| Input | OrderLineNo | ListofInteger | No | Order line number |
| Input | ProductId | ListofInteger | No | Product ID |
| Input | SerialNo | ListofChar | No | Serial number |
| Input | Container | ListofChar | No | Container |
| Input | ExternalSequence | ListofInteger | No | External sequence |
| Input | ItemStatus | ListofInteger | No | Sequence queue item status |
| Input | Message | ListofChar | No | Message |

## Validations

- System validates sequence queue ID. 
- System validates any provided WIP order. 
- System validates any provided order and order line. 
- System validates any provided product ID. 
- System validates any provided serial number. 
- System validates any provided container. 
- System validates any provided status.

## System Processing

-  System checks if current queue size is less than the size of the inputs, if yes, create empty items.  
-  System updates queue items with all inputs.  
-  System checks if size of the queue is greater than size of the inputs, if yes, set IsEmpty to true for additional records.

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
