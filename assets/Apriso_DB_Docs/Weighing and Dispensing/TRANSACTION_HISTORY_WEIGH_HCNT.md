# TRANSACTION_HISTORY_WEIGH_HCNT

**Database:** Operational

**Description:** This table contains transaction history of Containers for the Weighing Groups.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Container | NVARCHAR(40) | True |  | False |  | Container number. |
| ContainerStatus | NVARCHAR(40) | True |  | False |  | Status of the Container. |
| GroupNo | NVARCHAR(80) | True |  | False |  | Weighing Group number. |
| ID | BIGINT(19,0) | False |  | True |  | Unique ID of a record. |
| Transaction_ | NVARCHAR(40) | True |  | False |  | Transaction name. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | ID of the Transaction History record. |

## Primary Key

- **PK_TRANSACTION_HISTORY_WEIGH_HCNT** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_WEIGH_HCNT_T** — TRANSACTION_HISTORY_WEIGH_HCNT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_GroupNo** on `GroupNo`
- **IXD_TransactionHistoryID** on `TransactionHistoryID`
