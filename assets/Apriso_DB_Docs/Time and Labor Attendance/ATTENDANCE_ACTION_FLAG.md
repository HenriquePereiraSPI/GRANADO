# ATTENDANCE_ACTION_FLAG

**Database:** Operational

**Description:** Stores all valid Actions in regards to the modification of time that have occurred against a given Attendance record.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionFlagType | SMALLINT(5,0) | True |  | False | ACTION_FLAG_TYPE | Type of Action Flag that will be associated with the Attendance. |
| AttendanceID | INT(10,0) | True |  | False | ATTENDANCE | ID of the Attendance record involved. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |

## Primary Key

- **PK_ATTENDANCE_ACTION_FLAG** on `ID`

## Foreign Keys (this table -> other)

- **FK_ATTENDANCE_ACTION_FLAG_ACTION_FLAG_TYPE** — ATTENDANCE_ACTION_FLAG -> ACTION_FLAG_TYPE (`ActionFlagType -> ActionFlagType`)
- **FK_ATTENDANCE_ACTION_FLAG_ATTENDANCE** — ATTENDANCE_ACTION_FLAG -> ATTENDANCE (`AttendanceID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_ATTENDANCE_ACTION_FLAG_ATTENDANCE** on `AttendanceID`
