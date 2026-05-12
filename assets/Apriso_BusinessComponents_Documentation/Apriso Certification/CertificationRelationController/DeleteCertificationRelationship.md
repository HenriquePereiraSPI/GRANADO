# DeleteCertificationRelationship

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationRelationController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification, Certification Relation

## Description

Deletes a CERTIFICATION_RELATION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentCertificationID | Integer | Yes | Parent certification ID. |
| Input | ChildCertificationID | Integer | Yes | Child certification ID. |
| Input | CertificationRelationshipClassID | Integer | Yes | Certification relationship class ID. |

## Validations

- Validation fails if ParentCertificationID, ChildCertificationID, or CertificationRelationshipClassID does not exist. 
- Validation fails if the ParentCertificationID-ChildCertificationID-CertificationRelationshipClassID combination does not exist in CERTIFICATION_RELATION.

## System Processing

- System validates that all inputs exist. 
- System validates that the combination of inputs exists in CERTIFICATION_RELATION. 
- System deletes the CERTIFICATION_RELATION record with given inputs.

## Pre-Conditions

Preconditions: All input IDs must already exist and form a CERTIFICATION_RELATION record.

## Published Events

CERTIFICATION_RELATION record is deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CERTIFICATION_RELATION | All | N/A |
