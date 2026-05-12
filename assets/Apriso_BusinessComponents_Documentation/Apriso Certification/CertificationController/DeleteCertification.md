# DeleteCertification

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification

## Description

Deletes a CERTIFICATION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CertificationID | Integer | Yes | ID of the certification to delete. |

## Validations

- Validation passses if CertificationID exists. 
- Validation fails if the certification to be deleted is linked to any CERTIFICATION_RELATION record. 
- Validation fails if the certification to be deleted is linked to any RESOURCE_CERTIFICATION record.

## System Processing

- System validates if all supplied inputs are valid. 
- System deletes the CERTIFICATION record.

## Pre-Conditions

Preconditions: CERTIFICATION record to be deleted must not be linked to any relation or resource.

## Published Events

Certification is deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CERTIFICATION | ALL | N/A |
