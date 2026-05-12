# EndRecess

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Deprecated

## Description

This method is used to end recess for an employee for a pay day by updating an ATTENDANCE_BREAK record for a pay day with an End Time. It is also used to determine how an employee's time is rounded and computed to compute payroll hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee Number to stop break. |
| Input | BreakStopTime | DateTime | Yes | Attendance break stop time. |
| Input | BreakType | Integer | Yes | Break Type to stop - Ex: Lunch, Dinner. |

## Validations

- The system validates that this is a valid Employee by EmployeeID. 
- The system validates that this Employee tracks Attendance. 
- The system retrieves pay rules, calendar, work schedule information to determine the pay day and how to round times. 
- The system validates that the Employee is currently Clocked In. 
- The system validates that the Employee is currently has an open ATTENDANCE_BREAK record. 
- The system validates that the break being taken matched with the times specified for this break.

## System Processing

- The system determines the Pay Day. 
- The system applies rounding rules against the time passed to accurately apply rules to the raw time. 
- The system computes the rounded times. 
- The system computes the allocation of hours to Reg, Overtime and Double time. 
- The system updates the ATTENANCE_BREAK record with the corresponding start time with the actual end recess time and computed end recess time. 
 

 

 **Example:** 
 

 **** 
 

 Clock In 
 

  
 
 
- The Employee has a schedule from 07:00 AM to 15:30 for Monday. 
 

 The Employee has a scheduled break from 11:00 AM to 11:30 AM.
 
 
- The Employee clocks in at 6:45 AM on Monday. 
- The system determines that the 6:45 AM Clock In belongs to Monday. 
- The system determines that the 6:45 AM Clock In time is within rounding rules around the scheduled start time of 07:00 AM. 
- The system applies rounding rules and saves an ATTENDANCE record with a Start time of 6:45 AM and an Adjusted Start Time of 07:00 AM. The 07:00 AM time stamp will be used for computation of durations throughout the day. 
 

  
 

 Start Recess 
 

  
 
 
- The Employee starts recess at 11:03 AM on Monday. 
- The system determines that the 11:03 AM Start Recess belongs to Monday. 
- The system determines that the 11:03 AM Start Recess is scheduled. 
- The system determines that the 11:03 AM Start Recess time is within rounding rules around the scheduled break start time of 11:00 AM. 
- The system applies rounding rules and saves an ATTENDANCE_BREAK record with a Start time of 11:03 AM and an Adjusted Start Time of 11:00 AM. The 11:00 AM time stamp will be used for computation of durations throughout the day. 
 

  
 

 End Recess 
 

 
 
- The Employee ends recess at 11:33 AM on Monday. 
- The system determines that the 11:33 AM End Recess belongs to Monday and is matched to the Start Recess time of 11:00 AM. 
- The system determines that the 11:33 AM End Recess time is within rounding rules around the scheduled Recess End time of 11:30 AM. 
- The system applies rounding rules and saves an ATTENDANCE record with a End Time of 11:33 AM and an Adjusted End Time of 11:30 AM.

## Pre-Conditions

This BC can be automatically executed if Auto Deduct is set for this break as part of a subsequent ATTENDANCE or LABOR event.

## History Recording in Production

TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Attendance.AttendanceMarshall.EndRecess

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE_BREAK | All |  |
| TRANSACTION_HISTORY | All |  |
