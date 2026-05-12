# InvalidateDataCollectReadings

**Category:** Apriso/WIP/DataCollect
**Class:** `FlexNet.BusinessFacade.DataCollect.WipDataCollectManager`
**Assembly:** `FlexNet.BusinessFacade.DataCollect.dll`
**Status:** Active
**Keywords:** Invalidate, Wip, Data, Collect,

## Description

Invalidates given Wip Data Collect Readings

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipDataCollectReadingID | List of Integer | Yes | List of WIP Data Collect readings to invalidate. |
| Output | InvalidatedReadingID | List of Integer |  | Dynamic Output. Unique identifiers of the readings that were invalidated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| SkipValidation | Boolean | Allows to skip validation. |

## Validations

Validation passes if every data collect reading exists. If SkipValidation is set to true, system does no validation.

## System Processing

- System sets the status flag to 0 (invalid) for each reading. 
- System returns all readings that were invalidated (only if dynamic output InvalidatedReadingID is provided).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_DATA_COLLECT_READING | Status | Value changed to 0. |
