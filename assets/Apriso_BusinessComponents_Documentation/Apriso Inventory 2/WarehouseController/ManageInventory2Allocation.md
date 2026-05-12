# ManageInventory2Allocation

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.WarehouseController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Manage Allocate Allocation Warehouse

## Description

This Business Component method selects a record from the INVENTORY2_ALLOCATION table using the information passed from the Inputs or creates a new record in the INVENTORY2_ALLOCATION table if a record does not already exist.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Conditional | The WIP Order number. |
| Input | WipOrderType | Integer | Conditional | The WIP Order type. |
| Input | OprSequenceNo | Char | Conditional | The Operation Sequence number. |
| Input | StepSequenceNo | Integer | Conditional | The Step Sequence number. |
| Input | OrderNo | Char | Conditional | The order number (Order header). |
| Input | OrderType | Integer | Conditional | The order type. |
| Input | OrderLineNo | Integer | Conditional | The order line number. |
| Input | ResourceID | Integer | Conditional | The ID of the resource. |
| Input | AllocationTag | Char | Conditional | The user-defined allocation tag. |
| Output | AllocationID | Integer | Yes | The ID of the retrieved allocation record. |

## Validations

- The system checks if at least one Input parameter is provided. 
- The system checks if WipOrderNo is provided together with WipOrderType. The OprSequenceNo requires both of these parameters, and StepSequenceNo requires OprSequenceNo. 
- The system checks if OrderNo is provided together with OrderType. The parameter OrderLineNo requires both of these parameters.

## System Processing

-  

The system validates if a single record exists in the INVENTORY2_ALLOCATION table. If more than one record is found, then an error is returned. If a single record is found, then its ID is returned.
  
-  

If the allocation record is not found, then the system creates a new record in the INVENTORY2_ALLOCATION table and returns its ID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2_ALLOCATION | ID | AllocationID (if record doesn't exist in the table) |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo |
|  | StepSequenceNo | StepSequenceNo |
|  | OrderNo | OrderNo |
|  | OrderType | OrderType |
|  | OrderLineNo | OrderLineNo |
|  | ResourceID | ResourceID |
|  | AllocationTag | AllocationTag |
