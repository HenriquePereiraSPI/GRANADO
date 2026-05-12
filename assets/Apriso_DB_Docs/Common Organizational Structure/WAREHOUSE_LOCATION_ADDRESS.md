# WAREHOUSE_LOCATION_ADDRESS

**Database:** Operational

**Description:** Contain the addresses of the warehouse locations

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| WarehouseLocationID | INT(10,0) | False |  | True | WAREHOUSE_LOCATION | Link to the warehouse location |

## Primary Key

- **PK_WAREHOUSE_LOCATION_ADDRESSES** on `WarehouseLocationID, AddressID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_LOCATION_ADDRESSES_ADDRESSES** — WAREHOUSE_LOCATION_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WAREHOUSE_LOCATION_ADDRESSES_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_ADDRESS -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_ADDRESSES_ADDRESSES** on `AddressID`
