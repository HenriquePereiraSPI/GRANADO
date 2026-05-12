# ResetSignatureHeaderContext

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature.dll`
**Status:** Active

## Description

This Business Component method resets/clears all Signature Header information from the Context.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
|  |  |  | No |  |

## System Processing

-  System clears the current Signature Header information from the context so that any subsequent BC called will not be executed within the context of that signature.
