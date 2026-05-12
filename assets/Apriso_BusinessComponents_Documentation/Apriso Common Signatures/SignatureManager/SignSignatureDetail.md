# SignSignatureDetail

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** SignSignatureDetail, Sign, SignatureDetail

## Description

This Business Component method signs the Signature Detail.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureDetailCode | Char | Yes | Name of the Signature Detail to be signed. |
| Input | EmployeeNo | Char | Yes | Employee Number or Login Name of the Employee who signed the signature. |
| Input | Password | Char | Yes | Employee's password. |
| Input | Comment | Char | No | Comment. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | Reason code. |

## Validations

- System validates if the Signature Detail exists in the system. 
- System validates if the Signature has not been signed. 
- If the Signature Header enforces sequence, then the system validates if all previous signatures in the same Signature Header has been signed. 
- System validates if EmployeeNo and Password are valid. 
- System validates if the Employee has the role to sign the signature. 
- If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- System signs the Signature Detail with the Employee Name, local time and the employee's Facility as signed location.

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
