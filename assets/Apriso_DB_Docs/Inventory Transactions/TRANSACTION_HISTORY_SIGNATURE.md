# TRANSACTION_HISTORY_SIGNATURE

**Database:** Operational

**Description:** The table records history details about Electronic Signatures related to transactions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SigAction | NVARCHAR(100) | True |  | False |  | Description of the signed action ("mixing", "filling") |
| SigEffectiveDate | DATETIME | True |  | False |  | Signature effective date |
| SigFirstComment | NVARCHAR(1000) | True |  | False |  | First signatory comment |
| SigFirstCreateDate | DATETIME | True |  | False |  | Timestamp when first signature was created |
| SigFirstEmployeeNo | NVARCHAR(50) | True |  | False |  | Link to first signatory Employee Number |
| SigFirstReasonCode | NVARCHAR(20) | True |  | False |  | First signatory reason code |
| SigSecondComment | NVARCHAR(1000) | True |  | False |  | Second signatory comment |
| SigSecondDate | DATETIME | True |  | False |  | Timestamp when second signature was created |
| SigSecondEmployeeNo | NVARCHAR(50) | True |  | False |  | Link to second signatory Employee Number |
| SigSecondReasonCode | NVARCHAR(20) | True |  | False |  | Second signatory reason code |
| SigStatus | SMALLINT(5,0) | True |  | False |  | Status of signature (Approved/Rejected) |
| TransactionHistoryID | BIGINT(19,0) | False |  | True | TRANSACTION_HISTORY | Foreign key to TRANSACTION_HISTORY |

## Primary Key

- **PK_TRANSACTION_HISTORY_SIGNATURE** on `TransactionHistoryID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_SIGNATURE_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_SIGNATURE -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
