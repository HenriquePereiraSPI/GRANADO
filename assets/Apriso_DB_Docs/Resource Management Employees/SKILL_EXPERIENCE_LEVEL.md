# SKILL_EXPERIENCE_LEVEL

**Database:** Operational

**Description:** Contains the list of experience level for a given skill. Used also for task list display purpose

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SkillExperienceLevel | INT(10,0) | False |  | True |  | Level of experience for a skill. User to filter tasks in task list |
| SkillID | INT(10,0) | False |  | True | SKILL | Reference to Skills, used to filter the task list |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SKILL_EXPERIENCE_LEVEL** on `SkillExperienceLevel, SkillID`

## Foreign Keys (this table -> other)

- **FK_SKILL_EXPERIENCE_LEVEL_SKILL** — SKILL_EXPERIENCE_LEVEL -> SKILL (`SkillID -> ID`)

## Referenced By (other tables -> this)

- **FK_COST_DETAIL_SKILL_EXPERIENCE_LEVEL** — COST_DETAIL -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_COST_SKILL_EXPERIENCE_LEVEL** — COST -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_EMPLOYEE_SKILL_SKILL_EXPERIENCE_LEVEL** — EMPLOYEE_SKILL -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_OPERATION_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — OPERATION_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_PROCESS_DATA_COLLECT_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — PROCESS_DATA_COLLECT_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_PROCESS_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — PROCESS_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_PRODUCT_ROUTING_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — PRODUCT_ROUTING_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_RESOURCE_ROUTING_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — RESOURCE_ROUTING_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — WIP_DATA_COLLECT_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_WIP_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — WIP_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_WORK_CENTER_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — WORK_CENTER_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
