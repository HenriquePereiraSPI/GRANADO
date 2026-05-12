# CurrentSignatureContext

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature.dll`
**Status:** Active

## Description

Returns the current signature ID from the context. If the transaction is not in context of a signature, then this BC will return 0.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Output | SignatureID | Integer | No | The ID of the signature in the signature context. 0 if there is not signature in the context. |
