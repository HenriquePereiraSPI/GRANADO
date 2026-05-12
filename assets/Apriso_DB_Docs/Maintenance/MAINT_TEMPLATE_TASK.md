# MAINT_TEMPLATE_TASK

**Database:** Operational

**Description:** This table stores Maintenance Template Procedures.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionCreateOrder | BIT | True |  | False |  | Order must be created. |
| ActionDFC | BIT | True |  | False |  | The DFC revision must be executed. |
| ActionGenerateAlert | BIT | True |  | False |  | An alert must be created. |
| AlertClassID | INT(10,0) | True |  | False | ALERT_CLASS | Alert Class to be created. |
| AlertResponseDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | The DFC revision that will be assigned as a Response DFC in a new generated Alert. Reference to the FUID column in the DFC_REVISION table. |
| AlertTypeID | SMALLINT(5,0) | True |  | False | ALERT_TYPE | Alert type to be created. |
| AllowMultipleOpenOrders | BIT | False | ((0)) | False |  | Flag used to parametrize Maintenance Procedures created based on Maintenance Template: indicates if it is allowed to create a new Maintenance Order even if one or more previously open Maintenance Orders exist. |
| BlockResource | BIT | True |  | False |  | When true, resource should be blocked until the maintenance is performed. |
| CancelPreviousOrders | BIT | False | ((0)) | False |  | Flag used to parametrize Maintenance Procedures created based on Maintenance Template: indicates if previously open Maintenance Orders should be cancelled in case a new Maintenance Order is to be created. |
| CheckListID | INT(10,0) | True |  | False | CHECK_LIST | ID of the Check List record the table is associated with. |
| DFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| DisableReschedule | BIT | False | ((0)) | False |  | The flag indicates if created Maintenance Order can be rescheduled. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee associated with task. |
| EstimatedHours | DECIMAL(28,10) | True |  | False |  | Estimated hours to performed the task. |
| EveryXDays | INT(10,0) | True |  | False |  | Used when recurrence type = 1. Perform every X days. |
| FUID | NVARCHAR(36) | False |  | False |  | Apriso object unique identifier. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the row |
| ItemProducedUomCode | NVARCHAR(10) | True |  | False | UOM | UOM Code of the ItemsProduced. |
| ItemsProduced | DECIMAL(28,10) | True |  | False |  | Task should be performed every # items produced. Used only when RecurrenceType = 1. |
| MaintTemplateID | INT(10,0) | False |  | False | MAINT_TEMPLATE | ID of the Maintenance Template. |
| MonthlyEveryXDay | INT(10,0) | True |  | False |  | Used when recurrence type = 4. Action is triggered every X days of every month. |
| MonthlyEveryXMonths | INT(10,0) | True |  | False |  | Used when recurrence type = 3. Perform every X months. |
| Name | NVARCHAR(256) | False |  | False |  | Task Name. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | ProcessID will be assigned to the new order. |
| Reactive | BIT | True |  | False |  | When true, task is not a recurring task. It can be used for on-demand task. |
| RecurrenceType | INT(10,0) | True |  | False |  | Recurrence will be based on 1 - Utlization, 2 - Weekly, 3 - Montlhy, 4 - Yearly |
| RoleID | INT(10,0) | True |  | False | ROLE | Task Role. |
| RunningDays | INT(10,0) | True |  | False |  | Number of Days since the last Maintenance. |
| SkillID | INT(10,0) | True |  | False | SKILL | Skill required for the task. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UtilizationCycles | DECIMAL(28,10) | True |  | False |  | Used when RecurrenceType = 1. The task should be performed every X cycles. |
| UtilizationHours | DECIMAL(28,10) | True |  | False |  | Task should be performed every # of utilization hours. |
| VerificationRequired | BIT | True |  | False |  | Task requires verification. |
| WeeklyEveryXWeeks | INT(10,0) | True |  | False |  | Used only when Recurrence Type = 3. The action is triggered every X weeks on the days specified by the weekday fields. |
| WeeklyFriday | BIT | True |  | False |  | Used when RecurrencyType = 3 and combined with the WeeklyEveryXWeeks. |
| WeeklyMonday | BIT | True |  | False |  | Used when RecurrencyType = 3 and combined with the WeeklyEveryXWeeks. |
| WeeklySaturday | BIT | True |  | False |  | Used when RecurrencyType = 3 and combined with the WeeklyEveryXWeeks. |
| WeeklySunday | BIT | True |  | False |  | Used when RecurrencyType = 3 and combined with the WeeklyEveryXWeeks. |
| WeeklyThrusday | BIT | True |  | False |  | Used when RecurrencyType = 3 and combined with the WeeklyEveryXWeeks. |
| WeeklyTuesday | BIT | True |  | False |  | Used when RecurrencyType = 3 and combined with the WeeklyEveryXWeeks. |
| WeeklyWednesday | BIT | True |  | False |  | Used when RecurrencyType = 3 and combined with the WeeklyEveryXWeeks. |
| WorkCenter | NVARCHAR(40) | True |  | False | WORK_CENTER | Work Center responsible for performing the task. |
| YearlyDayOfMonth | INT(10,0) | True |  | False |  | Used when recurrence type = 5. It is combined with YearlyMonth to allow an action to be trigerred at a given day of a given month. |
| YearlyMonth | INT(10,0) | True |  | False |  | Used when recurrence type = 5. It is combined with YearlyDayOfMonth to allow an action to be trigerred at a given day of a given month. |

