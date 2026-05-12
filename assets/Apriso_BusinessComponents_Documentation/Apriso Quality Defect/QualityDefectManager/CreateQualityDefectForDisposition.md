# CreateQualityDefectForDisposition

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

The method is used to create Quality Defect in the reference to the Disposition, Disposition Line or Disposition Test. This method creates the base Defect. All redundant information (e.g. WipOrderNo or LotNo) is populated automatically during the Defect creation to simplify queries and filters on Quality Defects. In order to link a unit document or a unit characteristic different BC methods must be used.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | Facility of the Disposition the Defect is created for. |
| Input | Disposition | Char | No | Number of the Disposition the Defect is created for. |
| Input | LineSequenceNo | Integer | No | Sequence number of the Disposition Line the Defect is linked with. |
| Input | DispositionTestID | Integer | No | Identifier of a Disposition Test the Defect is linked with. |
| Input | DispositionReadingID | Integer | No | Identifier of a Disposition Test Reading the Defect is linked with. |
| Input | NoOfDefects | Integer | No | Number of Defects in case multiple Defects are kept in the single record. |
| Input | Severity | Integer | No | Severity of the Defect. Valid severity types are: 1 - Normal, 2 - Minor, 3 - Major, 4 - Critical. |
| Input | Type | Integer | Yes | Quality Defect Type. Valid types are: 1 - Defect from Quality Inspection, 2 - Adhoc Defect, 3 - Miscellaneous Defect. |
| Input | Code | Char | Yes | Reason Code of the Quality Defect (REASON_CODE.ReasonType = 25 - Defect Code). |
| Input | Characteristic | Char | Yes | A link to a characteristic describing the Defect (CHARACTERISTIC table). |
| Input | CharacteristicRevision | Char | Yes | A link to a specific Characteristic revision. |
| Input | Comment | Char | No | Free text description of the Defect. |
| Input | RootCauseCode | Char | No | Root Cause Code of the Quality Defect (REASON_CODE.ReasonType = 26 - Root Cause Code). |
| Input | CorrectiveActionCode | Char | No | Corrective Action Code of the Quality Defect (REASON_CODE.ReasonType = 27 - Corrective Action Code). |
| Input | ReferenceQualityDefectID | Integer | No | Reference to a different Defect in case current one is a result of another. |
| Input | Status | Integer | Yes | Status of the Quality Defect. Valid statuses are: 1 - New, 2 - Opened, 3 - Cancelled, 4 - Closed. |
| Output | DefectID | Integer | No | Unique identifier of a newly created Quality Defect. |

## Validations

- See documentation for CreateQualityDefectForDisposition_v94

## System Processing

- Invokes CreateQualityDefectForDisposition_v94passing all the parameters and number of 0 for DispositionTestSampleID (that means that 

DispositionTestSampleID is not specified).

## Pre-Conditions

Post: Quality Defect exists in system and is assigned to the given level of the Disposition structure.
