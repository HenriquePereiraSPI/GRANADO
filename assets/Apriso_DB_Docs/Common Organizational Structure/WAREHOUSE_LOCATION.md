# WAREHOUSE_LOCATION

**Database:** Operational

**Description:** Contain the list of the warehouse locations defined in the system and their assignment to a warehouse

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Aisle | NVARCHAR(10) | True |  | False |  | Name/code of the ails the location belongs to |
| AllocationPath | INT(10,0) | True | (0) | False |  | For future use. |
| CalendarID | INT(10,0) | True |  | False | CALENDAR | The ID of the calendar record this table is associated with |
| ControlNo | NVARCHAR(80) | True |  | False |  | Control Number that can be used to confirm delivery to the Location. |
| CurrentSpaceUtilization | DECIMAL(28,10) | True |  | False |  | Percentage usage of space capacity of the Warehouse Location. |
| CurrentWeightUtilization | DECIMAL(28,10) | True |  | False |  | Percentage usage of weight capacity of the Warehouse Location. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | Assignment of a department to a warehouse location |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| Facility | NVARCHAR(40) | False |  | False | WAREHOUSE | Used to uniquely identify a warehouse |
| FillPath | INT(10,0) | True | (0) | False |  | Sequence to be used when filling the location (path optimization) |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Location | NVARCHAR(80) | False |  | False |  | The name or number of the warehouse location. |
| MapID1 | INT(10,0) | True |  | False | MAP_ | For future use. |
| MapID2 | INT(10,0) | True |  | False | MAP_ | For future use. |
| MobilityID | INT(10,0) | True |  | False | MOBILITY | For future use. |
| OALocatorID | INT(10,0) | True |  | False |  | For future use. |
| OwnershipID | INT(10,0) | True |  | False | OWNERSHIP | For future use. |
| Row_ | NVARCHAR(10) | True |  | False |  | For future use. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| StorageBin | NVARCHAR(10) | True |  | False |  | Alternate name of the location |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Tier | NVARCHAR(10) | True |  | False |  | A human readable code that determines the height of the location from the floor. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UomCodeXCoordinate1 | NVARCHAR(10) | True |  | False | UOM | For future use. |
| UomCodeXCoordinate2 | NVARCHAR(10) | True |  | False | UOM | For future use. |
| UomCodeYCoordinate1 | NVARCHAR(10) | True |  | False | UOM | For future use. |
| UomCodeYCoordinate2 | NVARCHAR(10) | True |  | False | UOM | For future use. |
| UomCodeZCoordinate1 | NVARCHAR(10) | True |  | False | UOM | For future use. |
| UomCodeZCoordinate2 | NVARCHAR(10) | True |  | False | UOM | For future use. |
| WalkPath | INT(10,0) | True | (0) | False |  | Can be used to order warehouse locations when displaying a list to the user, so that locations are ordered in path that can be easily followed during picking or put away for example. |
| Warehouse | NVARCHAR(10) | False |  | False | WAREHOUSE | Warehouse that contains the storage bin/location |
| WarehouseLocationClassID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION_CLASS | Link to the Warehouse Location Class. |
| WarehouseLocationType | SMALLINT(5,0) | False |  | False | WAREHOUSE_LOCATION_TYPE | type of location |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The Work Center. |
| XCoordinate1 | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| XCoordinate2 | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| YCoordinate1 | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| YCoordinate2 | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| ZCoordinate1 | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| ZCoordinate2 | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| Zone | NVARCHAR(20) | True |  | False | ZONE | Assignment to a Zone |

## Primary Key

