# ImportMaintenanceTemplate

**Category:** Apriso/Maintenance/Resource
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.ResourceManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Deprecated

## Description

This Business Component method imports a Maintenance Template to a specific resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceID | Integer | Yes | Resource ID |
| Input | MaintTemplateID | Integer | Yes | Maintenance Template ID |

## Validations

- System validates that the Resource exists.  
- System validates that the Maintenance Template exists.

## System Processing

- System gets all procedures for the selected template. 
- System checks if there is a Resource Maintenance Procedure that already exists, if not, it creates a new Resource Maintenance Procedure. If Resource Maintenance Procedure already exists, system updates its fields if it is needed. 
- System copies the Template Procedures to the Resource Maintenance Procedures including their descriptions. 
- System copies the Safety Instruction Usages and Documents linked to Maintenance Template and links it to the Resource Maintenance Procedure.

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
