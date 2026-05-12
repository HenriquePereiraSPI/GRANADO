# CAPA_TASK_STATE

**Database:** Operational

**Description:** This table contains the parameters of tasks needed to execute the CAPA record. Records in this table are created on demand, on first usage of a dedicated Business Component method.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActualEffortSeconds | INT(10,0) | True |  | False |  | The actual effort of the task (in seconds). |
| AssignedEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The ID of the Employee to whom the record is assigned. |
| AssignedGroup | NVARCHAR(40) | True |  | False | GROUP_ | The Group of the assignee. |
| AssignedGroupClassID | INT(10,0) | True |  | False | GROUP_ | The Group Class ID of the assignee. |
| AssignedGroupType | SMALLINT(5,0) | True |  | False | GROUP_ | The Group Type of the assignee. |
| CAPAID | INT(10,0) | False |  | True | CAPA | The ID of the parent record from the CAPA table. |
| CAPAStatus | SMALLINT(5,0) | True |  | False | CAPA_STATUS | The Status of the task. |
| CAPATaskID | INT(10,0) | False |  | True | CAPA_TASK | The ID of the parent record from the CAPA_TASK table. |
| CompletionDate | DATETIME | True |  | False |  | The completion date of the task. |
| DueDate | DATETIME | True |  | False |  | The due date of the task. |
| PlannedEffortSeconds | INT(10,0) | True |  | False |  | The planned effort of the task (in seconds). |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The Progress Status of the task. |
| SignatureHeaderID | INT(10,0) | True |  | False | SIGNATURE_HEADER | The ID of the Signature Header used for signing the task. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WarningDate | DATETIME | True |  | False |  | The warning date of the task. |

## Primary Key

- **PK_CAPA_TASK_STATE** on `CAPAID, CAPATaskID`

## Foreign Keys (this table -> other)

- **FK_CAPA_TASK_STATE_CAPA** — CAPA_TASK_STATE -> CAPA (`CAPAID -> ID`)
- **FK_CAPA_TASK_STATE_CAPA_STATUS** — CAPA_TASK_STATE -> CAPA_STATUS (`CAPAStatus -> CAPAStatus`)
- **FK_CAPA_TASK_STATE_CAPA_TASK** — CAPA_TASK_STATE -> CAPA_TASK (`CAPATaskID -> ID`)
- **FK_CAPA_TASK_STATE_EMPLOYEE** — CAPA_TASK_STATE -> EMPLOYEE (`AssignedEmployeeID -> ID`)
- **FK_CAPA_TASK_STATE_GROUP** — CAPA_TASK_STATE -> GROUP_ (`AssignedGroup, AssignedGroupType, AssignedGroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_CAPA_TASK_STATE_PROGRESS_STATUS** — CAPA_TASK_STATE -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_CAPA_TASK_STATE_SIGNATURE_HEADER** — CAPA_TASK_STATE -> SIGNATURE_HEADER (`SignatureHeaderID -> ID`)
- **FK_CAPA_TASK_STATE_UNIT** — CAPA_TASK_STATE -> UNIT (`UnitID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_CAPA_TASK_STATE_CAPA_STATUS** on `CAPAStatus`
- **IF_CAPA_TASK_STATE_CAPA_TASK** on `CAPATaskID`
- **IF_CAPA_TASK_STATE_GROUP** on `AssignedGroup, AssignedGroupType, AssignedGroupClassID`
- **IF_CAPA_TASK_STATE_PROGRESS_STATUS** on `ProgressStatus`
- **IF_CAPA_TASK_STATE_SIGNATURE_HEADER** on `SignatureHeaderID`
- **IF_CAPA_TASK_STATE_UNIT** on `UnitID`
