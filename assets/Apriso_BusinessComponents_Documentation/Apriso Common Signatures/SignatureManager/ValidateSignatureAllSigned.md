# ValidateSignatureAllSigned

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** ValidateSignature,Validate,Signature

## Description

This Business Component method checks if all Signature Detail records associated with inputted Signature Header have been signed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureHeaderID | Integer | Yes | ID of the Signature Header for which signatures should be checked. |
| Output | IsAllSigned | Boolean | No | Flag indicating if all the Signature Details that belong to the specified Signature Header have been signed. |

## Validations

- Validates if Signature Header record exists in the system.

## System Processing

- Gets all the Signature Detail records associated with the specified Signature Header.  
- If **all **Signature Detail records have been signed, the system returns IsAllSigned flag as true. 
- Else the system returns IsAllSigned flag as false.
