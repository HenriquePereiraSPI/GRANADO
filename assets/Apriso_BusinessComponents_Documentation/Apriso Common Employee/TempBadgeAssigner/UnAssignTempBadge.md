# UnAssignTempBadge

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Common.TempBadgeAssigner`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to unassign temporary badges, the purpose being to make the temporary badge available for reassignment to another employee.
 

This Business Component unlinks a temporary badge from an employee for a specified duration of time.
 

UnAssignTempBadge can be executed as a standard operation and additionally can be invoked from the Temporary Badge maintenance screen.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Badge facility. |
| Input | TempBadgeNo | Char | Yes | The temp badge to be unassigned. |

## Validations

The system verifies that the temporary badge exists and is currently assigned to an employee.

## System Processing

System retrieves and deletes the record set from EMPLOYEE_TEMP_BADGE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_TEMP_BADGE | ID | Retrieved from Input |
| EMPLOYEE_TEMP_BADGE | Facility | Inputted Facility |
| EMPLOYEE_TEMP_BADGE | BadgeNo | Inputted TempBadgeNo |
