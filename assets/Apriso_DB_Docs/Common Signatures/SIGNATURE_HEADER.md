# SIGNATURE_HEADER

**Database:** Operational

**Description:** This table stores information about the Signature Header.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EnforceSequence | BIT | False |  | False |  | Indicates if Signature Details need to be signed in a sequence. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier for the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Primary Key. |
| SignatureHeaderCode | NVARCHAR(256) | True |  | False |  | Name of the Signature Header. |
| UserReference | NVARCHAR(256) | True |  | False |  | Used for user reference. |

## Primary Key

- **PK_SIGNATURE_HEADER** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CAPA_HISTORY_SIGNATURE_HEADER** — CAPA_HISTORY -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_CAPA_STEP_STATE_SIGNATURE_HEADER** — CAPA_STEP_STATE -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_CAPA_TASK_STATE_SIGNATURE_HEADER** — CAPA_TASK_STATE -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_SIGNATURE_HEADER** — COUNT_DISPOSITION_LINE -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_COUNT_DISPOSITION_SIGNATURE_HEADER** — COUNT_DISPOSITION -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_EMR_RECORD_SIGNATURE_HEADER** — EMR_RECORD -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_SIGNATURE_DETAIL_SIGNATURE_HEADER** — SIGNATURE_DETAIL -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_UNIT_ANNOTATION_SIGNATURE_HEADER** — UNIT_ANNOTATION -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_WIP_USAGE_HISTORY_SIGNATURE_SIGNATURE_HEADER** — WIP_USAGE_HISTORY_SIGNATURE -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)

## Unique Indexes

- **UK_SIGNATURE_HEADER** on `FUID`

## Non-Unique Indexes

- **** on ``
