# GetEmployeeAttendanceStatus

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active

## Description

The purpose of this Business Component is to provide feedback on an employees attendance status and task status. The business component will return message matching the statuses.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeId | Integer | Yes | Employee id is to be be processed. |
| Input | Payday | DateTime | Yes | Pay day for which to process. |
| Output | AttendanceStatus | Char | No | The Attendance status for the payday passed as input. |
| Output | TaskStatus | Char | No | the Task status for the payday passed as input. |

## Validations

- System checks that the empoyeeid is valid 
- System checks the AttendanceStatus and the TaskStatus against the EmployeeID and PayDay passed to the component.

## System Processing

- System returns a message for AttendanceStatus 
 
- Clocked In 
- Not Clocked In 
- On Recess 
 
- System returns a message for TaskStatus 
 
- Idle 
- OnLabor Job 
- OnTask

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMPLOYEE |  |  |
| ATTENDANCE | All |  |
| ATTENDANCE_BREAK |  |  |
| LABOR |  |  |
| TASK |  |  |
