# PROCESS_SIGNATURE_ROLE

**Database:** Operational

**Description:** The table stores information about roles associated with a process signature.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowVoid | BIT | True | ((0)) | False |  | Determines if the role is allowed to void a previous signature. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| ProcessSignatureID | INT(10,0) | False |  | False | PROCESS_SIGNATURE | ID of the Process Signature. |
| RoleID | INT(10,0) | False |  | False | ROLE | ID of the Role. |

## Primary Key

- **PK_PROCESS_SIGNATURE_ROLE** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_SIGNATURE_ROLE_PROCESS_SIGNATURE** — PROCESS_SIGNATURE_ROLE -> PROCESS_SIGNATURE (`ProcessSignatureID -> ID`)
- **FK_PROCESS_SIGNATURE_ROLE_ROLE** — PROCESS_SIGNATURE_ROLE -> ROLE (`RoleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_SIGNATURE_ROLE_PROCESS_SIGNATURE** on `ProcessSignatureID`
- **IF_PROCESS_SIGNATURE_ROLE_ROLE** on `RoleID`
