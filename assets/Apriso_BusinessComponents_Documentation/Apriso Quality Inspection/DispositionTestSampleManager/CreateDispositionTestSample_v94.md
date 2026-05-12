# CreateDispositionTestSample_v94

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionTestSampleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

The method is used to create the Disposition Test Sample linked to the Disposition Test. Disposition Test Sample is the actual sample being tested.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Comment | Char | No | Text description of the test to be performed. |
| Input | DispositionTestID | Integer | Yes | Unique identifier of the disposition test. |
| Input | SampleNumber | Char | No | Number of the Sample (for future use). |
| Input | SampleQuantity | Decimal | No | Quantity of product that represents a single sample unit. |
| Input | SampleSize | Integer | No | Number of units to be inspected. Sample Size is provided manually or calculated automatically based on the Sampling Procedure. |
| Input | SequenceNo | Integer | No | Sequence number of the sample. |
| Output | DispositionTestSampleID | Integer | No | Unique identifier of the newly created disposition test sample. |

## Validations

- DispositionTestID must exist in DISPOSITION_TEST table. 
- If SequenceNo provided (greater than 0) there can be no disposition test sample record linked to the disposition test that have the same sequence number.

## System Processing

- Validates that disposition status is 'New', 'Released' or 'Started' (DISPOSITION_STATUS). 
- If SequenceNo is not provided then obtains the next sequence number being the maximum sequence number for the given Disposition Test + 1 
- Creates Disposition Test Sample record passing all parameters specified.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_SAMPLE | OverrideSumResult | Set to false (0) |
|  | DispositionTestID | Inputted DispositionTestID |
|  | SequenceNo | Inputted or generated SequenceNo |
|  | Number | Inputted SampleNumber |
|  | DispositionTestStatus | 'New' (DISPOSITION_TEST_STATUS) |
|  | DispositionUserStatusID | Populated from DispositionUserStatusID field if it is already defined for the status in the DISPOSITION_TEST_STATUS table. |
|  | UomCode | Inputted SampleUomCode |
|  | SampleSize | Inputted SampleSize (persisted if greater than 0) |
|  | SampleQuantity | Inputted SampleQuantity (persisted if greater than 0) |
|  | Comment | Inputted Comment |
