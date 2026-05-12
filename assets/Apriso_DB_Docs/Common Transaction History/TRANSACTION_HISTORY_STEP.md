# TRANSACTION_HISTORY_STEP

**Database:** Operational

**Description:** Purpose of this table is to log history on step level in Function Interpreter. It will be an additional level in transaction history between a master record (TRANSACTION_HISTORY) and function records (TRANSACTION_HISTORY_FUNCTION).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CompletedOn | DATETIME | True |  | False |  | The date when the step was completed. |
| DFCStepName | NVARCHAR(80) | True |  | False |  | Reference to the StepName column in the DFC_STEP table. |
| DFCStepSequenceNo | NVARCHAR(80) | True |  | False |  | Reference to the SequenceNo column in the DFC_STEP table. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| OperationStepID | INT(10,0) | True |  | False |  | Link to the OPERATION_STEP table. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The Sequence Number of the Operation. |
| ProcessOperationStepID | INT(10,0) | True |  | False |  | Link to the PROCESS_OPERATION_STEP table. |
| StartedOn | DATETIME | True |  | False |  | The date when the step was started. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | Link to the TRANSACTION_HISTORY table. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The work order identifier or number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various order types. |

## Primary Key

- **PK_TRANSACTION_HISTORY_STEP** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_STEP_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_STEP -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **FK_TRANSACTION_HISTORY_FUNCTION_TRANSACTION_HISTORY_STEP** — TRANSACTION_HISTORY_FUNCTION -> TRANSACTION_HISTORY_STEP (`TransactionHistoryStepID -> ID`)

## Business Keys (this table -> other)

- TRANSACTION_HISTORY_STEP -> DFC_STEP (`DFCStepName, DFCStepSequenceNo -> StepName, SequenceNo`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_STEP_TRANSACTION_HISTORY** on `TransactionHistoryID`
