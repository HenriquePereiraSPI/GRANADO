# CreateSignatureHeaderByDefinition

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** CreateSignatureHeaderByDefinition, Create, Signature, Header

## Description

This Business Component method creates new Signature Header according to the specified Signature Header Definition.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureHeaderDefinitionID | Integer | Yes | ID of the Signature Header Definition according to which the Signature Header should be created. |
| Input | UserReference | Char | No | User reference. |
| Input | CreateDetail | Boolean | No | Create Signature Detail flag. |
| Output | SignatureHeaderID | Integer | No | Signature Header ID. |

## Validations

- System validates if a Signature Header Definition exists in the system.

## System Processing

- System creates a new Signature Header according to the Signature Header Definition. 
- If CreateDetail flag is true, then: 
 
- System retrieves the Signature Detail Definition which is associated with the given Signature Header Definition. 
- System invokes CreateSignatureDetailByDefinition BC method to create new Signature Details and associate them with the new Signature Header. 
 
- System returns a new Signature Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE_HEADER | ALL but FUID |  |
|  | FUID | System generated. |
| SIGNATURE_DETAIL | ALL but FUID |  |
|  | FUID | System generated. |
