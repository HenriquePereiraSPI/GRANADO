# WAREHOUSE

**Database:** Operational

**Description:** Contains the list of Warehouses defined in the system. A Warehouse belongs to a Facility, it contains multiple Warehouse Locations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllocationBasis | NVARCHAR(6) | True |  | False |  | For future use. |
| Building | NVARCHAR(40) | True |  | False | BUILDING | For future use. |
| CalendarID | INT(10,0) | True |  | False | CALENDAR | The ID of the calendar record this table is associated with. |
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Code System and a unique identifier of its attributes. |
| CostAccrualMethod | NVARCHAR(2) | True |  | False |  | For future use. |
| CostingUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| CumulativeAllocationUnits | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | Assignment of a Department to a Warehouse. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and a unique identifier of its attributes. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Assignment of a Facility to a Warehouse. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| InventoryControllerID | INT(10,0) | True | (1) | False | INVENTORY_CONTROL_STRATEGY | For future use. |
| LastLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |
| MobileFlag | BIT | True | (0) | False |  | For future use. |
| MobilityID | INT(10,0) | True |  | False | MOBILITY | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| OwnershipID | INT(10,0) | True |  | False | OWNERSHIP | For future use. |
| PlanningUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | For future use. |
| ProcurementID | INT(10,0) | True |  | False | PROCUREMENT | For future use. |
| PutawayLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The Warehouse Location to be used as the default location for materials that are being put away into the Warehouse. Typically an available location where materials will later be picked for shipping or production. |
| ReceivingLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The Warehouse Location to be used as the default location for receiving materials into the Warehouse. Typically a staging location from which materials will later be put away. |
| SAPWarehouse | NVARCHAR(10) | True |  | False | SAP_WAREHOUSE | Link between a Apriso Warehouse and SAP Warehouse location. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TrackingUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| TransportationEquipmentFlag | BIT | True | (0) | False |  | For future use. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| Warehouse | NVARCHAR(10) | False |  | True |  | Warehouse. |
| WarehouseType | SMALLINT(5,0) | False |  | False | WAREHOUSE_TYPE | Type of a Warehouse. |
| WipLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | For future use. |

## Primary Key

- **PK_WAREHOUSE** on `Facility, Warehouse`

## Foreign Keys (this table -> other)

