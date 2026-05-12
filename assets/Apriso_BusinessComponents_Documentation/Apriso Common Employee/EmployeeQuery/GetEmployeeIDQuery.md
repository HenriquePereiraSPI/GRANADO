# GetEmployeeIDQuery

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Common.EmployeeQuery`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose for this Business Component is to retrieve the EmployeeID for a specified EmployeeNo.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee number or temp badge for which employee id is to be retrieved. |
| Input | Payday | DateTime | No | Pay day for which temp badge was assigned. |
| Output | EmployeeID | Integer | No | Retrieved employee id. |

## Validations

- The system attempts to retrieve a matching record in the EMPLOYEE table for the inputted EmployeeNo. 
- If a match if found, system retrieves the record's ID and outputs it to EmployeeID. 
- If no employee record is found, then system assumes that the inputted EmployeeNo is a temp badge number; system attempts to retrieve a matching record in the EMPLOYEE_TEMP_BADGE table. 
 
- If a match is found, system retrieves the record's employee ID and outputs it to EmployeeID 
- Else output is null.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE | ID | Retrieved by syst. Processing and outputted to EmployeeID |
| EMPLOYEE | EmployeeNo | Inputted EmployeeNo |
| EMPLOYEE_TEMP_BADGE | BadgeNo | Inputted EmployeeNo |
| EMPLOYEE_TEMP_BADGE | PayDay | Inputted PayDay |
| EMPLOYEE_TEMP_BADGE | EmployeeID | Outputted EmployeeID |
