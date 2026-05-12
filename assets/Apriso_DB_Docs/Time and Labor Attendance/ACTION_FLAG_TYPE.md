# ACTION_FLAG_TYPE

**Database:** Operational

**Description:** Stores all the actions that could possibly occur to either an Attendance or Labor record when the system adjusts its start or end times in any way.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionFlagType | SMALLINT(5,0) | False |  | True |  | Type of Action flag that will be associated with either a Labor or Attendance. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ACTION_FLAG_TYPE** on `ActionFlagType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_ACTION_FLAG_ACTION_FLAG_TYPE** — ATTENDANCE_ACTION_FLAG -> ACTION_FLAG_TYPE (`ActionFlagType -> ActionFlagType`)
- **FK_LABOR_ACTION_FLAG_ACTION_FLAG_TYPE** — LABOR_ACTION_FLAG -> ACTION_FLAG_TYPE (`ActionFlagType -> ActionFlagType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
