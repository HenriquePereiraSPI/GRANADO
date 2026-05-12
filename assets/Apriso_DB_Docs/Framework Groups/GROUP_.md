# GROUP_

**Database:** Operational

**Description:** Store all Group types.  Any entitiy within the Apriso database that can be grouped has a corresponding "<Entity>_GROUP" table that is linked to the entity and the "GROUP_" table that defines the group.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Group_ | NVARCHAR(40) | False |  | True |  | Group of entities. |
| GroupClassID | INT(10,0) | False |  | True | GROUP_CLASS | Class of the Group (user-defined). |
| GroupType | SMALLINT(5,0) | False |  | True | GROUP_TYPE | Type of the Group. |
| ParentGroup | NVARCHAR(40) | True |  | False | GROUP_ | Reference to the Parent Group. |
| ParentGroupClassID | INT(10,0) | True |  | False | GROUP_ | Reference to the Parent Group Class. |
| ParentGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Reference to the Parent Group Type. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_GROUP** on `Group_, GroupType, GroupClassID`

## Foreign Keys (this table -> other)

- **FK_GROUP__UNIT** — GROUP_ -> UNIT (`UnitID -> ID`)
- **FK_GROUP_GROUP** — GROUP_ -> GROUP_ (`ParentGroup, ParentGroupType, ParentGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_GROUP_GROUP_CLASS** — GROUP_ -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_GROUP_GROUP_TYPE** — GROUP_ -> GROUP_TYPE (`GroupType -> GroupType`)

## Referenced By (other tables -> this)

- **FK_ALERT_GROUP_GROUP_** — ALERT_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CAMPAIGN_GROUP_GROUP** — CAMPAIGN_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CAPA_GROUP_1** — CAPA -> GROUP_ (`OwnerGroup, OwnerGroupType, OwnerGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CAPA_GROUP_2** — CAPA -> GROUP_ (`AssignedGroup, AssignedGroupType, AssignedGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CAPA_TASK_STATE_GROUP** — CAPA_TASK_STATE -> GROUP_ (`AssignedGroup, AssignedGroupType, AssignedGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CHARACTERISTIC_GROUP_GROUP_** — CHARACTERISTIC_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CHARACTERISTIC_REV_ATTRIBUTE_GROUP_** — CHARACTERISTIC_REV_ATTRIBUTE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CHARACTERISTIC_REV_CODE_GROUP_GROUP_** — CHARACTERISTIC_REV_CODE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CHARACTERISTIC_REV_GROUP_GROUP_** — CHARACTERISTIC_REV_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CHECK_LIST_CHECK_POINT_GROUP_** — CHECK_LIST_CHECK_POINT -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_COUNT_DISPOSITION_LINE_GROUP** — COUNT_DISPOSITION_LINE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_COUNT_FREQUENCY_LINK_GROUP** — COUNT_FREQUENCY_LINK -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_COUNT_PROC_LCNF_GROUP_GROUP** — COUNT_PROC_LCONF_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_COUNTER_GROUP_GROUP** — COUNTER_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DEPARTMENT_GROUP_GROUP** — DEPARTMENT_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DISPOSITION_GROUP_CODE_GROUP_** — DISPOSITION_GROUP_CODE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DISPOSITION_TEST_ATTRIBUTE_GROUP_** — DISPOSITION_TEST_ATTRIBUTE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DISPOSITION_TEST_GROUP_CODE_GROUP_** — DISPOSITION_TEST_GROUP_CODE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DOCUMENT_GROUP_00** — DOCUMENT_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DOCUMENT_REGION_REASON_CODE_REASON_GROUP** — DOCUMENT_REGION_REASON_CODE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_EMPLOYEE_GROUP_GROUP** — EMPLOYEE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_EMPLOYEE_GROUP_ROLE_GROUP_GROUP_1** — EMPLOYEE_GROUP_ROLE_GROUP -> GROUP_ (`EmployeeGroup, EmployeeGroupType, EmployeeGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_EMPLOYEE_GROUP_ROLE_GROUP_GROUP_2** — EMPLOYEE_GROUP_ROLE_GROUP -> GROUP_ (`RoleGroup, RoleGroupType, RoleGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_EMPLOYEE_HAZMAT_EXPOSURE_GROUP_** — EMPLOYEE_HAZMAT_EXPOSURE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_FLAT_FILE_ENTITY_GROUP_** — FLAT_FILE_ENTITY -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_GROUP_COMPONENT_GROUP** — GROUP_COMPONENT -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_GROUP_CONTACT_GROUP** — GROUP_CONTACT -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_GROUP_GROUP** — GROUP_ -> GROUP_ (`ParentGroup, ParentGroupType, ParentGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_GROUP_HOLD_GROUP** — GROUP_HOLD -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_GROUP_PB_PROJECT_REVISION_CONTEXT** — PB_PROJECT_REVISION_CONTEXT -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_GROUP_PROCESS_GROUP** — GROUP_PROCESS -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_INSPECTION_DETERMINATION_GROUP_** — INSPECTION_DETERMINATION -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_INSPECTION_PLAN_GROUP_GROUP** — INSPECTION_PLAN_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_NOTE_GROUP** — NOTE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_OPERATION_GROUP_GROUP** — OPERATION_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_OPERATION_STEP_GROUP_00** — OPERATION_STEP_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_ORDER_DETAIL_GROUP** — ORDER_DETAIL -> GROUP_ (`FromGroup, FromGroupType, FromGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_ORDER_DETAIL_GROUP2** — ORDER_DETAIL -> GROUP_ (`ToGroup, ToGroupType, ToGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_PACKAGING_INSTR_USAGE_GROUP_** — PACKAGING_INSTR_USAGE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_PROCESS_GROUP_GROUP** — PROCESS_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_PRODUCT_GROUP_GROUP** — PRODUCT_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_REASON_CODE_GROUP_GROUP_** — REASON_CODE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_RECIPE_GROUP_** — RECIPE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_REPLENISH_STRATEGY_CONTENT_Group** — REPLENISH_STRATEGY_CONTENT -> GROUP_ (`ProductGroup, ProductGroupType, ProductGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_RESOURCE_EVENT_HIERARCHY_GROUP_** — RESOURCE_EVENT_HIERARCHY -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_RESOURCE_GROUP_GROUP** — RESOURCE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_ROLE_GROUP_GROUP** — ROLE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_SAFETY_INSTRUCTION_USAGE_GROUP_** — SAFETY_INSTRUCTION_USAGE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_SAMPLE_GROUP_GROUP_** — SAMPLE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_SEQUENCE_QUEUE_GROUP_** — SEQUENCE_QUEUE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_SEQUENCE_SHIP_CONFIG_GROUP_** — SEQUENCE_SHIP_CONFIG -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_TASK_GROUP_GROUP** — TASK_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_UNIT_DOCUMENT_USAGE_GROUP** — UNIT_DOCUMENT_USAGE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_UNIT_USAGE_GROUP_** — UNIT_USAGE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WAREHOUSE_GROUP_GROUP** — WAREHOUSE_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WAREHOUSE_LOCATION_GROUP_GROUP** — WAREHOUSE_LOCATION_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_HEADER_GROUP** — WEIGH_HEADER -> GROUP_ (`SafetyInstrGroup, SafetyInstrGroupType, SafetyInstrGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_HEADER_GROUP_2** — WEIGH_HEADER -> GROUP_ (`CheckListGroup, CheckListGroupType, CheckListGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_LINE_GROUP** — WEIGH_LINE -> GROUP_ (`SafetyInstrGroup, SafetyInstrGroupType, SafetyInstrGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_LINE_GROUP_** — WEIGH_LINE -> GROUP_ (`CheckListGroup, CheckListGroupType, CheckListGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WEIGH_LINE_GROUP_2** — WEIGH_LINE -> GROUP_ (`HazMatGroup, HazMatGroupType, HazMatGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_WORK_CENTER_GROUP_GROUP** — WORK_CENTER_GROUP -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_GROUP__UNIT** on `UnitID`
- **IF_GROUP_GROUP** on `ParentGroup, ParentGroupType, ParentGroupClassID`
- **IF_GROUP_GROUP_CLASS** on `GroupClassID`
- **IXD_GroupType_GroupClassID** on `GroupType, GroupClassID`
