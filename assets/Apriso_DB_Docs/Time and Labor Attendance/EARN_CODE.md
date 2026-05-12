# EARN_CODE

**Database:** Operational

**Description:** Stores all the valid Earn Codes in the system. An earn code is a 40 character code that describes the Pay Type (e.g. REG for regular, SICK for sick time). Earn codes are common across all Facilities a

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Color | NVARCHAR(20) | True |  | False |  | Color of the Earn Code when it is displayed in the CALENDAR maintenance screens and as the default color in some of the  Time Manager grids. |
| EarnCode | NVARCHAR(20) | False |  | True |  | Earn code that any Attendance must be performed under. |
| EarnCodeClassID | INT(10,0) | True |  | False | EARN_CODE_CLASS | The class of the earncode. |
| ExternalSystemEarnCode | NVARCHAR(50) | True |  | False |  | Corresponding earn code in the Payroll system or a system external to Apriso. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_EARN_CODES** on `EarnCode`

## Foreign Keys (this table -> other)

- **FK_EARN_CODE_EARN_CODE_CLASS** — EARN_CODE -> EARN_CODE_CLASS (`EarnCodeClassID -> ID`)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_EARN_CODES** — ATTENDANCE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_ATTENDANCE_HOURS_EARN_CODE** — ATTENDANCE_HOURS -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_CALENDAR_DAYS_EARN_CODES1** — CALENDAR_DAY -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_EMPLOYEE_CALL_IN_SCHEDULE_EARN_CODE** — EMPLOYEE_CALL_IN_SCHEDULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_EMPLOYEE_EARN_CODE_CONVERSION_EARN_CODE** — EMPLOYEE_EARN_CODE_CONVERSION -> EARN_CODE (`ToEarnCode -> EarnCode`)
- **FK_EMPLOYEE_EARN_CODE_CONVERSION_EARN_CODES2** — EMPLOYEE_EARN_CODE_CONVERSION -> EARN_CODE (`FromEarnCode -> EarnCode`)
- **FK_EMPLOYEE_EARNED_HOURS_EARN_CODES1** — EMPLOYEE_EARNED_HOURS -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_EMPLOYEE_WORK_SCHEDULE_EARN_CODES1** — EMPLOYEE_WORK_SCHEDULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_FACILITY_WORK_SCHEDULE_EARN_CODE** — FACILITY_WORK_SCHEDULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_LABOR_EARN_CODE** — LABOR -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_LABOR_HOURS_EARN_CODE** — LABOR_HOURS -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_PAY_CYCLE_EARN_CODE** — PAY_CYCLE -> EARN_CODE (`FillInEarnCode -> EarnCode`)
- **FK_PAY_RULE_EARN_CODE** — PAY_RULE -> EARN_CODE (`DefaultRegularEarnCode -> EarnCode`)
- **FK_PAY_RULE_EARN_CODE1** — PAY_RULE -> EARN_CODE (`DefaultHolidayEarnCode -> EarnCode`)
- **FK_PAY_RULE_EARN_CODE2** — PAY_RULE -> EARN_CODE (`FillInEarnCode -> EarnCode`)
- **FK_PAY_RULE_EARN_CODE3** — PAY_RULE -> EARN_CODE (`OutsideEarnCode -> EarnCode`)
- **FK_PAY_RULE_EARN_CODES_EARN_CODES1** — PAY_RULE_EARN_CODE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_RESOURCE_MAINT_TASK_SC_EX_RULE_01** — RESOURCE_MAINT_TASK_SC_EX_RULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_RESOURCE_WORK_SCHEDULE_EARN_CODE** — RESOURCE_WORK_SCHEDULE -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_EARN_CODES** — ROTATING_WORK_SCHEDULE_DETAIL -> EARN_CODE (`EarnCode -> EarnCode`)
- **FK_WORK_CENTER_WORK_SCHEDULE_EARN_CODE** — WORK_CENTER_WORK_SCHEDULE -> EARN_CODE (`EarnCode -> EarnCode`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EARN_CODE_EARN_CODE_CLASS** on `EarnCodeClassID`
