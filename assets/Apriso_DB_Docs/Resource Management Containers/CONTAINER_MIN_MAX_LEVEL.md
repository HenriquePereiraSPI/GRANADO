# CONTAINER_MIN_MAX_LEVEL

**Database:** Operational

**Description:** Defines the minimum and maximum quantities that may exist in the Container at either the Facility, Warehouse, Zone or Location level.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | False |  | False | CONTAINER | Reference to the Container involved. |
| Facility | NVARCHAR(40) | True |  | False | WAREHOUSE | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| LocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |
| MaxQuantity | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| MinQuantity | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| RefreshQuantity | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | For future use. |
| Zone | NVARCHAR(20) | True |  | False | ZONE | For future use. |

## Primary Key

- **PK_CONTAINER_MIN_MAX_LEVEL** on `ID`

## Foreign Keys (this table -> other)

- **FK_CONTAINER_MIN_MAX_LEVEL_CONTAINER** — CONTAINER_MIN_MAX_LEVEL -> CONTAINER (`Container -> Container`)
- **FK_CONTAINER_MIN_MAX_LEVEL_WAREHOUSE** — CONTAINER_MIN_MAX_LEVEL -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_CONTAINER_MIN_MAX_LEVEL_WAREHOUSE_LOCATION** — CONTAINER_MIN_MAX_LEVEL -> WAREHOUSE_LOCATION (`LocationID -> ID`)
- **FK_CONTAINER_MIN_MAX_LEVEL_ZONE** — CONTAINER_MIN_MAX_LEVEL -> ZONE (`Zone -> Zone`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINER_MIN_MAX_LEVEL_CONTAINER** on `Container`
- **IF_CONTAINER_MIN_MAX_LEVEL_ZONE** on `Zone`
