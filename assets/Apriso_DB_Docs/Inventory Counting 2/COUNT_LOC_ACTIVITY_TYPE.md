# COUNT_LOC_ACTIVITY_TYPE

**Database:** Operational

**Description:** This table stores Warehouse Location activity types for Inventory Counting.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LocationActivityType | SMALLINT(5,0) | False |  | True |  | Warehouse Location activity type. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_LOC_ACTIVITY_TYPE** on `LocationActivityType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_PROCEDURE_LOC_ACTIVITY_TYPE** — COUNT_PROCEDURE -> COUNT_LOC_ACTIVITY_TYPE (`LocationActivityType -> LocationActivityType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
