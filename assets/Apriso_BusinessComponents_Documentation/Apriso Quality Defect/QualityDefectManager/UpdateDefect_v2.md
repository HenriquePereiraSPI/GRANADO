# UpdateDefect_v2

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessFacade.Quality.QualityDefectManager`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Active

## Description

This Business Component method is used to update the basic attributes of the Quality Defect created using CreateQualityDefect methods. Note that if Status of Quality Defect is 3 (Cancelled) or 4 (Closed), it will need to be changed as well in order to change other Defect properties at the same time. This method also saves history of Quality Defect status change if they occur. If the user wants to save a Quality Defect status history with EffectiveDurationSeconds populated, then the user must create additional input to the BC called EffectiveDurationSeconds (case sensitive) of Integer type.
 

To populate Comment during the Quality Defect status change (for the QUALITY_DEFECT_STATUS_HISTORY table) the user should use dynamic input called StatusChangeComment (case sensitive) of Char type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | Yes | The identifier of the Quality Defect record to be updated. |
| Input | NoOfDefects | Integer | No | The number of defects in the case when multiple defects are kept in a single record. |
| Input | Severity | Integer | No | The severity of the defect. The valid severity types are: 1 - Normal, 2 - Minor, 3 - Major, 4 - Critical. |
| Input | Code | Char | No | The Reason Code of the Quality Defect (REASON_CODE.ReasonType = 25 - Defect Code). |
| Input | Characteristic | Char | No | The link to a Characteristic describing the defect (CHARACTERISTIC table). |
| Input | CharacteristicRevision | Char | No | The link to a specific Characteristic revision. |
| Input | Comment | Char | No | A free text description of the defect. |
| Input | RootCauseCode | Char | No | The Root Cause Code of the Quality Defect (REASON_CODE.ReasonType = 26 - Root Cause Code). |
| Input | CorrectiveActionCode | Char | No | The Corrective Action Code of the Quality Defect (REASON_CODE.ReasonType = 27 - Corrective Action Code). |
| Input | ReferenceQualityDefectID | Integer | No | The reference to a different defect when the current defect is the result of another. |
| Input | Status | Integer | Conditional | The status of the Quality Defect. The valid statuses are: 1 - New, 2 - Opened, 3 - Cancelled, 4 - Closed. |
| Input | ProductID | Integer | No | The identifier of the product to which the Quality Defect is assigned. |
| Input | LotNo | Char | No | The lot number to which the Quality Defect is assigned. |
| Input | SerialNo | Char | No | The serial number to which the Quality Defect is assigned. |
| Input | ContainerNo | Char | No | The Container number to which the Quality Defect is assigned. |
| Input | ResourceID | Integer | No | The identifier of the resource to which the Quality Defect is assigned. |
| Input | WipOrderNo | Char | No | The number of the WIP Order to which the Quality Defect is assigned. |
| Input | WipOrderType | Integer | No | The type of WIP Order to which the Quality Defect is assigned. |
| Input | OprSequenceNo | Char | No | The Sequence Number of the WIP Operation to which the Quality Defect is assigned. |
| Input | PartnerID | Integer | No | The ID of the customer or vendor to which the Quality Defect is assigned. |
| Input | PartnerRole | Integer | No | The role of the customer or vendor to which the Quality Defect is assigned. |
| Input | DefectFacility | Char | No | The Facility to which the Quality Defect is assigned. |
| Input | ComponentProductID | Integer | No | The ID of the defective component. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| EffectiveDurationSeconds | Integer | The effective duration (in seconds). |
| StatusChangeComment | Char | A comment on the status change. |
| StepSequenceNo | Integer | The WIP Operation Step sequence number. |
| ProductComponentID | Integer | ID of the product component linked to this quality defect. |
| WipComponentID | Integer | ID of the WIP component linked to this quality defect. |
| ProcessID | Integer | ID of the process linked to this quality defect. |
| ProcessComponentID | Integer | ID of the process component linked to this quality defect. |
| ProcessSignatureID | Integer | ID of the process signature linked to this quality defect. |
| NoticeID | Integer | ID of the notice linked to this quality defect. |
| ResourceClassID | Integer | ID of the resource class linked to this quality defect. |
| DocumentID | Integer | ID of the document linked to this quality defect. |

## Validations

QualityDefectID must exist in the QUALITY_DEFECT table. NoOfDefects must be equal to or greater than 0. If provided, Severity must exist in the QUALITY_DEFECT_SEVERITY table. If provided, Code must exist in the REASON_CODE table and must be of Defect Code type (REASON_CODE.ReasonType = 25). If provided, Characteristic must exist in the CHARACTERISTIC table and its usage must be Inspection (CHARACTERISTIC.Usage_ = 2). If provided, Characteristic and CharacteristicRevision must exist in the CHARACTERISTIC_REVISION table. If provided, RootCauseCode must exist in the REASON_CODE table and must be of Root Cause Code type (REASON_CODE.ReasonType = 26). If provided, CorrectiveActionCode must exist in the REASON_CODE table and must be of Corrective Action Code type (REASON_CODE.ReasonType = 27). If provided, ReferenceQualityDefectID must exist in the QUALITY_DEFECT table. If provided, Status must exist in the QUALITY_DEFECT_STATUS table. If provided, ProductID must exist in the PRODUCT table. If provided, ProductID and LotNo must exist in the LOT_NO table. If provided, ProductID and SerialNo must exist in the SERIAL_NO table. If provided, ContainerNo must exist in the CONTAINER table. If provided, ResourceID must exist in the RESOURCE_ table. If provided, WipOrderNo and WipOrderType must exist in the WIP_ORDER table. If provided, WipOrderNo, WipOrderType and OprSequenceNo must exist in the WIP_OPERATION table. If provided, PartnerID must exist in the PARTNER table. If provided, PartnerRole must exist in the PARTNER_ROLE table. If provided, DefectFacility must exist in the FACILITY table. If provided, ComponentProductID must exist in the PRODUCT table. If provided, WipOrderNo, WipOrderType, OprSequenceNo, and StepSequenceNo must exist in the WIP_OPERATION_STEP table. If provided, ProductComponentID must exist in the PRODUCT_COMPONENT table. If provided, WipComponentID must exist in the WIP_COMPONENT table. If provided, ProcessID must exist in the PROCESS table. If provided, ProcessComponentID must exist in the PROCESS_COMPONENT table. If provided, ProcessSignatureID must exist in the PROCESS_SIGNATURE table. If provided, NoticeID must exist in the NOTICE table. If provided, ResourceClassID must exist in the RESOURCE_CLASS table. If provided, DocumentID must exist in the DOCUMENT table.

## System Processing

System finds the Quality Defect based on QualityDefectID. System updates the Quality Defect with all corresponding inputs.  If a value is not provided, then the existing value in the database is not modified.

## Pre-Conditions

Pre: Valid Quality Defects exist in the system.
 

Pre: Status of Quality Defect is different than 3 (Closed) and 4 (Cancelled).
 

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
|  | PartnerID | Inputted PartnerID |
|  | PartnerRole | Inputted PartnerRole |
|  | DefectFacility | Inputted DefectFacility |
|  | ComponentProductID | Inputted ComponentProduct |
|  | StepSequenceNo | Inputted StepSequenceNo |
|  | ProductComponentID | Inputted ProductComponentID |
|  | WipComponentID | Inputted WipComponentID |
|  | ProcessID | Inputted ProcessID |
|  | ProcessComponentID | Inputted ProcessComponentID |
|  | ProcessSignatureID | Inputted ProcessSignatureID |
|  | NoticeID | Inputted NoticeID |
|  | ResourceClassID | Inputted ResourceClassID |
|  | DocumentID | Inputted DocumentID |
| QUALITY_DEFECT_STATUS_HISTORY | DefectNo | DefectNo from QUALITY_DEFECT table for inputted QualityDefectID |
|  | FromDefectStatusID | Quality defect status before change |
|  | ToDefectStatusID | Quality defect status after change |
|  | ChangeStatusDate | UTC time of Quality Defect status change |
|  | EmployeeNo | Logged employee |
|  | DurationSeconds | Time difference in seconds between current and previous quality defect status change or quality defect creation time |
|  | EffectiveDurationSeconds | Inputted EffectiveDurationSeconds |
|  | Comment_ | Inputted Comment |
