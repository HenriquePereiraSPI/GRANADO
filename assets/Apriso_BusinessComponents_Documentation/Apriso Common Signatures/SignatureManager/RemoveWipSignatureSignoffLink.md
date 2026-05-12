# RemoveWipSignatureSignoffLink

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** Remove, Signature, Link, WIP

## Description

Removes an existing link between an existing signature and one or more of the following: CAPA, Quality Defect, or another signature.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipSignatureSignoffLinkID | Integer | Value Required | ID of the WIP Signature Signoff Link record to remove. |

## Validations

- Validation fails if the inputted WipSignatureSignoffLinkID does not exist.

## System Processing

- System removes the record in the WIP_SIGNATURE_SIGNOFF_LINK table based on the provided WipSignatureSignoffLinkID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SIGNATURE_SIGNOFF_LINK | WipSignatureSignoffLinkID | WipOrderSignatureID input |
