# ECM_ORDER_PROCESS

**Database:** Operational

**Description:** Table contains all Processes affected by Change Order(s).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DetailsDestination | NVARCHAR | True |  | False |  | Description of a change that was implemented. |
| DetailsSource | NVARCHAR | True |  | False |  | Description of a change to be implemented. |
| EcmOrderID | INT(10,0) | False |  | False | ECM_ORDER | Change Order ID. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ProcessDestinationID | INT(10,0) | True |  | False | PROCESS | Destination Process ID. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | Process ID. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Link Status. |

## Primary Key

- **PK_ECM_ORDER_PROCESS** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_PROCESS_ECM_ORDER** — ECM_ORDER_PROCESS -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_PROCESS_PROCESS_DST** — ECM_ORDER_PROCESS -> PROCESS (`ProcessDestinationID -> ID`)
- **FK_ECM_ORDER_PROCESS_PROCESS_SRC** — ECM_ORDER_PROCESS -> PROCESS (`ProcessID -> ID`)
- **FK_ECM_ORDER_PROCESS_PROGRESS_STATUS** — ECM_ORDER_PROCESS -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ECM_ORDER_PROCESS_EOID_PID** on `EcmOrderID, ProcessID, ProcessDestinationID`

## Non-Unique Indexes

- **IF_ECM_ORDER_PROCESS_PROCESS_DST** on `ProcessDestinationID`
- **IF_ECM_ORDER_PROCESS_PROCESS_SRC** on `ProcessID`
- **IF_ECM_ORDER_PROCESS_PROGRESS_STATUS** on `ProgressStatus`
