# QueryInventory2Allocation

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.WarehouseController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Read Get Query Allocate Allocation Warehouse

## Description

This Business Component method reads a record from the INVENTORY2_ALLOCATION table for the specified input parameters. When multiple records are found, an error is returned. The BC returns 0 if no record is found.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Conditional | WIP Order number. |
| Input | WipOrderType | Integer | Conditional | WIP Order type. |
| Input | OprSequenceNo | Char | Conditional | Operation Sequence number. |
| Input | StepSequenceNo | Integer | Conditional | Step Sequence number. |
| Input | OrderNo | Char | Conditional | Order number (Order header). |
| Input | OrderType | Integer | Conditional | Order type. |
| Input | OrderLineNo | Integer | Conditional | Order Line number. |
| Input | ResourceID | Integer | Conditional | ID of the Resource. |
| Input | AllocationTag | Char | Conditional | User-defined allocation tag. |
| Output | AllocationID | Integer | Yes | ID of found record. |

## Validations

- System checks if at least one input parameter is provided. 
- System checks if WipOrderNo is provided together with WipOrderType. The OprSequenceNo requires both of the above mentioned parameters, and the StepSequenceNo requires OprSequenceNo. 
- System checks if OrderNo is provided together with OrderType. The parameter OrderLineNo requires both of the above mentioned parameters.

## System Processing

-  

System reads a record from INVENTORY2_ALLOCATION table and returns its ID as the output AllocationID:
  
 
-  

If the record does not exist, system returns 0 as AllocationID,
  
-  

If input criteria are ambiguous (multiple records are found), an error is returned.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2_ALLOCATION | ID | AllocationID |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
|  | StepSequenceNo | StepSequenceNo |
|  | OrderNo | OrderNo |
|  | OrderType | OrderType |
|  | OrderLineNo | OrderLineNo |
|  | ResourceID | ResourceID |
|  | AllocationTag | AllocationTag |
