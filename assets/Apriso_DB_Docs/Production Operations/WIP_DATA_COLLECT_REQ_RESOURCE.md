# WIP_DATA_COLLECT_REQ_RESOURCE

**Database:** Operational

**Description:** This table contains the Resource requirements for the Wip Data Collect Plans and Wip Data Collect Plan Rows.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | The end of validity for the entity. |
| EffectiveDate | DATETIME | True |  | False |  | The validity date (start) of the entity in UTC. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record. |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | The enumeration of the values representing the various Resource classes within a Resource type. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | The identifier or name of the Resource. |
| ResourceQuantity | INT(10,0) | True |  | False |  | The quantity of the resource required. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | The enumeration of the values representing the various Resource types. The following types are supported in DELMIA Apriso Complex Assembly:  3 - Person Resource type, 6 - Equipment Resource type. |
| RoleID | INT(10,0) | True |  | False | ROLE | The unique identifier of the Role. |
| SkillExperienceLevel | INT(10,0) | True |  | False | SKILL_EXPERIENCE_LEVEL | The experience level within a Skill. |
| SkillID | INT(10,0) | True |  | False | SKILL | The unique identifier of the Skill. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WipDataCollectID | BIGINT(19,0) | True |  | False | WIP_DATA_COLLECT | Unique identifier of the Wip Data Collect. |
| WipDataCollectPlanID | INT(10,0) | True |  | False | WIP_DATA_COLLECT_PLAN | Unique identifier of the Wip Data Collect Plan. |

## Primary Key

- **PK_WIP_DATA_COLLECT_REQ_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_RESOURCE** — WIP_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_RESOURCE_CLASS** — WIP_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_RESOURCE_TYPE** — WIP_DATA_COLLECT_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_ROLE** — WIP_DATA_COLLECT_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_SKILL** — WIP_DATA_COLLECT_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — WIP_DATA_COLLECT_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_UNIT** — WIP_DATA_COLLECT_REQ_RESOURCE -> UNIT (`UnitID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_WIP_DATA_COLLECT** — WIP_DATA_COLLECT_REQ_RESOURCE -> WIP_DATA_COLLECT (`WipDataCollectID -> ID`)
- **FK_WIP_DATA_COLLECT_REQ_RESOURCE_WIP_DATA_COLLECT_PLAN** — WIP_DATA_COLLECT_REQ_RESOURCE -> WIP_DATA_COLLECT_PLAN (`WipDataCollectPlanID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_DATA_COLLECT_REQ_RESOURCE_RESOURCE** on `ResourceName, ResourceType`
- **IF_WIP_DATA_COLLECT_REQ_RESOURCE_RESOURCE_CLASS** on `ResourceClassID`
- **IF_WIP_DATA_COLLECT_REQ_RESOURCE_ROLE** on `RoleID`
- **IF_WIP_DATA_COLLECT_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** on `SkillID, SkillExperienceLevel`
- **IF_WIP_DATA_COLLECT_REQ_RESOURCE_UNIT** on `UnitID`
- **IF_WIP_DATA_COLLECT_REQ_RESOURCE_WIP_DATA_COLLECT** on `WipDataCollectID`
- **IF_WIP_DATA_COLLECT_REQ_RESOURCE_WIP_DATA_COLLECT_PLAN** on `WipDataCollectPlanID`
