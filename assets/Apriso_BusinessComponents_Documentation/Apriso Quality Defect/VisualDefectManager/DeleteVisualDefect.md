# DeleteVisualDefect

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Remove Delete

## Description

The purpose of this Business Component method is to delete an existing record from the QUALITY_DEFECT_VISUAL_DETAIL table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | QualityDefectVisualDetailID | Integer | Yes | The ID of the existing details of the Visual Quality Defect. |

## Validations

- The system validates that the record exists in the QUALITY_DEFECT_VISUAL_DETAIL table.

## System Processing

- The system deletes the record from the QUALITY_DEFECT_VISUAL_DETAIL table. 
- The system checks if other records exist in the QUALITY_DEFECT_VISUAL_DETAIL or UNIT_ANNOTATION tables for the parent QUALITY_DEFECT_VISUAL table. If not, the system also deletes the records from the QUALITY_DEFECT_VISUAL, UNIT_DOCUMENT and UNIT tables. 
- The system decreases the number of occurrences in the QUALITY_DEFECT table (if the current value is greater than zero).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| QUALITY_DEFECT_VISUAL_DETAIL | ID | QualityDefectVisualDetailID |
|  | QualityDefectVisualID | The ID of the parent record in the QUALITY_DEFECT_VISUAL table. |
| QUALITY_DEFECT_VISUAL | ID | The deleted record if there are no other child records. |
|  | UnitID | UnitID of the Visual Quality Defects for the specified image. |
| UNIT | UnitID | UnitID of the Visual Quality Defect. Deleted together with the parent record. |
| UNIT_DOCUMENT | UnitID | UnitID of the Visual Quality Defect. Deleted together with the parent record. |
| QUALITY_DEFECT | NoOfDefects | Decreased after removing the Visual Quality Defects. |
