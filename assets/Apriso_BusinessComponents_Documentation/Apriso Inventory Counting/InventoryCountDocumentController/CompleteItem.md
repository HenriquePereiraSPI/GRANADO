# CompleteItem

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to change the count status of a product to Completed (=7) within a Count Document. This is for use by a supervisor, mainly to prevent a user from counting a product. There is no use of count strategies or inventory corrections. Completing the Count Document with the actual count component is highly recommended.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryCountID | Integer | Yes | The Inventory Count Document to be closed. |
| Input | ReasonCode | Char | No | The reason for closing the header. |

## Validations

- The status of the counted item can be anything but Completed. 
- A Reason Code is required to complete a counting row in a status not equal to Pass or Adjusted.

## System Processing

- The system changes the status of the INVENTORY_COUNT records to Completed (=7).

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY_COUNT | ID | The inputted InventoryCountID (required). |
|  | CountStatus | The inputted CountStatus (required). |
| TEXT_TRANSLATION | Extended | The inputted ReasonCode (required). |
