# TRANSACTION_HISTORY_PROP_BAG

**Database:** Operational

**Description:** XML Manager is modified to support additional value in the XML without changing any code or XSD.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| Name | NVARCHAR(255) | True |  | False |  | The name for the corresponding value_. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | Transaction History ID. |
| Value_ | NVARCHAR(2000) | True |  | False |  | The value for the corresponding name column. |

## Primary Key

- **PK_TRANSACTION_HISTORY_PROP_BAG** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_PROP_BAG_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_PROP_BAG -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_PROP_BAG_TRANSACTION_HISTORY** on `TransactionHistoryID`
