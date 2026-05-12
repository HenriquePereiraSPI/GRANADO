# RemoveDispositionReadingLocationDimension

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionReadingLocationDimensionManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to remove the dimension of the disposition reading location used
 to identify the reading position.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionReadingLocationDimensionID | Integer | Yes | Disposition Reading Location Dimension to be updated. |

## Validations

DispositonReadingLocationDimensionID exists in DISPOSITION_READING_LOC_DIM table.

## System Processing

Removes disposition reading location dimension record (DISPOSITION_READING_LOC_DIM).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_READING_LOC_DIM | [All] | Record removed base on the DispositionReadingLocationDimesnionID specified. |
