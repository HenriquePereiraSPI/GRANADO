# UpdateEmployeeCalendar

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to Add, Update, or Delete data in the EMPLOYEE_CALENDAR table.
 

This component can be used within a Standard operation which would:
 
 
- Provide the required User Interface to filter data prior to processing, 
- Provide affirmation prior to update, 
- Provide confirmation to the updates,

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | Employee ID to clockin. |
| Input | CalendarID | Integer | Yes | The calendar to be used. |
| Input | Operation | Char | No | The operation the BC will perform. If "Add" then it will add the relationship, otherwise it will update it. |

## Validations

- System verifies that inputted EmployeeID and CalendarID are valid against the EMPLOYEE and CALENDAR tables. 
- System checks that the inputted value of Operation is valid (Only valid entries are "Add", "Update" or "Delete").

## System Processing

- If inputted Operation = "Add", the system inserts a new record in the EMPLOYEE_CALENDAR table. 
- Else if inputted Operation = "Update", system updates existing record or adds a new record if a record is not found in the EMPLOYEE_CALENDAR table. 
- Else if inputted Operation = "Delete", system deletes the record found in the EMPLOYEE_CALENDAR table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_CALENDAR | EmployeeID | Inputted EmployeeID |
| EMPLOYEE_CALENDAR | CalendarID | Inputted CalendarID |
