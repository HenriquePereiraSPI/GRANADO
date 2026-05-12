# PAY_CYCLE

**Database:** Operational

**Description:** Stores all the Pay Cycles available in the system. A Pay Cycle is a yearly collection of Pay Periods. A common weekly Pay Cycle would be a consecutive seven-day period, which ends 168 consecutive hours after it starts. This weekly Pay Cycle would begin at 12:00 am Monday and end seven days later at 12:00 am, the following Monday. Where a normal workday might be considered to begin at 7:00 am and end at 3:30 pm.  Usually a 9/80-pay cycle would be a consecutive seven-day period, which ends 168 consecutive hours after it starts, however the start would be at a specific time of day other then midnight. An example 9/80 weekly pay cycle could begin 11:00 am Friday and ends seven days later at 11:00 am, the following Friday. Where a normal workday might be considered to begin at 7:00 am and ends at 3:30 pm.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CalendarYear | DATETIME | False |  | True |  | Calendar year the Pay Cycle is defined as. |
| EndOfDay | DATETIME | True |  | False |  | Time at which to perform a hard end of day (e.g. if the day always starts/ends at 5:00am - regardless of shift definitions - then 5:00am should be the End of Day setting). This value is then used by the MovePayDay Business Component to divide Attendance. |
| EndOfWeek | DATETIME | True |  | False |  | Time at which to perform a hard end of week. This is used by the MovePayPeriod Business Component, which must be run at or soon after the End of Week time as a scheduled event. Used for a 9/80 Pay Rule. |
| EndOfWeekOffSet | BIGINT(19,0) | True |  | False |  | Setting to perform a hard end of week for a Pay Period at a varying time based on an Employee's normal shift for that day. The time is determined by taking the Employee's normal start of the work period and adding the offset to it. |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Facility of the Pay Cycle. |
| FillInEarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | <null> |
| LockOutDate | DATETIME | True |  | False |  | Date by which the Pay Period is locked to edits. Only a Payroll Administrator can edit after this date. |
| PayCycle | INT(10,0) | False |  | True |  | Unique identifier of the Pay Rule. |
| PayCycleFormat | SMALLINT(5,0) | True |  | False | PAY_CYCLE_FORMAT | Format of the Pay Cycle. Valid formats include the following: Weekly, 9/80, BiWeekly and 6/2 (BiWeekly and 6/2 are for future use). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_PAY_CYCLES** on `Facility, PayCycle, CalendarYear`

## Foreign Keys (this table -> other)

- **FK_PAY_CYCLE_EARN_CODE** — PAY_CYCLE -> EARN_CODE (`FillInEarnCode -> EarnCode`)
- **FK_PAY_CYCLE_FACILITY** — PAY_CYCLE -> FACILITY (`Facility -> Facility`)
- **FK_PAY_CYCLES_PAY_CYCLE_FORMATS** — PAY_CYCLE -> PAY_CYCLE_FORMAT (`PayCycleFormat -> PayCycleFormat`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_PAY_CYCLE_PAY_CYCLE** — EMPLOYEE_PAY_CYCLE -> PAY_CYCLE (`Facility, CalendarYear, PayCycle -> Facility, CalendarYear, PayCycle`)
- **FK_PAY_PERIOD_PAY_CYCLE** — PAY_PERIOD -> PAY_CYCLE (`Facility, PayCycle, CalendarYear -> Facility, PayCycle, CalendarYear`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PAY_CYCLES_PAY_CYCLE_FORMATS** on `PayCycleFormat`
