# AssignImageToGroup

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.Maintenance.BusinessRules.Quality.ImageManager`
**Assembly:** `FlexNet.Maintenance.BusinessRules.dll`
**Status:** Active
**Keywords:** Quality Defect Tracking Image Visual Assign

## Description

This Business Component method is used to assign a document with a bitmap image to an existing group.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Yes | The ID of the document containing a bitmap image. |
| Input | Group | Char | Yes | The name of the group to which the document is assigned. |
| Input | GroupType | Short | Yes | The type of group to which the document is assigned. |
| Input | GroupClassID | Integer | Yes | The ID of the group class to which the document is assigned. |
| Input | UserReference | Char | No | The user reference field. Used to sort the images. |
| Input | ImageName | Char | Yes | The name of the image describing its purpose. |
| Input | ImageDescription | Char | No | The localizable description of the image. |
| Output | UnitDocumentID | Integer | Yes | The ID of the newly created record. |

## Validations

- The system validates that the document exists. 
- The system validates that the group exists. 
- The system validates that ImageName is not empty and does not exist among images already assigned to the group.

## System Processing

- The system retrieves the record from the GROUP_ table using Group, GroupType, and GroupClassID. 
- The system checks if UnitID exists for the group. If not, the system creates a new record in the UNIT table and updates GROUP_.UnitID with a new value. 
- The system creates a new record in the UNIT_DOCUMENT table using the Input values.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GROUP_ | UnitID | The UnitID of the group record. |
| UNIT_DOCUMENT | UnitID | The UnitID referencing the group. |
|  | DocumentID | DocumentID |
|  | Name | ImageName |
|  | UserReference | UserReference |
| TEXT_TRANSLATION | Medium | ImageName |
|  | Extended | ImageDescription |
