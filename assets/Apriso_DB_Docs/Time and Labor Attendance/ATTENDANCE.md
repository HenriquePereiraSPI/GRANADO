# ATTENDANCE

**Database:** Operational

**Description:** The ATTENDANCE table is used to store runtime Attendance data for an EMPLOYEE.  This table includes fields like Pay Day, Start and Stop Times, allocated hours against an earn code, and other attribute

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustedStartTime | DATETIME | True |  | False |  | The start time adjusted of the attendance based on the attendance and labor rules |
| AdjustedStartTimeLocal | DATETIME | True |  | False |  | The start time adjusted of the attendance based on the attendance and labor rules in the timezone of the user |
| AdjustedStopTime | DATETIME | True |  | False |  | The stop time adjusted of the attendance based on the attendance and labor rules |
| AdjustedStopTimeLocal | DATETIME | True |  | False |  | The stop time adjusted of the attendance based on the attendance and labor rules in the timezone of the user |
| AfterAddOnName1 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute used to denote the attendance record has a add on linked to it.  Add ons are used to reference this record as some kind of premium. |
| AfterAddOnName2 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute used to denote the attendance record has a add on linked to it.  Add ons are used to reference this record as some kind of premium. |
| AttendanceStatus | SMALLINT(5,0) | True |  | False | ATTENDANCE_STATUS | The current status of the attendance |
| BeforeAddOnName | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute used to denote the attendance record has a add on linked to it.  Add ons are used to reference this record as some kind of premium. |
| CallIn | BIT | True |  | False |  | Denotes this attendance as a call in.  Call in attendance rows may compute to minimal hours to override the computed hours. |
| Department | NVARCHAR(40) | True |  | False | DEPARTMENT | The department the attendance was performed at |
| DoubleTimeHours | DECIMAL(28,10) | True | (0.0) | False |  | The amount of double time hours assigned to this attendance |
| EarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | The earncode the attendance is performed as |
| EarningsCurrencyCode | NVARCHAR(3) | True |  | False | CURRENCY | For future use. |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| EffectiveDateLocal | DATETIME | True |  | False |  | The effective date for the work period the attendance was linked to |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | The ID of the employee record this table is associated with |
| EndTime | DATETIME | True |  | False |  | The end time of the attenance in UTC time |
| EndTimeLocal | DATETIME | True |  | False |  | The actual end time for the attendance in the employees local time zone |
| Facility | NVARCHAR(40) | True |  | False | FACILITY | The facility the attendance was performed in |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table |
| IsPayrollExtracted | BIT | True |  | False |  | Flag indicating if this attendance record was extracted to Payroll. |
| LastPayrollExtractedBy | NVARCHAR(50) | True |  | False |  | The user who last extracted the data to payroll. |
| LastPayrollExtractedOn | DATETIME | True |  | False |  | Date and time at which this record was extracted to Payroll. |
| MiscDoubleTimeHours | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| MiscOvertimeHours | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| MiscRegularHours | DECIMAL(28,10) | True | (0.0) | False |  | Used a bucket for hours that are entered in durations when Start and Stop times are disabled.  Used for VAC, HOL, etc. |
| NoteID | INT(10,0) | True |  | False | NOTE | Reference to a note |
| OverrideCalculation | BIT | True | (0) | False |  | If true, the calculation of hours has been overridden |
| OvertimeHours | DECIMAL(28,10) | True | (0.0) | False |  | The overtime hours the attendance has been given |
| OvertimeRuleApplied | INT(10,0) | True |  | False |  | Determines overtime rule being applied to the day. 0-NoOvertime, 1-DailyOvertime, 2-WeeklyOvertime, 3-ConsecutiveDayOvertime |
| PayDay | SMALLDATETIME | True | (getutcdate()) | False |  | The payday associated with the attendance |
| PayDayLocal | DATETIME | True |  | False |  | The payday in the users local timezone associated with the attendance |
| PayPeriodID | INT(10,0) | True |  | False | PAY_PERIOD | The ID of the pay period record this table is associated with |
| PayRule | NVARCHAR(20) | True |  | False | PAY_RULE | The payrule linked to this attendance.  Linked to the PAY_RULE table |
| RateAmount | DECIMAL(28,10) | True | (0.0) | False |  | For future use. |
| RegularHours | DECIMAL(28,10) | True | (0.0) | False |  | The regular hours associated with the attendance |
| Revision | INT(10,0) | True | (1) | False |  | Not used. |
| ScheduleBeginWork | DATETIME | True |  | False |  | The scheduled attendance start time in UTC time |
| ScheduleBeginWorkLocal | DATETIME | True |  | False |  | The scheduled attendance start time in the employees local time zone |
| ScheduleEndWork | DATETIME | True |  | False |  | The scheduled end time for the given attendance in UTC time |
| ScheduleEndWorkLocal | DATETIME | True |  | False |  | The scheduled end time for the given attendance in the employees local time zone |
| Shift | NVARCHAR(20) | True |  | False |  | The shift the attendance was performed in |
| StartTime | DATETIME | True | (getutcdate()) | False |  | The start time for the attendance in UTC time |
| StartTimeLocal | DATETIME | True |  | False |  | The start time for the attendance in the employee local time zone |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | The time zone the attendance was performed in |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | The work center the attendance was performed at |
| WorkPeriod | NVARCHAR(20) | True |  | False |  | The related Work Center for this Attendance, as derived by the system. |

