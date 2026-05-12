# ChangeOperationWorkCenter

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.OperationWorkCenterChanger`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component is used to change the current Work Center of a given Operation to the specified Work Center. It changes the Work Centers of all the related tasks of the given Operation at the same time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order number to link. |
| Input | WipOrderType | Integer | Yes | The WIP Order type to link. |
| Input | OprSequenceNo | Char | Yes | The WIP Operation number to link. |
| Input | WorkCenter | Char | Yes | The Work Center to link. |

## Validations

- The system verifies that the inputted WIP Operation is valid. 
- The system validates that no child tasks are associated with the WIP Operation task. 
- The system verifies that the inputted Work Center is valid.

## System Processing

- The system retrieves the WIP Operation from the inputs, and updates WIP_OPERATION.WorkCenter of the retrieved WIP Operation.  
- The system retrieves all the tasks related to the given WIP Operation and updates their TASK.WorkCenter.

## History Recording in Production

The transaction history record produced for each updated record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | WipOrderNo | The inputted WipOrderNo. |
| WIP_OPERATION | WipOrderType | The inputted WipOrderType. |
| WIP_OPERATION | OprSequenceNo | The inputted OprSequenceNo. |
| WIP_OPERATION | WorkCenter | The inputted WorkCenter. |
| TASK | WipOrderNo | The inputted WipOrderNo. |
| TASK | WipOrderType | The inputted WipOrderType. |
| TASK | OprSequenceNo | The inputted OprSequenceNo. |
| TASK | WorkCenter | The inputted WorkCenter. |
