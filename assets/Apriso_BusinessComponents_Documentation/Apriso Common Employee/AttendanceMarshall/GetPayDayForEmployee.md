# GetPayDayForEmployee

**Category:** Apriso/Common/Employee
**Class:** `FlexNet.BusinessFacade.Attendance.AttendanceMarshall`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Active
**Keywords:** Sleep, Wait

## Description

This business component returns the Pay Day for the Employee based on the Employee ID and the Action Time

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | ID of the employee to look up the Pay Day. |
| Input | ActionTime | DateTime | Yes | The time of day to use when looking up the Pay Day. |
| Output | PayDay | DateTime | Yes | The Pay Day for the employee based on the Action Time. |

## Validations

- System verifies the Employee ID against the Employee table,  
- System verifies that the ActionTime has been provided.

## System Processing

- System returns the Pay Day of the Employee using the ActionTime provided to calculate the Pay Day.
