# ChangeCountStatus

**Category:** Apriso/Inventory/Counting
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryCountDocumentController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Deprecated

## Description

This Business Component method is used to retrieve the EmployeeID kept in the session context and invokes the ChangeCountStatus_v93 BC method to pass the retrieved ID.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryCountID | Integer | Yes | The inventory count header ID. |
| Input | ReasonCode | Char | No | The Reason Code of the item. |
| Input | CountStatus | Integer | No | The count status. |
| Input | ProductID | Integer | No | The product's ID number. |
| Input | SerialNo | Char | No | The Serial Number for the inventory involved. |
| Input | ContainerNo | Char | No | The number of the Container involved. |

## System Processing

- The system creates a record in the ORDER_DETAIL table.
