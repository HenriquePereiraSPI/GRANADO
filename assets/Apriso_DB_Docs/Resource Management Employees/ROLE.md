# ROLE

**Database:** Operational

**Description:** Contains the possible roles of a user. Roles are linked to the employees in the employee_role table. Role are used to define the menu_item the user can access (menu_item_role) and the task the user can see in the taks list. The roles can also be used in the process to validate electronic signature.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ExternalRole | NVARCHAR(255) | True |  | False |  | Name of a role/group from external system that will be mapped to Apriso role. |
| ExternalRoleSid | NVARCHAR(255) | True |  | False |  | External Role Security Identifier (for example NT groups SID). |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Role | NVARCHAR(40) | False |  | False |  | The Role of the user. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EMPLOYEE_ROLE** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ALERT_RECIPIENT_ROLE** — ALERT_RECIPIENT -> ROLE (`RoleID -> ID`)
- **FK_COST_DETAIL_ROLE** — COST_DETAIL -> ROLE (`RoleID -> ID`)
- **FK_COST_ROLE** — COST -> ROLE (`RoleID -> ID`)
- **FK_DISPOSITION_STATUS_CONFIG_ROLE** — DISPOSITION_STATUS_CONFIG -> ROLE (`RoleID -> ID`)
- **FK_EMPLOYEE_GROUP_ROLE_GROUP_ROLE** — EMPLOYEE_GROUP_ROLE_GROUP -> ROLE (`RoleID -> ID`)
- **FK_EMPLOYEE_ROLE** — EMPLOYEE -> ROLE (`DefaultRoleID -> ID`)
- **FK_EMPLOYEE_ROLE_GROUP_RELATION_ROLE** — EMPLOYEE_ROLE_GROUP_RELATION -> ROLE (`RoleID -> ID`)
- **FK_EMPLOYEE_ROLE_ROLE** — EMPLOYEE_ROLE -> ROLE (`RoleID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_ROLE** — MAINT_TEMPLATE_TASK -> ROLE (`RoleID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_ROLE_ROLE** — MAINT_TEMPLATE_TASK_ROLE -> ROLE (`RoleID -> ID`)
- **FK_NOTICE_ASSIGNMENT_ROLE** — NOTICE_ASSIGNMENT -> ROLE (`RoleID -> ID`)
- **FK_OPERATION_REQ_RESOURCE_ROLE** — OPERATION_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_PROCESS_DATA_COLLECT_REQ_RESOURCE_ROLE** — PROCESS_DATA_COLLECT_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_ROLE** — PROCESS_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_PROCESS_SIGNATURE_ROLE_ROLE** — PROCESS_SIGNATURE_ROLE -> ROLE (`RoleID -> ID`)
- **FK_PRODUCT_INV_TYPE_ROLE_ROLE** — PRODUCT_INV_TYPE_ROLE -> ROLE (`RoleID -> ID`)
- **FK_PRODUCT_ROUTING_REQ_RESOURCE_ROLE** — PRODUCT_ROUTING_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_PROGRESS_TRANSITION_RULES_ROLE_ROLE** — PROGRESS_TRANSITION_RULES_ROLE -> ROLE (`RoleID -> ID`)
- **FK_RESOURCE_MAINT_TASK_ROLE** — RESOURCE_MAINT_TASK -> ROLE (`RoleID -> ID`)
- **FK_RESOURCE_MAINT_TASK_ROLE_ROLE** — RESOURCE_MAINT_TASK_ROLE -> ROLE (`RoleID -> ID`)
- **FK_RESOURCE_ROUTING_REQ_RESOURCE_ROLE** — RESOURCE_ROUTING_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_ROLE_GROUP_ROLE** — ROLE_GROUP -> ROLE (`RoleID -> ID`)
- **FK_ROLE_PB_PROJECT_REVISION_CONTEXT** — PB_PROJECT_REVISION_CONTEXT -> ROLE (`RoleID -> ID`)
- **FK_SEQUENCE_QUEUE_DEF_ROLE_ROLE** — SEQUENCE_QUEUE_DEF_ROLE -> ROLE (`RoleID -> ID`)
- **FK_SIGNATURE_DETAIL_DEFINITION_ROLE** — SIGNATURE_DETAIL_DEFINITION -> ROLE (`RoleID -> ID`)
- **FK_TASK_ROLE** — TASK -> ROLE (`RoleID -> ID`)
- **FK_UNIT_USAGE_ROLE** — UNIT_USAGE -> ROLE (`RoleID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_ROLE** — WIP_DATA_COLLECT_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_WIP_REQ_RESOURCE_ROLE** — WIP_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_WIP_SIGNATURE_ROLE_ROLE** — WIP_SIGNATURE_ROLE -> ROLE (`RoleID -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_ROLE** — WIP_SIGNATURE_SIGNOFF -> ROLE (`SignedByRole -> ID`)
- **FK_WIP_SIGNATURE_SIGNOFF_ROLE2** — WIP_SIGNATURE_SIGNOFF -> ROLE (`VoidedByRole -> ID`)
- **FK_WORK_CENTER_REQ_RESOURCE_ROLE** — WORK_CENTER_REQ_RESOURCE -> ROLE (`RoleID -> ID`)

## Business Keys (other -> this table)

- DET2_FIELD_SECURITY -> ROLE (`Role -> Role`)
- DET2_SECURITY -> ROLE (`Role -> Role`)
- BUSINESS_OBJECT_ROLE -> ROLE (`Role -> Role`)
- CAPABILITY_ROLE -> ROLE (`Role -> Role`)
- CUBE_VIEW_ROLE -> ROLE (`Role -> Role`)
- REPORT_ROLE -> ROLE (`Role -> Role`)
- SF_SCREEN_PANEL_ACTION_ROLE -> ROLE (`Role -> Role`)
- SF_SCREEN_ROLE -> ROLE (`Role -> Role`)
- SF_VIEW_ACTION_ROLE -> ROLE (`Role -> Role`)
- SCREEN_AUTH_RULE_ROLE -> ROLE (`Role -> Role`)
- WEBSERVICE_ROLE -> ROLE (`Role -> Role`)

## Unique Indexes

- **UK_ROLE** on `Role`

## Non-Unique Indexes

- **IF_ROLE_DSID** on `DSID`
