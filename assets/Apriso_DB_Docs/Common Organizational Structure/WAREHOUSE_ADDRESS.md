# WAREHOUSE_ADDRESS

**Database:** Operational

**Description:** Contain the addresses of the warehouse

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | False |  | True | ADDRESS | Link to the Address record |
| DisplayNo | INT(10,0) | True |  | False |  | For future use. |
| Facility | NVARCHAR(40) | False |  | True | WAREHOUSE | For future use. |
| Warehouse | NVARCHAR(10) | False |  | True | WAREHOUSE | Link to warehouse |

## Primary Key

- **PK_WAREHOUSE_ADDRESS** on `Facility, Warehouse, AddressID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_ADDRESSES_ADDRESSES** — WAREHOUSE_ADDRESS -> ADDRESS (`AddressID -> ID`)
- **FK_WAREHOUSE_ADDRESSES_WAREHOUSE1** — WAREHOUSE_ADDRESS -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_ADDRESSES_ADDRESSES** on `AddressID`
