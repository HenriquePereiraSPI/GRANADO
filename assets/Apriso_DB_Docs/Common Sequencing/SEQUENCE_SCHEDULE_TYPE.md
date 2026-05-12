# SEQUENCE_SCHEDULE_TYPE

**Database:** Operational

**Description:** Sequence schedule type determines the type of pattern that can be applied to a sequence queue to produce a new sequence

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| SequenceScheduleType | SMALLINT(5,0) | False |  | True |  | Specifies how a pattern is applied to a sequence � in consecutive copies (revolver) or exhausting each product at a time (raster). |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_SEQUENCE_SCHEDULE_TYPE** on `SequenceScheduleType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_SEQUENCE_SCHEDULE_SEQUENCE_SCHEDULE_TYPE** — SEQUENCE_SCHEDULE -> SEQUENCE_SCHEDULE_TYPE (`SequenceScheduleType -> SequenceScheduleType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
