# CompleteCountDocument

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

When a count has been completed, this Business Component method must be called to change the status of the count document to Completed. This BC removes all the count locks for this count document and prevents further counting under this document.
 

 **Note**: the document can be completed only when all the items (Inventory Count and Inventory Container) are completed, passed, or moved or have their status adjusted.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDocumentNumber | Char | Yes | The document to complete. |

## Validations

- The document can be completed if all the count rows are in the Completed, Passed, or Adjusted status.

## System Processing

- The document status is updated to Completed. 
- The count locks are deleted.

## History Recording in Production

The history is created with information containing the document number and the document status. The history conforms to the template defined in the XSD, FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController.CountDocument.xsd.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DOCUMENT | CountNumber | The inputted CountDocumentNumber (required). |
|  | CountStatus | 7 ("Completed") |
