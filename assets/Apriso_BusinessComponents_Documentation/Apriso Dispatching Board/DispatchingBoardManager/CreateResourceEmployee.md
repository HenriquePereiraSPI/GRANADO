# CreateResourceEmployee

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Retired

## Description

This Business Component creates an assignment between an activity and a resource (Employee).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Input | EmployeeID | Integer | No | The employee ID. |
| Output | DBResourceID | Integer | No | The resource ID. |

## Validations

- Validates if the Workspace exists  
- Validates if the employee exists

## System Processing

- The system creates a Dispatching Board resource record by copying the value from the employee  
- If the employee does not have a name value, then the system uses EmployeeNo as the resource name

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DB_RESOURCE | ALL | ALL |
