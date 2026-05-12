# DISPOSITION_READING_LOC_DIM

**Database:** Operational

**Description:** This table contains the information about the location dimension where the reading has been done

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(2000) | True |  | False |  | Comment |
| DimensionCode | NVARCHAR(50) | True |  | False | DIMENSION | Dimension Code, e.g. Coord X |
| DispositionReadingLocationID | INT(10,0) | True |  | False | DISPOSITION_READING_LOCATION | Reference to Disposition Reading Location |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Disposition Reading Location Dimension record |
| MaxValue_ | DECIMAL(28,10) | True |  | False |  | Upper bound value of the dimension |
| MinValue_ | DECIMAL(28,10) | True |  | False |  | Lower bound value of the dimension |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure of the dimension Value_, MinValue_, MaxValue_ |
| Value_ | DECIMAL(28,10) | True |  | False |  | Value of the dimension |

## Primary Key

- **PK_DISPOSITION_READING_LOC_DIM** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_READING_LOC_DIM_DIMENSION** — DISPOSITION_READING_LOC_DIM -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_DISPOSITION_READING_LOC_DIM_DISPOSITION_READING_LOCATION** — DISPOSITION_READING_LOC_DIM -> DISPOSITION_READING_LOCATION (`DispositionReadingLocationID -> ID`)
- **FK_DISPOSITION_READING_LOC_DIM_UNIT** — DISPOSITION_READING_LOC_DIM -> UNIT (`UnitID -> ID`)
- **FK_DISPOSITION_READING_LOC_DIM_UOM** — DISPOSITION_READING_LOC_DIM -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_READING_LOC_DIM_DIMENSION** on `DimensionCode`
- **IF_DISPOSITION_READING_LOC_DIM_DISPOSITION_READING_LOCATION** on `DispositionReadingLocationID`
- **IF_DISPOSITION_READING_LOC_DIM_UNIT** on `UnitID`
