# ReportVisualDefect

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Deprecated
**Keywords:** Quality Defect Tracking Image Visual Assign Remove

## Description

The purpose of this Business Component method is to create a Visual Quality Defect for an existing Quality Defect.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectID | Integer | Yes | The ID of an existing Quality Defect. |
| Input | ImageName | Char | Yes | The name of the image assigned to the Product. |
| Input | X | Integer | Yes | The X coordinate of the Visual Quality Defect. |
| Input | Y | Integer | Yes | The Y coordinate of the Visual Quality Defect. |
| Input | UnitRegionID | Integer | Yes | The ID of the Region the Visual Quality Defect is reported within, zero if it is not in a Region. |
| Input | Annotation | Char | No | Text annotation of the Visual Quality Defect. |
| Input | Status | Integer | Yes | The status of the Visual Quality Defect. |
| Output | QualityDefectVisualDetailID | Integer | Yes | The ID of the newly created record. |
| Output | UnitRegionName | Char | Yes | The name of the Region the Visual Quality Defect is reported within. |

## Validations

- The system validates that the Quality Defect exists. 
- The system validates that the X and Y coordinates are greater than or equal to zero.  
- The system validates that Product is assigned to the Quality Defect – directly or through a WIP Order or Disposition. 
- The System validates that an image with the given ImageName is assigned to the Product. 
- The system validates that for the specified Quality Defect there is a record in the QUALITY_DEFECT_VISUAL table, which has the same Image Name and DocumentID in the UNIT_DOCUMENT table. If yes, the system validates that the record (point) with the same X and Y coordinates already exists in the QUALITY_DEFECT_VISUAL_DETAIL table. 
- The system validates that a Progress Transition Rule that allows assignment of the given Status exists. The Progress Transition Rule should have null as the source and the given Status as the destination. The BC uses the following mappings: 
 
- Status (0 - Open) -> Progress Status (30 - Open) 
- Status (1 - Corrected) -> Progress Status (31 - Corrected) 
- Status (2 - Closed) -> Progress Status (32 - Closed) 
- Status (3 - N/A) -> Progress Status (30 - Open)

## System Processing

- The system creates new records in the QUALITY_DEFECT_VISUAL, UNIT and UNIT_DOCUMENT tables when the Visual Quality Defect is reported for the first time against the specified Quality Defect and Image Name. 
- The system creates a new record in the QUALITY_DEFECT_VISUAL_DETAIL table. 
- The system increases the number of occurrences in the QUALITY_DEFECT table. 
- The system returns the name of the image Region which the Visual Quality Defect is reported within. 
- The system returns the ID of the new QUALITY_DEFECT_VISUAL_DETAIL row.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL | QualityDefectID | QualityDefectID |
|  | UnitID | UnitID of the Visual Quality Defects for the specified image. |
| UNIT | UnitID | UnitID of the Visual Quality Defect. |
| UNIT_DOCUMENT | UnitID | UnitID of the Visual Quality Defect. |
|  | DocumentID | The ID of the Document assigned to the Product. |
|  | Name | ImageName |
| QUALITY_DEFECT_VISUAL_DETAIL | QualityDefectVisualID | The ID of the parent record in the QUALITY_DEFECT_VISUAL table. |
|  | X | The X coordinate of the defect. |
|  | Y | The Y coordinate of the defect. |
|  | Annotation | Annotation |
|  | Status | Status |
|  | ProgressStatus | Status + 30 if Status is (0-Open, 1- Corrected, 2-Closed) otherwise sets ProgressStatus to (30 - Open). |
| QUALITY_DEFECT | NoOfDefects | Increased after adding a new Visual Quality Defect. |
