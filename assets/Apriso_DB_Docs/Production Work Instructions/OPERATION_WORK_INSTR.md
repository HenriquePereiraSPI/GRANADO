# OPERATION_WORK_INSTR

**Database:** Operational

**Description:** This table stores Work Instructions linked to the Operation.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique ID of a record (key) in a table. |
| IsActivity | BIT | True |  | False |  | Flag determining whether the WI will be displayed in standard way or will be  treated like an activity (like for example: component, tool, characteristic). |
| OperationID | INT(10,0) | False |  | False | OPERATION | Reference to the Operation. |
| Sequence | INT(10,0) | True |  | False |  | Sequence of the Work Instruction. |
| WorkInstructionID | INT(10,0) | True |  | False | WORK_INSTRUCTION | Reference to the Work Instruction. |
| WorkInstructionRevisionID | INT(10,0) | True |  | False | WORK_INSTR_REVISION | Reference to the Work Instruction revision. |

## Primary Key

- **PK_OPERATION_WORK_INSTR** on `ID`

## Foreign Keys (this table -> other)

- **FK_OPERATION_WORK_INSTR_OPERARATION** — OPERATION_WORK_INSTR -> OPERATION (`OperationID -> ID`)
- **FK_OPERATION_WORK_INSTR_WORK_INSTR_REVISION** — OPERATION_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_OPERATION_WORK_INSTR_WORK_INSTRUCTION** — OPERATION_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_OPERATION_WORK_INSTR_OPERARATION** on `OperationID`
- **IF_OPERATION_WORK_INSTR_WORK_INSTR_REVISION** on `WorkInstructionRevisionID`
- **IF_OPERATION_WORK_INSTR_WORK_INSTRUCTION** on `WorkInstructionID`
