# WIP_ORDER_SIGNATURE

**Database:** Operational

**Description:** The table stores design information about signatures that is required on the WIP order, WIP operation, or WIP operation step.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowMultiSignOff | BIT | True | ((0)) | False |  | Signature can be signed off at the same time along with other signatures in the same process, process operation, or process operation step. |
| AllowNotPerformed | BIT | True | ((0)) | False |  | Signature can be signed off stating the task is not performed. |
| AllowPartialSignOff | BIT | True | ((0)) | False |  | Signature can be partially signed off. |
| CommentRequired | BIT | True | ((0)) | False |  | Comment required with sign off. |
| DSID | NVARCHAR(40) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSInstanceID | NVARCHAR(40) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
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
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | Operation sequence number. |
| Optional | BIT | True | ((0)) | False |  | Signature is optional. |
| Organization | NVARCHAR(40) | True |  | False |  | Name of the Organization owning the Object in the Source system. |
| Owner | NVARCHAR(40) | True |  | False |  | Name of the user owning the Object in the Source system. |
| ProcessSignatureID | INT(10,0) | True |  | False | PROCESS_SIGNATURE | ID of the Process Signature. |
| Project | NVARCHAR(40) | True |  | False |  | Name of the Project owning the Object in the Source system. |
| RejectReasonCodeRequired | BIT | True | ((0)) | False |  | Reason Code required if task was rejected. |
| SecurityLevel | SMALLINT(5,0) | True |  | False |  | Security level. |
| SequenceNo | SMALLINT(5,0) | True |  | False |  | The sequence number for the signatures on the same process, process operation, or process operation step. |
| Status | SMALLINT(5,0) | False |  | False | SIGNATURE_STATUS | Signature status. |
| StepSequenceNo | INT(10,0) | True |  | False | WIP_OPERATION_STEP | Operation step sequence number. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeMode | NVARCHAR(20) | True |  | False |  | Time mode. |
| UniqueSignOffRequired | BIT | True | ((0)) | False |  | Multiple signatures in the same process, process operation, or process operation step is required to be unique and cannot be signed by the same individual. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| ValueAddedRatioOnEstimatedTime | SMALLINT(5,0) | True |  | False |  | Value added ratio based on estimated time. |
| VoidReasonCodeRequired | BIT | True | ((0)) | False |  | Reason Code required if previous signature was voided. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | WIP Order type. |

## Primary Key

- **PK_WIP_ORDER_SIGNATURE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_ORDER_SIGNATURE_PROCESS_SIGNATURE** — WIP_ORDER_SIGNATURE -> PROCESS_SIGNATURE (`ProcessSignatureID -> ID`)
- **FK_WIP_ORDER_SIGNATURE_SIGNATURE_STATUS** — WIP_ORDER_SIGNATURE -> SIGNATURE_STATUS (`Status -> SignatureStatus`)
- **FK_WIP_ORDER_SIGNATURE_UNIT** — WIP_ORDER_SIGNATURE -> UNIT (`UnitID -> ID`)
- **FK_WIP_ORDER_SIGNATURE_WIP_OPERATION** — WIP_ORDER_SIGNATURE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_ORDER_SIGNATURE_WIP_OPERATION_STEP** — WIP_ORDER_SIGNATURE -> WIP_OPERATION_STEP (`WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo, SequenceNo`)
- **FK_WIP_ORDER_SIGNATURE_WIP_ORDER** — WIP_ORDER_SIGNATURE -> WIP_ORDER (`WipOrderNo, WipOrderType -> WipOrderNo, WipOrderType`)

## Referenced By (other tables -> this)

- **FK_WIP_SIGNATURE_REASON_CODE_WIP_ORDER_SIGNATURE** — WIP_SIGNATURE_REASON_CODE -> WIP_ORDER_SIGNATURE (`WipOrderSignatureID -> ID`)
- **FK_WIP_SIGNATURE_ROLE_WIP_ORDER_SIGNATURE** — WIP_SIGNATURE_ROLE -> WIP_ORDER_SIGNATURE (`WipOrderSignatureID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_LINK_WIP_ORDER_SIGNATURE** — WIP_SIGNATURE_SIGNOFF_LINK -> WIP_ORDER_SIGNATURE (`WipOrderSignatureID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_WIP_ORDER_SIGNATURE** — WIP_SIGNATURE_SIGNOFF -> WIP_ORDER_SIGNATURE (`WipOrderSignatureID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_ORDER_SIGNATURE_DSID** on `DSID`
- **IF_WIP_ORDER_SIGNATURE_PROCESS_SIGNATURE** on `ProcessSignatureID`
- **IF_WIP_ORDER_SIGNATURE_SIGNATURE_STATUS** on `Status`
- **IF_WIP_ORDER_SIGNATURE_UNIT** on `UnitID`
- **IF_WIP_ORDER_SIGNATURE_WIP_OPERATION_STEP** on `WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo`
