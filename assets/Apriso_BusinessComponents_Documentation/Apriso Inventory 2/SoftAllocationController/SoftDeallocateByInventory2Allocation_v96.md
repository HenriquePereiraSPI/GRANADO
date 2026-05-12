# SoftDeallocateByInventory2Allocation_v96

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.SoftAllocation.SoftAllocationController`
**Assembly:** `FlexNet.BusinessFacade.SoftAllocation.dll`
**Status:** Active
**Keywords:** SoftAllocate Allocate Allocation SoftAllocation Warehouse SoftDeallocate SoftDeallocation

## Description

This Business Component method allows deallocating Soft Allocation created by SoftAllocate Business Component. Compared to Hard Allocation, Soft Allocation does not need to be precise when describing what is allocated.
 

This method can be used only for complete deallocation of soft allocations related to specified inventory allocations. 
 

It removes records from SOFT_INVENTORY2_ALLOCATION table and if it is possible, removes records from INVENTORY2_ALLOCATION table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryAllocationIDList | ListofInteger | Yes | List of Inventory Allocation IDs. |
| Output | NumberOfDeallocatedItemsList | ListofInteger | Yes | Number of deallocated records from SOFT_INVENTORY2_ALLOCATION table for provided Inventory Allocation ID. |

## Validations

- System checks if provided InventoryAllocationIDs are greater than zero. 
- During processing, system checks if provided InventoryAllocationID exist.

## System Processing

-  

If inputted InventoryAllocationIDList is empty, system returns success.
  
- System removes all SOFT_INVENTORY2_ALLOCATION records that correspond to the provided Inventory Allocation IDs. 
-  

System removes record from the INVENTORY2_ALLOCATION table if it has no more references to the SOFT_INVENTORY2_ALLOCATION and INVENTORY2 table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SOFT_INVENTORY2_ALLOCATION | ID | Record to remove. |
| INVENTORY2_ALLOCATION | ID | Items from InventoryAllocationIDList. Record may be removed. |
