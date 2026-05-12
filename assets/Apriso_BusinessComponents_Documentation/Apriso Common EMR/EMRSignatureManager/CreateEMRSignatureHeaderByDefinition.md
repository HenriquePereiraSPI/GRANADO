# CreateEMRSignatureHeaderByDefinition

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRSignatureManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateEMRSignatureHeaderByDefinition, Create,EMR, Signature, Header, Definition

## Description

This Business Component method creates a new Signature Header for the given EMR Record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureHeaderDefinitionID | Integer | Yes | ID of the Signature Header Definition. |
| Input | EmrRecordID | Integer | Yes | ID if the EMR Record for which the Signature Header should be created. |
| Input | UserReference | Char | No | User reference. |
| Input | CreateDetail | Boolean | No | Flag that indicates if the Signature Detail should be created. |
| Output | SignatureHeaderID | Integer | No | ID if the created Signature Header. |

## Validations

- Validates if EMR record exists in the system.

## System Processing

- System invokes CreateSignatureHeaderByDefinition Business Component method to create Signature Header. 
- System sets the Signature Header ID to the given EMR Record. 
- System returns new Signature Header ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | SignatureHeaderID |  |
| SIGNATURE_HEADER | ALL but FUID | SignatureHeaderCode, EnforceSequence, UserReference |
|  | FUID | System generated. |
| SIGNATURE_DETAIL | ALL but FUID |  |
|  | FUID | System generated. |
