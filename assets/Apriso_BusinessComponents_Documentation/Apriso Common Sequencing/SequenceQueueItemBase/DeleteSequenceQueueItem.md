# DeleteSequenceQueueItem

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component enables process authors to remove an item from the queue and update the rest of the queue item to make sure the queue is in correct sequence order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueItemID | Integer | No | Sequence queue item to be deleted. |

## System Processing

- Sequence queue item is validated. If an item is not found for the input ID, it errors out. 
- Sequence queue, queue definition, and queue item group are validated. If any of them are not found, it errors out. 
- The BC will delete the record specified and will then update the rest of the queue to fill in the missing spot.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE_ITEM | All | Inputted SequenceQueueItemID |
