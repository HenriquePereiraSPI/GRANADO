# RevertDocument

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** revert, document

## Description

Reverts a document from being checked out.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentID | Integer | Yes | The ID of the document (from the DOCUMENT table). |

## Validations

- DocumentID must be a valid document.

## System Processing

- Sets the EditLockBy column to null.
