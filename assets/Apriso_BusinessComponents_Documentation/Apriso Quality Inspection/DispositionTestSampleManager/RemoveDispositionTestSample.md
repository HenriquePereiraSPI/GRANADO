# RemoveDispositionTestSample

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestSampleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to remove test sample (Disposition Test Sample) from the collection of tests for the given Disposition/Disposition Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestSampleID | Integer | Yes | Unique identifier of the disposition test sample being removed. |

## Validations

DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table.

## System Processing

- Validates that disposition test sample status (DISPOSITION_TEST_SAMPLE.DispositionTestStatus) is 'New', 'Released' or 'Started' (DISPOSITON_TEST_STATUS). 
- Removes the Disposition Test Sample record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_SAMPLE | [All] | Removes record based on the inputted DispositionTestSampleID |
