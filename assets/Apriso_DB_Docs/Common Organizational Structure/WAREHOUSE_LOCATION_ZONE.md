# WAREHOUSE_LOCATION_ZONE

**Database:** Operational

**Description:** The table stores the link between Warehouse Locations and Zones.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| WarehouseLocationID | INT(10,0) | False |  | False | WAREHOUSE_LOCATION | Link to the WAREHOUSE_LOCATION table. |
| Zone | NVARCHAR(20) | False |  | False | ZONE | Link to the ZONE table. |

## Primary Key

- **PK_WAREHOUSE_LOCATION_ZONE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_LOCATION_ZONE_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_ZONE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_ZONE_ZONE** — WAREHOUSE_LOCATION_ZONE -> ZONE (`Zone -> Zone`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_ZONE_ZONE** on `Zone`
