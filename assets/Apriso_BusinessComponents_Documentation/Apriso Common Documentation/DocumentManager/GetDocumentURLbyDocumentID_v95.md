# GetDocumentURLbyDocumentID_v95

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active

## Description

Returns URL of a document file

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | No | ID of the document (from DOCUMENT table) |
| Input | LanguageID | Integer | No | Language identification |
| Output | Value | Char | No | URL to the document file |

## Validations

If no file was found for specified DocumentID and LanguageID parameters empty URL is displayed.

## System Processing

Gets URL of a document file from database based on DocumentID and LanguageID parameters.
