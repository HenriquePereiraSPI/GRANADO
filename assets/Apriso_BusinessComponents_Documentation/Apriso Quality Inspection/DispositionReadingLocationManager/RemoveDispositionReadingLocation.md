# RemoveDispositionReadingLocation

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionReadingLocationManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to delete location for a disposition reading along with values for all dimensions used to identify the reading position.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionReadingLocationID | Integer | Yes | Disposition Reading Location to be updated. |

## Validations

DispositonReadingLocationID exists in DISPOSITION_READING_LOCATION table

## System Processing

- Removes disposition reading location dimension record (DISPOSITION_READING_LOC_DIM) attached to the specified disposition reading location. 
- Removes disposition reading location from DISPOSITION_READING_LOCATION table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_READING_LOCATION | [All] | Record removed based on the DispositionReadingLocationID specified |
| DISPOSITION_READING_LOC_DIM | [All] | Records attached to disposition reading location being removed |
