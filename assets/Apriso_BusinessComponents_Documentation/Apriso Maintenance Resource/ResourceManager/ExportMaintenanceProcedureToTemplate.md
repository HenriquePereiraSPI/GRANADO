# ExportMaintenanceProcedureToTemplate

**Category:** Apriso/Maintenance/Resource
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ResourceManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

This Business Component method exports a Maintenance Procedure to Maintenance Template.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceMaintTaskID | Integer | Yes | Maintenance Procedure ID. |
| Input | MaintTemplateID | Integer | Yes | Maintenance Template Procedure ID. |
| Output | MaintTemplateTaskID | Integer | Yes | ID of a created or updated Maintenance Template Procedure. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| MaintenanceTemplateProcedureId | Integer | ID of Maintenance Template Procedure to be overwritten. |

## Validations

- System validates that the Maintenance Procedure is specified and exists. 
- System validates that the Maintenance Template Procedure is specified and exists. 
- System validates that the name of the specified Maintenance Procedure is provided. 
- If MaintenanceTemplateProcedureID dynamic input is specified then system validates if this Maintenance Template Procedure exists.

## System Processing

- If MaintenanceTemplateProcedureID dynamic input is specified then: 
 
- System updates Maintenance Template Procedure with the data from Maintenance Procedure including it's descriptions, but the name of Maintenance Template Procedure stays unchanged. 
- System copies Unit Documents, Safety Instruction Usages, Maintenance Procedure Schedules, links with Work Instructions, Roles and Skills and Maintenance Procedure Schedule Counters from Maintenance Procedure to the Maintenance Template Procedure.  
 
- Otherwise: 
 
