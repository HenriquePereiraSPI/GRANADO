# TRANSACTION_HISTORY_GROUPED

**Database:** Operational

**Description:** Stores TransactionGUID for all the single transactions batched in a group transaction.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| TransactionGUID | NVARCHAR(50) | True |  | False |  | Unique Transaction ID. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | Link to the TRANSACTION_HISTORY parent table. |

## Primary Key

- **PK_TRANSACTION_HISTORY_GROUPED** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_GROUPED_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_GROUPED -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_GROUPED_TRANSACTION_HISTORY** on `TransactionHistoryID`
