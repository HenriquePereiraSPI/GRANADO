# CreateAnnotationForDocument

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Assign Annotation Create

## Description

This Business Component method creates an Annotation for an existing Quality Defect.
 

The Annotation can be reported on any of the Images assigned to Product or any Groups it belongs to. The Image is represented by DocumentID and ImageName.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | Yes | The ID of an existing Quality Defect. |
| Input | DocumentID | Integer | Yes | Document ID of the image assigned to the Product or Group. |
| Input | Annotation | Char | Yes | The text of the Annotation. |
| Input | X | Decimal | Yes | The X coordinate of the Annotation. |
| Input | Y | Decimal | Yes | The Y coordinate of the Annotation. |
| Output | UnitAnnotationID | Integer | Yes | ID of a newly created Annotation record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ComponentProductID | Integer | The Product ID of Component for which Annotation will be created. |
| ComponentSerialNo | Char | The Serial No of Component for which Annotation will be created. |
| ComponentX | Decimal | The X coordinate of the Annotation in Component context. |
| ComponentY | Decimal | The Y coordinate of the Annotation in Component context. |
| ComponentZ | Decimal | The Z coordinate of the Annotation in Component context. |
| ImageName | Char | Name of the image assigned to the Product or Group. |
| InstancePath | Char | The Path that determines Component in the 3D model. |
| Z | Decimal | The Z coordinate of the Annotation. |

## Validations

- System validates if Quality Defect exists. 
-  System validates if a Document exists.  
- If dynamic input Z is not specified then System validates if X and Y coordinates are integer and are greater or equal to zero. 
- Dynamic inputs ComponentX, ComponentY and ComponentZ must be provided together. 
- If dynamic input ComponentX is specified then dynamic input Z is required. 
-  Dynamic inputs Z and InstancePath must be provided together.  
- If dynamic input ComponentSerialNo is specified and has value then dynamic input ComponentProductID must be specified and also have value. 
- System validates if Product is assigned to Quality Defect – directly or through a WIP Order or Disposition. 
- System validates if Annotation text is non-empty.

## System Processing

- System creates new records in the QUALITY_DEFECT_VISUAL, UNIT and UNIT_DOCUMENT tables if they do not exist for a given DocumentID and ImageName (the same DocumentID and Image Name in UNIT_DOCUMENT). 
- System creates a new record in the UNIT_ANNOTATION table. 
- System returns ID of a new UNIT_ANNOTATION. 
- If the ImageName value is not specified (Dynamic Input does not exist or an empty string is provided), the image name is retrieved from the Name column of the DOCUMENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL | QualityDefectID | Populated from QualityDefectID input. |
|  | UnitID | UnitID of Visual Quality Defects for a specified image. |
| UNIT | UnitID | UnitID of a Visual Quality Defect. |
| UNIT_DOCUMENT | UnitID | UnitID of a Visual Quality Defect. |
|  | DocumentID | Populated from DocumentID input. |
|  | Name | Populated from ImageName input. |
| UNIT_ANNOTATION | ID | Returned as UnitAnnotationID. |
|  | UnitID | UnitID of a parent record in QUALITY_DEFECT_VISUAL. |
|  | Annotation | Annotation text. |
|  | X | X coordinate of the Annotation. |
|  | Y | Y coordinate of the Annotation. |
|  | Z | Z coordinate of the Annotation. |
|  | ComponentX | X coordinate of the Annotation in Component context. |
|  | ComponentY | Y coordinate of the Annotation in Component context. |
|  | ComponentZ | Z coordinate of the Annotation in Component context. |
|  | ProductID | ProductID of the Annotation's Component or DB Null if ComponentProductID is less or equal to 0 or not provided. |
|  | SerialNo | SerialNo of the Annotation's Component or DB Null if ComponentSerialNo is an empty string or not provided. |
|  | InstancePath | Path that determine Component in 3D model. |
