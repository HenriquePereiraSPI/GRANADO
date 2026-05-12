# WORK_CENTER

**Database:** Operational

**Description:** This table lists the Work Centers in the system.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Building | NVARCHAR(40) | True |  | False | BUILDING | For future use. |
| CalendarID | INT(10,0) | True |  | False | CALENDAR | The ID of the calendar record with which this table is associated. |
| CapacityID | INT(10,0) | True |  | False | CAPACITY | For future use. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Link to CLASSIFICATION table. |
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | The codes system and its attributes. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | The company to which the Work Center belongs. |
| CostCenter | NVARCHAR(70) | True |  | False | COST_CENTER | The assignment of the Work Center to a cost center. |
| CostID | INT(10,0) | True |  | False | COST | For future use. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | The assignment of the Work Center to a Department. |
| Division | NVARCHAR(70) | True |  | False | COST_CENTER | The assignment of the Work Center to a division. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | The unique identifier of the domain manager and its attributes. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ExternalID | NVARCHAR(240) | True |  | False |  | The unique identifier from the external system. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The Facility that the Work Center is in. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| GLAccountID | INT(10,0) | True |  | False | GL_ACCOUNT | The link of a Work Center to a GL account. |
| LaborJurisdictionName | NVARCHAR(50) | True |  | False |  | For future use. |
| MaintenanceCalendarID | INT(10,0) | True |  | False | CALENDAR | The ID of the calendar used for maintenance Activities. |
| MobilityID | INT(10,0) | True |  | False | MOBILITY | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| PayRule | NVARCHAR(20) | True |  | False | PAY_RULE | The Pay Rule that will be used to define its schedule. |
| ProcurementID | INT(10,0) | True |  | False | PROCUREMENT | For future use. |
| PutAwayFacility | NVARCHAR(40) | True |  | False | WAREHOUSE | The default Facility to be used for receiving and/or putting away inventory received or produced in the Work Center. |
| PutAwayLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The default Warehouse Location to be used for receiving or putting away inventory that is received or produced in the Work Center. |
| PutAwayWarehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | The default Warehouse to be used for receiving or putting away inventory that is received or produced in the Work Center. |
| ReceiptFacility | NVARCHAR(40) | True |  | False | WAREHOUSE | For future use. |
| ReceiptLocationID | INT(10,0) | True |  | False | WAREHOUSE_LOCATION | The default Warehouse Location to be used for receiving inventory that is received or produced in the Work Center. |
| ReceiptWarehouse | NVARCHAR(10) | True |  | False | WAREHOUSE | The default Warehouse to be used for receiving inventory that is received or produced in the Work Center. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | For future use. |
| SpecificationID | INT(10,0) | True |  | False | SPECIFICATION | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnionName | NVARCHAR(50) | True |  | False |  | The name of the union. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WorkCenter | NVARCHAR(40) | False |  | True |  | The Work Center. |
| WorkCenterClassID | INT(10,0) | True |  | False | WORK_CENTER_CLASS | Unique identifier of the Work Center Class. |
| WorkCenterName | NVARCHAR(80) | True |  | False |  | Provide optional field to store Work Center name which is duplicable. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | For future use. |

## Primary Key

- **PK_WORK_CENTER** on `WorkCenter`

## Foreign Keys (this table -> other)

