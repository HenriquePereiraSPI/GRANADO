# RecalculateAttendance

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

Uses the Pay Day and recalculates the attendance and labor for the Pay Period that the given Pay Day is in. This will call the same logic that is called when you use the save button in Time Manager.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Char | Yes | Employee ID to recalculate attendance. |
| Input | PayDay | DateTime | Yes | The Pay Day to determine the Pay Period to recalculate. |

## Validations

- The system validates that the employee exists 
- The system validates that the employee tracks attendance 
- The system validates that the employee has a valid Employee Class 
- The system validates that the Pay Period exists 
- The system validates that the Pay Period is not closed or locked 
- The system validates that the attendance and labor records in the Pay Period are correct 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting 
 

 

 Attendance Record Validation 
 

 
 
- The system validates that the Earn Codes exist in the Pay Rule assigned to the employee 
- The system validates that the sum of hours per day cannot exceed 24 
- The system validates that none of the attendance records have negative hours unless the Earn Code allows negative hours 
 

 

 Additional Exempt Employee Attendance Record Validation 
 

 
 
- The system validates that all of the records have hours 
- If the Earn Code allows labor posting: 
 
- The system validates that the WIP Order type exists 
- The system validates if the WIP Order type is not Jobless, and then that the Charge Code exists 
- If the WIP Order type is not Indirect, Orderless, or Jobless: 
 
- The system validates that the Charge Code and Operation exist and that the Operation is in the Charge Code 
- The system validates that the Charge Code and Operation have not been completed prior to the Pay Period 
- The system validates that no hours are assigned to the days after if the Charge Code or Operation were completed within the Pay Period

## System Processing

- The system retrieves the Pay Period from the Pay Day 
- The system retrieves the employee attendance and labor configuration 
- The system retrieves attendance records for the Pay Period 
- The system validates the attendance records 
- The system calculates attendance for the pay period: 
 
- Adjusts times to clock tick and variance windows 
- Creates auto-deduct break records 
- Determines attendance and break durations 
- Creates action flags records 
 
- The system calculates labor for the pay period: 
 
- Automatically closes open labor records where required 
- Adjusts times to clock tick, variance windows, and idle time 
- Determine labor durations and proration 
- Auto clock out attendance where required 
- Creates action flags records 
 
- The system removes approval records for the pay period 
- The system creates audit records based on attendance and labor changes 
- The system saves the attendance and labor records

## Pre-Conditions

- As part of the Time Manager module, proper attendance configuration is required prior to executing including but not limited to: 
 
- Organization 
- Calendar 
- Employee 
- Work Period and Shift 
- Pay Rule 
- Pay Cycle 
- Earn Code  
 
- Additionally, proper labor configuration is required for: 
 
- Type 
- Order, Product, Process, and Operation 
- Occupation Code 
- Reason Code 
- Labor Code 
- Labor Grade

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | RegularHours | Calculated from attendance duration |
| ATTENDANCE | OvertimeHours | Calculated from attendance duration |
| ATTENDANCE | DoubleTimeHours | Calculated from attendance duration |
| ATTENDANCE | MiscRegularHours | Calculated from attendance duration |
| ATTENDANCE | MiscOvertimeHours | Calculated from attendance duration |
| ATTENDANCE | MiscDoubleTimeHours | Calculated from attendance duration |
| ATTENDANCE | AdjustedStartTime | Calculated from variance window |
| ATTENDANCE | AdjustedStopTime | Calculated from variance window |
| ATTENDANCE | AdjustedStartTimeLocal | Calculated from variance window |
| ATTENDANCE | AdjustedStopTimeLocal | Calculated from variance window |
| ATTENDANCE_ACTION_FLAG | ActionFlagType | Determined by action, i.e. auto-deducted breaks |
| ATTENDANCE_APPROVAL |  | Records deleted |
| ATTENDANCE_AUDIT | All | Records created based on changes to ATTENDANCE records |
| ATTENDANCE_BREAK | All | Records created based on configuration |
| LABOR | AdjustedStartTimeLocal | Calculated from variance window |
| LABOR | AdjustedStopTimeLocal | Calculated from variance window |
| LABOR | RegularHours | Calculated from labor duration |
| LABOR | OverTimeHours | Calculated from labor duration |
| LABOR | DoubleTimeHours | Calculated from labor duration |
| LABOR | NonRegularHours | Calculated from labor duration |
| LABOR_ACTION | ActionFlagType | Determined by action, i.e. auto-deducted breaks |
| LABOR_AUDIT | All | Records created based on changes to LABOR records |
