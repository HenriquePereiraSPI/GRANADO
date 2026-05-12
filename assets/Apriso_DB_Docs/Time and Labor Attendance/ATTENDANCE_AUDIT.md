# ATTENDANCE_AUDIT

**Database:** Operational

**Description:** Stores a history of edits performed against the ATTENDANCE table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustedStartTime | DATETIME | True |  | False |  | Original adjust start time of the Attendance based on the Attendance and Labor rules. |
| AdjustedStartTimeLocal | DATETIME | True |  | False |  | Original adjusted start time of the attendance based on the Attendance and Labor rules in the time zone of the user. |
| AdjustedStopTime | DATETIME | True |  | False |  | Original adjust stop time of the Attendance based on the Attendance and Labor rules. |
| AdjustedStopTimeLocal | DATETIME | True |  | False |  | Original adjusted stop time of the Attendance based on the Attendance and Labor rules in the time zone of the user. |
| AfterAddOnName1 | NVARCHAR(40) | True |  | False |  | Original value of the AFTERADDONNAME1 assigned to the Attendance row. |
| AfterAddOnName2 | NVARCHAR(40) | True |  | False |  | Original value of the AFTERADDONNAME2 assigned to the Attendance row. |
| AttendanceID | INT(10,0) | False |  | False |  | ID of the Attendance record involved. |
| AttendanceStatus | SMALLINT(5,0) | True |  | False |  | Original status of the Attendance. |
| AuditAction | SMALLINT(5,0) | True |  | False | TIME_AUDIT_ACTION | Action performed on the Attendance: change, add or delete. |
| AuditEmployeeID | INT(10,0) | True |  | False |  | Employee the Attendance Audit record is for. |
| BeforeAddOnName | NVARCHAR(40) | True |  | False |  | Original value of the BEFOREADDONNAME assigned to the Attendance row. |
| CallIn | BIT | True |  | False |  | Original value of the CALLIN assigned to the Attendance row. |
| ChangedBy | NVARCHAR(50) | True |  | False |  | Person who changed the Attendance record. |
| ChangedOn | DATETIME | True |  | False |  | When the Attendance record was changed. |
| ChangedOnLocal | DATETIME | True |  | False |  | When the Attendance record was changed in the user's local time zone. |
| Department | NVARCHAR(40) | True |  | False |  | Original department the Attendance was performed at. |
| DoubleTimeHours | DECIMAL(28,10) | True | (0.0) | False |  | Original amount of double-time hours assigned to the Attendance. |
| EarnCode | NVARCHAR(20) | True |  | False |  | Original EarnCode the Attendance is performed as. |
| EarningsCurrencyCode | NVARCHAR(3) | True |  | False |  | Original value of the EARNINGSCURRENCYCODE assigned to the Attendance row. |
| EffectiveDate | DATETIME | True |  | False |  | Validity (start) sate of the entity in UTC. |
| EffectiveDateLocal | DATETIME | True |  | False |  | Original effective date for the work period the Attendance was linked to. |
| EndTime | DATETIME | True |  | False |  | End time of the Attendance in UTC time. |
| EndTimeLocal | DATETIME | True |  | False |  | Actual end time for the Attendance in the Employee's local time zone. |
| Facility | NVARCHAR(40) | True |  | False |  | Facility the Attendance was performed in. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| MiscDoubleTimeHours | DECIMAL(28,10) | True | (0.0) | False |  | Original value of the MISCDOUBLETIMEHOURS assigned to the Attendance row. |
| MiscOvertimeHours | DECIMAL(28,10) | True | (0.0) | False |  | Original value of the MISCOVERTIMEHOURS assigned to the Attendance row. |
| MiscRegularHours | DECIMAL(28,10) | True | (0.0) | False |  | Original value of the MISCREGULARHOURS assigned to the Attendance row. |
| NewAdjustedStartTime | DATETIME | True |  | False |  | New value for the ADJUSTEDSTARTTIME column from the Attendance row being audited. |
| NewAdjustedStartTimeLocal | DATETIME | True |  | False |  | New value for the ADJUSTEDSTARTTIMELOCAL column from the Attendance row being audited. |
| NewAdjustedStopTime | DATETIME | True |  | False |  | New value for the ADJUSTEDSTOPTIME column from the Attendance row being audited. |
| NewAdjustedStopTimeLocal | DATETIME | True |  | False |  | New value for the ADJUSTEDSTOPTIMELOCAL column from the Attendance row being audited. |
| NewAfterAddOnName1 | NVARCHAR(40) | True |  | False |  | New value for the AFTERADDONNAME1 column from the Attendance row being audited. |
| NewAfterAddOnName2 | NVARCHAR(40) | True |  | False |  | New value for the AFTERADDONNAME2 column from the Attendance row being audited. |
| NewAttendanceStatus | SMALLINT(5,0) | True |  | False |  | New value for the ATTENDANCESTATUS column from the Attendance row being audited. |
| NewBeforeAddOnName | NVARCHAR(40) | True |  | False |  | New value for the BEFOREADDONNAME column from the Attendance row being audited. |
| NewCallIn | BIT | True |  | False |  | New value for the CALLIN column from the Attendance row being audited. |
| NewDepartment | NVARCHAR(40) | True |  | False |  | New value for the DEPARTMENT column from the Attendance row being audited. |
| NewDoubleTimeHours | DECIMAL(28,10) | True |  | False |  | New value for the DOUBLETIMEHOURS column from the Attendance row being audited. |
| NewEarnCode | NVARCHAR(20) | True |  | False |  | New value for the EARNCODE column the from Attendance row being audited. |
| NewEarningsCurrencyCode | NVARCHAR(3) | True |  | False |  | New value for the EARNINGSCURRENCYCODE column from the Attendance row being audited. |
| NewEffectiveDate | DATETIME | True |  | False |  | New value for the EFFECTIVEDATE column from the Attendance row being audited. |
| NewEffectiveDateLocal | DATETIME | True |  | False |  | New value for the EFFECTIVEDATELOCAL column from the Attendance row being audited. |
| NewEndTime | DATETIME | True |  | False |  | New value for the ENDTIME column from the Attendance row being audited. |
| NewEndTimeLocal | DATETIME | True |  | False |  | New value for the ENDTIMELOCAL column from the Attendance row being audited. |
| NewFacility | NVARCHAR(40) | True |  | False |  | New value for the FACILITY column from the Attendance row being audited. |
| NewMiscDoubleTimeHours | DECIMAL(28,10) | True |  | False |  | New value for the MISCDOUBLETIMEHOURS column from the Attendance row being audited. |
| NewMiscOvertimeHours | DECIMAL(28,10) | True |  | False |  | New value for the MISCOVERTIMEHOURS column from the Attendance row being audited. |
| NewMiscRegularHours | DECIMAL(28,10) | True |  | False |  | New value for the MISCREGULARHOURS column from the Attendance row being audited. |
| NewNoteID | INT(10,0) | True |  | False |  | New value for the NOTEID column from the Attendance row being audited. |
| NewOverrideCalculation | BIT | True |  | False |  | New value for the OVERRIDECALCULATION column from the Attendance row being audited. |
| NewOvertimeHours | DECIMAL(28,10) | True |  | False |  | New value for the OVERTIMEHOURS column from the Attendance row being audited. |
| NewPayDay | SMALLDATETIME | True |  | False |  | New value for the PAYDAY column from the Attendance row being audited. |
| NewPayDayLocal | DATETIME | True |  | False |  | New value for the PAYDAYLOCAL column from the Attendance row being audited. |
| NewPayPeriodID | INT(10,0) | True |  | False |  | New value for the PAYPERIODID column from the Attendance row being audited. |
| NewPayRule | NVARCHAR(20) | True |  | False |  | New value for the PAYRULE column from the Attendance row being audited. |
| NewRateAmount | DECIMAL(28,10) | True |  | False |  | New value for the RATEAMOUNT column from the Attendance row being audited. |
| NewRegularHours | DECIMAL(28,10) | True |  | False |  | New value for the REGULARHOURS column from the Attendance row being audited. |
| NewScheduleBeginWork | DATETIME | True |  | False |  | New value for the SCHEDULEBEGINWORK column from the Attendance row being audited. |
| NewScheduleBeginWorkLocal | DATETIME | True |  | False |  | New value for the SCHEDULEBEGINWORKLOCAL column from the Attendance row being audited. |
| NewScheduleEndWork | DATETIME | True |  | False |  | New value for the SCHEDULEENDWORK column from the Attendance row being audited. |
| NewScheduleEndWorkLocal | DATETIME | True |  | False |  | New value for the SCHEDULEENDWORKLOCAL column from the Attendance row being audited. |
| NewShift | NVARCHAR(20) | True |  | False |  | New value for the SHIFT column from the Attendance row being audited. |
| NewStartTime | DATETIME | True |  | False |  | New value for the STARTTIME column from the Attendance row being audited. |
| NewStartTimeLocal | DATETIME | True |  | False |  | New value for the STARTTIMELOCAL column from the Attendance row being audited. |
| NewTextID | INT(10,0) | True |  | False |  | New value for the TEXTID column from the Attendance row being audited. |
| NewTimeZoneID | INT(10,0) | True |  | False |  | New value for the TIMEZONEID column from the Attendance row being audited. |
| NewWorkCenter | NVARCHAR(40) | True |  | False |  | New value for the WORKCENTER column from the Attendance row being audited. |
| NewWorkPeriod | NVARCHAR(20) | True |  | False |  | New value for the WORKPERIOD column from the Attendance row being audited. |
| NoteID | INT(10,0) | True |  | False |  | Reference to a Note. |
| OverrideCalculation | BIT | True | (0) | False |  | If true, the calculation of hours will be overridden. |
| OvertimeHours | DECIMAL(28,10) | True | (0.0) | False |  | Original overtime hours the Attendance was given. |
| PayDay | DATETIME | True | (getutcdate()) | False |  | Original PayDay associated with the Attendance. |
| PayDayLocal | DATETIME | True |  | False |  | Original PayDay associated with the Attendance in the user's local time zone. |
| PayPeriodID | INT(10,0) | True |  | False |  | ID of the Pay Period record the table is associated with. |
| PayRule | NVARCHAR(20) | True |  | False |  | Original value of the PAYRULE assigned to the Attendance row. |
| RateAmount | DECIMAL(28,10) | True | (0.0) | False |  | Original value of the RATEAMOUNT assigned to the Attendance row. |
| RegularHours | DECIMAL(28,10) | True | (0.0) | False |  | Regular hours associated with the Attendance. |
| Revision | INT(10,0) | True | (1) | False |  | For future use. |
| ScheduleBeginWork | DATETIME | True |  | False |  | Scheduled Attendance start time in UTC time. |
| ScheduleBeginWorkLocal | DATETIME | True |  | False |  | Scheduled Attendance start time in the Employee's local time zone. |
| ScheduleEndWork | DATETIME | True |  | False |  | Scheduled end time for the given Attendance in UTC time. |
| ScheduleEndWorkLocal | DATETIME | True |  | False |  | Scheduled end time for the given Attendance in the Employee's local time zone. |
| Shift | NVARCHAR(20) | True |  | False |  | Shift the Attendance was performed in. |
| StartTime | DATETIME | True |  | False |  | Start time for the Attendance in UTC time. |
| StartTimeLocal | DATETIME | True |  | False |  | Start time for the Attendance in the Employee's local time zone. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | Time zone the Attendance was performed in. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | Original Work Center the Attendance was performed at. |
| WorkPeriod | NVARCHAR(20) | True |  | False |  | Original value of the WORKPERIOD assigned to the Attendance row. |

## Primary Key

- **PK_ATTENDANCE_AUDIT** on `ID`

## Foreign Keys (this table -> other)

- **FK_ATTENDANCE_AUDIT_AUDIT_ACTIONS** — ATTENDANCE_AUDIT -> TIME_AUDIT_ACTION (`AuditAction -> AuditAction`)
- **FK_ATTENDANCE_AUDIT_TIMEZONE** — ATTENDANCE_AUDIT -> TIMEZONE (`TimeZoneID -> TimeZoneID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ATTENDANCE_AUDIT_AUDIT_ACTIONS** on `AuditAction`
- **IXD_AttendanceID** on `AttendanceID`
- **IXD_AuditEmployeeID_PayDay** on `AuditEmployeeID, PayDay`
