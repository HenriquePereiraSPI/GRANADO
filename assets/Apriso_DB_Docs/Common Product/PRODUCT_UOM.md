# PRODUCT_UOM

**Database:** Operational

**Description:** Contain the various alternate UOM a product can accept

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BaseQuantity | DECIMAL(28,10) | True |  | False |  | This is the basis Unit of measure of the product, it should not be changed once inventory is created as it is used to cumulate inventory (inventory table) |
| BreakDownUomCode | NVARCHAR(10) | True |  | False |  | For future use. |
| ProductID | INT(10,0) | False |  | True | PRODUCT | Reference to a product (product number and product version) |
| StockingFlag | BIT | False | (0) | False |  | For future use. |
| UniversalProductCode | NVARCHAR(40) | True |  | False |  | For future use. |
| UomCode | NVARCHAR(10) | False |  | True | UOM | Alternate UOM |

## Primary Key

- **PK_PRODUCT_UOM** on `ProductID, UomCode`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_UOM_PRODUCT** — PRODUCT_UOM -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_UOM_UOM** — PRODUCT_UOM -> UOM (`UomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_WIP_CONTENT_PRODUCT_UOM** — WIP_CONTENT -> PRODUCT_UOM (`ProductID, UomCode -> ProductID, UomCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
