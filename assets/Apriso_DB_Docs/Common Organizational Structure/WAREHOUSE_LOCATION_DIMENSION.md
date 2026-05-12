# WAREHOUSE_LOCATION_DIMENSION

**Database:** Operational

**Description:** Contains the various dimensions of a waerhouse location. User can define as many dimension as required as soon as the dimension code is defined

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True |  | False |  | Average value of the dimension |
| DimensionCode | NVARCHAR(50) | False |  | True | DIMENSION | Code of the dimension (weigh, length…) |
| LocationID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION | Link to warehouse location. |
| MaxValue | DECIMAL(28,10) | True |  | False |  | Maximum value of the dimension |
| MinValue | DECIMAL(28,10) | True |  | False |  | Minimum value of the dimension |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the dimensions |

## Primary Key

- **PK_WAREHOUSE_LOCATION_DIMENSIONS** on `LocationID, DimensionCode`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_LOCATION_DIMENSIONS_DIMENSIONS** — WAREHOUSE_LOCATION_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_WAREHOUSE_LOCATION_DIMENSIONS_UOM** — WAREHOUSE_LOCATION_DIMENSION -> UOM (`UomCode -> UomCode`)
- **FK_WAREHOUSE_LOCATION_DIMENSIONS_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_DIMENSION -> WAREHOUSE_LOCATION (`LocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_DIMENSIONS_DIMENSIONS** on `DimensionCode`
