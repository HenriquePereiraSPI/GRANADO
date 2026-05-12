# CreateSignatureDetail

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** CreateSignatureDetail, Create, Signature, Detail

## Description

This Business Component method creates new Signature Detail.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureHeaderID | Integer | Yes | ID of the Signature Header for which Signature Detail should be created. |
| Input | SignatureDetailCode | Char | Yes | Name of the Signature Detail to be created. |
| Input | Transaction_ | Char | No | Transaction Token. |
| Input | SignatureClass | Char | No | Class of the Signature. |
| Input | Role | Char | No | Role needed to sign off the Signature. |
| Input | SignatureTimeline | Char | No | Can have the following values: Inline or Delayed. Defines if the signature needs to be signed along with the attached process (Inline) or if it can be delayed and signed after the process (Delayed). |
| Input | SequenceNo | Integer | No | Sequence number of the Signature. |
| Input | Blocking | Boolean | No | Blocking flag. Indicates if this signature would block the attached process. |
| Input | UserReference | Char | No | User reference. |
| Output | SignatureDetailID | Integer | No | Created Signature Detail ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | Reason code. |

## Validations

- System validates if the Signature Header ID exists in the system. 
- If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- System creates new Signature Detail. 
- System returns new Signature Detail ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE_DETAIL | ALL but FUID | SignatureDetailCode, Transaction_,SignatureClass, Role, SignatureTimeline, SequenceNo, Blocking, UserReference |
|  | FUID | System generated. |
