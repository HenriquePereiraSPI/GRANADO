# SKILL

**Database:** Operational

**Description:** Contains the various skills that employee can have. User defined list used to manage the display of the taks list.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Link to CLASSIFICATION table. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| Name | NVARCHAR(40) | False |  | False |  | Name of the entity |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EMPLOYEE_SKILL** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COST_DETAIL_SKILL** — COST_DETAIL -> SKILL (`SkillID -> ID`)
- **FK_COST_SKILL** — COST -> SKILL (`SkillID -> ID`)
- **FK_DISPOSITION_STATUS_CONFIG_SKILL** — DISPOSITION_STATUS_CONFIG -> SKILL (`SkillID -> ID`)
- **FK_EMPLOYEE_SKILL_XREF_EMPLOYEE_SKILL** — EMPLOYEE_SKILL -> SKILL (`SkillID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_SKILL** — MAINT_TEMPLATE_TASK -> SKILL (`SkillID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_SKILL_SKILL** — MAINT_TEMPLATE_TASK_SKILL -> SKILL (`SkillID -> ID`)
- **FK_OPERATION_REQ_RESOURCE_SKILL** — OPERATION_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_PROCESS_DATA_COLLECT_REQ_RESOURCE_SKILL** — PROCESS_DATA_COLLECT_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_SKILL** — PROCESS_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_PRODUCT_ROUTING_REQ_RESOURCE_SKILL** — PRODUCT_ROUTING_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SKILL** — RESOURCE_MAINT_TASK -> SKILL (`SkillID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SKILL_SKILL** — RESOURCE_MAINT_TASK_SKILL -> SKILL (`SkillID -> ID`)
- **FK_RESOURCE_ROUTING_REQ_RESOURCE_SKILL** — RESOURCE_ROUTING_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_SKILL_EXPERIENCE_LEVEL_SKILL** — SKILL_EXPERIENCE_LEVEL -> SKILL (`SkillID -> ID`)
- **FK_UNIT_USAGE_SKILL** — UNIT_USAGE -> SKILL (`SkillID -> ID`)
- **FK_WEIGH_HEADER_SKILL** — WEIGH_HEADER -> SKILL (`SkillID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_SKILL** — WIP_DATA_COLLECT_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_WIP_REQ_RESOURCE_SKILL** — WIP_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_WORK_CENTER_REQ_RESOURCE_SKILL** — WORK_CENTER_REQ_RESOURCE -> SKILL (`SkillID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_SKILL_CLASSIFICATIONID** on `ClassificationID`
- **IF_SKILL_DSID** on `DSID`
- **IXD_Name** on `Name`
