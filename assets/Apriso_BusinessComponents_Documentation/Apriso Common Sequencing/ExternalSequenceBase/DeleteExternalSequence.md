# DeleteExternalSequence

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.ExternalSequenceBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

Enables users to delete external sequence queues that are no longer necessary. Deletes the EXTERNAL_SEQUENCE record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ExternalSequenceQueueId | Integer | No | ID of the external sequence that is deleted. |

## System Processing

If an external sequence is found, the external sequence is deleted. If an external sequence is not found, an error message, external sequence not found, is returned.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EXTERNAL_SEQUENCE | All |  |
