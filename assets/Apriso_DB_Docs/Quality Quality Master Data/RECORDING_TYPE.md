# RECORDING_TYPE

**Database:** Operational

**Description:** Contains all possible types of test results recording available for Disposition Test

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| RecordingType | SMALLINT(5,0) | False |  | True |  | Unique identifier of recording type |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_RECORDING_TYPE** on `RecordingType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHARACTERISTIC_REVISION_RECORDING_TYPE** — CHARACTERISTIC_REVISION -> RECORDING_TYPE (`RecordingType -> RecordingType`)
- **FK_DISPOSITION_TEST_RECORDING_TYPE** — DISPOSITION_TEST -> RECORDING_TYPE (`RecordingType -> RecordingType`)
- **FK_INSPECTION_CHARACTERISTIC_RECORDING_TYPE** — INSPECTION_CHARACTERISTIC -> RECORDING_TYPE (`RecordingType -> RecordingType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
