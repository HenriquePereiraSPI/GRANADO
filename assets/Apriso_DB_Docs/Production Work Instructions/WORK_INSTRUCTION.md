# WORK_INSTRUCTION

**Database:** Operational

**Description:** The table stores information about Work Instruction Definition.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassID | INT(10,0) | True |  | False | WORK_INSTRUCTION_CLASS | Reference the Work Instruction Class. |
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| FUID | NVARCHAR(36) | False |  | False |  | Global Unique Key for the Work Instruction. |
| ID | INT(10,0) | False |  | True |  | Local Unique Key for the Work Instruction. |
| Name | NVARCHAR(40) | True |  | False |  | Name of the Work Instruction. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | INT(10,0) | True |  | False |  | Type of the Work Instruction (0 - Single, 1 - List). |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |

## Primary Key

- **PK_WORK_INSTRUCTION** on `ID`

## Foreign Keys (this table -> other)

- **FK_WORK_INSTRUCTION_UNIT** — WORK_INSTRUCTION -> UNIT (`UnitID -> ID`)
- **FK_WORK_INSTRUCTION_WORK_INSTRUCTION_CLASS** — WORK_INSTRUCTION -> WORK_INSTRUCTION_CLASS (`ClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_MAINT_TEMPLATE_TASK_WORK_INSTR_WORK_INSTRUCTION** — MAINT_TEMPLATE_TASK_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_OPERATION_STEP_WORK_INSTR_WORK_INSTRUCTION** — OPERATION_STEP_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_OPERATION_WORK_INSTR_WORK_INSTRUCTION** — OPERATION_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_PROCESS_OPERATION_STEP_WI_WORK_INSTRUCTION** — PROCESS_OPERATION_STEP_WI -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_PROCESS_OPERATION_WORK_INSTR_WORK_INSTRUCTION** — PROCESS_OPERATION_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_RESOURCE_MAINT_TASK_WORK_INSTR_WORK_INSTRUCTION** — RESOURCE_MAINT_TASK_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_WIP_OPERATION_STEP_WORK_INSTR_WORK_INSTRUCTION** — WIP_OPERATION_STEP_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_WIP_OPERATION_WORK_INSTR_WORK_INSTRUCTION** — WIP_OPERATION_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_WORK_INSTR_REVISION_WORK_INSTRUCTION** — WORK_INSTR_REVISION -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)
- **FK_WORK_INSTR_WORK_INSTR_WORK_INSTRUCTION** — WORK_INSTR_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)

## Unique Indexes

- **UK_WORK_INSTRUCTION** on `FUID`
- **UK_WORK_INSTRUCTION_NAME** on `Name`

## Non-Unique Indexes

- **IDX_WORK_INSTRUCTION_CLASSIFICATIONID** on `ClassificationID`
- **IF_WORK_INSTRUCTION_UNIT** on `UnitID`
- **IF_WORK_INSTRUCTION_WORK_INSTRUCTION_CLASS** on `ClassID`
