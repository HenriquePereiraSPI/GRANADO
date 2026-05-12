# StartIndirect

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Deprecated

## Description

This method is invoked to post labor against an indirect charge number, the invocation of this method will insert a LABOR record into the system.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee starting the job |
| Input | LaborStartTime | DateTime | Yes | Indirect Job Start Time |
| Input | ReasonCode | Char | Yes | Indirect Reason Code |
| Input | WorkCenter | Char | No | WorkCenter in which the job is performed. |
| Input | LaborCode | Char | No | The Labor code. |

## Validations

- Validate the Employee Number. A valid Employee Number must be passed to this method. 
- Validate the Reason Code against the OCCUPATION table. 
- Validate the Work Center, validate that the Work Center exists and is Active in the WORK_CENTER table or validate input is empty. 
- Validate the Labor Code, validate that the Labor Code exists and is Active in the LABOR_CODE table or validate input is empty.

## System Processing

- 07:00 - The Employee performs a Clock In. 
- 07:03 - The Employee performs a Start Indirect Labor against Occupation SAFETY and Work Center MFGWC1. 
- System applied the appropriate validations to the Occupation and Work Center passed to the business component. 
- System applies variance and rounding rules to the start time in accordance to the employees PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- System creates a LABOR record with a status of Open, Hours computations of 0 and End Times of NULL 
- This flow ends.

## Pre-Conditions

The Employee must be in a state of Clocked In in order for this method to complete. There is a flag in the Employee's Pay Rule that states if the execution of this method will automatically perform the Clock In as part of this flow.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StartIndirect 
- TRANSACTION_HISTORY_LABOR
