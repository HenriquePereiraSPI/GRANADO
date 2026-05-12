# EMPLOYEE_BREAK_SCHEDULE

**Database:** Operational

**Description:** Stores override data for an Employees Schedule concerning Breaks.  Rows in this table will override the data maintained in the CALENDAR, WORK_SHIFT, WORK_SHIFT_BREAK, WORK_PERIOD, WORK_PERIOD_BREAK tables.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BreakType | SMALLINT(5,0) | True |  | False | BREAK_TYPE | Type of the Break. |
| EmployeeWorkScheduleID | INT(10,0) | True |  | False | EMPLOYEE_WORK_SCHEDULE | ID of the Employee Work Schedule (linked to EMPLOYEE_WORK_SCHEDULE). |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| ScheduleEndTime | DATETIME | True |  | False |  | Scheduled break end time in UTC time. |
| ScheduleStartTime | DATETIME | True |  | False |  | Scheduled start time for the Break in UTC time. |

## Primary Key

- **PK_EMPLOYEE_BREAK_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_BREAK_SCHEDULE_BREAK_TYPE** — EMPLOYEE_BREAK_SCHEDULE -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_EMPLOYEE_BREAK_SCHEDULE_EMPLOYEE_WORK_SCHEDULE** — EMPLOYEE_BREAK_SCHEDULE -> EMPLOYEE_WORK_SCHEDULE (`EmployeeWorkScheduleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_BREAK_SCHEDULE_EMPLOYEE_WORK_SCHEDULE** on `EmployeeWorkScheduleID`
