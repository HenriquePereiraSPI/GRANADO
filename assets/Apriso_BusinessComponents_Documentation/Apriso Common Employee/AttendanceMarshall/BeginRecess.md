# BeginRecess

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Deprecated

## Description

This Business Component method is used to begin the recess for an employee for a Pay Day by creating an ATTENDANCE_BREAK record for a Pay Day. It is also used to determine how an employee's time is rounded and computed to compute payroll hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee Number to start break. |
| Input | BreakStartTime | DateTime | Yes | Attendance break start time. |
| Input | BreakType | Integer | Yes | Break Type to start - Ex: Lunch, Dinner. |

## Validations

- The system validates that this the emplpoyee is valid via the EmployeeID. 
- The system validates that the employee tracks attendance. 
- The system retrieves the Pay Rules, calendar, and work schedule information to determine the Pay Day and how to round the times. 
- The system validates that the employee is currently clocked in. 
- The system validates that the break being taken matches with the times specified for the break. 
- The system validates that the employee has not already reported time against this break.  
 

Two examples are provided below.
 **Clock In** 
 
 
- The employee has a schedule from 07:00 AM to 15:30 for Monday. The employee has a scheduled break from 11:00 AM to 11:30 AM. 
- The employee clocks in at 6:45 AM on Monday. 
- The system determines that the 6:45 AM clock in belongs to Monday. 
- The system determines that the 6:45 AM clock in time is within the rounding rules around the scheduled start time of 07:00 AM. 
- The system applies the rounding rules and saves an ATTENDANCE record with a start time of 6:45 AM and an adjusted start time of 07:00 AM. The 07:00 AM time stamp will be used for the computation of durations throughout the day.  
 

 **Start Recess** 
 
 
- The employee starts recess at 11:03 AM on Monday. 
- The system determines that the 11:03 AM start recess belongs to Monday. 
- The system determines that the 11:03 AM start recess is scheduled. 
- The system determines that the 11:03 AM start recess time is within the rounding rules around the scheduled break start time of 11:00 AM. 
- The system applies the rounding rules and saves an ATTENDANCE_BREAK record with a start time of 11:03 AM and an adjusted start time of 11:00 AM. The 11:00 AM time stamp will be used for the computation of durations throughout the day.

## System Processing

- The system determines the Pay Day. 
- The system applies rounding rules against the time passed to accurately apply rules to the base time. 
- The system computes the rounded times. 
- The system persists the ATTENANCE_BREAK record against the Pay Day.

## Pre-Conditions

This BC can be automatically executed if Auto Deduct is set for this break as part of a subsequent ATTENDANCE or LABOR event.

## History Recording in Production

This BC can be automatically executed if Auto Deduct is set for this break as part of a subsequent ATTENDANCE or LABOR event.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE_BREAK | All |  |
| TRANSACTION_HISTORY | All |  |
