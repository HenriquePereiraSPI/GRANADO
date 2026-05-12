# WIP_REQ_RESOURCE

**Database:** Operational

**Description:** This table contains the list of the Resource classes, Resource names, Roles, and Skills that are authorized to work on an Operation. This is used by the task list and populated by Explosion.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CertificationID | INT(10,0) | True |  | False | CERTIFICATION | Unique identifier of a certification required by the WIP that is identified by a row. |
| DiscontinueDate | DATETIME | True | (getutcdate()) | False |  | The end of validity for the entity. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| DurationRemainingSeconds | INT(10,0) | True |  | False |  | For future use. |
| EffectiveDate | DATETIME | True |  | False |  | The validity date (start) of the entity in UTC. |
| ExternalSource | BIT | True | ((0)) | False |  | Defines if the required Resource is defined from an external source or created via Explosion. If this flag is true, then Explosion or re-Explosion will not remove or update the required Resource. Otherwise, re-Explosion will delete the requried Resource (assuming that all internal required Resources will be re-created during Explosion). |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP-required Resource. |
| NoteID | INT(10,0) | True |  | False | NOTE | Reference to a note. |
| OprSequenceNo | NVARCHAR(20) | True |  | False | WIP_OPERATION | The WIP Operation number. |
| ParentWipReqResourceID | INT(10,0) | True |  | False | WIP_REQ_RESOURCE | Link to the required Resource that may be substituted. |
| PrimaryWipReqResourceID | INT(10,0) | True |  | False | WIP_REQ_RESOURCE | ID of the primary Resource. |
| Priority | INT(10,0) | True |  | False |  | Priority of required resource used when there are alternative resources. |
| ResourceAllocationType | SMALLINT(5,0) | True |  | False | RESOURCE_ALLOCATION_TYPE | Type of resource allocation (1 - Step Only (O), 2 - Reservation (R), 3 - Liberation (L)). |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | Defines the Resource class required to execute the task. |
| ResourceID | INT(10,0) | True |  | False | RESOURCE_ | The link to the Resource. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | The Resource allowed to execute the task. |
| ResourceQuantity | INT(10,0) | True |  | False |  | The quantity of the resource required. |
| ResourceSet | NVARCHAR(80) | True |  | False |  | For grouping purposes handling alternative resources. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | Defines the Resource type required to execute the task. |
| RoleID | INT(10,0) | True |  | False | ROLE | The Role required to process the task. |
| SkillExperienceLevel | INT(10,0) | True |  | False | SKILL_EXPERIENCE_LEVEL | The level of experience for a Skill. Used to filter the tasks in the Task List. |
| SkillID | INT(10,0) | True |  | False | SKILL | The reference to the Skills used to filter the Task List. |
| StdEffortEarned | DECIMAL(28,10) | True |  | False |  | For future use. |
| StdTotalRunEffort | DECIMAL(28,10) | True |  | False |  | For future use. |
| StepSequenceNo | INT(10,0) | True |  | False |  | The link of the Component to a Step. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UsageClassID | INT(10,0) | True |  | False | USAGE_CLASS | A link to the Usage Class record. |
| WipOrderNo | NVARCHAR(40) | False |  | False | WIP_OPERATION | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | False |  | False | WIP_OPERATION | The WIP Order type. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | For future use. |

## Primary Key

