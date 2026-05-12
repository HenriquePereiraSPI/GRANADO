# GetTestClassedResult

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

Retrieves test classed results for the specified DispositionTestID or DispositionTestSampleID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Unique identifier of a Disposition Test for which the result is to be retrieved. |
| Input | DispositionTestSampleID | Integer | No | Unique identifier of a Disposition Test Sample for which the result is to be retrieved. |
| Output | Attributes | ListofChar | No | List of unique reading attribures for the specified Disposition Test. |
| Output | NoUnits | ListofInteger | No | List of unique number of units tested within the single reading for the specified Disposition Test. |
| Output | InspectorIDs | ListofInteger | No | List of unique reading inspectors (inspector IDs) for the specified Disposition Test. |
| Output | Comments | ListofChar | No | List of unique reading descriptions for the specified Disposition Test. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table.

## System Processing

- If DispositionTestSampleID is specified then: 
 
- Validates it matches with the inputted DispositionTestID. 
- For each disposition test attribute (DISPOSITION_TEST_ATTRIBUTE) defined for the inputted DispositionTestID does the following logic: 
 
- If disposition reading (DISPOSITION_READING) record exists for the inputted DispositionTestSampleID (DISPOSITION_READING.DispositionTestSampleID) and attribute (DISPOSITION_READING.CollectedAttribute) then populates outputs as follows: 
 
- Attributes - inserts DISPOSITION_READING.CollectedAttribute 
- NoUnits - inserts DISPOSITION_READING.NoUnit 
- InspectorIDs - inserts DISPOSITION_READING.InspectorID 
- Comments - inserts DISPOSITION_READING.Comment 
 
 
- Else populates outputs as follows: 
 
- Attributes - inserts attribute 
- NoUnits - inserts value of 0 
- InspectorIDs - inserts value of 0 
- Comments - inserts an empty string. 
 
 
- Else for each disposition test attribute (DISPOSITION_TEST_ATTRIBUTE) defined for the inputted DispositionTestID does the following logic: 
 
- If disposition reading (DISPOSITION_READING) record exists for the inputted DispositionTestID (DISPOSITION_READING.DispositionTestID) and attribute (DISPOSITION_READING.CollectedAttribute) then populates outputs as follows: 
 
- Attributes - inserts DISPOSITION_READING.CollectedAttribute 
- NoUnits - inserts DISPOSITION_READING.NoUnit 
- InspectorIDs - inserts DISPOSITION_READING.InspectorID 
- Comments - inserts DISPOSITION_READING.Comment 
 
- Else populates outputs as follows: 
 
- Attributes - inserts attribute 
- NoUnits - inserts value of 0 
- InspectorIDs - inserts value of 0 
- Comments - inserts an empty string
