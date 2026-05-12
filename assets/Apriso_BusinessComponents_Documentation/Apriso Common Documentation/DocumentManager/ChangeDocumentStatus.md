# ChangeDocumentStatus

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** document, changestatus

## Description

Changes the status of the document.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | documentID | Integer | Yes | The ID of the document (from the DOCUMENT table) |
| Input | destDocumentStatus | Integer | Yes | The status to change the document to (from the DOCUMENT_STATUS table) |

## Validations

destDocumentStatus must be between 1 and 4 (Unproven, Proven, Obsolete, New).
