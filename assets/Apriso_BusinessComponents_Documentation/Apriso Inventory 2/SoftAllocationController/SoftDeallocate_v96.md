# SoftDeallocate_v96

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.SoftAllocation.SoftAllocationController`
**Assembly:** `FlexNet.BusinessFacade.SoftAllocation.dll`
**Status:** Active
**Keywords:** SoftAllocate Allocate Allocation SoftAllocation Warehouse SoftDeallocate SoftDeallocation

## Description

This Business Component method allows deallocating Soft Allocation created by SoftAllocate Business Component. Compared to Hard Allocation, Soft Allocation does not need to be precise when describing what is allocated.
 

This method can be used for partial or complete deallocation. 
 

It removes or modifies records (decreases Quantity attribute) from SOFT_INVENTORY2_ALLOCATION table and, if it is possible, removes records from INVENTORY2_ALLOCATION table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SoftInventoryAllocationIDList | ListofInteger | Yes | List of Soft Inventory Alloocation IDs. |
| Input | QuantityList | ListofDecimal | Conditional | List of Quantities. |

## Validations

- System checks if provided parameter lists are of the same size, 
- System checks that Quantity is positive, zero or DecimalNull, 
- If Soft Allocation for the inputted ID defines SerialNo, system ignores the provided Quantity and assumes that Quantity to deallocate equals 1,  
- If Soft Allocation for the inputted ID does not define SerialNo, system checks if there is enough Soft Allocation Quantity to be deallocated (in the case when Quantity is provided) or assumes that all corresponding Quantity is to be deallocated (in the case when provided Quantity equals zero or DecimalNull).

## System Processing

-  

System modifies (decreases) Quantity attribute of each Soft Inventory Allocation record by provided value and if it is equal to zero than the record is removed,
  
-  

System removes record from INVENTORY2_ALLOCATION table if it has no more references to SOFT_INVENTORY2_ALLOCATION and INVENTORY2 tables.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SOFT_INVENTORY2_ALLOCATION | ID | Items from SoftInventoryAllocationIDList. Record may be removed. |
|  | Quantity | Item from the QuantityList. |
| INVENTORY2_ALLOCATION | ID | Record may be removed. |
