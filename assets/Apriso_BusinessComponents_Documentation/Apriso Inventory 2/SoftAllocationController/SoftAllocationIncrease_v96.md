# SoftAllocationIncrease_v96

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.SoftAllocation.SoftAllocationController`
**Assembly:** `FlexNet.BusinessFacade.SoftAllocation.dll`
**Status:** Active
**Keywords:** SoftIncrease Increase Allocation SoftAllocation InventoryIncrease Warehouse

## Description

This Business Component method modifies records in SOFT_INVENTORY2_ALLOCATION table by adding quantity.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SoftInventoryAllocationIDList | ListofInteger | Conditional | List of Allocation IDs. |
| Input | QuantityList | ListofDecimal | Conditional | List of Quantity. |

## Validations

- System checks if provided arrays are of the same size, 
- System checks that quantity is provided and positive, 
- System checks if Soft Allocation for the inputted ID does not define SerialNo (Soft Increase for Serial Numbers is not allowed).

## System Processing

- System modifies records in SOFT_INVENTORY2_ALLOCATION table by adding quantity.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SOFT_INVENTORY2_ALLOCATION | ID |  |
|  | Quantity | Item from QuantityList. |
