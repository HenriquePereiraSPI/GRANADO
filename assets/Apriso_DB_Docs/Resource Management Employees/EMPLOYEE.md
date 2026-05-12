# EMPLOYEE

**Database:** Operational

**Description:** This table stores all the information concering an Employee. The Employee is a specialization off the RESOURCE table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AddressID | INT(10,0) | True |  | False | ADDRESS | The link to the address record. |
| CitizenshipCountry | NVARCHAR(3) | True |  | False | COUNTRY | The citizenship of the Employee. |
| ContactID | INT(10,0) | True |  | False | CONTACT | The link between the EMPLOYEE table and the CONTACT table used to provide contact information about the Employee. |
| CostCenter | NVARCHAR(70) | True |  | False | COST_CENTER | The cost center assigned to the Employee. |
| CostCenterDivision | NVARCHAR(70) | True |  | False | COST_CENTER | For future use. |
| CountryOfBirth | NVARCHAR(3) | True |  | False | COUNTRY | Country of birth. |
| CurrentCountry | NVARCHAR(3) | True |  | False | COUNTRY | The country where the Employee is currently residing. |
| DashboardBusinessObjectAlias | NVARCHAR(255) | True |  | False |  | The default FlexPart that is displayed after logging in. |
| DateOfBirth | DATETIME | True |  | False |  | Date of birth. |
| DefaultFacility | NVARCHAR(40) | True |  | False | EMPLOYEE_TEAM | The default Facility of the Employee. |
| DefaultRoleID | INT(10,0) | True |  | False | ROLE | For future use. |
| DefaultTeam | NVARCHAR(40) | True |  | False | EMPLOYEE_TEAM | For future use. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | The Department to which the Employee is assigned. |
| EarningsCurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | The earnings currency code of the Employee (references EARNINGSCURRENCYCODE). |
| EmployeeClass | SMALLINT(5,0) | True |  | False | EMPLOYEE_CLASS | The class of the Employee (Exempt, Non-Exempt, and Hourly Non-Exempt). |
| EmployeeNo | NVARCHAR(50) | False |  | False |  | The Employee number of the Employee. |
| EmployeeType | SMALLINT(5,0) | True |  | False | EMPLOYEE_TYPE | The type of the Employee (Regular, Temporary, and Template). |
| EmployeeValidDate | DATETIME | False | (getutcdate()) | False |  | The date when the Employee becomes valid. |
| ExternalLogin | NVARCHAR(850) | True |  | False |  | For future use. |
| FamilyName | NVARCHAR(50) | True |  | False |  | The family name (last name) of the Employee. |
| ForcePasswordChange | BIT | True |  | False |  | The force password change. |
| GivenName | NVARCHAR(50) | True |  | False |  | The given name of the Employee. |
| HireDate | DATETIME | True |  | False |  | The date when the Employee was hired. |
| ID | INT(10,0) | False |  | True | EMPLOYEE_TEAM | Unique identifier of a record (key) in a table. |
| ImmigrationStatus | NVARCHAR(70) | True |  | False |  | The immigration status of the Employee (references IMMIGRATIONSTATUS). |
| LaborJurisdictionName | NVARCHAR(70) | True |  | False |  | The labor jurisdiction of the Employee (references LABORJURISDICTIONNAME). |
| LastFacility | NVARCHAR(40) | True |  | False | FACILITY | The last Facility the Employee was logged into. |
| LastSignOffDate | DATETIME | True | (getutcdate()) | False |  | The last date and time that the Employee signed out of of the Portal. |
| LastSignOnDate | DATETIME | True | (getutcdate()) | False |  | The last date and time that the Employee signed in to the Portal. |
| LoginCode | NVARCHAR(1024) | True |  | False |  | The login code. |
| LoginExpirationDate | DATETIME | True | (getutcdate()) | False |  | The date and time when the login name becomes invalid. |
| LoginLockoutDate | DATETIME | True |  | False |  | The date and time when an account is locked out because of invalid login attempts. |
| LoginName | NVARCHAR(50) | False |  | False |  | The login name of the Employee. |
| MaximumEquipmentLogins | INT(10,0) | True |  | False |  | The maximum logins for equipments. |
| MiddleName | NVARCHAR(50) | True |  | False |  | The middle name of the Employee. |
| Name | NVARCHAR(100) | True |  | False |  | The name of the entity. |
| Password | NVARCHAR(256) | True |  | False |  | The user password (encrypted). |
| PasswordLastChangeDate | DATETIME | True | (getutcdate()) | False |  | The date when the passward was last modified. |
| PictureUrl | NVARCHAR(2000) | True |  | False |  | The URL of the image assigned to the Employee intended to be used as his/her portrait. |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | The Resource ID. |
| SpokenLanguageID | INT(10,0) | True | (1033) | False |  | The ID of the language spoken by the Employee. |
| TerminationDate | DATETIME | True |  | False |  | The date and time when the Employee was terminated. |
| Title | NVARCHAR(80) | True |  | False |  | The label describing the Employee's role, official position, or professional qualification. |
| TrackAttendanceFlag | BIT | True |  | False |  | Indicates if the Employee is attendance-tracked or not. |
| TrackLaborFlag | BIT | True |  | False |  | Indicates if the Employee is labor tracked or not. |
| TrackResourceLaborFlag | BIT | True |  | False |  | For future use. |
| UnionName | NVARCHAR(70) | True |  | False |  | The name of the union. |
| WrittenLanguageID | INT(10,0) | True | (1033) | False |  | The ID of the language written by the Employee. |

