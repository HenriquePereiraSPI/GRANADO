# DelayClockOut

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This method creates a clock out immediate job for the specified employee and time. This is typically used to speed up employee queue time when large groups of employees tend to clock out. With asynchronous execution, the next employee in line does not have to wait for the previous employee's clock out to finish processing.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee number to clockout. |
| Input | ClockOutTime | DateTime | Yes | Attendance stop time. |

## System Processing

System posts a clock out event for this employee to Job Scheduler.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| JOB_QUEUE |  |  |
