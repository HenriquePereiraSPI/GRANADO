# AssignTempBadge

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Common.TempBadgeAssigner`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component is used to facilitate the assignment of temporary badges (so that individuals can log in to DELMIA Apriso using a temporary badge). These are examples of users who may be issued temporary badges: 
 
- Permanent employees who misplaced or lost their permanent badge 
- Permanent employees temporarily assigned to a different work location 
- Temporary or part-time workers 
- Outside service contractors 
- Visitors and guests 
 

This BC links a temporary badge to an employee for a specified duration of time. The temporary badge is used by the employee to log in to DELMIA Apriso.
 

The BC can be executed as a Standard Operation and can be invoked from the Temporary Badge M&M Screen.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | employeeNo | Char | Yes | The employee creating the temporary badge. |
| Input | tempBadgeNo | Char | Yes | The temporary badge to be assigned. |
| Input | startDate | DateTime | Yes | The date from which the temporary badge will be valid. |
| Input | daysValid | Integer | Yes | The period for which the temporary badge will be valid. |

## Validations

- The system validates the employee number: 
 
- The employee number must exist in the EMPLOYEE table. 
- The employee number must be date-effective with the following conditions: 
 
- The login date (today's date) must be later than EMPLOYEE.EmployeeValidDate. 
- The login date (today's date) must be prior to EMPLOYEE.LoginExpirationDate.  
 
- The employee number must be valid for the Facility. If the Facility is not inputted, use EMPLOYEE.DefaultFacility. The employee number and Facility must exist in EMPLOYEE_FACILITY.  
 
- The system validates the Temporary Badge Number: 
 
- The temporary badge number must exist in TEMP_BADGE. 
- The temporary badge number must either not exist in EMPLOYEE_TEMP_BADGE, or it can exist but it must be inactive (that is, not assigned to another employee). The EMPLOYEE_TEMP_BADGE.Payday column contains the expiration date of the temporary badge number. The date value in each EMPLOYEE_TEMP_BADGE.Payday must have expired. If the system determines that the employee temporary badge is already assigned to another employee, the system displays an error message. 
 
- The system validates the assignment start date, which must occur in the future.  
- The system validate the days valid value. This can be any number (it must not be zero or null). The purpose of this is for the supervisor or employee to inform the system of the number of days that the temporary badge is valid. Another way to state this is that the temporary badge will expire in "'n" days, wherein "n" is the days valid.

## System Processing

The system activates the temporary badge row in the database.
 
 
- If no rows exist in EMPLOYEE_TEMP_BADGE, the system will insert one or more rows in the table. The number of rows inserted will be equal to the inputted daysValid entered (beginning with the inputted assignment startDate and incrementing by 1 day for a count equal to the daysValid value). 
- If rows exist in EMPLOYEE_TEMP_BADGE for the current employee and a badge that contains the date values in EMPLOYEE_TEMP_BADGE .Payday that have expired, each row will be updated with a new value in EMPLOYEE_TEMP_BADGE.Payday until a count equal to daysValid value is reached.

## Pre-Conditions

The temporary badge must previously exist. The employee being assigned the temporary badge must be a valid employee.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE | ID | Retrieved. |
| EMPLOYEE | EmployeeNo | The inputted EmployeeNumber. |
| EMPLOYEE_TEMP_BADGE | ID | System-generated. |
| EMPLOYEE_TEMP_BADGE | Facility | The Input or EMPLOYEE.DefaultFacility. |
| EMPLOYEE_TEMP_BADGE | BadgeNo | The inputted tempBadgeNo (required). |
| EMPLOYEE_TEMP_BADGE | EmployeeID | EMPLOYEE.ID |
| EMPLOYEE_TEMP_BADGE | AssignorID | EmployeeID of the person who assigned the temporary badge. |
| EMPLOYEE_TEMP_BADGE | Payday | Computed (see the System Processing section above). |
