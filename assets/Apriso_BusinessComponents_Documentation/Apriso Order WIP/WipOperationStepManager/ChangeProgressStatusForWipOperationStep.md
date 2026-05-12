# ChangeProgressStatusForWipOperationStep

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationStepManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing`
**Status:** Active
**Keywords:** ChangeProgressStatus, Progress, Status

## Description

This Business Component method is used to change the progress status of the specified WIP Operation Step.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The order number of the Operation Step. |
| Input | WipOrderType | Short | Yes | The order type of the Operation Step. |
| Input | OprSequenceNo | Char | Yes | The Operation Sequence Number of the Operation Step. |
| Input | SequenceNo | Integer | Yes | The Sequence Number of the Operation Step. |
| Input | NewProgressStatus | Integer | No | The new progress status. |

## Validations

- The system validates that WipOperationStep exists in the system.  
- The system validates that ProgressStatus exists for NewProgressStatus.

## System Processing

- The system updates WIP_OPERATION_STEP.ProgressStatus with the inputted NewProgressStatus. 
- If the NewProgressStatus value is zero or less, the progress status of WipOperationStepRow is set to Null.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_STEP | ProgressStatus | NewProgressStatus |