- **PK_LOCATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_LOCATION_LOCATION_TYPE** — WAREHOUSE_LOCATION -> WAREHOUSE_LOCATION_TYPE (`WarehouseLocationType -> WarehouseLocationType`)
- **FK_WAREHOUSE_LOCATION_CALENDAR** — WAREHOUSE_LOCATION -> CALENDAR (`CalendarID -> ID`)
- **FK_WAREHOUSE_LOCATION_DEPARTMENT** — WAREHOUSE_LOCATION -> DEPARTMENT (`Department -> Department`)
- **FK_WAREHOUSE_LOCATION_MAP_** — WAREHOUSE_LOCATION -> MAP_ (`MapID1 -> MapID`)
- **FK_WAREHOUSE_LOCATION_MAP_1** — WAREHOUSE_LOCATION -> MAP_ (`MapID2 -> MapID`)
- **FK_WAREHOUSE_LOCATION_MOBILITY** — WAREHOUSE_LOCATION -> MOBILITY (`MobilityID -> ID`)
- **FK_WAREHOUSE_LOCATION_OWNERSHIP** — WAREHOUSE_LOCATION -> OWNERSHIP (`OwnershipID -> ID`)
- **FK_WAREHOUSE_LOCATION_SPECIFICATION** — WAREHOUSE_LOCATION -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_WAREHOUSE_LOCATION_UNIT** — WAREHOUSE_LOCATION -> UNIT (`UnitID -> ID`)
- **FK_WAREHOUSE_LOCATION_UOM** — WAREHOUSE_LOCATION -> UOM (`UomCodeXCoordinate1 -> UomCode`)
- **FK_WAREHOUSE_LOCATION_UOM1** — WAREHOUSE_LOCATION -> UOM (`UomCodeYCoordinate1 -> UomCode`)
- **FK_WAREHOUSE_LOCATION_UOM2** — WAREHOUSE_LOCATION -> UOM (`UomCodeZCoordinate1 -> UomCode`)
- **FK_WAREHOUSE_LOCATION_UOM3** — WAREHOUSE_LOCATION -> UOM (`UomCodeXCoordinate2 -> UomCode`)
- **FK_WAREHOUSE_LOCATION_UOM4** — WAREHOUSE_LOCATION -> UOM (`UomCodeYCoordinate2 -> UomCode`)
- **FK_WAREHOUSE_LOCATION_UOM5** — WAREHOUSE_LOCATION -> UOM (`UomCodeZCoordinate2 -> UomCode`)
- **FK_WAREHOUSE_LOCATION_WAREHOUSE** — WAREHOUSE_LOCATION -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_WAREHOUSE_LOCATION_WAREHOUSE_LOCATION_CLASS** — WAREHOUSE_LOCATION -> WAREHOUSE_LOCATION_CLASS (`WarehouseLocationClassID -> ID`)
- **FK_WAREHOUSE_LOCATION_WORK_CENTER** — WAREHOUSE_LOCATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WAREHOUSE_LOCATION_ZONE** — WAREHOUSE_LOCATION -> ZONE (`Zone -> Zone`)

## Referenced By (other tables -> this)

