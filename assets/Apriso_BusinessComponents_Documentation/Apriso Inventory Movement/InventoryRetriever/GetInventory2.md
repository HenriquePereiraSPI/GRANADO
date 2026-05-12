# GetInventory2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Read Get Query Inventory Warehouse

## Description

This Business Component method reads a record from the INVENTORY2 table using input criteria. It returns an error when no rows or multiple rows are found (i.e. the Inventory is not unique).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The ID of Product. |
| Input | WarehouseLocationID | Integer | Yes | The ID of Warehouse Location. |
| Input | ContainerNo | Char | No | Container number. |
| Input | SerialNo | Char | No | Serial number. |
| Input | LotNo | Char | No | Lot number. |
| Input | InventoryClassID | Integer | No | The ID or Inventory Class. |
| Input | InventoryStatus | Integer | No | Status of the Inventory. |
| Input | PartnerID | Integer | No | The ID of Partner. |
| Input | GradeID | Integer | No | The ID of Inventory Grade. |
| Input | ERPMaterialStockID | Integer | No | The ID of ERP Material Stock location. |
| Input | AllocationID | Integer | No | INVENTORY2_ALLOCATION record ID. |
| Output | InventoryID | Integer | Yes | The ID of found record. |

## System Processing

- System reads a record from the INVENTORY2 table using input criteria. An error is returned when no rows or multiple rows are found.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ID | InventoryID |
|  | ProductID | ProductID |
|  | WarehouseLocationID | WarehouseLocationID |
|  | Container | ContainerNo |
|  | SerialNo | SerialNo |
|  | LotNo | LotNo |
|  | InventoryClassID | InventoryClassID |
|  | InventoryStatus | InventoryStatus |
|  | PartnerID | PartnerID |
|  | GradeID | GradeID |
|  | ERPMaterialStockID | ERPMaterialStockID |
|  | InventoryAllocationID | AllocationID |
