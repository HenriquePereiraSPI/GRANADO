# CreateCertificationException

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationExceptionController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification, Certification Exception

## Description

Creates a WIP_REQ_RESOURCE_EXCEPTION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipReqResourceID | Integer | Yes | ID of the WIP Required Resource to which an exception is applied. |
| Input | ExceptResourceID | Integer | Yes | ID of a resource for which a specific requirement defined by WipReqResourceID does not have to be met. |
| Input | ReasonCode | Char | Yes | Reason code of an exception. |
| Output | WipReqResourceExceptionID | Integer | Yes | ID of a WIP Required Resource exception. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Comment | Char | Comment to the exception. |
| EffectiveDate | DateTime | The date and time when the exception starts to be applicable. |
| DiscontinueDate | DateTime | The date and time when the exception ends to be applicable. |

## Validations

- Validation fails if WipReqResourceID does not exist. 
- Validation fails if ExceptResourceID does not exist. 
- Validation fails if ReasonCode does not exist. 
- Validation fails if EffectiveDate is the same or later than DiscontinueDate.

## System Processing

- System validates that WipReqResourceID, ExceptResourceID, and ReasonCode exist. 
- System creates a WIP_REQ_RESOURCE_EXCEPTION record with provided inputs. 
- System returns the ID of the newly created record.

## Pre-Conditions

Preconditions: Input IDs and ReasonCode must already exist.

## Published Events

WIP_REQ_RESOURCE_EXCEPTION record is created.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_REQ_RESOURCE_EXCEPTION | WipReqResourceID | WipReqResourceID |
| WIP_REQ_RESOURCE_EXCEPTION | ExceptResourceID | ExceptResourceID |
| WIP_REQ_RESOURCE_EXCEPTION | ReasonCode | ReasonCode |
| WIP_REQ_RESOURCE_EXCEPTION | Comment_ | Comment |
| WIP_REQ_RESOURCE_EXCEPTION | EffectiveDate | EffectiveDate |
| WIP_REQ_RESOURCE_EXCEPTION | DiscontinueDate | DiscontinueDate |
