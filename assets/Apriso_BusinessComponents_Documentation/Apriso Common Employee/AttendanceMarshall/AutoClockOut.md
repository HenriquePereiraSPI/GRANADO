# AutoClockOut

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This business component facilitates the automatic clock out feature in Time Manager. This is for the purpose of clocking out an employee who failed to perform their clock out or for businesses that expect the system to clock out their employees. This function in intended to be invoked by Job Scheduler based on a job created during clock in.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | The employee number to auto clock out. |
| Input | PayDay | DateTime | Yes | The pay day in which the employee will be clocked out. |

## Validations

- The system verifies that the employee is not considered actively clocked in by the system. 
- The system checks to determine the appropriate clock out time.

## System Processing

- The system retrieves the open attendance record for this employee for the pay day left open. 
- The system computes the end time for the pay day. 
- The system invokes the ClockOut BC.
