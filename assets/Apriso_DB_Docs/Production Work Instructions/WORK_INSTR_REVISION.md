# WORK_INSTR_REVISION

**Database:** Operational

**Description:** This table is used to store revisions of Work Instructions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| ContentTextID | INT(10,0) | True |  | False |  | The link to the content translation. |
| DefaultRevision | BIT | True |  | False |  | Indicates if this is the default revision. |
| DSID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Universal Unique ID (Physical ID). |
| DSName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Name. |
| EffectiveDateEnd | DATETIME | True |  | False |  | The date when the revision of the Work Instruction is to be discontinued. |
| EffectiveDateStart | DATETIME | True |  | False |  | The date when the revision of the Work Instruction is effective. |
| FUID | NVARCHAR(36) | False |  | False |  | The unique ID of the entity across multiple DELMIA Apriso instances. |
| ID | INT(10,0) | False |  | True |  | The unique ID of the record (key) in the table. |
| ProgressStatus | INT(10,0) | True |  | False | PROGRESS_STATUS | The progress status of the Work Instruction revision. |
| Revision | NVARCHAR(40) | False |  | False |  | The revision of the Work Instruction. |
| Status | INT(10,0) | True |  | False |  | The status of the revision. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False |  | Unique identifier of the Unit. |
| WorkInstructionID | INT(10,0) | False |  | False | WORK_INSTRUCTION | The link to the WORK_INSTRUCTION table. |

## Primary Key

- **PK_WORK_INSTR_REVISION** on `ID`

## Foreign Keys (this table -> other)

- **FK_WORK_INSTR_REVISION_PROGRESS_STATUS** — WORK_INSTR_REVISION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)
- **FK_WORK_INSTR_REVISION_WORK_INSTRUCTION** — WORK_INSTR_REVISION -> WORK_INSTRUCTION (`WorkInstructionID -> ID`)

## Referenced By (other tables -> this)

- **FK_ECM_ORDER_WORK_INSTR_REVISION_WORK_INSTR_REV_DEST** — ECM_ORDER_WORK_INSTR_REVISION -> WORK_INSTR_REVISION (`WorkInstrRevisionDestID -> ID`)
- **FK_ECM_ORDER_WORK_INSTR_REVISION_WORK_INSTR_REVISION** — ECM_ORDER_WORK_INSTR_REVISION -> WORK_INSTR_REVISION (`WorkInstrRevisionID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_WORK_INSTR_WORK_INSTR_REVISION** — MAINT_TEMPLATE_TASK_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_OPERATION_STEP_WORK_INSTR_WORK_INSTR_REVISION** — OPERATION_STEP_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_OPERATION_WORK_INSTR_WORK_INSTR_REVISION** — OPERATION_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_PROCESS_OPERATION_STEP_WI_WORK_INSTR_REVISION** — PROCESS_OPERATION_STEP_WI -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_PROCESS_OPERATION_WORK_INSTR_WORK_INSTR_REVISION** — PROCESS_OPERATION_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_QUALITY_DEFECT_WORK_INSTR_REVISION** — QUALITY_DEFECT -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_RESOURCE_MAINT_TASK_WORK_INSTR_WORK_INSTR_REVISION** — RESOURCE_MAINT_TASK_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_WIP_OPERATION_STEP_WORK_INSTR_WORK_INSTR_REVISION** — WIP_OPERATION_STEP_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_WIP_OPERATION_WORK_INSTR_WORK_INSTR_REVISION** — WIP_OPERATION_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_WIP_USAGE_HISTORY_WI_REVISION_WORK_INSTR_REVISION** — WIP_USAGE_HISTORY_WI_REVISION -> WORK_INSTR_REVISION (`WorkInstrRevisionID -> ID`)
- **FK_WORK_INSTR__WORK_INSTR_PARENT_WORK_INSTR_REVISION** — WORK_INSTR_WORK_INSTR -> WORK_INSTR_REVISION (`ParentWorkInstrRevisionID -> ID`)
- **FK_WORK_INSTR_REV_BUSINESS_OBJ_WORK_INSTR_REVISION** — WORK_INSTR_REV_BUSINESS_OBJ -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_WORK_INSTR_REVISION_DOCUMENT_WORK_INSTR_REVISION** — WORK_INSTR_REVISION_DOCUMENT -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_WORK_INSTR_REVISION_PARAMS_WORK_INSTR_REVISION** — WORK_INSTR_REVISION_PARAMS -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)
- **FK_WORK_INSTR_WORK_INSTR_WORK_INSTR_REVISION** — WORK_INSTR_WORK_INSTR -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)

## Unique Indexes

- **UK_WORK_INSTR_REVISION_FUID** on `FUID`
- **UK_WORK_INTRUCTOIN_REVISION** on `WorkInstructionID, Revision`

## Non-Unique Indexes

- **IDX_WORK_INSTR_REVISION_CLASSIFICATIONID** on `ClassificationID`
- **IF_WORK_INSTR_REVISION_DSID** on `DSID`
- **IF_WORK_INSTR_REVISION_PROGRESS_STATUS** on `ProgressStatus`
