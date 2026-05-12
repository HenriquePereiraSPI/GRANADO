# CancelCountDocument

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to cancel a count document and to delete the locks. This is used primarily if the counting locks generated for the count document are locking out another (more important) count document. This cancellation can be done with all the statuses except Completed.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CountDocumentNumber | Char | Yes | Document to cancel |

## System Processing

- The system updates the status of the document to 9 (= Cancelled). 
- The system deletes the count's locks.

## History Recording in Production

The history is created with information containing the document number and document status. The history conforms to the template defined in the XSD (FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController.CountDocument.xsd).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DOCUMENT | DocumentNumber | The inputted CountDocumentNumber. |
|  | CountStatus | 9 (=Cancelled) |
