# FindQualifyAssignmentByEmployeeSkill

**Category:** Apriso/Dispatching Board
**Class:** `FlexNet.BusinessFacade.DispatchingBoard.AssignmentManager`
**Assembly:** `FlexNet.BusinessFacade.DispatchingBoard`
**Status:** Active

## Description

This Business Component finds a qualified employee with the specified skill.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkSpaceID | Integer | Yes | The Workspace ID. |
| Output | Activities | ListofInteger | No | The list of activity IDs. |
| Output | ResourceIDs | ListofInteger | No | The list of DB resource IDs. |

## Validations

- Validates if the Workspace exists

## System Processing

- The system iterates through all the activities in the Workspace 
- The system checks if the required skill is specified by checking the SkillID value in the DB_ACTIVITY table duplicated from the corresponding WIP Order 
- The system finds the first available resource (employee) who has the skill by checking the SkillID values in the DB_RESOURCE table duplicated from the employees  
 
- The employee list is loaded when the Workspace is created and loaded into the DB_RESOURCE table 
 
- The system adds the activity to the activity list and adds the employee found to the resource list