## Primary Key

- **PK_EMPLOYEE** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_ADDRESS** — EMPLOYEE -> ADDRESS (`AddressID -> ID`)
- **FK_EMPLOYEE_CONTACT** — EMPLOYEE -> CONTACT (`ContactID -> ID`)
- **FK_EMPLOYEE_COST_CENTER** — EMPLOYEE -> COST_CENTER (`CostCenterDivision, CostCenter -> Division, CostCenter`)
- **FK_EMPLOYEE_COUNTRY_1** — EMPLOYEE -> COUNTRY (`CurrentCountry -> CountryCode`)
- **FK_EMPLOYEE_COUNTRY_2** — EMPLOYEE -> COUNTRY (`CitizenshipCountry -> CountryCode`)
- **FK_EMPLOYEE_COUNTRY_BIRTH** — EMPLOYEE -> COUNTRY (`CountryOfBirth -> CountryCode`)
- **FK_EMPLOYEE_CURRENCY** — EMPLOYEE -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_EMPLOYEE_DEPARTMENT** — EMPLOYEE -> DEPARTMENT (`Department -> Department`)
- **FK_EMPLOYEE_EMPLOYEE_CLASS** — EMPLOYEE -> EMPLOYEE_CLASS (`EmployeeClass -> EmployeeClass`)
- **FK_EMPLOYEE_EMPLOYEE_TEAM** — EMPLOYEE -> EMPLOYEE_TEAM (`ID, DefaultFacility, DefaultTeam -> EmployeeID, Facility, Team`)
- **FK_EMPLOYEE_EMPLOYEE_TYPE** — EMPLOYEE -> EMPLOYEE_TYPE (`EmployeeType -> EmployeeType`)
- **FK_EMPLOYEE_FACILITY** — EMPLOYEE -> FACILITY (`DefaultFacility -> Facility`)
- **FK_EMPLOYEE_FACILITY_1** — EMPLOYEE -> FACILITY (`LastFacility -> Facility`)
- **FK_EMPLOYEE_RESOURCE** — EMPLOYEE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_EMPLOYEE_ROLE** — EMPLOYEE -> ROLE (`DefaultRoleID -> ID`)

## Referenced By (other tables -> this)

