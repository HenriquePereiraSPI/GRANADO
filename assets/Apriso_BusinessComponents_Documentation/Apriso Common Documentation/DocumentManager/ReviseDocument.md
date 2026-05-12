# ReviseDocument

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** revise, document

## Description

Creates a new revision of the document.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Yes | The ID of the document (from the DOCUMENT table). |
| Input | ReviseDescription | Char | Yes | A description of the revision. |

## Validations

- DocumentID must be a valid document. 
- Description length must be greater than 0 and cannot exceed 75 characters.

## System Processing

- Creates a new document with an auto-incremented revision. 
- LastRevBy, LastRevOn, and LastRevDesc will be updated. 
- Translation records will be copied to the new revision and the associated files will have the revision appended. 
- Equipment assignments will be copied to the new revision. 
- Document groups will be copied to the new revision.
