# DISPOSITION_READING_LOCATION

**Database:** Operational

**Description:** This table contains the information about the location where the reading has been done

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Comment_ | NVARCHAR(2000) | True |  | False |  | Comment |
| DispositionReadingID | BIGINT(19,0) | True |  | False | DISPOSITION_READING | Reference to the Disposition Reading |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Disposition Reading Location record |
| LocationCode | NVARCHAR(20) | True |  | False |  | Location Code |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_DISPOSITION_READING_LOCATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_READING_LOCATION_DISPOSITION_READING** — DISPOSITION_READING_LOCATION -> DISPOSITION_READING (`DispositionReadingID -> ID`)
- **FK_DISPOSITION_READING_LOCATION_UNIT** — DISPOSITION_READING_LOCATION -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_DISPOSITION_READING_LOC_DIM_DISPOSITION_READING_LOCATION** — DISPOSITION_READING_LOC_DIM -> DISPOSITION_READING_LOCATION (`DispositionReadingLocationID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_READING_LOCATION_DISPOSITION_READING** on `DispositionReadingID`
- **IF_DISPOSITION_READING_LOCATION_UNIT** on `UnitID`
