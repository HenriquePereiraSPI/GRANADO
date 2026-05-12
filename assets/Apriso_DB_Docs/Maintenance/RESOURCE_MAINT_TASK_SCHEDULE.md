# RESOURCE_MAINT_TASK_SCHEDULE

**Database:** Operational

**Description:** This table contains schedules for Maintenance Procedures.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EveryXDays | INT(10,0) | True |  | False |  | Used when RecurrenceType = 2. The task should be performed every X days. |
| Facility | NVARCHAR(40) | True |  | False | TEAM | Facility of the Team. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| LastPerformedOn | DATETIME | True |  | False |  | Date of Last Maintenance. |
| MonthlyDayOfMonth | INT(10,0) | True |  | False |  | Used when RecurrenceType = 4. The task should be performed on a given day of a given month. Combined with MonthlyEveryXMonths. |
| MonthlyEveryXMonths | INT(10,0) | True |  | False |  | Used when RecurrenceType = 4. The task should be performed every X months. |
| Name | NVARCHAR(256) | False |  | False |  | Schedule name. |
| RecurrenceType | INT(10,0) | True |  | False |  | Recurrence is based on 1 - Utilization, 2 - Daily, 3 - Weekly, 4 - Monthly, 5 - Yearly, 6 - Adhoc. |
| ResourceMaintTaskID | INT(10,0) | False |  | False | RESOURCE_MAINT_TASK | ID of the Maintenance Procedure. |
| TaskScheduledTime | DATETIME | True |  | False |  | Used when RecurrenceType = 2, 3, 4 or 5. The task should be performed at a given hour. |
| Team | NVARCHAR(40) | True |  | False | TEAM | Team that is scheduled to execute Maintenance Orders based on the Maintenance Procedure |
| UtilizationDays | INT(10,0) | True |  | False |  | Used when RecurrenceType = 1. The task should be performed X days after the last maintenance. |
| WeeklyEveryXWeeks | INT(10,0) | True |  | False |  | Used when RecurrenceType = 3. The action is triggered every X weeks on the days specified by the weekday fields. |
| WeeklyFriday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Fridays. |
| WeeklyMonday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Mondays. |
| WeeklySaturday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Saturdays. |
| WeeklySunday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Sundays. |
| WeeklyThursday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Thursdays. |
| WeeklyTuesday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Tuesdays. |
| WeeklyWednesday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Wednesdays. |
| WorkPeriod | NVARCHAR(20) | True |  | False | WORK_PERIOD | Resource Maint Task Schedule Work Period. |
| WorkPeriodEffDate | DATETIME | True |  | False | WORK_PERIOD | Resource Maint Task Schedule Work Period Effective Date. |
| WorkPeriodFacility | NVARCHAR(40) | True |  | False | WORK_PERIOD | Resource Maint Task Schedule Work Period Facility. |
| WorkPeriodShift | NVARCHAR(20) | True |  | False | WORK_PERIOD | Resource Maint Task Schedule Work Period Shift. |
| YearlyDayOfMonth | INT(10,0) | True |  | False |  | Used when RecurrenceType = 5. The task should be performed on a given day of a given month. Combined with YearlyMonth. |
| YearlyMonth | INT(10,0) | True |  | False |  | Used when RecurrenceType = 5. The task should be performed every year in a given month. |

## Primary Key

- **PK_RESOURCE_MAINT_TASK_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_MAINT_TASK_SCHEDULE_RESOURCE_MAINT_TASK** — RESOURCE_MAINT_TASK_SCHEDULE -> RESOURCE_MAINT_TASK (`ResourceMaintTaskID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SCHEDULE_TEAM** — RESOURCE_MAINT_TASK_SCHEDULE -> TEAM (`Team, Facility -> Team, Facility`)
- **FK_RESOURCE_MAINT_TASK_SCHEDULE_WORK_PERIOD** — RESOURCE_MAINT_TASK_SCHEDULE -> WORK_PERIOD (`WorkPeriodFacility, WorkPeriodShift, WorkPeriod, WorkPeriodEffDate -> Facility, Shift, WorkPeriod, EffectiveDate`)
- **FK_RESOURCE_MAINT_TASK_SCHEDULE_WORK_SHIFT** — RESOURCE_MAINT_TASK_SCHEDULE -> WORK_SHIFT (`WorkPeriodFacility, WorkPeriodShift -> Facility, Shift`)

## Referenced By (other tables -> this)

- **FK_MAINT_ORDER_TASK_RESOURCE_MAINT_TASK_SCHEDULE** — MAINT_ORDER_TASK -> RESOURCE_MAINT_TASK_SCHEDULE (`ResourceMaintTaskScheduleID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SC_COUNTER_RESOURCE_MAINT_TASK_SCHEDULE** — RESOURCE_MAINT_TASK_SC_COUNTER -> RESOURCE_MAINT_TASK_SCHEDULE (`ResourceMaintTaskScheduleID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SC_EX_RULE_02** — RESOURCE_MAINT_TASK_SC_EX_RULE -> RESOURCE_MAINT_TASK_SCHEDULE (`ResourceMaintTaskScheduleID -> ID`)

## Check Constraints

- **CK_RESOURCE_MAINT_TASK_SCHEDULE_RecurrenceType**: 

## Unique Indexes

- **UK_RESOURCE_MAINT_TASK_SCHEDULE** on `ResourceMaintTaskID, Name`

## Non-Unique Indexes

- **IF_RESOURCE_MAINT_TASK_SCHEDULE_TEAM** on `Facility, Team`
- **IF_RESOURCE_MAINT_TASK_SCHEDULE_WORK_PERIOD** on `WorkPeriodShift, WorkPeriodFacility, WorkPeriod, WorkPeriodEffDate`
