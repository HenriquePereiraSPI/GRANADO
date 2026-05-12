# CreateRecordAnnotationWithSignature

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRAnnotationManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateRecordAnnotationWithSignature, Create, Record, Annotation, Signature

## Description

This Business Component method creates a new EMR Record annotation with signature.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | ID of the EMR Record for which annotation should be added. |
| Input | Annotation | Char | Yes | Added annotation. |
| Input | EmployeeNo | Char | Yes | Number of the Employee who signed the annotation. |
| Input | Password | Char | Yes | Employee's password. |
| Input | UserReference | Char | No | User reference. |
| Output | OutputUnitID | Integer | No | Unit ID |
| Output | UnitAnnotationID | Integer | No | Created Unit Annotation ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | Reason code. |

## Validations

- System validates if EMR Record exists. 
- If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- System invokes CreateAnnotationWithSignature Business Component method to create annotation with signature signed. 
- System generates the EMR Record report according to the design template. 
- System returns Unit ID. 
- System returns new Unit Annotation ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | UnitID |  |
|  | FormInstance | System generated. |
| SIGNATURE_HEADER | ALL but FUID | UserReference |
|  | FUID | System generated. |
| SIGNATURE_DETAIL | ALL but FUID | UserReference |
|  | FUID | System generated. |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System generated. |
