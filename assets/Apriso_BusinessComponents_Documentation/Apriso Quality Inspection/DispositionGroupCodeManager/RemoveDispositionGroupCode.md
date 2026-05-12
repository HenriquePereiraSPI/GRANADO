# RemoveDispositionGroupCode

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionGroupCodeManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

Removes Disposition Group Code record based on the DispositionGroupCodeID specified.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionGroupCodeID | Integer | Yes | Unique identifier of a Disposition Group Code to be removed. |

## Validations

DispositionGroupCodeID must exist in DISPOSITION_GROUP_CODE table.

## System Processing

- If disposition group code is defined for a Disposition Line (DISPOSITION_GROUP_CODE.LineSequnceNo is not NULL) then validates that disposition line status is 'New' (DISPOSITION_LINE_STATUS). 
- Else, validates that the status of the Disposition is 'New' (DISPOSITION_STATUS) 
- Removes the Disposition Group Code record from the DISPOSITION_GROUP_CODE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_GROUP_CODERecord removed based on the DispositionGroupCodeID | [All] |  |
