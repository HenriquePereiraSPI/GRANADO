# DeactivateCountRecord

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Update Count CountRecord Active

## Description

This Business Component method deactivates (sets Active = false) the specified CountRecord record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountRecordID | Integer | Yes | ID of an existing CountRecord record from COUNT_RECORD table. |

## Validations

- System validates if the CountRecord exists.

## System Processing

- System updates Active flag to false for the CountRecord record in the COUNT_RECORD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_RECORD | Active |  |
