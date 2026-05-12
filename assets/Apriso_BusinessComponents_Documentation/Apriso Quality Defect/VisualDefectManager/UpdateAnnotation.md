# UpdateAnnotation

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Unit Annotation Update

## Description

The purpose of this Business Component method is to update an existing Annotation record in the UNIT_ANNOTATION table (for a Visual Quality Defect or other entity).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitAnnotationID | Integer | Yes | The ID of an existing Annotation. |
| Input | Annotation | Char | Yes | New text of the Annotation. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ComponentProductID | Integer | The new Product ID of Component for which Annotation was created. |
| ComponentSerialNo | Char | The new Serial No of Component for which Annotation was created. |
| ComponentX | Decimal | The new X coordinate of the Annotation in Component context. |
| ComponentY | Decimal | The new Y coordinate of the Annotation in Component context. |
| ComponentZ | Decimal | The new Z coordinate of the Annotation in Component context. |
| InstancePath | Char | The new Path that determines Component in the 3D model for which Annotation was created. |
| UserReference | Char | The field for user reference. |
| X | Decimal | The new X coordinate of the Annotation. |
| Y | Decimal | The new Y coordinate of the Annotation. |
| Z | Decimal | The new Z coordinate of the Annotation. |

## Validations

- The system validates that the record exists in the UNIT_ANNOTATION table. 
- The system validates that the X and Y coordinates are provided together. 
- If dynamic input Z is not specified then the system validates that the provided dynamic inputs X and Y coordinates are greater than or equal to zero. 
- Dynamic inputs ComponentX, ComponentY and ComponentZ must be provided together. 
- If dynamic input ComponentX is specified then dynamic input Z is required. 
-  Dynamic inputs Z and InstancePath must be provided together.  
- If dynamic input ComponentSerialNo is specified then dynamic input ComponentProductID must be specified. 
- The system validates that the Annotation text is not empty.

## System Processing

- The system updates the record in the UNIT_ANNOTATION table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_ANNOTATION | ID | UnitAnnotationID |
|  | Annotation | Annotation |
|  | X | X coordinate of the Annotation. |
|  | Y | Y coordinate of the Annotation. |
|  | UserReference | UserReference or DB Null if empty. |
|  | Z | Z coordinate of the Annotation. |
|  | ComponentX | X coordinate of the Annotation in Component context. |
|  | ComponentY | Y coordinate of the Annotation in Component context. |
|  | ComponentZ | Z coordinate of the Annotation in Component context. |
|  | ProductID | ProductID of the Annotation's Component or DB Null if ComponentProductID is less or equal to 0. |
|  | SerialNo | SerialNo of the Annotation's Component or DB Null if ComponentSerialNo is an empty string. |
|  | InstancePath | Path that determines Component in the 3D model. |
