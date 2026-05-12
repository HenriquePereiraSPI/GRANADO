# RemoveDispositionLine

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionLineManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active
**Keywords:** FlexNet.BusinessFacade.Quality.DispositionLineManager

## Description

The method used to remove Disposition Line and unlink it from the given Disposition.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | Reference to the Disposition the given line belongs to. |
| Input | Facility | Char | Yes | Reference to the facility quality inspection (Disposition) the given line belongs to. |
| Input | SequenceNo | Integer | Yes | Unique sequence number of the Disposition Line. |

## Validations

Disposition, Facility and SequenceNo must exist in DISPOSITION_LINE table.

## System Processing

- System removes records linked to the disposition line from the following tables: 
 
- DISPOSITION_RESOURCE, 
- DISPOSITION_READING, 
- DISPOSITION_TEST_SAMPLE, 
- DISPOSITION_TEST_ATTRIBUTE, 
- DISPOSITION_TEST_GROUP_CODE, 
- DISPOSITION_TEST. 
 
- System removes disposition line (DISPOSITION_LINE table).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_RESOURCE | [All] |  |
| DISPOSITION_READING | [All] |  |
| DISPOSITION_TEST_SAMPLE | [All] |  |
| DISPOSITION_TEST_ATTRIBUTE | [All] |  |
| DISPOSITION_TEST_GROUP_CODE | [All] |  |
| DISPOSITION_TEST | [All] |  |
| DISPOSITION_LINE | [All] |  |
