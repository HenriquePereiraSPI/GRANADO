# DEPARTMENT

**Database:** Operational

**Description:** Store a valid list of available Departments in the system. Departments can be a groups of people or a a part of an organization.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarID | INT(10,0) | True |  | False | CALENDAR | ID of the Calendar Record this table is associated with. |
| CodeSystemType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | Codes System and its Attribute's unique identifier. |
| Company | NVARCHAR(40) | True |  | False | COMPANY | Company the Department belongs to. |
| CostCenter | NVARCHAR(70) | True |  | False | COST_CENTER | Assignment of a Department to a Cost Center. |
| Department | NVARCHAR(40) | False |  | True |  | Department as part of the organization structure. |
| Division | NVARCHAR(70) | True |  | False | COST_CENTER | Assignment of a Department to a Division. |
| DomainManagerID | INT(10,0) | True |  | False | CODE_DOMAIN_MANAGER | Domain Manager and its Attribute's unique identifier. |
| ExternalID | NVARCHAR(240) | True |  | False |  | This column store unique identifier from external system. |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | Assignment of a Department to a Facility. |
| FormatType | SMALLINT(5,0) | True |  | False | CODE_FORMAT_TYPE | For future use. |
| LaborJurisdictionName | NVARCHAR(50) | True |  | False |  | For future use. |
| MaintenanceCalendarID | INT(10,0) | True |  | False | CALENDAR | ID of the Calendar used for maintenance activities. |
| MobilityID | INT(10,0) | True |  | False | MOBILITY | For future use. |
| ObjectClass | NVARCHAR(40) | True |  | False |  | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnionName | NVARCHAR(50) | True |  | False |  | Name of the Union. |

## Primary Key

- **PK_DEPARTMENTS** on `Department`

## Foreign Keys (this table -> other)

