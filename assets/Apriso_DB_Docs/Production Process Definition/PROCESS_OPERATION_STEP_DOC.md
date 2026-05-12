# PROCESS_OPERATION_STEP_DOC

**Database:** Operational

**Description:** This table documents links for Process Operations and Steps.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DisplayNo | INT(10,0) | True |  | False |  | The order in which to display the entity to the user. |
| DocumentID | INT(10,0) | False |  | False | DOCUMENT | The unique identifier of the document and its attributes. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| ID | INT(10,0) | False |  | True |  | The unique identifier. |
| ProcessOperationStepID | INT(10,0) | False |  | False | PROCESS_OPERATION_STEP | The unique identifier of the Process Operation Step and its attributes. |

## Primary Key

- **PK_PROCESS_OPERATION_STEP_DOC** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_STEP_DOC_DOCUMENT** — PROCESS_OPERATION_STEP_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_PROCESS_OPERATION_STEP_DOC_PROCESS_OPERATION_STEP** — PROCESS_OPERATION_STEP_DOC -> PROCESS_OPERATION_STEP (`ProcessOperationStepID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_OPERATION_STEP_DOC_DOCUMENT** on `DocumentID`
- **IF_PROCESS_OPERATION_STEP_DOC_DSInstanceID** on `DSInstanceID`
- **IF_PROCESS_OPERATION_STEP_DOC_PROCESS_OPERATION_STEP** on `ProcessOperationStepID`
