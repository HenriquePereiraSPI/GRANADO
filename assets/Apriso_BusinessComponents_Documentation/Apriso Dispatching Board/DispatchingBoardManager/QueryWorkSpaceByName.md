# QueryWorkSpaceByName

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.DispatchingBoardManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component queries if a Workspace exists with the inputted Workspace name and employee.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Name | Char | No | The Workspace name. |
| Input | EmployeeID | Integer | No | The employee ID. |
| Output | WorkSpaceID | Integer | No | The Workspace ID. |

## Validations

- Validates if the Workspace exists

## System Processing

- If there is no Workspace that exists with the inputted name and employee, then the system returns 0 or returns the Workspace ID
