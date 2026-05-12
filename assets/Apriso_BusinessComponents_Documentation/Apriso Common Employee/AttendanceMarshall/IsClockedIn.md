# IsClockedIn

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active
**Keywords:** Sleep, Wait

## Description

This business component verifies if an employee is currently clocked in.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | ID of an employee whose Clock In status is to be determined. |
| Input | CurrentTime | DateTime | Yes | Current Time |
| Output | IsClockedIn | Boolean | Yes | Determines if Employee is currently clocked in or not. |

## Validations

- Validate if there is a Pay Day for an Employee based on CurrentTime. If no Pay Day is found, IsClockedIn is set to false and BC returns. 
- Validate if an employee's attendance is tracked. If attendance is not tracked, IsClockedIn is set to false and BC returns.

## System Processing

- Verify if an employee is clocked in based on attendance records for the current Pay Day. If employee is clocked in, IsClockedIn is set to true and BC returns.
