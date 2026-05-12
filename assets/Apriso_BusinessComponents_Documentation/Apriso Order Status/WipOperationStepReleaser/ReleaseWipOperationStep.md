# ReleaseWipOperationStep

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOperationStepReleaser`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** wip, operation, step, release

## Description

Releases a WIP Operation step from a hold reason code.
 

When there are more than one hold reason codes placed on the WIP Operation step, then each must be released individually.
 

An option is provided to make the release reason code a required input or not.
 

 **Supported Features** 
 
 
- Releasing a WIP Operation step from a hold reason code 
- Validating a WIP Operation step 
- Releasing reason code validation 
- Recording transaction history 
 

 **Unsupported Features** 
 
 
- Releasing a WIP Operation step from more than one hold reason code at a time

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order number of the WIP Operation step to be released. Must exist in the system. |
| Input | WipOrderType | Short | Yes | The WIP Order type of the WIP Operation step to be released. |
| Input | OprSequenceNo | Char | Yes | The WIP Operation sequence number of the WIP Operation step to be released. Must exist in the system. |
| Input | StepSequence | Integer | Yes | The WIP Operation step sequence number to be released. Must exist in the system. |
| Input | ReasonCodeRequired | Boolean | Yes | Indicates if release reason code is required. |
| Input | ReleaseReasonCode | Char | No | The release reason code. If ReasonCodeRequired is True then it must exist in the system. |
| Input | HoldReasonCode | Char | Yes | The reason code for which the Operation has been held. Required if the Operation is put on multiple holds - in such a case it must exit in the system. |

## Validations

- System validates that WIP Order, WIP Operation, and WIP Operation step exist. 
- System validates that WIP Order is New or Started and not on hold. 
- System verifies that there is at least one hold against the inputted WipOrderNo, WipOrderType, OprSequenceNo, and StepSequence. 
- If HoldReasonCode is inputted, the system validates that the hold is against this reason code. 
- If the ReleaseReasonRequired is set, the system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of the release reason type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of the hold reason type.

## System Processing

- System retrieves the hold reason codes that match the inputs. 
- If no record is found or if more than one record is retrieved, then the system returns an error message. Otherwise the system deletes the retrieved record from the WIP_OPERATION_STEP_HOLD table. 
- System records the transaction history whenever a record in the WIP_OPERATION_STEP_HOLD table is deleted.

## Pre-Conditions

WIP Operation Step and reason codes must exist. The hold reason code must be of the hold type. The release reason code must be of the release type.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_STEP_HOLD | All | Inputted value |
