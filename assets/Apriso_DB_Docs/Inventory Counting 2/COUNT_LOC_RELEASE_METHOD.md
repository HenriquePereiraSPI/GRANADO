# COUNT_LOC_RELEASE_METHOD

**Database:** Operational

**Description:** This table stores Warehouse Location release methods for Inventory Counting.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| LocationReleaseMethod | SMALLINT(5,0) | False |  | True |  | Warehouse Location release method. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COUNT_LOC_RELEASE_METHOD** on `LocationReleaseMethod`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COUNT_PROCEDURE_LOC_RELEASE_METHOD** — COUNT_PROCEDURE -> COUNT_LOC_RELEASE_METHOD (`ReleaseMethod -> LocationReleaseMethod`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
