# GetMaintenanceSchedule

**Category:** Apriso/Maintenance/Order
**Class:** `FlexNet.BusinessFacade.ResourceMaintenance.MaintenanceOrderManager`
**Assembly:** `FlexNet.BusinessFacade.ResourceMaintenance.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component method is to get the schedule of a planned resource maintenance task.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | StartDate | DateTime | Yes | Start Date of the Schedule. |
| Input | EndDate | DateTime | Yes | End Date of the Schedule. |
| Input | ResourceID | Integer | No | Resource ID. |
| Input | SkipWeekends | Boolean | Yes | Decide if the schedule needs to plan to skip weekends. |
| Output | MaintTemplateTaskIDList | ListofInteger | No | List of maintenance template task IDs. |
| Output | ResourceMaintTaskIDList | ListofInteger | No | List of planned resource maintenance task IDs. |
| Output | TaskNameList | ListofChar | No | List of planned task names. |
| Output | TaskStartDateList | ListofDateTime | No | List of planned task start dates. |
| Output | TaskDueDateList | ListofDateTime | No | List of planned task due dates. |
| Output | TaskLocaDueDateList | ListofDateTime | No | List of planned task local due dates. |
| Output | ResourceIDList | ListofInteger | No | List of planned task resource IDs. |
| Output | TaskDurationInSecondsList | ListofDecimal | No | List of planned task duration. |

## Validations

System validates if Resource exists.

## System Processing

- If the resource is specified, system builds the calendar which contains all the resource maintenance tasks from the inputted start date to the inputted end date in the schedule from the specified resource.  
- If the resource is not specified, system builds the calendar which contains all the maintenance tasks from the inputted start date to the inputted end date for all the resources. 
- System builds the TaskNameList, TaskStartDateList, TaskDueDateList, TAskLocalDueDateList, ResourceIDList, TaskDurationInSecondsList according to the result of the built calendar.
