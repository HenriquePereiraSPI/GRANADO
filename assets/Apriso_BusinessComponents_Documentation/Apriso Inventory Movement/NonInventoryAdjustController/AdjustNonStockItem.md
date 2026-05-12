# AdjustNonStockItem

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.NonInventoryAdjustController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to generate an inventory XML for history and to upload it with no inventory impact. It is used as an example to deal with receiving products that are not managed in inventory.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TransactionCode | Char | Yes | The transaction code defined in the TRANSACTION_ table used to determine the inventory change. |
| Input | TaskID | Integer | No | The ID of the task for which the adjust is performed. |
| Input | WipOrderNo | Char | Yes | The WIP Order number for which the adjust is performed. |
| Input | WipOrderType | Integer | Yes | The WIP Order type of the order for which the adjust is performed. |
| Input | ProductInventoryType | Integer | Yes | The inventory type of the product that is being adjusted. |
| Input | OrderNo | Char | No | The order number for which the adjust is performed. Optional based on the transaction code requirements. |
| Input | OrderType | Integer | No | The order type of the order for which the adjust is performed. Optional based on the transaction code requirements. |
| Input | OrderLineNo | Integer | No | The order line number of the order for which the adjust is performed. Optional based on the transaction code requirements. |
| Input | Quantity | Decimal | Yes | The quantity to adjust for bulk inventory adjustment. |
| Input | UomCode | Char | Yes | The UOM code of the product's quantity being adjusted. |
| Input | ReasonCode | Char | No | The Reason Code for the transaction. Optional based on the transaction code requirements. |
| Input | Comment | Char | No | The comment for the transaction. Optional based on the transaction code requirements. |
| Input | ProjectID | Integer | No | The project ID for the transaction. Optional based on the transaction code requirements. |
| Input | GLAccountID | Integer | No | The GL account ID for the transaction. Optional based on the transaction code requirements. |
| Input | Department | Char | No | The department for the transaction. Optional based on the transaction code requirements. |
| Input | PostingDate | DateTime | No | The date and time the transaction took place. Generally will be the current date and time. |
| Output | InventoryDocument | Char | No | The Output to identify the transaction. Generated using the Sequence Provider using name = "INVENTORY_DOCUMENT". |

## Validations

- This BC follows the same rules as the Adjust BC to retrieve the settings (mandatory fields) by retrieving data from the TRANSACTION_ and TRANSACTION_PRODUCT_INV_TYPE tables. 
- As the product is not managed in inventory, it requires no Lot Number, no Serial Number, no Container, and no location. 
- The XML is usually converted in an Idoc that will update the purchase order status in the ERP. 
- This BC is usually invoked with reference to a WIP Order (child of the PO), a project, a GL account, a department, etc. depending on the imputation required in the ERP. 
- The reference to the TaskID is required only for traceability purposes.

## System Processing

The system creates a record in the ORDER_DETAIL table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_CONTENT | ID | PK |
|  | WipOrderNo | From the Input. |
|  | WipOrderType | From the Input. |
|  | OprSequenceNo | From the Input. |
|  | UomCode | From the Input. |
|  | QuantityProcessed | From the Input. |
|  | OrderQuantityProcessed | From the Quantity Input converted to OrderUom. |
