# UpdateDefect

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated

## Description

This Business Component method is used to update the basic attributes of the Quality Defect created using CreateQualityDefect BC methods. Note that if Status of Quality Defect is 3 (Cancelled) or 4 (Closed), it needs to be changed to any other status before changing defect properties. This method also saves the history of Quality Defect status changes if they occur. If the user wants to save a Quality Defect status history with EffectiveDurationSeconds populated, then the user must create an additional input to the BC called EffectiveDurationSeconds (case sensitive) of Integer type. 

To populate Comment during the Quality Defect status change (for the QUALITY_DEFECT_STATUS_HISTORY table) the user should use dynamic input called StatusChangeComment (case sensitive) of Char type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | No | The identifier of the Quality Defect record to be updated. |
| Input | NoOfDefects | Integer | No | The number of defects in the case when multiple defects are kept in a single record. |
| Input | Severity | Integer | Yes | The severity of the defect. The valid severity types are: 1 - Normal, 2 - Minor, 3 - Major, 4 - Critical. |
| Input | Code | Char | Yes | The Reason Code of the Quality Defect (REASON_CODE.ReasonType = 25 - Defect Code). |
| Input | Characteristic | Char | Yes | The link to a Characteristic describing the defect (CHARACTERISTIC table). |
| Input | CharacteristicRevision | Char | Yes | The link to a specific Characteristic revision. |
| Input | Comment | Char | No | A free text description of the defect. |
| Input | RootCauseCode | Char | No | The Root Cause Code of the Quality Defect (REASON_CODE.ReasonType = 26 - Root Cause Code). |
| Input | CorrectiveActionCode | Char | No | The Corrective Action Code of the Quality Defect (REASON_CODE.ReasonType = 27 - Corrective Action Code). |
| Input | ReferenceQualityDefectID | Integer | No | The reference to a different defect when the current defect is the result of another. |
| Input | Status | Integer | Yes | The status of the Quality Defect. The valid statuses are: 1 - New, 2 - Opened, 3 - Cancelled, 4 - Closed. |
| Input | ProductID | Integer | No | The identifier of the product to which the Quality Defect is assigned. |
| Input | LotNo | Char | No | The lot number to which the Quality Defect is assigned. |
| Input | SerialNo | Char | No | The serial number to which the Quality Defect is assigned. |
| Input | ContainerNo | Char | No | The Container number to which the Quality Defect is assigned. |
| Input | ResourceID | Integer | No | The identifier of the resource to which the Quality Defect is assigned. |
| Input | WipOrderNo | Char | No | The number of the WIP Order to which the Quality Defect is assigned. |
| Input | WipOrderType | Integer | No | The type of WIP Order to which the Quality Defect is assigned. |
| Input | OprSequenceNo | Char | No | The Sequence Number of the WIP Operation to which the Quality Defect is assigned. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| EffectiveDurationSeconds | Integer | The effective duration (in seconds). |
| StatusChangeComment | Char | A comment on the status change. |

## Validations

- QualityDefectID must exist in the QUALITY_DEFECT table. 
- NoOfDefects must be equal to or greater than 0. 
- Severity must exist in the QUALITY_DEFECT_SEVERITY table. 
- Code must exist in the REASON_CODE table and must be of Defect Code type (REASON_CODE.ReasonType = 25). 
- Characteristic must exist in the CHARACTERISTIC table and its usage must be Inspection (CHARACTERISTIC.Usage_ = 2). 
- Characteristic and CharacteristicRevision must exist in the CHARACTERISTIC_REVISION table. 
- RootCauseCode must exist in the REASON_CODE table and must be of Root Cause Code type (REASON_CODE.ReasonType = 26). 
- CorrectiveActionCode must exist in the REASON_CODE table and must be of Corrective Action Code type (REASON_CODE.ReasonType = 27). 
- ReferenceQualityDefectID must exist in the QUALITY_DEFECT table. 
- Status must exist in the QUALITY_DEFECT_STATUS table. 
- ProductID must exist in the PRODUCT table. 
- ProductID and LotNo must exist in the LOT_NO table. 
- ProductID and SerialNo must exist in the SERIAL_NO table. 
- ContainerNo must exist in the CONTAINER table. 
- ResourceID must exist in the RESOURCE_ table. 
- WipOrderNo and WipOrderType must exist in the WIP_ORDER table. 
- WipOrderNo, WipOrderType and OprSequenceNo must exist in the WIP_OPERATION table.

## System Processing

- System finds the Quality Defect based on QualityDefectID. 
- System updates the Quality Defect with all corresponding inputs. 
- If Quality Defect status changes, then history of this change is saved to the database.

## Pre-Conditions

Pre: Valid Quality Defects exist in the system.
 

Pre: Status input of Quality Defect is different than 3 (Closed) and 4 (Cancelled).
 

Post: Quality Defect exists in the system and is updated with all parameters that were passed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT | NoOfDefects | Inputted NoOfDefects |
|  | QualityDefectSeverityID | Inputted Severity |
|  | DefectReasonCode | Inputted Code |
|  | CharacteristicRevisionID | Value retrieved from CHARACTERISTIC_REVISION.Id based on Characteristic and CharacteristicRevision inputs |
|  | Comment_ | Inputted Comment |
|  | RootCauseReasonCode | Inputted RootCauseCode |
|  | CorrectiveActionReasonCode | Inputted CorrectiveActionCode |
|  | ReferenceQualityDefectID | Inputted ReferenceQualityDefectID |
|  | QualityDefectStatusID | Inputted Status |
|  | ProductID | Inputted ProductID |
|  | LotNo | Inputted LotNo |
|  | SerialNo | Inputted SerialNo |
|  | ContainerNo | Inputted Container |
|  | ResourceID | Inputted ResourceID |
|  | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
| QUALITY_DEFECT_STATUS_HISTORY | DefectNo | DefectNo from QUALITY_DEFECT table for inputted QualityDefectID |
|  | FromDefectStatusID | Quality defect status before change |
|  | ToDefectStatusID | Quality defect status after change |
|  | ChangeStatusDate | UTC time of Quality Defect status change |
|  | EmployeeNo | Logged employee |
|  | DurationSeconds | Time difference in seconds between current and previous quality defect status change or quality defect creation time |
|  | EffectiveDurationSeconds | Inputted EffectiveDurationSeconds |
|  | Comment_ | Inputted Comment |
