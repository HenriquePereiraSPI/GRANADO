# DeleteDocument

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** document, delete

## Description

The purpose of this Business Component method is to delete a Document from the Document Repository together with Document Translations and the files (if the files are not used by other Document Translations).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Yes | The ID of the Document to be deleted. |

## Validations

- The system validates that the DocumentID is provided and it exists.

## System Processing

- The system deletes the DOCUMENT record using the specified DocumentID. The child records in DOCUMENT_TRANSLATION, TEXT and TEXT_TRANSLATION tables are also deleted.  
- The files pointed by the Document Translation URL Locations are deleted, but only if they are not used by any other Document Translations.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DOCUMENT | ID | Record to be deleted based on inputted DocumentID. |
| DOCUMENT_TRANSLATION | DocumentID | Records to be deleted based on inputted DocumentID. |
| TEXT | ID | Record to be deleted based on DOCUMENT.TextID. |
| TEXT_TRANSLATION | TextID | Records to be deleted based on DOCUMENT.TextID. |
