# ReAssignTask

**Category:** Apriso/Common/Task
**Class:** `FlexNet.BusinessFacade.Common.Tasks.TaskManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Tasks`
**Status:** Active
**Keywords:** Task Reassign Assign Start Restart

## Description

This Business Component method is used to assign a started labor task to a different employee. It also reassigns the associated toolbar tasks. The status after reassignment is Abandoned, which means it will appear in the new employee's Task List.
 

 

The standard behavior of this BC method can be changed by using the SkipStatusCheck and RestartTask Inputs.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TaskID | Integer | Yes | The task to reassign. |
| Input | EmployeeID | Integer | Yes | The employee that will be assigned to the task. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| SkipStatusCheck | Boolean | Indicates if the labor task status should be validated (all statuses except Cancelled and Completed will be allowed). |
| RestartTask | Boolean | Indicates if the labor task in the Abandoned or Dispatched status should be restarted. |

## Validations

- The system validates if the task of the specified ID exists. 
- The system validates if the employee exists. 
- The system validates if the task type is Labor. 
- The system validates if the task status is Started. If the SkipStatusCheck Input flag is set, all the statuses except Cancelled and Completed are allowed.

## System Processing

- The related toolbar tasks (of the Standard Operation type and in the Started status) that belong to the current employee of the labor task are assigned to a new employee (given by EmployeeID). 
- The last employee of the task is set to the current employee of the task. 
- The current employee of the task is set to a new employee (given by EmployeeID). 
- The system changes the status of the task, depending on the flag: 
 
- If the RestartTask Input is set to false (or is not used), the Started status is changed to Abandoned. 
- If the RestartTask Input is set to true, the Abandoned or Dispatched status is changed to Started.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TASK | LastEmployeeID | TASK.EmployeeID |
|  | EmployeeID | EmployeeID |
|  | TaskStatus | Changed conditionally, see the System Processing section. |
