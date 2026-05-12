# DeleteCountRecord

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Delete Count CountRecord

## Description

This Business Component method deletes the specified CountRecord record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountRecordID | Integer | Yes | ID of an existing CountRecord record from COUNT_RECORD table. |

## Validations

- System validates if the CountRecord exists.

## System Processing

- System removes CountRecord record from the COUNT_RECORD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_RECORD |  |  |
