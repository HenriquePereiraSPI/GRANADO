# COST_CHANGE_DETAIL

**Database:** Operational

**Description:** Cost change breakdown for products, resources, processes and orders

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CostChangeID | INT(10,0) | False |  | True | COST_CHANGE | Cost change unique identifier |
| CostClassID | INT(10,0) | False |  | True | COST_CLASS | Enumeration of values representing the breakdown of total cost into detail material, labour and overhead elements |
| CostingUomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code |
| QuantityCostedChange | DECIMAL(28,10) | True |  | False |  | The quantity of the order, order line, schedule, sequence, shipment stage, operation or step that has been costed |
| RollToCostClassID | INT(10,0) | True |  | False | COST_CLASS | The cost class at the next level where costs are transferred during cost roll-up |
| TotalCostChange | DECIMAL(28,10) | True |  | False |  | total cost of the order, order line, schedule, sequence, shipment stage, operation or step |
| UnitCostChange | DECIMAL(28,10) | True |  | False |  | The unit cost of the product, resource or order |

## Primary Key

- **PK_COST_CHANGE_DETAIL** on `CostChangeID, CostClassID`

## Foreign Keys (this table -> other)

- **FK_COST_CHANGE_DETAIL_COST_CHANGE** — COST_CHANGE_DETAIL -> COST_CHANGE (`CostChangeID -> ID`)
- **FK_COST_CHANGE_DETAIL_COST_CLASS** — COST_CHANGE_DETAIL -> COST_CLASS (`CostClassID -> ID`)
- **FK_COST_CHANGE_DETAIL_COST_CLASS1** — COST_CHANGE_DETAIL -> COST_CLASS (`RollToCostClassID -> ID`)
- **FK_COST_CHANGE_DETAIL_UOM** — COST_CHANGE_DETAIL -> UOM (`CostingUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COST_CHANGE_DETAIL_COST_CLASS** on `CostClassID`
- **IF_COST_CHANGE_DETAIL_COST_CLASS1** on `RollToCostClassID`
