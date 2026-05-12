# TRANSACTION_HISTORY_TASK

**Database:** Operational

**Description:** This table records the history of task items.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| MasterTaskID | INT(10,0) | True |  | False |  | Master Task ID. |
| OperationID | INT(10,0) | True |  | False |  | Operation ID. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Operation Sequence Number. |
| ProcessOperationID | INT(10,0) | True |  | False |  | ProcessOperation ID. |
| SubTaskID | INT(10,0) | True |  | False |  | Sub Task ID. |
| TaskAction | INT(10,0) | True |  | False |  | Task Action. |
| TaskType | INT(10,0) | True |  | False |  | Task Type. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | Link to the TRANSACTION_HISTORY table. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | WIP Order Type. |

## Primary Key

- **PK_TRANSACTION_HISTORY_TASK** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_TASK_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_TASK -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_TASK_TRANSACTION_HISTORY** on `TransactionHistoryID`
