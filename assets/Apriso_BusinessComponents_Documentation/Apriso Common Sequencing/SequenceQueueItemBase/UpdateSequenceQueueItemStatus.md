# UpdateSequenceQueueItemStatus

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueItemBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

This method updates the status and message fields for a sequence queue item record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueItemId | Integer | Yes | ID of the sequence queue item record to be updated. |
| Input | SequenceQueueItemStatus | Integer | No | New status. |
| Input | Message | Char | No | New message. |

## Validations

- Validate if sequence queue item ID exists.  
- If sequence queue item status > 0 then: 
 
- Validate if sequence queue item status exists.

## System Processing

- System validates if sequence queue item record exists. 
- System validates if sequence queue item status exists. 
- If sequence queue item status > 0 then: 
 
- System updates sequence queue item record with new status. 
 
- System updates sequence queue item record with the new message.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE_ITEM | SequenceQueueItemStatus | SequenceQueueItemStatus |
|  | Message | Message |
