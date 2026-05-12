# FACILITY

**Database:** Operational

**Description:** One of the main structure entities of Apriso. It usually refers to the physical building within the company (Facility).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarID | INT(10,0) | True |  | False | CALENDAR | ID of the Calendar record the table is associated with. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Link to CLASSIFICATION table. |
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Code System and a unique identifier of its attributes. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | Company the Facility belongs to. |
| DefaultOverReceivePercentage | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| Division | NVARCHAR(70) | True |  | False | DIVISION | Assignment of the Facility to a Division. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and a unique identifier of its attributes. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ExternalID | NVARCHAR(240) | True |  | False |  | This column store unique identifier from external system. |
| Facility | NVARCHAR(40) | False |  | True |  | Facility as a part of the organization structure. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| LaborJurisdictionName | NVARCHAR(70) | True |  | False |  | For future use. |
| MaintenanceCalendarID | INT(10,0) | True |  | False | CALENDAR | ID of the Calendar used for maintenance activities. |
| MobilityID | INT(10,0) | True |  | False | MOBILITY | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| PayRule | NVARCHAR(20) | True |  | False |  | Pay Rule linked to this Facility. |
| PurchasingOrganization | NVARCHAR(4) | True |  | False | PURCHASING_ORGANIZATION | For future use. |
| RotatingWorkScheduleID | INT(10,0) | True |  | False | ROTATING_WORK_SCHEDULE | Rotating Work Schedule the Facility is assigned to. Optional and linked to the ROTATING_WORK_SCHEDULE table. |
| SalesOrganization | NVARCHAR(4) | True |  | False | SALES_ORGANIZATION | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TrackAttendanceFlag | BIT | True |  | False |  | For future use. |
| TrackLaborFlag | BIT | True |  | False |  | For future use. |
| TrackResourceLaborFlag | BIT | True |  | False |  | The TrackResourceLaborFlag linked to the Facility which is used with the TrackResourceLaborFlag at the Resource level when the flag is set at the Facility level. If this flag is set to false at the Facility level, it can be set to true on the Resource level. |
| UnionName | NVARCHAR(70) | True |  | False |  | Name of the Union. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_FACILITY** on `Facility`

## Foreign Keys (this table -> other)

