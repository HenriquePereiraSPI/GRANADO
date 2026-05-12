# CreateRecordAnnotation

**Category:** Apriso/Common/EMR
**Class:** `FlexNet.BusinessFacade.EMR.EMRAnnotationManager`
**Assembly:** `FlexNet.BusinessFacade.EMR`
**Status:** Active
**Keywords:** CreateRecordAnnotation, Create, Record, Annotation

## Description

This Business Component method creates a new EMR Record annotation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EmrRecordID | Integer | Yes | ID of the EMR Record for which annotation should be created. |
| Input | Annotation | Char | Yes | Annotation to be added. |
| Input | UserReference | Char | No | User reference. |
| Output | OutputUnitID | Integer | No | Unit ID. |
| Output | UnitAnnotationID | Integer | No | Created Unit Annotation ID. |

## Validations

- System validates if EMR Record exists in the system.

## System Processing

- System invokes CreateAnnotation Business Component method to create annotation. 
- System generates the EMR Record report according to the design template. 
- System returns Unit ID. 
- System returns new Unit Annotation ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EMR_RECORD | UnitID |  |
|  | FormInstance | System generated. |
| UNIT | ALL |  |
| UNIT_ANNOTATION | ALL but FUID | Annotation, UserReference |
|  | FUID | System generated. |
