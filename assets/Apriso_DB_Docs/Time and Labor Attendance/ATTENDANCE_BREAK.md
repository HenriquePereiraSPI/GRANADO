# ATTENDANCE_BREAK

**Database:** Operational

**Description:** Stores Break information for each Attandance within the day. Each Break taken during the day will result in a new record being created in this table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AdjustedStartTime | DATETIME | True |  | False |  | Adjusted start time of the Attendance Break based on the Attendance and Labor rules. |
| AdjustedStartTimeLocal | DATETIME | True |  | False |  | Adjusted start time of the Attendance Break based on the Attendance and Labor rules in the timez one of the user. |
| AdjustedStopTime | DATETIME | True |  | False |  | Adjusted stop time of the Attendance Break based on the Attendance and Labor rules. |
| AdjustedStopTimeLocal | DATETIME | True |  | False |  | Adjusted stop time of the Attendance Break based on the Attendance and Labor rules in the time zone of the user. |
| AttendanceID | INT(10,0) | True |  | False | ATTENDANCE | ID of the Attendance record the table is associated with. |
| AutoDeducted | BIT | True |  | False |  | Denotes that the Break is to be automatically deducted from the ATTENDANCE and LABOR tables. |
| BreakType | SMALLINT(5,0) | True |  | False | BREAK_TYPE | Type of the Break. |
| CalculationOverriden | BIT | True |  | False |  | If True, the calculation of the hours for the Break have been overridden. |
| EndTime | DATETIME | True |  | False |  | End time of the Attendance break in UTC time. |
| EndTimeLocal | DATETIME | True |  | False |  | Actual End time for the Attendance Break in the Employee's local time zone. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| RegularHours | DECIMAL(28,10) | True |  | False |  | Regular hours associated with the Attendance Break. |
| ScheduleBeginBreak | DATETIME | True |  | False |  | Scheduled Break start time in UTC time. |
| ScheduleBeginBreakLocal | DATETIME | True |  | False |  | Scheduled Break start time in the Employee's local time zone. |
| ScheduleEndBreak | DATETIME | True |  | False |  | Scheduled Break end time in UTC time. |
| ScheduleEndBreakLocal | DATETIME | True |  | False |  | Scheduled Break end time in the Employee's local time zone. |
| StartTime | DATETIME | True |  | False |  | Start time for the Attendance Break in UTC time. |
| StartTimeLocal | DATETIME | True |  | False |  | Start time of the Attendance Break in the Employee's local time zone. |
| Status | SMALLINT(5,0) | True |  | False | ATTENDANCE_STATUS | Status of the Attendance Break. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TimeZoneID | INT(10,0) | True |  | False | TIMEZONE | Time zone the Attendance Break was performed in. |

## Primary Key

- **PK_ATTENDANCE_BREAKS** on `ID`

## Foreign Keys (this table -> other)

- **FK_ATTENDANCE_BREAK_ATTENDANCE_STATUS** — ATTENDANCE_BREAK -> ATTENDANCE_STATUS (`Status -> AttendanceStatus`)
- **FK_ATTENDANCE_BREAK_TIMEZONE** — ATTENDANCE_BREAK -> TIMEZONE (`TimeZoneID -> TimeZoneID`)
- **FK_ATTENDANCE_BREAKS_ATTENDANCE** — ATTENDANCE_BREAK -> ATTENDANCE (`AttendanceID -> ID`)
- **FK_ATTENDANCE_BREAKS_BREAK_TYPES** — ATTENDANCE_BREAK -> BREAK_TYPE (`BreakType -> BreakType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ATTENDANCE_BREAK_ATTENDANCE_STATUS** on `Status`
- **IF_ATTENDANCE_BREAKS_ATTENDANCE** on `AttendanceID`
