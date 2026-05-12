# CreateEmployeeCallInEvent

**Category:** Apriso/Time/Attendance
**Class:** `FlexNet.BusinessFacade.Attendance.EmployeeCallInManager`
**Assembly:** `FlexNet.BusinessFacade.Attendance.dll`
**Status:** Retired

## Description

The purpose of this business component is to update an ATTENDANCE record for a Call In Event. This component can be used within a Standard Operation that would:
 
 
- Provide the required User Interface to filter data prior to processing 
- Provide affirmation prior to update 
- Provide confirmation to the updates 
 

A call ievent will be used to compute a minimal hours for payment in Time Manager. In the event that an ATTENDANCE record is stamped with a Call In, the minimal hours associated to the call in earn code are applied.
 

This documents both the business component and the envisioned usage of the business component through a standard operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee ID of the employee being called in. |
| Input | CallInTime | DateTime | Yes | The call in time. |
| Input | EarnCode | Char | Yes | The earn code the employee will be on when called in. |
| Input | ReasonCode | Char | Yes | The reason code to be called in. |
| Input | ScheduleRequired | Boolean | Yes | Whether or not a schedule is required. |

## Validations

- System validates that the EmployeeID is valid. 
- System validates that the EarnCode is valid. 
- System validates that he ReasonCode is passed and the Reason Code is of type 21. 
- System validates that is a Call In Schedule is Required, that a row matching exists in the EMPLOYEE_CALL_IN_SCHEDULE table.

## System Processing

-  The Employee will execute the Standard Operation to perform the call in event.  
-  The System will determine that the EmployeeID passed is valid.  
-  The System will determine the calendar day relating to the CallInTime.  
-  The System will determine that the ReasonCode exists in REASON_CODE table and is of reasontype 21.  
-  The System will validate that the employee is linked to a PAY_RULE_EARN_CODE record with the EarnCode entered having a flag set for CallIn = TRUE.  
-  The System will determine there is an Open ATTENDANCE record for this employee for this day.  
-  The System will determine that the ScheduleRequired flag is set to TRUE  
-  The System will validate that a record exists in EMPLOYEE_CALL_IN_SCHEDULE for this calendar day, this EarnCode and this ReasonCode  
-  The System will update the employees open ATTENDANCE record setting the CallIn bit to TRUE.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ATTENDANCE | ATTENDANCE Call In Flag set from FALSE to TRUE. | ATTENDANCE Call In Flag set from FALSE to TRUE. |
| ATTENDANCE_HOURS |  | New row inserted |
