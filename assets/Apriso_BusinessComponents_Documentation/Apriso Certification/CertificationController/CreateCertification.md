# CreateCertification

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification

## Description

Creates a CERTIFICATION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Code | Char | Yes | Certification code. |
| Input | CertificationClassID | Integer | Yes | ID of the linked certification class. |
| Input | TrackForExpiration | Boolean | Yes | Determines whether the certification is tracked for expiration. |
| Input | ResourceType | Integer | Yes | Type of resource the certification applies to. |
| Output | CertificationID | Integer | Yes | ID of the created certification. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| PartnerID | Integer | ID of the linked partner. |
| ValidityPeriodDays | Integer | Number of days the certification is valid. |
| UnitID | Integer | ID of the linked unit. |
| Active | Boolean | Determines whether the created certification is active. |
| Short | Char | Short description. |
| Medium | Char | Medium description. |
| Extended | Char | Extended description. |

## Validations

- Validation fails if Code is empty or a whitespace. 
- Validation fails if Code is not unique. 
- Validation fails if CertificationClassID does not correspond to a record in the CERTIFICATION_CLASS database table. 
- Validation fails if PartnerID is provided and does not correspond to a record in the PARTNER database table. 
- Validation fails if TrackForExpiration is not provided. 
- Validation fails if ResourceType does not correspond to a record in the RESOURCE_ database table. 
- Validation fails if Short, Medium, and Extended description are being provided and exceed the allowed length limits.

## System Processing

- System validates if all required inputs are present and valid. 
- System checks if ValidityPeriodDays is being used and if a negative number is provided to it. 
- System creates a CERTIFICATION record and links it to any relevant corresponding entities. 
- System returns the ID of the newly created CERTIFICATION record. 
- System checks if Short, Medium, and Extended are being used and if they exceed the limit.

## Pre-Conditions

Entities such as CertificationClass, Partner, and ResourceType must already exist when attempting to link to the new CERTIFICATION record.

## Published Events

New certification is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CERTIFICATION | Code | Code |
| CERTIFICATION | CertificationClassID | CertificationClassID |
| CERTIFICATION | ValidityPeriodInDays | ValidityPeriodInDays. If equal or lower than 0, treat as 0. |
| CERTIFICATION | PartnerID | PartnerID |
| CERTIFICATION | TrackForExpiration | TrackForExpiration |
| CERTIFICATION | ResourceType | ResourceType |
| CERTIFICATION | UnitID | UnitID |
| TEXT_TRANSLATION | Short | Short |
| TEXT_TRANSLATION | Medium | Medium |
| TEXT_TRANSLATION | Extended | Extended |
