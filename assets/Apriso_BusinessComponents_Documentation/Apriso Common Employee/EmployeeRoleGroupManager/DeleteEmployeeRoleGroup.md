# DeleteEmployeeRoleGroup

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Resources.EmployeeRoleGroupManager`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active
**Keywords:** Delete, Employee, Group, Role

## Description

The purpose of this Business Component is to delete a relationship between an employee and a role group and any associated records if possible.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeGroup | Integer | Yes | ID of the employee |
| Input | RoleGroup | Char | Yes | Role Group |
| Input | RoleGroupType | Short | Yes | Type of the Employee Group |
| Input | RoleGroupClassID | Integer | Yes | ID of the Employee Group class |

## Validations

- System validates if a relation between the inputted employee and role group exists.

## System Processing

- System deletes all employee role records assigned by this inputted employee and role group relationship. 
- System deletes an employee and role group relationship. 
- System deletes an employee group and role group relationship.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_GROUP_ROLE_GROUP | All |  |
| EMPLOYEE_ROLE_GROUP_RELATION | All |  |
| EMPLOYEE_ROLE | All |  |
