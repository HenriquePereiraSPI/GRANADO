# DeleteResourceCertification

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.ResourceCertificationController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Resource Certification

## Description

Deletes a RESOURCE_CERTIFICATION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceCertificationID | Integer | Yes | ID of the resource certification to delete. |

## Validations

-  Validation fails if ResourceCertificationID does not exist in RESOURCE_CERTIFICATION.

## System Processing

- System validates if all required inputs are present and valid. 
- System deletes a RESOURCE_CERTIFICATION record.

## Pre-Conditions

Preconditions: Resource certification already exists in RESOURCE_CERTIFICATION.

## Published Events

Resource certification is deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_CERTIFICATION | All | All |
