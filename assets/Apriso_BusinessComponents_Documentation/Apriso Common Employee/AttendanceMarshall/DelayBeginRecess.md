# DelayBeginRecess

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

This method creates a Begin Recess Immediate Job for the specified employee, break type, and time. This is typically used to speed up employee queue time when large groups of employees tend to post break events. With asynchronous execution, the next employee in line does not have to wait for the previous employee's break event to finish processing.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee Number to start break. |
| Input | BreakStartTime | DateTime | Yes | Attendance break start time. |
| Input | BreakType | Integer | Yes | Break Type to start - Ex: Lunch, Dinner |

## Validations

- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting.

## System Processing

System posts a Begin Recess event for this employee to Job Executor.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| JOB_QUEUE |  |  |
