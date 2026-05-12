# UpdateSupervisorEmployee

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to Add, Update, or Delete data in the SUPERVISOR_EMPLOYEE table.
 

This component can be used within a Standard Operation, which would:
 
 
- Provide the required User Interface to filter data prior to processing, 
- Provide affirmation prior to update, 
- Provide confirmation to the updates.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SupervisorID | Integer | Yes | The supervisor ID. |
| Input | EmployeeID | Integer | Yes | The employee ID. |
| Input | AssignedDate | DateTime | Yes | The date and time the association will take place. |
| Input | Primary | Boolean | Yes | Determines whether or not the supervisor is the employees primary supervisor. |
| Input | ReadOnly | Boolean | Yes | Detemermines if the supervisor will only have Read-Only privledges for this employee in Time Manager. |
| Input | Operation | Char | No | The operation the BC will perform. If "Add" then it will add the relationship, otherwise it will delete it. |

## Validations

- System verifies that inputted SupervisorID and EmployeeID are valid against the EMPLOYEE table. 
- System checks that the inputted value of Operation is valid (Only valid entries are "Add", "Update" or "Delete").

## System Processing

- If the inputted Operation = "Add", then system inserts a record into SUPERVISOR_EMPLOYEE table with the inputted data. 
- Else if inputted Operation = "Update", then: 
 
- If a row is found in the SUPERVISOR_EMPLOYEE table, system updates the retrieved row, 
- Else system creates a new record with the inputted information. 
 
- Else if inputted Operation = "Delete", then system deletes the retrieved row in the SUPERVISOR_EMPLOYEE table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SUPERVISOR_EMPLOYEE | SupervisorID | Inputted SupervisorID |
| SUPERVISOR_EMPLOYEE | EmployeeID | Inputted EmployeeID |
| SUPERVISOR_EMPLOYEE | AssignedDate | Inputted AssignedDate |
| SUPERVISOR_EMPLOYEE | Primary_ | Inputted Primary |
| SUPERVISOR_EMPLOYEE | ReadOnly | Inputted ReadOnly |
