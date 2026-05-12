# DeleteCertificationException

**Category:** Apriso/Certification
**Class:** `FlexNet.BusinessFacade.Certification.Controllers.CertificationExceptionController`
**Assembly:** `FlexNet.BusinessFacade.Certification.dll`
**Status:** Active
**Keywords:** Certification, Certification Exception

## Description

Deletes a WIP_REQ_RESOURCE_EXCEPTION record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipReqResourceExceptionID | Integer | Yes | ID of a WIP Required Resource exception to delete. |

## Validations

- Validation fails if WipReqResourceExceptionID does not exist.

## System Processing

- System validates that WipReqResourceExceptionID exists. 
- System deletes the WIP_REQ_RESOURCE_EXCEPTION record containing the provided WipReqResourceExceptionID.

## Pre-Conditions

Preconditions: WipReqResourceExceptionID must already exist.

## Published Events

WIP_REQ_RESOURCE_EXCEPTION record is deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_REQ_RESOURCE_EXCEPTION | All | N/A |
