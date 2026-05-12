# UpdateEmployeePayCycle

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to Add, Update, or Delete data in the EMPLOYEE_PAY_CYCLE table.
 
 
- This component can be used within a Standard operation, which would: 
- Provide the required User Interface to filter data prior to processing 
- Provide affirmation prior to update 
- Provide confirmation to the updates

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | Employee ID to clockin. |
| Input | Facility | Char | Yes | The Facility for the pay cycle being used, |
| Input | CalendarYear | DateTime | Yes | The calendar year for the pay cycle, |
| Input | PayCycle | Integer | Yes | The pay cycle being used. |
| Input | Operation | Char | No | The operation the BC will perform. If "Add" then it will add the relationship, otherwise it will update it. |

## Validations

- System verifies that the inputs are valid against the EMPLOYEE and PAY_CYCLE tables. 
- System checks that the inputted value of Operation is valid (Only valid entries are "Add", "Update" or "Delete").

## System Processing

- If inputted Operation = "Add", the system inserts a new record in the EMPLOYEE_PAY_CYCLE table. 
- Else if inputted Operation = "Update", system updates existing record or adds a new record if a record is not found in the EMPLOYEE_PAY_CYCLE table. 
- Else if inputted Operation = "Delete", system deletes the record found in the EMPLOYEE_PAY_CYCLE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE_PAY_CYCLE | EmployeeID | Inputted EmployeeID |
| EMPLOYEE_PAY_CYCLE | Facility | Inputted Facility |
| EMPLOYEE_PAY_CYCLE | CaldendarYear | Inputted CalendarYear |
| EMPLOYEE_PAY_CYCLE | PayCycle | Inputted PayCycle |
