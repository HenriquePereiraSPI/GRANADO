# CreateHeaderAnnotationWithSignature

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRAnnotationManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateHeaderAnnotationWithSignature, Create, Header, Annotation, Signature

## Description

This Business Component method creates a new EMR Header annotation with signature.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrHeaderID | Integer | Yes | EMR Header ID for which annotation should be created. |
| Input | Annotation | Char | Yes | Annotation to be created. |
| Input | EmployeeNo | Char | Yes | Number of the Employee who created the annotation. |
| Input | Password | Char | Yes | Employee's Password. |
| Input | UserReference | Char | No | User reference. |
| Output | OutputUnitID | Integer | No | Unit ID. |
| Output | UnitAnnotationID | Integer | No | Created Unit Annotation ID. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ReasonCode | Char | Reason code. |

## Validations

- System validates if EMR Header exists in the system. 
- If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- System invokes CreateAnnotationWithSignature Business Component method to create an annotation with signature signed. 
- System generates the EMR Header report according to the design template. 
- System returns Unit ID. 
- System returns new Unit Annotation ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_HEADER | UnitID |  |
|  | FormInstance | System generated. |
| SIGNATURE_HEADER | ALL but FUID | UserReference |
|  | FUID | System generated. |
| SIGNATURE_DETAIL | ALL but FUID | UserReference |
|  | FUID | System generated. |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System generated. |
