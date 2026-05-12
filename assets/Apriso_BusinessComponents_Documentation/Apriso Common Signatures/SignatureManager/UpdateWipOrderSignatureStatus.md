# UpdateWipOrderSignatureStatus

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** Status, Signature, WIP

## Description

Updates status of the WIP Order Signature.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderSignatureID | Integer | Value Required | ID of the WIP Order Signature to be updated. |
| Input | SignatureStatus | Integer | Value Required | Intended status of the WIP Order Signature. Available values: Unsigned (1), Signed (2), Partially Signed (3), Not Performed (4), Rejected (5), or Voided (6). |

## Validations

- Validation fails if the inputted WipOrderSignatureID does not exist. 
- Validation fails if the provided SignatureStatus is not a valid status

## System Processing

- Performs validations as stated above. 
- System updates record in WIP_ORDER_SIGNATURE with inputted status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_SIGNATURE | Status | SignatureStatus input |
