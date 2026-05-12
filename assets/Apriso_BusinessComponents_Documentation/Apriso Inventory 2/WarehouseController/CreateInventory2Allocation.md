# CreateInventory2Allocation

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.WarehouseController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Create Allocate Allocation Warehouse

## Description

This Business Component method creates a new record in INVENTORY2_ALLOCATION table.

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
| Output | CreatedAllocationID | Integer | Yes | ID of newly created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| TaskID | Integer | The ID of Task |

## Validations

- System checks if at least one input parameter is provided. 
- System checks if WipOrderNo is provided together with WipOrderType. The OprSequenceNo requires both above mentioned parameters, and the StepSequenceNo requires OprSequenceNo. 
- System checks if OrderNo is provided together with OrderType. The parameter OrderLineNo requires both above mentioned parameters. 
- System checks if TaskID is provided and if it exists.

## System Processing

-  

System creates a new record in the INVENTORY2_ALLOCATION table and returns its ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2_ALLOCATION | ID | CreatedAllocationID |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
|  | StepSequenceNo | StepSequenceNo |
|  | OrderNo | OrderNo |
|  | OrderType | OrderType |
|  | OrderLineNo | OrderLineNo |
|  | ResourceID | ResourceID |
|  | AllocationTag | AllocationTag |
|  | TaskID | TaskID |
