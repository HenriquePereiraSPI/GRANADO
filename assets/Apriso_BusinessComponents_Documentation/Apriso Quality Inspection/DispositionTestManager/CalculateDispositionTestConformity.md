# CalculateDispositionTestConformity

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to determine if the Disposition Test or Disposition Test Sample conforms to the control parameters.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | No | The ID of the Disposition Test for which the conformity is to be calculated. |
| Input | DispositionTestSampleID | Integer | No | The ID of the Disposition Test Sample for which the conformity is to be calculated. |

## Validations

- The system validates that DispositionTestID or DispositionTestSampleID is specified and exists in the DISPOSITION_TEST or DISPOSITION_TEST_SAMPLE table, respectively.  
- If the Calculate Conformity flag is set, then a conformity DFC must by specified.

## System Processing

- When the Calculate Conformity flag (DISPOSITON_TEST.CalculateConformity) is set and the conformity DFC (DISPOSITION_TEST.ConformityDFCRevisionFUID) is specified, the system calculates if the Disposition Test/Disposition Test Sample is conforming by calling the custom conformity DFC. 
- The conformity DFC has the following Inputs:  
 
- DispositionTestID (int; required) 
- DispositionTestSampleID (int; required if the conformity is to be calculated for a Disposition Test Sample) 
 
- The conformity DFC has the following Outputs:  
 
- Conforming (int; 1 – conforming, -1 – conformity calculated [e.g., a Disposition Test has no value calculated yet], otherwise – nonconforming) 
 
- When the DFC is executed, its return value (if conforming is not -1) is persisted into DISPOSITION_TEST.ConformingToSpecification or DISPOSITION_TEST_SAMPLE.Conforming (if DispositionTestSampleID was specified). 
- If the Calculate Conformity flag is not set or the conformity DFC is not specified, then the conformity will be calculated by comparing the final test result with the limits or list of attributes. 
- The system provide a sample custom conformity DFC.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | ConformingToSpecification | The calculated conforming flag or DBNull if not calculated. |
| DISPOSITION_TEST_SAMPLE | Conforming | The calculated conforming flag or DBNull if not calculated. |
