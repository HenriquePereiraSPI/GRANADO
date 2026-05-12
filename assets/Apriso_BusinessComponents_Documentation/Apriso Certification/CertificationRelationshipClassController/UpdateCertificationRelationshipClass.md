# UpdateCertificationRelationshipClass

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationRelationshipClassController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** certification relationship class

## Description

Updates a certification relationship class record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CertificationRelationshipClassID | Integer | Yes | ID of the certification relationship class to update. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Short | Char | Short description. |
| Medium | Char | Medium description. |
| Extended | Char | Extended description. |

## Validations

- Validation fails if CertificationRelationshipClassID does not exist in CERTIFICATION_RELATIONSHIP_CLASS. 
- Validation fails if Short, Medium, and Extended description are being provided and exceed the allowed limits.

## System Processing

- System validates CertificationRelationshipClassID exists in CERTIFICATION_RELATIONSHIP_CLASS. 
- System checks if Short, Medium, and Extended are being used and if they exceed the limit. 
- System updates a CERTIFICATION_RELATIONSHIP_CLASS record with provided inputs.

## Pre-Conditions

Certification relationship class already exists in CERTIFICATION_RELATIONSHIP_CLASS.

## Published Events

Certification relationship class is updated.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TEXT_TRANSLATION | Short | Short |
| TEXT_TRANSLATION | Medium | Medium |
| TEXT_TRANSLATION | Extended | Extended |
