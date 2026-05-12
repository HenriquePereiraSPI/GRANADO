# WIP_SIGNATURE_REASON_CODE

**Database:** Operational

**Description:** The table stores information about reason codes that can be used with a WIP order signature.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowNotPerformed | BIT | True | ((0)) | False |  | Determines if the reason code can be used as a reason when the associated task is not performed. |
| AllowReject | BIT | True | ((0)) | False |  | Determines if the reason code can be used as a reject reason when signing off a signature. |
| AllowSignOff | BIT | True | ((0)) | False |  | Determines if the reason code can be used to sign off a signature. |
| AllowVoid | BIT | True | ((0)) | False |  | Determines if the reason code can be used as a reason to void a previous signature. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| ReasonCode | NVARCHAR(20) | False |  | False | REASON_CODE | Reason code. |
| WipOrderSignatureID | INT(10,0) | False |  | False | WIP_ORDER_SIGNATURE | ID of the WIP Order signature. |

## Primary Key

- **PK_WIP_SIGNATURE_REASON_CODE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_SIGNATURE_REASON_CODE_REASON_CODE** — WIP_SIGNATURE_REASON_CODE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_WIP_SIGNATURE_REASON_CODE_WIP_ORDER_SIGNATURE** — WIP_SIGNATURE_REASON_CODE -> WIP_ORDER_SIGNATURE (`WipOrderSignatureID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_SIGNATURE_REASON_CODE_WIP_ORDER_SIGNATURE** on `WipOrderSignatureID`
