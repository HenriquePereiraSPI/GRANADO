# DIMENSION

**Database:** Operational

**Description:** Defines all the valid Dimensions that can be measued on any object. Each entity that needs to have a dimension assigned to it has a tables that links the Dimension table to that entity's table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DimensionCode | NVARCHAR(50) | False |  | True |  | Code of the Dimension (e.g. weigh, length). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DIMENSIONS** on `DimensionCode`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CONTAINER_DIMENSION_DIMENSIONS** — CONTAINER_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_CONTAINER_TYPE_DIMENSIONS_DIMENSIONS** — CONTAINER_CLASS_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_DISPOSITION_DIMENSION_DIMENSION** — DISPOSITION_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_DISPOSITION_READING_LOC_DIM_DIMENSION** — DISPOSITION_READING_LOC_DIM -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_EQUIPMENT_TYPE_DIMENSIONS_DIMENSIONS** — EQUIPMENT_TYPE_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_LOCATION_CLASS_DIMENSION_DIMENSION** — LOCATION_CLASS_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_ORDER_SHIPMENT_DIMENSION_DIMENSION** — ORDER_SHIPMENT_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_ORDER_SHIPMENT_STAGE_DIMENSION_DIMENSION** — ORDER_SHIPMENT_STAGE_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_PACKAGING_INSTR_DIMENSION_DIMENSION** — PACKAGING_INSTR_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_PRODUCT_DIMENSIONS_DIMENSIONS** — PRODUCT_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_QUALITY_DEFECT_LOC_DIMENSION_DIMENSION** — QUALITY_DEFECT_LOC_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_TRANSPORTATION_EQUIPMENT_DIMENSION_DIMENSIONS** — EQUIPMENT_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_WAREHOUSE_LOCATION_DIMENSIONS_DIMENSIONS** — WAREHOUSE_LOCATION_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
