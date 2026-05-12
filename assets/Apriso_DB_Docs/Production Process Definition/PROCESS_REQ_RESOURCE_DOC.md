# PROCESS_REQ_RESOURCE_DOC

**Database:** Operational

**Description:** This table stores the link between a Process Req Resource record and a Document record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DocumentId | INT(10,0) | False |  | False | DOCUMENT | The referenced Document record. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| ProcessReqResourceId | INT(10,0) | False |  | False | PROCESS_REQ_RESOURCE | The referenced Process Req Resource record. |

## Primary Key

- **PK_PROCESS_REQ_RESOURCE_DOC** on `ID`

## Foreign Keys (this table -> other)

- **FK_PROCESS_REQ_RESOURCE_DOC_DOCUMENT** — PROCESS_REQ_RESOURCE_DOC -> DOCUMENT (`DocumentId -> ID`)
- **FK_PROCESS_REQ_RESOURCE_DOC_PROCESS_REQ_RESOURCE** — PROCESS_REQ_RESOURCE_DOC -> PROCESS_REQ_RESOURCE (`ProcessReqResourceId -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PROCESS_REQ_RESOURCE_DOC_DOCUMENT** on `DocumentId`
- **IF_PROCESS_REQ_RESOURCE_DOC_PROCESS_REQ_RESOURCE** on `ProcessReqResourceId`
