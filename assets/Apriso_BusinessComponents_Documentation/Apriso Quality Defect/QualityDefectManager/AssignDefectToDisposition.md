# AssignDefectToDisposition

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to assign a list of quality defects passed as a parameter to the Disposition, Disposition Line, Disposition Test, or Disposition Reading. It enables assigning a defect that was created using the CreateQualityDefect BC.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | The Facility of the Disposition to which the defect is assigned. |
| Input | Disposition | Char | No | The number of the Disposition to which the defect is assigned. |
| Input | LineSequenceNo | Integer | No | The Sequence number of the Disposition Line with which the defect is linked. |
| Input | DispositionTestID | Integer | No | The identifier of the Disposition Test with which the defect is linked. |
| Input | DispositionReadingID | Integer | No | The identifier of the Disposition Test Reading with which the defect is linked. |
| Input | QualityDefectID | ListofInteger | Yes | The identifier of the quality defect to be assigned to a Disposition. |

## Validations

For details, see the documentation for the AssignDefectToDisposition_v94 BC.

## System Processing

The system invokes the AssignDefectToDisposition_v94 BC and passes all the parameters and the number of 0 for DispositionTestSampleID (which means that DispositionTestSampleID is not specified).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| All the tables populated by the AssignDefectToDisposition_v94 BC method. |  |  |
