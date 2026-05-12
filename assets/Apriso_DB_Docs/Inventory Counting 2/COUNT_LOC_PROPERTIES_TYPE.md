# COUNT_LOC_PROPERTIES_TYPE

**Database:** Operational

**Description:** This table stores Warehouse Location properties types for Inventory Counting.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LocationPropertiesType | SMALLINT(5,0) | False |  | True |  | Warehouse Location properties type. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_LOC_PROPERTIES_TYPE** on `LocationPropertiesType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_PROCEDURE_LOC_PROPERTIES_TYPE** — COUNT_PROCEDURE -> COUNT_LOC_PROPERTIES_TYPE (`LocationPropertiesType -> LocationPropertiesType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
