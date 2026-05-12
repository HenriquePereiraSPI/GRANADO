# SetSignatureContext

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature.dll`
**Status:** Active

## Description

Sets the signature context with the values as defined by the inputted signature ID

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureID | Integer | Yes | The signature ID to set the context to |

## Validations

Validates the inputted signature ID is a valid signature in the SIGNATURE table

## System Processing

Reads the SIGNATURE table for the inputted signature ID. Sets all the signature context values based on the values read from this table.
