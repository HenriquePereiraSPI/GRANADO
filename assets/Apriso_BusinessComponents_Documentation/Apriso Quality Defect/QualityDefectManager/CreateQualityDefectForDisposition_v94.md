# CreateQualityDefectForDisposition_v94

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to create Quality Defect in the reference to the Disposition, Disposition Line or Disposition Test. This method creates the base Defect. All redundant information (e.g., WipOrderNo or LotNo) is populated automatically during the Defect creation to simplify queries and filters on Quality Defects. In order to link a unit document or a unit characteristic different BC methods must be used. This method saves a status of the created Quality Defect in the history table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | No | Facility of the Disposition the Defect is created for. |
| Input | Disposition | Char | No | Number of the Disposition the Defect is created for. |
| Input | LineSequenceNo | Integer | No | Sequence number of the Disposition Line the Defect is linked with. |
| Input | DispositionTestID | Integer | No | Identifier of a Disposition Test the Defect is linked with. |
| Input | DispositionTestSampleID | Integer | No | Identifier of a Disposition Test Sample the Defect is linked with. |
| Input | DispositionReadingID | Integer | No | Identifier of a Disposition Test Reading the Defect is linked with. |
| Input | NoOfDefects | Integer | No | Number of Defects in case multiple Defects are kept in the single record. |
| Input | Severity | Integer | No | Severity of the Defect. Valid severity types are: 1 - Normal, 2 - Minor, 3 - Major, 4 - Critical. |
| Input | Type | Integer | Yes | Quality Defect Type. Valid types are: 1 - Defect from Quality Inspection, 2 - Adhoc Defect, 3 - Miscellaneous Defect. |
| Input | Code | Char | Yes | Reason Code of the Quality Defect (REASON_CODE.ReasonType = 25 - Defect Code). |
| Input | Characteristic | Char | Yes | A link to a Characteristic describing the Defect (CHARACTERISTIC table). |
| Input | CharacteristicRevision | Char | Yes | A link to a specific Characteristic revision. |
| Input | Comment | Char | No | Free text description of the Defect. |
| Input | RootCauseCode | Char | No | Root Cause Code of the Quality Defect (REASON_CODE.ReasonType = 26 - Root Cause Code). |
| Input | CorrectiveActionCode | Char | No | Corrective Action Code of the Quality Defect (REASON_CODE.ReasonType = 27 - Corrective Action Code). |
| Input | ReferenceQualityDefectID | Integer | No | Reference to a different Defect in case the current one is a result of another. |
| Input | Status | Integer | Yes | Status of the Quality Defect. Valid statuses are: 1 - New, 2 - Opened, 3 - Cancelled, 4 - Closed. |
| Output | DefectID | Integer | No | Unique identifier of a newly created Quality Defect. |

## Validations

- Facility must exist in the FACILITY table. 
- Facility and Disposition must exist in the DISPOSITION table and the Disposition status must not be Completed or Evaluated (DISPOSITION.Status != 14 and DISPOSITION.Status != 15). 
- Facility, Disposition and LineSequenceNo must exist in the DISPOSITION_LINE table and the Disposition Line status isn't Completed or Evaluated (DISPOSITION_LINE.Status != 14 and DISPOSITION_LINE.Status != 15).  
- DispositionTestID must exist in the DISPOSITION_TEST table and the Disposition status must not be Completed or Evaluated (DISPOSITION.Status != 14 and DISPOSITION.Status != 15). 
 
- If Facility (DISPOSITION.Facility) and Disposition (DISPOSITION.Disposition) are provided then the Disposition Test (DISPOSITION_TEST.Facility, DISPOSITION_TEST.Disposition) must link to the same Disposition. 
- If Facility (DISPOSITION.Facility), Disposition (DISPOSITION.Disposition) and LineSequenceNo (DISPOSITION. LineSequenceNo) are provided, the Disposition Test (DISPOSITION_TEST.Facility, DISPOSITION_TEST.Disposition, DISPOSITION_TEST.LineSequenceNo) must be linked to the Disposition Line. 
 
- DispositionTestSampleID must exist in the DISPOSITION_TEST_SAMPLE table and the status of the Disposition Test must not be Completed or Evaluated.  
 
