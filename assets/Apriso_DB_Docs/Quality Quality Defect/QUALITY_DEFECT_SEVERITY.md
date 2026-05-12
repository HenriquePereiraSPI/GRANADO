# QUALITY_DEFECT_SEVERITY

**Database:** Operational

**Description:** Table keeps the severity of the quality defect (Normal, Minor, Major, Critical)

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of Qualtiy Defect Severity |
| SeverityCode | NVARCHAR(20) | False |  | False |  | Severity Code |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_QUALITY_DEFECT_SEVERITY** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_QUALITY_DEFECT_QUALITY_DEFECT_SEVERITY** — QUALITY_DEFECT -> QUALITY_DEFECT_SEVERITY (`QualityDefectSeverityID -> ID`)

## Unique Indexes

- **UK_QUALITY_DEFECT_SEVERITY** on `SeverityCode`

## Non-Unique Indexes

- **** on ``
