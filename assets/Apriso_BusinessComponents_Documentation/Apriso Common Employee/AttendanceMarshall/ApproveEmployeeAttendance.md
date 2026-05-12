# ApproveEmployeeAttendance

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active
**Keywords:** Attendance, Approval

## Description

This Business Component method is used to validate the attendance record for the employee based on the start and end date. The BC also attempts to approve the attendance records. The BC enables approving entries within one Pay Period.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The Employee whose attendance record will be approved. |
| Input | SupervisorID | Integer | Yes | The Supervisor who is approving the attendance of the Employee. |
| Input | StartDate | DateTime | Yes | The Start Date of the attendance record. |
| Input | EndDate | DateTime | Yes | The End Date of the attendance record. |

## Validations

- The system checks that the provided employee is valid.  
- The system checks that the provided Supervisor is valid. 
- The system checks that the end date is after the start date.

## System Processing

- The system validates the attendance records in the given date range for the specified employee.  
- If there are any blocking exceptions to the attendance records, an error will be returned. 
- If there are no blocking exceptions, the attendance records will be approved by the Supervisor.

## Pre-Conditions

****

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | AttendanceStatus |  |
|  | EmployeeID | EmployeeID (if provided) |
