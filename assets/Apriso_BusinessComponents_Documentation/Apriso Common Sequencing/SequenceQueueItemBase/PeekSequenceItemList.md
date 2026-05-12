# PeekSequenceItemList

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This Business Component returns an ordered list of the top-most items in the specified sequence queue. If ItemsCount is not specified, all items are returned. This BC will crop the list at the first empty item, so that only non-empty items are returned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueID | Integer | No | The Sequence Queue that this items belong |
| Input | ItemsCount | Integer | No |  |
| Output | ItemsFoundCount | Integer | No | Number of items found. |
| Output | WipOrderNoList | ListofChar | No | List of Wip Order Numbers from the items. |
| Output | WipOrderTypeList | ListofInteger | No | List of Wip Order types from the items. |
| Output | OrderNoList | ListofChar | No | List of Order Numbers from the items. |
| Output | OrderTypeList | ListofInteger | No | List of Order Types from the items. |
| Output | OrderLineNoList | ListofInteger | No | List of Order Line Numbers from the items. |
| Output | ProductIDList | ListofInteger | No | List of Product IDs from the items. |
| Output | SerialNoList | ListofChar | No | List of Serial Numbers from the items. |
| Output | ContainerList | ListofChar | No | List of Containers from the items. |
| Output | ExternalSequenceList | ListofInteger | No | List of Sequence queue items' IDs. |
| Output | SequenceQueueItemIDList | ListofInteger | No | List of Sequence queue items’ IDs. |

## System Processing

- Reads sequence queue item records for the given queue id. If no sequence queue item records are found, returns with no error.  
- Returns the sequence items’ properties in a ordered list, and it skips all the empty items.
