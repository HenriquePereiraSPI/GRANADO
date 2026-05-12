# MovePayPeriod_v93

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This Business Component is used to support a Pay Rule for 9/80. Refer to "Time Manager Guide" for a detailed description of a 9/80 under Alternate work week.
 

This business component is meant to be run as a Job in the Job Scheduler on an "as required" basis, usually on the last day of the pay period at or after the End of Week.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PayRule | Char | Yes | The pay rule linked to the Employee. |
| Input | EmployeeClass | Integer | Yes | The class of the Employee (Exempt, Non-Exempt and Hourly Non-Exempt). |
| Input | PayCycle | Integer | No | Pay Cycle to filter employees. |
| Input | PayCycleYear | Integer | No | Pay Cycle year to filter employees. |
| Input | PayCycleFacility | String | No | Pay Cycle facility to filter employees. |

## Validations

The System validates the inputs provided to the business component.

## System Processing

- System retrieves the End Of Week (Time) from the Pay Cycle. 
- System will retrieve a list of employee to process. The employees are those that match the following criteria: 
 
- If the PayRule is inputted, then the employees must be assigned to the inputted pay rule. 
- If the EmployeeClass is inputted (<> -1), then the employee must be assigned to the inputted employee class. 
- If the PayCycle, PayCycleYear, and/or PayCycleFacility are inputted, these criteria are added to the employee filter. 
- Employees must be linked to the Pay Cycle that have a cross over the End Of Week. 
 
- System must verify that the EndOfWeek time specified in the PAY_CYCLE is equal to current time or in the past. 
- System must verify that each Employees records being processed has not previously been processed for this day. 
- System will close out the following records by performing Stop Labor and Clock Outs for all open records, marking the records with ACTION_FLAGS for "Automatic Clock Out" or "Auto Stop Labor". The End Times will be equal to the Pay_CycleEndOfDay specified for the Employees current Pay Cycle. 
 
- ATTENDANCE 
- ATTENDANCE_BREAK 
- LABOR 
- LABOR_DETAIL 
 
- System will create new records by performing Clock Ins and Start Labors and Clock Outs for all the records that the system just closed with the Same Pay Day and the new Pay Period, marking the records with ACTION_FLAGS for "Automatic Clock In" or "Auto Start Labor". The Start Times will be equal to the Pay_CycleEndOfDay specified for the Employees current Pay Cycle. 
 

 **NOTE:** 
 

Since this Scheduled Event may consume a considerable amount of time, the event must manage the following flow. Assume an 11:00 AM cut off
 

The Employee clocks in at 7:00 AM
 

The Employee starts Labor at 7:00 AM
 

The Employee stops Labor at 11:15 AM
 

The Employee starts Next Labor at 11:15 AM
 

System processes Event for 11:00 AM
 

In this flow, the Employee has already had activity after 11:00 AM. These records must be deleted and reprocessed against the new payday.

## Pre-Conditions

A user must exist, with a role.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | All |  |
| ATTENDANCE_BREAK | All |  |
| ATTENDANCE_ACTION_FLAGS | All |  |
| LABOR | All |  |
| LABOR_DETAIL | All |  |
