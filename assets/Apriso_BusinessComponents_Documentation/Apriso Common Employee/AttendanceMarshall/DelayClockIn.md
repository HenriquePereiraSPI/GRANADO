# DelayClockIn

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This method creates a Clock In Immediate Job for the specified employee and time. This is typically used to speed up employee queue time when large groups of employees tend to clock in. With asynchronous execution, the next employee in line does not have to wait for the previous employee's clock in to finish processing.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee Number to clockin. |
| Input | ClockInTime | DateTime | Yes | Attendance start time. |

## System Processing

System posts a Clock In event for this employee to Job Executor.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| JOB_QUEUE |  |  |
