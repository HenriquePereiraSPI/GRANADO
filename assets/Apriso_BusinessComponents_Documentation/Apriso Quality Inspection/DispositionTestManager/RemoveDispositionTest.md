# RemoveDispositionTest

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to remove test from the collection of tests for the given Disposition/Disposition Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Unique identifier of a Test to be removed. |

## Validations

DispositionTestID must exist in DISPOSITION_TEST table.

## System Processing

- Method validates that the Disposition Line status (the Disposition Line that the Disposition Test points to) is 'New', 'Released' or 'Started' (DISPOSITION_LINE_STATUS). 
- Removes the Disposition Test record along with the linked: 
 
- Disposition test samples, 
- Disposition readings, 
- Disposition test group codes, 
- Disposition test attributes.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | [All] |  |
| DISPOSITION_TEST_SAMPLE | [All] |  |
| DISPOSITION_READING | [All] |  |
| DISPOSITION_TEST_GROUP_CODE | [All] |  |
| DISPOSITION_TEST_ATTRIBUTE | [All] |  |
