# CreateAnnotation

**Category:** Apriso/Common/Signatures
**Class:** `FlexNet.BusinessFacade.Signature.SignatureManager`
**Assembly:** `FlexNet.BusinessFacade.Signature`
**Status:** Active
**Keywords:** CreateAnnotation, Create, Annotation

## Description

This Business Component method creates a new Annotation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InputUnitID | Integer | No | Unit ID of the annotation. |
| Input | Annotation | Char | Yes | Annotation to be created. |
| Input | UserReference | Char | No | User reference. |
| Output | OutputUnitID | Integer | No | Unit ID. This UnitID is created only if UnitID is not provided as an input, otherwise this output will be the same as InputUnitID. |
| Output | UnitAnnotationID | Integer | No | Created Unit Annotation ID. |

## Validations

- System validates InputUnitID, if it is zero then creates a new unit. 
- System validates if Annotation is null or an empty string.

## System Processing

- If InputUnitID is provided then the system retrieves the unit record. 
 
- Else a new UnitID is created.  
 
- System creates a new unit annotation. 
- System returns Unit ID. 
- System returns a new Unit Annotation ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System generated. |
