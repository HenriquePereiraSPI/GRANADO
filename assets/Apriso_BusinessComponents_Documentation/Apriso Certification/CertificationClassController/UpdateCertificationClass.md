# UpdateCertificationClass

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationClassController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification, Certification Class

## Description

Updates a CERTIFICATION_CLASS record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CertificationClassID | Integer | Yes | ID of the certification class to update. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Short | Char | Short description. |
| Medium | Char | Medium description. |
| Extended | Char | Extended description. |

## Validations

- Validation fails if CertificationClassID does not exist in CERTIFICATION_CLASS. 
- Validation fails if Short, Medium, and Extended description are being provided and exceed the allowed limits.

## System Processing

- System validates CertificationClassID exists in CERTIFICATION_CLASS. 
- System checks if Short, Medium, and Extended are being used and if they exceed the limit. 
- System updates a CERTIFICATION_CLASS record with provided inputs.

## Pre-Conditions

Precondition: Certification class already exists in CERTIFICATION_CLASS.

## Published Events

Certification class is updated.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| TEXT_TRANSLATION | Short | Short |
| TEXT_TRANSLATION | Medium | Medium |
| TEXT_TRANSLATION | Extended | Extended |
