# ReleaseProduct

**Category:** Apriso/Common/Product
**Class:** `FlexNet.BusinessFacade.Common.ProductReleaser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to release a Product from a Hold Reason Code.
 

When there are more than one Hold Reason codes placed on the Product, then each must be released individually.
 

An option is provided to make the release reason code a required input or not.
 

 **** 
 

 **Supported Features** 
 
 
- Releasing a Product from a Hold Reason Code 
- Product Validation 
- Release Reason Code validation 
- Transaction history recorded 
 

 **Unsupported Features** 
 
 
- Releasing a Product from more than one Hold Reason Code at a time.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The ID of product to be released. Must exist in the system. |
| Input | HoldReasonCode | Char | Yes | The code of reason to release the product from. Must exist in the system. |
| Input | ReleaseReasonCode | Char | No | The code of reason to release the product with. |
| Input | ReleaseReasonRequired | Boolean | No | The flag determining if the release reason is required. |

## Validations

- System verifies that there is at least one Hold against the inputted ProductID. 
- If the ReleaseReasonRequired is set, system verifies that a ReleaseReasonCode has been inputted. 
- System verifies that the inputted ReleaseReasonCode, if any is inputted, exists in the system, and is of 'Release' Reason Type. 
- System verifies that the inputted HoldReasonCode, if any is inputted, exists in the system, and is of 'Hold' Reason Type.

## System Processing

- System retrieves the Hold that match the inputs. 
- If no record found or if more than one record are retrieved, then system returns an error message. 
- Else, system deletes the retrieved record from the PRODUCT_HOLD table. 
- System records the transaction history whenever a record in the PRODUCT_HOLD table is deleted.

## Pre-Conditions

- Product and reason codes must exist. 
- old Reason code must be of type 'Hold'. 
- Release Reason code must be of type 'Release'.

## History Recording in Production

The System records the transaction history each time a record is deleted in the PRODUCT_HOLD table. ReleaseReasonCode is persisted in transaction history (if specified).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCT_HOLD | ProductID | ProductID |
| PRODUCT_HOLD | ReasonCode | HoldReasonCode |
