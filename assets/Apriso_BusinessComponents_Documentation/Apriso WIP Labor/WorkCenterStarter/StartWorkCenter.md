# StartWorkCenter

**Category:** Apriso/WIP/Labor
**Class:** `FlexNet.BusinessFacade.Manufacturing.WorkCenterStarter`
**Assembly:** `FlexNet.BusinessFacade.Labor.dll`
**Status:** Deprecated

## Description

This method is invoked to post labor against a work center, the invocation of this method will insert a LABOR record into the system.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmployeeID | Integer | Yes | Employee starting the job |
| Input | ActivityTime | DateTime | Yes | Work Center Start Time for Labor Record. |
| Input | WorkCenter | Char | Yes | WorkCenter in which the job is performed. |
| Input | ReasonCode | Char | No | The Reason Code which is associated to the job being performed. |
| Input | LaborCode | Char | No | The Labor Code which is associated to the job being performed. |

## Validations

- Validate the EmployeeID. A valid EmployeeID must be passed to this method. 
- Validate the Work Center, validate that the Work Center exists and is Active in the WORK_CENTER table. 
- Validate the Reason Code against the REASON_CODE table or validate input is empty. 
- Validate the Labor Code, validate that the Labor Code exists and is Active in the LABOR_CODE table or validate input is empty.

## System Processing

System creates an open labor record - LABOR for the given employee (EmployeeId) by calling labor façade StartWorkCenter BC method passing following parameters (EmployeeID, ActivityTime, WorkCenter, ReasonCode, LaborCode).
 

Example:
 
 
- 07:00 - The Employee performs a Clock In. 
- 07:03 - The Employee performs a Start Work Center Labor against Work Center MFGWC1. 
- System applied the appropriate validations to the Work Center passed to the business component. 
- System applies variance and rounding rules to the start time in accordance to the employees PAY_RULE, WORK _SHIFT and WORK_PERIOD. 
- System creates a LABOR record with a status of Open, Hours computations of 0 and End Times of NULL 
- This flow ends.

## Pre-Conditions

The Employee must be in a state of Clocked In in order for this method to complete. There is a flag in the Employee's Pay Rule that states if the execution of this method will automatically perform the Clock In as part of this flow.

## History Recording in Production

- TRANSACTION_HISTORY- Transaction Name: FlexNet.BusinessFacade.Labor.LaborMarshall.StartWorkCenter 
- TRANSACTION_HISTORY_LABOR
