# CheckOutInDocument

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** checkout, checkin, document

## Description

Checks a document in or out. This will download a file to the user's local computer or update a file from the user's local computer.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Yes | The ID of the document (from the DOCUMENT table). |
| Input | LanguageID | Integer | Yes | The language of the document translation. |
| Input | URLLocation | Char | Yes | The URL location of the file to be checked in. |
| Input | CheckOut | Boolean | Yes | Flag that specifies if the file is being checked in or checked out. If true, the file is being checked out. |

## Validations

- DocumentID must be a valid and Active document. 
- If CheckOut is false, URLLocation must be a valid file location. 
- If CheckOut is true, LanguageID must be valid. 
- Validate that the source file exists for the translation. 
- If CheckOut is false, validate that the checked in file has the same name as the translation file.

## System Processing

- If CheckOut is false, LockedLanguageID and EditLockBy are set to null and LastEditBy and LastEditOn are updated. 
- If CheckOut is true, LockedLanguageID and EditLockBy are set.
