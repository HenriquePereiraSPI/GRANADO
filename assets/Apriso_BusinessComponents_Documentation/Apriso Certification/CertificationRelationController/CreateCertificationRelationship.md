# CreateCertificationRelationship

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationRelationController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification, Certification Relation

## Description

Creates a CERTIFICATION_RELATION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentCertificationID | Integer | Yes | Parent certification ID. |
| Input | ChildCertificationID | Integer | Yes | Child certification ID. |
| Input | CertificationRelationshipClassID | Integer | Yes | Certification relationship class ID. |

## Validations

- Validation fails if ParentCertificationID, ChildCertificationID, or CertificationRelationshipClassID does not exist. 
- Validation fails if the ParentCertificationID-ChildCertificationID-CertificationRelationshipClassID combination already exists in CERTIFICATION_RELATION. 
- Validation fails if ParentCertificationID and ChildCertificationID are the same. 
- Validation fails if the new record's ParentCertificationID and ChildCertificationID form a loop with existing records.

## System Processing

- System validates that all inputs exist. 
- System validates that the combination of inputs does not exist in CERTIFICATION_RELATION. 
- System validates that ParentCertificationID and ChildCertificationID are not the same and that they do not form a loop with existing records. 
- System creates a CERTIFICATION_RELATION record with given inputs.

## Pre-Conditions

Preconditions: All input IDs must already exist and their combination cannot already exist in CERTIFICATION_RELATION.

## Published Events

CERTIFICATION_RELATION record is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CERTIFICATION_RELATION | ParentCertificationID | ParentCertificationID |
| CERTIFICATION_RELATION | ChildCertificationID | ChildCertificationID |
| CERTIFICATION_RELATION | CertificationRelationshipClassID | CertificationRelationshipClassID |
