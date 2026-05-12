# MovePayDay

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This Business Component method is used to support a hard fixed End Of Day. The BC is meant to be run as a job in Job Scheduler on an "as required" basis (usually every day at or after the End of Day).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Payday | DateTime | Yes | The Payday of the attendance to process. The time should be set to 12 AM. |

## Validations

The System validates the inputs provided to the business component.

## System Processing

- System retrieves the End Of Day (Time) from the Pay Cycle and the End of Day Cutoff from Central Configuration. 
- System will retrieve a list of employee to process. Those employees linked to the Pay Cycle that have a cross over the End Of Day. 
- System will process the list of employees by retrieving the employees. 
- System must verify that the EndOfDay time specified in the PAY_CYCLE is equal to current time or in the past. 
- System must verify that each Employees records being processed has not previously been processed for this day. 
- System will close out the following records by performing Stop Labor and Clock Outs for all open records, marking the records with ACTION_FLAGS for "Automatic Clock Out" or "Auto Stop Labor". The End Times will be equal to the Pay_CycleEndOfDay specified for the Employees current Pay Cycle. 
 
- ATTENDANCE 
- ATTENDANCE_BREAK 
- LABOR 
- LABOR_DETAIL 
 
- System will create new records by performing Clock Ins and Start Labors and Clock Outs for all the records that the system just closed with the Same Pay Day and the new Pay Period, marking the records with ACTION_FLAGS for "Automatic Clock In" or "Auto Start Labor". The Start Times will be equal to the Pay_CycleEndOfDay specified for the Employees current Pay Cycle. 
 

 **NOTE:** 
 

Since this Scheduled Event may consume a considerable amount of time, the event must manage the following flow. Assume an 11:00 AM End of Day.
 

The Employee clocks in at 7:00 AM
 

The Employee starts Labor at 7:00 AM
 

The Employee stops Labor at 11:15 AM
 

The Employee starts Next Labor at 11:15 AM
 

System processes Event for 11:00 AM.
 

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
