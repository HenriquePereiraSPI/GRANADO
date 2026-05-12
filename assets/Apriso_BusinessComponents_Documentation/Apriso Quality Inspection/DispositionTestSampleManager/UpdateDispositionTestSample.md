# UpdateDispositionTestSample

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
| Input | SampleQuantity | Decimal | No | Quantity of product that represents a single sample unit. |
| Input | SampleSize | Integer | No | Number of units to be inspected. Sample Size is provided manually or calculated automatically based on the Sampling Procedure. |
| Input | SampleUomCode | Char | No | Unit of measure of the numeric value of the test. Applies only for test of characteristic of type: Variable. |

## Validations

- DispositionTestSampleID must exist in DISPOSITION_TEST_SAMPLE table. 
- SampleUomCode must exist in UOM table.

## System Processing

- Validates that disposition test sample status (DISPOSITION_TEST_SAMPLE.DispositionTestStatus) is 'New' (DISPOSITION_TEST_STATUS). 
- Validates that the sum of DISPOSITION_TEST_SAMPLE.SampleQuantity of the disposition test samples, which are linked to the disposition test, is not greater than sample size of the disposition test (DISPOSITION_TEST.SampleSize). 
- Updates Disposition Test Sample record passing parameters: 
 
- SampleNumber 
- Sample Size 
- Sample Quantity 
- Sample UomCode 
- Comment

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITON_TEST_SAMPLE | Number_ | Inputted SampleNumber or Null of not specified |
|  | SampleSize | Inputted SampleSize or Null if not greater than 0 |
|  | SampleQuantity | Inputted SampleQuantity or Null if SampleUomCode not specified |
|  | UomCode | Inputted SampleUomCode or Null if not specified |
|  | Comment | Inputted Comment or Null if not specified. |
