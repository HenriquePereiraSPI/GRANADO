# AssignImageToProduct

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.Maintenance.BusinessRules.Quality.ImageManager`
**Assembly:** `FlexNet.Maintenance.BusinessRules.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Assign

## Description

This Business Component method assigns a document with a bitmap image to an existing product.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Yes | The ID of the document containing a bitmap image. |
| Input | ProductID | Integer | Yes | The ID of the product to which the document is assigned. |
| Input | UserReference | Char | No | The user reference field. Used to sort images. |
| Input | ImageName | Char | Yes | The name of the image describing its purpose. |
| Input | ImageDescription | Char | No | The localizable description of the image. |
| Output | UnitDocumentID | Integer | Yes | The ID of the newly created record. |

## Validations

- The system validates that the document exists. 
- The system validates that the product exists. 
- The system validates that the ImageName field is not empty and does not exist among images already assigned to the product.

## System Processing

- The system retrieves the record from the PRODUCT table using ProductID. 
- The system checks if UnitID exists for the product. If not, the system creates a new record in the UNIT table and updates PRODUCT.UnitID with the new value. 
- The system creates a new record in UNIT_DOCUMENT using the Input values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCT | UnitID | The UnitID of the Product record. |
| UNIT_DOCUMENT | UnitID | The UnitID referencing the Product. |
|  | DocumentID | DocumentID |
|  | Name | ImageName |
|  | UserReference | UserReference |
| TEXT_TRANSLATION | Medium | ImageName |
|  | Extended | ImageDescription |
