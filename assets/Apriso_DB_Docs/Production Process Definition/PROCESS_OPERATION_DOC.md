# PROCESS_OPERATION_DOC

**Database:** Operational

**Description:** This table contains the document links for Process Operations.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DisplayNo | INT(10,0) | True |  | False |  | The order in which to display the entity to the user. |
| DocumentID | INT(10,0) | False |  | False | DOCUMENT | The unique identifier of the document and its attributes. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the Process Operation document and its attributes. |
| ProcessOperationID | INT(10,0) | False |  | False | PROCESS_OPERATION | The unique identifier of the Process Operation and its attributes. |

## Primary Key

- **PK_PROCESS_OPERATION_DOC** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_OPERATION_DOC_DOCUMENT** — PROCESS_OPERATION_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_PROCESS_OPERATION_DOC_PROCESS_OPERATION** — PROCESS_OPERATION_DOC -> PROCESS_OPERATION (`ProcessOperationID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PROCESS_OPERATION_DOC_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_OPERATION_DOC_DOCUMENT** on `DocumentID`
- **IF_PROCESS_OPERATION_DOC_DSInstanceID** on `DSInstanceID`
- **IF_PROCESS_OPERATION_DOC_PROCESS_OPERATION** on `ProcessOperationID`
