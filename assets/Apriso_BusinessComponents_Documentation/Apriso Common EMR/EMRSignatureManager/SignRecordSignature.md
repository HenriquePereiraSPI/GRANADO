# SignRecordSignature

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRSignatureManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** SignRecordSignatureDetail, Sign, Record, Signature

## Description

This Business Component method signs EMR Record signature.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | ID of the EMR Record to be signed. |
| Input | SignatureDetailID | Integer | Yes | ID of the Signature Detail to be signed. |
| Input | EmployeeNo | Char | Yes | Number of the Employee who signed the EMR Record. |
| Input | Password | Char | Yes | Employee's password. |
| Input | Comment | Char | No | Comment. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | Reason code. |

## Validations

- System validates if the EMR Record exists in the system. 
- If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- System invokes SignSignatureDetail Business Component method to sign the specified signature for the given EMR record. 
- System generates the EMR Record report according to the design template.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE_DETAIL | EmployeeNo | EmployeeNo |
|  | EmployeeName |  |
|  | SignedOnLocalTime | System local time. |
|  | SignedOnTimeZone | Context setting. |
|  | SignedOnLocation | Facility from context. |
|  | Comment | Comment. |
