# TRANSACTION_HISTORY_TIME

**Database:** Operational

**Description:** This table is a specialization of the transaction history, storing data unique to time and attendance for employee resource types.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustedEndTime | DATETIME | True |  | False |  | Adjusted End Time when the Employee ended the Attendance. |
| AdjustedStartTime | DATETIME | True |  | False |  | Adjusted Start Time when the Employee started the Attendance. |
| AfterAddOnName1 | NVARCHAR(40) | True |  | False |  | Add on and its attributes. |
| AfterAddOnName2 | NVARCHAR(40) | True |  | False |  | Add on and its attributes. |
| ApprovalDate | DATETIME | True |  | False |  | The date and time when the attendance record was approved. |
| ApprovalEmployeeNo | NVARCHAR(50) | True |  | False |  | Employee Number of the employee who performed the approval attendance. |
| ApprovalRevision | INT(10,0) | True |  | False |  | Revision for the attendance approval. |
| AttendanceRevision | INT(10,0) | True |  | False |  | Revision of the Attendance Record. |
| AttendanceStatus | SMALLINT(5,0) | True |  | False |  | The Status of the Attendance record (e.g. Started, Completed, SignedOff, etc). |
| AuditAction | SMALLINT(5,0) | True |  | False |  | Attendance Audit Action. |
| AuditEmployeeNo | NVARCHAR(50) | True |  | False |  | Attendance Audit Employee Number. |
| AuditRevision | INT(10,0) | True |  | False |  | Attendance Audit Revision. |
| BreakStatus | SMALLINT(5,0) | True |  | False |  | Attendance Break Status. |
| BreakType | SMALLINT(5,0) | True |  | False |  | The Type of Break (e.g. Lunch, Dinner, Break1, etc). |
| ChangedBy | NVARCHAR(50) | True |  | False |  | Employee who changed the attendance audit. |
| ChangedOn | DATETIME | True |  | False |  | The date and time when the record was modified. |
| Confirmation | NVARCHAR(50) | True |  | False |  | Confirmation code. |
| DaysValid | INT(10,0) | True |  | False |  | Number of valid days. |
| Department | NVARCHAR(40) | True |  | False |  | Department name and its attributes. |
| DoubleTimeHours | DECIMAL(28,10) | True |  | False |  | Double Time Hours Calculated hours against the Pay Rules. History information that comes from ATTENDANCE and ATTENDANCE_BREAK. |
| EarnCode | NVARCHAR(20) | True |  | False |  | Identifier for the type of employee earnings (regular, weekend, holiday, vacation). |
| EarningsCurrencyCode | NVARCHAR(3) | True |  | False |  | Code representing the name of the earnings currency. |
| EffectiveDate | DATETIME | True |  | False |  | The date when the entity shall become effective. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | Employee No. |
| EndTime | DATETIME | True |  | False |  | The end time of the attendance. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility for which this time transaction occurred. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| MiscDoubleTimeHours | DECIMAL(28,10) | True |  | False |  | Misc Double Time Hours Calculated hours against the Pay Rules. History information that comes from ATTENDANCE and ATTENDANCE_BREAK. |
| MiscOvertimeHours | DECIMAL(28,10) | True |  | False |  | The number of hours accumulated against the miscellaneous overtime bucket. |
| MiscRegularHours | DECIMAL(28,10) | True |  | False |  | The number of hours accumulated against the miscellaneous regular time bucket. |
| OverrideCalculation | BIT | True |  | False |  | Indicates elapsed labor or normal labor (either there is no significance to labor starting and ending times, so labor hours equal regular hours, or the calculation is based on starting and ending times). |
| OvertimeHours | DECIMAL(28,10) | True |  | False |  | Overtime Hours Calculated hours against the Pay Rules. History information that comes from ATTENDANCE and ATTENDANCE_BREAK. |
| PayDay | SMALLDATETIME | True |  | False |  | The payday that the attendance is credited to. |
| PayRule | NVARCHAR(20) | True |  | False |  | Pay Rule and its attributes. |
| RateAmount | DECIMAL(28,10) | True |  | False |  | Current Rate Amount for the Employee. History information that comes from the ATTENDANCE and the ATTENDANCE_BREAK tables. |
| ReasonCode | NVARCHAR(20) | True |  | False |  | Reason Code. |
| RegularHours | DECIMAL(28,10) | True |  | False |  | Regular Hours Calculated hours against the Pay Rules. History information that comes from ATTENDANCE and ATTENDANCE_BREAK. |
| ScheduledEndTime | DATETIME | True |  | False |  | Scheduled end date and time for the transaction. |
| ScheduledStartTime | DATETIME | True |  | False |  | Start Time when the employee is scheduled to start work. |
| Shift | NVARCHAR(20) | True |  | False |  | The shift number within the facility. |
| StartTime | DATETIME | True |  | False |  | The date and time when the attendance started. |
| TempBadgeNo | NVARCHAR(20) | True |  | False |  | Temporary badge used. |
| TransactionHistoryID | BIGINT(19,0) | False |  | False | TRANSACTION_HISTORY | Transaction history identifier. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Work Center and its attributes. |
| WorkPeriod | NVARCHAR(20) | True |  | False |  | The work period within a given shift. |

## Primary Key

- **PK_TRANSACTION_HISTORY_TIME** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_TIME_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_TIME -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_TIME_TRANSACTION_HISTORY** on `TransactionHistoryID`
