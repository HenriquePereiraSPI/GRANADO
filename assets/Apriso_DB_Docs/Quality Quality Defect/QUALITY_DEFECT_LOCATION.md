# QUALITY_DEFECT_LOCATION

**Database:** Operational

**Description:** Table keeps the single location of the defect expressed as the location code or multiple dimensions

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Comment_ | NVARCHAR | True |  | False |  | Description of Quality Defect Location |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Quality Defect Location record |
| LocationCode | NVARCHAR(20) | True |  | False |  | Location Code |
| QualityDefectID | INT(10,0) | True |  | False | QUALITY_DEFECT | Reference to the Quality Defect |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_QUALITY_DEFECT_LOCATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_DEFECT_LOCATION_QUALITY_DEFECT** — QUALITY_DEFECT_LOCATION -> QUALITY_DEFECT (`QualityDefectID -> ID`)
- **FK_QUALITY_DEFECT_LOCATION_UNIT** — QUALITY_DEFECT_LOCATION -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_QUALITY_DEFECT_LOC_DIMENSION_QUALITY_DEFECT_LOCATION** — QUALITY_DEFECT_LOC_DIMENSION -> QUALITY_DEFECT_LOCATION (`QualityDefectLocationID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_QUALITY_DEFECT_LOCATION_CLASSIFICATIONID** on `ClassificationID`
- **IF_QUALITY_DEFECT_LOCATION_QUALITY_DEFECT** on `QualityDefectID`
- **IF_QUALITY_DEFECT_LOCATION_UNIT** on `UnitID`
