# WAREHOUSE_TYPE

**Database:** Operational

**Description:** Contain the type of warehouse. Can be used to categorized the locations. This is not used by the business component by used by the Apriso templates

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WarehouseType | SMALLINT(5,0) | False |  | True |  | type of warehouse |

## Primary Key

- **PK_WAREHOUSE_TYPES** on `WarehouseType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_WAREHOUSE_WAREHOUSE_TYPES** — WAREHOUSE -> WAREHOUSE_TYPE (`WarehouseType -> WarehouseType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
