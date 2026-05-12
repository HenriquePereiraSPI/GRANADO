# DeallocateInventory2_v2

**Category:** Apriso/Inventory/Allocation
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAllocator`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Deallocate Allocate Inventory Warehouse

## Description

This Business Component method deallocates the requested quantity of Inventory from the INVENTORY2 table using input criteria. Optionally, it creates a transaction history XML and populates the Inventory History tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated. |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both. |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | DFCCode | Char | No | DFC Code for the transaction history. |
| Input | DFCRevision | Char | No | DFC Revision for the transaction history. |
| Input | StartTime | DateTime | No | Transaction start time for the transaction history. |
| Input | EndTime | DateTime | No | Transaction end time for the transaction history. |
| Input | ProductID | Integer | Yes | ID of Product. |
| Input | WarehouseLocationID | Integer | Conditional | ID of Warehouse Location. |
| Input | ContainerNo | Char | Conditional | Container number. |
| Input | SerialNo | Char | Conditional | Serial number. |
| Input | LotNo | Char | Conditional | Lot number. |
| Input | InventoryClassID | Integer | Conditional | ID of Inventory Class. |
| Input | InventoryStatus | Integer | Conditional | Status of the Inventory. |
| Input | PartnerID | Integer | Conditional | ID of Partner. |
| Input | GradeID | Integer | Conditional | ID of Inventory Grade. |
| Input | ERPMaterialStockID | Integer | Conditional | ID of ERP Material Stock location. |
| Input | Quantity | Decimal | Yes | Quantity to deallocate. |
| Input | UOMCode | Char | No | Unit of Measure of the Quantity to deallocate. |
| Input | Reason | Char | No | Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | Work Center for the transaction history. |
| Input | CostCenter | Char | No | Cost Center for the transaction history. |
| Input | Comment | Char | No | Comment for the transaction history. |
| Input | FromAllocationID | Integer | Yes | INVENTORY2_ALLOCATION record ID to remove allocation. |
| Input | UserTransationToken | Char | No | User transaction token for the transaction history. |
| Input | ProjectCode | Char | No | ProjectCode for the transaction history. |
| Input | GLCode | Char | No | GLCode for the transaction history. |
| Input | Department | Char | No | Department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | INVENTORY2_HISTORY_HEADER record ID; populated when history is generated. |

## Validations

System checks if: 
 
 
- The specified Inventory exists and QuantityAllocated is not less than requested Quantity to deallocate (converted using UOMCode) 
- ContainerNo and WarehouseLocationID are not provided at the same time 
- Parameter FromAllocationID is provided and is valid 
- StartTime is before EndTime (if they are provided) 
- DFCCode is non-empty (if DFCRevision is provided) 
- HistoryType can take one of the values: 1,2,3. Any other value will be converted to 1 (None) by default  
- HistoryMode is set to 1 (Async), 2 (Sync) or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- TransactionCode is provided (if HistoryType is not None) 
- Quantity is provided and has a positive value if SerialNo is not inputted; if SerialNo is provided then Quantity is always set to 1.0 
- The provided ContainerNo is assigned to Warehouse Location 
- UOMCode has been provided; if it has not been provided, it gets this input from the Product (DefaultUOMCode)

## System Processing

- System reads the Inventory record using the provided parameters (ProductID, LotNo, SerialNo, ContainerNo, etc.) 
- System deallocates requested Quantity (converted using UOMCode) of the Inventory from the allocation record specified by FromAllocationID: 
 
- If all quantity has to be deallocated, system removes the allocation record and adds the QuantityAllocated to the record with existing QuantityOnHand; if the last record does not exist, the allocation record is updated: QuantityAllocated is moved to QuantityOnHand and InventoryAllocationID is cleared.  
- Otherwise the QuantityAllocated is decreased in the source record and the QuantityOnHand is increased in the record with unallocated Inventory (a new record is created if it does not exist). 
 
- If HistoryType is Full or Aggregated, the Inventory history is created:  
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated 
- If HistoryMode is Async or Both, the transaction history XML is created

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change.  
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

The difference between the aggregated and the full mode is visible only for such Container actions as allocate, deallocate, decrease and move with child containers. DeallocateInventory2_v2 BC deallocates only a specified Container (if provided) with no impact on subcontainers.
 

When the inventory history is generated asynchronously, the following Internal schemas are used: FlexNet.BusinessFacade.Inventory.Inventory2History.xsd and FlexNet.BusinessRules.Inventory.Inventory2History.xsd.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ProductID | ProductID |
|  | WarehouseLocationID | WarehouseLocationID |
|  | Container | ContainerNo |
|  | SerialNo | SerialNo |
|  | LotNo | LotNo |
|  | InventoryClassID | InventoryClassID |
|  | InventoryStatus | InventoryStatus |
|  | PartnerID | PartnerID |
|  | GradeID | GradeID |
|  | ERPMaterialStockID | ERPMaterialStockID |
|  | InventoryAllocationID | FromAllocationID |
|  | QuantityAllocated | Decreased by Quantity (converted using UOMCode) in appropriate record. |
|  | QuantityOnHand | Increased by Quantity (converted using UOMCode) in appropriate record. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
