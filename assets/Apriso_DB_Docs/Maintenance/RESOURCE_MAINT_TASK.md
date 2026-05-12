# RESOURCE_MAINT_TASK

**Database:** Operational

**Description:** This table contains Maintenance Procedures.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ActionCreateOrder | BIT | True |  | False |  | Order must be created. |
| ActionDFC | BIT | True |  | False |  | The DFC revision must be executed. |
| ActionGenerateAlert | BIT | True |  | False |  | An alert must be created. |
| AlertClassID | INT(10,0) | True |  | False | ALERT_CLASS | Alert Class to be created. |
| AlertResponseDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | The DFC revision that will be assigned as a Response DFC in a new generated Alert. Reference to the FUID column in the DFC_REVISION table. |
| AlertTypeID | SMALLINT(5,0) | True |  | False | ALERT_TYPE | Alert type to be created. |
| AllowMultipleOpenOrders | BIT | False | ((0)) | False |  | Flag indicating if it is allowed to create a new Maintenance Order even if one or more previously open Maintenance Orders exist. |
| BlockResource | BIT | True |  | False |  | When true, resource should be blocked until the maintenance is performed. |
| CancelPreviousOrders | BIT | False | ((0)) | False |  | Flag indicating if previously open Maintenance Orders should be cancelled in case a new Maintenance Order is to be created. |
| CheckListID | INT(10,0) | True |  | False | CHECK_LIST | ID of the Check List record the table is associated with. |
| DFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| DisableReschedule | BIT | False | ((0)) | False |  | The flag indicates if created Maintenance Order can be rescheduled. |
| DiscontinueDate | DATETIME | True |  | False |  | End date of the Maintenance Procedure validity. |
| EffectiveDate | DATETIME | False |  | False |  | This is the base date for any schedule calculation. |
| EmployeeID | INT(10,0) | True |  | False | EMPLOYEE | Employee associated with task. |
| Enabled | BIT | True |  | False |  | Indicates whether this task is enabled or disabled. |
| EstimatedHours | DECIMAL(28,10) | True |  | False |  | Estimated hours to perform the task. |
| EveryXDays | INT(10,0) | True |  | False |  | Used when recurrence type = 1. Perform every X days. |
| FUID | NVARCHAR(36) | False | (newid()) | False |  | The unique ID of the entity across multiple Apriso instances. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the row. |
| InspectionPlanID | INT(10,0) | True |  | False | INSPECTION_PLAN | ID of the Inspection Plan that is linked to the Maintenance Procedure. |
| ItemProducedUomCode | NVARCHAR(10) | True |  | False | UOM | UOM Code of the ItemsProduced. |
| ItemsProduced | DECIMAL(28,10) | True |  | False |  | Task should be performed every # items produced. Used only when RecurrenceType = 1. |
| ItemsProducedCount | DECIMAL(28,10) | True |  | False |  | Current Items Produced Counter. |
| LastMaintCyclesCount | DECIMAL(28,10) | True |  | False |  | Cumulative Cycles Count when the last maintenance was performed. |
| LastMaintHoursCount | DECIMAL(28,10) | True |  | False |  | Cumulative Running Hours when the last maintenance was performed. |
| LastMaintItemsCount | DECIMAL(28,10) | True |  | False |  | Cumulative Item Count when the last maintenance was performed. |
| LastPerformedOn | DATETIME | True |  | False |  | Date when the task was last performed. |
| LastReportedOn | DATETIME | True |  | False |  | The date when the last report utilization was performed for this task. |
| MaintTemplateID | INT(10,0) | True |  | False | MAINT_TEMPLATE | ID of the Maintenance Template. |
| MaintTemplateTaskID | INT(10,0) | True |  | False | MAINT_TEMPLATE_TASK | When populated, it indicates from which template task the record was imported from. |
| MonthlyEveryXDay | INT(10,0) | True |  | False |  | Used when recurrence type = 4. Action is triggered every X days of every month. |
| MonthlyEveryXMonths | INT(10,0) | True |  | False |  | Used when recurrence type = 3. Perform every X months. |
| Name | NVARCHAR(256) | True |  | False |  | Task name. |
| ProcessID | INT(10,0) | True |  | False | PROCESS | ProcessID will be assigned to the new order. |
| Reactive | BIT | True |  | False |  | When true, task is not a recurring task. It can be used for on-demand task. |
| RecurrenceType | INT(10,0) | True |  | False |  | Task recurrence: 1 - Utilization, 2 - Weekly, 3 - Monthly, 4 - Yearly. |
| ResourceFacility | NVARCHAR(40) | True |  | False | FACILITY | Facility of the Resource. |
| ResourceID | INT(10,0) | False |  | False | RESOURCE_ | FK to the RESOURCE table. |
| RoleID | INT(10,0) | True |  | False | ROLE | Task Role. |
| RunningDays | INT(10,0) | True |  | False |  | Number of Days since the last Maintenance. |
| ScheduledTeam | NVARCHAR(40) | True |  | False | TEAM | Team that is scheduled to execute Maintenance Orders based on the Maintenance Procedure. |
| SkillID | INT(10,0) | True |  | False | SKILL | Skill required for the task. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Triggered | BIT | True |  | False |  | Action has been triggered. |
| TriggeredOn | DATETIME | True |  | False |  | The date when the action was triggered. |
| UnitID | INT(10,0) | True |  | False | UNIT | Unique identifier of the Unit. |
| UtilizationCycles | DECIMAL(28,10) | True |  | False |  | Used when RecurrenceType = 1. The task should be performed every X cycles. |
| UtilizationCyclesCount | DECIMAL(28,10) | True |  | False |  | Current Number of Cycles. |
| UtilizationHours | DECIMAL(28,10) | True |  | False |  | Task should be performed every # of utilization hours. |
| UtilizationHoursCount | DECIMAL(28,10) | True |  | False |  | Current utilization Counter. |
| UtilizationMode | INT(10,0) | True |  | False |  | Counter mode for utilization. |
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

