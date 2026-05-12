# UpdateSequenceQueueItem_v2

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This business component updates all fields in the SequenceQueueItem to the values specified in the inputs. This is useful when new details about the item become available.
 

SequenceQueueItemID must be specified. The BC updates the record with new values for all the other input fields specified. A blank string (for String inputs) or a zero (for integer inputs) imply that the corresponding field must be set to NULL.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | No | The sequence queue that this items belongs to. |
| Input | IsEmpty | Boolean | No | IsEmpty flag. |
| Input | WipOrderNo | Char | No | Number of the WIP order linked to the queued item. |
| Input | WipOrderType | Short | No | Type of the WIP order linked to the queued item. |
| Input | OrderNo | Char | No | Number of the order linked to the queued item. |
| Input | OrderType | Short | No | Type of the order linked to the queued item. |
| Input | OrderLineNo | Integer | No | Order line linked to the queued item. |
| Input | ProductID | Integer | No | Product linked to the queued item. |
| Input | SerialNo | Char | No | Serial number linked to the queued item. |
| Input | Container | Char | No | Container linked to the queued item. |
| Input | ExternalSequence | Integer | No | External sequence linked to the queued item. |
| Input | Message | Char | No | Message for the queued item. |
| Input | SequenceQueueItemStatus | Integer | No | Item status. |

## System Processing

- Sequence queue item ID is validated. If a sequence queue item is not found for the given ID, an error message is returned. 
- Sequence queue item's properties are updated with the inputs.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE_ITEM | All | All inputs |
