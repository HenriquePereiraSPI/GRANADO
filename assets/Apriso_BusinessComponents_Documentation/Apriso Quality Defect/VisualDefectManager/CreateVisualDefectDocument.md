# CreateVisualDefectDocument

**Category:** Apriso/Quality/Defect
**Class:** `FlexNet.BusinessRules.Quality.VisualQuality.VisualDefectManager`
**Assembly:** `FlexNet.BusinessRules.Quality2.dll`
**Status:** Active
**Keywords:** Quality Defect

## Description

This Business Component method creates a Document with an image showing Visual Quality Defect Details based on a source image and a list of defects.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Yes | The ID of an existing Document that contains the source image. |
| Input | Width | Integer | Conditional | Created image width in pixels. |
| Input | Height | Integer | Conditional | Created image height in pixels. |
| Input | QualityDefectVisualDetailIDs | ListofInteger | Conditional | List of Visual Quality Defect Detail IDs. The system does not validate if the QualityDefectVisualDetailIDs correspond with the DocumentID. |
| Output | CreatedDocumentID | Integer | Yes | ID of created Document. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| FileFormat | Char | The format of the created image. Supported values: jpeg, png, bmp, gif, tiff. |

## Validations

- The system validates that Width is not negative. 
- The system validates that Height is not negative. 
- The system validates that DocumentID is specified. 
- The system validates that DocumentID exists and Document contains an image. 
- The system validates that icon for every Quality Defect's Severity is specified. 
- The system validates that icon for every Quality Defect's ProgressStatus is specified. 
- If FileFormat is specified then System validates that FileFormat is one of the supported values.

## System Processing

- The system calculates the created image size depending on inputted Width and Height: 
 
- If Width and Height are specified, these Inputs will define the size of the created image. 
- If Width is not specified, created image will be resized with scale (inputted Height divided by the source image height). 
- If Height is not specified, created image will be resized with scale (inputted Width divided by the source image width). 
- If Width and Height are not specified, the created image will be the same size as the source image.  
 
- The System creates an image on the server that contains the source image and draws Visual Quality Defect Details on it. 
- The system creates a Document with single Document Translation that refers to the created image. 
- The system returns ID of the created Document. 
- If FileFormat is not specified, the format of the created image will be png.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DOCUMENT | Name | Name is concatenation of QualityDefect_ and generated identifier. |
|  | Revision | 1.0 |
|  | FileFormatID | ID of destination file format. |
| DOCUMENT_TRANSLATION | DocumentID | Identifier of created Document. |
|  | LanguageID | Current employee's language identifier. |
|  | URLLocation | Created image file URL. |
