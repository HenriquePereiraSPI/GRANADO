# PRODUCT_INFORMATION

**Database:** Operational

**Description:** Contains additional data about the product. Global table, no facility override

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualOrTheoreticalQuantity | BIT | True | (0) | False |  | For future use. |
| ActualOrTheoreticalUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| AutoGradeFlag | BIT | True | (0) | False |  | For future use. |
| BatchBalancingUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| BlanketPOLineNumber | NVARCHAR(20) | True |  | False |  | For future use. |
| BlanketPONumber | NVARCHAR(20) | True |  | False |  | For future use. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| CustomerOrderLineNo | INT(10,0) | True |  | False | ORDER_DETAIL | For future use. |
| CustomerOrderNo | NVARCHAR(20) | True |  | False | ORDER_DETAIL | For future use. |
| CustomerOrderType | SMALLINT(5,0) | True |  | False | ORDER_DETAIL | For future use. |
| PotencyItemFlag | TINYINT(3,0) | True |  | False |  | Defines if the product potency should be considered |
| PotencyStandardPercent | DECIMAL(28,10) | True | (0.0) | False |  | Standard product potency |
| PotencyStockingType | TINYINT(3,0) | True |  | False |  | For future use. |
| PotencyUomCode | NVARCHAR(10) | True |  | False | UOM | Potency UOM |
| ProcurementID | INT(10,0) | True |  | False | PROCUREMENT | For future use. |
| ProductID | INT(10,0) | False |  | True | PRODUCT | Reference to a product (product number and product version) |
| ProjectCode | NVARCHAR(40) | True |  | False |  | For future use. |
| SalePrice | DECIMAL(28,10) | True |  | False |  | For future use. |
| StdBatchSize | DECIMAL(28,10) | True | (0.0) | False |  | The quantity used to define BOM (needs 200 wheels to produce 100 bikes (100 is the batch size of the product Bike) |
| StdBatchWeight | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| StdLeadTimeToBuy | BIGINT(19,0) | True |  | False |  | For future use. |
| StdLeadTimeToMake | BIGINT(19,0) | True |  | False |  | For future use. |
| StdLotSize | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| StdPotencyPercent | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| StdShrinkage | DECIMAL(28,10) | True |  | False |  | For future use. |

## Primary Key

- **PK_PRODUCT_INFORMATION** on `ProductID`

## Foreign Keys (this table -> other)

- **FK_PRODUCT_INFORMATION_ORDER_DETAIL** — PRODUCT_INFORMATION -> ORDER_DETAIL (`CustomerOrderNo, CustomerOrderType, CustomerOrderLineNo -> OrderNo, OrderType, OrderLineNo`)
- **FK_PRODUCT_INFORMATION_PROCUREMENT** — PRODUCT_INFORMATION -> PROCUREMENT (`ProcurementID -> ID`)
- **FK_PRODUCT_INFORMATION_PRODUCT** — PRODUCT_INFORMATION -> PRODUCT (`ProductID -> ID`)
- **FK_PRODUCT_INFORMATION_UOM** — PRODUCT_INFORMATION -> UOM (`ActualOrTheoreticalUomCode -> UomCode`)
- **FK_PRODUCT_INFORMATION_UOM1** — PRODUCT_INFORMATION -> UOM (`BatchBalancingUomCode -> UomCode`)
- **FK_PRODUCT_INFORMATION_UOM2** — PRODUCT_INFORMATION -> UOM (`PotencyUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PRODUCT_INFORMATION_CLASSIFICATIONID** on `ClassificationID`
- **IF_PRODUCT_INFORMATION_ORDER_DETAIL** on `CustomerOrderNo, CustomerOrderType, CustomerOrderLineNo`
- **IF_PRODUCT_INFORMATION_PROCUREMENT** on `ProcurementID`
