# SoftAllocate

**Category:** Apriso/Inventory/Allocation
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAllocator`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This method is functionally identical to Allocate, but that allocations exist only to the inventory quantity level. E.g. an allocation of 10 serials only stores the quantity, not 10 individual serial allocations, so any serial may be processed for the allocation. At process time (e.g. pick) the Allocate method may be used to hard-allocate the specific serials to be used. To hard-allocate a soft allocation, pass the hard allocation details (serial number) with a quantity of 0.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip Order No for which the inventory will be allocated. |
| Input | WipOrderType | Integer | Yes | Wip Order Type for which the inventory will be allocated. |
| Input | InventoryID | Integer | Yes | Inventory to be allocated to the Wip Order |
| Input | Quantity | Decimal | No | Quantity to allocate. |
| Input | UomCode | Char | No | Uom code of input quantity. |
| Output | UnallocatedQuantity | Decimal | No | Quantity unallocated due to insufficient inventory. |

## Validations

- System validates that wip order exists. 
- System validates that inventory ID exists.

## System Processing

- System loads all records to be allocated. 
- System creates allocation records in wip_order_content, wip_order_content_serial, wip_order_container.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY | QuantityAllocated |  |
| INVENTORY_CONTAINER | QuantityAllocated |  |
| WIP_ORDER_CONTENT | New record or update QuantityToPick |  |
| WIP_ORDER__CONTENT_SERIAL | New Record |  |
| WIP_ORDER_CONTAINER | New record or update QuantityToPick |  |
