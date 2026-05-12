# SCHEDULE_STATUS

**Database:** Operational

**Description:** Order line schedule, rotating work schedule and production schedule statuses

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ScheduleStatus | SMALLINT(5,0) | False |  | True |  | The status of the schedule that will be associated with either rotating work schedule |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SCHEDULE_STATUS** on `ScheduleStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_PRODUCTION_LINE_SCHEDULES_SCHEDULE_STATUS** — WIP_LINE_SCHEDULE -> SCHEDULE_STATUS (`ScheduleStatus -> ScheduleStatus`)
- **FK_ROTATING_WORK_SCHEDULE_SCHEDULE_STATUS** — ROTATING_WORK_SCHEDULE -> SCHEDULE_STATUS (`ScheduleStatus -> ScheduleStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
