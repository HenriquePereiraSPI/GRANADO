# ROTATING_WORK_SCHEDULE_DETAIL

**Database:** Operational

**Description:** The ROTATING_WORK_SCHEDULE_DETAIL table is used the detailed data under the ROTATING_WORK_SCHEDULE table for each day in the rotating schedule.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AfterAddOnName1 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute, which is carried down to the attendance record indicating a ‘Work Add On’ before overtime. An example would be to add $1 per regular hour to pay (calculated external to Time Manager). |
| AfterAddOnName2 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute, which gets carried down to the attendance record indicating a ‘Work Add On’ after overtime. An example would be to add $2 per overtime hour to pay (calculated external to Time Manager). |
| BeforeAddOnName | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute, which gets carried down to the attendance record indicating a ‘Work Add On’ after overtime. An example would be to add $2 per overtime hour to pay (calculated external to Time Manager). |
| DaySequenceNo | INT(10,0) | False |  | True |  | The sequence within the day for the rotating schedule, not used in Time Manager. |
| EarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | For future use. |
| EffectiveDate | DATETIME | True |  | False | WORK_PERIOD | Validity date (start) of the entity in UTC |
| Facility | NVARCHAR(40) | True |  | False | TEAM | The rotating work schedule detail's facility |
| NonWorking | BIT | True |  | False |  | The NONWORKING flag the employee has an override schedule for for the specified Pay Day.  A non-working day establishes a schedules hours, even though the employee is not formally scheduled. |
| PayPeriodEndTime | DATETIME | True |  | False |  | Not used. |
| RotatingScheduleID | INT(10,0) | False |  | True | ROTATING_WORK_SCHEDULE | Link back to the parent ROTATING_WORK_SCHEDULE row. |
| ScheduleEndTime | DATETIME | True |  | False |  | The scheduled break end time for a rotating schedule in UTC time |
| ScheduleStartTime | DATETIME | True |  | False |  | The scheduled start time for the break of the rotating schedule in UTC time |
| SequenceNo | INT(10,0) | False |  | True |  | The sequence of the day for the rotating schedule |
| Shift | NVARCHAR(20) | True |  | False | WORK_PERIOD | The shift the rotating schedule is for |
| Team | NVARCHAR(40) | True |  | False | TEAM | For future use. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | The work period the rotating schedule is for |

## Primary Key

- **PK_ROTATING_WORK_SCHEDULE_DETAIL** on `RotatingScheduleID, DaySequenceNo, SequenceNo`

## Foreign Keys (this table -> other)

- **FK_ROTATING_WORK_SCHEDULE_DETAIL_EARN_CODES** — ROTATING_WORK_SCHEDULE_DETAIL -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_ROTATING_WORK_SCHEDULE** — ROTATING_WORK_SCHEDULE_DETAIL -> ROTATING_WORK_SCHEDULE (`RotatingScheduleID -> ID`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_TEAM** — ROTATING_WORK_SCHEDULE_DETAIL -> TEAM (`Facility, Team -> Facility, Team`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON** — ROTATING_WORK_SCHEDULE_DETAIL -> WORK_ADD_ON (`Facility, AfterAddOnName1 -> Facility, AddOnName`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON1** — ROTATING_WORK_SCHEDULE_DETAIL -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON2** — ROTATING_WORK_SCHEDULE_DETAIL -> WORK_ADD_ON (`BeforeAddOnName -> AddOnName`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_WORK_PERIOD** — ROTATING_WORK_SCHEDULE_DETAIL -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ROTATING_WORK_SCHEDULE_DAYS_WORK_ADD_ONS** on `Facility, AfterAddOnName1`
- **IF_ROTATING_WORK_SCHEDULE_DAYS_WORK_ADD_ONS1** on `Facility, AfterAddOnName2`
- **IF_ROTATING_WORK_SCHEDULE_DETAIL_TEAM** on `Facility, Team`
- **IF_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON** on `AfterAddOnName1, Facility`
- **IF_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON1** on `AfterAddOnName2, Facility`
- **IF_ROTATING_WORK_SCHEDULE_DETAIL_WORK_ADD_ON2** on `BeforeAddOnName, Facility`
- **IF_ROTATING_WORK_SCHEDULE_DETAIL_WORK_PERIOD** on `Shift, Facility, WorkPeriod, EffectiveDate`
