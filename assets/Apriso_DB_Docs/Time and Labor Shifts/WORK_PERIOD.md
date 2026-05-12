# WORK_PERIOD

**Database:** Operational

**Description:** The WORK_PERIOD table is used to store all the available work work periods in the system.  An employee’s work schedule is comprised of a work shift, a work period and meals and breaks, with specific pre-determined start and end times. Work shifts and periods are used together with a company calendar to determine the employee’s default schedule. They comprise the hours an employee is expected to work, or is scheduled for Vacation, Holiday, etc.  WORK_PERIOD table is where the details of the Start and End times for each work period are stored.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AfterAddOnName1 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute, which is carried down to the attendance record indicating a ‘Work Add On’ before overtime. An example would be to add $1 per regular hour to pay (calculated external to Time Manager). |
| AfterAddOnName2 | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute, which gets carried down to the attendance record indicating a ‘Work Add On’ after overtime. An example would be to add $2 per overtime hour to pay (calculated external to Time Manager). |
| BeforeAddOnName | NVARCHAR(40) | True |  | False | WORK_ADD_ON | An attribute, which gets carried down to the attendance record indicating a ‘Work Add On’ after overtime. An example would be to add $2 per overtime hour to pay (calculated external to Time Manager). |
| DiscontinueDate | DATETIME | True |  | False |  | End of validity of the entity |
| EarlyEndAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyEndVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyStartAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EarlyStartVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| EffectiveDate | DATETIME | False |  | True |  | Validity date (start) of the entity in local time. |
| Facility | NVARCHAR(40) | False |  | True | WORK_ADD_ON | The work period's facility |
| LateEndAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateEndVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateStartAction | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| LateStartVariance | BIGINT(19,0) | True |  | False |  | Single unit of value stored in this column (1) corresponds to 100 ns (nanoseconds). |
| ScheduleEndTime | DATETIME | True |  | False |  | The scheduled end time for a Work Period in local time. |
| ScheduleStartTime | DATETIME | True |  | False |  | The scheduled start time for the Work Period in local time. |
| Shift | NVARCHAR(20) | False |  | True | WORK_SHIFT | The shift the work period is defined for |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WorkPeriod | NVARCHAR(20) | False |  | True |  | The unique identifier of the work period. |

## Primary Key

- **PK_WORK_PERIOD** on `Facility, Shift, WorkPeriod, EffectiveDate`

## Foreign Keys (this table -> other)

- **FK_WORK_PERIOD_WORK_ADD_ON** — WORK_PERIOD -> WORK_ADD_ON (`Facility, BeforeAddOnName -> Facility, AddOnName`)
- **FK_WORK_PERIOD_WORK_ADD_ON1** — WORK_PERIOD -> WORK_ADD_ON (`AfterAddOnName1 -> AddOnName`)
- **FK_WORK_PERIOD_WORK_ADD_ON2** — WORK_PERIOD -> WORK_ADD_ON (`AfterAddOnName2 -> AddOnName`)
- **FK_WORK_PERIOD_WORK_SHIFT** — WORK_PERIOD -> WORK_SHIFT (`Facility, Shift -> Facility, Shift`)

## Referenced By (other tables -> this)

- **FK_EMPLOYEE_FACILITY_WORK_PERIOD** — EMPLOYEE_FACILITY -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_FACILITY_WORK_SCHEDULE_WORK_PERIOD** — FACILITY_WORK_SCHEDULE -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_LABOR_WORK_PERIOD** — LABOR -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_MAINT_ORDER_TASK_WORK_PERIOD_01** — MAINT_ORDER_TASK -> WORK_PERIOD (`ScheduledWorkPeriodShift, ScheduledWorkPeriodFacility, ScheduledWorkPeriod, ScheduledWorkPeriodEffDate -> Shift, Facility, WorkPeriod, EffectiveDate`)
- **FK_MAINT_ORDER_TASK_WORK_PERIOD_02** — MAINT_ORDER_TASK -> WORK_PERIOD (`ActualWorkPeriodShift, ActualWorkPeriodFacility, ActualWorkPeriod, ActualWorkPeriodEffDate -> Shift, Facility, WorkPeriod, EffectiveDate`)
- **FK_PRODUCTION_FACT_WORK_PERIOD** — PRODUCTION_FACT -> WORK_PERIOD (`Shift, WorkPeriod, EffectiveDate, Facility -> Shift, WorkPeriod, EffectiveDate, Facility`)
- **FK_RESOURCE_MAINT_TASK_SCHEDULE_WORK_PERIOD** — RESOURCE_MAINT_TASK_SCHEDULE -> WORK_PERIOD (`WorkPeriodFacility, WorkPeriodShift, WorkPeriod, WorkPeriodEffDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_RESOURCE_WORK_SCHEDULE_WORK_PERIOD** — RESOURCE_WORK_SCHEDULE -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_ROTATING_WORK_SCHEDULE_DETAIL_WORK_PERIOD** — ROTATING_WORK_SCHEDULE_DETAIL -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_TASK_WORK_PERIOD** — TASK -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_WORK_CENTER_WORK_SCHEDULE_WORK_PERIOD** — WORK_CENTER_WORK_SCHEDULE -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_WORK_PERIOD_BREAK_WORK_PERIOD** — WORK_PERIOD_BREAK -> WORK_PERIOD (`Facility, Shift, WorkPeriod, EffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_WORK_SHIFT_WORK_PERIOD** — WORK_SHIFT -> WORK_PERIOD (`Facility, Shift, DefaultWorkPeriod, DefaultWorkPeriodEffectiveDate -> Facility, Shift, WorkPeriod, EffectiveDate`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WORK_PERIOD_WORK_ADD_ON** on `BeforeAddOnName, Facility`
- **IF_WORK_PERIOD_WORK_ADD_ON1** on `AfterAddOnName1, Facility`
- **IF_WORK_PERIOD_WORK_ADD_ON2** on `AfterAddOnName2, Facility`
- **IF_WORK_PERIODS_WORK_ADD_ONS** on `Facility, BeforeAddOnName`
- **IF_WORK_PERIODS_WORK_ADD_ONS1** on `Facility, AfterAddOnName1`
- **IF_WORK_PERIODS_WORK_ADD_ONS2** on `Facility, AfterAddOnName2`
- **IXD_DiscontinueDate** on `DiscontinueDate`
