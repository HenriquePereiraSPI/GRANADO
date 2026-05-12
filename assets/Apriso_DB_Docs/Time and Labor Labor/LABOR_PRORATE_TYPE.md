# LABOR_PRORATE_TYPE

**Database:** Operational

**Description:** Stores the available Hours Proration types used in Labor tracking when a worker performs overlapping Labor events.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LaborProrateType | SMALLINT(5,0) | False |  | True |  | Labor Prorate types available in the system. Denotes even distribtion or weighted distribution. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_LABOR_PRORATE_TYPE** on `LaborProrateType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_OPERATION_LABOR_PRORATE_TYPE** — OPERATION -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_PROCESS_LABOR_PRORATE_TYPE** — PROCESS -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_PROCESS_OPERATION_LABOR_PRORATE_TYPE** — PROCESS_OPERATION -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_WIP_OPERATION_LABOR_PRORATE_TYPE** — WIP_OPERATION -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)
- **FK_WIP_ORDER_LABOR_PRORATE_TYPE** — WIP_ORDER -> LABOR_PRORATE_TYPE (`LaborProrateType -> LaborProrateType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
