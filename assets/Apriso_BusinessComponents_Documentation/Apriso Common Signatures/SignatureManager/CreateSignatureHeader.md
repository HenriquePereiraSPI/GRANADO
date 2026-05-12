# CreateSignatureHeader

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** CreateSignatureHeader, Create, Signature, Header

## Description

This Business Component method creates a new Signature Header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureHeaderCode | Char | Yes | Signature Header Code to be created. |
| Input | EnforceSequence | Boolean | No | Enforce sequence flag. If true, the system will enforce signing signatures in a sequence (see SignSignature Business Component method for details). |
| Input | UserReference | Char | No | User reference. |
| Output | SignatureHeaderID | Integer | No | Created Signature Header ID. |

## System Processing

- System creates a new Signature Header. 
- System returns a new Signature Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE_HEADER | ALL but FUID | SignatureHeaderCode, EnforceSequence, UserReference |
|  | FUID | System generated. |
