# IncreaseInventory2_v2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAdjustController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Increase Create Inventory Warehouse

## Description

This Business Component method increases existing inventory or creates a new record in the INVENTORY2 table using the Input criteria. The affected inventory can be allocated or not. The Business Component optionally writes the transaction history XML and populates the Inventory History tables.
 

 

If the BC defines the InventoryID Dynamic Output of the Integer type, then it is populated with the ID of the inventory being increased or created.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated. |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both. |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | DFCCode | Char | No | The DFC code for the transaction history. |
| Input | DFCRevision | Char | No | The DFC revision for the transaction history. |
| Input | StartTime | DateTime | No | The transaction start time for the transaction history. |
| Input | EndTime | DateTime | No | The transaction end time for the transaction history. |
| Input | ProductID | Integer | Yes | The ID of the product. |
| Input | WarehouseLocationID | Integer | Conditional | The ID of the Warehouse Location. |
| Input | ContainerNo | Char | Conditional | The Container number. |
| Input | SerialNo | Char | Conditional | The serial number. |
| Input | LotNo | Char | Conditional | The lot number. |
| Input | InventoryClassID | Integer | Conditional | The ID of the Inventory Class. |
| Input | InventoryStatus | Integer | Conditional | The status of the inventory. |
| Input | PartnerID | Integer | Conditional | The ID of the partner. |
| Input | GradeID | Integer | Conditional | The ID of the inventory grade. |
| Input | ERPMaterialStockID | Integer | Conditional | The ID of the ERP Material Stock location. |
| Input | AllocationID | Integer | No | The INVENTORY2_ALLOCATION record ID. |
| Input | Quantity | Decimal | Yes | The quantity to increase. |
| Input | UOMCode | Char | No | The unit of measure of the quantity to increase. |
| Input | Reason | Char | No | The Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | The Work Center for transaction history. |
| Input | CostCenter | Char | No | The cost center for transaction history. |
| Input | Comment | Char | No | The comment for the transaction history. |
| Input | UserTransationToken | Char | No | The user transaction token for the transaction history. |
| Input | ProjectCode | Char | No | The project code for the transaction history. |
| Input | GLCode | Char | No | The GLCode for the transaction history. |
| Input | Department | Char | No | The department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | The INVENTORY2_HISTORY_HEADER record ID. This is populated when history is generated. |
| Output | InventoryID | Integer | No | The ID of the inventory being increased or created. This is a Dynamic Output. |

## Validations

The system checks if: 
 
 
- ContainerNo and WarehouseLocationID are not provided at the same time 
- StartTime is before EndTime (if they are provided) 
- DFCCode is non-empty (if DFCRevision is provided) 
- HistoryType can take one of the values: 1, 2, or 3 (any other value will be converted to 1 [None] by default)  
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync), or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- Quantity is provided and has a positive value if SerialNo is not inputted; if SerialNo is provided then Quantity is always set to 1.0 
- The provided ContainerNo is assigned to Warehouse Location 
- UOMCode has been provided; if it has not been provided, it gets this Input from the product (DefaultUOMCode). 
- The InventoryID Output is defined and, if so, the system checks that the type of the InventoryID is Integer

## System Processing

- The system reads the inventory record using the provided parameters (ProductID, LotNo, SerialNo, ContainerNo etc.). If the record does not exist, it is created. 
- The system determines if the InventoryID Dynamic Output is defined, and if so, it populates it with the ID of the Inventory increased or created (in case it did not exist before executing the BC). 
- If AllocationID is provided, the requested Quantity (converted using UOMCode) is added to QuantityAllocated; otherwise, it is added to QuantityOnHand. 
- If HistoryType is Full or Aggregated, the Inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created.

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change. 
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about the affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation.  
 

The difference between the aggregated and the full mode is visible only for such Container actions as allocate, deallocate, decrease and move with child containers.
 

When the inventory history is generated asynchronously, the following Internal schemas are used:
 
 
- FlexNet.BusinessFacade.Inventory.Inventory2History.xsd 
- FlexNet.BusinessRules.Inventory.Inventory2History.xsd

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
|  | QuantityAllocated | If AllocationID is set, increased by Quantity (converted using UOMCode). |
|  | QuantityOnHand | If AllocationID is not set, increased by Quantity (converted using UOMCode). |
|  | ID | The InventoryID Dynamic Output if specified. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
