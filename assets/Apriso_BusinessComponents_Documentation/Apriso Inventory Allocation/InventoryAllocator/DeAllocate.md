# DeAllocate

**Category:** Apriso/Inventory/Allocation
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAllocator`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

The DeAllocate component works in the exact opposite way to Allocate. It decreases the quantity allocated in the WIP content and inventory tables. It cannot decrease more than allocated. It moves the quantities back to unallocated (QuantityOnHand bucket). Please refer to Allocate for complete description of table usages.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip Order No for which the inventory will be allocated. |
| Input | WipOrderType | Integer | Yes | Wip Order Type for which the inventory will be allocated. |
| Input | InventoryID | Integer | Yes | Inventory to be allocated to the Wip Order |
| Input | SerialNo | Char | No | Can be specified to allocate a specific serial. |
| Input | Container | Char | No | Can be specified to allocate from specific container, but still for the supplied inventoryID. |
| Input | Quantity | Decimal | No | Quantity to allocate. |
| Input | UomCode | Char | No | Uom code of input quantity. |

## Validations

System validates that allocations exist for the inputs provided.

## System Processing

- If quantity > 0, system converts the quantity to the default product uom. 
- If quantity < 0, system tries to de-allocate all records allocated for the provided inputs. 
- System loads all records that need to be de-allocated. 
- System de-allocates records.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY | QuantityAllocated |  |
| INVENTORY_CONTAINER | QuantityAllocated |  |
| WIP_ORDER_CONTENT | New record or update QuantityToPick |  |
| WIP_ORDER__CONTENT_SERIAL | New Record |  |
| WIP_ORDER_CONTAINER | New record or update QuantityToPick |  |
