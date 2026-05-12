# StartTaskWithEquipment

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.TaskManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks.dll`
**Status:** Active

## Description

This Business Component method is similar to StartTask BC method but requires EquipmentID as additional input. When using this method to start a task in Portal, EquipmentID is available as a system variable in Function Interpreter and the Equipment labor is tracked in the TASK_RESOURCE_USE table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TaskID | Integer | Yes | The task to start. |
| Input | EmployeeID | Integer | Yes | The employee starting the task. |
| Input | EquipmentID | Integer | Yes | The equipment the employee is starting the task with. |

## Validations

- System checks if the Task exists.  
- System checks if Employee exists. 
- System checks if Equipment exists. 
- System checks if Task status is DISPATCHED or STARTED. 
- System checks if Task allows a resource to start it (NumberConcurrentResources < MaxConcurrentResources). 
- System checks if Employee hasn't already started more tasks than the current task demands (UserMaxNumberOfTasks). 
- System validates if the current time lies within the effective start/end time of task and the linked Process Operation & Standard Operation & Process.

## System Processing

- Task creates child task record to denote an instance of employee starting this task (if task allows multiple people to start it). Values from the master task are copied. 
- Actual start date of child task is set to current time. 
- Child task status is set to STARTED. 
- Master task number of active resources is incremented. 
- Child task Employee ID is set to active Employee ID. 
- Creates Task resource use referencing equipment.

## History Recording in Production

FlexNet.BusinessFacade.Common.Tasks.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TASK | NumberCurrentResources | Incremented to denote Employee working on a Task. |
|  | ActualStartDate | Current UTC time. |
|  | TaskStatus | STARTED |
|  | EmployeeID | Parameter EmployeeID. |
|  | ALL | New child task is created copying most fields from parent task. |
|  | MasterTaskID | Set to equal Parameter TaskID if creating a child task. |
| TASK_RESOURCE_USE | ALL | Created to reference task. |
|  | ResourceName | Resource name of a specified equipment. |
|  | ResourceType | EQUIPMENT |
|  | TaskID | ID of the created task. |
