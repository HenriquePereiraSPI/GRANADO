# RESOURCE_

**Database:** Operational

**Description:** This table stores the Resources used in the system.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AutoAdjustState | BIT | True |  | False |  | For future use. |
| AutoCharge | BIT | True | (0) | False |  | For future use. |
| AvailabilityID | INT(10,0) | True |  | False | AVAILABILITY | For future use. |
| CalendarID | INT(10,0) | True |  | False | CALENDAR | The calendar that defines the Resource's availability. |
| CapacityID | INT(10,0) | True |  | False | CAPACITY | For future use. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Link to CLASSIFICATION table. |
| CostID | INT(10,0) | True |  | False | COST | For future use. |
| CoupleState | BIT | True |  | False |  | Determines if the Resource labor record has been modifed by the system to a coupled state (e.g., the modification of the start time is followed by the modification of the end time of the previous state). |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | The assignment of the Resource to a Department. |
| DepartmentConstraint | BIT | True |  | False |  | Indicates if the Machine is the bottleneck, pace, or constraint Machine of the Department. |
| DepartmentPayPoint | BIT | True |  | False |  | Indicates if the Machine is a paypoint of the Department. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ExcludeFromPlanning | BIT | True | (0) | False |  | For future use. |
| Facility | NVARCHAR(40) | True |  | False | PAY_RULE | The assignment of the Resource to a Facility. |
| FacilityPayPoint | BIT | True |  | False |  | Indicates if the Machine is a paypoint of the Facility. |
| FastSpeedPercentageThreshold | DECIMAL(28,10) | True | ((150)) | False |  | Determines threshold for considering resource is fast. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique identifier of the DELMIA Apriso object for RESOURCE. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Resource. |
| LastMaintenanceDate | DATETIME | True | (getutcdate()) | False |  | The last maintenance date of the Resource. |
| LifeCycle | INT(10,0) | True |  | False |  | The current life cycle of the Resource. |
| MaintenanceCalendarID | INT(10,0) | True |  | False | CALENDAR | The identifier fo the calendar used for Maintenance Activities. |
| MasterResource | BIT | True |  | False |  | The column used to group orders (for Services use). |
| MobilityFlag | BIT | True | (0) | False |  | For future use. |
| MobilityID | INT(10,0) | True |  | False | MOBILITY | For future use. |
| Name | NVARCHAR(80) | False |  | False |  | The name of the Resource. |
| NextMaintenanceDate | DATETIME | True | (getutcdate()) | False |  | The next maintenance date. |
| OperatingRange | DECIMAL(28,10) | True |  | False |  | Vertical operation range for the Resource. |
| OwnershipID | INT(10,0) | True |  | False | OWNERSHIP | For future use. |
| PayRule | NVARCHAR(20) | True |  | False | PAY_RULE | The Pay Rule that will be used to define its schedule. |
| ProcurementID | INT(10,0) | True |  | False | PROCUREMENT | For future use. |
| ProductBOMFacility | NVARCHAR(40) | True |  | False |  | The BOM Facility. |
| ProductBOMNumber | NVARCHAR(10) | True |  | False |  | The BOM number (BOM version), which allows a product to have multiple product BOMs active at a time. |
| ProductID | INT(10,0) | True |  | False | PRODUCT | The identifier of the product. |
| ProductionLine | NVARCHAR(40) | True |  | False | WIP_LINE | The assignment to a Production Line. |
| ProductionLineConstraint | BIT | True |  | False |  | Indicates if the Machine is the constraint on the Production Line. |
| ProductionLinePayPoint | BIT | True |  | False |  | Indicates if the Machine is the paypoint of the Production Line. |
| PutAwayLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The identifie  of the Putaway location. |
| ReceiptLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The identifier of the receiving location. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | The assignment of the Resource to a class. |
| ResourceName | NVARCHAR(80) | False |  | False |  | The name of the Resource. |
| ResourceType | SMALLINT(5,0) | False |  | False | RESOURCE_TYPE | The type of the Resource. |
| SlowSpeedPercentageThreshold | DECIMAL(28,10) | True | ((50)) | False |  | Determines threshold for considering resource is slow. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| StdRate | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TrackAttendanceFlag | BIT | True |  | False |  | For future use. |
| TrackingUomCode | NVARCHAR(10) | True |  | False | UOM | For future use. |
| TrackLaborFlag | BIT | True |  | False |  | For future use. |
| TrackResourceLaborFlag | BIT | True |  | False |  | Determines whether the Resource should have labor tracked against it. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarehouseLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | Assignment of BOM to a Warehouse Location. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The assignment of the Resource to a Work Center. |
| WorkCenterConstraint | BIT | True |  | False |  | Indicates if the Machine is the bottleneck, pace, or constraint Machine of the Work Center. |
| WorkCenterPayPoint | BIT | True |  | False |  | Indicates if the Machine is a paypoint of the Work Center. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | For future use. |