- If DispositionTestID (DISPOSITION_TEST.ID) is provided then the Disposition Test Sample must be linked to the Disposition Test (DISPOSITION_TEST_SAMPLE.DispositionTestID must equal DISPOSITION_TEST.ID) 
- If Disposition (inputs Facility and Disposition) is provided then the Disposition Test Sample must be linked to the Disposition. 
- If Disposition Line (inputs Facility, Disposition, and LineSequenceNo) are provided then the Disposition Test Sample must be linked to the Disposition Line. 
 
- DispositionReadingID must exist in the DISPOSITION_READING table and must be linked to the Disposition Test provided as input (DispositionTestID = DISPOSITION_READING. DispositionTestID), Disposition Test Sample provided as input (DispositionTestSampleID = DISPOSITION_READING. DispositionTestSampleID), Disposition (inputs Facility and Disposition) and Disposition Line (inputs Facility, Disposition and LineSequenceNo). 
- NoOfDefects must be equal to or greater than 0. 
- Severity must exist in the QUALITY_DEFECT_SEVERITY table. 
- Type must exist in the QUALITY_DEFECT_TYPE table. 
- Code must exist in the REASON_CODE table and must be of Defect Code type (REASON_CODE.ReasonType = 25). 
- Characteristic must exist in the CHARACTERISTIC table and its usage must be Inspection (CHARACTERISTIC.Usage_ = 2). 
- Characteristic and CharacteristicRevision must exist in the CHARACTERISTIC_REVISION table. 
- RootCauseCode must exist in the REASON_CODE table and must be of Root Cause Code type (REASON_CODE.ReasonType = 26). 
- CorrectiveActionCode must exist in REASON_CODE table and must be of Corrective Action Code type (REASON_CODE.ReasonType = 27). 
- ReferenceQualityDefectID must exist in the QUALITY_DEFECT table. 
- Status must exist in the QUALITY_DEFECT_STATUS table.

## System Processing

- Query the sequence provider to get the new sequence for the Defect (Sequence: = QUALITY_DEFECT). 
- Persist the Quality Defect with all inputs and link it to the following records 
 
- Disposition Reading - if DispositionReadingID is specified 
- Disposition Test - if DispositionTestID is specified 
- Disposition Test Sample - if DispositionTestSampleID is specified 
- Disposition Line - if Facility, Disposition and LineSequenceNo are specified 
- Disposition - if Facility and Disposition are specified 
 
- System creates a new Quality Defect Status History record.

## Pre-Conditions

**Post-Conditions:** 
 

Quality Defect exists in the system and is assigned to the given level of the Disposition structure.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT | ID | Value automatically incremented |
|  | DefectNo | Value automatically generated by sequence provider |
|  | QualityDefectType | Inputted Type |
|  | QualityDefectStatusID | Inputted Status |
|  | DefectReasonCode | Inputted Code |
|  | QualityDefectSeverityID | Inputted Severity |
|  | CharacteristicRevisionID | Value retrieved from the CHARACTERISTIC_REVISION.Id based on Characteristic and CharacteristicRevision inputs |
|  | RootCauseReasonCode | Inputted RootCauseCode |
|  | CorrectiveActionReasonCode | Inputted CorrectiveActionCode |
|  | ReferenceQualityDefectID | Inputted ReferenceQualityDefectID |
|  | NoOfDefects | Inputted NoOfDefects |
|  | Comment_ | Inputted Comment |
|  | Facility | Inputted Facility |
|  | Disposition | Inputted Disposition |
|  | LineSequenceNo | Inputted LineSequenceNo |
|  | DispositionTestID | Inputted DispositionTestID |
|  | DispositionReadingID | Inputted DispositionReadingID |
|  | DispositionTestSampleID | Inputted DispositionTestSampleID |
| QUALITY_DEFECT_STATUS_HISTORY | DefectNo | DefectNo from the QUALITY_DEFECT table for inputted QualityDefectID |
|  | ToDefectStatusID | Current quality defect status |
|  | ChangeStatusDate | UTC time of Quality Defect status change |
|  | EmployeeNo | Logged employee |
|  | Comment_ | Inputted Comment |
