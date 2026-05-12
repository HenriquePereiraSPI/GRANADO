# MAINT_TEMPLATE_TASK_SCHEDULE

**Database:** Operational

**Description:** This table contains schedules for Maintenance Template Procedures.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EveryXDays | INT(10,0) | True |  | False |  | Used when RecurrenceType = 2. The task should be performed every X days. |
| ID | INT(10,0) | False |  | True |  | Unique ID of the row. |
| MaintTemplateTaskID | INT(10,0) | False |  | False | MAINT_TEMPLATE_TASK | ID of the Maintenance Template Procedure. |
| MonthlyDayOfMonth | INT(10,0) | True |  | False |  | Used when RecurrenceType = 4. The task should be performed on a given day of a given month. Combined with MonthlyEveryXMonths. |
| MonthlyEveryXMonths | INT(10,0) | True |  | False |  | Used when RecurrenceType = 4. The task should be performed every X months. |
| Name | NVARCHAR(256) | False |  | False |  | Schedule name. |
| RecurrenceType | INT(10,0) | True |  | False |  | Recurrence is based on 1 - Utilization, 2 - Daily, 3 - Weekly, 4 - Monthly, 5 - Yearly, 6 - Adhoc. |
| TaskScheduledTime | DATETIME | True |  | False |  | Used when RecurrenceType = 2, 3, 4 or 5. The task should be performed at a given hour. |
| UtilizationDays | INT(10,0) | True |  | False |  | Used when RecurrenceType = 1. The task should be performed X days after the last maintenance. |
| WeeklyEveryXWeeks | INT(10,0) | True |  | False |  | Used when RecurrenceType = 3. The action is triggered every X weeks on the days specified by the weekday fields. |
| WeeklyFriday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Fridays. |
| WeeklyMonday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Mondays. |
| WeeklySaturday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Saturdays. |
| WeeklySunday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Sundays. |
| WeeklyThursday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Thursdays. |
| WeeklyTuesday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Tuesdays. |
| WeeklyWednesday | BIT | True |  | False |  | Used when RecurrenceType = 3 and combined with the WeeklyEveryXWeeks, the task should be performed on Wednesdays. |
| YearlyDayOfMonth | INT(10,0) | True |  | False |  | Used when RecurrenceType = 5. The task should be performed on a given day of a given month. Combined with YearlyMonth. |
| YearlyMonth | INT(10,0) | True |  | False |  | Used when RecurrenceType = 5. The task should be performed every year in a given month. |

## Primary Key

- **PK_MAINT_TEMPLATE_TASK_SCHEDULE** on `ID`

## Foreign Keys (this table -> other)

- **FK_MAINT_TEMPLATE_TASK_SCHEDULE_MAINT_TEMPLATE_TASK** — MAINT_TEMPLATE_TASK_SCHEDULE -> MAINT_TEMPLATE_TASK (`MaintTemplateTaskID -> ID`)

## Referenced By (other tables -> this)

- **FK_MAINT_TEMPLATE_TASK_SC_COUNTER_MAINT_TEMPLATE_TASK_SCHEDULE** — MAINT_TEMPLATE_TASK_SC_COUNTER -> MAINT_TEMPLATE_TASK_SCHEDULE (`MaintTemplateTaskScheduleID -> ID`)

## Check Constraints

- **CK_MAINT_TEMPLATE_TASK_SCHEDULE_RecurrenceType**: 

## Unique Indexes

- **UK_MAINT_TEMPLATE_TASK_SCHEDULE** on `MaintTemplateTaskID, Name`

## Non-Unique Indexes

- **** on ``