- **FK_FACILITY_CALENDAR** — FACILITY -> CALENDAR (`CalendarID -> ID`)
- **FK_FACILITY_CODE_DOMAIN_MANAGER** — FACILITY -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_FACILITY_CODE_FORMAT_TYPE** — FACILITY -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_FACILITY_COMPANY** — FACILITY -> COMPANY (`Company -> Company`)
- **FK_FACILITY_DIVISION** — FACILITY -> DIVISION (`Division -> Division`)
- **FK_FACILITY_MAINTENANCE_CALENDAR** — FACILITY -> CALENDAR (`MaintenanceCalendarID -> ID`)
- **FK_FACILITY_MOBILITY** — FACILITY -> MOBILITY (`MobilityID -> ID`)
- **FK_FACILITY_PURCHASING_ORGANIZATION** — FACILITY -> PURCHASING_ORGANIZATION (`PurchasingOrganization -> PurchasingOrganization`)
- **FK_FACILITY_ROTATING_WORK_SCHEDULE** — FACILITY -> ROTATING_WORK_SCHEDULE (`RotatingWorkScheduleID -> ID`)
- **FK_FACILITY_SALES_ORGANIZATION** — FACILITY -> SALES_ORGANIZATION (`SalesOrganization -> SalesOrganization`)
- **FK_FACILITY_UNIT** — FACILITY -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_FACILITY** — ALERT_DETAIL -> FACILITY (`Facility -> Facility`)
- **FK_ATTENDANCE_FACILITY** — ATTENDANCE -> FACILITY (`Facility -> Facility`)
- **FK_BUILDING_FACILITY_FACILITY** — BUILDING_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_CALENDARS_FACILITY** — CALENDAR -> FACILITY (`Facility -> Facility`)
- **FK_CAMPAIGNS_FACILITY** — CAMPAIGN -> FACILITY (`Facility -> Facility`)
- **FK_CAPA_LINK_FACILITY** — CAPA_LINK -> FACILITY (`Facility -> Facility`)
- **FK_CHARACTERISTIC_FACILITY** — CHARACTERISTIC -> FACILITY (`Facility -> Facility`)
- **FK_CHECK_LIST_CHECK_POINT_FACILITY** — CHECK_LIST_CHECK_POINT -> FACILITY (`Facility -> Facility`)
- **FK_CODE_ULC_FACILITY** — CODE_ULC -> FACILITY (`Facility -> Facility`)
- **FK_CODE_UPC_FACILITY** — CODE_UPC -> FACILITY (`Facility -> Facility`)
- **FK_COMPONENT_FACILITY** — COMPONENT -> FACILITY (`Facility -> Facility`)
- **FK_CONTAINER_FACILITY** — CONTAINER -> FACILITY (`Facility -> Facility`)
- **FK_CONTAINMENT_FACILITY** — CONTAINMENT -> FACILITY (`Facility -> Facility`)
- **FK_COST_DETAIL_FACILITY** — COST_DETAIL -> FACILITY (`Facility -> Facility`)
- **FK_COST_FACILITY** — COST -> FACILITY (`Facility -> Facility`)
- **FK_COUNT_DOCUMENT_FACILITY** — COUNT_DOCUMENT -> FACILITY (`Facility -> Facility`)
- **FK_DEPARTMENTS_FACILITY** — DEPARTMENT -> FACILITY (`Facility -> Facility`)
- **FK_DISPOSITION_CONTENT_FACILITY** — DISPOSITION_CONTENT -> FACILITY (`DispositionFacility -> Facility`)
- **FK_DISPOSITION_CONTENT_FACILITY1** — DISPOSITION_CONTENT -> FACILITY (`Facility -> Facility`)
- **FK_DISPOSITION_FACILITY** — DISPOSITION -> FACILITY (`Facility -> Facility`)
- **FK_DISPOSITION_LINE_MACHINE_EVENT_FACILITY** — DISPOSITION_LINE_MACHINE_EVENT -> FACILITY (`Facility -> Facility`)
- **FK_EMPLOYEE_FACILITY** — EMPLOYEE -> FACILITY (`DefaultFacility -> Facility`)
- **FK_EMPLOYEE_FACILITY_1** — EMPLOYEE -> FACILITY (`LastFacility -> Facility`)
- **FK_EMPLOYEE_FACILITY_FACILITY** — EMPLOYEE_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_EMPLOYEE_TEMP_BADGE_FACILITY** — EMPLOYEE_TEMP_BADGE -> FACILITY (`Facility -> Facility`)
- **FK_EMPLOYEE_WORK_SCHEDULE_FACILITY** — EMPLOYEE_WORK_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_EPC_TAG_EPC_FACILITY** — EPC_TAG -> FACILITY (`Facility -> Facility`)
- **FK_EQUIPMENT_FACILITY** — EQUIPMENT -> FACILITY (`Facility -> Facility`)
- **FK_FACILITY_ADDRESSES_FACILITY** — FACILITY_ADDRESS -> FACILITY (`Facility -> Facility`)
- **FK_FACILITY_CONTACTS_FACILITY** — FACILITY_CONTACT -> FACILITY (`Facility -> Facility`)
- **FK_FACILITY_PB_PROJECT_REVISION_CONTEXT** — PB_PROJECT_REVISION_CONTEXT -> FACILITY (`Facility -> Facility`)
- **FK_FACILITY_ROTATING_SCHEDULE_FACILITY** — FACILITY_ROTATING_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_FACILITY_WORK_SCHEDULE_FACILITY** — FACILITY_WORK_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_FLAT_FILE_ENTITY_FACILITY** — FLAT_FILE_ENTITY -> FACILITY (`Facility -> Facility`)
- **FK_INBOUND_ORDER_DISTRIBUTION_FACILITY** — INBOUND_ORDER_DISTRIBUTION -> FACILITY (`Facility -> Facility`)
- **FK_INSPECTION_DETERMINATION_FACILITY** — INSPECTION_DETERMINATION -> FACILITY (`Facility -> Facility`)
- **FK_INSPECTION_PLAN_SCHEDULE_FACILITY** — INSPECTION_PLAN_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_INVENTORY_CONTAINER_FACILITY** — INVENTORY_CONTAINER -> FACILITY (`LastFacility -> Facility`)
- **FK_INVENTORY_SERIAL_NO_FACILITY** — INVENTORY_SERIAL_NO -> FACILITY (`LastFacility -> Facility`)
- **FK_KANBAN_CARD_FromFacility** — KANBAN_CARD -> FACILITY (`FromFacility -> Facility`)
- **FK_KANBAN_CARD_ToFacility** — KANBAN_CARD -> FACILITY (`ToFacility -> Facility`)
- **FK_LABEL_CONTENT_Facility** — LABEL_CONTENT -> FACILITY (`Facility -> Facility`)
- **FK_LABOR_FACILITY** — LABOR -> FACILITY (`Facility -> Facility`)
- **FK_LABOR_GRADE_FACILITY** — LABOR_GRADE -> FACILITY (`Facility -> Facility`)
- **FK_LAND_FACILITY** — LAND -> FACILITY (`Facility -> Facility`)
- **FK_LITE_LABOR_FACILITY** — LITE_LABOR -> FACILITY (`Facility -> Facility`)
- **FK_LOCATION_PARTNER_FACILITY** — LOCATION_PARTNER -> FACILITY (`Facility -> Facility`)
- **FK_LOT_NO_FACILITY** — LOT_NO -> FACILITY (`Facility -> Facility`)
- **FK_MAINT_ORDER_TASK_RESOURCE_FACILITY** — MAINT_ORDER_TASK -> FACILITY (`ResourceFacility -> Facility`)
- **FK_MATERIAL_ORDER_DETAIL_FACILITY** — MATERIAL_ORDER_DETAIL -> FACILITY (`Facility -> Facility`)
- **FK_MATERIAL_ORDER_HEADER_FACILITY** — MATERIAL_ORDER_HEADER -> FACILITY (`Facility -> Facility`)
- **FK_MOVE_ORDER_DETAIL_FACILITY** — MOVE_ORDER_DETAIL -> FACILITY (`DestinationFacility -> Facility`)
- **FK_MOVE_ORDER_DETAIL_FACILITY1** — MOVE_ORDER_DETAIL -> FACILITY (`SourceFacility -> Facility`)
- **FK_MRP1_FACILITY** — MRP1 -> FACILITY (`Facility -> Facility`)
- **FK_MRP1_FACILITY1** — MRP1 -> FACILITY (`FromFacility -> Facility`)
- **FK_OCCUPATION_FACILITY** — OCCUPATION -> FACILITY (`Facility -> Facility`)
- **FK_ORDER_DETAIL_FACILITY** — ORDER_DETAIL -> FACILITY (`FromFacility -> Facility`)
- **FK_ORDER_DETAIL_FACILITY1** — ORDER_DETAIL -> FACILITY (`ToFacility -> Facility`)
- **FK_ORDER_SCHEDULE_FACILITY** — ORDER_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_OVERTIME_OFFERED_ACCEPTED_FACILITY** — OVERTIME_OFFER_ACCEPT -> FACILITY (`Facility -> Facility`)
- **FK_PACKAGING_INSTR_USAGE_FACILITY** — PACKAGING_INSTR_USAGE -> FACILITY (`Facility -> Facility`)
- **FK_PACKAGING_INSTR_VALIDITY_FACILITY** — PACKAGING_INSTR_VALIDITY -> FACILITY (`Facility -> Facility`)
- **FK_PARTNER_PRODUCT_FACILITY** — PARTNER_PRODUCT -> FACILITY (`Facility -> Facility`)
- **FK_PARTNER_RELATIONSHIP_FACILITY** — PARTNER_RELATIONSHIP -> FACILITY (`Facility -> Facility`)
- **FK_PAY_CYCLE_FACILITY** — PAY_CYCLE -> FACILITY (`Facility -> Facility`)
- **FK_PAY_RULE_FACILITY** — PAY_RULE -> FACILITY (`Facility -> Facility`)
- **FK_PRINTER_FACILITY** — PRINTER -> FACILITY (`Facility -> Facility`)
- **FK_PROCESS_COMPONENT_FACILITY** — PROCESS_COMPONENT -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PROCESS_COMPONENT_FACILITY_FACILITY** — PROCESS_COMPONENT_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PROCESS_FACILITY** — PROCESS -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PROCESS_FACILITY_FACILITY** — PROCESS_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PROCESS_OPERATION_FACILITY** — PROCESS_OPERATION -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PROCESS_OPERATION_FACILITY_FACILITY** — PROCESS_OPERATION_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_COMPONENT_FACILITY** — PRODUCT_COMPONENT -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_COMPONENT_FACILITY_FACILITY** — PRODUCT_COMPONENT_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_FACILITY** — PRODUCT -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_FACILITY_FACILITY** — PRODUCT_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_FACILITY1** — PRODUCT -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PRODUCT_MIN_MAX_LEVEL_FACILITY** — PRODUCT_MIN_MAX_LEVEL -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_PROCESS_FACILITY** — PRODUCT_PROCESS -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_PROCESS_FACILITY_FACILITY** — PRODUCT_PROCESS_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_PROCESS_FACILITY1** — PRODUCT_PROCESS -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PRODUCT_ROUTING_FACILITY** — PRODUCT_ROUTING -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_ROUTING_FACILITY_FACILITY** — PRODUCT_ROUTING_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCT_ROUTING_FACILITY1** — PRODUCT_ROUTING -> FACILITY (`OwnerFacility -> Facility`)
- **FK_PRODUCTION_DAY_SHIFT_FACILITY** — PRODUCTION_DAY_SHIFT -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCTION_FACT_CALCULATION_FACILITY** — PRODUCTION_FACT_CALCULATION -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCTION_FACT_FACILITY** — PRODUCTION_FACT -> FACILITY (`Facility -> Facility`)
- **FK_PRODUCTION_VERSION_FACILITY** — PRODUCTION_VERSION -> FACILITY (`Facility -> Facility`)
- **FK_PROGRESS_TRANSITION_RULES_FACILITY** — PROGRESS_TRANSITION_RULES -> FACILITY (`Facility -> Facility`)
- **FK_PROJECT_FACILITY** — PROJECT -> FACILITY (`Facility -> Facility`)
- **FK_QUALITY_DEFECT_DEFECTFACILITY** — QUALITY_DEFECT -> FACILITY (`DefectFacility -> Facility`)
- **FK_QUALITY_DEFECT_FACILITY** — QUALITY_DEFECT -> FACILITY (`Facility -> Facility`)
- **FK_REASON_CODE_FACILITY** — REASON_CODE -> FACILITY (`Facility -> Facility`)
- **FK_RECEIPT_DETAIL_FACILITY** — RECEIPT_DETAIL -> FACILITY (`Facility -> Facility`)
- **FK_RECEIPT_HEADER_FACILITY** — RECEIPT_HEADER -> FACILITY (`Facility -> Facility`)
- **FK_RECIPE_FACILITY** — RECIPE -> FACILITY (`Facility -> Facility`)
- **FK_REPLENISH_STRATEGY_FromFacility** — REPLENISH_STRATEGY -> FACILITY (`FromFacility -> Facility`)
- **FK_REPLENISH_STRATEGY_ToFacility** — REPLENISH_STRATEGY -> FACILITY (`ToFacility -> Facility`)
- **FK_RESOURCE_EVENT_HIERARCHY_FACILITY** — RESOURCE_EVENT_HIERARCHY -> FACILITY (`Facility -> Facility`)
- **FK_RESOURCE_FACILITY** — RESOURCE_ -> FACILITY (`Facility -> Facility`)
- **FK_RESOURCE_GROUP_PROCESSES_FACILITY** — GROUP_PROCESS -> FACILITY (`Facility -> Facility`)
- **FK_RESOURCE_MAINT_TASK_D_RESOURCE_FACILITY** — RESOURCE_MAINT_TASK_D -> FACILITY (`ResourceFacility -> Facility`)
- **FK_RESOURCE_MAINT_TASK_RESOURCE_FACILITY** — RESOURCE_MAINT_TASK -> FACILITY (`ResourceFacility -> Facility`)
- **FK_RESOURCE_PROCESSES_FACILITY** — RESOURCE_PROCESS -> FACILITY (`Facility -> Facility`)
- **FK_RESOURCE_WORK_SCHEDULE_FACILITY** — RESOURCE_WORK_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_SAFETY_INSTRUCTION_USAGE_FACILITY** — SAFETY_INSTRUCTION_USAGE -> FACILITY (`Facility -> Facility`)
- **FK_SAMPLE_FACILITY** — SAMPLE -> FACILITY (`Facility -> Facility`)
- **FK_SAMPLE_PLAN_DISPOSITION_FACILITY** — SAMPLE_PLAN_DISPOSITION -> FACILITY (`Facility -> Facility`)
- **FK_SAMPLE_PLAN_FACILITY** — SAMPLE_PLAN -> FACILITY (`OwnerFacility -> Facility`)
- **FK_SAMPLE_PLAN_FACILITY_FACILITY** — SAMPLE_PLAN_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_SEQUENCE__FACILITY** — SEQUENCE_ -> FACILITY (`Facility -> Facility`)
- **FK_SEQUENCE_SHIP_CONFIG_FACILITY** — SEQUENCE_SHIP_CONFIG -> FACILITY (`Facility -> Facility`)
- **FK_SPECIFICATION_FACILITY** — SPECIFICATION -> FACILITY (`Facility -> Facility`)
- **FK_SPECIFICATION_FACILITY_FACILITY** — SPECIFICATION_FACILITY -> FACILITY (`Facility -> Facility`)
- **FK_SPECIFICATION_FACILITY1** — SPECIFICATION -> FACILITY (`OwnerFacility -> Facility`)
- **FK_TASK_FACILITY** — TASK -> FACILITY (`Facility -> Facility`)
- **FK_TEAM_FACILITY** — TEAM -> FACILITY (`Facility -> Facility`)
- **FK_TEMP_BADGE_FACILITY** — TEMP_BADGE -> FACILITY (`Facility -> Facility`)
- **FK_TRANSACTION_CONCURRENCY_FACILITY** — TRANSACTION_CONCURRENCY -> FACILITY (`Facility -> Facility`)
- **FK_TRANSACTION_PRODUCT_INV_TYPE_FACILITY** — TRANSACTION_PRODUCT_INV_TYPE -> FACILITY (`Facility -> Facility`)
- **FK_UNIT_DOCUMENT_USAGE_FACILITY** — UNIT_DOCUMENT_USAGE -> FACILITY (`Facility -> Facility`)
- **FK_UNIT_USAGE_FACILITY** — UNIT_USAGE -> FACILITY (`Facility -> Facility`)
- **FK_WAREHOUSE_FACILITY** — WAREHOUSE -> FACILITY (`Facility -> Facility`)
- **FK_WEIGH_HEADER_FACILITY** — WEIGH_HEADER -> FACILITY (`Facility -> Facility`)
- **FK_WFM_SCHEDULE_FACILITY** — WFM_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_WIP_LINE_FACILITY** — WIP_LINE -> FACILITY (`OwnedFacility -> Facility`)
- **FK_WIP_ORDER_FACILITY** — WIP_ORDER -> FACILITY (`ReleasedFacility -> Facility`)
- **FK_WORK_ADD_ON_FACILITY** — WORK_ADD_ON -> FACILITY (`Facility -> Facility`)
- **FK_WORK_BREAK_FACILITY** — WORK_BREAK -> FACILITY (`Facility -> Facility`)
- **FK_WORK_CENTER_FACILITY** — WORK_CENTER -> FACILITY (`Facility -> Facility`)
- **FK_WORK_CENTER_WORK_SCHEDULE_FACILITY** — WORK_CENTER_WORK_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_WORKSTATION_FACILITY** — WORKSTATION -> FACILITY (`Facility -> Facility`)
- **FK_ZONE_FACILITY** — ZONE -> FACILITY (`Facility -> Facility`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_FACILITY_CLASSIFICATIONID** on `ClassificationID`
- **IF_FACILITY_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_FACILITY_DIVISION** on `Division`
- **IF_FACILITY_DSID** on `DSID`
- **IF_FACILITY_MOBILITY** on `MobilityID`
- **IF_FACILITY_PURCHASING_ORGANIZATION** on `PurchasingOrganization`
- **IF_FACILITY_ROTATING_WORK_SCHEDULE** on `RotatingWorkScheduleID`
- **IF_FACILITY_SALES_ORGANIZATION** on `SalesOrganization`
- **IF_FACILITY_UNIT** on `UnitID`
