# WAREHOUSE_LOCATION_CLASS

**Database:** Operational

**Description:** This table contains Classes of Warehouse Locations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowMixedLots | BIT | False | ((1)) | False |  | Specifies if Warehouse Location Class allows mixed Lots. |
| AllowMixedProducts | BIT | False | ((1)) | False |  | Specifies if Warehouse Location Class allows mixed Products. |
| AllowPartialContainers | BIT | False | ((1)) | False |  | Specifies if Warehouse Location Class allows partial containers. |
| AllowUomMismatch | BIT | False | ((1)) | False |  | Specifies if Warehouse Location Class allows for different inventory or container UOMs. |
| ExclusiveAllocForPicking | BIT | False | ((0)) | False |  | Flag indicating exclusive allocation in case of multiple picking Orders. |
| ExclusiveAllocForPutaway | BIT | False | ((0)) | False |  | Flag indicating exclusive allocation in case of multiple putaway Orders. |
| FUID | NVARCHAR(36) | False |  | False |  | Unique identifier of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| MaxExpDateDifference | INT(10,0) | True |  | False |  | Maximum difference in expiration dates (in days) for Lot or Serial tracked inventory. |
| Name | NVARCHAR(40) | False |  | False |  | Unique Warehouse Location Class name. |
| OpenLocation | BIT | False | ((0)) | False |  | Specifies if Warehouse Location Class has limited or unlimited capacity. |
| PickingPriority | INT(10,0) | True |  | False |  | Picking priority. |
| PutawayPriority | INT(10,0) | True |  | False |  | Putaway priority. |
| StorageMode | INT(10,0) | True |  | False |  | Specifies how inventory can be picked from the location:  1=FIFO, 2=LIFO, 3=open. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_WAREHOUSE_LOCATION_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_LOCATION_CLASS_UNIT** — WAREHOUSE_LOCATION_CLASS -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_COUNT_PROC_LCNF_CLASS_WLC** — COUNT_PROC_LCONF_CLASS -> WAREHOUSE_LOCATION_CLASS (`WarehouseLocationClassID -> ID`)
- **FK_LOCATION_CL_CONTAINER_CL_WAREHOUSE_LOCATION_CLASS** — LOCATION_CL_CONTAINER_CL -> WAREHOUSE_LOCATION_CLASS (`WarehouseLocationClassID -> ID`)
- **FK_LOCATION_CLASS_DIMENSION_WAREHOUSE_LOCATION_CLASS** — LOCATION_CLASS_DIMENSION -> WAREHOUSE_LOCATION_CLASS (`WarehouseLocationClassID -> ID`)
- **FK_LOCATION_CLASS_RELATION_WL1** — LOCATION_CLASS_RELATION -> WAREHOUSE_LOCATION_CLASS (`ParentLocationClassID -> ID`)
- **FK_LOCATION_CLASS_RELATION_WL2** — LOCATION_CLASS_RELATION -> WAREHOUSE_LOCATION_CLASS (`ChildLocationClassID -> ID`)
- **FK_WAREHOUSE_LOCATION_WAREHOUSE_LOCATION_CLASS** — WAREHOUSE_LOCATION -> WAREHOUSE_LOCATION_CLASS (`WarehouseLocationClassID -> ID`)

## Unique Indexes

- **UK_WAREHOUSE_LOCATION_CLASS** on `Name`
- **UK_WAREHOUSE_LOCATION_CLASS_1** on `FUID`

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_CLASS_UNIT** on `UnitID`
