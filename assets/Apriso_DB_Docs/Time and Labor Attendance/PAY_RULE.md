# PAY_RULE

**Database:** Operational

**Description:** Rules used in attendance to define how the employee's attendance is computed during time and labor.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowExceptionPunches | BIT | True | (0) | False |  | For future use. |
| AllowHolidaysOnWeekend | BIT | True | (0) | False |  | For future use. |
| AllowsDirect | BIT | True |  | False |  | Determines whether or not the pay rule allows users associated to this pay rule to report direct labor |
| AllowsIndirect | BIT | True |  | False |  | Determines whether or not the pay rule allows users associated to this pay rule to report indirect labor |
| AllowsJobless | BIT | True |  | False |  | Determines whether or not the pay rule allows users associated to this pay rule to report jobless labor |
| AllowsOrderless | BIT | True |  | False |  | Determines whether or not the pay rule allows users associated to this pay rule to report orderless labor |
| ApplyOTRulesToLabor | BIT | True |  | False |  | Used to denote if Overtime rules are applied to Labor in addition to Attendance. |
| AutoClockInOnStartLabor | BIT | True |  | False |  | Determines if the system should automatically clock the employee in if they start labor and they have not previously clocked in |
| AutoClockOut | BIT | True |  | False |  | Used to determine if the employee should be automatically clocked out. |
| AutoCloseLaborOnClockOut | BIT | True |  | False |  | Determines if open labor should be automatically closed upon clock out |
| BeginWorkIdleTimeMins | BIGINT(19,0) | True |  | False |  | Window between the Clock-in and the first Start Labor. If activity is within the window's variance. |
| BetweenWorkIdleTimeMins | BIGINT(19,0) | True |  | False |  | Window between a Stop Labor of any time and the next Start Labor of any kind.  If activity is within this window variance. |
| CalculateDTType | SMALLINT(5,0) | True |  | False |  | For future use. |
| CalculateOTType | SMALLINT(5,0) | True |  | False |  | For future use. |
| ClockTicksPerMinute | TINYINT(3,0) | True | (60) | False |  | Setting used to configure how often the clock moves forward. Generally it is set to 0, 1 or 6. If the setting is set to 6 minutes, the system is unaware that the clock has moved until 6 minutes have passed, |
| DefaultHolidayEarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | Used to denote a specific earn code as the default holiday earn code for this pay rule. |
| DefaultRegularEarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | For future use. |
| EndWorkIdleTimeMins | BIGINT(19,0) | True |  | False |  | The window between the last stop labor and the clock out.  If activity is within this window variance rules will be applied. |
| Facility | NVARCHAR(40) | False |  | True | FACILITY | Facility of the Pay Rule. |
| FillInEarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | Creates Attendance rows to fill in the employee’s day against their assigned schedule. |
| FirstShiftCutOff | DATETIME | True |  | False |  | Designates the hard end of First Shift. |
| HolidayMultiplier | SMALLINT(5,0) | True |  | False | PAY_RULE_HOLIDAY_MULTIPLIER | Used when an employee works on a scheduled Holiday. Options for this setting include: Regular, Overtime, Double time |
| IncludeOverrideInCalculation | BIT | True | (0) | False |  | Flag used to determine if the override hours entered via the timesheet are included in other calculations for the day or the Pay Period. |
| MaxAttendancePerPayday | INT(10,0) | True | (22) | False |  | Setting used to control when the system determines that one PayDay has passed to another PayDay. Normal values for this setting are between 16 and 22 hours. It is used as a window beginning from the first clock in time of a PayDay. |
| MaxHoursPayablePerIncident | BIGINT(19,0) | True |  | False |  | For future use. |
| MaxHoursWorkBeforePenalty | BIGINT(19,0) | True |  | False |  | For future use. |
| MaximumWorkHours | BIGINT(19,0) | True |  | False |  | For future use. |
| OutsideEarnCode | NVARCHAR(20) | True |  | False | EARN_CODE | Used as the Earn Code when the employee works outside their assigned schedule. |
| OutsideScheduleToDT | BIT | True | (0) | False |  | For future use. |
| OutsideScheduleToOT | BIT | True | (0) | False |  | For future use. |
| PayIfSickBeforeAfterHoliday | BIT | True | (0) | False |  | For future use. |
| PayInIncrements | TINYINT(3,0) | True | (1) | False |  | Allows payment or hours allocations to an accuracy of 10th of an hour or 100ths of an hour. Acceptable settings are 10 and 100 |
| PayRule | NVARCHAR(20) | False |  | True |  | Unique identifier of the Pay Rule. |
| RateType | SMALLINT(5,0) | True |  | False | PAY_RULE_RATE_TYPE | For future use. |
| ReserveTimeLabor | BIT | True | (0) | False |  | For future use. |
| RestTimeInHours | BIGINT(19,0) | True |  | False |  | Window that links sequencial Attendance records into one PayDay. |
| SecondShiftCutOff | DATETIME | True |  | False |  | Designates the hard end of Second Shift. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| ThirdShiftCutOff | DATETIME | True |  | False |  | Designates the hard end of Third Shift. |
| ThirdShiftRule | BIT | True | (0) | False |  | Setting that denotes which PayDay a third shift is linked to. For example, assume a third shift start time of 11:00 PM; is the computed pay day for this 11:00 PM start linked to the current day or the next day? |
| UseShiftWindows | BIT | True |  | False |  | Specifies that Variance windows should come from either the Shift or the Work Period. |

## Primary Key

- **PK_PAY_RULE** on `Facility, PayRule`

## Foreign Keys (this table -> other)

- **FK_PAY_RULE_EARN_CODE** — PAY_RULE -> EARN_CODE (`DefaultRegularEarnCode -> EarnCode`)
- **FK_PAY_RULE_EARN_CODE1** — PAY_RULE -> EARN_CODE (`DefaultHolidayEarnCode -> EarnCode`)
- **FK_PAY_RULE_EARN_CODE2** — PAY_RULE -> EARN_CODE (`FillInEarnCode -> EarnCode`)
- **FK_PAY_RULE_EARN_CODE3** — PAY_RULE -> EARN_CODE (`OutsideEarnCode -> EarnCode`)
- **FK_PAY_RULE_FACILITY** — PAY_RULE -> FACILITY (`Facility -> Facility`)
- **FK_PAY_RULES_PAY_RULE_HOLIDAY_MULTIPLIER** — PAY_RULE -> PAY_RULE_HOLIDAY_MULTIPLIER (`HolidayMultiplier -> HolidayMultiplier`)
- **FK_PAY_RULES_PAY_RULE_RATE_TYPE** — PAY_RULE -> PAY_RULE_RATE_TYPE (`RateType -> RateType`)

## Referenced By (other tables -> this)

- **FK_ATTENDANCE_PAY_RULE** — ATTENDANCE -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_EMPLOYEE_FACILITY_PAY_RULE** — EMPLOYEE_FACILITY -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_LABOR_PAY_RULE** — LABOR -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_PAY_RULE_EARN_CODE_PAY_RULE** — PAY_RULE_EARN_CODE -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_RESOURCE__PAY_RULE** — RESOURCE_ -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_WORK_CENTER_PAY_RULE** — WORK_CENTER -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PAY_RULES_PAY_RULE_HOLIDAY_MULTIPLIER** on `HolidayMultiplier`
