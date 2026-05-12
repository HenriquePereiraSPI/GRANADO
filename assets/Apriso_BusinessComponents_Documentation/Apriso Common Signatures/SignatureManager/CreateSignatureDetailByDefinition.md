# CreateSignatureDetailByDefinition

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** CreateSignatureDetailByDefinition, Create, Signature, Detail

## Description

This Business Component method creates a new Signature Detail according to the specified Signature Detail Definition.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureDetailDefinitionID | Integer | Yes | ID of the Signature Detail Definition which should be used to create Signature Detail. |
| Input | SignatureHeaderID | Integer | Yes | ID of the Signature Header for which Signature Detail should be created. |
| Input | Transaction_ | Char | No | Transaction Token. |
| Input | UserReference | Char | No | User reference. |
| Output | SignatureDetailID | Integer | No | Created Signature Detail ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | Reason code. |

## Validations

- Validates if Signature Detail Definition exists in the system. 
-  If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- System creates a new Signature Detail according to Signature Detail Definition. 
- System returns a new Signature Detail ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE_DETAIL | ALL but FUID | SignatureHeaderID, Transaction_, UserReference |
|  | FUID | System generated. |
