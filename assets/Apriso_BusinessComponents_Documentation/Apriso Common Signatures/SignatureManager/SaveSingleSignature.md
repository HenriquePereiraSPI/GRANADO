# SaveSingleSignature

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature.dll`
**Status:** Deprecated

## Description

Creates record in SIGNATURE table and starts a signed context.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Action | Char | No | Description of signed action ("mixing", "filling") |
| Input | ActionParams | Char | No | Additional parameters describing action |
| Input | Status | Short | Yes | Status of Signature (Approved/Rejected) |
| Input | EffectiveDate | DateTime | Yes | Signature Effective Date |
| Input | CreateDate | DateTime | Yes | Timestamp when signature was created |
| Input | EmployeeID | Integer | Yes | Link to signatory (EMPLOYEE table) |
| Input | EmployeePassword | Char | Yes | The password of the employee |
| Input | ReasonCode | Char | No | Signing Reason Code |
| Input | Comment | Char | No | Signing Comment |
| Output | SignatureID | Char | No | Identifier of created signature |

## Validations

- EmployeeID/EmployeePassword should be linked to existing employee. If not, system returns "Badge ID/Password combination does not exist in the system. Try again." message. 
- ReasonCode should be linked to existing reason code if inputted. If not, system returns "Reason code could not be found" message.

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
|  | FirstEmployeeNo | EmployeeID |
