# COST_CHANGE

**Database:** Operational

**Description:** Cost changes for products, resources, processes and orders

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CostID | INT(10,0) | False |  | False | COST | Unique identifier |
| CostingUomCode | NVARCHAR(10) | True |  | False | UOM | Unit of Measure code |
| CostValuationDate | DATETIME | True |  | False |  | The date and time when the cost valuation was performed |
| CurrencyValuationDate | DATETIME | True |  | False |  | The date and time when the currency conversion was performed |
| DiscontinueDate | DATETIME | True |  | False |  | The date when the entity shall be discontinued |
| EffectiveDate | DATETIME | True |  | False |  | The date when the entity shall become effective |
| FromCurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | Code representing the name of the currency that the cost change was converted from |
| ID | INT(10,0) | False |  | True |  | Cost change unique identifier |
| LaborAuditID | INT(10,0) | True |  | False | LABOR_AUDIT | Labor Audit and Its Attributes unique identifier |
| LaborID | INT(10,0) | True |  | False | LABOR | Labor and Its Attributes unique identifier |
| PreviousCostChangeID | INT(10,0) | True |  | False | COST_CHANGE | Previous cost change unique identifier |
| QuantityCostedChange | DECIMAL(28,10) | True |  | False |  | The quantity of the order, order line, schedule, sequence, shipment stage, operation or step that has been costed |
| ReasonCode | NVARCHAR(20) | False |  | False | REASON_CODE | Reason Code and Its Attributes |
| ResourceLaborAuditID | INT(10,0) | True |  | False | RESOURCE_LABOR_AUDIT | Resource Labor Audit and Its Attributes unique identifier |
| ResourceLaborID | BIGINT(19,0) | True |  | False | RESOURCE_LABOR | Labor and Its Attributes unique identifier |
| TotalCostChange | DECIMAL(28,10) | True |  | False |  | The total cost of the order, order line, schedule, sequence, shipment stage, operation or step |
| UnitCostChange | DECIMAL(28,10) | True |  | False |  | The unit cost of the product, resource or order |
| ValuationExchangeRate | DECIMAL(28,10) | True |  | False |  | The rate of exchange between the valuation currency and the currency the change was converted from |

## Primary Key

- **PK_COST_CHANGE** on `ID`

## Foreign Keys (this table -> other)

- **FK_COST_CHANGE_COST** — COST_CHANGE -> COST (`CostID -> ID`)
- **FK_COST_CHANGE_COST_CHANGE** — COST_CHANGE -> COST_CHANGE (`PreviousCostChangeID -> ID`)
- **FK_COST_CHANGE_CURRENCY** — COST_CHANGE -> CURRENCY (`FromCurrencyCode -> CurrencyCode`)
- **FK_COST_CHANGE_LABOR** — COST_CHANGE -> LABOR (`LaborID -> ID`)
- **FK_COST_CHANGE_LABOR_AUDIT** — COST_CHANGE -> LABOR_AUDIT (`LaborAuditID -> ID`)
- **FK_COST_CHANGE_REASON_CODE** — COST_CHANGE -> REASON_CODE (`ReasonCode -> ReasonCode`)
- **FK_COST_CHANGE_RESOURCE_LABOR** — COST_CHANGE -> RESOURCE_LABOR (`ResourceLaborID -> ID`)
- **FK_COST_CHANGE_RESOURCE_LABOR_AUDIT** — COST_CHANGE -> RESOURCE_LABOR_AUDIT (`ResourceLaborAuditID -> ID`)
- **FK_COST_CHANGE_UOM** — COST_CHANGE -> UOM (`CostingUomCode -> UomCode`)

## Referenced By (other tables -> this)

- **FK_COST_CHANGE_COST_CHANGE** — COST_CHANGE -> COST_CHANGE (`PreviousCostChangeID -> ID`)
- **FK_COST_CHANGE_DETAIL_COST_CHANGE** — COST_CHANGE_DETAIL -> COST_CHANGE (`CostChangeID -> ID`)
- **FK_COST_COST_CHANGE** — COST -> COST_CHANGE (`CurrentCostChangeID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COST_CHANGE_COST** on `CostID`
- **IF_COST_CHANGE_COST_CHANGE** on `PreviousCostChangeID`
- **IF_COST_CHANGE_LABOR** on `LaborID`
- **IF_COST_CHANGE_LABOR_AUDIT** on `LaborAuditID`
- **IF_COST_CHANGE_RESOURCE_LABOR** on `ResourceLaborID`
- **IF_COST_CHANGE_RESOURCE_LABOR_AUDIT** on `ResourceLaborAuditID`
