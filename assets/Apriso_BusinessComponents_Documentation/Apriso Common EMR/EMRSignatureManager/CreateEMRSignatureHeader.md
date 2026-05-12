# CreateEMRSignatureHeader

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRSignatureManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateEMRSignatureHeader, Create,EMR, Signature, Header

## Description

Create new signature header for the given EMR record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureHeaderCode | Char | Yes | Signature Header Code |
| Input | EmrRecordID | Integer | Yes | EMR Record ID |
| Input | EnforceSequence | Boolean | No | Enforce sequence flag |
| Input | UserReference | Char | No | User referenece |
| Output | SignatureHeaderID | Integer | No | Signature Header ID |

## Validations

- System validates if EMR records exists.

## System Processing

- System invokes BC CreateSignatureHeader to create signature header. 
- System sets the signature header ID to the given EMR record.  
- System returns new Signature Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | SignatureHeaderID |  |
| SIGNATURE_HEADER | ALL but FUID | SignatureHeaderCode, EnforceSequence, UserReference |
|  | FUID | system generated |
