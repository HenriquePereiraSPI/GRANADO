# RemoveDispositionResource

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionResourceManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Method is used to remove record in the Disposition Resource that indicates what instruments are required to execute the quality inspection. Such equipment can be linked to the Disposition, Disposition Line, Disposition Test or Disposition Test Sample.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionResourceID | Integer | Yes | Unique identifier of the disposition resource to be removed. |

## Validations

DispositionResourceID must exist in DISPOSITION_RESOURCE table.

## System Processing

- Validates that the disposition referenced from disposition resource is 'New', 'Release' or Started (DISPOSITION_RESOURCE table). 
- Removes disposition resource record from DISPOSITION_RESOURCE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_RESOURCE | [All] | Record removed based on the inputted DispositionResourceID. |
