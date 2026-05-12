# ECM_ORDER_DOCUMENT

**Database:** Operational

**Description:** Table contains all Documents affected by Change Order(s).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DetailsDestination | NVARCHAR | True |  | False |  | Description of a change that was implemented. |
| DetailsSource | NVARCHAR | True |  | False |  | Description of a change to be implemented. |
| DocumentDestinationID | INT(10,0) | True |  | False | DOCUMENT | Destination Document ID. |
| DocumentID | INT(10,0) | True |  | False | DOCUMENT | Document ID. |
| EcmOrderID | INT(10,0) | False |  | False | ECM_ORDER | Change Order ID. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Link Status. |

## Primary Key

- **PK_ECM_ORDER_DOCUMENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_DOCUMENT_DOCUMENT_DESTINATION_ID** — ECM_ORDER_DOCUMENT -> DOCUMENT (`DocumentDestinationID -> ID`)
- **FK_ECM_ORDER_DOCUMENT_DOCUMENT_ID** — ECM_ORDER_DOCUMENT -> DOCUMENT (`DocumentID -> ID`)
- **FK_ECM_ORDER_DOCUMENT_ECM_ORDER** — ECM_ORDER_DOCUMENT -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_DOCUMENT_PROGRESS_STATUS** — ECM_ORDER_DOCUMENT -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ECM_ORDER_DOCUMENT_EOID_PID** on `EcmOrderID, DocumentID, DocumentDestinationID`

## Non-Unique Indexes

- **IF_ECM_ORDER_DOCUMENT_DOCUMENT_DESTINATION_ID** on `DocumentDestinationID`
- **IF_ECM_ORDER_DOCUMENT_DOCUMENT_ID** on `DocumentID`
- **IF_ECM_ORDER_DOCUMENT_PROGRESS_STATUS** on `ProgressStatus`
