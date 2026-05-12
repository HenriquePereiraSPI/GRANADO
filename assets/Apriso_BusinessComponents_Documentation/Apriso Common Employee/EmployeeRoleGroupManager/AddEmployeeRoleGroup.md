# AddEmployeeRoleGroup

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Resources.EmployeeRoleGroupManager`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active
**Keywords:** Add, Employee, Group, Role

## Description

The purpose of this Business Component is to create a relationship between an employee and a role group. It should also create a record in the EMPLOYEE_ROLE_GROUP_RELATION table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | ID of the employee |
| Input | RoleGroup | Char | Yes | Role Group |
| Input | RoleGroupType | Short | Yes | Type of the Employee Group |
| Input | RoleGroupClassID | Integer | Yes | ID of the Employee Group class |
| Input | Description | Char | No | Description |

## Validations

- System validates if a relation between the inputted employee and role group exists. 
- System validates if a role group exists.

## System Processing

System creates a record in EMPLOYEE_GROUP_ROLE_GROUP table.
 

System creates a record in EMPLOYEE_ROLE_GROUP_RELATION table.
 

System creates an employee role record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_GROUP_ROLE_GROUP | ID | ID |
|  | EmployeeID | Inputted EmployeeID |
|  | RoleGroup | Inputted RoleGroup |
|  | RoleGroupType | Inputted RoleGroupType |
|  | RoleGroupClassID | Inputted RoleGroupClassID |
|  | TexID | Description |
| EMPLOYEE_ROLE_GROUP_RELATION | ID | ID |
|  | EmployeeID | Employee ID from employee group |
|  | RoleID | Role ID from role group |
|  | EmployeeGroupRoleGroupID | EmployeeGroupRoleGroup ID |
| EMPLOYEE_ROLE | EmployeeID | Employee ID |
|  | RoleID | Role ID |