## Primary Key

- **PK_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE__CALENDAR** — RESOURCE_ -> CALENDAR (`CalendarID -> ID`)
- **FK_RESOURCE__PAY_RULE** — RESOURCE_ -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_RESOURCE__SPECIFICATION** — RESOURCE_ -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_RESOURCE__UNIT** — RESOURCE_ -> UNIT (`UnitID -> ID`)
- **FK_RESOURCE__WIP_LINE** — RESOURCE_ -> WIP_LINE (`ProductionLine -> ProductionLineNo`)
- **FK_RESOURCE__WL_LOC1** — RESOURCE_ -> WAREHOUSE_LOCATION (`ReceiptLocationID -> ID`)
- **FK_RESOURCE__WL_LOC2** — RESOURCE_ -> WAREHOUSE_LOCATION (`PutAwayLocationID -> ID`)
- **FK_RESOURCE_AVAILABILITY** — RESOURCE_ -> AVAILABILITY (`AvailabilityID -> ID`)
- **FK_RESOURCE_CAPACITY** — RESOURCE_ -> CAPACITY (`CapacityID -> ID`)
- **FK_RESOURCE_COST** — RESOURCE_ -> COST (`CostID -> ID`)
- **FK_RESOURCE_DEPARTMENT** — RESOURCE_ -> DEPARTMENT (`Department -> Department`)
- **FK_RESOURCE_FACILITY** — RESOURCE_ -> FACILITY (`Facility -> Facility`)
- **FK_RESOURCE_MAINTENANCE_CALENDAR** — RESOURCE_ -> CALENDAR (`MaintenanceCalendarID -> ID`)
- **FK_RESOURCE_MOBILITY** — RESOURCE_ -> MOBILITY (`MobilityID -> ID`)
- **FK_RESOURCE_OWNERSHIP** — RESOURCE_ -> OWNERSHIP (`OwnershipID -> ID`)
- **FK_RESOURCE_PROCUREMENT** — RESOURCE_ -> PROCUREMENT (`ProcurementID -> ID`)
- **FK_RESOURCE_PRODUCT_ID** — RESOURCE_ -> PRODUCT (`ProductID -> ID`)
- **FK_RESOURCE_RESOURCE_CLASS** — RESOURCE_ -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_RESOURCE_RESOURCE_TYPE** — RESOURCE_ -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_RESOURCE_UOM1** — RESOURCE_ -> UOM (`TrackingUomCode -> UomCode`)
- **FK_RESOURCE_WAREHOUSE_LOCATION** — RESOURCE_ -> WAREHOUSE_LOCATION (`WarehouseLocationID -> ID`)
- **FK_RESOURCE_WORK_CENTER** — RESOURCE_ -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_RESOURCE_WORK_LOAD** — RESOURCE_ -> WORK_LOAD (`WorkLoadID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_RESOURCE_** — ALERT_DETAIL -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_ALERT_RECIPIENT_RESOURCE_** — ALERT_RECIPIENT -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_ALERT_RESPONSE_RESOURCE_** — ALERT_RESPONSE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_ASSET_RESOURCE_** — ASSET -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_CAPA_LINK_RESOURCE** — CAPA_LINK -> RESOURCE_ (`ResourceID -> ID`)
- **FK_CAPACITY_RESOURCE_RESOURCE_** — CAPACITY_RESOURCE -> RESOURCE_ (`ResourceId -> ID`)
- **FK_CHARACTERISTIC_REV_RESOURCE_RESOURCE_** — CHARACTERISTIC_REV_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_CHECK_LIST_CHECK_POINT_RESOURCE_** — CHECK_LIST_CHECK_POINT -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_CHECK_LIST_HISTORY_RESOURCE_** — CHECK_LIST_HISTORY -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_CONTAINER_RESOURCE** — CONTAINER -> RESOURCE_ (`ResourceID -> ID`)
- **FK_COST_DETAIL_RESOURCE_** — COST_DETAIL -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_COST_RESOURCE_** — COST -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_COUNT_DISPOSITION_RESOURCE_RESOURCE** — COUNT_DISPOSITION_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_COUNT_DISPOSITION_STATUS_HISTORY_RESOURCE** — COUNT_DISPOSITION_STATUS_HISTORY -> RESOURCE_ (`ResourceID -> ID`)
- **FK_DEVICE_RESOURCE** — DEVICE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_DISPOSITION_CONTENT_RESOURCE_** — DISPOSITION_CONTENT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_DISPOSITION_LINE_RESOURCE_** — DISPOSITION_LINE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_DISPOSITION_READING_RESOURCE_** — DISPOSITION_READING -> RESOURCE_ (`ResourceID -> ID`)
- **FK_DISPOSITION_RESOURCE_** — DISPOSITION -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_DISPOSITION_RESOURCE_RESOURCE_** — DISPOSITION_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_ECA_OBJECT_HISTORY_RESOURCE** — ECA_OBJECT_HISTORY -> RESOURCE_ (`ResourceID -> ID`)
- **FK_ECA_OBJECT_RESOURCE** — ECA_OBJECT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_EMPLOYEE_RESOURCE** — EMPLOYEE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_EPC_TAG_EPC_RESOURCE** — EPC_TAG -> RESOURCE_ (`ResourceID -> ID`)
- **FK_EQUIPMENT_RESOURCE** — EQUIPMENT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_FLAT_FILE_DEFINITION_RESOURCE_** — FLAT_FILE_DEFINITION -> RESOURCE_ (`ResourceID -> ID`)
- **FK_FLAT_FILE_ENTITY_RESOURCE_** — FLAT_FILE_ENTITY -> RESOURCE_ (`ResourceID -> ID`)
- **FK_GEOGRAPHIC_LOCATION_HISTORY_RESOURCE** — GEOGRAPHIC_LOCATION_HISTORY -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_INSPECTION_DETERMINATION_RESOURCE_** — INSPECTION_DETERMINATION -> RESOURCE_ (`ResourceID -> ID`)
- **FK_INSPECTION_PLAN_RESOURCE_RESOURCE** — INSPECTION_PLAN_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_INVENTORY_TRANSIT_RESOURCE_** — INVENTORY_TRANSIT -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_INVENTORY2_ALLOCATION_RESOURCE** — INVENTORY2_ALLOCATION -> RESOURCE_ (`ResourceID -> ID`)
- **FK_LITE_LABOR_RESOURCE** — LITE_LABOR -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_LOCATION_PARTNER_RESOURCE_** — LOCATION_PARTNER -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_MATERIAL_ORDER_DETAIL_RESOURCE** — MATERIAL_ORDER_DETAIL -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_MATERIAL_ORDER_HEADER_RESOURCE** — MATERIAL_ORDER_HEADER -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_OPERATION_REQ_RESOURCE_RESOURCE** — OPERATION_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_ORDER_RESOURCE_RESOURCE_** — ORDER_RESOURCE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_OUTBOUND_SHIPMENT_HEADER_RESOURCE** — OUTBOUND_SHIPMENT_HEADER -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_PACKAGING_INSTR_USAGE_RESOURCE_** — PACKAGING_INSTR_USAGE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_PROCESS_DATA_COLLECT_REQ_RESOURCE_RESOURCE** — PROCESS_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_PROCESS_OPERATION_REQ_RESOURCE_RESOURCE** — PROCESS_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_PRODUCT_ROUTING_REQ_RESOURCE_RESOURCE** — PRODUCT_ROUTING_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_PRODUCTION_DAY_SHIFT_RESOURCE_** — PRODUCTION_DAY_SHIFT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_PRODUCTION_FACT_CALCULATION_RESOURCE_** — PRODUCTION_FACT_CALCULATION -> RESOURCE_ (`ResourceID -> ID`)
- **FK_PRODUCTION_FACT_RESOURCE_** — PRODUCTION_FACT -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_PRODUCTION_FACT_RESOURCE_1** — PRODUCTION_FACT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_QUALITY_DEFECT_RESOURCE_** — QUALITY_DEFECT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RECIPE_RESOURCE_** — RECIPE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_ADDRESS_RESOURCE** — RESOURCE_ADDRESS -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_CERTIFICATION_RESOURCE_** — RESOURCE_CERTIFICATION -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_COLLECTION_RESOURCE** — RESOURCE_COLLECTION -> RESOURCE_ (`ParentResourceName, ParentResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_COLLECTION_RESOURCE1** — RESOURCE_COLLECTION -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_COMPONENT_RESOURCE** — RESOURCE_COMPONENT -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_CONTACT_RESOURCE** — RESOURCE_CONTACT -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_COUNTER_RESOURCE** — RESOURCE_COUNTER -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_EVENT_HIERARCHY_RESOURCE_** — RESOURCE_EVENT_HIERARCHY -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_GROUP_RESOURCE** — RESOURCE_GROUP -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_LABOR_RESOURCE** — RESOURCE_LABOR -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_LIFE_CYCLE_RESOURCE_** — RESOURCE_LIFE_CYCLE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_LIFE_STATUS_RESOURCE_** — RESOURCE_LIFE_STATUS -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_LOCATION_RELATION_RESOURCEID** — RESOURCE_LOCATION_RELATION -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_MAINT_TASK_RESOURCE** — RESOURCE_MAINT_TASK -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_MI_POINT_RESOURCE** — RESOURCE_MI_POINT -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_PRINTER_RESOURCE_** — RESOURCE_PRINTER -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_PROCESS_RESOURCE** — RESOURCE_PROCESS -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_REASON_CODE_RESOURCE** — RESOURCE_REASON_CODE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_RESOURCE_USED_RESOURCE_** — RESOURCE_RESOURCE_LINK -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_RESOURCE_USED_RESOURCE_1** — RESOURCE_RESOURCE_LINK -> RESOURCE_ (`ParentResourceName, ParentResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_ROTATING_SCHEDULE_RESOURCE_** — RESOURCE_ROTATING_SCHEDULE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_ROUTING_REQ_RESOURCE_RESOURCE_** — RESOURCE_ROUTING_REQ_RESOURCE -> RESOURCE_ (`ReqResourceType, ReqResourceName -> ResourceType, ResourceName`)
- **FK_RESOURCE_ROUTING_RESOURCE** — RESOURCE_ROUTING -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_SERIAL_NO_RESOURCE_** — RESOURCE_SERIAL_NO -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_RESOURCE_WORK_SCHEDULE_RESOURCE_** — RESOURCE_WORK_SCHEDULE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_SAFETY_INSTRUCTION_USAGE_RESOURCE_** — SAFETY_INSTRUCTION_USAGE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_SEQUENCE_QUEUE_RESOURCE** — SEQUENCE_QUEUE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_SEQUENCE_SHIP_CONFIG_RESOURCE_** — SEQUENCE_SHIP_CONFIG -> RESOURCE_ (`ShippingDoorID -> ID`)
- **FK_TASK_RESOURCE_** — TASK -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_TASK_RESOURCE_USE_RESOURCE** — TASK_RESOURCE_USE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_UNIT_DOCUMENT_USAGE_RESOURCE** — UNIT_DOCUMENT_USAGE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_UNIT_USAGE_RESOURCE_** — UNIT_USAGE -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_WEIGH_HEADER_RESOURCE2** — WEIGH_HEADER -> RESOURCE_ (`ScaleStationID -> ID`)
- **FK_WEIGH_LINE_DETAIL_RESOURCE_** — WEIGH_LINE_DETAIL -> RESOURCE_ (`ScaleStationID -> ID`)
- **FK_WEIGH_LINE_DETAIL_RESOURCE_2** — WEIGH_LINE_DETAIL -> RESOURCE_ (`ScaleID -> ID`)
- **FK_WEIGH_LINE_RESOURCE_** — WEIGH_LINE -> RESOURCE_ (`ScaleStationID -> ID`)
- **FK_WEIGH_LINE_RESOURCE_2** — WEIGH_LINE -> RESOURCE_ (`ScaleID -> ID`)
- **FK_WIP_DATA_COLLECT_READING_RESOURCE_** — WIP_DATA_COLLECT_READING -> RESOURCE_ (`ResourceID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_RESOURCE** — WIP_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_WIP_ORDER_RESOURCE** — WIP_ORDER -> RESOURCE_ (`ResourceName, ResourceType -> ResourceName, ResourceType`)
- **FK_WIP_REQ_RESOURCE_EXCEPTION_RESOURCE_** — WIP_REQ_RESOURCE_EXCEPTION -> RESOURCE_ (`ExceptResourceID -> ID`)
- **FK_WIP_REQ_RESOURCE_RESOURCE** — WIP_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_WIP_REQ_RESOURCE_RESOURCE_1** — WIP_REQ_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_WIP_USAGE_HISTORY_RESOURCE_RESOURCE** — WIP_USAGE_HISTORY_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_WORK_CENTER_REQ_RESOURCE_RESOURCE_** — WORK_CENTER_REQ_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)

## Unique Indexes

- **UK_RESOURCE** on `FUID`
- **UK_RESOURCE_1** on `ResourceName, ResourceType`

## Non-Unique Indexes

- **IDX_RESOURCE_CLASSIFICATIONID** on `ClassificationID`
- **IF_RESOURCE__DSID** on `DSID`
- **IF_RESOURCE__PAY_RULE** on `PayRule, Facility`
- **IF_RESOURCE__SPECIFICATION** on `SpecificationID`
- **IF_RESOURCE__UNIT** on `UnitID`
- **IF_RESOURCE__WIP_LINE** on `ProductionLine`
- **IF_RESOURCE_AVAILABILITY** on `AvailabilityID`
- **IF_RESOURCE_CAPACITY** on `CapacityID`
- **IF_RESOURCE_COST** on `CostID`
- **IF_RESOURCE_MOBILITY** on `MobilityID`
- **IF_RESOURCE_OWNERSHIP** on `OwnershipID`
- **IF_RESOURCE_PROCUREMENT** on `ProcurementID`
- **IF_RESOURCE_PRODUCT_ID** on `ProductID`
- **IF_RESOURCE_RESOURCE_CLASS** on `ResourceClassID`
- **IF_RESOURCE_WORK_LOAD** on `WorkLoadID`
- **IXD_ResourceType** on `ResourceType`
