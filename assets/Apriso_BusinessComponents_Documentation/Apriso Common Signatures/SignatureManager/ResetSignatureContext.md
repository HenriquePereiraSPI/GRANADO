# ResetSignatureContext

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature.dll`
**Status:** Active

## Description

This BC resets/clears all signature information from the context.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
|  |  |  | No |  |

## System Processing

Clears the current signature information from the context so that any subsequent BC called will not be executed within the context of that signature.
