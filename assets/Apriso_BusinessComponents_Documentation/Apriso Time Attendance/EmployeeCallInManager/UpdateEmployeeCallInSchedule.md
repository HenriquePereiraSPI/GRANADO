# UpdateEmployeeCallInSchedule

**Category:** Apriso/Time/Attendance
**Class:** `FlexNet.BusinessFacade.Attendance.EmployeeCallInManager`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Retired

## Description

The purpose of this Business Component is to add, update, or delete data in the EMPLOYEE_CALL_IN_SCHEDULE table.
 

This component can be used within a Standard Operation, which would:
 
 
- Provide the required User Interface to filter data prior to processing, 
- Provide affirmation prior to update, 
- Provide confirmation to the updates.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee ID of the employee being called in. |
| Input | CalendarDay | DateTime | No | The calendar day for the schedule. |
| Input | EarnCode | Char | No | The earncode used for the call in work. |
| Input | SupervisorID | Integer | No | The Employee ID for the supervisor issuing the call in. |
| Input | ReasonCode | Char | No | The reason code for the call in. |
| Input | Type | Integer | No | Type defines the action. It should be either "Add", "Update" or "Delete". |

## Validations

- System verifies that the inputs are valid against the EMPLOYEE, CALENDAR_DAY and EARN_CODE tables. 
- System checks that the inputted value of Type is valid (Only valid entries are "Add", "Update" or "Delete").

## System Processing

-  If inputted Type = "Add", the system inserts a new record in the EMPLOYEE_CALL_IN_SCHEDULE table.  
-  Else if inputted Type = "Update", system updates existing record or adds a new record if a record is not found in the EMPLOYEE_CALL_IN_SCHEDULE table.  
-  Else if inputted Type = "Delete", system deletes the record found in the EMPLOYEE_CALL_IN_SCHEDULE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | EmployeeID | Inputted EmployeeID (Required) |
|  | CalendarDay | Inputted CalendarDay (Required) |
|  | EarnCode | Inputted EarnCode |
|  | SupervisorID | Inputted SupervisorID |
|  | ReasonCode | Inputted ReasonCode |
