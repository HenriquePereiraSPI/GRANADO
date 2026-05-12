# StopWorkCenter

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Manufacturing.WorkCenterStopper`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Deprecated

## Description

This method is invoked to post labor against a work center, the invocation of this method will insert a LABOR record into the system.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | Employee stopping the job. |
| Input | WorkCenter | Char | Yes | WorkCenter in which the job is performed. |
| Input | ActivityTime | DateTime | Yes | Work Center Stop Time for Labor Record. |

## Validations

- System validatesthe EmployeeID. A valid EmployeeID must be passed to this method. 
- System validatesthe Work Center 
 
- System validatesthat the Work Center exists and is Active in the WORK_CENTER table. 
- System validatesthat there is an open LABOR record against with this Work Center.

## System Processing

- System finds the open labor record corresponding to the information passed to the Stop Work Center business component. 
- System computes the hours allocation between the start and end times for the LABOR record. 
- The System updates the corresponding open labor record - LABOR for the given employee (EmployeeId) by calling labor façade StopWorkCenter BC method passing following parameters (EmployeeID,ActivityTime, WorkCenter). 
 

Example:
 
 
- 07:00 - The Employee Clocks In 
- 07:03 - The Employee performs a Start Work Center Labor against Work Center MFGWC1. 
- System applied the appropriate validations to the Work Center passed to the business component. 
- System applies variance and rounding rules to the start time in accordance to the employees PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- System creates a LABOR record with a status of Open, Hours computations of 0 and End Times of NULL 
- 08:05 - The Employee performs a Stop Work Center against Work Center MFGWC1. 
- System applied the appropriate validations to the Work Center passed to the business component. 
- System retrieves the matching LABOR record by Work Center. 
- System applies variance and rounding rules to the stop time in accordance to the employees PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- System applies hours allocation computations to the start and stop times in accordance to the employees PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- System saves the LABOR records 
- This flow ends

## Pre-Conditions

The Employee must be in a state of Clocked In and On Direct in order for this method to complete.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StopWorkCenter 
- TRANSACTION_HISTORY_LABOR
