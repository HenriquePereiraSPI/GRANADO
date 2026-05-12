# LOCATION_CLASS_DIMENSION

**Database:** Operational

**Description:** This table contains various dimensions of Warehouse Location Classes. The user can define as many dimensions as required as soon as the dimension code is defined.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True |  | False |  | Average value of the dimension. |
| DimensionCode | NVARCHAR(50) | False |  | True | DIMENSION | Code of the dimension (weigh, length, etc.). |
| MaxValue | DECIMAL(28,10) | True |  | False |  | Maximum value of the dimension. |
| MinValue | DECIMAL(28,10) | True |  | False |  | Minimum value of the dimension. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the dimension. |
| WarehouseLocationClassID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION_CLASS | Link to the WAREHOUSE_LOCATION_CLASS table. |

## Primary Key

- **PK_LOCATION_CLASS_DIMENSIONS** on `WarehouseLocationClassID, DimensionCode`

## Foreign Keys (this table -> other)

- **FK_LOCATION_CLASS_DIMENSION_DIMENSION** — LOCATION_CLASS_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_LOCATION_CLASS_DIMENSION_UOM** — LOCATION_CLASS_DIMENSION -> UOM (`UomCode -> UomCode`)
- **FK_LOCATION_CLASS_DIMENSION_WAREHOUSE_LOCATION_CLASS** — LOCATION_CLASS_DIMENSION -> WAREHOUSE_LOCATION_CLASS (`WarehouseLocationClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LOCATION_CLASS_DIMENSION_DIMENSION** on `DimensionCode`