- **FK_WAREHOUSE_BUILDING** — WAREHOUSE -> BUILDING (`Building -> Building`)
- **FK_WAREHOUSE_CALENDAR** — WAREHOUSE -> CALENDAR (`CalendarID -> ID`)
- **FK_WAREHOUSE_CODE_DOMAIN_MANAGER** — WAREHOUSE -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_WAREHOUSE_CODE_FORMAT_TYPE** — WAREHOUSE -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_WAREHOUSE_DEPARTMENT** — WAREHOUSE -> DEPARTMENT (`Department -> Department`)
- **FK_WAREHOUSE_FACILITY** — WAREHOUSE -> FACILITY (`Facility -> Facility`)
- **FK_WAREHOUSE_INVENTORY_CONTROLLER** — WAREHOUSE -> INVENTORY_CONTROL_STRATEGY (`InventoryControllerID -> ID`)
- **FK_WAREHOUSE_MOBILITY** — WAREHOUSE -> MOBILITY (`MobilityID -> ID`)
- **FK_WAREHOUSE_OWNERSHIP** — WAREHOUSE -> OWNERSHIP (`OwnershipID -> ID`)
- **FK_WAREHOUSE_PROCESS** — WAREHOUSE -> PROCESS (`ProcessID -> ID`)
- **FK_WAREHOUSE_PROCUREMENT** — WAREHOUSE -> PROCUREMENT (`ProcurementID -> ID`)
- **FK_WAREHOUSE_SAP_WAREHOUSE** — WAREHOUSE -> SAP_WAREHOUSE (`SAPWarehouse -> SAPWarehouse`)
- **FK_WAREHOUSE_UNIT** — WAREHOUSE -> UNIT (`UnitID -> ID`)
- **FK_WAREHOUSE_UOM** — WAREHOUSE -> UOM (`PlanningUomCode -> UomCode`)
- **FK_WAREHOUSE_UOM1** — WAREHOUSE -> UOM (`TrackingUomCode -> UomCode`)
- **FK_WAREHOUSE_UOM2** — WAREHOUSE -> UOM (`CostingUomCode -> UomCode`)
- **FK_WAREHOUSE_WAREHOUSE_LOCATION** — WAREHOUSE -> WAREHOUSE_LOCATION (`LastLocationID -> ID`)
- **FK_WAREHOUSE_WAREHOUSE_LOCATION1** — WAREHOUSE -> WAREHOUSE_LOCATION (`ReceivingLocationID -> ID`)
- **FK_WAREHOUSE_WAREHOUSE_LOCATION2** — WAREHOUSE -> WAREHOUSE_LOCATION (`WipLocationID -> ID`)
- **FK_WAREHOUSE_WAREHOUSE_LOCATION3** — WAREHOUSE -> WAREHOUSE_LOCATION (`PutawayLocationID -> ID`)
- **FK_WAREHOUSE_WAREHOUSE_TYPES** — WAREHOUSE -> WAREHOUSE_TYPE (`WarehouseType -> WarehouseType`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_WAREHOUSE** — CAPA_LINK -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_CODE_CLASS_NUMBER_WAREHOUSE** — CODE_CLASS_NUMBER -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_CODE_SERIAL_NUMBER_WAREHOUSE** — CODE_SERIAL_NUMBER -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_CODE_ULC_WAREHOUSE** — CODE_ULC -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COMPONENT_WAREHOUSE** — COMPONENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_CONTAINER_MIN_MAX_LEVEL_WAREHOUSE** — CONTAINER_MIN_MAX_LEVEL -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_CONTAINER_WAREHOUSE** — CONTAINER -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COST_DETAIL_WAREHOUSE** — COST_DETAIL -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COST_WAREHOUSE** — COST -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COUNT_DISPOSITION_WAREHOUSE** — COUNT_DISPOSITION -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COUNT_DOCUMENT_WAREHOUSE** — COUNT_DOCUMENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COUNT_FREQUENCY_LINK_WAREHOUSE** — COUNT_FREQUENCY_LINK -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_COUNT_PROCEDURE_WAREHOUSE_WH** — COUNT_PROCEDURE_WAREHOUSE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_EPC_TAG_EPC_WAREHOUSE** — EPC_TAG -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_FLAT_FILE_ENTITY_WAREHOUSE** — FLAT_FILE_ENTITY -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_INBOUND_ORDER_DISTRIBUTION_WAREHOUSE** — INBOUND_ORDER_DISTRIBUTION -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_INVENTORY_CONTAINER_WAREHOUSE** — INVENTORY_CONTAINER -> WAREHOUSE (`LastFacility, LastWarehouse -> Facility, Warehouse`)
- **FK_INVENTORY_SERIAL_NO_WAREHOUSE** — INVENTORY_SERIAL_NO -> WAREHOUSE (`LastFacility, LastWarehouse -> Facility, Warehouse`)
- **FK_INVENTORY_WAREHOUSE** — INVENTORY -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_KANBAN_CARD_FromWarehouse** — KANBAN_CARD -> WAREHOUSE (`FromFacility, FromWarehouse -> Facility, Warehouse`)
- **FK_KANBAN_CARD_ToWarehouse** — KANBAN_CARD -> WAREHOUSE (`ToFacility, ToWarehouse -> Facility, Warehouse`)
- **FK_LOCATION_PARTNER_WAREHOUSE** — LOCATION_PARTNER -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_MATERIAL_ORDER_WAREHOUSE** — MATERIAL_ORDER_HEADER -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_MOVE_ORDER_DETAIL_WAREHOUSE** — MOVE_ORDER_DETAIL -> WAREHOUSE (`SourceFacility, SourceWarehouse -> Facility, Warehouse`)
- **FK_MOVE_ORDER_DETAIL_WAREHOUSE1** — MOVE_ORDER_DETAIL -> WAREHOUSE (`DestinationFacility, DestinationWarehouse -> Facility, Warehouse`)
- **FK_OPERATION_COMPONENT_WAREHOUSE** — OPERATION_COMPONENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_ORDER_DETAIL_WAREHOUSE** — ORDER_DETAIL -> WAREHOUSE (`FromFacility, FromWarehouse -> Facility, Warehouse`)
- **FK_ORDER_DETAIL_WAREHOUSE1** — ORDER_DETAIL -> WAREHOUSE (`ToFacility, ToWarehouse -> Facility, Warehouse`)
- **FK_ORDER_SCHEDULE_WAREHOUSE** — ORDER_SCHEDULE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_PARTNER_RELATIONSHIP_WAREHOUSE** — PARTNER_RELATIONSHIP -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_PROCESS_COMPONENT_FACILITY_WAREHOUSE** — PROCESS_COMPONENT_FACILITY -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_PRODUCT_COMPONENT_FACILITY_WAREHOUSE** — PRODUCT_COMPONENT_FACILITY -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_PRODUCT_FACILITY_WAREHOUSE** — PRODUCT_FACILITY -> WAREHOUSE (`Facility, DefaultWarehouse -> Facility, Warehouse`)
- **FK_PRODUCT_MIN_MAX_LEVELS_WAREHOUSE** — PRODUCT_MIN_MAX_LEVEL -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_PRODUCT_WAREHOUSE** — PRODUCT -> WAREHOUSE (`Facility, DefaultWarehouse -> Facility, Warehouse`)
- **FK_PRODUCT_WAREHOUSE_RESTRICTION_WAREHOUSE** — PRODUCT_WAREHOUSE_RESTRICTION -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_RECEIPT_DETAIL_WAREHOUSE** — RECEIPT_DETAIL -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_RECEIPT_HEADER_WAREHOUSE** — RECEIPT_HEADER -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_REPLENISH_STRATEGY_FromWarehouse** — REPLENISH_STRATEGY -> WAREHOUSE (`FromFacility, FromWarehouse -> Facility, Warehouse`)
- **FK_REPLENISH_STRATEGY_ToWarehouse** — REPLENISH_STRATEGY -> WAREHOUSE (`ToFacility, ToWarehouse -> Facility, Warehouse`)
- **FK_RESOURCE_COMPONENT_WAREHOUSE** — RESOURCE_COMPONENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_SEQUENCE_QUEUE_WAREHOUSE** — SEQUENCE_QUEUE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_TASK_MATERIAL_USE_WAREHOUSE** — TASK_MATERIAL_USE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WAREHOUSE_ADDRESSES_WAREHOUSE1** — WAREHOUSE_ADDRESS -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WAREHOUSE_CONTACTS_WAREHOUSE1** — WAREHOUSE_CONTACT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WAREHOUSE_ERP_MATERIAL_STOCK_1** — WAREHOUSE_ERP_MATERIAL_STOCK -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WAREHOUSE_GROUP_WAREHOUSE** — WAREHOUSE_GROUP -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WAREHOUSE_LOCATION_WAREHOUSE** — WAREHOUSE_LOCATION -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WIP_COMPONENT_WAREHOUSE** — WIP_COMPONENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WIP_ORDER_CONTENT_WAREHOUSE** — WIP_ORDER_CONTENT -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WORK_CENTER_WAREHOUSE** — WORK_CENTER -> WAREHOUSE (`ReceiptFacility, ReceiptWarehouse -> Facility, Warehouse`)
- **FK_WORK_CENTER_WAREHOUSE1** — WORK_CENTER -> WAREHOUSE (`PutAwayFacility, PutAwayWarehouse -> Facility, Warehouse`)
- **FK_ZONE_WAREHOUSE** — ZONE -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_BUILDING** on `Building`
- **IF_WAREHOUSE_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_WAREHOUSE_INVENTORY_CONTROLLER** on `InventoryControllerID`
- **IF_WAREHOUSE_MOBILITY** on `MobilityID`
- **IF_WAREHOUSE_OWNERSHIP** on `OwnershipID`
- **IF_WAREHOUSE_PROCESS** on `ProcessID`
- **IF_WAREHOUSE_PROCUREMENT** on `ProcurementID`
- **IF_WAREHOUSE_SAP_WAREHOUSE** on `SAPWarehouse`
- **IF_WAREHOUSE_UNIT** on `UnitID`
