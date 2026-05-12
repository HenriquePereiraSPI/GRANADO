# QUALITY_DEFECT_LOC_DIMENSION

**Database:** Operational

**Description:** Table keeps the dimensions for locations of the quality defect

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Description | NVARCHAR(2000) | True |  | False |  | Description of the location. |
| DimensionCode | NVARCHAR(50) | True |  | False | DIMENSION | Dimension Code, eg, Coord X |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Quality Defect Location Dimension record |
| MaxValue_ | DECIMAL(28,10) | True |  | False |  | Maximum valud of the dimension |
| MinValue_ | DECIMAL(28,10) | True |  | False |  | Minimum valud of the dimension |
| QualityDefectLocationID | INT(10,0) | True |  | False | QUALITY_DEFECT_LOCATION | Reference to Quality Defect Location |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure of the dimension value, minimum, maximum |
| Value_ | DECIMAL(28,10) | True |  | False |  | Value of the dimension |

## Primary Key

- **PK_QUALITY_DEFECT_LOC_DIMENSION** on `ID`

## Foreign Keys (this table -> other)

- **FK_QUALITY_DEFECT_LOC_DIMENSION_DIMENSION** — QUALITY_DEFECT_LOC_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_QUALITY_DEFECT_LOC_DIMENSION_QUALITY_DEFECT_LOCATION** — QUALITY_DEFECT_LOC_DIMENSION -> QUALITY_DEFECT_LOCATION (`QualityDefectLocationID -> ID`)
- **FK_QUALITY_DEFECT_LOC_DIMENSION_UNIT** — QUALITY_DEFECT_LOC_DIMENSION -> UNIT (`UnitID -> ID`)
- **FK_QUALITY_DEFECT_LOC_DIMENSION_UOM** — QUALITY_DEFECT_LOC_DIMENSION -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_QUALITY_DEFECT_LOC_DIMENSION_DIMENSION** on `DimensionCode`
- **IF_QUALITY_DEFECT_LOC_DIMENSION_QUALITY_DEFECT_LOCATION** on `QualityDefectLocationID`
- **IF_QUALITY_DEFECT_LOC_DIMENSION_UNIT** on `UnitID`
