# SaveSingleSignature_v2

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature.dll`
**Status:** Active

## Description

Creates record in the SIGNATURE table in the Operational database and starts a signed context.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Action | Char | No | Description of the signed action ("mixing", "filling"). |
| Input | ActionParams | Char | No | Additional parameters describing the action. |
| Input | Status | Short | Yes | Status of Signature (Approved/Rejected). |
| Input | EffectiveDate | DateTime | Yes | Signature effective date. |
| Input | CreateDate | DateTime | Yes | Timestamp of the signature creation. |
| Input | EmployeeNo | Char | Yes | Link to the signatory (the EMPLOYEE table). |
| Input | EmployeePassword | Char | Yes | The password of the employee. |
| Input | ReasonCode | Char | No | Signing reason code. |
| Input | Comment | Char | No | Signing comment. |
| Output | SignatureID | Char | No | Identifier of the created signature. |

## Validations

- EmployeeNo/EmployeePassword should be linked to an existing employee. If not, the system returns the "Badge ID/Password combination does not exist in the system. Try again." message. 
- ReasonCode should be linked to an existing reason code if inputted. If not, the system returns the "Reason code could not be found" message.

## System Processing

-  Invokes FlexNet.SystemServices.Signature BC method that creates a record in the SIGNATURE table and populates the signature context.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE | Action | Action |
|  | ActionParams | ActionParams |
|  | Status | Status |
|  | EffectiveDate | EffectiveDate |
|  | FirstDate | CreateDate |
|  | FirstReasonCode | ReasonCode |
|  | FirstComment | Comment |
|  | FirstEmployeeNo | EmployeeNo |
