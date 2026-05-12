# SignOffEmployeeAttendance

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active
**Keywords:** Attendance, Sign Off

## Description

This method validates the attendance record for the Employee based on the Start and End Date, and attempts to sign off on the attendance records.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The Employee whose attendance record will be signed off. |
| Input | StartDate | DateTime | Yes | The Start Date of the attendance record. |
| Input | EndDate | DateTime | Yes | The End Date of the attendance record. |

## Validations

- The system checks if the given Employee is valid,  
- The system checks if the End Date is after the Start Date.

## System Processing

- The system validates the attendance records in the given date range for the specified Employee. 
- If there are any blocking exceptions to the attendance records, an error will be returned. 
- Else if there are no blocking exceptions, the attendance records will be signed off.

## Pre-Conditions

****

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | AttendanceStatus |  |
|  | EmployeeID | EmployeeID (if provided) |
