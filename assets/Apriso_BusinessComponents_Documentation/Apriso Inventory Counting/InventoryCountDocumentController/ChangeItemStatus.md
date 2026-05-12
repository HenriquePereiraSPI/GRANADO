# ChangeItemStatus

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to update the status of a count document by using the CountStatus provided as the Input. The supported values for the status are Counted and Recount. This BC changes the counting status of a given inventory, whereas the ChangeStatus BC changes the status of the entire count document.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryCountID | Integer | Yes | The Inventory Count header ID. |
| Input | ReasonCode | Char | No | The Reason Code of the item. |
| Input | CountStatus | Integer | No | The count status. |

## Validations

- The system validates that the count document number is specified and exists.  
- The system validates that the count status is specified and is Counted or Recount.

## System Processing

- The system updates the count document status using the count status provided.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| COUNT_DOCUMENT | CountStatus | CountStatus |
