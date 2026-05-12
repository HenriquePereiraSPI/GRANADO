# StartWorkCenter_v2

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Manufacturing.WorkCenterStarter`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Active

## Description

This method is invoked to post labor against a Work Center. The invocation of this method will insert a LABOR record into the system.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee starting the job. |
| Input | ActivityTime | DateTime | Yes | The Work Center Start Time for the labor record. |
| Input | WorkCenter | Char | Yes | The Work Center in which the job is performed. |
| Input | ReasonCode | Char | No | The Reason Code which is associated with the job being performed. |
| Input | LaborCode | Char | No | The Labor Code which is associated with the job being performed. |
| Output | LaborID | Integer |  | The ID of the created LABOR record. |

## Validations

- Validates the EmployeeID (a valid EmployeeID must be passed to this method)  
- Validates the Work Center, that the it exists, and that it is active in the WORK_CENTER table  
- Validate the Reason Code against the REASON_CODE table or validates that the input is empty  
- Validates the Labor Code, that it exists, and that it is active in the LABOR_CODE table or that the input is empty 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting

## System Processing

The system creates an open labor record - LABOR - for the given employee (EmployeeId) by calling the labor facade StartWorkCenter BC method and passing the following parameters: EmployeeID, ActivityTime, WorkCenter, ReasonCode, and LaborCode.
 

  
 

For example:
 

 
 
- 07:00 - the employee performs a Clock In. 
- 07:03 - the employee performs a Start Work Center Labor against the Work Center MFGWC1. 
- The system applies the appropriate validations to the Work Center passed to the Business Component. 
- The system applies variance and rounding rules to the Start Time in accordance with the employee's PAY_RULE, WORK _SHIFT, and WORK_PERIOD. 
- The system creates a LABOR record with a status of Open, the Hours computations of 0, and the End Times of NULL 
- This flow ends.

## Pre-Conditions

The employee must be in the state of Clocked In in order for this method to complete. There is a flag in the employee's Pay Rule that states if the execution of this method will automatically perform the Clock In as part of this flow.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StartWorkCenter 
- TRANSACTION_HISTORY_LABOR
