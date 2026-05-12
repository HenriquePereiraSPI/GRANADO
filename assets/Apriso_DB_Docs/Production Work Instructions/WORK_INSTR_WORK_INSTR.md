# WORK_INSTR_WORK_INSTR

**Database:** Operational

**Description:** This table stores links between Standard Work Instructions and List Work Instructions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique ID of a record (key) in a table. |
| ParentWorkInstrRevisionID | INT(10,0) | False |  | False | WORK_INSTR_REVISION | Link to the parent Work Instruction revision. |
| Sequence | INT(10,0) | True |  | False |  | Sequence of the Work Instruction. |
| WorkInstructionID | INT(10,0) | True |  | False | WORK_INSTRUCTION | Link to the Work Instruction. |
| WorkInstructionRevisionID | INT(10,0) | True |  | False | WORK_INSTR_REVISION | Link to the Work Instruction revision. |

## Primary Key

- **PK_WORK_INSTR_WORK_INSTR** on `ID`

## Foreign Keys (this table -> other)

- **FK_WORK_INSTR__WORK_INSTR_PARENT_WORK_INSTR_REVISION** — WORK_INSTR_WORK_INSTR -> WORK_INSTR_REVISION (`ParentWorkInstrRevisionID -> ID`)
- **FK_WORK_INSTR_WORK_INSTR_WORK_INSTR_REVISION** — WORK_INSTR_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_WORK_INSTR_WORK_INSTR_WORK_INSTRUCTION** — WORK_INSTR_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_INSTR__WORK_INSTR_PARENT_WORK_INSTR_REVISION** on `ParentWorkInstrRevisionID`
- **IF_WORK_INSTR_WORK_INSTR_WORK_INSTR_REVISION** on `WorkInstructionRevisionID`
- **IF_WORK_INSTR_WORK_INSTR_WORK_INSTRUCTION** on `WorkInstructionID`
