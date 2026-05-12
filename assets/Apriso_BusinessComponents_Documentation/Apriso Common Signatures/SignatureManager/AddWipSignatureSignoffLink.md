# AddWipSignatureSignoffLink

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** Add, Signature, Link, WIP

## Description

Adds a link between an existing signature and one or more of the following: CAPA, Quality Defect, or another signature.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipSignatureSignoffID | Integer | Value Required | ID of the WIP Signature Signoff to link to. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WipOrderSignatureID | Integer | ID of the WIP Order Signature being linked. |
| CapaID | Integer | ID of the CAPA record being linked. |
| QualityDefectID | Integer | ID of the Quality Defect record being linked. |

## Validations

- Validation fails if the inputted WipSignatureSignoffID does not exist. 
- Validation fails if the inputted WipOrderSignatureID does not exist. 
- Validation fails if the inputted CapaID does not exist. 
- Validation fails if the inputted QualityDefectID does not exist.

## System Processing

- System creates a new record in the WIP_SIGNATURE_SIGNOFF_LINK table with the information provided.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SIGNATURE_SIGNOFF_LINK | WipSignatureSignoffID | WipOrderSignatureID input |
| WIP_SIGNATURE_SIGNOFF_LINK | WipOrderSignatureID | WipOrderSignatureID input |
| WIP_SIGNATURE_SIGNOFF_LINK | CapaID | CapaID input |
| WIP_SIGNATURE_SIGNOFF_LINK | QualityDefectID | QualityDefectID input |
