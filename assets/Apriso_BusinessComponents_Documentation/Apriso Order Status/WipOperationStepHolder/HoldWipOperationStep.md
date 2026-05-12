# HoldWipOperationStep

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationStepHolder`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** wip, operation, step, hold

## Description

Places a WIP Operation step on hold. When this occurs, no transactions can occur against that WIP Operation step until the hold has been released. When the WIP Operation is placed on hold, a valid hold reason code must also be entered. The functionality also includes the ability to place the WIP Operation step on more than one hold reason code.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order number of the WIP Operation step to be placed on hold. Must exist in the system. |
| Input | WipOrderType | Short | Yes | The WIP Order type of the WIP Operation step to be placed on hold. |
| Input | OprSequenceNo | Char | Yes | The WIP Operation sequence number of the WIP Operation step to be placed on hold. Must exist in the system. |
| Input | StepSequence | Integer | Yes | The WIP Operation step sequence number to be placed on hold. Must exist in the system. |
| Input | ReasonCode | Char | Yes | The reason code for the hold Operation. Must exist in the sytem. |
| Input | AllowMultipleHolds | Boolean | No | The flag indicating if multiple holds are allowed. |

## Validations

- System verifies that the inputted WipOrderNo, WipOrderType, OprSequenceNo and StepSequence exist. 
- System verifies that the WIP Order is New or Started and is not on hold. 
- System verifies that the WIP Operation is New or Started. 
- System verifies that the inputted ReasonCode is of a hold reason type and it is defined for the current department (taken from the context). 
- If AllowMultipleHolds is True, the system validates that the WIP Operation step is not on hold for the reason code specified. 
- When AllowMultipleHolds is False, the system validates that the WIP Operation step is not on hold.

## System Processing

- System places the WIP Operation step on hold with the entered reason code. A new record is generated in the WIP_OPERATION_STEP_HOLD table. 
- System records the transaction history each time a new record is created in the WIP_OPERATION_STEP_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_STEP_HOLD | All | Inputted value |
