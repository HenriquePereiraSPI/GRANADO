# AssignSampleToDisposition

**Category:** Apriso/Quality/Inspection
**Class:** `FlexNet.BusinessFacade.Quality.DispositionSampleManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2.dll`
**Status:** Active

## Description

This Business Component method is used to assign an existing sample to a Disposition. Once the sample is assigned, it cannot be assigned to any other Disposition.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SampleID | Integer | Yes | The unique identifier of the sample to assign to the Disposition. |
| Input | Facility | Char | Yes | The Facility of the Disposition. |
| Input | Disposition | Char | Yes | The Disposition number. |
| Input | Status | Short | Yes | The status of the Disposition sample being created. |
| Input | SamplingDate | DateTime | No | The sampling date. |
| Input | SampledBy | Integer | No | The employee performing the sampling. |
| Input | ReturnOrDestroyDate | DateTime | No | The date when the sample was returned or destroyed. |
| Input | ReturnOrDestroyedBy | Integer | No | The employee returning or destroying the sample. |
| Output | Comment | Char | No | The comment. |
| Output | DispositionSampleID | Integer | No | The ID of the created Disposition sample. |

## Validations

- The system validates that SampleID exists in the SAMPLE table. 
- The system validates that Facility and Disposition exist in the DISPOSITION table. 
- The system validates that Status is Not Sampled (1), Sample Taken (2), Testing in Progress (3), Testing Complete (4), Sample Returned (5), or Sample Destroyed (6). 
- The system validates that SampledBy exists in the EMPLOYEE table. 
- The system validates that ReturnOrDestroyedBy exists in the EMPLOYEE table.

## System Processing

- The system validates that the Disposition status is New, Released, or Started. 
- The system validates that the sample is not yet assigned (no record in DISPOSITION_SAMPLE for SampleID provided). 
- The system validates if SampledBy and ReturnOrDestroyedBy are specified (with values greater than 0), and the system then validates that ReturnOrDestroyedDate >= SamplingDate. 
- The system validates that the product of the sample and Disposition is the same. 
- The system assigns the sample to the Disposition and passes all the parameters specified.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_SAMPLE | SampleID | The inputted SampleID. |
|  | Facility | The inputted Facility. |
|  | Disposition | The inputted Disposition. |
|  | Status | The inputted status. |
|  | SampleStartDate | The inputted SamplingDate if SampledBy >= 0. |
|  | SampleStartEmployeeID | The inputted SampledBy. |
|  | ReturnedOrDestroyedDate | The inputted ReturnOrDestroyDate if ReturnOrDestroyedBy >= 0. |
|  | ReturnedOrDestroyedEmployeeID | The inputted ReturnOrDestroyedBy. |
|  | Comment | The inputted comment. |
