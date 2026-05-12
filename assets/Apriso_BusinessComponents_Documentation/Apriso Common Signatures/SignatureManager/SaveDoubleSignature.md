# SaveDoubleSignature

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
| Input | FirstCreateDate | DateTime | Yes | Timestamp when first signature was created |
| Input | FirstEmployeeID | Integer | Yes | Link to first signatory (EMPLOYEE table) |
| Input | FirstEmployeePassword | Char | Yes | The password of the first employee |
| Input | FirstReasonCode | Char | No | Signing Reason Code |
| Input | FirstComment | Char | No | Signing Comment |
| Input | SecondCreateDate | DateTime | Yes | Timestamp when second signature was created |
| Input | SecondEmployeeID | Integer | Yes | Link to second signatory (EMPLOYEE table) |
| Input | SecondEmployeePassword | Char | Yes | The password of the second employee |
| Input | SecondReasonCode | Char | No | Second Signing Reason Code |
| Input | SecondComment | Char | No | Second Signing Comment |
| Output | SignatureID | Integer | No | Identifier of created signature |

## Validations

- FirstEmployeeID/FirstEmployeePassword should be linked to existing employee. If not, system returns "Badge ID/Password combination does not exist in the system. Try again." message. 
- SecondEmployeeID/SecondEmployeePassword should be linked to existing employee. If not, system returns "Badge ID/Password combination does not exist in the system. Try again." message. 
- ReasonCode should be linked to existing reason code if inputted. If not, system returns "Reason code could not be found" message. 
- SecondReasonCode should be linked to existing reason code if inputted. If not, system returns "Reason code could not be found" message.

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
|  | FirstEmployeeNo | FirstEmployeeID |
|  | SecondDate | SecondCreateDate |
|  | SecondReasonCode | SecondReasonCode |
|  | SecondComment | SecondComment |
|  | SecondEmployeeNo | SecondEmployeeID |
