# StartIndirect_v2

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Active

## Description

This method is invoked to post labor against an Indirect Charge Number. The invocation of this method will insert a LABOR record into the system.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | The employee starting the job. |
| Input | LaborStartTime | DateTime | Yes | The Indirect job Start Time. |
| Input | ReasonCode | Char | Yes | The Indirect Reason Code. |
| Input | WorkCenter | Char | No | The Work Center in which the job is performed. |
| Input | LaborCode | Char | No | The Labor Code. |
| Output | LaborID | Integer |  | The ID of the created LABOR record. |

## Validations

- Validates the employee number (a valid employee number must be passed to this method) 
- Validates the Reason Code against the OCCUPATION table 
- Validates the Work Center, that it exists, and that it is active in the WORK_CENTER table or that the input is empty 
- Validates the Labor Code, that it exists, and that is active in the LABOR_CODE table or that the input is empty 
- The system validates that the attendance, break, or labor entities created or modified would not violate the Pay Rule Max Attendance Per Payday setting

## System Processing

For example:
 

 
 
- 07:00 - the employee performs a Clock In. 
- 07:03 - the employee performs a Start Indirect Labor against Occupation SAFETY and Work Center MFGWC1. 
- The system applies the appropriate validations to the Occupation and Work Center passed to the Business Component. 
- The system applies variance and rounding rules to the Start Time in accordance with the employee's PAY_RULE, WORK _SHIFT, and WORK_PERIOD. 
- The system creates a LABOR record with the status of Open, the Hours computations of 0, and the End Times of NULL. 
- This flow ends.

## Pre-Conditions

The employee must be in the state of Clocked In in order for this method to complete. There is a flag in the employee's Pay Rule that states if the execution of this method will automatically perform the Clock In as part of this flow.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StartIndirect 
- TRANSACTION_HISTORY_LABOR
