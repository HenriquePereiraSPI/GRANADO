# CheckEmployeeSkillID

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Security.LoginManager`
**Assembly:** `FlexNet.BusinessFacade.Security.dll`
**Status:** Active
**Keywords:** Skill,Employee

## Description

This Business Component method is used to check if the employee has the specified Skill assigned.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee ID for which the check will be performed. |
| Input | SkillID | Integer | Yes | The ID of the Skill for which the check will be performed. |
| Output | HasSkill | Boolean | Yes | True if the employee has the Skill. |

## Validations

- The system validates the employee.  
- The system validates the Skill.

## System Processing

- The system checks if the employee has the Skill assigned.  
- The system returns True if the employee has the Skill.
