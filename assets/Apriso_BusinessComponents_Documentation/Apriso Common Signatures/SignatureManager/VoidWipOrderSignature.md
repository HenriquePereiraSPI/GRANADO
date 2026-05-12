# VoidWipOrderSignature

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** Void, Signature, WIP

## Description

Void an existing signature on WIP order, WIP operation, or WIP operation step.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipSignatureSignoffID | Integer | Value Required | ID of the WIP Signature Signoff record to be voided. |
| Input | EmployeeNo | Char | Value Required | Employee Number of the voider. |
| Input | Password | Char | Value Required | Password of the voider. |
| Input | ReasonCode | Char | Conditional | Reason code for voiding the existing signature. Optional, unless the signature definition requires a reason code to be provided when voided. |
| Input | Comment | Char | Conditional | Comment of the voider. Optional, unless the signature requires a comment. |
| Input | UpdateSignatureStatus | Boolean | Conditional | Determines whether or not the status of the related WIP Order Signature will be updated to Void as well. Optional. |

## Validations

- Validation fails if the inputted EmployeeNo does not exist, or if the employee could not authenticate using the provided EmployeeNo and Password. 
- Validation fails if the inputted WipSignatureSignoffID does not exist or it had already been voided previously. 
- Validation fails if the Employee does not have any role configured, or if the Employee does not have any of the role that WipOrderSignature requires. 
- Validation fails if ReasonCode is not provided, but the WipOrderSignature record requires ReasonCode to be provided for voiding. 
- Validation fails if the inputted ReasonCode does not exist, if ReasonCode is provided. 
- Validation fails if the inputted ReasonCode is not in the list of allowed reason codes for voiding. 
- Validation fails if Comment is not provided, but the WipOrderSignature requires comments.

## System Processing

- System update the SignatureStatus column of the existing record in the WIP_SIGNATURE_SIGNOFF table and populate the Void related columns with the information provided. 
- If the input UpdateSignatureStatus is set to true, system update the Status column of the WIP_ORDER_SIGNATURE record to Voided.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_SIGNATURE | Status | Set to Voided (6) |
| WIP_SIGNATURE_SIGNOFF | SignatureStatus | Set to Voided (6) |
| WIP_SIGNATURE_SIGNOFF | VoidedOn | Time when the signature was voided |
| WIP_SIGNATURE_SIGNOFF | VoidedBy | ID of the EMPLOYEE record of the voider |
| WIP_SIGNATURE_SIGNOFF | VoidedReasonCode | ReasonCode input |
| WIP_SIGNATURE_SIGNOFF | VoidedComment | Comment input |
