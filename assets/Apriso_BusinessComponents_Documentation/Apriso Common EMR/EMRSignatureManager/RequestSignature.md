# RequestSignature

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRSignatureManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** RequestSignature, Request, Signature

## Description

This Business Component requests signature for a given EMR Record.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | ID of the EMR Record for which signature should be requested. |
| Input | RoleID | Integer | Yes | Role ID. |
| Input | Blocking | Boolean | No | Indicates if this signature is blocking. |
| Input | Annotation | Char | No | Added annotation. |
| Input | EmployeeNo | Char | Yes | Number of the Employee who added the annotation. |
| Input | Password | Char | Yes | Employee's password. |
| Output | SignatureDetailID | Integer | No | Signature Detail ID. |

## Validations

- System validates if the EMR Record exists in the system.

## System Processing

- System validates if the EMR record has a signature header linked. 
- If there is no signature header linked to the EMR record, then it creates a new one and links it to the EMR record. 
- System invokes CreateSignatureDetail BC to create a new signature. 
- System generates the EMR record report according to the design template. 
- System generates annotation for the EMR records. 
- System returns a new Signature Detail ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | SignatureHeaderID |  |
| SIGNATURE_HEADER | ALL but FUID |  |
|  | FUID | System generated. |
| SIGNATURE_DETAIL | ALL but FUID |  |
|  | FUID | System generated. |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation. |
|  | FUID | System generated. |
