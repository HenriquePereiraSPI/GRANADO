# PRODUCT_DIMENSION

**Database:** Operational

**Description:** Contains the various dimension of a product like its weight, volumeGÇª any dimension can be persisted as soon as the dimension code is defined

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True |  | False |  | Average value of the dimension |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DimensionCode | NVARCHAR(50) | False |  | True | DIMENSION | Code of the dimension (weigh, length…) |
| MaxValue | DECIMAL(28,10) | True |  | False |  | Maximum value of the dimension |
| MinValue | DECIMAL(28,10) | True |  | False |  | Minimum value of the product dimension |
| ProductID | INT(10,0) | False |  | True | PRODUCT | Reference to a product (product number and product version) |
| UomCode | NVARCHAR(10) | True |  | False | UOM | UOM of the dimensions |

## Primary Key

- **PK_PRODUCT_DIMENSIONS** on `ProductID, DimensionCode`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_DIMENSION_UOM** — PRODUCT_DIMENSION -> UOM (`UomCode -> UomCode`)
- **FK_PRODUCT_DIMENSIONS_DIMENSIONS** — PRODUCT_DIMENSION -> DIMENSION (`DimensionCode -> DimensionCode`)
- **FK_PRODUCT_DIMENSIONS_PRODUCT** — PRODUCT_DIMENSION -> PRODUCT (`ProductID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PRODUCT_DIMENSION_CLASSIFICATIONID** on `ClassificationID`
- **IF_PRODUCT_DIMENSIONS_DIMENSIONS** on `DimensionCode`