- **PK_RESOURCE_MAINT_TASK** on `ID`

## Foreign Keys (this table -> other)

- **FK_RESOURCE_MAINT_TASK_ALERT_CLASS** — RESOURCE_MAINT_TASK -> ALERT_CLASS (`AlertClassID -> ID`)
- **FK_RESOURCE_MAINT_TASK_ALERT_TYPE** — RESOURCE_MAINT_TASK -> ALERT_TYPE (`AlertTypeID -> ID`)
- **FK_RESOURCE_MAINT_TASK_CHECK_LIST** — RESOURCE_MAINT_TASK -> CHECK_LIST (`CheckListID -> ID`)
- **FK_RESOURCE_MAINT_TASK_EMPLOYEE** — RESOURCE_MAINT_TASK -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_RESOURCE_MAINT_TASK_INSPECTION_PLAN** — RESOURCE_MAINT_TASK -> INSPECTION_PLAN (`InspectionPlanID -> ID`)
- **FK_RESOURCE_MAINT_TASK_MAINT_TEMPLATE** — RESOURCE_MAINT_TASK -> MAINT_TEMPLATE (`MaintTemplateID -> ID`)
- **FK_RESOURCE_MAINT_TASK_MAINT_TEMPLATE_TASK** — RESOURCE_MAINT_TASK -> MAINT_TEMPLATE_TASK (`MaintTemplateTaskID -> ID`)
- **FK_RESOURCE_MAINT_TASK_PROCESS** — RESOURCE_MAINT_TASK -> PROCESS (`ProcessID -> ID`)
- **FK_RESOURCE_MAINT_TASK_RESOURCE** — RESOURCE_MAINT_TASK -> RESOURCE_ (`ResourceID -> ID`)
- **FK_RESOURCE_MAINT_TASK_RESOURCE_FACILITY** — RESOURCE_MAINT_TASK -> FACILITY (`ResourceFacility -> Facility`)
- **FK_RESOURCE_MAINT_TASK_ROLE** — RESOURCE_MAINT_TASK -> ROLE (`RoleID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SCHEDULED_TEAM** — RESOURCE_MAINT_TASK -> TEAM (`ScheduledTeam, ResourceFacility -> Team, Facility`)
- **FK_RESOURCE_MAINT_TASK_SKILL** — RESOURCE_MAINT_TASK -> SKILL (`SkillID -> ID`)
- **FK_RESOURCE_MAINT_TASK_UNIT** — RESOURCE_MAINT_TASK -> UNIT (`UnitID -> ID`)
- **FK_RESOURCE_MAINT_TASK_UOM** — RESOURCE_MAINT_TASK -> UOM (`ItemProducedUomCode -> UomCode`)
- **FK_RESOURCE_MAINT_TASK_WORK_CENTER** — RESOURCE_MAINT_TASK -> WORK_CENTER (`WorkCenter -> WorkCenter`)

## Referenced By (other tables -> this)

- **FK_MAINT_ORDER_TASK_RESOURCE_MAINT_TASK** — MAINT_ORDER_TASK -> RESOURCE_MAINT_TASK (`ResourceMaintTaskID -> ID`)
- **FK_RESOURCE_MAINT_TASK_COMP_RESOURCE_MAINT_TASK** — RESOURCE_MAINT_TASK_COMP -> RESOURCE_MAINT_TASK (`ResourceMainTaskID -> ID`)
- **FK_RESOURCE_MAINT_TASK_ROLE_RESOURCE_MAINT_TASK** — RESOURCE_MAINT_TASK_ROLE -> RESOURCE_MAINT_TASK (`ResourceMaintTaskID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SCHEDULE_RESOURCE_MAINT_TASK** — RESOURCE_MAINT_TASK_SCHEDULE -> RESOURCE_MAINT_TASK (`ResourceMaintTaskID -> ID`)
- **FK_RESOURCE_MAINT_TASK_SKILL_RESOURCE_MAINT_TASK** — RESOURCE_MAINT_TASK_SKILL -> RESOURCE_MAINT_TASK (`ResourceMaintTaskID -> ID`)
- **FK_RESOURCE_MAINT_TASK_WORK_INSTR_RESOURCE_MAINT_TASK** — RESOURCE_MAINT_TASK_WORK_INSTR -> RESOURCE_MAINT_TASK (`ResourceMaintTaskID -> ID`)
- **FK_SAFETY_INSTRUCTION_USAGE_RESOURCE_MAINT_TASK** — SAFETY_INSTRUCTION_USAGE -> RESOURCE_MAINT_TASK (`ResourceMaintTaskID -> ID`)

## Business Keys (this table -> other)

- RESOURCE_MAINT_TASK -> DFC_REVISION (`DFCRevisionFUID, AlertResponseDFCRevisionFUID -> FUID`)

## Check Constraints

- **CK_RESOURCE_MAINT_TASK_RecurrenceType**: 
- **CK_RESOURCE_MAINT_TASK_UtilizationMode**: 

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_RESOURCE_MAINT_TASK_ALERT_CLASS** on `AlertClassID`
- **IF_RESOURCE_MAINT_TASK_CHECK_LIST** on `CheckListID`
- **IF_RESOURCE_MAINT_TASK_DFCREVISION** on `DFCRevisionFUID`
- **IF_RESOURCE_MAINT_TASK_DFCREVISION2** on `AlertResponseDFCRevisionFUID`
- **IF_RESOURCE_MAINT_TASK_INSPECTION_PLAN** on `InspectionPlanID`
- **IF_RESOURCE_MAINT_TASK_MAINT_TEMPLATE** on `MaintTemplateID`
- **IF_RESOURCE_MAINT_TASK_MAINT_TEMPLATE_TASK** on `MaintTemplateTaskID`
- **IF_RESOURCE_MAINT_TASK_PROCESS** on `ProcessID`
- **IF_RESOURCE_MAINT_TASK_RESOURCE** on `ResourceID`
- **IF_RESOURCE_MAINT_TASK_ROLE** on `RoleID`
- **IF_RESOURCE_MAINT_TASK_SCHEDULED_TEAM** on `ResourceFacility, ScheduledTeam`
- **IF_RESOURCE_MAINT_TASK_SKILL** on `SkillID`
- **IF_RESOURCE_MAINT_TASK_UNIT** on `UnitID`
