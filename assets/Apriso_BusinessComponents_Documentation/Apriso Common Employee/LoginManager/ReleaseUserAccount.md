# ReleaseUserAccount

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This method is used to release a specific Employee account (remove active session) only if AllowMultipleLogin (Security setting in Central Configuration) equals false.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | No | ID of the employee whose account will be reset |
| Input | ChangingEmployeeID | Integer | No | ID of the employee who will reset account, must have "Account Administrator" role |
| Input | ChangingEmployeePassword | Char | No | Password of changing employee |

## Validations

- System validates if changing Employee exists. 
- System validates changing Employee password. 
- System validates if changing Employee belongs to "Account Administrator" role. 
- System validates if Employee exists.

## System Processing

System releases a specific Employee account (removes active session) only if AllowMultipleLogin (Security setting in Central Configuration) equals false.
