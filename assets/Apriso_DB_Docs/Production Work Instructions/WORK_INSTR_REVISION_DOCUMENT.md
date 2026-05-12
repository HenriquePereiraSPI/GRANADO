# WORK_INSTR_REVISION_DOCUMENT

**Database:** Operational

**Description:** This table stores links to documents used in the Work Instruction revision.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DocumentID | INT(10,0) | False |  | True | DOCUMENT | The reference to the DOCUMENT table. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| WorkInstructionRevisionID | INT(10,0) | False |  | True | WORK_INSTR_REVISION | The reference to the WORK_INSTR_REVISION table. |

## Primary Key

- **PK_WORK_INSTR_REVISION_DOCUMENT** on `WorkInstructionRevisionID, DocumentID`

## Foreign Keys (this table -> other)

- **FK_WORK_INSTR_REVISION_DOCUMENT_DOCUMENT** — WORK_INSTR_REVISION_DOCUMENT -> DOCUMENT (`DocumentID -> ID`)
- **FK_WORK_INSTR_REVISION_DOCUMENT_WORK_INSTR_REVISION** — WORK_INSTR_REVISION_DOCUMENT -> WORK_INSTR_REVISION (`WorkInstructionRevisionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_WORK_INSTR_REVISION_DOCUMENT_CLASSIFICATIONID** on `ClassificationID`
- **IF_WORK_INSTR_REVISION_DOCUMENT_DOCUMENT** on `DocumentID`
- **IF_WORK_INSTR_REVISION_DOCUMENT_DSInstanceID** on `DSInstanceID`
