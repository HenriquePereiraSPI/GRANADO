# FACILITY_WORK_SCHEDULE

**Database:** Operational

**Description:** This table stores data for a Facility concerning daily schedules.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DefaultSchedule | BIT | True | ((0)) | False |  | Indicates if the schedule is the default. |
| EarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | The Earn Code of the schedule. |
| EffectiveDate | DATETIME | True |  | False | WORK_PERIOD | The date from which the schedule is valid. |
| EndTime | DATETIME | True |  | False |  | The time at which the shift ends. |
| Facility | NVARCHAR(40) | False |  | False | FACILITY | The Facility of the schedule. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the record. |
| NonWorking | BIT | True |  | False |  | Indicates if the schedule is for non-working hours. |
| PayDay | DATETIME | False |  | False |  | The date of the schedule. |
| ScheduleHours | DECIMAL(28,10) | True |  | False |  | The number of hours between the Start Time and End Time. |
| Shift | NVARCHAR(20) | True |  | False | WORK_PERIOD | The Work Shift of the schedule. |
| StartTime | DATETIME | True |  | False |  | The time at which the shift starts. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | The Work Period of the schedule. |

## Primary Key

- **PK_FACILITY_WORK_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_FACILITY_WORK_SCHEDULE_EARN_CODE** — FACILITY_WORK_SCHEDULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_FACILITY_WORK_SCHEDULE_FACILITY** — FACILITY_WORK_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_FACILITY_WORK_SCHEDULE_WORK_PERIOD** — FACILITY_WORK_SCHEDULE -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_FACILITY_WORK_SCHEDULE_WORK_SHIFT** — FACILITY_WORK_SCHEDULE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)

## Referenced By (other tables -> this)

- **FK_FACILITY_BREAK_SCHEDULE_FACILITY_WORK_SCHEDULE** — FACILITY_BREAK_SCHEDULE -> FACILITY_WORK_SCHEDULE (`FacilityWorkScheduleID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_FACILITY_WORK_SCHEDULE_WORK_PERIOD** on `Shift, Facility, WorkPeriod, EffectiveDate`
