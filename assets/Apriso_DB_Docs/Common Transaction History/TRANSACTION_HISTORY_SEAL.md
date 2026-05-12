# TRANSACTION_HISTORY_SEAL

**Database:** Operational

**Description:** This table keeps the history when a seal is added, broken or damaged.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BrokenByEmployeeNo | NVARCHAR(50) | True |  | False |  | Employee that broke the seal. |
| BrokenDate | DATETIME | True |  | False |  | Date the seal was broken. |
| ID | BIGINT(19,0) | False |  | True |  | Incremental Primary Key. |
| InputSealStatus | SMALLINT(5,0) | True |  | False |  | What status was entered into the method. |
| OrderNo | NVARCHAR(20) | True |  | False |  | Order Number. |
| OrderType | INT(10,0) | True |  | False |  | Order type. |
| SealIssuerEmployeeNo | NVARCHAR(50) | True |  | False |  | Employee of the issuer. |
| SealledDate | DATETIME | True |  | False |  | Date the seal was sealed. |
| SealNumber | NVARCHAR(20) | True |  | False |  | Seal number for the delivery. |
| SealStatus | SMALLINT(5,0) | True |  | False |  | Status of the seal. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | Transaction history identifier. |

## Primary Key

- **PK_TRANSACTION_HISTORY_SEAL** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_SEAL_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_SEAL -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_SEAL_TRANSACTION_HISTORY** on `TransactionHistoryID`
