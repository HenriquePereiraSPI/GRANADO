# TASK_STRATEGY_TYPE

**Database:** Operational

**Description:** Contains the various way progress should be navigated between the operations of an order (1 task per serial, per product, per lot…)  Should not be modified

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TaskStrategyType | SMALLINT(5,0) | False |  | True |  | Strategy used to create a master task ( 1 per operation, product, lot or serial) |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_TASK_STRATEGY_TYPE** on `TaskStrategyType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_OPERATION_TASK_STRATEGY_TYPE** — OPERATION -> TASK_STRATEGY_TYPE (`TaskStrategyType -> TaskStrategyType`)
- **FK_PROCESS_OPERATION_TASK_STRATEGY_TYPE** — PROCESS_OPERATION -> TASK_STRATEGY_TYPE (`TaskStrategyType -> TaskStrategyType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
