# WIP_SIGNATURE_ROLE

**Database:** Operational

**Description:** The table stores information about roles associated with a WIP order signature.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowVoid | BIT | True | ((0)) | False |  | Determines if the role is allowed to void a previous signature. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| RoleID | INT(10,0) | False |  | False | ROLE | ID of the Role. |
| WipOrderSignatureID | INT(10,0) | False |  | False | WIP_ORDER_SIGNATURE | ID of the WIP Order signature. |

## Primary Key

- **PK_WIP_SIGNATURE_ROLE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_SIGNATURE_ROLE_ROLE** — WIP_SIGNATURE_ROLE -> ROLE (`RoleID -> ID`)
- **FK_WIP_SIGNATURE_ROLE_WIP_ORDER_SIGNATURE** — WIP_SIGNATURE_ROLE -> WIP_ORDER_SIGNATURE (`WipOrderSignatureID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_SIGNATURE_ROLE_ROLE** on `RoleID`
- **IF_WIP_SIGNATURE_ROLE_WIP_ORDER_SIGNATURE** on `WipOrderSignatureID`
