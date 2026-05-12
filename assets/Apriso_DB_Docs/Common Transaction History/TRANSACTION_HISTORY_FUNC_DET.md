# TRANSACTION_HISTORY_FUNC_DET

**Database:** Operational

**Description:** Transaction function input and output details.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| FunctionID | NVARCHAR(40) | True |  | False |  | Unique identifier of the function and its attributes. |
| FunctionIO | BIT | True |  | False |  | Flag to indicate if this record is for a function input or function output. |
| FunctionIOID | NVARCHAR(40) | True |  | False |  | Identifier of function input/output. |
| FunctionIOValue | NVARCHAR | True |  | False |  | Value of function input/output. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| TransactionHistoryFunctionID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY_FUNCTION | Link to the TRANSACTION_HISTORY_FUNCTION table. |

## Primary Key

- **PK_TRANSACTION_HISTORY_FUNC_DET** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_FUNC_DET_TRANSACTION_HISTORY_FUNCTION** — TRANSACTION_HISTORY_FUNC_DET -> TRANSACTION_HISTORY_FUNCTION (`TransactionHistoryFunctionID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_FUNC_DET_TRANSACTION_HISTORY_FUNCTION** on `TransactionHistoryFunctionID`
