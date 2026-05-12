# ReportVisualDefectForDocument

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Assign Remove

## Description

This Business Component method creates a Visual Quality Defect for an existing Quality Defect. The Defect can be reported on any existing Image, in particular on any Image assigned to a Product or any Groups it belongs to. It is not required to have the Image assigned to report Visual Quality Defects. The Image is represented by DocumentID and ImageName where the Image Name can be any contextual information, for example the Name of Image assigned to the Product or Group.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | Yes | The ID of an existing Quality Defect. |
| Input | DocumentID | Integer | Yes | The Document ID to report the Visual Quality Defect against. In particular it could be the Document ID of the image assigned to the Product or Group. |
| Input | X | Decimal | Yes | The X coordinate of the Visual Quality Defect. |
| Input | Y | Decimal | Yes | The Y coordinate of the Visual Quality Defect. |
| Input | Annotation | Char | No | Text annotation of the Visual Quality Defect. |
| Input | ProgressStatus | Integer | Yes | The Progress Status of the Visual Quality Defect. |
| Output | QualityDefectVisualDetailID | Integer | Yes | The ID of the newly created record. |
| Output | UnitRegionName | Char | Yes | The name of the Region the Visual Quality Defect is reported within. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ComponentProductID | Integer | The Product ID of Component for which defect was created. |
| ComponentSerialNo | Char | The Serial No of Component for which defect was created. |
| ComponentX | Decimal | The X coordinate of the defect in Component context. |
| ComponentY | Decimal | The Y coordinate of the defect in Component context. |
| ComponentZ | Decimal | The Z coordinate of the defect in Component context. |
| ImageName | Char | Contextual information to be stored under the reported Visual Quality Defect. In particular it could be the name of Image assigned to the Product or Group. |
| InstancePath | Char | The Path that determines Component in the 3D model for which defect was created. |
| QualityDefectVisualDetailType | Integer | The type of detail reported on a 3D model: 1 - Defect, 2 - Annotation. |
| UnitRegionID | Integer | The ID of the Region of the Visual Quality Defect that corresponds to the coordinates (zero if it is not in a Region). The parameter should be used only for 2D Visual Quality Defects. |
| Z | Decimal | The Z coordinate of the defect. |

## Validations

- The system validates that the Quality Defect exists. 
- The system validates that the Document exists. 
- The system validates that ProgressStatus is specified. 
- The system validates that for the specified Quality Defect there is a record in the QUALITY_DEFECT_VISUAL table, which has the same Image Name and DocumentID in the UNIT_DOCUMENT table. 
- The system validates that a Progress Transition Rule that allows assignment of the given Progress Status exists. The Progress Transition Rule should have null as the source and the given Progress Status as the destination. 
-  If dynamic input Z is not specified then the system validates that the provided X and Y coordinates are greater than or equal to zero.  
-  Dynamic inputs ComponentX, ComponentY and ComponentZ must be provided together.  
-  If dynamic input ComponentX is specified then dynamic input Z is required.  
-  Dynamic inputs Z and InstancePath must be provided together.  
-  If dynamic input ComponentSerialNo is specified and has value, then dynamic input ComponentProductID must be specified and also have value.  
- If dynamic input QualityDefectVisualDetailType is provided, the detail type is set to either 1 - Defect or 2 - Annotation.

## System Processing

- The system creates new records in the QUALITY_DEFECT_VISUAL, UNIT and UNIT_DOCUMENT tables if they do not exist for the given DocumentID and ImageName (the same DocumentID and image Name in the UNIT_DOCUMENT table). 
- The system creates a new record in the QUALITY_DEFECT_VISUAL_DETAIL table. 
- The system increases the number of occurrences in the QUALITY_DEFECT table if QualityDefectVisualDetailType is equal to 1. 
- The system returns the name of the image Region which the Visual Quality Defect is reported within. 
- The system returns the ID of the new QUALITY_DEFECT_VISUAL_DETAIL row. 
-  If the ImageName value is not specified (Dynamic Input does not exist or an empty string is provided), the image name is retrieved from the Name column of the DOCUMENT table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL | QualityDefectID | QualityDefectID |
|  | UnitID | UnitID of the Visual Quality Defects for the specified Image Name and DocumentID. |
| UNIT | UnitID | UnitID of the Visual Quality Defect. |
| UNIT_DOCUMENT | UnitID | UnitID of the Visual Quality Defect. |
|  | DocumentID | DocumentID |
|  | Name | ImageName or Name retrieved from the DOCUMENT table. |
| QUALITY_DEFECT_VISUAL_DETAIL | QualityDefectVisualID | The ID of the parent record in the QUALITY_DEFECT_VISUAL table. |
|  | X | The X coordinate of the defect. |
|  | Y | The Y coordinate of the defect. |
|  | Annotation | Annotation |
|  | ProgressStatus | ProgressStatus |
|  | Z | The Z coordinate of the defect. |
|  | ComponentX | The X coordinate of the defect in Component context. |
|  | ComponentY | The Y coordinate of the defect in Component context. |
|  | ComponentZ | The Z coordinate of the defect in Component context. |
|  | ProductID | ProductID of the defect's Component or DB Null if ComponentProductID is less or equal to 0 or not provided. |
|  | SerialNo | SerialNo of the defect's Component or DB Null if ComponentSerialNo is an empty string or not provided. |
|  | InstancePath | Path that determines Component in the 3D model. |
|  | QualityDefectVisualDetailType | Inputted QualityDefectVisualDetailType or 1 - Defect if dynamic input not provided |
|  | UnitRegionID | The ID of the Region of the Visual Quality Defect that corresponds to the X and Y coordinates or DB Null if UnitRegionID is less or equal to 0 or not provided. |
| QUALITY_DEFECT | NoOfDefects | Increased after adding a new Visual Quality Defect if QualityDefectVisualDetailType is equal to 1. |
