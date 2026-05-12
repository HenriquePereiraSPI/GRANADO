# GetProductQuantityByLotNo_v96

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Read Get Query Product Quantity LotNo Lot Inventory Warehouse

## Description

This Business Component method returns the summed up quantity of inventory for the specified Product and Lot number.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID. |
| Input | LotNo | Char | Yes | Lot number. |
| Output | QuantityOnHand | Decimal | Yes | Sum of quantity on-hand of the Product and Lot number. |
| Output | QuantityAllocated | Decimal | Yes | Sum of quantity allocated of the Product and Lot number. |

## Validations

- System checks if ProductID and LotNo are provided.

## System Processing

- System reads the records from the INVENTORY2 table for specified ProductID and LotNo, and returns the sum of allocated and on-hand quantity.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ProductID | ProductID |
|  | LotNo | LotNo |
|  | QuantityOnHand | Summed up to the output QuantityOnHand. |
|  | QuantityAllocated | Summed up to the output QuantityAllocated. |
