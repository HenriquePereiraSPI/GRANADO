# DeleteCertificationRelationshipClass

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationRelationshipClassController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** certification relationship class

## Description

Delete a CERTIFICATION_RELATIONSHIP_CLASS record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CertificationRelationshipClassID | Integer | Yes | ID of the certification relationship class to delete. |

## Validations

- Validation fails if CertificationRelationshipClassID does not exist in CERTIFICATION_RELATIONSHIP_CLASS. 
- Validation fails if CertificationRelationshipClassID is linked to CERTIFICATION_RELATIONSHIP.

## System Processing

- System validates CertificationRelationshipClassID exists in CERTIFICATION_RELATIONSHIP_CLASS. 
- System deletes the CERTIFICATION_RELATIONSHIP_CLASS record.

## Pre-Conditions

Certification relationship class already exists in CERTIFICATION_RELATIONSHIP_CLASS.

## Published Events

Certification relationship class is deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CERTIFICATION_RELATIONSHIP_CLASS | All | All |