- **FK_CAPA_LINK_WAREHOUSE_LOCATION** — CAPA_LINK -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_CODE_SERIAL_NUMBER_WAREHOUSE_LOCATION** — CODE_SERIAL_NUMBER -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COMPONENT_WAREHOUSE_LOCATION** — COMPONENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_CONTAINER_MIN_MAX_LEVEL_WAREHOUSE_LOCATION** — CONTAINER_MIN_MAX_LEVEL -> WAREHOUSE_LOCATION (`LocationID -> ID`)
- **FK_CONTAINER_WAREHOUSE_LOCATION** — CONTAINER -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COST_DETAIL_WAREHOUSE_LOCATION** — COST_DETAIL -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COST_WAREHOUSE_LOCATION** — COST -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_CONTAINER_WAREHOUSE_LOCATION** — COUNT_CONTAINER -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_DEFINITION_WAREHOUSE_LOCATION** — COUNT_DEFINITION -> WAREHOUSE_LOCATION (`AdjustmentWarehouseLocationID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_WAREHOUSE_LOCATION** — COUNT_DISPOSITION_LINE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_DOCUMENT_WAREHOUSE_LOCATION** — COUNT_DOCUMENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_FREQUENCY_LINK_LOCATION** — COUNT_FREQUENCY_LINK -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_LOCK_WAREHOUSE_LOCATION** — COUNT_LOCK -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_COUNT_RECORD_WHS_LOCATION** — COUNT_RECORD -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_DISPOSITION_CONTENT_WAREHOUSE_LOCATION** — DISPOSITION_CONTENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_EPC_TAG_EPC_WAREHOUSE_LOCATION** — EPC_TAG -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_INBOUND_ORDER_DISTRIBUTION_WAREHOUSE_LOCATION** — INBOUND_ORDER_DISTRIBUTION -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_INVENTORY_CONTAINER_WAREHOUSE_LOCATION** — INVENTORY_CONTAINER -> WAREHOUSE_LOCATION (`LastWarehouseLocation -> ID`)
- **FK_INVENTORY_COUNT_WAREHOUSE_LOCATION** — INVENTORY_COUNT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_INVENTORY_SERIAL_NO_WAREHOUSE_LOCATION** — INVENTORY_SERIAL_NO -> WAREHOUSE_LOCATION (`LastWarehouseLocation -> ID`)
- **FK_INVENTORY_WAREHOUSE_LOCATION** — INVENTORY -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_INVENTORY2_WHS_LOCATION** — INVENTORY2 -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_KANBAN_CARD_FromLocationID** — KANBAN_CARD -> WAREHOUSE_LOCATION (`FromLocationID -> ID`)
- **FK_KANBAN_CARD_ToLocationID** — KANBAN_CARD -> WAREHOUSE_LOCATION (`ToLocationID -> ID`)
- **FK_LOCATION_PARTNER_WAREHOUSE_LOCATION** — LOCATION_PARTNER -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_MOVE_ORDER_DETAIL_WAREHOUSE_LOCATION** — MOVE_ORDER_DETAIL -> WAREHOUSE_LOCATION (`SourceLocationID -> ID`)
- **FK_MOVE_ORDER_DETAIL_WAREHOUSE_LOCATION1** — MOVE_ORDER_DETAIL -> WAREHOUSE_LOCATION (`DestinationLocationID -> ID`)
- **FK_OPERATION_COMPONENT_WAREHOUSE_LOCATION** — OPERATION_COMPONENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_ORDER_DETAIL_WAREHOUSE_LOCATION** — ORDER_DETAIL -> WAREHOUSE_LOCATION (`FromWarehouseLocationID -> ID`)
- **FK_ORDER_DETAIL_WAREHOUSE_LOCATION1** — ORDER_DETAIL -> WAREHOUSE_LOCATION (`ToWarehouseLocationID -> ID`)
- **FK_ORDER_HEADER_WAREHOUSE_LOCATION** — ORDER_HEADER -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_PROCESS_COMPONENT_FACILITY_WAREHOUSE_LOCATION** — PROCESS_COMPONENT_FACILITY -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_PRODUCT_COMPONENT_FACILITY_WAREHOUSE_LOCATION** — PRODUCT_COMPONENT_FACILITY -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_PRODUCT_FACILITY_WAREHOUSE_LOCATION** — PRODUCT_FACILITY -> WAREHOUSE_LOCATION (`DefaultWarehouseLocationID -> ID`)
- **FK_PRODUCT_LOCATION_RESTRICTION_WAREHOUSE_LOCATION** — PRODUCT_LOCATION_RESTRICTION -> WAREHOUSE_LOCATION (`LocationID -> ID`)
- **FK_PRODUCT_MIN_MAX_LEVELS_WAREHOUSE_LOCATION** — PRODUCT_MIN_MAX_LEVEL -> WAREHOUSE_LOCATION (`LocationID -> ID`)
- **FK_PRODUCT_WAREHOUSE_LOCATION** — PRODUCT -> WAREHOUSE_LOCATION (`DefaultWarehouseLocationID -> ID`)
- **FK_RECEIPT_DETAIL_WAREHOUSE_LOCATION** — RECEIPT_DETAIL -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_REPLENISH_STRATEGY_FromLocationID** — REPLENISH_STRATEGY -> WAREHOUSE_LOCATION (`FromLocationID -> ID`)
- **FK_REPLENISH_STRATEGY_ToLocationID** — REPLENISH_STRATEGY -> WAREHOUSE_LOCATION (`ToLocationID -> ID`)
- **FK_RESOURCE__WL_LOC1** — RESOURCE_ -> WAREHOUSE_LOCATION (`ReceiptLocationID -> ID`)
- **FK_RESOURCE__WL_LOC2** — RESOURCE_ -> WAREHOUSE_LOCATION (`PutAwayLocationID -> ID`)
- **FK_RESOURCE_COMPONENT_WAREHOUSE_LOCATION** — RESOURCE_COMPONENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_RESOURCE_LOCATION_RELATION_LOCATIONID** — RESOURCE_LOCATION_RELATION -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_RESOURCE_WAREHOUSE_LOCATION** — RESOURCE_ -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_SAMPLE_WAREHOUSE_LOCATION** — SAMPLE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_SEQUENCE_QUEUE_WAREHOUSE_LOCATION** — SEQUENCE_QUEUE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_WHS_LOCATION** — SOFT_INVENTORY2_ALLOCATION -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_TASK_INVENTORY_WAREHOUSE_LOCATION** — TASK_INVENTORY -> WAREHOUSE_LOCATION (`SourceLocationID -> ID`)
- **FK_TASK_INVENTORY_WAREHOUSE_LOCATION1** — TASK_INVENTORY -> WAREHOUSE_LOCATION (`DestLocationID -> ID`)
- **FK_TASK_MATERIAL_USE_WAREHOUSE_LOCATION** — TASK_MATERIAL_USE -> WAREHOUSE_LOCATION (`SourceLocationID -> ID`)
- **FK_TASK_MATERIAL_USE_WAREHOUSE_LOCATION1** — TASK_MATERIAL_USE -> WAREHOUSE_LOCATION (`DestLocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_ADDRESSES_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_ADDRESS -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_CONTACTS_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_CONTACT -> WAREHOUSE_LOCATION (`LocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_DIMENSIONS_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_DIMENSION -> WAREHOUSE_LOCATION (`LocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_GROUP_WHS_LOCATION** — WAREHOUSE_LOCATION_GROUP -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_HOLDS_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_HOLD -> WAREHOUSE_LOCATION (`LocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_RELATION_WL1** — WAREHOUSE_LOCATION_RELATION -> WAREHOUSE_LOCATION (`ParentLocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_RELATION_WL2** — WAREHOUSE_LOCATION_RELATION -> WAREHOUSE_LOCATION (`ChildLocationID -> ID`)
- **FK_WAREHOUSE_LOCATION_ZONE_WAREHOUSE_LOCATION** — WAREHOUSE_LOCATION_ZONE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WAREHOUSE_WAREHOUSE_LOCATION** — WAREHOUSE -> WAREHOUSE_LOCATION (`LastLocationID -> ID`)
- **FK_WAREHOUSE_WAREHOUSE_LOCATION1** — WAREHOUSE -> WAREHOUSE_LOCATION (`ReceivingLocationID -> ID`)
- **FK_WAREHOUSE_WAREHOUSE_LOCATION2** — WAREHOUSE -> WAREHOUSE_LOCATION (`WipLocationID -> ID`)
- **FK_WAREHOUSE_WAREHOUSE_LOCATION3** — WAREHOUSE -> WAREHOUSE_LOCATION (`PutawayLocationID -> ID`)
- **FK_WEIGH_LINE_DETAIL_WAREHOUSE_LOCATION** — WEIGH_LINE_DETAIL -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WEIGH_LINE_WAREHOUSE_LOCATION** — WEIGH_LINE -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WIP_COMPONENT_WAREHOUSE_LOCATION** — WIP_COMPONENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WIP_ORDER_CONTENT_WAREHOUSE_LOCATION** — WIP_ORDER_CONTENT -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_WIP_ORDER_WAREHOUSE_LOCATION** — WIP_ORDER -> WAREHOUSE_LOCATION (`PutAwayLocationID -> ID`)
- **FK_WIP_ORDER_WAREHOUSE_LOCATION_1** — WIP_ORDER -> WAREHOUSE_LOCATION (`ReceiptLocationID -> ID`)
- **FK_WORK_CENTER_WAREHOUSE_LOCATION** — WORK_CENTER -> WAREHOUSE_LOCATION (`ReceiptLocationID -> ID`)
- **FK_WORK_CENTER_WAREHOUSE_LOCATION1** — WORK_CENTER -> WAREHOUSE_LOCATION (`PutAwayLocationID -> ID`)
- **FK_ZONE_WAREHOUSE_LOCATION_1** — ZONE -> WAREHOUSE_LOCATION (`PutawayLocationID -> ID`)
- **FK_ZONE_WAREHOUSE_LOCATION_2** — ZONE -> WAREHOUSE_LOCATION (`ReceiptLocationID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WAREHOUSE_LOCATION_MAP_** on `MapID1`
- **IF_WAREHOUSE_LOCATION_MAP_1** on `MapID2`
- **IF_WAREHOUSE_LOCATION_MOBILITY** on `MobilityID`
- **IF_WAREHOUSE_LOCATION_OWNERSHIP** on `OwnershipID`
- **IF_WAREHOUSE_LOCATION_SPECIFICATION** on `SpecificationID`
- **IF_WAREHOUSE_LOCATION_UNIT** on `UnitID`
- **IF_WAREHOUSE_LOCATION_WAREHOUSE_LOCATION_CLASS** on `WarehouseLocationClassID`
- **IF_WAREHOUSE_LOCATION_WORK_CENTER** on `WorkCenter`
- **IF_WAREHOUSE_LOCATION_ZONE** on `Zone`
- **IXD_Facility_Warehouse** on `Facility, Warehouse`
- **IXD_Location_Facility_Warehouse** on `Location, Facility, Warehouse`
