# OverrideEmployee

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This method allows to perform a database transaction in context of different user (employee) than the currently logged one. For all database transaction User ID in columns CreatedBy and LastUpdatedBy will be overridden by inputted user ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | ID of the employee that will override current employee. |

## Validations

System checks if inputted Employee ID exists in the database.

## System Processing

System overrides current Employee with the Employee from input only for current database transaction.
