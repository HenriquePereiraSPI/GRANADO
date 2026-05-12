# UnAssignImageFromProduct

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.Maintenance.BusinessRules.Quality.ImageManager`
**Assembly:** `FlexNet.Maintenance.BusinessRules.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Assign Remove

## Description

This Business Component method removes the assignment between the Product and the Document with a bitmap image.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitDocumentID | Integer | Yes | ID of the Unit Document record to delete. |

## Validations

- System validates if UnitDocumentID exists. 
- System validates if there aren't any Visual Quality Defects reported on the image. 
 
- If there are Visual Quality Defects reported on the image, a message is displayed to the user and the image assignment is not removed.

## System Processing

- System removes the record from the UNIT_DOCUMENT table using the input parameter.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_DOCUMENT | UnitDocumentID | UnitDocumentID |
