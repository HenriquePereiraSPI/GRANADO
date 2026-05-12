# PROCESS_OPERATION_STEP_WI

**Database:** Operational

**Description:** This table stores the Work Instructions linked to the Process Operation Step.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Process Operation Step Work Instruction and its attributes. |
| IsActivity | BIT | True |  | False |  | Flag determining whether the WI will be displayed in standard way or will be  treated like an activity (like for example: component, tool, characteristic). |
| ProcessOperationStepID | INT(10,0) | False |  | False | PROCESS_OPERATION_STEP | The reference to the Process Operation Step. |
| Sequence | INT(10,0) | True |  | False |  | The Sequence of the Work Instruction. |
| WorkInstructionID | INT(10,0) | True |  | False | WORK_INSTRUCTION | The reference to the Work Instruction revision. |
| WorkInstructionRevisionID | INT(10,0) | True |  | False | WORK_INSTR_REVISION | The reference to the Work Instruction revision. |

## Primary Key

- **PK_PROCESS_OPERATION_STEP_WI** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_STEP_WI_OPERARATION** — PROCESS_OPERATION_STEP_WI -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)
- **FK_PROCESS_OPERATION_STEP_WI_WORK_INSTR_REVISION** — PROCESS_OPERATION_STEP_WI -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_PROCESS_OPERATION_STEP_WI_WORK_INSTRUCTION** — PROCESS_OPERATION_STEP_WI -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_OPERATION_STEP_WI_DSInstanceID** on `DSInstanceID`
- **IF_PROCESS_OPERATION_STEP_WI_OPERARATION** on `ProcessOperationStepID`
- **IF_PROCESS_OPERATION_STEP_WI_WORK_INSTR_REVISION** on `WorkInstructionRevisionID`
- **IF_PROCESS_OPERATION_STEP_WI_WORK_INSTRUCTION** on `WorkInstructionID`
