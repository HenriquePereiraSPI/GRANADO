# StopWorkCenter_v2

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Manufacturing.WorkCenterStopper`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Active

## Description

This method is invoked to post labor against a Work Center. The invocation of this method will insert a LABOR record into the system.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | The employee stopping the job. |
| Input | WorkCenter | Char | Yes | The Work Center in which the job is performed. |
| Input | ActivityTime | DateTime | Yes | The Work Center Stop Time for the labor record. |
| Output | LaborID | Integer |  | The ID of the updated LABOR record. |

## Validations

- The system validates the EmployeeID (a valid EmployeeID must be passed to this method)  
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting 
- The system validates the Work Center 
 
- The system validates that the Work Center exists and that is is Active in the WORK_CENTER table 
- The system validates that there is an open LABOR record against this Work Center

## System Processing

- The system finds the open labor record corresponding to the information passed to the StopWorkCenter business component 
- The system computes the hours allocation between the Start and End Times for the LABOR record 
- The system updates the corresponding open labor record - LABOR - for the given employee (EmployeeId) by calling labor facade StopWorkCenter BC method passing the following parameters: EmployeeID,ActivityTime and WorkCenter 
 

 

For example:
 

 
 
- 07:00 - the employee clocks in. 
- 07:03 - the employee performs a Start Work Center Labor against the Work Center MFGWC1. 
- The system applies the appropriate validations to the Work Center passed to the Business Component. 
- The system applies variance and rounding rules to the Start Time in accordance to the employee's PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- The system creates a LABOR record with a status of Open, Hours computation of 0, and End Times of NULL. 
- 08:05 - the employee performs a Stop Work Center against Work Center MFGWC1. 
- The system applied the appropriate validations to the Work Center passed to the Business Component. 
- The system retrieves the matching LABOR record by the Work Center. 
- The system applies variance and rounding rules to the Stop Time in accordance with the employee's PAY_RULE, WORK _SHIFT, and WORK_PERIOD. 
- The system applies the hour allocation computations to the Start and Stop Times in accordance with the employee's PAY_RULE, WORK _SHIFT, and WORK_PERIOD. 
- The system saves the LABOR records. 
- This flow ends.

## Pre-Conditions

The employee must be in a state of Clocked In and On Direct in order for this method to complete.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StopWorkCenter 
- TRANSACTION_HISTORY_LABOR
