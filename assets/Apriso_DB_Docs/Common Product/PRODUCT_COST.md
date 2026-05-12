# PRODUCT_COST

**Database:** Operational

**Description:** Product cost details

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageCost | DECIMAL(28,10) | True | (0.0) | False |  | The average cost of the product |
| CostingUOM | NVARCHAR(10) | True |  | False | UOM | The UOM used when purchasing the Product. May be different than the default UOM. |
| CurrentCost | DECIMAL(28,10) | True | (0.0) | False |  | The current cost of the product |
| InternalCost | DECIMAL(28,10) | True | (0.0) | False |  | The internal cost of the product |
| ProductID | INT(10,0) | False |  | True | PRODUCT | Product and Its Attributes uniqe identifier |
| StdCost | DECIMAL(28,10) | True | (0.0) | False |  | The standard cost of the product |
| StdReworkCost | DECIMAL(28,10) | True | (0.0) | False |  | The standard rework cost of the product |
| StdReworkTime | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) is equal to 100 ns (nanoseconds). |
| StdScrapCost | DECIMAL(28,10) | True |  | False |  | The standard scrap cost of the product |
| UnitCost | DECIMAL(28,10) | True | (0.0) | False |  | The unit cost of the product |

## Primary Key

- **PK_PRODUCT_COST** on `ProductID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_COST_COSTING_UOM** — PRODUCT_COST -> UOM (`CostingUOM -> UomCode`)
- **FK_PRODUCT_COST_PRODUCT** — PRODUCT_COST -> PRODUCT (`ProductID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
