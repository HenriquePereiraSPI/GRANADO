# UpdateCertification

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification

## Description

Updates a CERTIFICATION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CertificationID | Integer | Yes | ID of the certification to update. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Active | Boolean | Determines whether the certification is active. Only active certifications can be updated. |
| CertificationClassID | Integer | ID of the linked certification class. |
| ValidityPeriodDays | Integer | Number of days the certification is valid. |
| TrackForExpiration | Boolean | Determines whether the certification is tracked for expiration. |
| PartnerID | Integer | ID of the linked partner. |
| ResourceType | Integer | Type of resource the certification applies to. |
| Short | Char | Short description. |
| Medium | Char | Medium description. |
| Extended | Char | Extended description. |

## Validations

- Validation passes if CertificationID exists. 
- Validation passes if Active is true. 
- Validation passes if CertificationClassID exists. 
- Validation passes if ValidityPeriodDays is non-negative. 
- Validation passes if PartnerID exists. 
- Validation passes if ResourceType exists. ResourceType cannot be modified if the certification is already linked to a resource. 
- Validation fails if Short, Medium, and Extended description are being provided and exceed the allowed length limits.

## System Processing

- System validates if all supplied inputs are valid. 
- System updates the CERTIFICATION record with supplied values. 
- System checks if Short, Medium, and Extended are being used and if they exceed the limit.

## Pre-Conditions

Preconditions: Entities such as CertificationClass, Partner, and ResourceType must already exist when attempting to link them while updating the CERTIFICATION record.

## Published Events

Certification is updated.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CERTIFICATION | CertificationClassID | CertificationClassID |
| CERTIFICATION | ValidityPeriodInDays | ValidityPeriodInDays |
| CERTIFICATION | PartnerID | PartnerID |
| CERTIFICATION | TrackForExpiration | TrackForExpiration |
| CERTIFICATION | ResourceType | ResourceType |
| CERTIFICATION | Active | Determines if a certification is active. |
| TEXT_TRANSLATION | Short | Short |
| TEXT_TRANSLATION | Medium | Medium |
| TEXT_TRANSLATION | Extended | Extended |
