# WORK_SHIFT

**Database:** Operational

**Description:** The WORK_SHIFT table is used to store all the available work shifts in the system.  An employee’s work schedule is comprised of a work shift, a work period and meals and breaks, with specific pre-determined start and end times. Work shifts and periods are used together with a company calendar to determine the employee’s default schedule. They comprise the hours an employee is expected to work, or is scheduled for Vacation, Holiday, etc. General rules about the WORK_SHIFT are defined here, more specific rules are defined in the WORK_PERIOD.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AlternateShift1 | NVARCHAR(20) | True |  | False | WORK_SHIFT | The alternate shift 1 to use if the user works outside their assigned default shift |
| AlternateShift2 | NVARCHAR(20) | True |  | False | WORK_SHIFT | The alternate shift 2 to use if the user works outside their assigned default shift |
| AlternateShift3 | NVARCHAR(20) | True |  | False | WORK_SHIFT | The alternate shift 3 to use if the user works outside their assigned default shift |
| Color | NVARCHAR(20) | True |  | False |  | The color in which the shift should be displayed in the Resource Calendar. |
| ConsecutiveDayBeforeDTHours | DECIMAL(28,10) | True |  | False |  | Specify the hours upto which to pay the overtime hours. |
| ConsecutiveDayBeforeOTHours | DECIMAL(28,10) | True |  | False |  | Specify the hours upto which to pay the regular hours. |
| ConsecutiveDayOfWeek | INT(10,0) | True |  | False |  | Day of the week to which the consecutive day rule is to be applied. |
| ConsecutiveDayOvertimeRule | INT(10,0) | True |  | False |  | Determines to apply consecutive day overtime rule or not, for the same week or multiple weeks. |
| DefaultWorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | Link to the default Work Period as part of the the key to be used with shift cut offs reassign the work shift |
| DefaultWorkPeriodEffectiveDate | DATETIME | True |  | False | WORK_PERIOD | Link to the default Work Period as part of the the key to be used with shift cut offs reassign the work shift |
| EarlyEndAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyEndVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyStartAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyStartVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| Facility | NVARCHAR(40) | False |  | True | WORK_PERIOD | The work shift's facility |
| FridayHoursBeforeDT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Friday before pay moves from Reg to DT columns on the timesheet. |
| FridayHoursBeforeOT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Friday before pay moves from Reg to OT columns on the timesheet. |
| HrsBeforeDTIncludeDailyDT | BIT | True |  | False |  | Specifies if daily DT can count toward weekly DT or be excluded from the total so it is not paid twice. |
| HrsBeforeDTIncludeDailyOT | BIT | True |  | False |  | Specifies if daily DT can count toward weekly OT or be excluded from the total so it is not paid twice. |
| HrsBeforeOTIncludeDailyDT | BIT | True |  | False |  | Specifies if daily OT can count toward weekly OT or be excluded from the total so it is not paid twice. |
| HrsBeforeOTIncludeDailyOT | BIT | True |  | False |  | Specifies if daily OT can count toward weekly DT or be excluded from the total so it is not paid twice. |
| LateEndAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateEndVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateStartAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateStartVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| MondayHoursBeforeDT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Monday before pay moves from Reg to DT columns on the timesheet. |
| MondayHoursBeforeOT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Monday before pay moves from Reg to OT columns on the timesheet. |
| PayPeriodHoursBeforeDT | DECIMAL(28,10) | True |  | False |  | Maximum Pay Period Hours before double time is computed. |
| PayPeriodHoursBeforeOT | DECIMAL(28,10) | True | (0.0) | False |  | Maximum Pay Period Hours before overtime time is computed. |
| SaturdayHoursBeforeDT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Saturday before pay moves from Reg to DT columns on the timesheet. |
| SaturdayHoursBeforeOT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Saturday before pay moves from Reg to OT columns on the timesheet. |
| SaturdayMaxWeeklyHoursBeforeDT | DECIMAL(28,10) | True |  | False |  | The max hours before Sunday double time if SaturdayPayAsDTFlag is true. |
| SaturdayMaxWeeklyHoursBeforeOT | DECIMAL(28,10) | True |  | False |  | The max hours before Sunday double time if SaturdayPayAsOTFlag is true. |
| SaturdayPayAsDTFlag | BIT | True |  | False |  | The max hours before Sunday overtime if SundayPayAsOTFlag is true. |
| SaturdayPayAsOTFlag | BIT | True |  | False |  | Flag to override general rule, for a more specific Saturday rule. If selected, Saturday will be paid as double time if the weekly hours exceed the hours entered. |
| Shift | NVARCHAR(20) | False |  | True | WORK_PERIOD | The shift the work shift is defined for |
| SundayHoursBeforeDT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Sunday before pay moves from Reg to DT columns on the timesheet. |
| SundayHoursBeforeOT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Sunday before pay moves from Reg to OT columns on the timesheet. |
| SundayMaxWeeklyHoursBeforeDT | DECIMAL(28,10) | True |  | False |  | The max hours before Sunday double time if SundayPayAsDTFlag is true. |
| SundayMaxWeeklyHoursBeforeOT | DECIMAL(28,10) | True |  | False |  | The max hours before Sunday overtime if SundayPayAsOTFlag is true. |
| SundayPayAsDTFlag | BIT | True |  | False |  | Flag to override general rule, for a more specific Sunday rule. If selected, Sunday will be paid as overtime if the weekly hours exceed the hours entered. |
| SundayPayAsOTFlag | BIT | True |  | False |  | Flag to override general rule, for a more specific Sunday rule. If selected, Sunday will be paid as double time if the weekly hours exceed the hours entered. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| ThursdayHoursBeforeDT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Thursday before pay moves from Reg to DT columns on the timesheet. |
| ThursdayHoursBeforeOT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Thursday before pay moves from Reg to OT columns on the timesheet. |
| TuesdayHoursBeforeDT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Tuesday before pay moves from Reg to DT columns on the timesheet. |
| TuesdayHoursBeforeOT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Tuesday before pay moves from Reg to OT columns on the timesheet. |
| WednesdayHoursBeforeDT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Wednesday before pay moves from Reg to DT columns on the timesheet. |
| WednesdayHoursBeforeOT | DECIMAL(28,10) | True | (0.0) | False |  | Minimum daily hours for a Wednesday before pay moves from Reg to OT columns on the timesheet. |
| WorkShiftType | SMALLINT(5,0) | True |  | False | WORK_SHIFT_TYPE | The type of shift being with shift 1, shift 2 or shift 3.  Used by Shift Cut Offs.  Linked to the WORK_SHIFT_TYPE table. |

