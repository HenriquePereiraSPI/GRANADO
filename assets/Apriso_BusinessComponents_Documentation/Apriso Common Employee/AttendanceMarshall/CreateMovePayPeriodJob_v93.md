# CreateMovePayPeriodJob_v93

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to create a background task (using Job Scheduler) for the task of moving all the pay period for all employees that match the inputs.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | PayRule | Char | No | The pay rule linked to the Employee |
| Input | EmployeeClass | Integer | No | The class of the Employee (Exempt, Non-Exempt and Hourly Non-Exempt). Optional. If not used, input -1 |

## System Processing

- System retrieves all employees in the system 
- For all given employees, it validates them against the inputs 
 
- If "EmployeeClass" doesn't equal -1, then validate the employee is assigned to the correct class 
- If "PayRule" is populated, then validate the employee is assigned to the correct pay rule. 
 
- The BC will then create a scheduled job (execute immediate) to move the payperiod for all employees that matched

## Published Events

New job is created
