# LOCATION_CL_CONTAINER_CL

**Database:** Operational

**Description:** The table stores information on how many containers can be stored at a location.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Capacity | DECIMAL(28,10) | False |  | False |  | Capacity of the Location. |
| ContainerClassID | INT(10,0) | False |  | False | CONTAINER_CLASS | Link to the CONTAINER_CLASS table. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| UnitID | INT(10,0) | False |  | False | UNIT | Unique identifier of the Unit. |
| WarehouseLocationClassID | INT(10,0) | False |  | False | WAREHOUSE_LOCATION_CLASS | Link to the WAREHOUSE_LOCATION_CLASS table. |

## Primary Key

- **PK_LOCATION_CL_CONTAINER_CL** on `ID`

## Foreign Keys (this table -> other)

- **FK_LOCATION_CL_CONTAINER_CL_CONTAINER_CLASS** — LOCATION_CL_CONTAINER_CL -> CONTAINER_CLASS (`ContainerClassID -> ID`)
- **FK_LOCATION_CL_CONTAINER_CL_UNIT** — LOCATION_CL_CONTAINER_CL -> UNIT (`UnitID -> ID`)
- **FK_LOCATION_CL_CONTAINER_CL_WAREHOUSE_LOCATION_CLASS** — LOCATION_CL_CONTAINER_CL -> WAREHOUSE_LOCATION_CLASS (`WarehouseLocationClassID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_LOCATION_CL_CONTAINER_CL_CONTAINER_CLASS** on `ContainerClassID`
- **IF_LOCATION_CL_CONTAINER_CL_UNIT** on `UnitID`
- **IF_LOCATION_CL_CONTAINER_CL_WAREHOUSE_LOCATION_CLASS** on `WarehouseLocationClassID`
