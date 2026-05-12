# WORK_CENTER_WORK_SCHEDULE

**Database:** Operational

**Description:** The overridden schedule for the work center

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DefaultSchedule | BIT | True | ((0)) | False |  | Is Default Schedule. |
| EarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | The earn code for the overridden schedule |
| EffectiveDate | DATETIME | True |  | False | WORK_PERIOD | The effective date of the work period the overridden schedule is for |
| EndTime | DATETIME | True |  | False |  | The end time for the overridden schedule (in local time) |
| Facility | NVARCHAR(40) | False |  | False | FACILITY | The facility for the overridden schedule |
| ID | INT(10,0) | False |  | True |  |  |
| NonWorking | BIT | True |  | False |  | Determines if the overridden schedule is working or not |
| PayDay | DATETIME | False |  | False |  | The pay day the overridden schedule is for |
| ScheduleHours | DECIMAL(28,10) | True |  | False |  | The hours defined by the overridden schedule, 0 if NonWorking is true, else EndTime - StartTime |
| Shift | NVARCHAR(20) | True |  | False | WORK_PERIOD | The shift the overridden schedule is for |
| StartTime | DATETIME | True |  | False |  | The start time for the overridden schedule (in local time) |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WorkCenter | NVARCHAR(40) | False |  | False | WORK_CENTER | The work center the overridden schedule is for |
| WorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | The work period for the overridden schedule |

## Primary Key

- **PK_WORK_CENTER_WORK_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_WORK_CENTER_WORK_SCHEDULE_EARN_CODE** — WORK_CENTER_WORK_SCHEDULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_WORK_CENTER_WORK_SCHEDULE_FACILITY** — WORK_CENTER_WORK_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_WORK_CENTER_WORK_SCHEDULE_WORK_CENTER** — WORK_CENTER_WORK_SCHEDULE -> WORK_CENTER (`WorkCenter -> WorkCenter`)
- **FK_WORK_CENTER_WORK_SCHEDULE_WORK_PERIOD** — WORK_CENTER_WORK_SCHEDULE -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_WORK_CENTER_WORK_SCHEDULE_WORK_SHIFT** — WORK_CENTER_WORK_SCHEDULE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)

## Referenced By (other tables -> this)

- **FK_WORK_CENTER_BREAK_SCHEDULE_WORK_CENTER_WORK_SCHEDULE** — WORK_CENTER_BREAK_SCHEDULE -> WORK_CENTER_WORK_SCHEDULE (`WorkCenterWorkScheduleID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_CENTER_WORK_SCHEDULE_WORK_PERIOD** on `Shift, Facility, WorkPeriod, EffectiveDate`
