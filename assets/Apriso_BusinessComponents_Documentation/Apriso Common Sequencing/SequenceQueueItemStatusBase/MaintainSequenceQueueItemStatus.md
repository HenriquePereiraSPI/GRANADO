# MaintainSequenceQueueItemStatus

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemStatusBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

Inserts or updates SEQUENCE_QUEUE_ITEM_STATUS records.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueItemStatus | Integer | Yes | Status of the queue item. |
| Input | DefaultColor | Char | No | Color used to paint the item row in a data grid. |
| Input | LanguageID | Integer | No | Language choice for the text descriptions. |
| Input | ShortDescription | Char | No | Short description of the item. |
| Input | MediumDescription | Char | No | Medium description of the item. |
| Input | LongDescription | Char | No | Long description of the item. |
| Output | SequenceQueueItemStatus | Integer | No | Status of the queue item. |

## System Processing

If a sequence queue item status is found with the input value, the sequence queue item status is updated. If not, a new sequence queue item status is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE_ITEM_STATUS | DefaultColor | Inputted DefaultColor |
|  | TextID | System generated |
| TEXT | ID | System generated |
| TEXT_TRANSLATION | Short | Inputted ShortDescription |
| TEXT_TRANSLATION | Medium | Inputted MediumDescription |
| TEXT_TRANSLATION | Extended | Inputted LongDescription |