- **FK_DEPARTMENT_CALENDAR** — DEPARTMENT -> CALENDAR (`CalendarID -> ID`)
- **FK_DEPARTMENT_CODE_DOMAIN_MANAGER** — DEPARTMENT -> CODE_DOMAIN_MANAGER (`DomainManagerID -> ID`)
- **FK_DEPARTMENT_CODE_FORMAT_TYPE** — DEPARTMENT -> CODE_FORMAT_TYPE (`CodeSystemType, FormatType -> CodeSystemType, FormatType`)
- **FK_DEPARTMENT_COMPANY** — DEPARTMENT -> COMPANY (`Company -> Company`)
- **FK_DEPARTMENT_COST_CENTER** — DEPARTMENT -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_DEPARTMENT_DIVISION** — DEPARTMENT -> DIVISION (`Division -> Division`)
- **FK_DEPARTMENT_MAINTENANCE_CALENDAR** — DEPARTMENT -> CALENDAR (`MaintenanceCalendarID -> ID`)
- **FK_DEPARTMENT_MOBILITY** — DEPARTMENT -> MOBILITY (`MobilityID -> ID`)
- **FK_DEPARTMENTS_FACILITY** — DEPARTMENT -> FACILITY (`Facility -> Facility`)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_DEPARTMENT** — ATTENDANCE -> DEPARTMENT (`Department -> Department`)
- **FK_CAPA_LINK_DEPARTMENT** — CAPA_LINK -> DEPARTMENT (`Department -> Department`)
- **FK_CODE_CLASS_NUMBER_DEPARTMENT** — CODE_CLASS_NUMBER -> DEPARTMENT (`Department -> Department`)
- **FK_CODE_SERIAL_NUMBER_DEPARTMENT** — CODE_SERIAL_NUMBER -> DEPARTMENT (`Department -> Department`)
- **FK_CODE_ULC_DEPARTMENT** — CODE_ULC -> DEPARTMENT (`Department -> Department`)
- **FK_COUNT_PROC_LCNF_DEPT_DEPT** — COUNT_PROC_LCONF_DEPT -> DEPARTMENT (`Department -> Department`)
- **FK_DEPARTMENT_ADDRESSES_DEPARTMENTS** — DEPARTMENT_ADDRESS -> DEPARTMENT (`Department -> Department`)
- **FK_DEPARTMENT_CONTACTS_DEPARTMENTS** — DEPARTMENT_CONTACT -> DEPARTMENT (`Department -> Department`)
- **FK_DEPARTMENT_GROUP_DEPARTMENT** — DEPARTMENT_GROUP -> DEPARTMENT (`Department -> Department`)
- **FK_EMPLOYEE_DEPARTMENT** — EMPLOYEE -> DEPARTMENT (`Department -> Department`)
- **FK_INSPECTION_DETERMINATION_DEPARTMENT** — INSPECTION_DETERMINATION -> DEPARTMENT (`Department -> Department`)
- **FK_KANBAN_CARD_FromDepartment** — KANBAN_CARD -> DEPARTMENT (`FromDepartment -> Department`)
- **FK_KANBAN_CARD_ToDepartment** — KANBAN_CARD -> DEPARTMENT (`ToDepartment -> Department`)
- **FK_LABOR_DEPARTMENT** — LABOR -> DEPARTMENT (`Department -> Department`)
- **FK_LOCATION_PARTNER_DEPARTMENT** — LOCATION_PARTNER -> DEPARTMENT (`Department -> Department`)
- **FK_PACKAGING_INSTR_USAGE_DEPARTMENT** — PACKAGING_INSTR_USAGE -> DEPARTMENT (`Department -> Department`)
- **FK_PARTNER_RELATIONSHIP_DEPARTMENT** — PARTNER_RELATIONSHIP -> DEPARTMENT (`Department -> Department`)
- **FK_PRODUCTION_FACT_DEPARTMENT** — PRODUCTION_FACT -> DEPARTMENT (`Department -> Department`)
- **FK_PROJECT_DEPARTMENT** — PROJECT -> DEPARTMENT (`Department -> Department`)
- **FK_REASON_CODES_DEPARTMENTS** — REASON_CODE -> DEPARTMENT (`Department -> Department`)
- **FK_REPLENISH_STRATEGY_FromDepartment** — REPLENISH_STRATEGY -> DEPARTMENT (`FromDepartment -> Department`)
- **FK_REPLENISH_STRATEGY_ToDepartment** — REPLENISH_STRATEGY -> DEPARTMENT (`ToDepartment -> Department`)
- **FK_RESOURCE_DEPARTMENT** — RESOURCE_ -> DEPARTMENT (`Department -> Department`)
- **FK_SAFETY_INSTRUCTION_USAGE_DEPARTMENT** — SAFETY_INSTRUCTION_USAGE -> DEPARTMENT (`Department -> Department`)
- **FK_SUPERVISOR_DEPARTMENTS_DEPARTMENTS** — SUPERVISOR_DEPARTMENT -> DEPARTMENT (`Department -> Department`)
- **FK_UNIT_DOCUMENT_USAGE_DEPARTMENT** — UNIT_DOCUMENT_USAGE -> DEPARTMENT (`Department -> Department`)
- **FK_UNIT_USAGE_DEPARTMENT** — UNIT_USAGE -> DEPARTMENT (`Department -> Department`)
- **FK_WAREHOUSE_DEPARTMENT** — WAREHOUSE -> DEPARTMENT (`Department -> Department`)
- **FK_WAREHOUSE_LOCATION_DEPARTMENT** — WAREHOUSE_LOCATION -> DEPARTMENT (`Department -> Department`)
- **FK_WORK_ADD_ON_DEPARTMENT** — WORK_ADD_ON -> DEPARTMENT (`Department -> Department`)
- **FK_WORK_CENTER_DEPARTMENTS** — WORK_CENTER -> DEPARTMENT (`Department -> Department`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DEPARTMENT_CODE_DOMAIN_MANAGER** on `DomainManagerID`
- **IF_DEPARTMENT_COST_CENTER** on `Division, CostCenter`
- **IF_DEPARTMENT_MOBILITY** on `MobilityID`
