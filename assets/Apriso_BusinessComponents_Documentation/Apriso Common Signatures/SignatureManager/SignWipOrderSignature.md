# SignWipOrderSignature

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** Sign, Signature, WIP

## Description

Sign a signature on WIP order, WIP operation, or WIP operation step. Not for voiding existing signatures.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderSignatureID | Integer | Value Required | ID of the WIP Order Signature to be signed. |
| Input | EmployeeNo | Char | Value Required | Employee Number of the signer. |
| Input | SignatureStatus | Integer | Value Required | Intended status of the signature. Available values: Unsigned (1), Signed (2), Partially Signed (3), Not Performed (4), Rejected (5), or Voided (6). |
| Input | ReasonCode | Char | Conditional | Reason code for the signature. Optional, unless the signature requires a reason code to be provided. |
| Input | Comment | Char | Conditional | Comment of the signer. Optional, unless the signature requires a comment. |
| Input | WipSignatureRoleID | Integer | Conditional | ID of WIP signature role record that this signature is trying to fulfill. Optional. |
| Output | WipSignatureSignoffID | Integer | No | ID of the created WIP signature signoff record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Password | Char | Password for the signer. |
| UpdateSignatureStatus | Boolean | Determines whether or not the status of the WIP Order Signature will be updated based on the provided status. |
| ProductID | Integer | Product ID associated with the signature being made. |
| SerialNo | Char | Serial number associated with the signature being made. |
| LotNo | Char | Lot number associated with the signature being made. |

## Validations

- Validation fails if the inputted EmployeeNo does not exist 
- Validation fails if the password is provided and employee could not authenticate using the provided EmployeeNo and Password. 
- Validation fails if the inputted WipOrderSignatureID does not exist. 
- Validation fails if the inputted SignatureStatus is Partially Signed or Not Performed, but the WipOrderSignature record does not allow that status. 
- Validation fails if the inputted EmployeeNo already signed a different WipOrderSignature record on the same exact step, and either of the WipOrderSignature record requires signature from unique individuals. 
- Validation fails if the WipOrderSignature or the Employee does not have any role configured, or if the Employee does not have the role associated with the provided WipSignatureRoleID. 
- Validation fails if ReasonCode is not provided, and the SignatureStatus is Rejected or Voided, but the WipOrderSignature record requires ReasonCode to be provided for those status. 
- Validation fails if the inputted ReasonCode does not exist, if ReasonCode is provided. 
- Validation fails if the inputted ReasonCode is not in the list of allowed reason codes for the SignatureStatus. 
- Validation fails if Comment is not provided, but the WipOrderSignature requires comments. 
- Validation fails if Product ID is provided but the product record does not exist. 
- Validation fails if SerialNo is provided by the serial record does not exist. 
- Validation fails if LotNo is provided by the lot record does not exist. 
- Validation fails if Status is set to 1 - Unasigned.

## System Processing

- System creates a new record in the WIP_SIGNATURE_SIGNOFF table with the information provided. 
- If a WipSignatureRoleID is not provided, system will create a new record in the WIP_SIGNATURE_SIGNOFF table for each role of the signer that matches the signature roles. 
- If the input UpdateSignatureStatus is set to true, system update the Status column of the WIP_ORDER_SIGNATURE record with the same status as the new WIP_SIGNATURE_SIGNOFF record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_SIGNATURE | Status | SignatureStatus input |
| WIP_SIGNATURE_SIGNOFF | WipOrderSignatureID | WipOrderSignatureID input |
| WIP_SIGNATURE_SIGNOFF | SignatureStatus | SignatureStatus input |
| WIP_SIGNATURE_SIGNOFF | SignedOn | Time when the signature was created |
| WIP_SIGNATURE_SIGNOFF | SignedBy | ID of the EMPLOYEE record of the signer |
| WIP_SIGNATURE_SIGNOFF | SignedReasonCode | ReasonCode input |
| WIP_SIGNATURE_SIGNOFF | SignedComment | Comment input |
| WIP_SIGNATURE_SIGNOFF | WipSignatureRoleID | WipSignatureRoleID input |
| WIP_SIGNATURE_SIGNOFF | ProductID | ProductID input |
| WIP_SIGNATURE_SIGNOFF | SerialNo | SerialNo input |
| WIP_SIGNATURE_SIGNOFF | LotNo | LotNo input |
