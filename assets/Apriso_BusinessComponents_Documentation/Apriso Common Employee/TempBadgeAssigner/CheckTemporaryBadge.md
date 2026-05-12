# CheckTemporaryBadge

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Common.TempBadgeAssigner`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used is to validate that the temporary badge provided with a Payday is valid and returns the employee number of the employee linked to that badge on that Payday.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TempBadgeNo | Char | No | The temporary badge number for which the employee ID is to be provided. |
| Input | PayDay | DateTime | Yes | The Payday for which the temporary badge was assigned. |
| Output | EmployeeID | Integer | No | The retrieved employee ID. |

## Validations

- The system verifies that the inputted TempBadgeNo exists in the TEMP_BADGE table.

## System Processing

- The system retrieves the record of the EMPLOYEE_TEMP_BADGE table that matches the Inputs. 
- The system outputs the retrieved EmployeeID.

## Pre-Conditions

The temporary badge must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TEMP_BADGE | BadgeNo | The inputted TempBadgeNo. |
| EMPLOYEE_TEMP_BADGE | PayDay | The inputted PayDay. |
| EMPLOYEE_TEMP_BADGE | BadgeNo | The inputted TempBadgeNo. |
| EMPLOYEE_TEMP_BADGE | EmployeeID | Retrieved and outputted to EmployeeID. |
