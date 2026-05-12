# Allocate

**Category:** Apriso/Inventory/Allocation
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAllocator`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

This Business Component method is used to allocate quantities of non-allocated inventory to a WIP Order. This component impacts the following tables:
 
 
- INVENTORY 
- INVENTORY_CONTAINER (if Container-tracked) 
- INVENTORY_SERIAL_NO (if Serial Number-tracked) 
- WIP_ORDER_CONTAINER (if Container-tracked) 
-  WIP_ORDER_CONTENT  
- WIP_ORDER_CONTENT_SERIAL (if Serial Number-tracked) 
 

The BC impacts inventory tables by moving quantities from QuantityOnHand to QuantityAllocated. The quantity transferred is the allocation quantity converted to the inventory UOM.
 

The WIP content tables will be either populated with new rows or have their existing rows updated to reflect the allocation quantities in QuantityToPick. The quantities increased will be converted to the UOM of the order and calculated for that product.
 

The BC will allocate only the quantity that can be allocated. To allocate more, the user has to un-allocate (see below) some quantities that are allocated to other orders. If the BC cannot allocate the entire quantity, it will issue the quantity (in the Input UOM) that cannot be allocated as an Output.
 

Allocations can be created for specific Containers or Serial Numbers. Alternatively, if these parameters are not supplied, the allocation routine will determine the Containers and serials as appropriate, resulting in WIP_ORDER_CONTAINER entries (for Container-tracked) and WIP_CONTENT_SERIAL entries (for Serial NUmber-tracked). Allocations can be created to the inventory quantity level alone (for details on soft allocation, refer to System Processing below). No internal allocation strategies are currently implemented. Allocation strategies are to be constructed in the process.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The WIP Order number for which the inventory will be allocated. |
| Input | WipOrderType | Integer | Yes | The WIP Order type for which the inventory will be allocated. |
| Input | InventoryID | Integer | Yes | The inventory to be allocated to the WIP Order |
| Input | SerialNo | Char | No | This can be specified to allocate a specific Serial Number. |
| Input | Container | Char | No | This can be specified to allocate from a specific Container (but still for the supplied inventory ID). |
| Input | Quantity | Decimal | No | The quantity to allocate. |
| Input | UomCode | Char | No | The UOM code of the inputted quantity. |
| Output | UnallocatedQuantity | Decimal | No | The quantity unallocated due to insufficient inventory. |

## Validations

- The system validates that the WIP Order exists. 
- The system validates that the inventory ID exists.

## System Processing

- If quantity > 0, the system converts the quantity to the default product UOM. 
- If quantity = 0 and SerialNo has been provided, the system tries to hard allocate a serial that has been soft allocated. 
- If quantity < 0, the system tries to allocate all the records for the provided Inputs. 
- The system loads all the records to be allocated. 
- The system creates allocation records in WIP_ORDER_CONTENT, WIP_ORDER_CONTENT, and WIP_ORDER_CONTAINER.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY | QuantityAllocated |  |
| INVENTORY_CONTAINER | QuantityAllocated |  |
| WIP_ORDER_CONTENT | New record or update QuantityToPick |  |
| WIP_ORDER__CONTENT_SERIAL | New Record |  |
| WIP_ORDER_CONTAINER | New record or update QuantityToPick |  |
