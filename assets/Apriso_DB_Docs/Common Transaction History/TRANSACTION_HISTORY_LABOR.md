# TRANSACTION_HISTORY_LABOR

**Database:** Operational

**Description:** Record of Transaction History for Employee Labor Transactions.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustedEndTime | DATETIME | True |  | False |  | Adjusted End Time when the Employee ended the Labor. |
| AdjustedStartTime | DATETIME | True |  | False |  | Adjusted Start Time when the Employee started the Labor. |
| AttendanceID | INT(10,0) | True |  | False |  | Attendance ID. |
| Confirmation | NVARCHAR(5) | True |  | False |  | SAP specify confirmation code. L20 - Partial confirmation, L40 - Final confirmation, P10 - Clock in, P20 - Clock out, P15 - begin recess, P25 - End recess. |
| CurrencyCode | NVARCHAR(3) | True |  | False |  | Code representing the name of the currency. |
| Department | NVARCHAR(40) | True |  | False |  | Department name and its attributes. |
| DoubleTimeHours | DECIMAL(28,10) | True |  | False |  | History information that comes from the LABOR table. |
| EarnCode | NVARCHAR(20) | True |  | False |  | Identifier for the type of employee earnings (regular, weekend, holiday, vacation). |
| EarningAmount | DECIMAL(28,10) | True |  | False |  | The amount of money earned for this labor. |
| ElapseTime | DECIMAL(28,10) | True |  | False |  | Time elapsed. |
| EmployeeID | INT(10,0) | True |  | False |  | The ID of employee who performs the current labor. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee who performs the current labor. |
| EndEmployeeID | INT(10,0) | True |  | False |  | The ID of employee who ended the current labor. |
| EndTime | DATETIME | True |  | False |  | Stop time of the labor record. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| LaborApprovalDate | DATETIME | True |  | False |  | The date and time when the labor record was approved. |
| LaborApprovalEmployeeNo | NVARCHAR(50) | True |  | False |  | The Employee who approved the labor record. |
| LaborApprovalRevision | INT(10,0) | True |  | False |  | The revision number of the labor record approval. |
| LaborAuditAction | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various audit actions that may be taken against a labor record. |
| LaborAuditChangedBy | NVARCHAR(50) | True |  | False |  | The user who last changed the labor audit record. |
| LaborAuditChangedOn | DATETIME | True |  | False |  | The data and time when the labor audit record was last changed. |
| LaborAuditRevision | INT(10,0) | True |  | False |  | The revision number of the labor audit record. |
| LaborCode | NVARCHAR(5) | True |  | False |  | Enumeration of the values that describe the various categories of labor that may be performed. |
| LaborGrade | NVARCHAR(40) | True |  | False |  | Labor grade and its attributes. |
| LaborRevision | INT(10,0) | True |  | False |  | The revision number of the labor transaction. |
| LaborStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe labor record status (e.g. started, stopped, signed-off, posted). |
| LaborType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various types of labor (e.g., indirect, job direct, job downtime, job setup, job teardown, planned maintenance). |
| NonRegularHours | DECIMAL(28,10) | True |  | False |  | The number of non-regular hours accrued. |
| Occupation | NVARCHAR(40) | True |  | False |  | The Occupation name. |
| OperationCode | NVARCHAR(80) | True |  | False |  | The Operation code. |
| OperationID | INT(10,0) | True |  | False |  | Operation ID. |
| OperationRevision | NVARCHAR(80) | True |  | False |  | The revision for the Operation. |
| OperationStatus | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe the status of a work order Operation. |
| OperationType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various types of Operations. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The sequence number of the Operation. |
| OverrideCalculation | BIT | True |  | False |  | If True, the calculation of hours has been overridden. |
| OverTimeHours | DECIMAL(28,10) | True |  | False |  | History information that comes from the LABOR table. |
| PayDay | SMALLDATETIME | True |  | False |  | The payday that the labor is credited to. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code and its attributes. |
| RegularHours | DECIMAL(28,10) | True |  | False |  | The number of regular hours accrued. |
| ShiftName | NVARCHAR(20) | True |  | False |  | Name of the Shift when the labor was performed. |
| StartedEmployeeID | INT(10,0) | True |  | False |  | The ID of employee who started the current labor. |
| StartTime | DATETIME | True |  | False |  | Date and time when the labor record started. |
| StepSequenceNo | INT(10,0) | True |  | False |  | Sequence index of the WIP Operation Step associated with the labor. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Transaction history identifier. |
| UomElapseTime | NVARCHAR(20) | True |  | False |  | Unit of Measure of the elapsed time. |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The work order identifier or number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | Enumeration of the values that describe various order types. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work Center and its attributes. |

## Primary Key

- **PK_TRANSACTION_HISTORY_LABOR** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_LABOR_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_LABOR -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_LABOR_TRANSACTION_HISTORY** on `TransactionHistoryID`
