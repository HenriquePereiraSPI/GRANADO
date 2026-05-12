# SEQUENCE_SCHEDULE

**Database:** Operational

**Description:** Stores revolving schedules.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DiscontinueDate | DATETIME | True |  | False |  | The sequence schedule is discontinued after this date. The schedule can't be used after this date. |
| EffectiveDate | DATETIME | True |  | False |  | The sequence schedule is effective from this date. The schedule can't be used before this date. |
| ID | INT(10,0) | False |  | True |  | Auto incremented field. Primary Key. |
| Name | NVARCHAR(40) | False |  | False |  | A name for the schedule. It is unique. |
| ScheduleTimeSpanSeconds | INT(10,0) | True |  | False |  | Time span. |
| SequenceScheduleType | SMALLINT(5,0) | True |  | False | SEQUENCE_SCHEDULE_TYPE | Specifies how the pattern is applied, either as a revolving sequence or a raster of each product. See SEQUENCE_SCHEDULE_TYPE for detail |

## Primary Key

- **PK_SEQUENCE_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_SEQUENCE_SCHEDULE_SEQUENCE_SCHEDULE_TYPE** — SEQUENCE_SCHEDULE -> SEQUENCE_SCHEDULE_TYPE (`SequenceScheduleType -> SequenceScheduleType`)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_SCHEDULE_DETAIL_SEQUENCE_SCHEDULE** — SEQUENCE_SCHEDULE_DETAIL -> SEQUENCE_SCHEDULE (`SequenceScheduleID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
