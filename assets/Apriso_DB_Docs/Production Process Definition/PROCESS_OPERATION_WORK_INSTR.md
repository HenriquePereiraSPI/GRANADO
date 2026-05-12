# PROCESS_OPERATION_WORK_INSTR

**Database:** Operational

**Description:** This table stores the Work Instructions linked to the Process Operation.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| GlobalSequenceNo | DECIMAL(28,10) | True |  | False |  | DELMIA 3DEXPERIENCE Global Sequence Number. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the Process Operation Work Instruction and its attributes. |
| IsActivity | BIT | True |  | False |  | Flag determining whether the WI will be displayed in standard way or will be  treated like an activity (like for example: component, tool, characteristic). |
| ProcessOperationID | INT(10,0) | False |  | False | PROCESS_OPERATION | The reference to the Process Operation. |
| Sequence | INT(10,0) | True |  | False |  | The Sequence of the Work Instruction. |
| WorkInstructionID | INT(10,0) | True |  | False | WORK_INSTRUCTION | The reference to the Work Instruction. |
| WorkInstructionRevisionID | INT(10,0) | True |  | False | WORK_INSTR_REVISION | The reference to the Work Instruction revision. |

## Primary Key

- **PK_PROCESS_OPERATION_WORK_INSTR** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_WORK_INSTR_OPERARATION** — PROCESS_OPERATION_WORK_INSTR -> PROCESS_OPERATION (`ProcessOperationID -> ID`)
- **FK_PROCESS_OPERATION_WORK_INSTR_WORK_INSTR_REVISION** — PROCESS_OPERATION_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_PROCESS_OPERATION_WORK_INSTR_WORK_INSTRUCTION** — PROCESS_OPERATION_WORK_INSTR -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PROCESS_OPERATION_WORK_INSTR_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_OPERATION_WORK_INSTR_DSInstanceID** on `DSInstanceID`
- **IF_PROCESS_OPERATION_WORK_INSTR_OPERARATION** on `ProcessOperationID`
- **IF_PROCESS_OPERATION_WORK_INSTR_WORK_INSTR_REVISION** on `WorkInstructionRevisionID`
- **IF_PROCESS_OPERATION_WORK_INSTR_WORK_INSTRUCTION** on `WorkInstructionID`
