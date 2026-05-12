# ClockOut_v2

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active
**Keywords:** Attendance, Clockout, Time

## Description

This Business Component method is used to clock an employee out of the system for a Payday by updating an existing ATTENDANCE record for the Payday with the End Ttime. It is also used to determine how an employee's time is rounded and computed in order to compute the payroll hours.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | The employee number to clock out. |
| Input | ClockOutTime | DateTime | Yes | The clock out time in local time. |
| Output | AttendanceID | Integer |  | The ID of the updated ATTENDANCE record. |

## Validations

- The system validates that this is a valid employee via the EmployeeID.  
- The system validates that this employee tracks attendance.  
- The system retrieves the Pay Rules, calendar, and work schedule information to determine the Pay Day and how to round the times.  
- The system validates that the employee is currently clocked in. 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting

## System Processing

- The system determines the Payday.  
- The system applies rounding rules against the time passed to accurately apply rules to the raw time.  
- The system computes the rounded times.  
- The system computes the allocation of hours to Regular, Overtime, and Double Time.  
- The system updates the ATTENDANCE record with the corresponding Start Time with the actual Clock Out time and the computed Clock Out time. 
- The system creates break records that have Auto Deduct enabled in the work schedule. 
 

 **For example:** 
 
 
-  **Clock In:**  
 
- The employee has a schedule from 07:00 AM to 15:30 for Monday. 
- The employee clocks in at 6:45 AM on Monday. 
- The system determines that the 6:45 AM Clock in belongs to Monday. 
- The system determines that the 6:45 AM Clock in time is within the rounding rules around the scheduled start time of 07:00 AM. 
- The system applies the rounding rules and saves an ATTENDANCE record with a Start Time of 6:45 AM and an Adjusted Start Time of 07:00 AM. The 07:00 AM time stamp will be used for the computation of durations throughout the day. 
 
-  **Clock Out:**  
 
- The employee clocks out at 15:33 PM on Monday. 
- The system determines that the 15:33 PM Clock Out belongs to Monday and is matched to the Clock In time of 7:00 AM. 
- The system determines that the 15:33 PM Clock Out time is within the rounding rules of the scheduled End Time of 15:30 PM. 
- The system applies rounding rules and saves an ATTENDANCE record with an End Time of 15:33 PM and an Adjusted End Time of 15:30 PM. 
- The system determines if breaks need to be posted for this ATTENDANCE. 
- The system computes the employee hours for the day into Regular, Overtime, and Double Time columns.

## Pre-Conditions

**Preconditions:** 
 

This BC can be automatically executed if Auto Clock Out is set.
 

 **Post Conditions:** 
 
 
- The employee state changes from Clocked In to Not Clocked In. 
- The system will recompute the employee state from Clocked In to Not Clocked In. 
- The system may optionally close out the old tasks that this employee had started and not stopped. 
- The system may optionally close out the open labor records for this employee.

## Published Events

The system may optionally post an Auto Clock Out event.

## History Recording in Production

TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Attendance.AttendanceMarshall.ClockOut

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | EndTime | ClockOutTime (converted to UTC) |
|  | EndTimeLocal | ClockOutTime |
|  | AdjustedStopTime |  |
|  | AdjustedStopTimeLocal |  |
|  | AttendanceStatus |  |
|  | RegularHours |  |
|  | OverTimeHours |  |
|  | DoubleTimeHours |  |
|  | MiscRegularHours |  |
|  | MiscOverTimeHours |  |
|  | MiscDoubleTimeHours |  |
