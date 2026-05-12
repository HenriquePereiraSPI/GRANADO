# PROCESS_SIGNATURE

**Database:** Operational

**Description:** The table stores design information about signatures that is required on the process, process operation, or process operation step.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowMultiSignOff | BIT | True | ((0)) | False |  | Signature can be signed off at the same time along with other signatures in the same process, process operation, or process operation step. |
| AllowNotPerformed | BIT | True | ((0)) | False |  | Signature can be signed off stating the task is not performed. |
| AllowPartialSignOff | BIT | True | ((0)) | False |  | Signature can be partially signed off. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Link to CLASSIFICATION table. |
| CommentRequired | BIT | True | ((0)) | False |  | Comment required with sign off. |
| DSID | NVARCHAR(40) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(40) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DSRevision | NVARCHAR(40) | True |  | False |  | DELMIA 3DEXPERIENCE signature revision. |
| DSRevisionFamily | NVARCHAR(40) | True |  | False |  | DELMIA 3DEXPERIENCE signature revision family. |
| DSRevisionIndex | INT(10,0) | True |  | False |  | DELMIA 3DEXPERIENCE signature revision index. |
| EstimatedTime | NVARCHAR(20) | True |  | False |  | Estimated time. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| Lifecycle | NVARCHAR(40) | True |  | False |  | Name of the maturity graph governing the lifecycle. |
| Maturity | NVARCHAR(20) | True |  | False |  | Name of the current maturity state of the lifecycle. |
| MeasuredTime | NVARCHAR(20) | True |  | False |  | Measured time. |
| Name | NVARCHAR(40) | True |  | False |  | Descriptive name of the signature. |
| Optional | BIT | True | ((0)) | False |  | Signature is optional. |
| Organization | NVARCHAR(40) | True |  | False |  | Name of the Organization owning the Object in the Source system. |
| Owner | NVARCHAR(40) | True |  | False |  | Name of the user owning the Object in the Source system. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | ID of the Process. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | ID of the Process Operation. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | ID of the Process Operation Step. |
| Project | NVARCHAR(40) | True |  | False |  | Name of the Project owning the Object in the Source system. |
| RejectReasonCodeRequired | BIT | True | ((0)) | False |  | Reason Code required if task was rejected. |
| SecurityLevel | SMALLINT(5,0) | True |  | False |  | Security level. |
| SequenceNo | SMALLINT(5,0) | True |  | False |  | The sequence number for the signatures on the same process, process operation, or process operation step. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes (Medium for the Description and Extended for Text fields). |
| TimeMode | NVARCHAR(20) | True |  | False |  | Time mode. |
| UniqueSignOffRequired | BIT | True | ((0)) | False |  | Multiple signatures in the same process, process operation, or process operation step is required to be unique and cannot be signed by the same individual. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValueAddedRatioOnEstimatedTime | SMALLINT(5,0) | True |  | False |  | Value added ratio based on estimated time. |
| VoidReasonCodeRequired | BIT | True | ((0)) | False |  | Reason Code required if previous signature was voided. |

## Primary Key

- **PK_PROCESS_SIGNATURE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_SIGNATURE_PROCESS** — PROCESS_SIGNATURE -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_SIGNATURE_PROCESS_OPERATION** — PROCESS_SIGNATURE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_SIGNATURE_PROCESS_OPERATION_STEP** — PROCESS_SIGNATURE -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_SIGNATURE_UNIT** — PROCESS_SIGNATURE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_PROCESS_SIGNATURE_REASON_CODE_PROCESS_SIGNATURE** — PROCESS_SIGNATURE_REASON_CODE -> PROCESS_SIGNATURE (`ProcessSignatureID -> ID`)
- **FK_PROCESS_SIGNATURE_ROLE_PROCESS_SIGNATURE** — PROCESS_SIGNATURE_ROLE -> PROCESS_SIGNATURE (`ProcessSignatureID -> ID`)
- **FK_QUALITY_DEFECT_PROCESS_SIGNATURE** — QUALITY_DEFECT -> PROCESS_SIGNATURE (`ProcessSignatureID -> ID`)
- **FK_WIP_ORDER_SIGNATURE_PROCESS_SIGNATURE** — WIP_ORDER_SIGNATURE -> PROCESS_SIGNATURE (`ProcessSignatureID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PROCESS_SIGNATURE_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_SIGNATURE_DSID** on `DSID`
- **IF_PROCESS_SIGNATURE_DSInstanceID** on `DSInstanceID`
- **IF_PROCESS_SIGNATURE_PROCESS** on `ProcessID`
- **IF_PROCESS_SIGNATURE_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_PROCESS_SIGNATURE_PROCESS_OPERATION_STEP** on `ProcessOperationStepID`
- **IF_PROCESS_SIGNATURE_UNIT** on `UnitID`
