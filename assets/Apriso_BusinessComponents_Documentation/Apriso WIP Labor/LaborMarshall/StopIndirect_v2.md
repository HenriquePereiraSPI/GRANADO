# StopIndirect_v2

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Active

## Description

This method is invoked to post labor against an Indirect Charge Number. The invocation of this method will update an existing LABOR record in the system.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | The employee stopping the job. |
| Input | LaborStopTime | DateTime | Yes | The Indirect job Stop Time. |
| Input | ReasonCode | Char | No | The Indirect Reason Code. |
| Input | WorkCenter | Char | No | The Work Center in which the job is performed. |
| Output | LaborID | Integer |  | The ID of the updated LABOR record. |

## Validations

- The system validates the employee number (a valid employee number must be passed to this method) 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting 
- The system validates the Reason Code: 
 
- The system validates the Reason Code against the OCCUPATION table 
- The system validates that there is an open LABOR record with this Occupation Code 
 
- The system validates the Work Center: 
 
- The system validates that the Work Center exists and is active in the WORK_CENTER table or validate that the input is empty 
- The system validates that there is an open LABOR record against this Work Center

## System Processing

- The system finds the open labor record corresponding to the information passed to the Stop Indirect Labor Business Component  
- The system computes the hour allocation between the Start and End Times for the LABOR record  
- The system updates the corresponding open labor record - LABOR - for the given employee (EmployeeId) by calling the labor facade StopIndirect_v2 BC method passing the following parameters: EmployeeID, LaborStartTime, ReasonCode, WorkCenter 
 

 

For example:
 

 
 
- 07:00 - the employee clocks in. 
- 07:03 - the employee performs a Start Indirect Labor against the Occupation SAFETY and the Work Center MFGWC1. 
- The system applies the appropriate validations to the Occupation and Work Center passed to the Business Component. 
- The system applies variance and rounding rules to the Start Time in accordance with the employee's PAY_RULE, WORK _SHIFT, and WORK_PERIOD. 
- The system creates a LABOR record with a status of Open, Hours computations of 0, and End Times of NULL. 
- 08:05 - the employee performs a Stop Indirect Labor against the Occupation SAFETY and Work Center MFGWC1. 
- The system applies the appropriate validations to the Occupation and Work Center passed to the Business Component. 
- The system retrieves the matching LABOR record by the Occupation and Work Center. 
- The system applies variance and rounding rules to the Stop Time in accordance with the employee's PAY_RULE, WORK _SHIFT, and WORK_PERIOD. 
- The system applies hour allocation computations to the Start and Stop Times in accordance with the employee's PAY_RULE, WORK _SHIFT, and WORK_PERIOD. 
- The system saves the LABOR records. 
- This flow ends.

## Pre-Conditions

The employee must be in a state of Clocked In and On Indirect in order for this method to complete.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StartIndirect 
- TRANSACTION_HISTORY_LABOR
