# DeleteSequenceQueueDefinition

**Category:** Apriso/Common/Sequencing
**Class:** `FlexNet.BusinessFacade.Sequencing.SequenceQueueDefinitionBase`
**Assembly:** `FlexNet.BusinessFacade.Sequencing.dll`
**Status:** Active

## Description

Enables users to delete sequence queue definitions that are no longer necessary. Deletes the SEQUENCE_QUEUE_DEFINITION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SequenceQueueDefinitionId | Integer | No | ID of the sequence queue definition that is deleted. |

## System Processing

- If a sequence queue definition is found, the sequence queue definition is deleted. If a sequence queue definition is not found, an error message, sequence queue definition not found, is returned.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SEQUENCE_QUEUE_DEFINITION | All | Inputted SequenceQueueDefinitionId |
