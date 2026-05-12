# RecalculateVisualQualityDefectsAssignment

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectRecalculator`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Active

## Description

This Business Component method recalculates assignments of Visual Quality Defects to the Regions in which the defects are actually placed. In some situations, a Visual Quality Defect may be assigned to a Region which was moved or replaced by another Region. In this case, even though the Visual Quality Defect is visually placed in the right Region, its assignment is incorrect. This Business Component method does the following:
 
 
- Searches for the Visual Quality Defects which comply to the search criteria (that is, assignment to a specified Product, current assignment to a specified Region, specified Reason Code, or reported in a given timespan). 
- Finds Regions to which they should be assigned. 
- Assigns Visual Quality Defects to proper Regions.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductNo | Char | No | The Product number. |
| Input | RegionName | Char | No | The Region name of the existing Visual Quality Defects. |
| Input | ReasonCode | Char | No | The Reason Code. |
| Input | DefectCreatedOnFrom | DateTime | No | The start of the period in which the Visual Quality Defects that are to be considered in the search were created. |
| Input | DefectCreatedOnTo | DateTime | No | The end of the period in which the Visual Quality Defects that are to be considered in the search were created. |
| Output | ModifiedRowsCount | Integer | No | The number of modified rows. |

## Validations

- If both the DefectCreatedOnFrom and DefectCreatedOnTo inputs are provided, the system validates that DefectCreatedOnFrom is lower (earlier) than or equal to DefectCreatedOnTo.

## System Processing

- The system finds Visual Quality Defects that comply with the provided criteria. 
- For each Visual Quality Defect found, a matching Region is found in the document on which the Visual Quality Defect was reported. 
- The Visual Quality Defect is assigned to the proper Region found.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL_DETAIL | UnitRegionID | The ID of the Region found by the BC. |
