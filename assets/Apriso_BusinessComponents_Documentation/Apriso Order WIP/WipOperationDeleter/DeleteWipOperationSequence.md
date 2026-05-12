# DeleteWipOperationSequence

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationDeleter`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing`
**Status:** Active
**Keywords:** delete remove WIP Operation Sequence

## Description

The purpose of this Business Component method is to delete the WIP Operation Sequence record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOperationSequenceID | Integer | Yes | The ID of record to be deleted. |

## Validations

- The system validates that record with provided ID exists in the WIP_OPERATION_SEQUENCE table.

## System Processing

- The system deletes the record from the WIP_OPERATION_SEQUENCE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_SEQUENCE | ID | WipOperationSequenceID |
