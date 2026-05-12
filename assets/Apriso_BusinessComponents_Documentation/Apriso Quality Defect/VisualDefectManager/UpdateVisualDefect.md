# UpdateVisualDefect

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Deprecated
**Keywords:** Quality Defect Tracking Image Visual Update

## Description

The purpose of this Business Component method is to update an existing record in the QUALITY_DEFECT_VISUAL_DETAIL table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectVisualDetailID | Integer | Yes | The ID of the existing details of the Visual Quality Defect. |
| Input | X | Integer | Yes | The new X coordinate of the defect. |
| Input | Y | Integer | Yes | The new Y coordinate of the defect. |
| Input | DefectAnnotation | Char | No | The new text annotation of the defect. |
| Input | Status | Integer | Yes | The new Status of the defect. |

## Validations

- The system validates that the record exists in the QUALITY_DEFECT_VISUAL_DETAIL table. 
- The system validates that the X and Y coordinates are greater than or equal to zero. 
- The system validates that a Progress Transition Rule that allows assignment of the given Status exists. The Progress Transition Rule should have the old Status as the source and the given Status as the destination. The BC uses the following mappings: 
 
- Status (0 - Open) -> Progress Status (30 - Open) 
- Status (1 - Corrected) -> Progress Status (31 - Corrected) 
- Status (2 - Closed) -> Progress Status (32 - Closed) 
- Status (3 - N/A) -> Progress Status (30 - Open)

## System Processing

- The system updates the record in the QUALITY_DEFECT_VISUAL_DETAIL table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL_DETAIL | ID | QualityDefectVisualDetailID |
|  | X | The X coordinate of the defect. |
|  | Y | The Y coordinate of the defect. |
|  | Annotation | DefectAnnotation |
|  | Status | Status |
|  | ProgressStatus | Status + 30 if Status is (0-Open, 1- Corrected, 2-Closed) otherwise sets ProgressStatus to (30 - Open). |
