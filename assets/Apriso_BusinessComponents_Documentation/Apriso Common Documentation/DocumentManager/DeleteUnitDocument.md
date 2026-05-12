# DeleteUnitDocument

**Category:** Apriso/Common/Documentation
**Class:** `FlexNet.BusinessFacade.Codes.DocumentManager`
**Assembly:** `FlexNet.BusinessFacade.Codes`
**Status:** Active
**Keywords:** document, link, unit, unlink, delete

## Description

The purpose of this Business Component method is to remove a link between a Document and a Unit. The method deletes the record from the UNIT_DOCUMENT table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitDocumentID | Integer | Yes | The ID of the record to be deleted. |

## Validations

- The system validates that the provided UnitDocumentID exists.

## System Processing

- The system deletes the record from the UNIT_DOCUMENT table based on the provided UnitDocumentID. Related records in the TEXT_TRANSLATION table are also deleted.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_DOCUMENT | ID | UnitDocumentID |
