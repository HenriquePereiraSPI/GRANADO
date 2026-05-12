# StopIndirect

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Labor.LaborMarshall`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Deprecated

## Description

This method is invoked to post labor against an indirect charge number, the invocation of this method will update an existing LABOR record into the system.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeNo | Char | Yes | Employee stopping the job. |
| Input | LaborStopTime | DateTime | Yes | Indirect Job Stop Time. |
| Input | ReasonCode | Char | No | Indirect Reason Code. |
| Input | WorkCenter | Char | No | WorkCenter in which the job is performed. |

## Validations

- System validatesthe Employee Number. A valid Employee Number must be passed to this method. 
- System validatesthe Reason Code 
 
- System validatesthat the Reason Code against the OCCUPATION table 
- System validatesthat there is an open LABOR record against with this Occupation Code. 
 
- System validatesthe Work Center 
 
- System validatesthat the Work Center exists and is Active in the WORK_CENTER table or validate input is empty. 
- System validatesthat there is an open LABOR record against with this Work Center.

## System Processing

- System finds the open labor record corresponding to the information passed to the Stop Indirect Labor business component. 
- System computes the hours allocation between the start and end times for the LABOR record. 
- System updates the corresponding open labor record - LABOR for the given employee (EmployeeId) by calling labor façade StopIndirect BC method passing following parameters (EmployeeID, LaborStartTime, ReasonCode, WorkCenter). 
 

Example:
 
 
- 07:00 - The Employee Clocks In 
- 07:03 - The Employee performs a Start Indirect Labor against Occupation SAFETY and Work Center MFGWC1. 
- System applied the appropriate validations to the Occupation and Work Center passed to the business component. 
- System applies variance and rounding rules to the start time in accordance to the employees PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- System creates a LABOR record with a status of Open, Hours computations of 0 and End Times of NULL 
- 08:05 - The Employee performs a Stop Indirect Labor against Occupation SAFETY and Work Center MFGWC1. 
- System applied the appropriate validations to the Occupation and Work Center passed to the business component. 
- System retrieves the matching LABOR record by Occupation and Work Center. 
- System applies variance and rounding rules to the stop time in accordance to the employees PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- System applies hours allocation computations to the start and stop times in accordance to the employees PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- System saves the LABOR records 
- This flow ends

## Pre-Conditions

The Employee must be in a state of Clocked In and On Indirect in order for this method to complete.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StartIndirect 
- TRANSACTION_HISTORY_LABOR
