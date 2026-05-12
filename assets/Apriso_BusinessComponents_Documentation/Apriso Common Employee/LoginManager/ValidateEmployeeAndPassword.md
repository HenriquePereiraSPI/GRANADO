# ValidateEmployeeAndPassword

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This Business Component validates whether a specified employee is valid to logon to system. It does not log on the user. It only checks validity of user credentials. 

 The following authentication methods are supported: 
 
 
-  Standard Authentication  
-  Active Directory Authentication  
- 3DPassport Authentication

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ValidateEmployee | Char | Yes | User credential to validate. |
| Input | ValidateEmployeePassword | Char | Yes | Decrypted user password to validate. |
| Output | IsValidToLogon | Boolean | No | Returns value indicating validity of user to logon to the system. |

## Validations

The System validates the inputted ValidateEmployee and ValidateEmployeePassword are valid.

## System Processing

- System outputs IsValidToLogon to TRUE if all validations are OK. 
- Else system outputs IsValidToLogon to FALSE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE | LoginName | Compared to inputted ValidateEmployee |
| EMPLOYEE | Password | Compared to inputted ValidateEmployeePassword |
