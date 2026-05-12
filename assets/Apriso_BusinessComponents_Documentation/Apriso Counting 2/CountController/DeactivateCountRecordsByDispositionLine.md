# DeactivateCountRecordsByDispositionLine

**Category:** Apriso/Counting 2
**Class:** `FlexNet.BusinessFacade.Counting.CountController`
**Assembly:** `FlexNet.BusinessFacade.Counting.dll`
**Status:** Active
**Keywords:** Inventory Update Count CountRecord Active CountDispositionLine

## Description

This Business Component method deactivates (sets Active = false) all the CountRecord records linked to the specified Count Disposition Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDispositionLineID | Integer | No | ID of an existing Count Disposition Line record from the COUNT_DISPOSITION_LINE table. |

## System Processing

- System updates Active flag in the COUNT_RECORD table to false for the CountRecord records which are linked to the specified Count Disposition Line.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_RECORD | Active |  |
