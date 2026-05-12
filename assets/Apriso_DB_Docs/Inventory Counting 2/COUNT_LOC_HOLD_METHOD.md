# COUNT_LOC_HOLD_METHOD

**Database:** Operational

**Description:** This table stores Warehouse Location hold methods for Inventory Counting.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LocationHoldMethod | SMALLINT(5,0) | False |  | True |  | Warehouse Location hold method. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_LOC_HOLD_METHOD** on `LocationHoldMethod`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_PROCEDURE_LOC_HOLD_METHOD** — COUNT_PROCEDURE -> COUNT_LOC_HOLD_METHOD (`HoldMethod -> LocationHoldMethod`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
