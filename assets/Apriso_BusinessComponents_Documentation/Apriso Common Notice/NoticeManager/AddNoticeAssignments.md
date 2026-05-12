# AddNoticeAssignments

**Category:** Apriso/Common/Notice
**Class:** `FlexNet.BusinessFacade.Notice.NoticeManager`
**Assembly:** `FlexNet.BusinessFacade.Notice`
**Status:** Active
**Keywords:** Notice

## Description

Defines Notice assignments. An assignment causes a Notice to be displayed to the assigned Employees. A Notice can be assigned to specific Employees or to all Employees in a given group.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | NoticeID | Integer | Yes | ID of the Notice. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| EmployeeIDList | ListofInteger | IDs of Employees to whom the Notice is to be assigned. |
| EmployeeClassIDList | ListofInteger | IDs of Employee Classes to which the Notice is to be assigned. |
| EmployeeRoleIDList | ListofInteger | IDs of Employee Roles to which the Notice is to be assigned. |
| ResourceClassIDList | ListofInteger | IDs of Resource Classes to which the Notice is to be assigned. |

## Validations

- Validation fails if the Notice is in the 3-Closed status.

## System Processing

- System adds a new row in the NOTICE_ASSIGNMENT table for each dynamic Input.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| NOTICE_ASSIGNMENT | ID | New record ID. |
|  | EmployeeID | Employee ID. |
|  | EmployeeClass | Employee Class. |
|  | RoleID | Employee Role ID. |
|  | ResourceClassID | Resource Class ID. |
