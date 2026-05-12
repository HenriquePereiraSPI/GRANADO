# ResetUserAccount

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This method is used to reset (unlock and change password) specific Employee account.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | No | ID of the employee whose account will be reset |
| Input | ChangingEmployeeID | Integer | No | ID of the employee who will reset account, must have "Account Administrator" role |
| Input | ChangingEmployeePassword | Char | No | Password of changing employee |
| Input | NewPassword | Char | No | New password for specific account |
| Input | ConfirmNewPassword | Char | No | Confirmation of new password for specific account |

## Validations

- System validates if changing Employee exists. 
- System validates changing Employee password. 
-  

System validates if changing Employee belongs to "Account Administrator" role.
  
- System validates if Employee exists. 
- System validates if NewPassword equals ConfirmNewPassword.

## System Processing

System resets (unlocks and changes password) a specific Employee account.

## Pre-Conditions

A user must exist, with a role.
