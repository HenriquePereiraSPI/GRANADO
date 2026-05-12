# GetProductQuantityByLocationList_v96

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Read Get Query Product Quantity Location Inventory Warehouse

## Description

This Business Component method returns the summed quantity of inventory in Warehouse Locations for the specified Product.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID. |
| Output | LocationIDList | ListofInteger | Yes | List of Location IDs with requested Product. |
| Output | LocationList | ListofChar | Yes | List of Locations with requested Product. |
| Output | QuantityAllocatedList | ListofDecimal | Yes | List of allocated quantity of the Product in certain Location. |
| Output | QuantityOnHandList | ListofDecimal | Yes | List of on-hand quantity of the Product in certain Location. |

## Validations

- System checks if ProductID is provided.

## System Processing

- System reads the records from the INVENTORY2 table for the specified ProductID, and returns the sum of allocated and on-hand quantity by Warehouse Location.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ProductID | ProductID |
|  | WarehouseLocationID | The list LocationIDList contains WarehouseLocationIDs of the Product. |
|  | QuantityOnHand | The list QuantityOnHandList contains sum of quantity on-hand in the Warehouse Location. |
|  | QuantityAllocated | The list QuantityAllocatedList contains sum of quantity allocated in the Warehouse Location. |
