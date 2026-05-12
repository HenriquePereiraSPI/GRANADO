# CAPA_STEP_STATE

**Database:** Operational

**Description:** This table contains the parameters of steps needed to execute the CAPA record. Records in this table are created on demand, on first usage of a dedicated Business Component method.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CAPAID | INT(10,0) | False |  | True | CAPA | The ID of the parent record from the CAPA table. |
| CAPAStatus | SMALLINT(5,0) | True |  | False | CAPA_STATUS | The Status of the step. |
| CAPAStepID | INT(10,0) | False |  | True | CAPA_STEP | The ID of the step defined in the CAPA_STEP table. |
| CompletionDate | DATETIME | True |  | False |  | The completion date of the step. |
| DueDate | DATETIME | True |  | False |  | The due date of the step. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The Progress Status of the step. |
| SignatureHeaderID | INT(10,0) | True |  | False | SIGNATURE_HEADER | The ID of the Signature Header used for signing the step before transition to the next step. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarningDate | DATETIME | True |  | False |  | The warning date of the step. |

## Primary Key

- **PK_CAPA_STEP_STATE** on `CAPAID, CAPAStepID`

## Foreign Keys (this table -> other)

- **FK_CAPA_STEP_STATE_CAPA** — CAPA_STEP_STATE -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_STEP_STATE_CAPA_STATUS** — CAPA_STEP_STATE -> CAPA_STATUS (`CAPAStatus -> CAPAStatus`)
- **FK_CAPA_STEP_STATE_CAPA_STEP** — CAPA_STEP_STATE -> CAPA_STEP (`CAPAStepID -> ID`)
- **FK_CAPA_STEP_STATE_PROGRESS_STATUS** — CAPA_STEP_STATE -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_CAPA_STEP_STATE_SIGNATURE_HEADER** — CAPA_STEP_STATE -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_CAPA_STEP_STATE_UNIT** — CAPA_STEP_STATE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CAPA_STEP_STATE_CAPA_STATUS** on `CAPAStatus`
- **IF_CAPA_STEP_STATE_CAPA_STEP** on `CAPAStepID`
- **IF_CAPA_STEP_STATE_PROGRESS_STATUS** on `ProgressStatus`
- **IF_CAPA_STEP_STATE_SIGNATURE_HEADER** on `SignatureHeaderID`
- **IF_CAPA_STEP_STATE_UNIT** on `UnitID`
