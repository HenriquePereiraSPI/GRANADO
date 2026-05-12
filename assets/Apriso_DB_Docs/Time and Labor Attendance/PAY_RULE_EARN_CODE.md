# PAY_RULE_EARN_CODE

**Database:** Operational

**Description:** Specific earn code configuration that is valid per pay rule. This will define which earn codes are valid for the pay rule and how these are configured for this pay rule.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AttendanceDurationsAllowed | BIT | True |  | False |  | Used to determine if on clockout the attendance hours are automatically assigned to the overridden times |
| AttendanceTimesReadOnly | BIT | True |  | False |  | Used to determine if the attendance times are read only |
| CallIn | BIT | True |  | False |  | Denotes the earn code as a 'Call In' earn code. |
| EarnCode | NVARCHAR(20) | False |  | True | EARN_CODE | The earn code linked to the pay rule. |
| EmployeeAttendanceEditAllowed | BIT | True |  | False |  | Can the employee edit there own information against this earn code? Generally REG/SICK would not allow, while VAC may allow. |
| Facility | NVARCHAR(40) | False |  | True | PAY_RULE | The pay rule earn code's facility |
| LaborDurationsAllowed | BIT | True |  | False |  | This flag overrides the Allow Start And End Times setting, allowing durations to be entered. Automatically set the override calculations flag as true in the Attendance Grid, thereby activating the elapsed hours column. |
| LaborPostingAllowed | BIT | True |  | False |  | Can this earn code have labor reported against it. Generally REG would allow, while VAC/SICK would not. |
| LaborTimesReadOnly | BIT | True |  | False |  | Used to determine if the labor times are read only |
| MinimalHoursIncrement | DECIMAL(28,10) | True |  | False |  | Used in conjunction with Call In and non-working hours as a minimal hours increment |
| MinimumHoursTicks | BIGINT(19,0) | True |  | False |  | Used in conjunction with Call In and non-working hours as a minimal hours. |
| NegativeHoursAllowed | BIT | True |  | False |  | Can this earn code accept negative hours. |
| OverLappingAllowed | BIT | True |  | False |  | For future use. |
| PayMinHoursInAdditionToWorked | BIT | True |  | False |  | For future use. |
| PayRule | NVARCHAR(20) | False |  | True | PAY_RULE | Link back to the parent Pay Rule. |
| PostToFutureAllowed | BIT | True |  | False |  | Specifies if this earn code will allow future posting in Time Manager. |
| StartAndEndTimesAllowed | BIT | True |  | False |  | Will hours against this earn code accept start and end times, or use durations? All earn codes that allow start and end times compute the durations. These computed durations can be overridden on a row per row basis. Generally REG would allow start and end |
| TimeOffClass | SMALLINT(5,0) | True |  | False | TIME_OFF_CLASS | Specifies how this earn code affects overtime. The options include: Affects Overtime, No effect on overtime, Unpaid time off |

## Primary Key

- **PK_PAY_RULE_EARN_CODE** on `Facility, PayRule, EarnCode`

## Foreign Keys (this table -> other)

- **FK_PAY_RULE_EARN_CODE_PAY_RULE** — PAY_RULE_EARN_CODE -> PAY_RULE (`Facility, PayRule -> Facility, PayRule`)
- **FK_PAY_RULE_EARN_CODE_TIME_OFF_CLASS** — PAY_RULE_EARN_CODE -> TIME_OFF_CLASS (`TimeOffClass -> TimeOffClass`)
- **FK_PAY_RULE_EARN_CODES_EARN_CODES1** — PAY_RULE_EARN_CODE -> EARN_CODE (`EarnCode -> EarnCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_PAY_RULE_EARN_CODE_TIME_OFF_CLASS** on `TimeOffClass`
