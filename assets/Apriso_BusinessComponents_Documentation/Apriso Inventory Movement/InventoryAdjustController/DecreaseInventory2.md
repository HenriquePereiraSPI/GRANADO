# DecreaseInventory2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAdjustController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Deprecated
**Keywords:** Decrease Remove Inventory Warehouse

## Description

Using input criteria, this Business Component method decreases existing Inventory or removes INVENTORY2 record, if the remaining quantity is zero. Affected inventory can be allocated or not. The Business Component optionally writes the transaction history XML and populates Inventory History tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | OperationCode | Char | Conditional | DFC Code for the transaction history. |
| Input | OperationRevision | Char | No | DFC Revision for the transaction history. |
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
| Input | AllocationID | Integer | No | INVENTORY2_ALLOCATION record ID. |
| Input | Quantity | Decimal | Yes | Quantity to decrease. |
| Input | UOMCode | Char | No | Unit of Measure of the Quantity to decrease. |
| Input | Reason | Char | No | Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | Work Center for the transaction history. |
| Input | CostCenter | Char | No | Cost Center for the transaction history. |
| Input | Comment | Char | No | Comment for the transaction history. |
| Input | ProjectCode | Char | No | ProjectCode for the transaction history. |
| Input | GLCode | Char | No | GLCode for the transaction history. |
| Input | Department | Char | No | Department for the transaction history. |
| Input | UserTransationToken | Char | No | User transaction token for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | INVENTORY2_HISTORY_HEADER record ID; populated when history is generated. |

## Validations

System checks if: 
 
 
- There is enough quantity to decrease (allocated or on-hand) 
- ContainerNo and WarehouseLocationID are not provided at the same time 
- StartTime is before EndTime (if they are provided) 
- OperationCode is non-empty (if OperationRevision is provided) 
- HistoryType can take one of the values: 1, 2 or 3. Any other value will be converted to 1 (None) by default 
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync) or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- Quantity is provided and has a positive value if SerialNo is not inputted; if SerialNo is provided then Quantity is always set arbitrary 1.0 
- The provided ContainerNo is assigned to Warehouse Location 
- UOMCode has been provided; if it has not been provided, it gets this input from the Product (DefaultUOMCode)

## System Processing

- System reads the Inventory record using provided parameters (ProductID, LotNo, SerialNo, ContainerNo etc.) 
- If AllocationID is provided, the requested Quantity (converted using UOMCode) is deducted from QuantityAllocated, otherwise from QuantityOnHand. If remaining quantity is zero, the record is removed. 
- If HistoryType is Full or Aggregated, the Inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated  
- If HistoryMode is Async or Both, the transaction history XML is created

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change.  
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

The difference between the aggregated and the full mode is visible only for such Container actions as allocate, deallocate, decrease and move with child containers.
 

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
|  | InventoryAllocationID | AllocationID |
|  | QuantityAllocated | If AllocationID is set, decreased by Quantity (converted using UOMCode). |
|  | QuantityOnHand | If AllocationID is not set, decreased by Quantity (converted using UOMCode). |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
