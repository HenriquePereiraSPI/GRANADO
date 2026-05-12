# COST_OBJECT_TYPE

**Database:** Operational

**Description:** Categories of products, resources, processes and orders

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CostObjectType | SMALLINT(5,0) | False |  | True |  | Enumeration of the values representing various cost object types |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COST_OBJECT_TYPE** on `CostObjectType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COST_COST_OBJECT_TYPE** — COST -> COST_OBJECT_TYPE (`CostObjectType -> CostObjectType`)
- **FK_COST_DETAIL_COST_OBJECT_TYPE** — COST_DETAIL -> COST_OBJECT_TYPE (`CostObjectType -> CostObjectType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
