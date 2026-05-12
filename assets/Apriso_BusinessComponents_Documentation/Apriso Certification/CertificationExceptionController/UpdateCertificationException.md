# UpdateCertificationException

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationExceptionController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification, Certification Exception

## Description

Updates a WIP_REQ_RESOURCE_EXCEPTION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipReqResourceExceptionID | Integer | Yes | ID of a WIP Required Resource exception to update. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| WipReqResourceID | Integer | ID of the WIP Required Resource to which an exception is applied. |
| ExceptResourceID | Integer | ID of a resource for which a specific requirement defined by WipReqResourceID does not have to be met. |
| ReasonCode | Char | Reason code of an exception. |
| Comment | Char | Comment to the exception. |
| EffectiveDate | DateTime | The date and time when the exception starts to be applicable. |
| DiscontinueDate | DateTime | The date and time when the exception ends to be applicable. |

## Validations

- Validation fails if WipReqResourceExceptionID does not exist. 
- Validation fails if WipReqResourceID is used and does not exist. 
- Validation fails if ExceptResourceID is used and does not exist. 
- Validation fails if ReasonCode is used and does not exist. 
- Validation fails if EffectiveDate is the same or later than DiscontinueDate when both are used.

## System Processing

- System validates that WipReqResourceExceptionID exists. 
- System validates dynamic inputs if they are used.  
- System updates the WIP_REQ_RESOURCE_EXCEPTION record containing the provided WipReqResourceExceptionID.

## Pre-Conditions

Preconditions: WipReqResourceExceptionID must already exist.

## Published Events

WIP_REQ_RESOURCE_EXCEPTION record is updated.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_REQ_RESOURCE_EXCEPTION | WipReqResourceID | WipReqResourceID |
| WIP_REQ_RESOURCE_EXCEPTION | ExceptResourceID | ExceptResourceID |
| WIP_REQ_RESOURCE_EXCEPTION | ReasonCode | ReasonCode |
| WIP_REQ_RESOURCE_EXCEPTION | Comment_ | Comment |
| WIP_REQ_RESOURCE_EXCEPTION | EffectiveDate | EffectiveDate |
| WIP_REQ_RESOURCE_EXCEPTION | DiscontinueDate | DiscontinueDate |
