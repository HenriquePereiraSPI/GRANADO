# ClockIn_v2

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This business component is used to clock an employee into the system for a payday by creating an ATTENDANCE record for the payday. It is also used to determine how an employee's time is rounded and computed in order to compute the payroll hours. This BC enables creating an indirect record automatically at clock in. 

 **Supported Features ** 
 
 
- Action windows 
- Grace periods 
- Employee validation 
- Cannot clock in if already clocked in 
- 22-hour rule for clock in if an employee forgot to clock out for the previous day 
- Cut rule Payday calculation (the cut rule is a DELMIA Apriso term used to describe the calculation procedure for determining the payday using the variables configured in TMCONFIG) 
- Auto Clock In from labor transactions only 
- Multiple definable pay rules per plant 
- Multiple definable pay periods 
- Multiple definable shift work periods 
- Multiple definable earn codes 
- Time tracked to the second 
- Transaction history 
- Task cleanup from previous days' activities 
- Earn code based on a schedule or passed to a component  
 

 

 **Features Not Supported ** 
 
 
- Team (crew) clock in

*Activity Diagram 1*

*Activity Diagram 2*

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | The employee number to clock in. |
| Input | EarnCode | Char |  | The earn code used for the attendance. |
| Input | ClockInTime | DateTime | Yes | The attendance start time. |
| Output | AttendanceID | Integer |  | The ID of the created ATTENDANCE record. |

## Validations

- The system validates that this is a valid employee via the EmployeeID.  
- The system validates that this employee has attendance tracked. 
- The system retrieves the pay rules, calendar, and work schedule information to determine the Payday and how to round the times. 
- The system validates that the employee is not currently clocked in. 
- The system validates that the employee has a valid badge or temporary badge. 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting

## System Processing

-  

The system determines the payday.
  
-  

The system applies rounding rules against the time passed in order to accurately apply rules to the raw time.
  
-  

The system computes the rounded times.
  
-  

The system persists the ATTENDANCE record against the payday and earn code (retrieved from the schedule or passed to the component) with the actual clock in time and the computed clock in time. If no earn code is passed to the EarnCode input, the Default Regular Earn Code of the assigned pay rule is used. If the rotating schedule is set, the earn code for the given day is used.
  
 

 **Performing Clock In** 
 
 
-  

The system retrieves the work schedule information for the employee.
  
-  

The system processes the time information for the employee. The system calculates the Payday for the employee.
  
-  

The system processes the attendance information for the employee: the attendance information is generated, and the attendance record is stored.
  
-  

If labor is enabled, the system creates a scheduled job that handles Start Indirect automatically. It occurs through the invoking of the StartIndirect_v2 BC. The Start Time of the job is affected by the Begin Work Idle Time Minutes setting of the Pay Rule when the value is different from 0.
  
-  

Based on the transaction configuration settings, the system determines if the transaction history is to be recorded. If yes, a transaction history record is inserted in the TRANSACTION_HISTORY_TIME table for every successful Clock In transaction.
  
-  

The system returns a "Clock In successful" message to the employee.
  
-  

If the system fails at any point throughout the process, the system returns the appropriate error message.
  
 

 **Updating Tasks as Part of Clock In ** 
 
 
-  

The system determines that this is the first Clock In for this Payday.
  
-  

The system determines that there are tasks associated with the open labor records for a previous Payday whose status must be updated.
  
-  

The system searches for and executes FLX_TASK_DETERMINATION DFC to determine the status with which to update the tasks. The DFC has the following Inputs:
  
 
-  

Facility (from Task.Facility)
  
-  

TaskType (from Task.Tasktype)
  
-  

Process (from Task.ProcessID- Process.Process)
  
-  

OperationCode (from Task.OperationID- OperationCode)
  
 

FLX_TASK_DETERMINATION DFC is not delivered in a standard DELMIA Apriso installation and must be implemented manually if it is not found by the system.
 
-  

