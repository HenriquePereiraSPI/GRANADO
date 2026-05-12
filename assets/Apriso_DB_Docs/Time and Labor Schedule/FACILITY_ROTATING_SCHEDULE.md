# FACILITY_ROTATING_SCHEDULE

**Database:** Operational

**Description:** This table stores data for a Facility concerning rotating schedules.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | The date at which the Rotating Schedule is no longer valid. |
| EffectiveDate | DATETIME | True |  | False |  | The date from which the schedule is valid. |
| Facility | NVARCHAR(40) | False |  | False | FACILITY | The Facility of the Rotating Schedule. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the record. |
| RotatingScheduleID | INT(10,0) | False |  | False | ROTATING_WORK_SCHEDULE | The Rotating Schedule ID. |

## Primary Key

- **PK_FACILITY_ROTATING_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_FACILITY_ROTATING_SCHEDULE_FACILITY** — FACILITY_ROTATING_SCHEDULE -> FACILITY (`Facility -> Facility`)
- **FK_FACILITY_ROTATING_SCHEDULE_WORK_SCHEDULE** — FACILITY_ROTATING_SCHEDULE -> ROTATING_WORK_SCHEDULE (`RotatingScheduleID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_FACILITY_ROTATING_SCHEDULE_WORK_SCHEDULE** on `RotatingScheduleID`
