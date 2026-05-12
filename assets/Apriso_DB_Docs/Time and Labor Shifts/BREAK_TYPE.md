# BREAK_TYPE

**Database:** Operational

**Description:** Stores all the possible types of Breaks that can occur during a day.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BreakType | SMALLINT(5,0) | False |  | True |  | Type of the Break. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_BREAK_TYPES** on `BreakType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_BREAKS_BREAK_TYPES** — ATTENDANCE_BREAK -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_EMPLOYEE_BREAK_SCHEDULE_BREAK_TYPE** — EMPLOYEE_BREAK_SCHEDULE -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_FACILITY_BREAK_SCHEDULE_BREAK_TYPE** — FACILITY_BREAK_SCHEDULE -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_RESOURCE_BREAK_SCHEDULE_BREAK_TYPE** — RESOURCE_BREAK_SCHEDULE -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_WORK_BREAK_BREAK_TYPE** — WORK_BREAK -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_WORK_CENTER_BREAK_SCHEDULE_BREAK_TYPE** — WORK_CENTER_BREAK_SCHEDULE -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_WORK_PERIOD_BREAK_BREAK_TYPE** — WORK_PERIOD_BREAK -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_WORK_PERIOD_BREAKS_BREAK_TYPES** — WORK_SHIFT_BREAK -> BREAK_TYPE (`BreakType -> BreakType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
