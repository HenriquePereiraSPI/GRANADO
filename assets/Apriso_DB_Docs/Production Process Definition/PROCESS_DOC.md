# PROCESS_DOC

**Database:** Operational

**Description:** Document links for process

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ClassificationID | BIGINT(19,0) | True |  | False |  | Unique identifier of the classification. Currently supported for the maximum INT value. |
| DisplayNo | INT(10,0) | True |  | False |  | The order in which to display the entity to the user. |
| DocumentID | INT(10,0) | False |  | False | DOCUMENT | Link to Document. |
| DSInstanceID | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance ID. |
| DSInstanceName | NVARCHAR(100) | True |  | False |  | DELMIA 3DEXPERIENCE Instance Name. |
| ID | INT(10,0) | False |  | True |  | Unique identifier. |
| ProcessID | INT(10,0) | False |  | False | PROCESS | Link to Process. |

## Primary Key

- **PK_PROCESS_DOC** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_DOC_DOCUMENT** — PROCESS_DOC -> DOCUMENT (`DocumentID -> ID`)
- **FK_PROCESS_DOC_PROCESS** — PROCESS_DOC -> PROCESS (`ProcessID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IDX_PROCESS_DOC_CLASSIFICATIONID** on `ClassificationID`
- **IF_PROCESS_DOC_DOCUMENT** on `DocumentID`
- **IF_PROCESS_DOC_DSInstanceID** on `DSInstanceID`
- **IF_PROCESS_DOC_PROCESS** on `ProcessID`
