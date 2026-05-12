# WORK_PERIOD_BREAK

**Database:** Operational

**Description:** The WORK_PERIOD_BREAK table is used to store all details of the breaks available under a WORK_PERIOD. WORK_PERIOD_BREAK table is where the details of the Start and End times for each break are stored.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| BreakType | SMALLINT(5,0) | False |  | True | BREAK_TYPE | The type of the break |
| EarlyEndAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyEndVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyStartAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyStartVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EffectiveDate | DATETIME | False |  | True | WORK_PERIOD | Validity date (start) of the entity in local time. |
| Facility | NVARCHAR(40) | False |  | True | WORK_PERIOD | The work period break's facility |
| LateEndAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateEndVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateStartAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateStartVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| MinimumDurationInMinutes | BIGINT(19,0) | True |  | False |  | Minimum duration of break in minutes |
| ScheduleEndTime | DATETIME | True |  | False |  | The scheduled end time for a Work Period Break in local time. |
| ScheduleStartTime | DATETIME | True |  | False |  | The scheduled start time for the Work Period Break in local time. |
| Shift | NVARCHAR(20) | False |  | True | WORK_PERIOD | The shift the work period break is defined for |
| WorkPeriod | NVARCHAR(20) | False |  | True | WORK_PERIOD | Link back to the parent Work Period. |

## Primary Key

- **PK_WORK_PERIOD_BREAK** on `Facility, Shift, WorkPeriod, EffectiveDate, BreakType`

## Foreign Keys (this table -> other)

- **FK_WORK_PERIOD_BREAK_BREAK_TYPE** — WORK_PERIOD_BREAK -> BREAK_TYPE (`BreakType -> BreakType`)
- **FK_WORK_PERIOD_BREAK_WORK_PERIOD** — WORK_PERIOD_BREAK -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_WORK_PERIOD_BREAK_WORK_SHIFT_BREAK** — WORK_PERIOD_BREAK -> WORK_SHIFT_BREAK (`Facility, Shift, BreakType -> Facility, Shift, BreakType`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_PERIOD_BREAK_WORK_SHIFT_BREAK** on `Shift, Facility, BreakType`
- **IXD_Facility_Shift_WorkPeriod** on `Facility, Shift, WorkPeriod`
