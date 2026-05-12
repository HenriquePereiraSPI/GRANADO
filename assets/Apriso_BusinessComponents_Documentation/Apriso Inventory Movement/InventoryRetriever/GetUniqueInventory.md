# GetUniqueInventory

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryRetriever`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active

## Description

The purpose of this Business Component is to retrieve Inventory information if it is unique.
 

User passes any part of the Key that available to the BC , and the BC returns all the other fields, if the inventory record is unique.
 

 

If the Count is zero or greater than one, the outputs are not populated but just return the Count value.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductIDIn | Integer | No | ProductID to uniquely identify inventory |
| Input | UomCodeIn | Char | No | Uom code to uniquely identify inventory. |
| Input | WarehouseLocationIDIn | Integer | No | WarehouseLocationID to uniquely identify inventory. |
| Input | ContainerIn | Char | No | Container to uniquely identify inventory |
| Input | LotNoIn | Char | No | LotNo to uniquely identify inventory. |
| Input | InventoryStatusIn | Short | No | InventoryStatus to uniquely identify inventory. |
| Input | PartnerIDIn | Integer | No | PartnerID to uniquely identify inventory. |
| Input | GradeIDIn | Integer | No | GradeID to uniquely identify inventory. |
| Output | InventoryIDOut | Integer | No | InventoryID to uniquely identify inventory. |
| Output | ProductIDOut | Integer | No | ProductID to uniquely identify inventory |
| Output | WarehouseLocationIDOut | Integer | No | WarehouseLocationID to uniquely identify inventory. |
| Output | ContainerOut | Char | No | Container to uniquely identify inventory |
| Output | LotNoOut | Char | No | LotNo to uniquely identify inventory. |
| Output | InventoryStatusOut | Short | No | InventoryStatus to uniquely identify inventory. |
| Output | PartnerIDOut | Integer | No | PartnerID to uniquely identify inventory. |
| Output | GradeIDOut | Integer | No | GradeID to uniquely identify inventory. |
| Output | UomCodeOut | Char | No | Uom code to uniquely identify inventory. |
| Output | AvailableQuantityOut | Decimal | No | Available quantity of the unique inventory. |
| Output | AllocatedQuantityOut | Decimal | No | Allocaated quantity of the unique inventory. |
| Output | Count | Integer | No | Number of the records |

## Validations

- Validate input container

## System Processing

- If the container is inputted, select from Inventory_Container with all the inputs, if the returned record is more than one, then just return the count, all the other outputs are not populated. If the returned record is just one, then get all the other outputs value from the unique record. 
- If the container is NULL, select from Inventory with all the inputs, if the returned record is more than one, then just return the count, all the other outputs are not populated. If the returned record is just one, then get all the other outputs value from the unique record.
