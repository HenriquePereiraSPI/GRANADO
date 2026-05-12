# REASON_CLASS

**Database:** Operational

**Description:** This table contains the user-defined Reason Code classes used to categorize Reason Codes.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Reason Code class. |
| Name | NVARCHAR(50) | True |  | False |  | The name of the Reason Code class. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_REASON_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_DOCUMENT_REGION_REASON_CODE_REASON_CLASS** — DOCUMENT_REGION_REASON_CODE -> REASON_CLASS (`ReasonClassID -> ID`)
- **FK_REASON_CODE_REASON_CLASS** — REASON_CODE -> REASON_CLASS (`ReasonClassID -> ID`)

## Unique Indexes

- **UK_REASON_CLASS** on `FUID`

## Non-Unique Indexes

- **** on ``
