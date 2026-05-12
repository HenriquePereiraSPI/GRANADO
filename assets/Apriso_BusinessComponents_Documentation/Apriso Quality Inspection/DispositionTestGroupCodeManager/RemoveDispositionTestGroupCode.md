# RemoveDispositionTestGroupCode

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestGroupCodeManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Removes disposition test group code record based on the DispositionTestGroupCodeID specified.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestGroupCodeID | Integer | Yes | Unique identifier of a Test Group Code to be removed. |

## Validations

DispositionTestGroupCodeID must exist in DISPOSITION_TEST_GROUP_CODE table.

## System Processing

- Validates that the Disposition Test status (the one that disposition test group code points to) is 'New' (DISPOSITION_TEST_STATUS). 
- Removes the Disposition Test Group Code record from DISPOSITION_TEST_GROUP_CODE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_GROUP_CODE | [All] |  |
