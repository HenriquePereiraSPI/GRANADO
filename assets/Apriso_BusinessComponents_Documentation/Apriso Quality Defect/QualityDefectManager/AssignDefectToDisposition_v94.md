# AssignDefectToDisposition_v94

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
| Input | Disposition | Char | No | The number of the Disposition with which the defect is assigned. |
| Input | LineSequenceNo | Integer | No | The Sequence number of the Disposition Line with which the defect is linked. |
| Input | DispositionTestID | Integer | No | The identifier of the Disposition Test with which the defect is linked. |
| Input | DispositionTestSampleID | Integer | No | The identifier of the Disposition Test sample with which the defect is linked. |
| Input | DispositionReadingID | Integer | No | The identifier of the Disposition Test Reading with which the defect is linked. |
| Input | QualityDefectID | ListofInteger | Yes | The identifier of the quality defect to be assigned to a Disposition. |

## Validations

- The Facility must exist in the FACILITY table. 
- The Facility and Disposition must exist in the DISPOSITION table, and the status of the Disposition must not be Completed or Evaluated (DISPOSITION.Status != 14 and DISPOSITION.Status != 15). 
- Facility, Disposition, and LineSequenceNo must exist in the DISPOSITION_LINE table, and the status of the Disposition Line must not be Completed (DISPOSITION_LINE.Status != 14). 
- DispositionTestID must exist in the DISPOSITION_TEST table, and the status of the Disposition Test must not be Completed or Evaluated. 
 
- If Facility (DISPOSITION.Facility) and Disposition (DISPOSITION.Disposition) are provided, the Disposition Test (DISPOSITION_TEST.Facility, DISPOSITION_TEST.Disposition) must link to the Disposition. 
- If Facility (DISPOSITION.Facility), Disposition (DISPOSITION.Disposition), and LineSequenceNo (DISPOSITION. LineSequenceNo) are provided, the Disposition Test (DISPOSITION_TEST.Facility, DISPOSITION_TEST.Disposition, DISPOSITION_TEST.LineSequenceNo) must link to the Disposition Line. 
 
- DispositionTestSampleID must exist in the DISPOSITION_TEST_SAMPLE table, and the status of the Disposition Test must not be Completed or Evaluated. 
 
- If DispositionTestID (DISPOSITION_TEST.ID) is provided, then the Disposition Test sample must link to the Disposition Test (DISPOSITION_TEST_SAMPLE.DispositionTestID must equal DISPOSITION_TEST.ID). 
- If the Disposition (the Facility and Disposition Inputs) is provided, the Disposition Test sample must link to the Disposition. 
- If the Disposition Line (the Facility, Disposition, and LineSequenceNo Inputs) are provided, the Disposition Test Sample must link to the Disposition Line. 
 
- DispositionReadingID must exist in the DISPOSITION_READING table and must link to the Disposition Test provided as an Input (DispositionTestID = DISPOSITION_READING. DispositionTestID), the Disposition Test sample provided as an Input (DispositionTestSampleID = DISPOSITION_READING. DispositionTestSampleID), the Disposition (the Facility and Disposition Inputs), and the Disposition Line (the Facility, Disposition, and LineSequenceNo Inputs). 
- Each QualityDefectID from the list of quality defect identifiers must exist in the QUALITY_DEFECT table. 
- The status of each quality defect (which is not assigned yet to any of the provided entities such as Disposition, Disposition Line, Disposition Test, Disposition Test Sample, or Disposition Reading) must not be Cancelled (QUALITY_DEFECT.Status != 3) or Closed(QUALITY_DEFECT.Status != 4), and the status of the quality defect's currently assigned entity (Disposition, Disposition Line, Disposition Test, Disposition Test Sample) must not be Completed or Evaluated.

## System Processing

- The system verifies that DispositionReadingID is specified. 
- The system verifies that DispositionTestID is specified. 
- The system verifies that DispositionTestSampleID is specified. 
- The system verifies that Facility, Disposition, and LineSequenceNo (Disposition Line) are specified. 
- The system verifies that Facility and Disposition are specified.

## Pre-Conditions

Pre-Conditions: the quality defect must exist in the system and it must not be linked to the Disposition.
 

Post-Conditions: the quality defect must exist in system and it must not be linked to the Disposition.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT | Facility | Facility |
|  | Disposition | Disposition |
|  | LineSequenceNo | LineSequenceNo |
|  | DispositionTestID | DispositionTestID |
|  | DispositionReadingID | DispositionReadingID |
|  | DispositionTestSampleID | DispositionTestSampleID |
