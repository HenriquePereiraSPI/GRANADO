# TRANSACTION_HISTORY_WEIGH_ANT

**Database:** Operational

**Description:** This table contains transaction history of annotations for the Weighing and Dispensing module.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Annotation | NVARCHAR(2000) | True |  | False |  | Annotation text. |
| Container | NVARCHAR(40) | True |  | False |  | Container number. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee number. |
| GroupNo | NVARCHAR(80) | True |  | False |  | Weighing Group number. |
| ID | BIGINT(19,0) | False |  | True |  | Unique ID of a record. |
| SequenceNo | INT(10,0) | True |  | False |  | Line sequence number. |
| Transaction_ | NVARCHAR(40) | True |  | False |  | Transaction name. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | ID of the Transaction History record. |

## Primary Key

- **PK_TRANSACTION_HISTORY_WEIGH_ANT** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_WEIGH_ANT_T** — TRANSACTION_HISTORY_WEIGH_ANT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_GroupNo** on `GroupNo`
- **IXD_TransactionHistoryID** on `TransactionHistoryID`
