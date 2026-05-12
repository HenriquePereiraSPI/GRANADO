# COST_VALUATION_TYPE

**Database:** Operational

**Description:** Valuation basis for costs of products, resources, processes and orders

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CostValuationType | SMALLINT(5,0) | False |  | True |  | Enumeration of the values representing various cost valuation types |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COST_VALUATION_TYPE** on `CostValuationType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COST_COST_VALUATION_TYPE** — COST -> COST_VALUATION_TYPE (`CostValuationType -> CostValuationType`)
- **FK_COST_DETAIL_COST_VALUATION_TYPE** — COST_DETAIL -> COST_VALUATION_TYPE (`CostValuationType -> CostValuationType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
