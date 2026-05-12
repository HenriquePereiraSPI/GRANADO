# RemoveReading

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionReadingManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to remove a reading from the collection of actual readings for the given Disposition Test or Disposition Test Sample.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionReadingID | Integer | Yes | Unique identifier of the disposition test reading to be removed. |

## Validations

DispositionReadingID must exist in DISPOSITION_READING table.

## System Processing

- If Disposition Test is given by DISPOSITION_READING.DispositionTestID (the value is set) then it validates that disposition test status is 'New', 'Released' or 'Started' (DISPOSITION_TEST_STATUS). 
- Disposition Test Reading record is removed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_READING | [All] | Removes record based on the inputted DispositionReadingID |