The Output of FLX_TASK_DETERMINATION DFC will be TaskStatus. The available TaskStatus values include those task statuses available in the TASK_STATUS table:
  
 
-  

0 - Leave task in the current state
  
-  

1 - New
  
-  

2 - Abandoned
  
-  

3 - Allocated
  
-  

4 - Released
  
-  

5 - Cancelled
  
-  

6 - Started
  
-  

7 - Reported
  
-  

8 - Completed
  
-  

9 - Dispatched
  
-  

10 - Held
  
 
-  

The system updates the tasks by performing the following actions:
  
 
-  

Do nothing based on a return value of 0.
  
-  

Abandoned will execute the abandoned task.
  
-  

Cancelled will execute the cancelled task.
  
-  

Completed will execute the completed task.
  
-  

All other task statuses default to the complete task until further specified.
  
 
 

 **Scheduled Job for Auto Clock Out as Part of Clock In ** 
 
 
-  

The system determines that this is the first Clock In for the Payday.
  
-  

The system retrieves the PAY_RULE setting for AutoClockOut associated with this new ATTENDANCE record.
  
-  

The system creates a scheduled job to run an AutoClockOut at the Attendance.AdjustedStartTime + the number of hours as defined in PAY_RULE.MaxAttendancePerPayDay for this employee.
  
 

 

 **For example: ** 
 
 
- The employee has a schedule from 07:00 AM to 15:30 for Monday. 
- The employee clocks in at 6:45 AM on Monday. 
- The system determines that the 6:45 AM clock in belongs to Monday. 
- The system determines that the 6:45 AM clock in time is within the rounding rules around the scheduled start time of 07:00 AM. 
- The system applies the rounding rules and saves an ATTENDANCE record with a start time of 6:45 AM and an adjusted start time of 07:00 AM. The 07:00 AM timestamp is used for the computation of durations throughout the day.

## Pre-Conditions

**Preconditions 
 **This BC can be automatically executed if Auto Clock In on Start Labor is set.
 

 **Prerequisites 
 **As part of the standard setup for the Time Manager module and so this BC can perform correctly, these are the prerequisites:
 
 
- A company calendar must be defined. 
- A pay period must be defined for the employee. 
- A shift and work period must be defined for the employee. 
- A valid pay rule must exist for the employee to be able to clock in. 
 

 **Other Prerequisites** 
 
 
- The employee must have been assigned a home department. 
- The employee must have been assigned a rate code. 
- The clock in time must fall within the allowed shift window. 
 

 **System Configurations** 
 
 
- Time Manager Enabled – this configuration option allows the DELMIA Apriso Time Manager system to operate. No Time Manager functions are allowed unless this setting has been enabled.  
- Labor Enabled – when labor is enabled, an indirect record is to be written automatically. To enable labor, the Occupation must be assigned to the employee in the Employee Facility, the Track Attendance setting must be selected in the Employee Attendance tab, the Pay Rule must allow indirect type, and Allow Labor Posting must be selected in the Pay Rule Earn Code Properties. 
- Whether or not the transaction history is recorded depends on the transaction configuration information. 
 

 **Post Conditions** 
 
 
- The employee state changes from Not Clocked In to Clocked In. 
- The system will recompute the employee state from Clocked In to Not Clocked In if a significant amount of time passes from the initial Clock In. This functionality is optional. To enable it, Auto Clock Out must be set in Pay Rule in Time Manager Administration. 
- The system may optionally close old tasks that this employee had started and not stopped. Refer to Updating Tasks as Part of Clock In section for more details.

## Published Events

The system may optionally post an Auto Clock Out event.

## History Recording in Production

TRANSACTION_HISTORY - Transaction Name: FlexNet.BusinessFacade.Attendance.AttendanceMarshall.ClockIn

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | ID | System-generated. |
|  | EmployeeID | Retrieved from the inputted EmployeeNo. |
|  | StartTime | The inputted ClockInTime. |
|  | PayDay | Calculated (see System Processing). |
