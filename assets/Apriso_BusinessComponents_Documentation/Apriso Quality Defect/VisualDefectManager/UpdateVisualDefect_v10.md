# UpdateVisualDefect_v10

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Update

## Description

The purpose of this Business Component method is to update an existing record in the QUALITY_DEFECT_VISUAL_DETAIL table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectVisualDetailID | Integer | Yes | The ID of the existing details of the Visual Quality Defect. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| ComponentProductID | Integer | The new Product ID of Component for which defect was created. |
| ComponentSerialNo | Char | The new Serial No of Component for which defect was created. |
| ComponentX | Decimal | The new X coordinate of the defect in Component context. |
| ComponentY | Decimal | The new Y coordinate of the defect in Component context. |
| ComponentZ | Decimal | The new Z coordinate of the defect in Component context. |
| DefectAnnotation | Char | The new text annotation of the defect. |
| InstancePath | Char | The new Path that determines Component in the 3D model for which defect was created. |
| ProgressStatus | Integer | The new Progress Status of the defect. |
| UnitRegionID | Integer | The ID of the Region of the Visual Quality Defect that corresponds to the new coordinates (zero if it is not in a Region). The parameter should be used only for 2D Visual Quality Defects. |
| X | Decimal | The new X coordinate of the defect. |
| Y | Decimal | The new Y coordinate of the defect. |
| Z | Decimal | The new Z coordinate of the defect. |

## Validations

- The system validates that the record exists in the QUALITY_DEFECT_VISUAL_DETAIL table. 
- The system validates that a Progress Transition Rule that allows assignment of the given Progress Status exists. The Progress Transition Rule should have the old Progress Status as the source and the given Progress Status as the destination. 
-  If dynamic input Z is not specified then the system validates that the provided dynamic inputs X and Y coordinates are greater than or equal to zero.  
-  Dynamic inputs ComponentX, ComponentY and ComponentZ must be provided together.  
-  If dynamic input ComponentX is specified then Z is required.  
-  Dynamic inputs Z and InstancePath must be provided together.  
-  If dynamic input ComponentSerialNo is specified and has value then dynamic input ComponentProductID must be specified and also have value.

## System Processing

- The system updates the record in the QUALITY_DEFECT_VISUAL_DETAIL table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL_DETAIL | ID | QualityDefectVisualDetailID |
|  | X | The X coordinate of the defect. |
|  | Y | The Y coordinate of the defect. |
|  | Annotation | DefectAnnotation (if the dynamic input is specified). If the input is specified and the value is the 'Null' or an empty string, then the field is set to 'Null'. |
|  | ProgressStatus | ProgressStatus |
|  | UnitRegionID | The ID of the Region of the Visual Quality Defect that corresponds to the X and Y coordinates or DB Null if UnitRegionID is less or equal to 0. |
|  | Z | Z coordinate of the defect. |
|  | ComponentX | X coordinate of the defect in Component context. |
|  | ComponentY | Y coordinate of the defect in Component context. |
|  | ComponentZ | Z coordinate of the defect in Component context. |
|  | ProductID | ProductID of the defect's Component or DB Null if ComponentProductID is less or equal to 0. |
|  | SerialNo | SerialNo of the defect's Component or DB Null if ComponentSerialNo is an empty string. |
|  | InstancePath | Path that determines Component in the 3D model. |
