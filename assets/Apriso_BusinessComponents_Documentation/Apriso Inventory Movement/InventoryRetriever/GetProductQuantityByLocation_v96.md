# GetProductQuantityByLocation_v96

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Read Get Query Product Quantity Location Inventory Warehouse

## Description

This Business Component method returns the summed up quantity of inventory for specified Product and Warehouse Location.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID. |
| Input | WarehouseLocationID | Integer | Yes | Warehouse Location ID. |
| Output | QuantityOnHand | Decimal | Yes | Sum of quantity on-hand of the Product in Warehouse Location. |
| Output | QuantityAllocated | Decimal | Yes | Sum of quantity allocated of the Product in Warehouse Location. |

## Validations

- System checks if ProductID and WarehouseLocationID are provided.

## System Processing

- System reads the records from table INVENTORY2 for specified ProductID and WarehouseLocationID, and returns the sum of allocated and on-hand quantity.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ProductID | ProductID |
|  | WarehouseLocationID | WarehouseLocationID |
|  | QuantityOnHand | Summed up to the output QuantityOnHand. |
|  | QuantityAllocated | Summed up to the output QuantityAllocated. |
