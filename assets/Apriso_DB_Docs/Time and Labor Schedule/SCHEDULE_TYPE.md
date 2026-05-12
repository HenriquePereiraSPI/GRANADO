# SCHEDULE_TYPE

**Database:** Operational

**Description:** Order line schedule, rotating work schedule and production schedule types

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ScheduleType | SMALLINT(5,0) | False |  | True |  | The type of the schedule that will be associated with either rotating work schedule |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SCHEDULE_TYPES** on `ScheduleType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ROTATING_WORK_SCHEDULE_SCHEDULE_TYPES** — ROTATING_WORK_SCHEDULE -> SCHEDULE_TYPE (`ScheduleType -> ScheduleType`)
- **FK_WIP_LINE_SCHEDULES_SCHEDULE_TYPES** — WIP_LINE_SCHEDULE -> SCHEDULE_TYPE (`ScheduleType -> ScheduleType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
