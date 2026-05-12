# ATTENDANCE_STATUS

**Database:** Operational

**Description:** Stores all valid Attendance statuses. Statuses are not user definable and are used internally by the System. Use this table to find out all valid statuses and to translate the meaning of each to the user's local language.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AttendanceStatus | SMALLINT(5,0) | False |  | True |  | Status of Attendance involved. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ATTENDANCE_STATUS** on `AttendanceStatus`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_ATTENDANCE_STATUS** — ATTENDANCE -> ATTENDANCE_STATUS (`AttendanceStatus -> AttendanceStatus`)
- **FK_ATTENDANCE_BREAK_ATTENDANCE_STATUS** — ATTENDANCE_BREAK -> ATTENDANCE_STATUS (`Status -> AttendanceStatus`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
