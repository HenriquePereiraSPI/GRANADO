# GetWipOrderAllocationInventory2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Read Get Query WIP Order WIPOrder Allocation Inventory Warehouse

## Description

This Business Component method returns the inventory allocated to the specified WIP Order number and type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | WIP Order number. |
| Input | WipOrderType | Integer | Yes | WIP Order type. |
| Output | ProductIDList | ListofInteger | Yes | List of Products IDs allocated for the WIP Order. |
| Output | ProductNoList | ListofChar | Yes | List of Products numbers allocated for the WIP Order. |
| Output | LocationIDList | ListofInteger | Yes | The list of Warehouse Locations IDs of the Products. |
| Output | LocationList | ListofChar | Yes | The list of Warehouse Locations of the Products. |
| Output | ContainerList | ListofChar | Yes | The list of Container numbers of the Product and Location. |
| Output | LotList | ListofChar | Yes | The list of Lot numbers of the Products, Location and Container. |
| Output | QuantityAllocatedList | ListofDecimal | Yes | List of allocated quantity. |

## Validations

- System checks if WipOrderNo and WipOrderType are provided.

## System Processing

- System reads the records from the INVENTORY2 table which are allocated to specified WIP Order number and type, according to the records in table INVENTORY2_ALLOCATION. The quantities are grouped by Product number, Warehouse Location, Container and Lot number.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ProductID | The list ProductIDList encloses Product IDs allocated for the WIP Order. |
|  | WarehouseLocationID | The list LocationIDList contains Warehouse Location IDs allocated for the WIP Order. |
|  | Container | The list ContainerList encloses the Container numbers allocated for the WIP Order. |
|  | LotNo | The list LotList contains Lot numbers allocated for the WIP Order. |
|  | QuantityAllocated | The list QuantityAllocatedList contains the sum of quantity allocated for the WIP Order. |
| INVENTORY2_ALLOCATION | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
