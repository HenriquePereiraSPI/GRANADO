# ECM_ORDER_OPERATION

**Database:** Operational

**Description:** Table contains all Operations affected by Change Order(s).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DetailsDestination | NVARCHAR | True |  | False |  | Implemented Change Description. |
| DetailsSource | NVARCHAR | True |  | False |  | Change Description. |
| EcmOrderID | INT(10,0) | False |  | False | ECM_ORDER | Change Order ID. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| OperationDestinationID | INT(10,0) | True |  | False | OPERATION | Destination Operation ID. |
| OperationID | INT(10,0) | True |  | False | OPERATION | Operation ID. |
| ProgressStatus | INT(10,0) | False |  | False | PROGRESS_STATUS | Link Status. |

## Primary Key

- **PK_ECM_ORDER_OPERATION** on `ID`

## Foreign Keys (this table -> other)

- **FK_ECM_ORDER_OPERATION_ECM_ORDER** — ECM_ORDER_OPERATION -> ECM_ORDER (`EcmOrderID -> ID`)
- **FK_ECM_ORDER_OPERATION_OPERATION_DST** — ECM_ORDER_OPERATION -> OPERATION (`OperationDestinationID -> ID`)
- **FK_ECM_ORDER_OPERATION_OPERATION_SRC** — ECM_ORDER_OPERATION -> OPERATION (`OperationID -> ID`)
- **FK_ECM_ORDER_OPERATION_PROGRESS_STATUS** — ECM_ORDER_OPERATION -> PROGRESS_STATUS (`ProgressStatus -> ProgressStatus`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **UK_ECM_ORDER_OPERATION_EOID_OID** on `EcmOrderID, OperationID, OperationDestinationID`

## Non-Unique Indexes

- **IF_ECM_ORDER_OPERATION_OPERATION_DST** on `OperationDestinationID`
- **IF_ECM_ORDER_OPERATION_OPERATION_SRC** on `OperationID`
- **IF_ECM_ORDER_OPERATION_PROGRESS_STATUS** on `ProgressStatus`
