# AssignResourceCertification

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.ResourceCertificationController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Resource Certification

## Description

Creates a RESOURCE_CERTIFICATION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CertificationID | Integer | Yes | ID of the certification. |
| Input | ResourceID | Integer | Yes | ID of the resource. |
| Input | Mandatory | Boolean | Yes | Determines whether the certification is mandatory for the resource to perform work. |
| Output | ResourceCertificationID | Integer | Yes | ID of the resource certification. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReceiptDate | DateTime | The date and time when a resource obtains a certification. |
| ExpirationDate | DateTime | The date and time of the resource certification expiration. |
| Invalid | Boolean | Determines whether a resource certification is invalid. The default value is false. |
| InvalidationReasonCode | Char | Reason code of the invalid certification. |
| InvalidatedOn | DateTime | The date and time when a resource certification becomes invalid. |

## Validations

- Validation passes if CertificationID corresponds to a record in CERTIFICATION.  
- Validation passes if ResourceID corresponds to a record in RESOURCE.  
- Validation passes if CertificationID and ResourceID have the same ResourceType. 
- Validation fails if ExpirationDate is earlier than ReceiptDate if both are provided. 
- Validation fails if the number of days between ReceiptDate and ExpirationDate is greater than the certification's validity period. 
- Validation fails if Invalid is true and InvalidationReasonCode or InvalidatedOn is missing. 
- Validation fails if Invalid is true and InvalidationReasonCode is not a valid reason code.

## System Processing

- System validates if all required inputs are present and valid. 
- System validates if the provided CertificationID and ResourceID have the same ResourceType. 
- System validates if ExpirationDate is later than or at the same time as ReceiptDate if both are provided. 
- System checks if Invalid is present and true, then validates if InvalidationReasonCode and InvalidatedOn are present and valid.  
- System creates a RESOURCE_CERTIFICATION record. 
- System returns the ID of the newly created RESOURCE_CERTIFICATION record.

## Published Events

Resource certification is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_CERTIFICATION | CertificationID | CertificationID |
| RESOURCE_CERTIFICATION | ResourceID | ResourceID |
| RESOURCE_CERTIFICATION | Mandatory | Mandatory |
| RESOURCE_CERTIFICATION | ReceiptDate | ReceiptDate |
| RESOURCE_CERTIFICATION | ExpirationDate | ExpirationDate |
| RESOURCE_CERTIFICATION | Invalid | Invalid |
| RESOURCE_CERTIFICATION | InvalidationReasonCode | InvalidationReasonCode |
| RESOURCE_CERTIFICATION | InvalidatedOn | InvalidatedOn |