- System creates new Maintenance Template Procedure and updates its data from the specified Maintenance Procedure. 
- System copies Unit Documents, Safety Instruction Usages, Maintenance Procedure Schedules, links with Work Instructions, Roles and Skills and Maintenance Procedure Schedule Counters from Maintenance Procedure to the Maintenance Template Procedure.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| MAINT_TEMPLATE | FUID | Generated unique identifier. |
|  | Name | Name from RESOURCE_MAINT_TASK |
|  | Description Fields | Copied based on description fields from RESOURCE_MAINT_TASK table |
| MAINT_TEMPLATE_TASK | MaintTemplateID | ID of created MAINT_TEMPLATE record. |
|  | FUID | Generated unique identifier. |
|  | Name | If new record is created then is set to name from RESOURCE_MAINT_TASK table, otherwise stay unchanged. |
|  | ActionCreateOrder | ActionCreateOrder from RESOURCE_MAINT_TASK table. |
|  | ActionGenerateAlert | ActionGenerateAlert from RESOURCE_MAINT_TASK table. |
|  | ActionDFC | ActionDFC from RESOURCE_MAINT_TASK table. |
|  | AlertClassID | AlertClassID from RESOURCE_MAINT_TASK table. |
|  | AlertResponseDFCRevisionFUID | AlertResponseDFCRevisionFUID from RESOURCE_MAINT_TASK table. |
|  | AlertTypeID | AlertTypeID from RESOURCE_MAINT_TASK table. |
|  | BlockResource | BlockResource from RESOURCE_MAINT_TASK table. |
|  | CancelPreviousOrders | CancelPreviousOrders from RESOURCE_MAINT_TASK table. |
|  | CheckListID | CheckListID from RESOURCE_MAINT_TASK table. |
|  | EmployeeID | EmployeeID from RESOURCE_MAINT_TASK table. |
|  | EstimatedHours | EstimatedHours from RESOURCE_MAINT_TASK table. |
|  | EveryXDays | EveryXDays from RESOURCE_MAINT_TASK table. |
|  | ItemProducedUomCode | ItemProducedUomCode from RESOURCE_MAINT_TASK table. |
|  | ItemsProduced | ItemsProduced from RESOURCE_MAINT_TASK table. |
|  | MonthlyEveryXDay | MonthlyEveryXDay from RESOURCE_MAINT_TASK table. |
|  | MontlyEveryXMonths | MontlyEveryXMonths from RESOURCE_MAINT_TASK table. |
|  | DFCRevisionFUID | DFCRevisionFUID from RESOURCE_MAINT_TASK table. |
|  | ProcessID | ProcessID from RESOURCE_MAINT_TASK table. |
|  | Reactive | Reactive from RESOURCE_MAINT_TASK table. |
|  | RecurrenceType | RecurrenceType from RESOURCE_MAINT_TASK table. |
|  | RoleID | RoleID from RESOURCE_MAINT_TASK table. |
|  | RunningDays | RunningDays from RESOURCE_MAINT_TASK table. |
|  | SkillID | SkillID from RESOURCE_MAINT_TASK table. |
|  | UtilizationCycles | UtilizationCycles from RESOURCE_MAINT_TASK table. |
|  | UtilizationHours | UtilizationHours from RESOURCE_MAINT_TASK table. |
|  | VerificationRequired | VerificationRequired from RESOURCE_MAINT_TASK table. |
|  | WeeklyEveryXWeeks | WeeklyEveryXWeeks from RESOURCE_MAINT_TASK table. |
|  | WeeklyFriday | WeeklyFriday from RESOURCE_MAINT_TASK table. |
|  | WeeklyMonday | WeeklyMonday from RESOURCE_MAINT_TASK table. |
|  | WeeklySaturday | WeeklySaturday from RESOURCE_MAINT_TASK table. |
|  | WeeklySunday | WeeklySunday from RESOURCE_MAINT_TASK table. |
|  | WeeklyThrusday | WeeklyThrusday from RESOURCE_MAINT_TASK table. |
|  | WeeklyTuesday | WeeklyTuesday from RESOURCE_MAINT_TASK table. |
|  | WeeklyWednesday | WeeklyWednesday from RESOURCE_MAINT_TASK table. |
|  | WorkCenter | WorkCenter from RESOURCE_MAINT_TASK table. |
|  | YealyDayOfMonth | YealyDayOfMonth from RESOURCE_MAINT_TASK table. |
|  | YearlyMonth | YearlyMonth from RESOURCE_MAINT_TASK table. |
|  | ReferenceID | ReferenceID from RESOURCE_MAINT_TASK table. |
|  | Description Fields | Copied based on description fields from RESOURCE_MAINT_TASK table |
| MAINT_TEMPLATE_TASK_SC_COUNTER | All fields except who columns | Copied from RESOURCE_MAINT_TASK_SC_COUNTER |
| SAFETY_INSTRUCTION_USAGE | All fields except who columns | Copied based on Safety Instruction Usages linked to MAINT_TEMPLATE_TASK |
| UNIT_DOCUMENT | All fields except who columns | Copied based on Unit Documents linked to RESOURCE_MAINT_TASK |
| MAINT_TEMPLATE_TASK_SCHEDULE | Name | Name from RESOURCE_MAINT_TASK_SCHEDULE. |
|  | RecurrenceType | RecurrenceType from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | UtilizationItemsProduced | UtilizationItemsProduced from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | UtilizationItemProducedUomCode | UtilizationItemProducedUomCode from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | UtilizationHours | UtilizationHours from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | UtilizationCycles | UtilizationCycles from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | UtilizationDays | UtilizationDays from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | EveryXDays | EveryXDays from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | WeeklyEveryXWeeks | WeeklyEveryXWeeks from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | WeeklySunday | WeeklySunday from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | WeeklyMonday | WeeklyMonday from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | WeeklyTuesday | WeeklyTuesday from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | WeeklyWednesday | WeeklyWednesday from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | WeeklyThursday | WeeklyThursday from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | WeeklyFriday | WeeklyFriday from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | WeeklySaturday | WeeklySaturday from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | MonthlyEveryXMonths | MonthlyEveryXMonths from RESOURCE_MAINT_TASK_SCHEDULE table.LE |
|  | MonthlyDayOfMonth | MonthlyDayOfMonth from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | YealyMonth | YealyMonth from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | YearlyDayOfMonth | YearlyDayOfMonth from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | TaskScheduledTime | TaskScheduledTime from RESOURCE_MAINT_TASK_SCHEDULE table. |
|  | ReferenceID | ReferenceID from RESOURCE_MAINT_TASK_SCHEDULE table. |
| UNIT | ID | Generated unique identifier. |
| UNIT_USAGE | All fields except who columns | Copied based on Unit Usages linked to RESOURCE_MAINT_TASK |
| MAINT_TEMPLATE_TASK_WORK_INSTR | MaintTemplateTaskID | ID of created MAINT_TEMPLATE_TASK record. |
|  | WorkInstructionID | Copied from related RESOURCE_MAINT_TASK_WORK_INSTR. |
|  | WorkInstructionRevisionID | Copied from related RESOURCE_MAINT_TASK_WORK_INSTR. |
| MAINT_TEMPLATE_TASK_ROLE | MaintTemplateTaskID | ID of created or overwritten Maintenance Template Procedure. |
|  | RoleID | Copied from RESOURCE_MAINT_TASK_ROLE. |
| MAINT_TEMPLATE_TASK_SKILL | MaintTemplateTaskID | ID of created or overwritten Maintenance Template Procedure. |
|  | SkillID | Copied from RESOURCE_MAINT_TASK_SKILL. |
