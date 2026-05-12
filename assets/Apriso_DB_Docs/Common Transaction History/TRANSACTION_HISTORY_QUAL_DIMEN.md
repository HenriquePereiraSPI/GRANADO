# TRANSACTION_HISTORY_QUAL_DIMEN

**Database:** Operational

**Description:** This table stores the history information of the position and size of the defect entered by the user.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AverageValue | DECIMAL(28,10) | True |  | False |  | Average value of the dimension. |
| DimensionCode | NVARCHAR(50) | True |  | False |  | Dimension code of the measurement taken for this defect. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| MaxValue | DECIMAL(28,10) | True |  | False |  | Maximum value of the dimension. |
| MinValue | DECIMAL(28,10) | True |  | False |  | Minimum value of the dimension. |
| Status | SMALLINT(5,0) | True |  | False |  | Status of this defect. |
| TransactionHistoryQualityID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY_QUALITY | ID of the Transaction History Quality. |
| UomCode | NVARCHAR(10) | True |  | False |  | UOM Code for the various values. |

## Primary Key

- **PK_TRANSACTION_HISTORY_QUAL_DIMEN** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_QUAL_DIMEN_TRANSACTION_HISTORY_QUALITY** — TRANSACTION_HISTORY_QUAL_DIMEN -> TRANSACTION_HISTORY_QUALITY (`TransactionHistoryQualityID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_QUAL_DIMEN_TRANSACTION_HISTORY_QUALITY** on `TransactionHistoryQualityID`
