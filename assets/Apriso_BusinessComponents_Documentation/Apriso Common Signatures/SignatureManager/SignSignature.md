# SignSignature

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** SignSignature, Sign, Signature

## Description

This Business Component method signs a signature.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureHeaderID | Integer | No | ID of the Signature Header to be signed. |
| Input | SignatureDetailCode | Char | Yes | Name of the Signature Detail to be signed. |
| Input | EmployeeNo | Char | Yes | Number of the Employee who signed the signature. |
| Input | Password | Char | Yes | Employee's password. |
| Input | Comment | Char | No | Comment. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | Reason code. |

## Validations

- System validates if the Signature Detail exists with the Signature Header. 
- If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- System invokes SignSignatureDetail Business Component method to sign the signature detail.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE_DETAIL | EmployeeNo | EmployeeNo |
|  | EmployeeName |  |
|  | SignedOnLocalTime | System local time. |
|  | SignedOnTimeZone | Context setting. |
|  | SignedOnLocation | Facility from context. |
|  | Comment | Comment. |
|  | ReasonCode | ReasonCode |
