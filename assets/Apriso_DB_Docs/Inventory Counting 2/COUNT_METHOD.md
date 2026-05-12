# COUNT_METHOD

**Database:** Operational

**Description:** This table stores count methods for Inventory Counting.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountMethod | SMALLINT(5,0) | False |  | True |  | Inventory count method. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_METHOD** on `CountMethod`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_PROCEDURE_COUNT_METHOD** — COUNT_PROCEDURE -> COUNT_METHOD (`CountMethod -> CountMethod`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
