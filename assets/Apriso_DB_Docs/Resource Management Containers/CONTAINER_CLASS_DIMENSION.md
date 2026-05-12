# CONTAINER_CLASS_DIMENSION

**Database:** Operational

**Description:** Defines specific dimensions to a class of container (e.g. outbound containers must always be 20 cubic meters).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True | (0.0) | False |  | Average value of the Dimension. |
| ContainerClassID | INT(10,0) | False |  | True | CONTAINER_CLASS | Reference to a Dimension that applies to a Container Class. |
| DimensionCode | NVARCHAR(50) | False |  | True | DIMENSION | Code of the Dimension (e.g. weigh, length). |
| MaxValue | DECIMAL(28,10) | True | (0.0) | False |  | Maximum value of the Dimension for the class. |
| MinValue | DECIMAL(28,10) | True | (0.0) | False |  | Minimum value of the Dimension for the class. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the Dimensions. |

## Primary Key

- **PK_CONTAINER_TYPE_DIMENSIONS** on `ContainerClassID, DimensionCode`

## Foreign Keys (this table -> other)

- **FK_CONTAINER_CLASS_DIMENSION_CONTAINER_CLASS** — CONTAINER_CLASS_DIMENSION -> CONTAINER_CLASS (`ContainerClassID -> ID`)
- **FK_CONTAINER_TYPE_DIMENSIONS_DIMENSIONS** — CONTAINER_CLASS_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_CONTAINER_TYPE_DIMENSIONS_UOM** — CONTAINER_CLASS_DIMENSION -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINER_TYPE_DIMENSIONS_DIMENSIONS** on `DimensionCode`
