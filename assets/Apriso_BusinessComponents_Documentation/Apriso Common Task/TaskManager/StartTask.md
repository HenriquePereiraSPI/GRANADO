# StartTask

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.TaskManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

This Business Component method creates a child task (if the master task is not singular) and populates the ActualStartDate, TaskStatus, and EmployeeId fields of the inputted Task in the TASK table. This BC method also verifies that Current Date/Time (Converted from UTC) lies within effective/discontinue dates for the operation and that MaxLaborResources has not been reached before the child task is created.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TaskID | Integer | Yes | The task to start. |
| Input | EmployeeID | Integer | Yes | The employee starting the task. |

## Validations

- System checks if the Task exists. 
- System checks if an Employee exists. 
- System checks if Task status DISPATCHED or STARTED. 
- System checks if Task allows a resource to start it (NumberConcurrentResources < MaxConcurrentResources).  
- System checks if an Employee hasn't already started more tasks than the current task demands (UserMaxNumberOfTasks). 
- System validates that the current time lies within the effective start/end time of task and linked Process Operation, Standard Operation and Process.

## System Processing

- Task creates a child task record to denote an instance of employee starting this task (if task allows multiple people to start it). Values from the master task are copied. 
- Actual start date of child task is set to current time. 
- Child task status is set to STARTED. 
- Master task number of active resources is incremented. 
- Child task employee id is set to active employee id.

## History Recording in Production

FlexNet.BusinessFacade.Common.Tasks.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TASK | NumberCurrentResourcesD | Incremented to denote employee working on task. |
|  | ActualStartDate | Current UTC time. |
|  | TaskStatus | STARTED |
|  | EmployeeID | EmployeeID parameter. |
|  | ALL | New child task is created copying most fields from parent task. |
|  | MasterTaskID | Set to equal Parameter TaskID if creating child task. |
