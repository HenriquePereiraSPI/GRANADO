# ReleaseLot

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Common.LotReleaser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to release a Lot from a Hold Reason Code.
 

When there is more than one Hold Reason code placed on the Lot, then each must be released individually.
 

An option is provided to make the release reason code a required input or not.
 

 **Supported Features** 
 
 
- Releasing a Lot from a Hold Reason Code. 
- Product and Lot Validation. 
- Release Reason Code validation. 
- Transaction history recorded. 
 

 **Unsupported Features** 
 
 
- Releasing a Lot from more than one Hold Reason Code at a time

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | No | Product id of the lot to be released. Must exists in system. |
| Input | LotNo | Char | No | Lot number of the lot to be released. Must exist in system. |
| Input | HoldReasonCode | Char | No | Reason code of the hold to be removed. Can be null if there is only one hold against the specified. |
| Input | ReleaseReasonCode | Char | No | Reason code of the operation. Can be null. |
| Input | ReleaseReasonRequired | Boolean | No | Indicates if is required. |

## Validations

- System verifies that there is at least one Hold against the inputted ProductID and LotNo. 
- If the ReleaseReasonRequired is set, system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of 'Release' Reason Type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of 'Hold' Reason Type.

## System Processing

- System retrieves the Hold Reason Codes that match the inputs. 
- If no record found or if more than one record are retrieved, then it returns an error message. 
- Else, system deletes the retrieved record from the LOT_NO_HOLD table. 
- System records the transaction history whenever a record in the LOT_NO_HOLD table is deleted.

## Pre-Conditions

- Product, lot and reason codes must exist. 
- Hold Reason code must be of type 'Hold'. 
- Release Reason code must be of type 'Release'.

## History Recording in Production

System records the transaction history each time a record is deleted in the LOT_NO_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LOT_NO_HOLD |  |  |