## Primary Key

- **PK_MAINT_TEMPLATE_TASK** on `ID`

## Foreign Keys (this table -> other)

- **FK_MAINT_TEMPLATE_TASK_ALERT_CLASS** — MAINT_TEMPLATE_TASK -> ALERT_CLASS (`AlertClassID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_ALERT_TYPE** — MAINT_TEMPLATE_TASK -> ALERT_TYPE (`AlertTypeID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_CHECK_LIST** — MAINT_TEMPLATE_TASK -> CHECK_LIST (`CheckListID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_EMPLOYEE** — MAINT_TEMPLATE_TASK -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_MAINT_TEMPLATE** — MAINT_TEMPLATE_TASK -> MAINT_TEMPLATE (`MaintTemplateID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_PROCESS** — MAINT_TEMPLATE_TASK -> PROCESS (`ProcessID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_ROLE** — MAINT_TEMPLATE_TASK -> ROLE (`RoleID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_SKILL** — MAINT_TEMPLATE_TASK -> SKILL (`SkillID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_UNIT** — MAINT_TEMPLATE_TASK -> UNIT (`UnitID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_UOM** — MAINT_TEMPLATE_TASK -> UOM (`ItemProducedUomCode -> UomCode`)
- **FK_MAINT_TEMPLATE_TASK_WORK_CENTER** — MAINT_TEMPLATE_TASK -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_MAINT_TEMPLATE_TASK_ROLE_MAINT_TEMPLATE_TASK** — MAINT_TEMPLATE_TASK_ROLE -> MAINT_TEMPLATE_TASK (`MaintTemplateTaskID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_SCHEDULE_MAINT_TEMPLATE_TASK** — MAINT_TEMPLATE_TASK_SCHEDULE -> MAINT_TEMPLATE_TASK (`MaintTemplateTaskID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_SKILL_MAINT_TEMPLATE_TASK** — MAINT_TEMPLATE_TASK_SKILL -> MAINT_TEMPLATE_TASK (`MaintTemplateTaskID -> ID`)
- **FK_MAINT_TEMPLATE_TASK_WORK_INSTR_MAINT_TEMPLATE_TASK** — MAINT_TEMPLATE_TASK_WORK_INSTR -> MAINT_TEMPLATE_TASK (`MaintTemplateTaskID -> ID`)
- **FK_RESOURCE_MAINT_TASK_MAINT_TEMPLATE_TASK** — RESOURCE_MAINT_TASK -> MAINT_TEMPLATE_TASK (`MaintTemplateTaskID -> ID`)
- **FK_SAFETY_INSTRUCTION_USAGE_MAINT_TEMPLATE_TASK** — SAFETY_INSTRUCTION_USAGE -> MAINT_TEMPLATE_TASK (`MaintTemplateTaskID -> ID`)

## Business Keys (this table -> other)

- MAINT_TEMPLATE_TASK -> DFC_REVISION (`DFCRevisionFUID, AlertResponseDFCRevisionFUID -> FUID`)

## Check Constraints

- **CK_MAINT_TEMPLATE_TASK_RecurrenceType**: 

## Unique Indexes

- **UK_MAINT_TEMPLATE_TASK_FUID** on `FUID`

## Non-Unique Indexes

- **IF_MAINT_TEMPLATE_TASK_ALERT_CLASS** on `AlertClassID`
- **IF_MAINT_TEMPLATE_TASK_CHECK_LIST** on `CheckListID`
- **IF_MAINT_TEMPLATE_TASK_DFCREVISION** on `DFCRevisionFUID`
- **IF_MAINT_TEMPLATE_TASK_DFCREVISION2** on `AlertResponseDFCRevisionFUID`
- **IF_MAINT_TEMPLATE_TASK_MAINT_TEMPLATE** on `MaintTemplateID`
- **IF_MAINT_TEMPLATE_TASK_PROCESS** on `ProcessID`
- **IF_MAINT_TEMPLATE_TASK_ROLE** on `RoleID`
- **IF_MAINT_TEMPLATE_TASK_SKILL** on `SkillID`
- **IF_MAINT_TEMPLATE_TASK_UNIT** on `UnitID`
