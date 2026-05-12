# NOTE

**Database:** Operational

**Description:** Stores various Notes entered by users in the system. Notes can be linked to an Order, Process Modification, Process Modification Dispatch, Labor Record or Attendance Record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| Description | NVARCHAR | True |  | False |  | Description of the Note. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee who entered the Note. |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Defines the assignment of the entity to a Group (user-defined). |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Class of the group (user-defined). |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Type of the Group. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| InstanceName | NVARCHAR(255) | True |  | False |  | Name of the server the note has been created. |
| Keywords | NVARCHAR(50) | True |  | False |  | For future use. |
| LanguageID | INT(10,0) | True |  | False |  | Language of the entity. |
| NoteType | SMALLINT(5,0) | True |  | False | NOTE_TYPE | Type of Note (user-defined). No overwriting of Prime Data permitted. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The link to ProgressStatus. |
| Subject | NVARCHAR(50) | True |  | False |  | Subject of the Note. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Links the Note back to a Work Center. |

## Primary Key

- **PK_NOTE** on `ID`

## Foreign Keys (this table -> other)

- **FK_NOTE_EMPLOYEE** — NOTE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_NOTE_GROUP** — NOTE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_NOTE_NOTE_TYPE** — NOTE -> NOTE_TYPE (`NoteType -> Type`)
- **FK_NOTE_PROGRESS_STATUS** — NOTE -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_NOTE_UNIT** — NOTE -> UNIT (`UnitID -> ID`)
- **FK_NOTE_WORK_CENTER** — NOTE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_APPROVAL_NOTE** — ATTENDANCE_APPROVAL -> NOTE (`NoteID -> ID`)
- **FK_ATTENDANCE_NOTE** — ATTENDANCE -> NOTE (`NoteID -> ID`)
- **FK_DESIGN_NOTE_NOTE** — DESIGN_NOTE -> NOTE (`NoteID -> ID`)
- **FK_DISPATCH_CHANGE_NOTE** — DISPATCH_CHANGE -> NOTE (`NoteID -> ID`)
- **FK_LABOR_NOTE** — LABOR -> NOTE (`NoteID -> ID`)
- **FK_RESOURCE_LABOR_NOTE** — RESOURCE_LABOR -> NOTE (`NoteID -> ID`)
- **FK_SPC_CHART_DATA_NOTE** — SPC_CHART_DATA -> NOTE (`NoteID -> ID`)
- **FK_SPC_CHART_XAXIS_VALUE_NOTE** — SPC_CHART_XAXIS_VALUE -> NOTE (`NoteID -> ID`)
- **FK_TASK_NOTE** — TASK -> NOTE (`NoteID -> ID`)
- **FK_TASK_NOTE_NOTE** — TASK_NOTE -> NOTE (`NoteID -> ID`)
- **FK_UNIT_NOTE_NOTE** — UNIT_NOTE -> NOTE (`NoteID -> ID`)
- **FK_WIP_COMPONENT_NOTE** — WIP_COMPONENT -> NOTE (`NoteID -> ID`)
- **FK_WIP_OPERATION_STEP_CHAR_NOTE** — WIP_OPERATION_STEP_CHAR -> NOTE (`NoteID -> ID`)
- **FK_WIP_OPERATION_STEP_WORK_INSTR_NOTE** — WIP_OPERATION_STEP_WORK_INSTR -> NOTE (`NoteID -> ID`)
- **FK_WIP_OPERATION_WORK_INSTR_NOTE** — WIP_OPERATION_WORK_INSTR -> NOTE (`NoteID -> ID`)
- **FK_WIP_REQ_RESOURCE_NOTE** — WIP_REQ_RESOURCE -> NOTE (`NoteID -> ID`)
- **FK_WIP_SIGNATURE_NOTE** — WIP_SIGNATURE -> NOTE (`NoteID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_NOTE_CLASSIFICATIONID** on `ClassificationID`
- **IF_NOTE_GROUP** on `Group_, GroupType, GroupClassID`
- **IF_NOTE_PROGRESS_STATUS** on `ProgressStatus`
- **IF_NOTE_UNIT** on `UnitID`
