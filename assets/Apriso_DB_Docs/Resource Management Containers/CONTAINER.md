# CONTAINER

**Database:** Operational

**Description:** Stores Containers, which are objects that can store inventory within the warehouse. They can be physical containers (e.g. a roll of paper is a Container). A Container should be modeled as a resource if they are physical entities. They might also exist as a serial number if they are serialized and need to be tracked in inventory.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualWeight | DECIMAL(28,10) | True | (0.0) | False |  | Actual weight of the Container. |
| CalculatedWeight | DECIMAL(28,10) | True | (0.0) | False |  | Field that contains the Container weight, calculated by a business component. |
| Container | NVARCHAR(40) | False |  | True |  | Container identification. Can be a label number (LP) or a container number in the case of a reusable Container. |
| ContainerClassID | INT(10,0) | True |  | False | CONTAINER_CLASS | ID for the Class of the Container (user-defined). |
| ContainerStatus | SMALLINT(5,0) | True |  | False | CONTAINER_STATUS | Used to track the status of a Container (e.g. picked, packed). See prime data. |
| DefinitionType | NVARCHAR(5) | True |  | False |  | For future use. |
| EquipmentID | INT(10,0) | True |  | False | EQUIPMENT | Links a Container to an Equipment (e.g. maintenance). |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Facility where the Container is currently located. |
| InContainer | NVARCHAR(40) | True |  | False | CONTAINER | Links the Container to its parent (the one that contains the current record). |
| InventoryID | INT(10,0) | True |  | False | INVENTORY | Link to Inventory. Can be used to retrieve the location of a Container. |
| LastMaintenanceDate | DATETIME | True | (getutcdate()) | False |  | Last maintenance date of the Container. |
| LogisticsID | INT(10,0) | True |  | False | LOGISTICS | For future use. |
| MasterChildCode | NVARCHAR(1) | True |  | False |  | For future use. |
| MobileFlag | BIT | True | (0) | False |  | For future use. |
| MobilityID | INT(10,0) | True |  | False | MOBILITY | For future use. |
| NextMaintenanceDate | DATETIME | True | (getutcdate()) | False |  | Next maintenance date of the Container. |
| OwnershipID | INT(10,0) | True |  | False | OWNERSHIP | For future use. |
| PackagingInstrHeaderID | INT(10,0) | True |  | False | PACKAGING_INSTR_HEADER | Link to PACKAGING_INSTR_HEADER table. |
| PermanentFlag | BIT | True | (0) | False |  | For future use. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | Progress status of the Container. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The resource associated with the container |
| Slot | INT(10,0) | True |  | False |  | Slot number for sequencing. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| Warehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | Warehouse where the Container is currently located. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Position of the Container (link to its Warehouse Location). |

## Primary Key

- **PK_CONTAINER** on `Container`

## Foreign Keys (this table -> other)

