# QUALITY_DEFECT_STATUS

**Database:** Operational

**Description:** Table keeps the status of the quality defect

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of Qualtiy Defect Status record |
| Name | NVARCHAR(50) | False |  | False |  | Status Code |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_QUALITY_DEFECT_STATUS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_QUALITY_DEFECT_QUALITY_DEFECT_STATUS** — QUALITY_DEFECT -> QUALITY_DEFECT_STATUS (`QualityDefectStatusID -> ID`)
- **FK_QUALITY_DEFECT_STATUS_HISTORY_FromDefectStatusID** — QUALITY_DEFECT_STATUS_HISTORY -> QUALITY_DEFECT_STATUS (`FromDefectStatusID -> ID`)
- **FK_QUALITY_DEFECT_STATUS_HISTORY_ToDefectStatusID** — QUALITY_DEFECT_STATUS_HISTORY -> QUALITY_DEFECT_STATUS (`ToDefectStatusID -> ID`)

## Unique Indexes

- **UK_QUALITY_DEFECT_STATUS** on `Name`

## Non-Unique Indexes

- **** on ``
