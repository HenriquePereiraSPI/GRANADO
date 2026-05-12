# CheckEmployeeRole

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active
**Keywords:** Role, Employee

## Description

This Business Component method is used to check if the employee has the specified Role assigned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee for which the check will be performed. |
| Input | Role | Char | Yes | The Role name for which the check will be performed. |
| Output | HasRole | Boolean | Yes | This is True if the employee has the Role. Otherwise, this is False. |

## Validations

- The system validates the employee.  
- The system validates the Role.

## System Processing

- The system checks if the employee has the Role.  
- The system returns True if the employee has the Role. Othewise, the system returns False.
