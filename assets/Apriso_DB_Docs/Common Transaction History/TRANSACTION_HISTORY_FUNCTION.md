# TRANSACTION_HISTORY_FUNCTION

**Database:** Operational

**Description:** Transaction function details.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DFCCode | NVARCHAR(80) | True |  | False |  | Reference to the Code column in the DFC table. |
| DFCRevision | NVARCHAR(80) | True |  | False |  | Reference to the Revision column in the DFC_REVISION table. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| OperationCode | NVARCHAR(80) | True |  | False |  | The Operation code. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | The revision of the Operation. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The sequence number of the Operation. |
| StepSequenceNo | INT(10,0) | True |  | False |  | The sequence number of the step. |
| TransactionHistoryStepID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY_STEP | Link to the TRANSACTION_HISTORY_STEP table. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The WIP Order identifier or number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various order types. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work Center and its attributes. |

## Primary Key

- **PK_TRANSACTION_HISTORY_FUNCTION** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_FUNCTION_TRANSACTION_HISTORY_STEP** — TRANSACTION_HISTORY_FUNCTION -> TRANSACTION_HISTORY_STEP (`TransactionHistoryStepID -> ID`)

## Referenced By (other tables -> this)

- **FK_TRANSACTION_HISTORY_FUNC_DET_TRANSACTION_HISTORY_FUNCTION** — TRANSACTION_HISTORY_FUNC_DET -> TRANSACTION_HISTORY_FUNCTION (`TransactionHistoryFunctionID -> ID`)

## Business Keys (this table -> other)

- TRANSACTION_HISTORY_FUNCTION -> DFC (`DFCCode -> Code`)
- TRANSACTION_HISTORY_FUNCTION -> DFC_REVISION (`DFCRevision -> Revision`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_FUNCTION_TRANSACTION_HISTORY_STEP** on `TransactionHistoryStepID`
