# OverrideMealDeduction

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to override the autodeduction of a break for Attendance computations purpose.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee ID. |
| Input | PayDay | DateTime | Yes | The pay date that the schedule assignement is for. |
| Input | BreakType | Integer | Yes | The break type you are overriding. |

## Validations

- Employee has to be valid 
- PayDay has to be valid 
- Break type has to be valid 
- A schedule has to exist for the Employee and PayDay

## System Processing

- This business component will retrieve the ATTENDANCE and ATTENDANCE_BREAK row that overlaps the break by breaktype and do one of the following: 
- If breaktype fits into the existing ATTENDANCE and ATTENDANCE_BREAK based on it's start time, end time. 
 
- If a break type already exists in ATTENDANCE_BREAK table: 
 
- 1 - change override flag from FALSE to TRUE. 
- 2 - change regularhours to 0 
- 3 - recomputed the payday. 
 
 
- If breaktype fits into the existing ATTENDANCE and ATTENDANCE_BREAK based on it's start time, end time. 
 
- If a break type does not exists in this table: 
 
- Insert a new row into ATTENDANCE_BREAK with 
- 1 - override flag set to TRUE. 
- 2 - regularhours set to 0 
- 3 - do not apply auto deduct as a row already exists. 
 
 
- If there is no ATTENDANCE that overlaps this breaktype. 
 
- Error - "Override failed - Fix using Time Manager screens." 
 
- If breaktype does not exist for this shift/work period. 
 
- Error - "Invalid Break Type."

## Pre-Conditions

A user must exist, with a role.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE |  |  |
| ATTENDANCE |  |  |
| ATTENDANCE_BREAK |  |  |
