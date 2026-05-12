# WORK_INSTR_REVISION_PARAMS

**Database:** Operational

**Description:** This table stores parameters for the Work Instruction revision.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique ID of a record (key) in a table. |
| Name | NVARCHAR(50) | False |  | False |  | Name of the parameter. |
| Type | INT(10,0) | True |  | False |  | Type of parameter (1 - constant value, 2 - session value). |
| Value | NVARCHAR | True |  | False |  | Stores the constant value for the parameter. |
| WorkInstructionRevisionID | INT(10,0) | False |  | False | WORK_INSTR_REVISION | Link to the Work Instruction revision. |

## Primary Key

- **PK_WORK_INSTR_REVISION_PARAMS** on `ID`

## Foreign Keys (this table -> other)

- **FK_WORK_INSTR_REVISION_PARAMS_WORK_INSTR_REVISION** — WORK_INSTR_REVISION_PARAMS -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_WORK_INSTR_REVISION_NAME** on `WorkInstructionRevisionID, Name`

## Non-Unique Indexes

- **** on ``
