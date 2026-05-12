# EndRecess_v2

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This method is used to end recess for an employee for a Pay Day by updating an ATTENDANCE_BREAK record for the Pay Day with an End Time. It is also used to determine how an employee's time is rounded and computed to compute payroll hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | The employee number to stop the break. |
| Input | BreakStopTime | DateTime | Yes | The attendance break stop time. |
| Input | BreakType | Integer | Yes | The break type to stop, e.g., Lunch, Dinner. |
| Output | AttendanceBreakID | Integer |  | The ID of the updated ATTENDANCE_BREAK record. |

## Validations

- The system validates that this is a valid employee by the EmployeeID 
- The system validates that this employee tracks attendance 
- The system retrieves the Pay Rules, calendar, and work schedule information to determine the Pay Day and how to round the times 
- The system validates that the employee is currently Clocked In 
- The system validates that the employee currently has an open ATTENDANCE_BREAK record 
- The system validates that the break being taken matches the times specified for this break 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting 
-  

 The system validates that the Effective Date and Discontinue Date of the break type have not elapsed

## System Processing

- The system determines the Pay Day 
- The system applies rounding rules against the time passed to accurately apply rules to the raw time 
- The system computes the rounded times 
- The system computes the allocation of hours to Regular, Overtime, and Double Time 
- The system updates the ATTENANCE_BREAK record with the corresponding Start Time with the actual End Recess Time and computed End Recess Time 
 

 

 For example: 
 

 **** 
 

Clock In 
 

  
 
 
- The employee has a schedule from 07:00 AM to 15:30 for Monday and a scheduled break from 11:00 AM to 11:30 AM. 
- The employee clocks in at 6:45 AM on Monday. 
- The system determines that the 6:45 AM Clock In belongs to Monday. 
- The system determines that the 6:45 AM Clock In time is within the rounding rules around the scheduled start time of 07:00 AM. 
- The system applies the rounding rules and saves an ATTENDANCE record with a Start Time of 6:45 AM and an Adjusted Start Time of 07:00 AM. The 07:00 AM time stamp will be used for the computation of durations throughout the day.  
 

  
 

Start Recess 
 

  
 
 
- The employee starts recess at 11:03 AM on Monday. 
- The system determines that the 11:03 AM Start Recess belongs to Monday. 
- The system determines that the 11:03 AM Start Recess is scheduled. 
- The system determines that the 11:03 AM Start Recess time is within the rounding rules around the scheduled break start time of 11:00 AM. 
- The system applies the rounding rules and saves an ATTENDANCE_BREAK record with a Start Time of 11:03 AM and an Adjusted Start Time of 11:00 AM. The 11:00 AM time stamp will be used for computation of durations throughout the day.  
 

  
 

End Recess 
 

 
 
- The employee ends recess at 11:33 AM on Monday. 
- The system determines that the 11:33 AM End Recess belongs to Monday and is matched to the Start Recess Time of 11:00 AM. 
- The system determines that the 11:33 AM End Recess Time is within rounding rules around the scheduled Recess End Time of 11:30 AM. 
- The system applies rounding rules and saves an ATTENDANCE record with an End Time of 11:33 AM and an Adjusted End Time of 11:30 AM.

## Pre-Conditions

This BC can be automatically executed if Auto Deduct is set for this break as part of a subsequent ATTENDANCE or LABOR event.

## History Recording in Production

TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Attendance.AttendanceMarshall.EndRecess

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE_BREAK | All |  |
| TRANSACTION_HISTORY | All |  |
