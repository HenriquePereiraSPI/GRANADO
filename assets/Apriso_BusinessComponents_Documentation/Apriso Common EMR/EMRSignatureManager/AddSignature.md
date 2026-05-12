# AddSignature

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRSignatureManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateEMRSignatureHeader, Create,EMR, Signature, Header

## Description

This Business Component method is used to add a signature to the current signature header in the session (the EMR context).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SignatureDetailCode | Char | Yes | The signature detail code. |
| Input | EmployeeNo | Char | No | The number of the employee who signed a signature. |
| Input | Password | Char | No | The employee's password. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | The Reason Code. |

## Validations

- The system validates if the signature exists in the session. 
- The system validates EmployeeNo and Password. 
- If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- The system finds the signature from Signature Detail Definition by SignatureDetailCode. 
- The system validates if the employee has the role to sign the signature. 
- The system creates in the EMR context a new signature detail and signs with the inputted EmployeeNo and Password.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE_DETAIL | ALL but FUID | SignatureDetailCode, EmployeeNo |
|  | SignedOnLocalTime | The system local time |
|  | SignedOnTimeZone | The system local time zone |
|  | FUID | System-generated |
