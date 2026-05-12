# CreateAnnotationWithSignature

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** CreateAnnotationWithSignature, Create, Annotation, Signature

## Description

This Business Component method creates a new annotation with signature.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InputUnitID | Integer | No | Unit ID. |
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

- System validates if Employee exists in the system. 
- System validates if InputUnitID is provided. 
- System validates if Annotation is null or empty string. 
- If ReasonCode is provided, the system validates that it exists in the system.

## System Processing

- If InputunitID is provided then the system retrieves the unit record. 
 
- Else it creates a new UnitID. 
 
- System creates Signature Header and Signature Detail for the annotation. 
- System invokes SignSignatureDetail BC method to sign the new Signature Detail with the inputted Employee number and password. 
- System creates a new unit annotation with the signed signature. 
- System returns the Unit ID. 
- System returns the new Unit Annotation ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SIGNATURE_HEADER | ALL but FUID | UserReference |
|  | FUID | System generated. |
| SIGNATURE_DETAIL | ALL but FUID | UserReference |
|  | FUID | System generated. |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System generated. |
