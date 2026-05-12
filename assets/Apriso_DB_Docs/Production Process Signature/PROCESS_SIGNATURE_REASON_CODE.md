# PROCESS_SIGNATURE_REASON_CODE

**Database:** Operational

**Description:** The table stores information about reason codes that can be used with a process signature.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowNotPerformed | BIT | True | ((0)) | False |  | Determines if the reason code can be used as a reason when the associated task is not performed. |
| AllowReject | BIT | True | ((0)) | False |  | Determines if the reason code can be used as a reject reason when signing off a signature. |
| AllowSignOff | BIT | True | ((0)) | False |  | Determines if the reason code can be used to sign off a signature. |
| AllowVoid | BIT | True | ((0)) | False |  | Determines if the reason code can be used as a reason to void a previous signature. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| ProcessSignatureID | INT(10,0) | False |  | False | PROCESS_SIGNATURE | ID of the Process Signature. |
| ReasonCode | NVARCHAR(20) | False |  | False | REASON_CODE | Reason code. |

## Primary Key

- **PK_PROCESS_SIGNATURE_REASON_CODE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_SIGNATURE_REASON_CODE_PROCESS_SIGNATURE** — PROCESS_SIGNATURE_REASON_CODE -> PROCESS_SIGNATURE (`ProcessSignatureID -> ID`)
- **FK_PROCESS_SIGNATURE_REASON_CODE_REASON_CODE** — PROCESS_SIGNATURE_REASON_CODE -> REASON_CODE (`ReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_SIGNATURE_REASON_CODE_PROCESS_SIGNATURE** on `ProcessSignatureID`
