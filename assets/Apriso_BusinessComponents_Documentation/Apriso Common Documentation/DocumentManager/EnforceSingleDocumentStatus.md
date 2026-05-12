# EnforceSingleDocumentStatus

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** document, enforce, status

## Description

Change the Progress Status and Document Status for all other revisions of the document at the current Progress Status.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Yes | The ID of the document (from the DOCUMENT table). |
| Input | CurrentProgressStatus | Integer | Yes | The Progress Status used to search for other revisions of the DocumentID. |
| Input | NewProgressStatus | Integer | Yes | Change other revisions of the document to this Progress Status. |
| Input | NewDocumentStatus | Integer | Yes | Change other revisions of the document to this Document Status. |

## Validations

- The DocumentID must be provided and must be a valid document that exists. 
- The NewProgressStatus must be a valid Progress Status. 
- The NewDocumentStatus must be a valid Document Status.

## System Processing

- Updates all revisions of the document that are at the CurrentProgressStatus and updates the DocumentStatus and ProgressStatus to the NewProgressStatus and NewDocumentStatus.
