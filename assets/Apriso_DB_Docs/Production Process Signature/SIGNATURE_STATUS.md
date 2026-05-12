# SIGNATURE_STATUS

**Database:** Operational

**Description:** The table stores information about signature status.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SignatureStatus | SMALLINT(5,0) | False |  | True |  | Signature status. Available values: Unsigned (1), Signed (2), Partially Signed (3), Not Performed (4), Rejected (5) or Voided (6). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SIGNATURE_STATUS** on `SignatureStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WIP_ORDER_SIGNATURE_SIGNATURE_STATUS** — WIP_ORDER_SIGNATURE -> SIGNATURE_STATUS (`Status -> SignatureStatus`)
- **FK_WIP_SIGNATURE_SIGNOFF_SIGNATURE_STATUS** — WIP_SIGNATURE_SIGNOFF -> SIGNATURE_STATUS (`SignatureStatus -> SignatureStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
