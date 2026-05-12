# GetDocumentURLbyDocumentID_v2

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active

## Description

Gets the full URL location of a document.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | No | ID of the document (from DOCUMENT table). |
| Input | LanguageID | Integer | No | Language identification. |
| Output | fileURL | Char | No | The full URL to the document file. |

## Validations

If no file is found for the specified DocumentID and LanguageID, an empty URL is displayed.

## System Processing

Gets the URL of a document file from the database based on DocumentID and LanguageID.
