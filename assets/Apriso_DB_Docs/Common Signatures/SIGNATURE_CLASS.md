# SIGNATURE_CLASS

**Database:** Operational

**Description:** This table stores classes of the Signature.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| SignatureClass | NVARCHAR(40) | False |  | False |  | Class of the Signature. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SIGNATURE_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SIGNATURE_DETAIL_DEFINITION_SIGNATURE_CLASS** — SIGNATURE_DETAIL_DEFINITION -> SIGNATURE_CLASS (`SignatureClassID -> ID`)

## Unique Indexes

- **UK_SIGNATURE_CLASS** on `SignatureClass`
- **UK_SIGNATURE_CLASS_01** on `FUID`

## Non-Unique Indexes

- **** on ``
