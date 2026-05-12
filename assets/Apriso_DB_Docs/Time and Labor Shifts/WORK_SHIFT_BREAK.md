# WORK_SHIFT_BREAK

**Database:** Operational

**Description:** The WORK_SHIFT_BREAK table is used to store all the breaks available under a specific WORK_SHIFT.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AutoDeduct | BIT | True | (0) | False |  | Denotes that this break gets automatically deducted from Attendance and Labor. |
| BreakType | SMALLINT(5,0) | False |  | True | BREAK_TYPE | The type of the break |
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| EarlyEndAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyEndVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyStartAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyStartVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EffectiveDate | DATETIME | True |  | False |  | Validity date (start) of the entity in UTC |
| Facility | NVARCHAR(40) | False |  | True | WORK_BREAK | The work shift break's facility |
| FridayHoursBeforeDeductions | DECIMAL(28,10) | True | (0.0) | False |  | The amount of worked hours an employee must have accumulated prior to the automatic deduction of a break for Friday. |
| LateEndAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateEndVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateStartAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateStartVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| MondayHoursBeforeDeductions | DECIMAL(28,10) | True | (0.0) | False |  | The amount of worked hours an employee must have accumulated prior to the automatic deduction of a break for Monday. |
| PayForBreak | BIT | True | (0) | False |  | Denotes that his break does not reduce the hours being allocated against jobs that are running concurrently with this break. |
| SaturdayHoursBeforeDeductions | DECIMAL(28,10) | True | (0.0) | False |  | The amount of worked hours an employee must have accumulated prior to the automatic deduction of a break for Saturday. |
| Shift | NVARCHAR(20) | False |  | True | WORK_SHIFT | The shift the work shift break is defined for |
| SundayHoursBeforeDeductions | DECIMAL(28,10) | True | (0.0) | False |  | The amount of worked hours an employee must have accumulated prior to the automatic deduction of a break for Sunday. |
| ThursdayHoursBeforeDeductions | DECIMAL(28,10) | True | (0.0) | False |  | The amount of worked hours an employee must have accumulated prior to the automatic deduction of a break for Thursday. |
| TuesdayHoursBeforeDeductions | DECIMAL(28,10) | True | (0.0) | False |  | The amount of worked hours an employee must have accumulated prior to the automatic deduction of a break for Tuesday. |
| WednesdayHoursBeforeDeductions | DECIMAL(28,10) | True | (0.0) | False |  | The amount of worked hours an employee must have accumulated prior to the automatic deduction of a break for Wednesday. |

## Primary Key

- **PK_WORK_SHIFT_BREAK** on `Facility, Shift, BreakType`

## Foreign Keys (this table -> other)

- **FK_WORK_PERIOD_BREAKS_BREAK_TYPES** — WORK_SHIFT_BREAK -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_WORK_SHIFT_BREAK_WORK_BREAK** — WORK_SHIFT_BREAK -> WORK_BREAK (`Facility, BreakType -> Facility, BreakType`)
- **FK_WORK_SHIFT_BREAK_WORK_SHIFT** — WORK_SHIFT_BREAK -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)

## Referenced By (other tables -> this)

- **FK_WORK_PERIOD_BREAK_WORK_SHIFT_BREAK** — WORK_PERIOD_BREAK -> WORK_SHIFT_BREAK (`Facility, Shift, BreakType -> Facility, Shift, BreakType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_SHIFT_BREAK_WORK_BREAK** on `Facility, BreakType`
