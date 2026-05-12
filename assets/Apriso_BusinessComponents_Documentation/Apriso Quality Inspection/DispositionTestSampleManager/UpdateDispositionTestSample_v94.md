# UpdateDispositionTestSample_v94

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestSampleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to update the Disposition Test Sample linked to the Disposition Test. Disposition Test Sample is the actual sample being tested.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Text description of the test to be performed. |
| Input | DispositionTestSampleID | Integer | Yes | Unique identifier of the disposition test sample being updated. |
| Input | SampleNumber | Char | No | Number of the Sample (for future use). |
| Input | SampleQuantity | Decimal | No | Quantity of product that represents a single sample unit. Treated as specified if SampleUomCode is provided. |
| Input | OverrideSumResults | Boolean | Yes | If set to 'true', the summarized results will be populated manually instead of the automatic calculation based on multiple readings (DISPOSITION_READING). |

## Validations

- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table. 
- SampleUomCode must exist in UOM table.

## System Processing

- Validates that disposition test sample status (DISPOSITION_TEST_SAMPLE.DispositionTestStatus) is 'New', 'Released' or 'Started' (DISPOSITION_TEST_STATUS). 
- Validates that the sum of DISPOSITION_TEST_SAMPLE.SampleQuantity of the disposition test samples, which are linked to the disposition test, is not greater than sample size of the disposition test (DISPOSITION_TEST.SampleSize). 
- Updates Disposition Test Sample record passing parameters: 
 
- SampleNumber 
- Sample Quantity 
- Comment 
- OverrrideSumResults

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITON_TEST_SAMPLE | Number_ | Inputted SampleNumber or Null of not specified |
|  | OverrideSumResults | Inputted OverrideSumResults |
|  | SampleQuantity | Inputted SampleQuantity |
|  | Comment | Inputted Comment or Null if not specified. |
