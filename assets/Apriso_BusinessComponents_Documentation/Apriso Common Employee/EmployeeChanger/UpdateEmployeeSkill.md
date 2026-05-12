# UpdateEmployeeSkill

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Resources.EmployeeChanger`
**Assembly:** `FlexNet.BusinessFacade.Resources`
**Status:** Active

## Description

The purpose of this Business Component is to Add or Delete data in the EMPLOYEE_SKILL table.
 

This component can be used within a Standard Operation, which would:
 
 
- Provide the required User Interface to filter data prior to processing, 
- Provide affirmation prior to update, 
- Provide confirmation to the updates.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee ID. |
| Input | SkillID | Integer | Yes | The role ID that is being assigned. |
| Input | SkillExperienceLevel | Integer | No | The skill experience level. |
| Input | ExpirationDate | DateTime | No | The expiration date of the skill. |
| Input | UseExpirationDate | Boolean | Yes | A flag to update expiration date. |
| Input | Operation | Char | No | The operation the BC will perform. If "Add" then it will add the relationship, otherwise it will delete it. |

## Validations

- System verifies that inputted EmployeeID are valid against the EMPLOYEE table. 
- System verifies that inputted SkillID is valid against the SKILLtable. 
- System checks that the inputted value of Operation is valid (Only valid entries are "Add" or "Delete").

## System Processing

- If the inputted Operation = "Add", then system inserts a record into EMPLOYEE_SKILL with the inputted data. 
- Else if inputted Operation = "Delete", then system deletes the retrieved row in the EMPLOYEE_SKILL table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_SKILL | EmployeeID | Inputted EmployeeID |
| EMPLOYEE_SKILL | SkillID | Inputted RoleID |
| EMPLOYEE_SKILL | SkillExperienceLevel | Inputted SkillExperienceLevel |
| EMPLOYEE_SKILL | ExpirationDate | Inputted ExpirationDate |
