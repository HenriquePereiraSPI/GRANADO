# ValidateUsernameAndPassword

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active

## Description

This purpose of this Business Component is to authenticate the Username and Password against the System.
 

 The following authentication methods are supported: 
 
 
-  Standard Authentication  
-  Active Directory Authentication  
- 3DPassport Authentication 
 

This Business Component allows for example to include a Supervisor's checkpoint in a process operation before a task can be completed.
 

Depending on the inputted value of the Unique flag, this BC will or will not allow self-authentication by the user.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | No | EmployeeNo |
| Input | ValidateEmployee | Char | Yes | User credential to validate. |
| Input | ValidateEmployeePassword | Char | Yes | Decrypted user password to validate. |
| Input | ValidateRole | Char | No | User role to validate |
| Input | Unique | Boolean | No | Unique |
| Output | IsValidToLogon | Boolean | No | Returns value indicating validity of user to logon to the system. |

## Validations

- If the inputted Unique flag is set to TRUE, then system validates that the inputted ValidateEmployee is different from the inputted EmployeeNo. 
- If they are not different, the BC ouputs "False". 
- Else, system processes as follows.

## System Processing

- System retrieves a record in the EMPLOYEE table for the inputted ValidateEmployee, by comparing the inputted ValidateEmployee to Employee Login Name, Employee Number, Badge number or Temporary Badge: 
 
- If no record is found, system returns an error message that states : "Invalid Employee credentials". The BC outputs "False". 
 
- System validates that the ValidateEmployee is valid against the EmployeeValidDate and LoginExpirationDate. 
 
- If dates are not valid, the BC outputs "False". 
 
- System validates that the ValidateEmployeePassword entered matches that on the retrieved EMPLOYEE record and the Password has not expired. 
 
- If not, the BC outputs "False". 
 
- System validates that the ValidateRole has been entered and matches a Role that the ValidateEmployee has. 
 
- If not, the BC outputs "False". 
 
- System provides an output Successful.

## Pre-Conditions

An employee must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE | ID | System Generated |
|  | Name |  |
|  | EmployeeNo | Inputted EmployeeNo |
|  | LoginName | Compared to inputted ValidateEmployee |
|  | Password | Compared to inputted ValidateEmployeePassword |
|  | EmployeeValidDate | Compared to NOW date |
|  | LoginExpirationDate | Compared to NOW date |
| EMPLOYEE_ROLE | EmployeeID | EMPLOYEE.ID |
|  | RoleID | ROLE.ID - compared to ValidateRole |
| EMPLOYEE_SKILL | EmployeeID | EMPLOYEE |
|  | ExpirationDate | Compared to NOW date (see System Processing) |
