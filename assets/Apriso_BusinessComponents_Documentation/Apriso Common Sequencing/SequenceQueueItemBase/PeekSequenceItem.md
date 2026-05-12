# PeekSequenceItem

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This Business Component allows users to get the properties of the top-most item in the specified Sequence Queue without removing the item from the queue. This BC is used when the user wants to know what is the next item in the queue but is not ready to remove and process the item. The BC works exactly as the DequeueSequenceItem BC, but it does NOT delete the record from the table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | No | The Sequence Queue that this items belong |
| Output | ItemsFound | Boolean | No | True if an item is found, false if not found. |
| Output | WipOrderNo | Char | No | Wip Order Numbers from the items. |
| Output | WipOrderType | Short | No | Wip Order types from the items. |
| Output | OrderNo | Char | No | Order Numbers from the items. |
| Output | OrderType | Short | No | Order Types from the items. |
| Output | OrderLineNo | Integer | No | Order Line Numbers from the items. |
| Output | ProductID | Integer | No | Product IDs from the items. |
| Output | SerialNo | Char | No | Serial Numbers from the items. |
| Output | Container | Char | No | Container from the item. |
| Output | ExternalSequence | Integer | No | External Sequence of the item. |
| Output | SequenceQueueItemID | Integer | No | Sequence queue items' IDs. |

## System Processing

- Reads sequence queue item records for the given queue id. If no sequence queue item records are found, returns with no error. 
- Returns the top most sequence items' properties.