## Primary Key

- **PK_WORK_SHIFT** on `Facility, Shift`

## Foreign Keys (this table -> other)

- **FK_WORK_SHIFT_WORK_PERIOD** — WORK_SHIFT -> WORK_PERIOD (`Facility, Shift, DefaultWorkPeriod, DefaultWorkPeriodEffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_WORK_SHIFT_WORK_SHIFT** — WORK_SHIFT -> WORK_SHIFT (`Facility, AlternateShift1 -> Facility, Shift`)
- **FK_WORK_SHIFT_WORK_SHIFT_TYPE** — WORK_SHIFT -> WORK_SHIFT_TYPE (`WorkShiftType -> WorkShiftType`)
- **FK_WORK_SHIFT_WORK_SHIFT1** — WORK_SHIFT -> WORK_SHIFT (`AlternateShift2 -> Shift`)
- **FK_WORK_SHIFT_WORK_SHIFT2** — WORK_SHIFT -> WORK_SHIFT (`AlternateShift3 -> Shift`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_TEMP_BADGE_WORK_SHIFT** — EMPLOYEE_TEMP_BADGE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_EMPLOYEE_WORK_SCHEDULE_WORK_SHIFT** — EMPLOYEE_WORK_SCHEDULE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_FACILITY_WORK_SCHEDULE_WORK_SHIFT** — FACILITY_WORK_SCHEDULE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_LABOR_WORK_SHIFT** — LABOR -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_MAINT_ORDER_TASK_WORK_SHIFT_01** — MAINT_ORDER_TASK -> WORK_SHIFT (`ScheduledWorkPeriodShift, ScheduledWorkPeriodFacility -> Shift, Facility`)
- **FK_MAINT_ORDER_TASK_WORK_SHIFT_02** — MAINT_ORDER_TASK -> WORK_SHIFT (`ActualWorkPeriodShift, ActualWorkPeriodFacility -> Shift, Facility`)
- **FK_PRODUCTION_FACT_WORK_SHIFT** — PRODUCTION_FACT -> WORK_SHIFT (`Shift, Facility -> Shift, Facility`)
- **FK_RESOURCE_MAINT_TASK_SCHEDULE_WORK_SHIFT** — RESOURCE_MAINT_TASK_SCHEDULE -> WORK_SHIFT (`WorkPeriodFacility, WorkPeriodShift -> Facility, Shift`)
- **FK_RESOURCE_WORK_SCHEDULE_WORK_SHIFT** — RESOURCE_WORK_SCHEDULE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_WORK_CENTER_WORK_SCHEDULE_WORK_SHIFT** — WORK_CENTER_WORK_SCHEDULE -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_WORK_PERIOD_WORK_SHIFT** — WORK_PERIOD -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_WORK_SHIFT_BREAK_WORK_SHIFT** — WORK_SHIFT_BREAK -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)
- **FK_WORK_SHIFT_WORK_SHIFT** — WORK_SHIFT -> WORK_SHIFT (`Facility, AlternateShift1 -> Facility, Shift`)
- **FK_WORK_SHIFT_WORK_SHIFT1** — WORK_SHIFT -> WORK_SHIFT (`AlternateShift2 -> Shift`)
- **FK_WORK_SHIFT_WORK_SHIFT2** — WORK_SHIFT -> WORK_SHIFT (`AlternateShift3 -> Shift`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_SHIFT_WORK_PERIOD** on `Shift, Facility, DefaultWorkPeriod, DefaultWorkPeriodEffectiveDate`
- **IF_WORK_SHIFT_WORK_SHIFT** on `AlternateShift1, Facility`
- **IF_WORK_SHIFT_WORK_SHIFT1** on `AlternateShift2, Facility`
- **IF_WORK_SHIFT_WORK_SHIFT2** on `AlternateShift3, Facility`
