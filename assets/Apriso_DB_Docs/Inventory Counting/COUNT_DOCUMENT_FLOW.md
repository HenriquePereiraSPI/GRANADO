# COUNT_DOCUMENT_FLOW

**Database:** Operational

**Description:** Stores such information as the time at which a Count Document was started and the Employee that started it. Every time a Count Document is started a new flow is created.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CountNumber | INT(10,0) | True |  | False |  | Current count number. |
| CountStartDate | DATETIME | True |  | False |  | Date and time at which the count was started. |
| DocumentNumber | NVARCHAR(40) | False |  | False | COUNT_DOCUMENT | <null> |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| StartEmployeeID | INT(10,0) | True |  | False | EMPLOYEE | ID of the Employee that started the count. |

## Primary Key

- **PK_COUNT_DOCUMENT_FLOW** on `ID`

## Foreign Keys (this table -> other)

- **FK_COUNT_DOCUMENT_FLOW_COUNT_DOCUMENT** — COUNT_DOCUMENT_FLOW -> COUNT_DOCUMENT (`DocumentNumber -> DocumentNumber`)
- **FK_COUNT_DOCUMENT_FLOW_EMPLOYEE** — COUNT_DOCUMENT_FLOW -> EMPLOYEE (`StartEmployeeID -> ID`)

## Referenced By (other tables -> this)

- **FK_COUNT_CONTAINER_COUNT_DOCUMENT_FLOW** — COUNT_CONTAINER -> COUNT_DOCUMENT_FLOW (`CountDocumentFlowID -> ID`)
- **FK_COUNT_LOCK_COUNT_DOCUMENT_FLOW** — COUNT_LOCK -> COUNT_DOCUMENT_FLOW (`CountDocumentFlowID -> ID`)
- **FK_INVENTORY_COUNT_COUNT_DOCUMENT_FLOW** — INVENTORY_COUNT -> COUNT_DOCUMENT_FLOW (`CountDocumentFlowID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_COUNT_DOCUMENT_FLOW_COUNT_DOCUMENT** on `DocumentNumber`
