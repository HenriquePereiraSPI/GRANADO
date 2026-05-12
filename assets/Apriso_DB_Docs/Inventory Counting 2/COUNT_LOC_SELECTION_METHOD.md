# COUNT_LOC_SELECTION_METHOD

**Database:** Operational

**Description:** This table stores Warehouse Location selection methods for Inventory Counting.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LocationSelectionMethod | SMALLINT(5,0) | False |  | True |  | Warehouse Location selection method. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_LOC_SELECTION_METHOD** on `LocationSelectionMethod`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_PROCEDURE_LOC_SELECTION_METHOD** — COUNT_PROCEDURE -> COUNT_LOC_SELECTION_METHOD (`LocationSelectionMethod -> LocationSelectionMethod`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
