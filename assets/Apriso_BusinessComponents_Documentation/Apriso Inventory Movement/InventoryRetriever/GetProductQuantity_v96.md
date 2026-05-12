# GetProductQuantity_v96

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Read Get Query Product Quantity Location Lot LotNo Container Inventory Warehouse

## Description

This Business Component method returns the summed up quantity of inventory in Warehouse Locations for the specified Product. The result is grouped by Location, Container and Lot number.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID. |
| Output | LocationIDList | ListofInteger | Yes | List of Location IDs with the requested Product. |
| Output | LocationList | ListofChar | Yes | List of Locations with the requested Product. |
| Output | ContainerList | ListofChar | Yes | List of Containers with the requested Product in Location. |
| Output | LotList | ListofChar | Yes | List of Lot numbers with the requested Product in Location and Container. |
| Output | QuantityAllocatedList | ListofDecimal | Yes | List of allocated quantity. |
| Output | QuantityOnHandList | ListofDecimal | Yes | List of on-hand quantity. |

## Validations

- System checks if ProductID is provided.

## System Processing

- System reads the records from the INVENTORY2 table for the specified ProductID, and returns the sum of allocated and on-hand quantity grouped by Warehouse Location, Container and Lot number.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ProductID | ProductID |
|  | WarehouseLocationID | The list LocationIDList contains WarehouseLocationIDs of the Product. |
|  | Container | The list ContainerList encloses the Containers with requested Product in certain Location. |
|  | LotNo | The list LotList contains the Lot numbers of the Containers' content. |
|  | QuantityOnHand | The list QuantityOnHandList contains sum of quantity on-hand. |
|  | QuantityAllocated | The list QuantityAllocatedList contains sum of quantity allocated. |
