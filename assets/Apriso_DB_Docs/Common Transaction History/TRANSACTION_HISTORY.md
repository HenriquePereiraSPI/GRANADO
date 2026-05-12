# TRANSACTION_HISTORY

**Database:** Operational

**Description:** Header record for the Transaction History.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Company | NVARCHAR(40) | True |  | False |  | Company number. |
| Department | NVARCHAR(40) | True |  | False |  | The Department the transaction was performed in. |
| DFCCode | NVARCHAR(80) | True |  | False |  | Reference to the Code column in the DFC table. |
| DFCRevision | NVARCHAR(80) | True |  | False |  | Reference to the Revision column in the DFC_REVISION table. |
| Division | NVARCHAR(70) | True |  | False |  | Unique name of the Division and its attributes. |
| EmployeeClass | SMALLINT(5,0) | True |  | False | EMPLOYEE_CLASS | Unique identifier for the employee statutory classification. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | The employee number. |
| EmployeeRole | NVARCHAR(40) | True |  | False |  | Role of the employee |
| EmployeeType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe each type of the employee. |
| Equipment | NVARCHAR(80) | True |  | False |  | The Equipment that performed the transaction. |
| EquipmentID | INT(10,0) | True |  | False |  | The Equipment ID that performed the transaction. |
| Facility | NVARCHAR(40) | True |  | False |  | Identifier of the Facility where the transaction occurred. |
| FunctionID | INT(10,0) | True |  | False |  | Unique identifier of the function and its attributes. |
| FunctionName | NVARCHAR(40) | True |  | False |  | The function name. |
| FunctionType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various types of functions. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| OperationCode | NVARCHAR(80) | True |  | False |  | The Operation code. |
| OperationID | INT(10,0) | True |  | False |  | Unique identifier of the Operation. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | The revision of the Operation. |
| Process | NVARCHAR(80) | True |  | False |  | Process identifier or name. |
| ProcessClassID | INT(10,0) | True |  | False |  | Enumeration of the values representing various classes of processes. |
| ProcessID | INT(10,0) | True |  | False |  | Unique identifier of the Process and its attributes. |
| ProcessOperationID | INT(10,0) | True |  | False |  | Unique identifier of the Process Operation and its attributes. |
| ProcessOprSequenceNo | NVARCHAR(20) | True |  | False |  | The Sequence Number of the Operation. |
| ProcessRevision | NVARCHAR(80) | True |  | False |  | The revision of the Process. |
| ProcessType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values representing various types of processes. |
| ProjectCode | NVARCHAR(40) | True |  | False |  | The project code. |
| SignatureHeaderCode | NVARCHAR(256) | True |  | False |  | Name of the Signature Header across multiple Apriso instances. It is used for electronic signature. |
| SignatureHeaderFUID | NVARCHAR(36) | True |  | False |  | Unique identifier of the Signature Header across multiple Apriso instances. It is used for electronic signature. |
| StepSequenceNo | INT(10,0) | True |  | False |  | The sequence number of the Operation step. |
| TaskID | INT(10,0) | True |  | False |  | Unique identifier of the task and its attributes. |
| TaskStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values describing task status. |
| TaskType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values describing various types of tasks. |
| TransactionGUID | NVARCHAR(50) | True |  | False |  | Unique ID from Apriso Transaction that can be propagated to an external system for tracking reasons. |
| TransactionName | NVARCHAR(100) | False |  | False |  | The name of the transaction. |
| TransactionTime | DATETIME | True |  | False |  | Date and time when the transaction occurred. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | The Work Center the transaction was performed in. |

## Primary Key

- **PK_TRANSACTION_HISTORY_HEADER** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_EMPLOYEE_CLASS** — TRANSACTION_HISTORY -> EMPLOYEE_CLASS (`EmployeeClass -> EmployeeClass`)

## Referenced By (other tables -> this)

- **FK_INVENTORY2_HISTORY_HEADER_TH** — INVENTORY2_HISTORY_HEADER -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_COUNT_DOC_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_COUNT_DOC -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_COUNT_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_COUNT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_DEFECT_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_DEFECT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_EXPLOSION_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_EXPLOSION -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_FILE_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_FILE -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_FM_RESOURCE_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_RESOURCE -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_GENEALOGY_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_GENEALOGY -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_GROUPED_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_GROUPED -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_LABOR_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_LABOR -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_MATERIAL_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_MATERIAL -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_MESSAGE_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_MESSAGE -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_PROP_BAG_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_PROP_BAG -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_QUAL_TEST_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_QUAL_TEST -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_QUALITY_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_QUALITY -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_SEAL_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_SEAL -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_SEQUENCE_Q_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_SEQUENCE_Q -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_SIGNATURE_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_SIGNATURE -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_STEP_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_STEP -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_TASK_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_TASK -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_TIME_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_TIME -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_WEIGH_ANT_T** — TRANSACTION_HISTORY_WEIGH_ANT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_WEIGH_H_T** — TRANSACTION_HISTORY_WEIGH_H -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_WEIGH_HCNT_T** — TRANSACTION_HISTORY_WEIGH_HCNT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_WEIGH_LN_T** — TRANSACTION_HISTORY_WEIGH_LN -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_WEIGH_LNDT_T** — TRANSACTION_HISTORY_WEIGH_LNDT -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)
- **FK_TRANSACTION_HISTORY_WIP_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_WIP -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Business Keys (this table -> other)

- TRANSACTION_HISTORY -> DFC (`DFCCode -> Code`)
- TRANSACTION_HISTORY -> DFC_REVISION (`DFCRevision -> Revision`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_EMPLOYEE_CLASS** on `EmployeeClass`
