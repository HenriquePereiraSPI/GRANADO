# MovePayDay_v2

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This Business Component is used to support a hard fixed End Of Day. This business component is meant to be run as a Job in the Job Scheduler on an "as required" basis, shortly after the End of Day.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PayDay | DateTime | Yes | The Payday of the attendance to process. The time should be set to 12 AM. |
| Input | PayCycle | Integer | Yes | The Pay Cycle. |
| Input | Facility | Char | Yes | The Pay Cycle's facility. |

## Validations

-  

 The system validates that a pay cycle exists for the given pay day and facility.
  
-  

The system validates that the end of day exists for the given pay cycle.
  
-  

The system validates pay periods exist for the given pay cycle.
  
-  

The system validates that a pay period exists on the pay day for the given pay cycle.
  
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting.

## System Processing

- System determines the pay cycle based on the pay day, pay cycle, and facility inputs. 
- System verifies the end of day is set for the pay cycle. 
- System determines the end of the pay day. 
 
- If End of Day is before the End of Day Cutoff, the end of the pay day is the day after the pay day input at the end of day time. E.g. PayDay input is Jan 1, end of day is 5 AM, end of payday is Jan 2 at 5 AM. 
- Otherwise, the end of the pay day is the pay day input at the end of day time. E.g. PayDay input is Jan 1, end of day is 3 PM, end of payday is Jan 1 at 3 PM. 
 
- System retrieves a list of employees to process that are assigned to the pay cycle. 
- System retrieves the attendance for each employee to process for the input pay day. 
- System determines if any attendance are open that would pass the end of the pay day. 
- System will close out the following records by performing Stop Labor and Clock Outs for all open records, marking the records with ACTION_FLAGS for "Automatic Clock Out" or "Auto Stop Labor". The End Times will be equal to the Pay_CycleEndOfDay specified for the Employees current Pay Cycle. 
 
- ATTENDANCE 
- ATTENDANCE_BREAK 
- LABOR 
- LABOR_DETAIL 
 
- System will create new records by performing Clock Ins and Start Labors and Clock Outs for all the records that the system just closed with the Same Pay Day and the new Pay Period, marking the records with ACTION_FLAGS for "Automatic Clock In" or "Auto Start Labor". The Start Times will be equal to the Pay_CycleEndOfDay specified for the Employees current Pay Cycle. 
- System will recalculate attendance for the pay day to ensure correct labor prorating. 
 

 **NOTE:** 
 

Since this Scheduled Event may consume a considerable amount of time, the event must manage the following flow. Assume an 11:00 AM End of Day.
 

The Employee clocks in at 7:00 AM
 

The Employee starts Labor at 7:00 AM
 

The Employee stops Labor at 11:15 AM
 

The Employee starts Next Labor at 11:15 AM
 

System processes Event for 11:00 AM.
 

In this flow, the Employee has already had activity after 11:00 AM. These records must be deleted and reprocessed against the new payday.

## Pre-Conditions

Pay cycle must exist.
 

Specific pay cycle configuration must exist.
 

A user must exist, with a role.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | All |  |
| ATTENDANCE_BREAK | All |  |
| ATTENDANCE_ACTION_FLAGS | All |  |
| LABOR | All |  |
| LABOR_DETAIL | All |  |
