# UpdateEmployeeSchedule

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to Add or Delete data in the EMPLOYEE_WORK_SCHEDULE table.
 

This component can be used within a Standard Operation, which would:
 
 
- Provide the required User Interface to filter data prior to processing, 
- Provide affirmation prior to update, 
- Provide confirmation to the updates. 
 

The GetEmployeeSchedule Business Component can be used to retrieve input values for this component (like StartTime).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee ID. |
| Input | PayDay | DateTime | Yes | The pay date that the schedule assignment is for. |
| Input | Facility | Char | Yes | The Facility that the schedule assignment is for. |
| Input | Shift | Char | Yes | The Shift that the schedule assignment is for. |
| Input | WorkPeriod | Char | Yes | The Work Period that the schedule assignment is for. |
| Input | EarnCode | Char | Yes | The Earn Code that the schedule assignment is for. |
| Input | WorkCenter | Char | No | The Work Center of the schedule assignment. |
| Input | StartTime | DateTime | No | The start time of the schedule assignment. |
| Input | EndTime | DateTime | No | The end time of the schedule assignment. |
| Input | Team | Char | No | Feature not implemented. |
| Input | AfterAddOnName1 | Char | No | The AfterAddOnName1 of the schedule assignment. |
| Input | AfterAddOnName2 | Char | No | The AfterAddOnName2 of the schedule assignment. |
| Input | BeforeAddOnName | Char | No | The BeforeAddOnName1 of the schedule assignment. |
| Input | ScheduledHours | Decimal | No | The ScheduledHours of the schedule assignment |
| Input | NonWorking | Boolean | No | The NonWorking flag of the schedule assignment. |

## Validations

- The system verifies that the inputted parameters are valid against the EMPLOYEE table. 
- The system checks that the inputted value of Operation is valid (the only valid entries are "Add" or "Delete").

## System Processing

The system inserts a row into or deletes it from the EMPLOYEE_WORK_SCHEDULE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_WORK_SCHEDULE | EmployeeID | Inputted EmployeeID. |
|  | PayDay | Inputted PayDay. |
|  | Facility | Inputted Facility. |
|  | Shift | Inputted Shift. |
|  | WorkPeriod | Inputted WorkPeriod. |
|  | EarnCode | Inputted EarnCode. |
|  | WorkCenter | Inputted WorkCenter. |
|  | StartTime | Inputted StartTime. |
|  | EndTime | Inputted EndTime. |
|  | Team | Inputted Team. |
|  | AfterAddOnName1 | Inputted AfterAddOnName1. |
|  | AfterAddOnName2 | Inputted AfterAddOnName2. |
|  | BeforeAddOnName | Inputted BeforeAddOnName. |
|  | ScheduledHours | Inputted ScheduledHours. |
|  | NonWorking | Inputted NonWorking. |
