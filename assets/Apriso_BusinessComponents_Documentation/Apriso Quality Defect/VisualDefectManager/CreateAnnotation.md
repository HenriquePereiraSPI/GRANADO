# CreateAnnotation

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Deprecated
**Keywords:** Quality Defect Tracking Image Visual Assign Annotation Create

## Description

This Business Component method creates an Annotation for an existing Quality Defect.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | Yes | The ID of an existing Quality Defect. |
| Input | ImageName | Char | Yes | Name of the image assigned to the Product. |
| Input | Annotation | Char | Yes | The text of the Annotation. |
| Input | X | Integer | Yes | The X coordinate of the Annotation. |
| Input | Y | Integer | Yes | The Y coordinate of the Annotation. |
| Output | UnitAnnotationID | Integer | Yes | ID of a newly created Annotation record. |
| Output | UnitRegionID | Integer | Yes | ID of the Region the Annotation is created within, zero if the Region is not found. |
| Output | UnitRegionName | Char | Yes | Name of the Region the Annotation is created within. |

## Validations

- System validates if Quality Defect exists. 
- System validates if X and Y coordinates are greater than or equal to zero.  
- System validates if Product is assigned to Quality Defect – directly or through a WIP Order or Disposition. 
- System validates if an image with a given ImageName is assigned to the Product. 
- System validates if Annotation text is non-empty.

## System Processing

- System creates new records in the QUALITY_DEFECT_VISUAL, UNIT and UNIT_DOCUMENT tables if they do not exist for a given ImageName (the same DocumentID and Image Name in UNIT_DOCUMENT). 
- System creates a new record in the UNIT_ANNOTATION table. 
- System returns a Region of the image the Annotation is created within.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL | QualityDefectID | QualityDefectID |
|  | UnitID | UnitID of Visual Quality Defects for a specified image. |
| UNIT | UnitID | UnitID of a Visual Quality Defect. |
| UNIT_DOCUMENT | UnitID | UnitID of a Visual Quality Defect. |
|  | DocumentID | ID of the Document assigned to the Product. |
|  | Name | ImageName |
| UNIT_ANNOTATION | ID | Returned as UnitAnnotationID. |
|  | UnitID | UnitID of a parent record in QUALITY_DEFECT_VISUAL. |
|  | Annotation | Annotation text. |
|  | X | X coordinate of the Annotation. |
|  | Y | Y coordinate of the Annotation. |
