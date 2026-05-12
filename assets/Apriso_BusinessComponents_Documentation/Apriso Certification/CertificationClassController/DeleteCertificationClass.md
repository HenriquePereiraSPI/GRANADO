# DeleteCertificationClass

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationClassController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification, Certification Class

## Description

Deletes a CERTIFICATION_CLASS record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CertificationClassID | Integer | Yes | ID of the certification class to delete. |

## Validations

- Validation fails if CertificationClassID does not exist in CERTIFICATION_CLASS. 
- Validation fails if CertificationClassID is linked to a record in CERTIFICATION.

## System Processing

- System validates CertificationClassID exists in CERTIFICATION_CLASS and is not linked to a record in CERTIFICATION. 
- System deletes the CERTIFICATION_CLASS record.

## Pre-Conditions

Precondition: Certification class already exists in CERTIFICATION_CLASS and CertificationClassID is not linked to a record in CERTIFICATION.

## Published Events

Certification class is deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CERTIFICATION_CLASS | All | N/A |
