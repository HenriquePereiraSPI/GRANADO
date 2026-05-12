# ChangeDocumentProgressStatus

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** document

## Description

Changes the Progress Status of the document.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | documentID | Integer | Yes | The ID of the document (from the DOCUMENT table) |
| Input | destProgressStatus | Integer | Yes | The Progress Status to change the document to (from the PROGRESS_STATUS table) |

## Validations

destDocumentStatus must be a valid Progress Status ID. Unproven (43), Proven (44), and Obsolete (45) are available by default, but other Progress Statuses can be added.
