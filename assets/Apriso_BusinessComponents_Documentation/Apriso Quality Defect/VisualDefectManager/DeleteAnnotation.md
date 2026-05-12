# DeleteAnnotation

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Remove Delete Annotation

## Description

The purpose of this Business Component method is to remove an Annotation record from the UNIT_ANNOTATION table (related to a Visual Quality Defect or to other entity).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitAnnotationID | Integer | Yes | The ID of an existing Unit Annotation. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| DisableRelatedRecordsDeletion | Boolean | This flag disables deletion of records from the QUALITY_DEFECT_VISUAL, UNIT_DOCUMENT and UNIT tables. The UNIT_ANNOTATION or QUALITY_DEFECT_VISUAL_DETAIL tables are not queried either. |

## Validations

- The system validates that the record exists in the UNIT_ANNOTATION table.

## System Processing

- The system deletes the record from the UNIT_ANNOTATION table.  
- If the DisableRelatedRecordsDeletion flag is not set to TRUE, the system checks if other UNIT_ANNOTATION or QUALITY_DEFECT_VISUAL_DETAIL records exist for the parent QUALITY_DEFECT_VISUAL table. If not, the system also deletes related QUALITY_DEFECT_VISUAL, UNIT_DOCUMENT and UNIT records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_ANNOTATION | ID | UnitAnnotationID |
|  | UnitID | UnitID of a parent record in QUALITY_DEFECT_VISUAL. |
| QUALITY_DEFECT_VISUAL | UnitID | Deleted record if there are no other child records. |
| UNIT | UnitID | UnitID of a Visual Quality Defect. Deleted together with a parent record. |
| UNIT_DOCUMENT | UnitID | UnitID of a Visual Quality Defect. Deleted together with a parent record. |
