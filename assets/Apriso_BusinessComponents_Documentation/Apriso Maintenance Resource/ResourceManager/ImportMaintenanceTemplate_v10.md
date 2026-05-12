# ImportMaintenanceTemplate_v10

**Category:** Apriso/Maintenance/Resource
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ResourceManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Active

## Description

This Business Component method imports a Maintenance Template to a specific resource. It also allows to import the specified Maintenance Template Procedures (use Dynamic Input).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | Resource ID |
| Input | MaintTemplateID | Integer | Conditional | Maintenance Template ID |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| MaintTemplateTaskIDs | ListofInteger | IDs of the Maintenance Template Procedures to be imported. |
| UpdateOnlyExisting | Boolean | Indicates if new Maintenance Procedures should be created. |
| DenyUpdateExisting | Boolean | Indicates if already existing Maintenance Procedures should stay unchanged. |

## Validations

- System validates that the Resource exists. 
- System validates that the Maintenance Template or Maintenance Template Procedures are provided.  
- System validates that the Maintenance Template exists.

## System Processing

- System gets all procedures for the selected template or selected template procedures based on the dynamic Input. 
- System checks if there is a Resource Maintenance Procedure that already exists, if not, it creates a new Resource Maintenance Procedure. If Resource Maintenance Procedure already exists, system updates its fields if it is needed. 
- System copies the Template Procedures to the Resource Maintenance Procedures including their descriptions. 
- System copies the Safety Instruction Usages and Documents linked to Maintenance Template and links it to the Resource Maintenance Procedure. 
- System copies Work Instructions linked to Maintenance Template and links it to the Resource Maintenance Procedure. 
- System gets all procedures schedules for the selected template. 
- System copies the Template Procedures' Schedules to the Resource Maintenance Procedures Schedules. 
- System copies links to Roles and Skills from Maintenance Template Procedure to the Resource Maintenance Procedure. 
- If UpdateOnlyExisting Dynamic Input is provided and set to true, Business Component updates only existing Maintenance Procedures without creating new ones. 
- If DenyUpdateExisting Dynamic Input is specified and set to true then any operations like update and copy for existing Maintenance Procedures will be not performed.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_MAINT_TASK | ResourceID | ID of Resource Record |
|  | Name | Name from MAINT_TEMPLATE_TASK table |
|  | EffectiveDate | Actual Date in case of creating new row |
|  | WorkCenter | WorkCenter from MAINT_TEMPLATE_TASK table |
|  | SkillID | SkillID from MAINT_TEMPLATE_TASK table |
|  | EstimatedHours | EstimatedHours from MAINT_TEMPLATE_TASK table |
|  | Reactive | Reactive from MAINT_TEMPLATE_TASK table |
|  | RecurrenceType | RecurrenceType from MAINT_TEMPLATE_TASK table |
|  | ItemsProduced | ItemsProduced from MAINT_TEMPLATE_TASK table |
|  | UtilizationHours | UtilizationHours from MAINT_TEMPLATE_TASK table |
|  | RunningDays | RunningDays from MAINT_TEMPLATE_TASK table |
|  | WeeklyEveryXWeeks | WeeklyEveryXWeeks from MAINT_TEMPLATE_TASK table |
|  | WeeklySunday | WeeklySunday from MAINT_TEMPLATE_TASK table |
|  | WeeklyMonday | WeeklyMonday from MAINT_TEMPLATE_TASK table |
|  | WeeklyTuesday | WeeklyTuesday from MAINT_TEMPLATE_TASK table |
|  | WeeklyWednesday | WeeklyWednesday from MAINT_TEMPLATE_TASK table |
|  | WeeklyThrusday | WeeklyThrusday from MAINT_TEMPLATE_TASK table |
|  | WeeklyFriday | WeeklyFriday from MAINT_TEMPLATE_TASK table |
|  | WeeklySaturday | WeeklySaturday from MAINT_TEMPLATE_TASK table |
|  | MonthlyEveryXDay | MonthlyEveryXDay from MAINT_TEMPLATE_TASK table |
|  | YearlyMonth | YearlyMonth from MAINT_TEMPLATE_TASK table |
|  | YearlyDayOfMonth | YearlyDayOfMonth from MAINT_TEMPLATE_TASK table |
|  | ActionCreateOrder | ActionCreateOrder from MAINT_TEMPLATE_TASK table |
|  | ProcessID | ProcessID from MAINT_TEMPLATE_TASK table |
|  | ActionDFC | ActionDFC from MAINT_TEMPLATE_TASK table |
|  | DFCRevisionFUID | DFCRevisionFUID from MAINT_TEMPLATE_TASK table |
|  | ActionGenerateAlert | ActionGenerateAlert from MAINT_TEMPLATE_TASK table |
|  | AlertTypeID | AlertTypeID from MAINT_TEMPLATE_TASK table |
|  | AlertClassID | AlertClassID from MAINT_TEMPLATE_TASK table |
|  | AlertResponseDFCRevisionFUID | AlertResponseDFCRevisionFUID from MAINT_TEMPLATE_TASK table |
|  | BlockResource | BlockResource from MAINT_TEMPLATE_TASK table |
|  | CheckListID | CheckListID from MAINT_TEMPLATE_TASK table |
|  | MaintTemplateTaskID | ID from MAINT_TEMPLATE_TASK table |
|  | UtilizationCycles | UtilizationCycles from MAINT_TEMPLATE_TASK table |
|  | RoleID | RoleID from MAINT_TEMPLATE_TASK table |
|  | EveryXDays | EveryXDays from MAINT_TEMPLATE_TASK table |
|  | MonthlyEveryXMonths | MonthlyEveryXMonths from MAINT_TEMPLATE_TASK table |
|  | EmployeeID | EmployeeID from MAINT_TEMPLATE_TASK table |
|  | VerificationRequired | VerificationRequired from MAINT_TEMPLATE_TASK table |
|  | ItemProducedUomCode | ItemProducedUomCode from MAINT_TEMPLATE_TASK table |
|  | AllowMultipleOpenOrders | AllowMultipleOpenOrders from MAINT_TEMPLATE_TASK table |
|  | CancelPreviousOrders | CancelPreviousOrders from MAINT_TEMPLATE_TASK table |
|  | Description Fields | Copied based on description fields from MAINT_TEMPLATE_TASK table |
| SAFETY_INSTRUCTION_USAGE | All fields except who columns | Copied based on Safety Instruction Usages linked to MAINT_TEMPLATE_TASK |
| UNIT_DOCUMENT | All fields except who columns | Copied based on Unit Documents linked to MAINT_TEMPLATE_TASK |
| RESOURCE_MAINT_TASK_SCHEDULE | ResourceMaintTaskID | ID of created RESOURCE_MAINT_TASK record. |
|  | Name | Name from MAINT_ORDER_TASK_SCHEDULE |
|  | RecurrenceType | RecurrenceType from MAINT_ORDER_TASK_SCHEDULE |
|  | UtilizationItemsProduced | UtilizationItemsProduced from MAINT_ORDER_TASK_SCHEDULE |
|  | UtilizationItemProducedUomCode | UtilizationItemProducedUomCode from MAINT_ORDER_TASK_SCHEDULE |
|  | UtilizationHours | UtilizationHours from MAINT_ORDER_TASK_SCHEDULE |
|  | UtilizationCycles | UtilizationCycles from MAINT_ORDER_TASK_SCHEDULE |
|  | UtilizationDays | UtilizationDays from MAINT_ORDER_TASK_SCHEDULE |
|  | EveryXDays | EveryXDays from MAINT_ORDER_TASK_SCHEDULE |
|  | WeeklyEveryXWeeks | WeeklyEveryXWeeks from MAINT_ORDER_TASK_SCHEDULE |
|  | WeeklySunday | WeeklySunday from MAINT_ORDER_TASK_SCHEDULE |
|  | WeeklyMonday | WeeklyMonday from MAINT_ORDER_TASK_SCHEDULE |
|  | WeeklyTuesday | WeeklyTuesday from MAINT_ORDER_TASK_SCHEDULE |
|  | WeeklyWednesday | WeeklyWednesday from MAINT_ORDER_TASK_SCHEDULE |
|  | WeeklyThursday | WeeklyThursday from MAINT_ORDER_TASK_SCHEDULE |
|  | WeeklyFriday | WeeklyFriday from MAINT_ORDER_TASK_SCHEDULE |
|  | WeeklySaturday | WeeklySaturday from MAINT_ORDER_TASK_SCHEDULE |
|  | MonthlyEveryXMonths | MonthlyEveryXMonths from MAINT_ORDER_TASK_SCHEDULE |
|  | MonthlyDayOfMonth | MonthlyDayOfMonth from MAINT_ORDER_TASK_SCHEDULE |
|  | YealyMonth | YealyMonth from MAINT_ORDER_TASK_SCHEDULE |
|  | YearlyDayOfMonth | YearlyDayOfMonth from MAINT_ORDER_TASK_SCHEDULE |
|  | TaskScheduledTime | TaskScheduledTime from MAINT_ORDER_TASK_SCHEDULE |
|  | All fields except who columns | Copied based on Work Instruction linked to MAINT_TEMPLATE_TASK. |
|  | Name | This column cannot be copied directly, so is extended by first unique numeric suffix, starting from 1. |
| WORK_INSTR_REVISION | All fields except who columns | Copied based on Work Instruction Revisions related to Work Instruction linked to MAINT_TEMPLATE_TASK. |
| UNIT_USAGE | All fields except who columns | Copied based on Unit Usages related to Work Instructions linked to MAINT_TEMPLAT_TASK. |
|  | ResourceMaintTaskID | ID of created RESOURCE_MAINT_TASK record. |
|  | MaintTemplateTaskID | Value not specified. |
| UNIT | ID | ID of unit record that will be used to link WORK_INSTRUCTION with UNIT_USAGE. |
|  | Name |  |
| RESOURCE_MAINT_TASK_ROLE | ResourceMaintTaskID | ID of created or overwritten Maintenance Procedure. |
|  | RoleID | Copied from RESOURCE_MAINT_TASK_ROLE. |
| RESOURCE_MAINT_TASK_SKILL | ResourceMaintTaskID | ID of created or overwritten Maintenance Procedure. |
|  | SkillID | Copied from RESOURCE_MAINT_TASK_SKILL. |
