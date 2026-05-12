# UpdateEmployeeRole

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Resources.EmployeeChanger`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active

## Description

The purpose of this Business Component is to Add or Delete data in the EMPLOYEE_ROLE table.
 

This component can be used within a Standard Operation which provides:
 
 
- The required User Interface to filter data prior to processing 
- Affirmation prior to an update 
- Update confirmation

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | ID of the employee. |
| Input | RoleID | Integer | Yes | The role ID that is being assigned. |
| Input | Operation | Char | No | The operation the BC performs. If "Add" is selected, it adds the relationship, otherwise it deletes it. |

## Validations

- System verifies that the inputted EmployeeID are valid against the EMPLOYEE table. 
- System verifies that the inputted RoleID is valid against the ROLE table. 
- System checks that the the inputted value of Operation is valid (the only valid entries are "Add" or "Delete").

## System Processing

- If the inputted Operation = "Add", the system inserts a record into EMPLOYEE_ROLE with the inputted data. 
- Else if inputted Operation = "Delete", the system checks EMPLOYEE_ROLE_GROUP_RELATION if the role is assigned directly or from a group. If the role is assigned directly, the system deletes the retrieved row in the EMPLOYEE_ROLE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_ROLE | EmployeeID | Inputted EmployeeID |
| EMPLOYEE_ROLE | RoleID | Inputted RoleID |
| EMPLOYEE_ROLE_GROUP_RELATION | EmployeeID | Inputted EmployeeID |
| EMPLOYEE_ROLE_GROUP_RELATION | RoleID | Inputted RoleID |
