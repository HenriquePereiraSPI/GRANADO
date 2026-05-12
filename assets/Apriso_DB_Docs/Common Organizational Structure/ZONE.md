# ZONE

**Database:** Operational

**Description:** Contains the list of the Zone. The Zone are defined as a group of warehouse location that can bellong to multiple warehouse

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| Facility | NVARCHAR(40) | False |  | False | FACILITY | Assignment of a Zone to a facility and a warehouse |
| PutawayLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Putaway Warehouse Location. |
| ReceiptLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Receipt Warehouse Location. |
| StorageType | NVARCHAR(10) | True |  | False | STORAGE_TYPE | Storage type for the Zone (user-defined). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | The optional Zone that this Warehouse is located, in the scenario that the whole Warehouse is located inside a Zone. |
| Zone | NVARCHAR(20) | False |  | True |  | Zone in the facility |
| ZoneClassID | INT(10,0) | True |  | False | ZONE_CLASS | Class of zone |

## Primary Key

- **PK_MASTER_ZONE** on `Zone`

## Foreign Keys (this table -> other)

- **FK_ZONE_FACILITY** — ZONE -> FACILITY (`Facility -> Facility`)
- **FK_ZONE_STORAGE_TYPE** — ZONE -> STORAGE_TYPE (`StorageType -> StorageType`)
- **FK_ZONE_UNIT** — ZONE -> UNIT (`UnitID -> ID`)
- **FK_ZONE_WAREHOUSE** — ZONE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_ZONE_WAREHOUSE_LOCATION_1** — ZONE -> WAREHOUSE_LOCATION (`PutawayLocationID -> ID`)
- **FK_ZONE_WAREHOUSE_LOCATION_2** — ZONE -> WAREHOUSE_LOCATION (`ReceiptLocationID -> ID`)
- **FK_ZONE_ZONE_CLASS** — ZONE -> ZONE_CLASS (`ZoneClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_ZONE** — CAPA_LINK -> ZONE (`Zone -> Zone`)
- **FK_CONTAINER_MIN_MAX_LEVEL_ZONE** — CONTAINER_MIN_MAX_LEVEL -> ZONE (`Zone -> Zone`)
- **FK_COUNT_DOCUMENT_ZONE** — COUNT_DOCUMENT -> ZONE (`Zone -> Zone`)
- **FK_COUNT_FREQUENCY_LINK_ZONE** — COUNT_FREQUENCY_LINK -> ZONE (`Zone -> Zone`)
- **FK_COUNT_PROC_LCNF_ZONE_ZONE** — COUNT_PROC_LCONF_ZONE -> ZONE (`Zone -> Zone`)
- **FK_EQUIPMENT_ZONE_ZONE** — EQUIPMENT_ZONE -> ZONE (`Zone -> Zone`)
- **FK_KANBAN_CARD_FromZone** — KANBAN_CARD -> ZONE (`FromZone -> Zone`)
- **FK_KANBAN_CARD_ToZone** — KANBAN_CARD -> ZONE (`ToZone -> Zone`)
- **FK_ORDER_DETAIL_ZONE** — ORDER_DETAIL -> ZONE (`FromZone -> Zone`)
- **FK_ORDER_DETAIL_ZONE2** — ORDER_DETAIL -> ZONE (`ToZone -> Zone`)
- **FK_PRODUCT_MIN_MAX_LEVEL_ZONE** — PRODUCT_MIN_MAX_LEVEL -> ZONE (`Zone -> Zone`)
- **FK_PRODUCT_ZONE_RESTRICTION_ZONE** — PRODUCT_ZONE_RESTRICTION -> ZONE (`Zone -> Zone`)
- **FK_REPLENISH_STRATEGY_FromZone** — REPLENISH_STRATEGY -> ZONE (`FromZone -> Zone`)
- **FK_REPLENISH_STRATEGY_ToZone** — REPLENISH_STRATEGY -> ZONE (`ToZone -> Zone`)
- **FK_RESOURCE_LOCATION_RELATION_ZONE** — RESOURCE_LOCATION_RELATION -> ZONE (`Zone -> Zone`)
- **FK_WAREHOUSE_LOCATION_ZONE** — WAREHOUSE_LOCATION -> ZONE (`Zone -> Zone`)
- **FK_WAREHOUSE_LOCATION_ZONE_ZONE** — WAREHOUSE_LOCATION_ZONE -> ZONE (`Zone -> Zone`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ZONE_UNIT** on `UnitID`
- **IF_ZONE_ZONE_CLASS** on `ZoneClassID`
- **IXD_Facility_Warehouse** on `Facility, Warehouse`
