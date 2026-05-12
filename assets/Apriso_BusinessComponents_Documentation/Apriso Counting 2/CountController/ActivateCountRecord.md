# ActivateCountRecord

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Update Count CountRecord Active Inactive

## Description

This Business Component method is used to activate (sets Active = true) the specified CountRecord record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountRecordID | Integer | Yes | The ID of an existing CountRecord record from the COUNT_RECORD table. |

## System Processing

The system updates the Active flag to true for the CountRecord record in the COUNT_RECORD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_RECORD | Active |  |
