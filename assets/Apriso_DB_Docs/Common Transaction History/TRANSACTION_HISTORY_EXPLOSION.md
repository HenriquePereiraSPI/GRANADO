# TRANSACTION_HISTORY_EXPLOSION

**Database:** Operational

**Description:** Record of the Transaction History for explosion transactions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Action_ | INT(10,0) | True |  | False |  | Explosion action type: 1 - WIP Order, 2 - WIP Operation, 3 - Process,  4 - Step. |
| ActualCompletionDate | DATETIME | True |  | False |  | Actual completion date. |
| ActualStartDate | DATETIME | True |  | False |  | Actual start date. |
| DeterminationStrategyUsed | INT(10,0) | True |  | False |  | Determination strategy used. |
| DueDate | DATETIME | True |  | False |  | Due date. |
| ExpectedStartDate | DATETIME | True |  | False |  | Expected start date. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| NavigatedQuantity | DECIMAL(28,10) | True |  | False |  | Quantity that is navigated through the Process. |
| OperationCode | NVARCHAR(80) | True |  | False |  | Operation code. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | Operation revision. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | Operation sequence number. |
| Priority | INT(10,0) | True |  | False |  | Priority. |
| Process | NVARCHAR(80) | True |  | False |  | Name of Process used for explosion. |
| ProcessRevision | NVARCHAR(80) | True |  | False |  | Process revision. |
| ProductNo | NVARCHAR(80) | True |  | False |  | Product Number. |
| Quantity | DECIMAL(28,10) | True |  | False |  | WIP Order quantity. |
| ReleaseDate | DATETIME | True |  | False |  | Release date. |
| ScheduledStartDate | DATETIME | True |  | False |  | Scheduled start date. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | Link to the TRANSACTION_HISTORY table. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | WIP Order Number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | WIP Order type. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work Center. |

## Primary Key

- **PK_TRANSACTION_HISTORY_EXPLOSION** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_EXPLOSION_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_EXPLOSION -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_EXPLOSION_TRANSACTION_HISTORY** on `TransactionHistoryID`
