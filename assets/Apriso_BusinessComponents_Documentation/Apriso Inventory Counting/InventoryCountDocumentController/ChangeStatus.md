# ChangeStatus

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to update the status of an Inventory Count record in order to allow a count to be reopened, recounted, or failed. The BC cannot be used to close, cancel, or complete a count. This BC changes the status of the entire count document, whereas ChangeItemStatus changes the counting status of a given inventory only.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DocumentNumber | Char | Yes | The document number to change the status for. |
| Input | ReasonCode | Char | No | The Reason Code of the item. |
| Input | CountStatus | Integer | No | The count status. |

## Validations

- The system validates that the Inventory Count record exists in the INVENTORY_COUNT table for the inputted InventoryCountID. 
- The system validates the inputted CountStatus against the COUNT_STATUS table. The inputted CountStatus value can only be In Progress (CountStatus=3), Recount (CountStatus=10), or Failed (CountStatus=5).

## System Processing

- If there are any children records (in the INVENTORY_CONTAINER and INVENTORY_SERIAL tables), they are updated to the inputted status.  
- The count record is updated to the inputted status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY_COUNT | ID | The inputted InventoryCountID (required). |
|  | CountStatus | The inputted CountStatus (required). |
|  | RecountNumber | Computed (see System Processing). |
|  | LastQuantityCounted | Computed (see System Processing). |
|  | LastCountDate | Computed (see System Processing). |
|  | LastEmployeeID | User.ID |
| TEXT_TRANSLATION | Extended | The inputted ReasonCode (required). |
