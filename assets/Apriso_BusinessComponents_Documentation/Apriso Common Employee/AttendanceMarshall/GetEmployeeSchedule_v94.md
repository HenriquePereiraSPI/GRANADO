# GetEmployeeSchedule_v94

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to retrieve and display an schedule for an employee against a future pay day.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeId | Integer | Yes | Employee id to be processed |
| Input | Payday | DateTime | Yes | Pay day for which to process. |
| Output | DayOfWeek | Char | No | The Day of Week returned for the scheduled payday. |
| Output | Facility | Char | No | The Facility returned for the scheduled payday. |
| Output | Work Center | Char | No | The Work Center returned for the scheduled payday. |
| Output | EarnCode | Char | No | The Earn Code returned for the scheduled payday. |
| Output | Shift | Char | No | The Shift returned for the scheduled payday. |
| Output | Work Period | Char | No | The Work Period returned for the scheduled payday |
| Output | Start Time | DateTime | No | The Start Time returned for the scheduled payday. |
| Output | End Time | DateTime | No | The End Time returned for the scheduled payday. |
| Output | Team | Char | No | The Team returned for the scheduled payday. |
| Output | Scheduled Hours | Decimal | No | The Scheduled Hours returned for the scheduled payday. |
| Output | Non-Working | Boolean | No | The Non-Working returned for the scheduled payday |
| Output | HasStartEndTimes | Boolean | No | Determines whether or not the employee's schedule has start and end times or not. |
| Output | OffDay | Boolean | No | Used for schedules assigned to rotating schedules. Will determine if the scheduled date is an off day or not based on the rotating schedule. |

## System Processing

System computes the pay day information by retrieving or computing data from the following sources:
 
 
- EMPLOYEE_WORK_SCHEDULE -> Shift and Work Period 
- EMPLOYEE_FACILITY -> Rotating Schedule -> Shift and Work Period 
- EMPLOYEE_FACILITY -> Shift and Work Period with CALENDAR.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_WORK_SCHEDULE |  |  |
| EMPLOYEE_FACILITY |  |  |
| EMPLOYEE_CALENDAR |  |  |
| ROTATING_WORK_SCHEDULE |  |  |
| ROTATING_WORK_SCHEDULE_DETAIL |  |  |
| EMPLOYEE |  |  |
| CALENDAR |  |  |
| CALENDAR_DAY |  |  |
| SHIFT |  |  |
| WORK_PERIOD |  |  |
