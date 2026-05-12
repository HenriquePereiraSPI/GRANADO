# QUALITY_DEFECT_TYPE

**Database:** Operational

**Description:** Table keeps the type of the quality defect

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| QualityDefectType | SMALLINT(5,0) | False |  | True |  | Unique identifier of Quality Defect Type |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_QUALITY_DEFECT_TYPE** on `QualityDefectType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_QUALITY_DEFECT_QUALITY_DEFECT_TYPE** — QUALITY_DEFECT -> QUALITY_DEFECT_TYPE (`QualityDefectType -> QualityDefectType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
