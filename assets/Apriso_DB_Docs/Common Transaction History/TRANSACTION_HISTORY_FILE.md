# TRANSACTION_HISTORY_FILE

**Database:** Operational

**Description:** Record of Transaction History for file transactions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DestinationFile | NVARCHAR(255) | True |  | False |  | Destination file path and file name |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| MoveCopy | BIT | True |  | False |  | 1 is to move the original file to the new directory, 0 is to copy the file to the new directory. |
| SourceFile | NVARCHAR(255) | True |  | False |  | Original file path and file name. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Link to the TRANSACTION_HISTORY table. |

## Primary Key

- **PK_TRANSACTION_HISTORY_FILE** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_FILE_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_FILE -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_FILE_TRANSACTION_HISTORY** on `TransactionHistoryID`
