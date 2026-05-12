# PROCESS_REQ_RESOURCE

**Database:** Operational

**Description:** This table contains the Resource requirements for the Process Operations and Steps.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CertificationID | INT(10,0) | True |  | False | CERTIFICATION | Unique identifier of a certification required by the Process, Process Operation, or Process Operation Step that is identified by a row. |
| DiscontinueDate | DATETIME | True | (getutcdate()) | False |  | The date when the entity shall be discontinued. |
| EffectiveDate | DATETIME | True |  | False |  | The date when the entity shall become effective. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Process Requirement Resource and its attributes. |
| PrimaryProcessReqResourceID | INT(10,0) | True |  | False | PROCESS_REQ_RESOURCE | ID of the primary Resource. |
| Priority | INT(10,0) | True |  | False |  | Priority of required resource used when there are alternative resources. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | The unique identifier of the Process and its attributes. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | The unique identifier of the Process Operation. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | The unique identifier of the Process Operation Step. |
| ResourceAllocationType | SMALLINT(5,0) | True |  | False | RESOURCE_ALLOCATION_TYPE | Allocation types available in the Operation Steps: 1 - Step Only (O), 2 - Reservation (R), 3 - Liberation (L). |
| ResourceClassID | INT(10,0) | True |  | False | RESOURCE_CLASS | The enumeration of the values representing the various Resource classes within a Resource type. |
| ResourceName | NVARCHAR(80) | True |  | False | RESOURCE_ | The identifier or name of the Resource. |
| ResourceQuantity | INT(10,0) | True |  | False |  | The quantity of the resource required. |
| ResourceSet | NVARCHAR(80) | True |  | False |  | For grouping purposes handling alternative resources. |
| ResourceType | SMALLINT(5,0) | True |  | False | RESOURCE_ | The enumeration of the values representing the various Resource types. The following types are supported in DELMIA Apriso Complex Assembly:  3 - Person Resource type, 6 - Equipment Resource type |
| RoleID | INT(10,0) | True |  | False | ROLE | The unique identifier of the Role. |
| SkillExperienceLevel | INT(10,0) | True |  | False | SKILL_EXPERIENCE_LEVEL | The experience level within a Skill. |
| SkillID | INT(10,0) | True |  | False | SKILL | The unique identifier of the Skill. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WorkLoadID | INT(10,0) | True |  | False | WORK_LOAD | The unique identifier of the the work load and its attributes. |

## Primary Key

- **PK_PROCESS_OPERATION_RESOURCES** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_REQ_RESOURCE_RESOURCE** — PROCESS_REQ_RESOURCE -> RESOURCE_ (`ResourceType, ResourceName -> ResourceType, ResourceName`)
- **FK_PROCESS_OPERATION_REQ_RESOURCE_RESOURCE_CLASS** — PROCESS_REQ_RESOURCE -> RESOURCE_CLASS (`ResourceClassID -> ID`)
- **FK_PROCESS_OPERATION_REQ_RESOURCE_RESOURCE_TYPE** — PROCESS_REQ_RESOURCE -> RESOURCE_TYPE (`ResourceType -> ResourceType`)
- **FK_PROCESS_REQ_RESOURCE_CERTIFICATION** — PROCESS_REQ_RESOURCE -> CERTIFICATION (`CertificationID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_PROCESS** — PROCESS_REQ_RESOURCE -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_PROCESS_OPERATION** — PROCESS_REQ_RESOURCE -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_PROCESS_OPERATION_STEP** — PROCESS_REQ_RESOURCE -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_PROCESS_REQ_RESOURCE_2** — PROCESS_REQ_RESOURCE -> PROCESS_REQ_RESOURCE (`PrimaryProcessReqResourceID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_RESOURCE_ALLOCATION_TYPE** — PROCESS_REQ_RESOURCE -> RESOURCE_ALLOCATION_TYPE (`ResourceAllocationType -> ResourceAllocationType`)
- **FK_PROCESS_REQ_RESOURCE_ROLE** — PROCESS_REQ_RESOURCE -> ROLE (`RoleID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_SKILL** — PROCESS_REQ_RESOURCE -> SKILL (`SkillID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** — PROCESS_REQ_RESOURCE -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_PROCESS_REQ_RESOURCE_UNIT** — PROCESS_REQ_RESOURCE -> UNIT (`UnitID -> ID`)
- **FK_PROCESS_REQ_RESOURCE_WORK_LOAD** — PROCESS_REQ_RESOURCE -> WORK_LOAD (`WorkLoadID -> ID`)

## Referenced By (other tables -> this)

- **FK_PROCESS_REQ_RESOURCE_DOC_PROCESS_REQ_RESOURCE** — PROCESS_REQ_RESOURCE_DOC -> PROCESS_REQ_RESOURCE (`ProcessReqResourceId -> ID`)
- **FK_PROCESS_REQ_RESOURCE_PROCESS_REQ_RESOURCE_2** — PROCESS_REQ_RESOURCE -> PROCESS_REQ_RESOURCE (`PrimaryProcessReqResourceID -> ID`)
- **FK_TASK_EQUIPMENT_USE_PROCESS_REQ_RESOURCE** — TASK_EQUIPMENT_USE -> PROCESS_REQ_RESOURCE (`ProcessReqResource -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_OPERATION_REQ_RESOURCE_RESOURCE** on `ResourceName, ResourceType`
- **IF_PROCESS_OPERATION_REQ_RESOURCE_RESOURCE_CLASS** on `ResourceClassID`
- **IF_PROCESS_REQ_RESOURCE_CERTIFICATION** on `CertificationID`
- **IF_PROCESS_REQ_RESOURCE_PROCESS** on `ProcessID`
- **IF_PROCESS_REQ_RESOURCE_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_PROCESS_REQ_RESOURCE_PROCESS_OPERATION_STEP** on `ProcessOperationStepID`
- **IF_PROCESS_REQ_RESOURCE_PROCESS_REQ_RESOURCE_2** on `PrimaryProcessReqResourceID`
- **IF_PROCESS_REQ_RESOURCE_ROLE** on `RoleID`
- **IF_PROCESS_REQ_RESOURCE_SKILL_EXPERIENCE_LEVEL** on `SkillID, SkillExperienceLevel`
- **IF_PROCESS_REQ_RESOURCE_UNIT** on `UnitID`
- **IF_PROCESS_REQ_RESOURCE_WORK_LOAD** on `WorkLoadID`
