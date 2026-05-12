# CreateCertificationRelationshipClass

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationRelationshipClassController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** certification relationship class

## Description

Creates a new certification relationship class.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Name | Char | Yes | Name of the certification relationship class. |
| Output | CertificationRelationClassID | Integer | Yes | ID of the certification relation class. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Short | Char | Short description. |
| Medium | Char | Medium description. |
| Extended | Char | Extended description. |

## Validations

- Validation fails if Name is empty or a whitespace. 
- Validation fails if Name already exists for another entry in CERTIFICATION_RELATIONSHIP_CLASS. 
- Validation fails if Short, Medium, and Extended description are being provided and exceed the allowed limits.

## System Processing

- System validates that Name is not empty and is unique compared to CERTIFICATION_RELATIONSHIP_CLASS 
- System checks if Short, Medium, and Extended are being used and if they exceed the limit. 
- System validates the Name length and if it exceeds the limit. 
- System creates a CERTIFICATION_RELATIONSHIP_CLASS record. 
- System returns the ID of the newly created CERTIFICATION_RELATIONSHIP_CLASS record.

## Published Events

Certification relationship class is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CERTIFICATION_RELATIONSHIP_CLASS | Name | Name |
| TEXT_TRANSLATION | Short | Short |
| TEXT_TRANSLATION | Medium | Medium |
| TEXT_TRANSLATION | Extended | Extended |
