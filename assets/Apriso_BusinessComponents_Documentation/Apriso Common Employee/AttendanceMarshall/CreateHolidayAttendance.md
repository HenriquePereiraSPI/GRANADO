# CreateHolidayAttendance

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active
**Keywords:** Attendance, Holiday, Calendar

## Description

This method reviews the Calendar for holidays for each employee it is processing, and creates attendance of type Holiday, if required. This is used primarily for non-exempt users who do not have access to Time Manager.
 

This Business Component has been created to be called from a scheduled job.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | The facility to create holiday attendance for. |
| Input | EmployeeID | Integer | No | If provided, holiday attendance will be created only for the given employee. |
| Input | EmployeeClass | Integer | No | If provided, holiday attendance will be created only for employees with the given class. |
| Input | BeginDate | DateTime | Yes | The begin date to determine if holiday attendance needs to be created. |
| Input | EndDate | DateTime | Yes | The end date to determine if the holiday attendance needs to be created. |

## Validations

- The system checks if the given facility is valid, 
- If provided, the system checks if the given employee is valid, 
- The system checks if the end date is after the begin date,  
- The system checks if the TrackAttendanceFlag is set to True.

## System Processing

- If the EmployeeID input is provided and valid, the system will verify if attendance is tracked for a given Employee. If so, it will update the Employee with a HOL record; if not, it will not perform any actions. 
- If the EmployeeID is not provided and EmployeeClass is provided, the system will retrieve all Employees with that class for whom attendance is tracked. If there are no Employees with that class for whom attendance is tracked, it will not perform any actions. 
- If EmployeeID and EmployeeClass are not provided, the system will retrieve all Employees for whom attendance is tracked. If there are no Employees for whom attendance is tracked, the system will not perform any actions.  
- The system gets the configured Calendar for the given employee. 
- The system then determines if there are any holidays (defined by the employee Pay Rule's default holiday Earn Code) defined between the inputted begin and end dates. 
- If there are any holidays defined, the system will then create attendance records for these given days for that employee and Earn Code.

## Pre-Conditions

****

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | MiscRegularHours |  |
|  | EmployeeID | EmployeeID (if provided) |
|  | Earncode |  |
