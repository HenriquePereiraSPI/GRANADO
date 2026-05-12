# DelayEndRecess

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This method creates an End Recess Immediate Job for the specified employee, break type, and time. This is typically used to speed up employee queue time when large groups of employees tend to post break events. With asynchronous execution, the next employee in line does not have to wait for the previous employee's break event to finish processing.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee Number to stop break. |
| Input | BreakStopTime | DateTime | Yes | Attendance break stop time. |
| Input | BreakType | Integer | Yes | Break Type to stop - Ex: Lunch, Dinner. |

## System Processing

System posts an End Recess event for this employee to Job Executor.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| JOB_QUEUE |  |  |
