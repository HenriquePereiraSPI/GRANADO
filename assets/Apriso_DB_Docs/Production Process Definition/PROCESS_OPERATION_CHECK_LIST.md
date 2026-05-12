# PROCESS_OPERATION_CHECK_LIST

**Database:** Operational

**Description:** This table contains the checklists for Processes, Process Operations, Process Operations Steps, Operations and Operations Steps.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CheckListID | INT(10,0) | False |  | False | CHECK_LIST | Link to the CHECK_LIST table. |
| CreatePerEmployee | BIT | True |  | False |  | A flag indicating if the Check List History should be created per each employee. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| OperationID | INT(10,0) | True |  | False | OPERATION | Link to Operation. |
| OperationStepID | INT(10,0) | True |  | False | OPERATION_STEP | Link to Operation Step. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | Link to Resource. |
| ProcessOperationID | INT(10,0) | True |  | False | PROCESS_OPERATION | Link to Process Operation. |
| ProcessOperationStepID | INT(10,0) | True |  | False | PROCESS_OPERATION_STEP | Link to Process Operation Step. |
| UsageContext | TINYINT(3,0) | True |  | False |  | The Check List usage context (0 = no context, 1 = execute Check List before the linked object, 2 = execute Check List after the linked object). |

## Primary Key

- **PK_PROCESS_OPERATION_CHECK_LIST** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_CHECK_LIST_CHECK_LIST** — PROCESS_OPERATION_CHECK_LIST -> CHECK_LIST (`CheckListID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_OPERATION** — PROCESS_OPERATION_CHECK_LIST -> OPERATION (`OperationID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_OPERATION_STEP** — PROCESS_OPERATION_CHECK_LIST -> OPERATION_STEP (`OperationStepID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_PROCESS** — PROCESS_OPERATION_CHECK_LIST -> PROCESS (`ProcessID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_PROCESS_OPERATION** — PROCESS_OPERATION_CHECK_LIST -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_CHECK_LIST_PROCESS_OPERATION_STEP** — PROCESS_OPERATION_CHECK_LIST -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_OPERATION_CHECK_LIST_CHECK_LIST** on `CheckListID`
- **IF_PROCESS_OPERATION_CHECK_LIST_OPERATION** on `OperationID`
- **IF_PROCESS_OPERATION_CHECK_LIST_OPERATION_STEP** on `OperationStepID`
- **IF_PROCESS_OPERATION_CHECK_LIST_PROCESS** on `ProcessID`
- **IF_PROCESS_OPERATION_CHECK_LIST_PROCESS_OPERATION** on `ProcessOperationID`
- **IF_PROCESS_OPERATION_CHECK_LIST_PROCESS_OPERATION_STEP** on `ProcessOperationStepID`
