# COUNT_LOC_CONTENT_TYPE

**Database:** Operational

**Description:** This table stores Warehouse Location content types for Inventory Counting.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LocationContentType | SMALLINT(5,0) | False |  | True |  | Warehouse Location content type. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_LOC_CONTENT_TYPE** on `LocationContentType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_PROCEDURE_LOC_CONTENT_TYPE** — COUNT_PROCEDURE -> COUNT_LOC_CONTENT_TYPE (`LocationContentType -> LocationContentType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
