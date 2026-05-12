# RemoveDataCollectReadings

**Category:** Apriso/WIP/DataCollect
**Class:** `FlexNet.BusinessFacade.DataCollect.WipDataCollectManager`
**Assembly:** `FlexNet.BusinessFacade.DataCollect.dll`
**Status:** Active
**Keywords:** Data Collect, Wip Data Collect, Remove, Delete

## Description

Removes provided list of WIP Data Collect readings.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipDataCollectReadingID | List of Integer | Yes | List of WIP Data Collect readings. |
| Output | RemovedReadingID | List of Integer |  | Dynamic output. Returns the list of removed WIP Data Collect reading IDs. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| SkipValidation | Boolean | If it is set to true, the BC removes all received IDs. If set to false, the BC removes all received IDs but stops the operation when it finds an ID that does not match the Data Base. |

## Validations

Validation passes if WipDataCollectReadingID is provided.

## System Processing

System removes the list of records in the WIP_DATA_COLLECT_READING table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_DATA_COLLECT_READING | [All columns] |  |
