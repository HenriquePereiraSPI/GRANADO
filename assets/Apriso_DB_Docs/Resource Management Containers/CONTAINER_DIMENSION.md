# CONTAINER_DIMENSION

**Database:** Operational

**Description:** Defines the specific dimensions for any given Container. All defined dimensions will only correspond to exactly one container.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True | (0.0) | False |  | Average value of the Dimension, |
| Container | NVARCHAR(40) | False |  | True | CONTAINER | Reference to the Container (the one linked to the Dimension), |
| DimensionCode | NVARCHAR(50) | False |  | True | DIMENSION | Code of the Dimension (e.g. weigh, length). |
| MaxValue | DECIMAL(28,10) | True | (0.0) | False |  | Maximum value of the dimension for the Container. |
| MinValue | DECIMAL(28,10) | True | (0.0) | False |  | Minimum value of the Dimension for the Container. |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the Dimensions. |

## Primary Key

- **PK_CONTAINER_DIMENSION** on `Container, DimensionCode`

## Foreign Keys (this table -> other)

- **FK_CONTAINER_DIMENSION_CONTAINER** — CONTAINER_DIMENSION -> CONTAINER (`Container -> Container`)
- **FK_CONTAINER_DIMENSION_DIMENSIONS** — CONTAINER_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_CONTAINER_DIMENSIONS_UOM** — CONTAINER_DIMENSION -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINER_DIMENSION_DIMENSIONS** on `DimensionCode`
