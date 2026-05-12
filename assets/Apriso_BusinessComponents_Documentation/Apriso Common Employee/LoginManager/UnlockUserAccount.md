# UnlockUserAccount

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This method is used to unlock (reset "Failed authentication attempts count", "Last failed authentication date", "Login lockout date") specific Employee account.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | No | ID of the employee whose account will be reset |
| Input | ChangingEmployeeID | Integer | No | ID of the employee who will reset account, must have "Account Administrator" role |
| Input | ChangingEmployeePassword | Char | No | Password of changing employee |

## Validations

- System validates if changing Employee exists. 
- System validates changing Employee password. 
-  

System validates if changing Employee belongs to "Account Administrator" role.
  
- System validates if Employee exists.

## System Processing

System unlocks a specific Employee account (resets "Failed authentication attempts count", "Last failed authentication date", "Login lockout date").
