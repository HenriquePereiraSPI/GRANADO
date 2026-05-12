# UpdateResourceCertification

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.ResourceCertificationController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Resource Certification

## Description

Updates a RESOURCE_CERTIFICATION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceCertificationID | Integer | Yes | ID of the resource certification to update. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReceiptDate | DateTime | The date and time when a resource obtains a certification. |
| ExpirationDate | DateTime | The date and time of the resource certification expiration. |
| Invalid | Boolean | Determines whether a resource certification is invalid. The default value is false. |
| InvalidationReasonCode | Char | Reason code of the invalid certification. |
| InvalidatedOn | DateTime | The date and time when a resource certification becomes invalid. |
| Mandatory | Boolean | Determines whether the certification is mandatory for the resource to perform work. |

## Validations

- Validation fails if ExpirationDate is earlier than ReceiptDate if both are provided. 
- Validation fails if the number of days between ReceiptDate and ExpirationDate is greater than the certification's validity period. 
- Validation fails if Invalid is present, is true, and InvalidationReasonCode or InvalidatedOn is missing. 
- Validation fails if Invalid is present, is true, and InvalidationReasonCode is not a valid Reason Code.

## System Processing

- System validates if all required inputs are present and valid. 
- System validates if ExpirationDate is later than or at the same time as ReceiptDate if both are provided. 
- System validates if the number of days between ReceiptDate and ExpirationDate is less than or equal to the certification's validity period. 
- System validates if Invalid is present and true, and then validates if InvalidationReasonCode and InvalidatedOn are present and valid. 
- System updates a RESOURCE_CERTIFICATION record with provided inputs.

## Pre-Conditions

Preconditions: Certification, Resource and Reason Code entities must exist before updating the RESOURCE_CERTIFICATION record.

## Published Events

Resource certification is updated.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_CERTIFICATION | Mandatory | Mandatory |
| RESOURCE_CERTIFICATION | ReceiptDate | ReceiptDate |
| RESOURCE_CERTIFICATION | ExpirationDate | ExpirationDate |
| RESOURCE_CERTIFICATION | Invalid | Invalid |
| RESOURCE_CERTIFICATION | InvalidationReasonCode | InvalidationReasonCode |
| RESOURCE_CERTIFICATION | InvalidatedOn | InvalidatedOn |