- **FK_ALERT_RECIPIENT_EMPLOYEE** — ALERT_RECIPIENT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ALERT_RESPONSE_EMPLOYEE** — ALERT_RESPONSE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ATTENDANCE_APPROVAL_EMPLOYEE** — ATTENDANCE_APPROVAL -> EMPLOYEE (`ApprovalEmployeeID -> ID`)
- **FK_ATTENDANCE_EMPLOYEE** — ATTENDANCE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_AUDIT_EVENT_EMPLOYEE** — AUDIT_EVENT -> EMPLOYEE (`PerformedBy -> ID`)
- **FK_CALENDAR_DAY_DESCRIPTION_EMPLOYEE** — CALENDAR_DAY_DESCRIPTION -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_CAMPAIGNS_EMPLOYEE** — CAMPAIGN -> EMPLOYEE (`LockedByEmployeeID -> ID`)
- **FK_CAPA_EMPLOYEE_1** — CAPA -> EMPLOYEE (`OwnerEmployeeID -> ID`)
- **FK_CAPA_EMPLOYEE_2** — CAPA -> EMPLOYEE (`AssignedEmployeeID -> ID`)
- **FK_CAPA_TASK_STATE_EMPLOYEE** — CAPA_TASK_STATE -> EMPLOYEE (`AssignedEmployeeID -> ID`)
- **FK_CHARACTERISTIC_REVISION_EMPLOYEE** — CHARACTERISTIC_REVISION -> EMPLOYEE (`OwnerEmployeeID -> ID`)
- **FK_CHECK_LIST_HISTORY_EMPLOYEE** — CHECK_LIST_HISTORY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_CHECK_POINT_HISTORY_EMPLOYEE** — CHECK_POINT_HISTORY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_COUNT_CONTAINER_EMPLOYEE** — COUNT_CONTAINER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_COUNT_CONTAINER_EMPLOYEE1** — COUNT_CONTAINER -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_COUNT_DOCUMENT_FLOW_EMPLOYEE** — COUNT_DOCUMENT_FLOW -> EMPLOYEE (`StartEmployeeID -> ID`)
- **FK_DB_WORKSPACE_EMPLOYEE** — DB_WORKSPACE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE** — DISPOSITION_CONTAINER -> EMPLOYEE (`SampleStartEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE1** — DISPOSITION_CONTAINER -> EMPLOYEE (`SampleFinishEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE2** — DISPOSITION_CONTAINER -> EMPLOYEE (`TestingStartEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE3** — DISPOSITION_CONTAINER -> EMPLOYEE (`TestingFinishEmployeeID -> ID`)
- **FK_DISPOSITION_CONTAINER_EMPLOYEE4** — DISPOSITION_CONTAINER -> EMPLOYEE (`ReturnedOrDestroyedEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE** — DISPOSITION -> EMPLOYEE (`MRBFinishEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE_INSPECTOR** — DISPOSITION -> EMPLOYEE (`EvaluationInspectorID -> ID`)
- **FK_DISPOSITION_EMPLOYEE1** — DISPOSITION -> EMPLOYEE (`MRBStartEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE2** — DISPOSITION -> EMPLOYEE (`TestingFinishEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE3** — DISPOSITION -> EMPLOYEE (`TestingStartEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE4** — DISPOSITION -> EMPLOYEE (`SampleFinishEmployeeID -> ID`)
- **FK_DISPOSITION_EMPLOYEE5** — DISPOSITION -> EMPLOYEE (`SampleStartEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE** — DISPOSITION_LINE -> EMPLOYEE (`SampleStartEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE_INSPECTOR** — DISPOSITION_LINE -> EMPLOYEE (`EvaluationInspectorID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE1** — DISPOSITION_LINE -> EMPLOYEE (`SampleFinishEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE2** — DISPOSITION_LINE -> EMPLOYEE (`TestingStartEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE3** — DISPOSITION_LINE -> EMPLOYEE (`TestingFinishEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE4** — DISPOSITION_LINE -> EMPLOYEE (`MRBStartEmployeeID -> ID`)
- **FK_DISPOSITION_LINE_EMPLOYEE5** — DISPOSITION_LINE -> EMPLOYEE (`MRBFinishEmployeeID -> ID`)
- **FK_DISPOSITION_READING_EMPLOYEE** — DISPOSITION_READING -> EMPLOYEE (`InspectorID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE** — DISPOSITION_SAMPLE -> EMPLOYEE (`SampleStartEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE1** — DISPOSITION_SAMPLE -> EMPLOYEE (`SampleFinishEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE2** — DISPOSITION_SAMPLE -> EMPLOYEE (`TestingStartEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE3** — DISPOSITION_SAMPLE -> EMPLOYEE (`TestingFinishEmployeeID -> ID`)
- **FK_DISPOSITION_SAMPLE_EMPLOYEE4** — DISPOSITION_SAMPLE -> EMPLOYEE (`ReturnedOrDestroyedEmployeeID -> ID`)
- **FK_DISPOSITION_TEST_EMPLOYEE** — DISPOSITION_TEST -> EMPLOYEE (`InspectorID -> ID`)
- **FK_DISPOSITION_TEST_EMPLOYEE_INSPECTOR** — DISPOSITION_TEST -> EMPLOYEE (`EvaluationInspectorID -> ID`)
- **FK_DISPOSITION_TEST_SAMPLE_EMPLOYEE** — DISPOSITION_TEST_SAMPLE -> EMPLOYEE (`InspectorID -> ID`)
- **FK_ECA_EMPLOYEE_EMPLOYEE** — ECA_EMPLOYEE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ECA_EMPLOYEE_HISTORY_EMPLOYEE** — ECA_EMPLOYEE_HISTORY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ECA_OBJECT_EMPLOYEE** — ECA_OBJECT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ECA_OBJECT_HISTORY_EMPLOYEE** — ECA_OBJECT_HISTORY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ECM_ORDER_EMPLOYEE_ASSIGNEDTO** — ECM_ORDER -> EMPLOYEE (`AssignedTo -> ID`)
- **FK_ECM_ORDER_EMPLOYEE_FOUNDBY** — ECM_ORDER -> EMPLOYEE (`FoundBy -> ID`)
- **FK_EMPLOYEE_CALENDAR_EMPLOYEE** — EMPLOYEE_CALENDAR -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_CALL_IN_SCHEDULE_EMPLOYEE** — EMPLOYEE_CALL_IN_SCHEDULE -> EMPLOYEE (`SupervisorID -> ID`)
- **FK_EMPLOYEE_CALL_IN_SCHEDULE_EMPLOYEE1** — EMPLOYEE_CALL_IN_SCHEDULE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_CITIZENSHIP_EMPLOYEE** — EMPLOYEE_CITIZENSHIP -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_DEFAULT_XREF_EMPLOYEE** — EMPLOYEE_DEFAULT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_EARN_CODE_CONVERSION_EMPLOYEE** — EMPLOYEE_EARN_CODE_CONVERSION -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_EARNED_HOURS_EMPLOYEE** — EMPLOYEE_EARNED_HOURS -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_EQUIPMENT_LICENSE_EMPLOYEE** — EMPLOYEE_EQUIPMENT_LICENSE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_FACILITY_XREF_EMPLOYEE** — EMPLOYEE_FACILITY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_GROUP_EMPLOYEE** — EMPLOYEE_GROUP -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_GROUP_ROLE_GROUP_EMPLOYEE** — EMPLOYEE_GROUP_ROLE_GROUP -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_HAZMAT_EXPOSURE_EMPLOYEE** — EMPLOYEE_HAZMAT_EXPOSURE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_PB_PROJECT_REVISION_CONTEXT** — PB_PROJECT_REVISION_CONTEXT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_PERSONALIZATION_EMPLOYEE** — EMPLOYEE_PERSONALIZATION -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_PRINTER_EMPLOYEE** — EMPLOYEE_PRINTER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_PRIVILEGE_XREF_EMPLOYEE** — EMPLOYEE_PRIVILEGE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_ROLE_EMPLOYEE** — EMPLOYEE_ROLE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_ROLE_GROUP_RELATION_EMPLOYEE** — EMPLOYEE_ROLE_GROUP_RELATION -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_SKILL_XREF_EMPLOYEE** — EMPLOYEE_SKILL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_TEMPORARY_BADGE_EMPLOYEE** — EMPLOYEE_TEMP_BADGE -> EMPLOYEE (`AssignorID -> ID`)
- **FK_EMPLOYEE_TEMPORARY_BADGES_EMPLOYEE** — EMPLOYEE_TEMP_BADGE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_WORK_CENTER_EMPLOYEE** — EMPLOYEE_WORK_CENTER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_WORK_SCHEDULE_EMPLOYEE1** — EMPLOYEE_WORK_SCHEDULE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ENTITY_LOCK_EMPLOYEE** — ENTITY_LOCK -> EMPLOYEE (`LockingEmployeeID -> ID`)
- **FK_EQUIPMENT_EMPLOYEE** — EQUIPMENT -> EMPLOYEE (`CurrentEmployeeID -> ID`)
- **FK_EQUIPMENT_EMPLOYEE_D** — EQUIPMENT_D -> EMPLOYEE (`CurrentEmployeeID -> ID`)
- **FK_INVENTORY_COUNT_CONTAINER_EMPLOYEE** — INVENTORY_COUNT_CONTAINER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_INVENTORY_COUNT_CONTAINER_EMPLOYEE1** — INVENTORY_COUNT_CONTAINER -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_INVENTORY_COUNT_EMPLOYEE** — INVENTORY_COUNT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_INVENTORY_COUNT_EMPLOYEE1** — INVENTORY_COUNT -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_INVENTORY_COUNT_SERIAL_NO_EMPLOYEE** — INVENTORY_COUNT_SERIAL_NO -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_INVENTORY_COUNT_SERIAL_NO_EMPLOYEE1** — INVENTORY_COUNT_SERIAL_NO -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_KANBAN_CARD_EmployeeID** — KANBAN_CARD -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_KPI_TOLERANCE_EMPLOYEE** — KPI_TOLERANCE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_LABOR_APPROVAL_EMPLOYEE** — LABOR_APPROVAL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_LABOR_DETAIL_APPROVAL_EMPLOYEE** — LABOR_DETAIL_APPROVAL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_LABOR_EMPLOYEE** — LABOR -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_LITE_LABOR_EMPLOYEE** — LITE_LABOR -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_EMPLOYEE** — MAINT_TEMPLATE_TASK -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_NOTE_EMPLOYEE** — NOTE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_NOTICE_ACKNOWLEDGEMENT_EMPLOYEE** — NOTICE_ACKNOWLEDGEMENT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_NOTICE_ASSIGNMENT_EMPLOYEE** — NOTICE_ASSIGNMENT -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_NOTICE_EMPLOYEE_ACTIVE** — NOTICE -> EMPLOYEE (`ActiveEmployeeID -> ID`)
- **FK_NOTICE_EMPLOYEE_CLOSED** — NOTICE -> EMPLOYEE (`ClosedEmployeeID -> ID`)
- **FK_NOTIFICATION_DEVICE_REGISTRATION_EMPLOYEE** — NOTIFICATION_DEVICE_REGISTRATION -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ORDER_HEADER_SEAL_EMPLOYEE** — ORDER_HEADER_SEAL -> EMPLOYEE (`EmployeeIDSealer -> ID`)
- **FK_ORDER_HEADER_SEAL_EMPLOYEE1** — ORDER_HEADER_SEAL -> EMPLOYEE (`EmployeeIDSealBreaker -> ID`)
- **FK_ORDER_SEAL_EMPLOYEE** — ORDER_SEAL -> EMPLOYEE (`SealIssuerEmployeeID -> ID`)
- **FK_ORDER_SEAL_EMPLOYEE1** — ORDER_SEAL -> EMPLOYEE (`BrokenByEmployeeID -> ID`)
- **FK_OVERTIME_OFFERED_ACCEPTED_EMPLOYEE** — OVERTIME_OFFER_ACCEPT -> EMPLOYEE (`SupervisorID -> ID`)
- **FK_PERSONALIZATION_EMPLOYEE** — PERSONALIZATION -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_REPLENISH_STRATEGY_EmployeeID** — REPLENISH_STRATEGY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_RESOURCE_LABOR_APPROVAL_EMPLOYEE** — RESOURCE_LABOR_APPROVAL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_RESOURCE_LABOR_DETAIL_APPROVAL_EMPLOYEE** — RESOURCE_LABOR_DETAIL_APPROVAL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_RESOURCE_LABOR_DETAIL_EMPLOYEE** — RESOURCE_LABOR_DETAIL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_RESOURCE_LABOR_EMPLOYEE** — RESOURCE_LABOR -> EMPLOYEE (`StartedEmployeeID -> ID`)
- **FK_RESOURCE_LABOR_EMPLOYEE1** — RESOURCE_LABOR -> EMPLOYEE (`EndEmployeeID -> ID`)
- **FK_RESOURCE_MAINT_TASK_EMPLOYEE** — RESOURCE_MAINT_TASK -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_SECURITY_LOG_EMPLOYEE1** — SECURITY_LOG -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_SUPERVISOR_DEPARTMENTS_EMPLOYEE** — SUPERVISOR_DEPARTMENT -> EMPLOYEE (`SupervisorID -> ID`)
- **FK_SUPERVISOR_EMPLOYEES_EMPLOYEE** — SUPERVISOR_EMPLOYEE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_SUPERVISOR_EMPLOYEES_EMPLOYEE1** — SUPERVISOR_EMPLOYEE -> EMPLOYEE (`SupervisorID -> ID`)
- **FK_SUPERVISOR_WORK_CENTERS_EMPLOYEE** — SUPERVISOR_WORK_CENTER -> EMPLOYEE (`SupervisorID -> ID`)
- **FK_TASK_EMPLOYEE** — TASK -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_TASK_EMPLOYEE1** — TASK -> EMPLOYEE (`LastEmployeeID -> ID`)
- **FK_TASK_INVENTORY_EMPLOYEE** — TASK_INVENTORY -> EMPLOYEE (`AssignedEmployeeID -> ID`)
- **FK_TASK_INVENTORY_EMPLOYEE1** — TASK_INVENTORY -> EMPLOYEE (`CurrentEmployeeID -> ID`)
- **FK_WEIGH_HEADER_EMPLOYEE** — WEIGH_HEADER -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_WEIGH_LINE_DETAIL_EMPLOYEE** — WEIGH_LINE_DETAIL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_WEIGH_LINE_DETAIL_EMPLOYEE2** — WEIGH_LINE_DETAIL -> EMPLOYEE (`SignedByEmployeeID -> ID`)
- **FK_WEIGH_LINE_DETAIL_EMPLOYEE3** — WEIGH_LINE_DETAIL -> EMPLOYEE (`ApprovedByEmployeeID -> ID`)
- **FK_WEIGH_LINE_EMPLOYEE** — WEIGH_LINE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_WIP_OPERATION_STEP_HISTORY_EMPLOYEE** — WIP_OPERATION_STEP_HISTORY -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_WIP_REV_EMPLOYEE** — WIP_REV -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_EMPLOYEE** — WIP_SIGNATURE_SIGNOFF -> EMPLOYEE (`SignedBy -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_EMPLOYEE2** — WIP_SIGNATURE_SIGNOFF -> EMPLOYEE (`VoidedBy -> ID`)

## Business Keys (this table -> other)

- EMPLOYEE -> BUSINESS_OBJECT (`DashboardBusinessObjectAlias -> Alias`)

## Business Keys (other -> this table)

- SIGNATURE -> EMPLOYEE (`FirstEmployeeNo, SecondEmployeeNo -> EmployeeNo`)
- FDS_PROJECT -> EMPLOYEE (`OwnerEmployeeNo -> EmployeeNo`)
- AUTHORING_HISTORY -> EMPLOYEE (`EmployeeNo -> EmployeeNo`)

## Unique Indexes

- **IX_EMPLOYEE** on `LoginName`
- **UK_EMPLOYEE** on `EmployeeNo`
- **UK_EMPLOYEE_RESOURCE** on `ResourceID`

## Non-Unique Indexes

- **IDX_EMPLOYEE_EXTERNALLOGIN** on `ExternalLogin`
- **IF_EMPLOYEE_ADDRESS** on `AddressID`
- **IF_EMPLOYEE_BUSINESS_OBJECT** on `DashboardBusinessObjectAlias`
- **IF_EMPLOYEE_CONTACT** on `ContactID`
- **IF_EMPLOYEE_COST_CENTER** on `CostCenterDivision, CostCenter`
- **IF_EMPLOYEE_COUNTRY_1** on `CurrentCountry`
- **IF_EMPLOYEE_COUNTRY_2** on `CitizenshipCountry`
- **IF_EMPLOYEE_COUNTRY_BIRTH** on `CountryOfBirth`
- **IF_EMPLOYEE_EMPLOYEE_CLASS** on `EmployeeClass`
- **IF_EMPLOYEE_EMPLOYEE_TEAM** on `ID, DefaultTeam, DefaultFacility`
- **IF_EMPLOYEE_ROLE** on `DefaultRoleID`