- **FK_CONTAINER_CONTAINER** — CONTAINER -> CONTAINER (`InContainer -> Container`)
- **FK_CONTAINER_CONTAINER_STATUS** — CONTAINER -> CONTAINER_STATUS (`ContainerStatus -> ContainerStatus`)
- **FK_CONTAINER_CONTAINER_TYPE** — CONTAINER -> CONTAINER_CLASS (`ContainerClassID -> ID`)
- **FK_CONTAINER_EQUIPMENT** — CONTAINER -> EQUIPMENT (`EquipmentID -> ID`)
- **FK_CONTAINER_FACILITY** — CONTAINER -> FACILITY (`Facility -> Facility`)
- **FK_CONTAINER_INVENTORY** — CONTAINER -> INVENTORY (`InventoryID -> ID`)
- **FK_CONTAINER_LOGISTICS** — CONTAINER -> LOGISTICS (`LogisticsID -> ID`)
- **FK_CONTAINER_MOBILITY** — CONTAINER -> MOBILITY (`MobilityID -> ID`)
- **FK_CONTAINER_OWNERSHIP** — CONTAINER -> OWNERSHIP (`OwnershipID -> ID`)
- **FK_CONTAINER_PACKAGING_INSTR_HEADER** — CONTAINER -> PACKAGING_INSTR_HEADER (`PackagingInstrHeaderID -> ID`)
- **FK_CONTAINER_PROGRESS_STATUS** — CONTAINER -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_CONTAINER_RESOURCE** — CONTAINER -> RESOURCE_ (`ResourceID -> ID`)
- **FK_CONTAINER_UNIT** — CONTAINER -> UNIT (`UnitID -> ID`)
- **FK_CONTAINER_WAREHOUSE** — CONTAINER -> WAREHOUSE (`Facility, Warehouse -> Facility, Warehouse`)
- **FK_CONTAINER_WAREHOUSE_LOCATION** — CONTAINER -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_CONTAINER** — ALERT_DETAIL -> CONTAINER (`Container -> Container`)
- **FK_CAPA_LINK_CONTAINER** — CAPA_LINK -> CONTAINER (`Container -> Container`)
- **FK_CHECK_LIST_HISTORY_CONTAINER** — CHECK_LIST_HISTORY -> CONTAINER (`Container -> Container`)
- **FK_CODE_SERIAL_NUMBER_CONTAINER** — CODE_SERIAL_NUMBER -> CONTAINER (`Container -> Container`)
- **FK_CONTAINER_CONTAINER** — CONTAINER -> CONTAINER (`InContainer -> Container`)
- **FK_CONTAINER_DIMENSION_CONTAINER** — CONTAINER_DIMENSION -> CONTAINER (`Container -> Container`)
- **FK_CONTAINER_HOLD_CONTAINER** — CONTAINER_HOLD -> CONTAINER (`Container -> Container`)
- **FK_CONTAINER_MIN_MAX_LEVEL_CONTAINER** — CONTAINER_MIN_MAX_LEVEL -> CONTAINER (`Container -> Container`)
- **FK_CONTAINER_SEALS_CONTAINER** — CONTAINER_SEAL -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_CONTAINER** — DISPOSITION -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_CONTENT_CONTAINER** — DISPOSITION_CONTENT -> CONTAINER (`ParentContainer -> Container`)
- **FK_DISPOSITION_CONTENT_CONTAINER1** — DISPOSITION_CONTENT -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_LINE_CONTAINER** — DISPOSITION_LINE -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_LINE_CONTAINER1** — DISPOSITION_LINE -> CONTAINER (`ParentContainer -> Container`)
- **FK_DISPOSITION_LINE_SAMPLE_CONTAINER_CONTAINER** — DISPOSITION_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_DISPOSITION_READING_CONTAINER** — DISPOSITION_READING -> CONTAINER (`Container -> Container`)
- **FK_EPC_TAG_CONTAINER** — EPC_TAG -> CONTAINER (`Container -> Container`)
- **FK_INTERNAL_CONTAINER_CONTAINER** — MATERIAL_ORDER_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_INVENTORY_CONTAINER_CONTAINER** — INVENTORY_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_INVENTORY_CONTAINER_TRANSIT_CONTAINER** — INVENTORY_CONTAINER_TRANSIT -> CONTAINER (`Container -> Container`)
- **FK_INVENTORY_COUNT_CONTAINER_CONTAINER** — INVENTORY_COUNT_CONTAINER -> CONTAINER (`InContainer -> Container`)
- **FK_INVENTORY_COUNT_CONTAINER_CONTAINER1** — INVENTORY_COUNT_CONTAINER -> CONTAINER (`LastInContainer -> Container`)
- **FK_INVENTORY_COUNT_SERIAL_NO_CONTAINER** — INVENTORY_COUNT_SERIAL_NO -> CONTAINER (`LastContainer -> Container`)
- **FK_INVENTORY2_CONTAINER** — INVENTORY2 -> CONTAINER (`Container -> Container`)
- **FK_KANBAN_CARD_Container** — KANBAN_CARD -> CONTAINER (`Container -> Container`)
- **FK_LABEL_CONTENT_Container** — LABEL_CONTENT -> CONTAINER (`Container -> Container`)
- **FK_LABOR_DETAILS_CONTAINER** — LABOR_DETAIL -> CONTAINER (`Container -> Container`)
- **FK_ORDER_SHIPMENT_DIMENSION_CONTAINER** — ORDER_SHIPMENT_DIMENSION -> CONTAINER (`Container_ -> Container`)
- **FK_ORDER_SHIPMENT_STAGE_DIMENSION_CONTAINER** — ORDER_SHIPMENT_STAGE_DIMENSION -> CONTAINER (`Container_ -> Container`)
- **FK_QUALITY_DEFECT_CONTAINER** — QUALITY_DEFECT -> CONTAINER (`Container -> Container`)
- **FK_RECEIPT_CONTAINER_CONTAINER** — RECEIPT_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_RESOURCE_LABOR_DETAIL_CONTAINER** — RESOURCE_LABOR_DETAIL -> CONTAINER (`Container -> Container`)
- **FK_SAMPLE_CONTAINER** — SAMPLE -> CONTAINER (`Container -> Container`)
- **FK_SAMPLE_CONTAINER_1** — SAMPLE -> CONTAINER (`ParentContainer -> Container`)
- **FK_SEQUENCE_QUEUE_ITEM_CONTAINER** — SEQUENCE_QUEUE_ITEM -> CONTAINER (`Container -> Container`)
- **FK_SEQUENCE_QUEUE_ITEM_GROUP** — SEQUENCE_QUEUE_ITEM_GROUP -> CONTAINER (`Container -> Container`)
- **FK_SOFT_INVENTORY2_ALLOCATION_CONTAINER** — SOFT_INVENTORY2_ALLOCATION -> CONTAINER (`Container -> Container`)
- **FK_TASK_INVENTORY_CONTAINER** — TASK_INVENTORY -> CONTAINER (`Container -> Container`)
- **FK_WEIGH_HEADER_CONTAINER_CONTAINER** — WEIGH_HEADER_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_WIP_CONTAINER_CONTAINER** — WIP_CONTAINER -> CONTAINER (`Container -> Container`)
- **FK_WIP_DATA_COLLECT_READING_CONTAINER** — WIP_DATA_COLLECT_READING -> CONTAINER (`Container -> Container`)
- **FK_WIP_ORDER_CONTAINER_CONTAINER** — WIP_ORDER_CONTAINER -> CONTAINER (`Container -> Container`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CONTAINER_CONTAINER** on `InContainer`
- **IF_CONTAINER_CONTAINER_STATUS** on `ContainerStatus`
- **IF_CONTAINER_CONTAINER_TYPE** on `ContainerClassID`
- **IF_CONTAINER_EQUIPMENT** on `EquipmentID`
- **IF_CONTAINER_INVENTORY** on `InventoryID`
- **IF_CONTAINER_LOGISTICS** on `LogisticsID`
- **IF_CONTAINER_MOBILITY** on `MobilityID`
- **IF_CONTAINER_OWNERSHIP** on `OwnershipID`
- **IF_CONTAINER_PACKAGING_INSTR_HEADER** on `PackagingInstrHeaderID`
- **IF_CONTAINER_PROGRESS_STATUS** on `ProgressStatus`
- **IF_CONTAINER_RESOURCE** on `ResourceID`
- **IF_CONTAINER_UNIT** on `UnitID`
- **IXD_WarehouseLocationID** on `WarehouseLocationID`