## Primary Key

- **PK_ATTENDANCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_ATTENDANCE_ATTENDANCE_STATUS** — ATTENDANCE -> ATTENDANCE_STATUS (`AttendanceStatus -> AttendanceStatus`)
- **FK_ATTENDANCE_CURRENCY** — ATTENDANCE -> CURRENCY (`EarningsCurrencyCode -> CurrencyCode`)
- **FK_ATTENDANCE_DEPARTMENT** — ATTENDANCE -> DEPARTMENT (`Department -> Department`)
- **FK_ATTENDANCE_EARN_CODES** — ATTENDANCE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_ATTENDANCE_EMPLOYEE** — ATTENDANCE -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_ATTENDANCE_FACILITY** — ATTENDANCE -> FACILITY (`Facility -> Facility`)
- **FK_ATTENDANCE_NOTE** — ATTENDANCE -> NOTE (`NoteID -> ID`)
- **FK_ATTENDANCE_PAY_PERIOD** — ATTENDANCE -> PAY_PERIOD (`PayPeriodID -> ID`)
- **FK_ATTENDANCE_PAY_RULE** — ATTENDANCE -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_ATTENDANCE_TIMEZONE** — ATTENDANCE -> TIMEZONE (`TimeZoneID -> TimeZoneID`)
- **FK_ATTENDANCE_WORK_ADD_ON** — ATTENDANCE -> WORK_ADD_ON (`Facility, AfterAddOnName1 -> Facility, AddOnName`)
- **FK_ATTENDANCE_WORK_ADD_ON1** — ATTENDANCE -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_ATTENDANCE_WORK_ADD_ON2** — ATTENDANCE -> WORK_ADD_ON (`BeforeAddOnName -> AddOnName`)
- **FK_ATTENDANCE_WORK_CENTER** — ATTENDANCE -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_ACTION_FLAG_ATTENDANCE** — ATTENDANCE_ACTION_FLAG -> ATTENDANCE (`AttendanceID -> ID`)
- **FK_ATTENDANCE_APPROVAL_ATTENDANCE** — ATTENDANCE_APPROVAL -> ATTENDANCE (`AttendanceID -> ID`)
- **FK_ATTENDANCE_BREAKS_ATTENDANCE** — ATTENDANCE_BREAK -> ATTENDANCE (`AttendanceID -> ID`)
- **FK_ATTENDANCE_HOURS_ATTENDANCE** — ATTENDANCE_HOURS -> ATTENDANCE (`AttendanceID -> ID`)
- **FK_LABOR_ATTENDANCE** — LABOR -> ATTENDANCE (`AttendanceID -> ID`)
- **FK_TEAM_ATTENDANCE_ATTENDANCE** — EMPLOYEE_TEAM_ATTENDANCE -> ATTENDANCE (`AttendanceID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ATTENDANCE_ATTENDANCE_STATUS** on `AttendanceStatus`
- **IF_ATTENDANCE_NOTE** on `NoteID`
- **IF_ATTENDANCE_PAY_PERIOD** on `PayPeriodID`
- **IF_ATTENDANCE_PAY_RULE** on `PayRule, Facility`
- **IF_ATTENDANCE_WORK_ADD_ON** on `AfterAddOnName1, Facility`
- **IF_ATTENDANCE_WORK_ADD_ON1** on `Facility, AfterAddOnName1`
- **IF_ATTENDANCE_WORK_ADD_ON2** on `Facility, AfterAddOnName2`
- **IXD_EmployeeID_PayDay** on `EmployeeID, PayDay`
- **IXD_WorkCenter_AttendanceStatus** on `WorkCenter, AttendanceStatus`