- **PK_WIP_REQ_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_REQ_RESOURCE_CERTIFICATION** — WIP_REQ_RESOURCE -> CERTIFICATION (`CertificationID -> ID`)
- **FK_WIP_REQ_RESOURCE_NOTE** — WIP_REQ_RESOURCE -> NOTE (`NoteID -> ID`)
- **FK_WIP_REQ_RESOURCE_RESOURCE** — WIP_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_WIP_REQ_RESOURCE_RESOURCE_1** — WIP_REQ_RESOURCE -> RESOURCE_ (`ResourceID -> ID`)
- **FK_WIP_REQ_RESOURCE_RESOURCE_ALLOCATION_TYPE** — WIP_REQ_RESOURCE -> RESOURCE_ALLOCATION_TYPE (`ResourceAllocationType -> ResourceAllocationType`)
- **FK_WIP_REQ_RESOURCE_RESOURCE_CLASS** — WIP_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_WIP_REQ_RESOURCE_RESOURCE_TYPE** — WIP_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_WIP_REQ_RESOURCE_ROLE** — WIP_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_WIP_REQ_RESOURCE_SKILL** — WIP_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_WIP_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — WIP_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_WIP_REQ_RESOURCE_UNIT** — WIP_REQ_RESOURCE -> UNIT (`UnitID -> ID`)
- **FK_WIP_REQ_RESOURCE_USAGE_CLASS** — WIP_REQ_RESOURCE -> USAGE_CLASS (`UsageClassID -> ID`)
- **FK_WIP_REQ_RESOURCE_WIP_OPERATION** — WIP_REQ_RESOURCE -> WIP_OPERATION (`WipOrderNo, WipOrderType, OprSequenceNo -> WipOrderNo, WipOrderType, OprSequenceNo`)
- **FK_WIP_REQ_RESOURCE_WIP_REQ_RESOURCE** — WIP_REQ_RESOURCE -> WIP_REQ_RESOURCE (`ParentWipReqResourceID -> ID`)
- **FK_WIP_REQ_RESOURCE_WIP_REQ_RESOURCE_2** — WIP_REQ_RESOURCE -> WIP_REQ_RESOURCE (`PrimaryWipReqResourceID -> ID`)
- **FK_WIP_REQ_RESOURCE_WORK_LOAD** — WIP_REQ_RESOURCE -> WORK_LOAD (`WorkLoadID -> ID`)

## Referenced By (other tables -> this)

- **FK_TASK_EQUIPMENT_USE_WIP_REQ_RESOURCE** — TASK_EQUIPMENT_USE -> WIP_REQ_RESOURCE (`WipReqResource -> ID`)
- **FK_TASK_WIP_REQ_RESOURCE** — TASK -> WIP_REQ_RESOURCE (`WipResource -> ID`)
- **FK_WIP_REQ_RESOURCE_DOC_WIP_REQ_RESOURCE** — WIP_REQ_RESOURCE_DOC -> WIP_REQ_RESOURCE (`WipReqResourceId -> ID`)
- **FK_WIP_REQ_RESOURCE_EXCEPTION_WIP_REQ_RESOURCE** — WIP_REQ_RESOURCE_EXCEPTION -> WIP_REQ_RESOURCE (`WipReqResourceID -> ID`)
- **FK_WIP_REQ_RESOURCE_WIP_REQ_RESOURCE** — WIP_REQ_RESOURCE -> WIP_REQ_RESOURCE (`ParentWipReqResourceID -> ID`)
- **FK_WIP_REQ_RESOURCE_WIP_REQ_RESOURCE_2** — WIP_REQ_RESOURCE -> WIP_REQ_RESOURCE (`PrimaryWipReqResourceID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_REQ_RESOURCE_CERTIFICATION** on `CertificationID`
- **IF_WIP_REQ_RESOURCE_DSInstanceID** on `DSInstanceID`
- **IF_WIP_REQ_RESOURCE_NOTE** on `NoteID`
- **IF_WIP_REQ_RESOURCE_RESOURCE** on `ResourceName, ResourceType`
- **IF_WIP_REQ_RESOURCE_RESOURCE_1** on `ResourceID`
- **IF_WIP_REQ_RESOURCE_RESOURCE_CLASS** on `ResourceClassID`
- **IF_WIP_REQ_RESOURCE_ROLE** on `RoleID`
- **IF_WIP_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** on `SkillID, SkillExperienceLevel`
- **IF_WIP_REQ_RESOURCE_UNIT** on `UnitID`
- **IF_WIP_REQ_RESOURCE_USAGE_CLASS** on `UsageClassID`
- **IF_WIP_REQ_RESOURCE_WIP_OPERATION** on `WipOrderNo, WipOrderType, OprSequenceNo`
- **IF_WIP_REQ_RESOURCE_WIP_REQ_RESOURCE** on `ParentWipReqResourceID`
- **IF_WIP_REQ_RESOURCE_WIP_REQ_RESOURCE_2** on `PrimaryWipReqResourceID`
- **IF_WIP_REQ_RESOURCE_WORK_LOAD** on `WorkLoadID`
