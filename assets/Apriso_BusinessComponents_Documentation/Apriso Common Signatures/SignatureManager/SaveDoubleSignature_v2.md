# SaveDoubleSignature_v2

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
| Input | FirstCreateDate | DateTime | Yes | Timestamp of the first signature creation. |
| Input | FirstEmployeeNo | Char | Yes | Link to the first signatory (the EMPLOYEE table). |
| Input | FirstEmployeePassword | Char | Yes | The password of the first employee. |
| Input | FirstReasonCode | Char | No | Signing reason code. |
| Input | FirstComment | Char | No | Signing comment. |
| Input | SecondCreateDate | DateTime | Yes | Timestamp of the second signature creation. |
| Input | SecondEmployeeNo | Char | Yes | Link to the second signatory (the EMPLOYEE table). |
| Input | SecondEmployeePassword | Char | Yes | The password of the second employee. |
| Input | SecondReasonCode | Char | No | Second signing reason code. |
| Input | SecondComment | Char | No | Second signing comment. |
| Output | SignatureID | Integer | No | Identifier of the created signature. |

## Validations

- FirstEmployeeNo/FirstEmployeePassword should be linked to an existing employee. If not, the system returns the "Badge ID/Password combination does not exist in the system. Try again." message. 
- SecondEmployeeNo/SecondEmployeePassword should be linked to an existing employee. If not, the system returns the "Badge ID/Password combination does not exist in the system. Try again." message. 
- ReasonCode should be linked to an existing reason code if inputted. If not, the system returns the "Reason code could not be found" message. 
- SecondReasonCode should be linked to an existing reason code if inputted. If not, the system returns the "Reason code could not be found" message.

## System Processing

Invokes FlexNet.SystemServices.Signature BC method that creates a record in the SIGNATURE table and populates the signature context.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE | Action | Action |
|  | ActionParams | ActionParams |
|  | Status | Status |
|  | EffectiveDate | EffectiveDate |
|  | FirstDate | FirstCreateDate |
|  | FirstReasonCode | FirstReasonCode |
|  | FirstComment | FirstComment |
|  | FirstEmployeeNo | FirstEmployeeNo |
|  | SecondDate | SecondCreateDate |
|  | SecondReasonCode | SecondReasonCode |
|  | SecondComment | SecondComment |
|  | SecondEmployeeNo | SecondEmployeeNo |
