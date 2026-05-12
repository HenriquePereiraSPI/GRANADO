# WIP_REQ_RESOURCE_DOC

**Database:** Operational

**Description:** This table stores the link between a WIP Req Resource record and a Document record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DocumentId | INT(10,0) | False |  | False | DOCUMENT | The referenced Document record. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| WipReqResourceId | INT(10,0) | False |  | False | WIP_REQ_RESOURCE | The referenced WIP Req Resource record. |

## Primary Key

- **PK_WIP_REQ_RESOURCE_DOC** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_REQ_RESOURCE_DOC_DOCUMENT** — WIP_REQ_RESOURCE_DOC -> DOCUMENT (`DocumentId -> ID`)
- **FK_WIP_REQ_RESOURCE_DOC_WIP_REQ_RESOURCE** — WIP_REQ_RESOURCE_DOC -> WIP_REQ_RESOURCE (`WipReqResourceId -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_REQ_RESOURCE_DOC_DOCUMENT** on `DocumentId`
- **IF_WIP_REQ_RESOURCE_DOC_WIP_REQ_RESOURCE** on `WipReqResourceId`
