# ValidateUsernameAndPasswordAndRole

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This Business Component validates whether a specified employee with a specified role is valid to logon to system.
 

It does not log on the user. It only checks validity of user credentials.
 

 The following authentication methods are supported: 
 
 
-  Standard Authentication  
-  Active Directory Authentication  
- 3DPassport Authentication

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ValidateEmployee | Char | Yes | User credential to validate. |
| Input | ValidateEmployeePassword | Char | Yes | Decrypted user password to validate.. |
| Input | ValidateRole | Char | No | User role to validate. |
| Output | IsValidToLogon | Boolean | No | Returns value indicating validity of user to logon to the system. |

## Validations

- System validates if the inputted ValidateEmployee and ValidateEmployeePassword are valid. 
- System validates the role of the employee if ValidateRole is inputted.

## System Processing

- System outputs IsValidToLogon to TRUE if all validations are OK. 
- Else system outputs IsValidToLogon to FALSE.

## Pre-Conditions

A user must exist, with a role.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE | LoginName | Compared to inputted ValidateEmployee |
| EMPLOYEE | Password | Compared to inputted ValidateEmployeePassword |
| EMPLOYEE_ROLE | EMPLOYEEID | EMPLOYEE.ID |
| EMPLOYEE_ROLE | ROLEID | retrieved |
| ROLE | ID | EMPLOYEE_ROLE.ROLEID |
| ROLE | ROLE | Compared to inputted ValidateRole |
