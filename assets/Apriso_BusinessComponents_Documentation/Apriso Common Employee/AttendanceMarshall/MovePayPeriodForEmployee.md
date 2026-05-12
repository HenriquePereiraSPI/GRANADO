# MovePayPeriodForEmployee

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This Business Component is used to support a Pay Rule for 9/80. Refer to "Time Manager Guide" for a detailed description of a 9/80 under Alternate work week.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee to move the pay period for. |

## Validations

The System validates the inputs provided to the business component.

## System Processing

- System retrieves the End Of Week (Time) from the Pay Cycle. 
- System must verify that the EndOfWeek time specified in the PAY_CYCLE is equal to current time or in the past. 
- System must verify that the Employee record being processed has not previously been processed for this day. 
- System will close out the following records by performing Stop Labor and Clock Outs for all open records, marking the records with ACTION_FLAGS for "Automatic Clock Out" or "Auto Stop Labor". The End Times will be equal to the Pay_CycleEndOfDay specified for the Employees current Pay Cycle. 
- ATTENDANCE 
- ATTENDANCE_BREAK 
- LABOR 
- LABOR_DETAIL 
- System will create new records by performing Clock Ins and Start Labors and Clock Outs for all the records that the system just closed with the Same Pay Day and the new Pay Period, marking the records with ACTION_FLAGS for "Automatic Clock In" or "Auto Start Labor". The Start Times will be equal to the Pay_CycleEndOfDay specified for the Employees current Pay Cycle.

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
