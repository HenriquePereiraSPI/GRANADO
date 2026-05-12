# GetProductQuantityByProduct_v96

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Read Get Query Product Quantity Inventory Warehouse

## Description

This Business Component method returns the summed up quantity of inventory for the specified Product.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID. |
| Output | QuantityOnHand | Decimal | Yes | Sum of quantity on-hand of the Product. |
| Output | QuantityAllocated | Decimal | Yes | Sum of quantity allocated of the Product. |

## Validations

- System checks if ProductID is provided.

## System Processing

- System reads the records from the INVENTORY2 table for the specified ProductID, and returns the sum of allocated and on-hand quantity.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ProductID | ProductID |
|  | QuantityOnHand | Summed up to the output QuantityOnHand. |
|  | QuantityAllocated | Summed up to the output QuantityAllocated. |