- **FK_WORK_CENTER_BUILDING** — WORK_CENTER -> BUILDING (`Building -> Building`)
- **FK_WORK_CENTER_CALENDAR** — WORK_CENTER -> CALENDAR (`CalendarID -> ID`)
- **FK_WORK_CENTER_CAPACITY** — WORK_CENTER -> CAPACITY (`CapacityID -> ID`)
- **FK_WORK_CENTER_CODE_DOMAIN_MANAGER** — WORK_CENTER -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_WORK_CENTER_CODE_FORMAT_TYPE** — WORK_CENTER -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_WORK_CENTER_COMPANY** — WORK_CENTER -> COMPANY (`Company -> Company`)
- **FK_WORK_CENTER_COST** — WORK_CENTER -> COST (`CostID -> ID`)
- **FK_WORK_CENTER_COST_CENTER** — WORK_CENTER -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_WORK_CENTER_DEPARTMENTS** — WORK_CENTER -> DEPARTMENT (`Department -> Department`)
- **FK_WORK_CENTER_DIVISION** — WORK_CENTER -> DIVISION (`Division -> Division`)
- **FK_WORK_CENTER_FACILITY** — WORK_CENTER -> FACILITY (`Facility -> Facility`)
- **FK_WORK_CENTER_GL_ACCOUNT** — WORK_CENTER -> GL_ACCOUNT (`GLAccountID -> ID`)
- **FK_WORK_CENTER_MAINTENANCE_CALENDAR** — WORK_CENTER -> CALENDAR (`MaintenanceCalendarID -> ID`)
- **FK_WORK_CENTER_MOBILITY** — WORK_CENTER -> MOBILITY (`MobilityID -> ID`)
- **FK_WORK_CENTER_PAY_RULE** — WORK_CENTER -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_WORK_CENTER_PROCUREMENT** — WORK_CENTER -> PROCUREMENT (`ProcurementID -> ID`)
- **FK_WORK_CENTER_RESOURCE_CLASS** — WORK_CENTER -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_WORK_CENTER_SPECIFICATION** — WORK_CENTER -> SPECIFICATION (`SpecificationID -> ID`)
- **FK_WORK_CENTER_UNIT** — WORK_CENTER -> UNIT (`UnitID -> ID`)
- **FK_WORK_CENTER_WAREHOUSE** — WORK_CENTER -> WAREHOUSE (`ReceiptFacility, ReceiptWarehouse -> Facility, Warehouse`)
- **FK_WORK_CENTER_WAREHOUSE_LOCATION** — WORK_CENTER -> WAREHOUSE_LOCATION (`ReceiptLocationID -> ID`)
- **FK_WORK_CENTER_WAREHOUSE_LOCATION1** — WORK_CENTER -> WAREHOUSE_LOCATION (`PutAwayLocationID -> ID`)
- **FK_WORK_CENTER_WAREHOUSE1** — WORK_CENTER -> WAREHOUSE (`PutAwayFacility, PutAwayWarehouse -> Facility, Warehouse`)
- **FK_WORK_CENTER_WORK_CENTER_CLASS** — WORK_CENTER -> WORK_CENTER_CLASS (`WorkCenterClassID -> ID`)
- **FK_WORK_CENTER_WORK_LOAD** — WORK_CENTER -> WORK_LOAD (`WorkLoadID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_DETAIL_WORK_CENTER** — ALERT_DETAIL -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_ATTENDANCE_WORK_CENTER** — ATTENDANCE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_CAPA_LINK_WORK_CENTER** — CAPA_LINK -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_CHECK_LIST_CHECK_POINT_WORK_CENTER** — CHECK_LIST_CHECK_POINT -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_CODE_CLASS_NUMBER_WORK_CENTER** — CODE_CLASS_NUMBER -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_CODE_SERIAL_NUMBER_WORK_CENTER** — CODE_SERIAL_NUMBER -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_CODE_ULC_WORK_CENTER** — CODE_ULC -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_COST_DETAIL_WORK_CENTER** — COST_DETAIL -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_COST_WORK_CENTER** — COST -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_COUNT_PROC_LCNF_WORKC_WORKC** — COUNT_PROC_LCONF_WORKC -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_DB_WORKSPACE_WORK_CENTER** — DB_WORKSPACE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_DISPOSITION_LINE_WORK_CENTER** — DISPOSITION_LINE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_EMPLOYEE_FACILITY_XREF_WORK_CENTER** — EMPLOYEE_FACILITY -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_EMPLOYEE_WORK_CENTER_WORK_CENTER** — EMPLOYEE_WORK_CENTER -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_CENTER** — EMPLOYEE_WORK_SCHEDULE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_EPC_TAG_EPC_WORK_CENTER** — EPC_TAG -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_GENEALOGY_DETAIL_WORK_CENTER** — GENEALOGY_DETAIL -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_GENEALOGY_WORK_CENTER** — GENEALOGY -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_INSPECTION_DETERMINATION_WORK_CENTER** — INSPECTION_DETERMINATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_INSPECTION_LINE_WORK_CENTER** — INSPECTION_LINE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_KANBAN_CARD_FromWorkCenter** — KANBAN_CARD -> WORK_CENTER (`FromWorkcenter -> WorkCenter`)
- **FK_KANBAN_CARD_ToWorkCenter** — KANBAN_CARD -> WORK_CENTER (`ToWorkcenter -> WorkCenter`)
- **FK_LABOR_WORK_CENTER1** — LABOR -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_LITE_LABOR_WORK_CENTER** — LITE_LABOR -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_LOCATION_PARTNER_WORK_CENTER** — LOCATION_PARTNER -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_MAINT_TEMPLATE_TASK_WORK_CENTER** — MAINT_TEMPLATE_TASK -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_NOTE_WORK_CENTER** — NOTE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_PACKAGING_INSTR_USAGE_WORK_CENTER** — PACKAGING_INSTR_USAGE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_PRODUCT_ROUTING_WORK_CENTER** — PRODUCT_ROUTING -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_PRODUCT_ROUTING_WORK_CENTER1** — PRODUCT_ROUTING -> WORK_CENTER (`ReworkWorkCenter -> WorkCenter`)
- **FK_PRODUCTION_FACT_WORK_CENTER** — PRODUCTION_FACT -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_PRODUCTION_VERSION_WORK_CENTER** — PRODUCTION_VERSION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_PROJECT_WORK_CENTER** — PROJECT -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_QUALITY_GATE_WORK_CENTER** — QUALITY_GATE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_REPLENISH_STRATEGY_FromWorkCenter** — REPLENISH_STRATEGY -> WORK_CENTER (`FromWorkcenter -> WorkCenter`)
- **FK_REPLENISH_STRATEGY_ToWorkCenter** — REPLENISH_STRATEGY -> WORK_CENTER (`ToWorkCenter -> WorkCenter`)
- **FK_RESOURCE_EVENT_HIERARCHY_WORK_CENTER** — RESOURCE_EVENT_HIERARCHY -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_RESOURCE_LABOR_WORK_CENTER** — RESOURCE_LABOR -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_RESOURCE_MAINT_TASK_WORK_CENTER** — RESOURCE_MAINT_TASK -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_RESOURCE_ROUTING_WORK_CENTER** — RESOURCE_ROUTING -> WORK_CENTER (`ReworkWorkCenter -> WorkCenter`)
- **FK_RESOURCE_ROUTING_WORK_CENTER1** — RESOURCE_ROUTING -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_RESOURCE_WORK_CENTER** — RESOURCE_ -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_ROUTE_OPERATIONS_WORK_CENTER** — PROCESS_OPERATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_ROUTE_OPERATIONS_WORK_CENTER1** — PROCESS_OPERATION -> WORK_CENTER (`ReworkWorkCenter -> WorkCenter`)
- **FK_SEQUENCE_QUEUE_ITEM_WORK_CENTER** — SEQUENCE_QUEUE_ITEM -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_SEQUENCE_QUEUE_WORK_CENTER** — SEQUENCE_QUEUE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_SUPERVISOR_WORK_CENTERS_WORK_CENTER** — SUPERVISOR_WORK_CENTER -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_TASK_WORK_CENTER** — TASK -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_UNIT_DOCUMENT_USAGE_WORK_CENTER** — UNIT_DOCUMENT_USAGE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_UNIT_USAGE_WORKCENTER** — UNIT_USAGE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WAREHOUSE_LOCATION_WORK_CENTER** — WAREHOUSE_LOCATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WIP_LINE_WORK_CENTER_WORK_CENTER** — WIP_LINE_WORK_CENTER -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WIP_OPERATION_WORK_CENTER** — WIP_OPERATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_ADDRESS_WORK_CENTER** — WORK_CENTER_ADDRESS -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_CONTACTS_WORK_CENTER1** — WORK_CENTER_CONTACT -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_GROUP_WORK_CENTER** — WORK_CENTER_GROUP -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_RELATION_WORK_CENTER1** — WORK_CENTER_RELATION -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_RELATION_WORK_CENTER2** — WORK_CENTER_RELATION -> WORK_CENTER (`RelatedWorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_REQ_RESOURCE_WORK_CENTER** — WORK_CENTER_REQ_RESOURCE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_RESOURCE_LOAD_WORK_CENTER** — WORK_CENTER_RESOURCE_LOAD -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_ROTATING_SCHEDULE_WORK_CENTER** — WORK_CENTER_ROTATING_SCHEDULE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_WORK_SCHEDULE_WORK_CENTER** — WORK_CENTER_WORK_SCHEDULE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_WORK_CENTER_CLASSIFICATIONID** on `ClassificationID`
- **IF_WORK_CENTER_BUILDING** on `Building`
- **IF_WORK_CENTER_CAPACITY** on `CapacityID`
- **IF_WORK_CENTER_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_WORK_CENTER_COST** on `CostID`
- **IF_WORK_CENTER_COST_CENTER** on `Division, CostCenter`
- **IF_WORK_CENTER_DSID** on `DSID`
- **IF_WORK_CENTER_GL_ACCOUNT** on `GLAccountID`
- **IF_WORK_CENTER_MOBILITY** on `MobilityID`
- **IF_WORK_CENTER_PAY_RULE** on `PayRule, Facility`
- **IF_WORK_CENTER_PROCUREMENT** on `ProcurementID`
- **IF_WORK_CENTER_RESOURCE_CLASS** on `ResourceClassID`
- **IF_WORK_CENTER_SPECIFICATION** on `SpecificationID`
- **IF_WORK_CENTER_UNIT** on `UnitID`
- **IF_WORK_CENTER_WORK_CENTER_CLASS** on `WorkCenterClassID`
- **IF_WORK_CENTER_WORK_LOAD** on `WorkLoadID`
