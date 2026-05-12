# COST_TYPE

**Database:** Operational

**Description:** Categories of cost elements for products, resources, processes and orders

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CostType | SMALLINT(5,0) | False |  | True |  | Enumeration of the values representing various cost types |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COST_TYPE** on `CostType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COST_CLASS_COST_TYPE** — COST_CLASS -> COST_TYPE (`CostType -> CostType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
