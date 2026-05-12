# SoftAllocateByInventory2Allocation_v96

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.SoftAllocation.SoftAllocationController`
**Assembly:** `FlexNet.BusinessFacade.SoftAllocation.dll`
**Status:** Active
**Keywords:** SoftAllocate Allocate Allocation SoftAllocation InventoryAllocation Warehouse

## Description

This Business Component method creates Soft Allocation for the inputted parameters. The inventory will be allocated to entities defined by inputted (existing) INVENTORY2_ALLOCATION records.
 

The Soft Allocation does not need to be precise when describing what is allocated.
 

Examples:
 
 
- We can allocate the whole container to the machine or order without specifying the quantity (container can even be empty at the time it is allocated),  
- We can allocate the whole warehouse location to the machine or order without specifying the quantity (warehouse location can even be empty at the time it is allocated),  
- We can allocate certain quantity of product for production order without specifying the lot number (we just record that we need certain quantity for production, actual lot will be known later),  
- We can allocate the whole structure of inventory and containers/parent containers to the Advanced Shipping Notice (ASN) before it is received. In that case, some inventory attributes are not known and we cannot create this inventory in inactive status. 
 

Information about Soft Allocation is stored in SOFT_INVENTORY2_ALLOCATION and INVENTORY2_ALLOCATION tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductIDList | ListofInteger | Conditional | List of Product IDs. |
| Input | WarehouseLocationIDList | ListofInteger | Conditional | List of Warehouse Location. |
| Input | ContainerNoList | ListofChar | Conditional | List of Containers. |
| Input | SerialNoList | ListofChar | Conditional | List of Serials. |
| Input | LotNoList | ListofChar | Conditional | List of Lots. |
| Input | InventoryClassIDList | ListofInteger | Conditional | List of Inventory Class IDs. |
| Input | InventoryStatusList | ListofInteger | Conditional | List of Inventory Status. |
| Input | PartnerIDList | ListofInteger | Conditional | List of Partner IDs. |
| Input | GradeIDList | ListofInteger | Conditional | List of Grade IDs. |
| Input | ERPMaterialStockIDList | ListofInteger | Conditional | List of ERP Material Stocks. |
| Input | InventoryAllocationIDList | ListofInteger | Yes | List of Inventory Allocation IDs. |
| Input | QuantityList | ListofDecimal | Conditional | List of Quantities. |
| Output | SoftInventoryAllocationIDList | ListofInteger | Yes | List of Inventory Allocation IDs. |

## Validations

- System checks if provided parameter lists are of the same size, 
- System checks if one of the following input parameters is provided for each record: ProductID, SerialNo, LotNo, ContainerNo or WarehouseLocationID, 
- System checks if InventoryAllocationID is provided for each record,  
- System checks if Serial comes with ProductID, 
- System checks if Lot comes with ProductID, 
- If SerialNo is provided, system ignores the provided Quantity and assumes that Quantity equals 1, 
- If Quantity is not provided or set to zero, system sets Quantity to DBNull.

## System Processing

-  

System creates new records in SOFT_INVENTORY2_ALLOCATION

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SOFT_INVENTORY2_ALLOCATION | ID |  |
|  | ProductID | Item from ProductIDList |
|  | WarehouseLocationID | Item from WarehouseLocationIDList |
|  | Container | Item from ContainerNoList |
|  | SerialNo | Item from SerialNoList |
|  | LotNo | Item from LotNoList |
|  | InventoryClassID | Item from InventoryClassIDList |
|  | InventoryStatus | Item from InventoryStatusList |
|  | PartnerID | Item from PartnerIDList |
|  | GradeID | Item from GradeIDList |
|  | ERPMaterialStockID | Item from ERPMaterialStockIDList |
|  | InventoryAllocationID | Item from InventoryAllocationIDList |
|  | Quantity | Item from QuantityList |
