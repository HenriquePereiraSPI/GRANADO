# AllocateInventory2

**Category:** Apriso/Inventory/Allocation
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAllocator`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Deprecated
**Keywords:** Allocate Inventory Warehouse

## Description

This Business Component method is used to allocate the requested quantity of Inventory from the INVENTORY2 table pointed by inventory ID. Optionally, it creates a transaction history XML and populates the inventory history tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated. |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both. |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | OperationCode | Char | No | The DFC code for the transaction history. |
| Input | OperationRevision | Char | No | The DFC revision for the transaction history. |
| Input | StartTime | DateTime | No | The transaction start time for the transaction history. |
| Input | EndTime | DateTime | No | The transaction end time for the transaction history. |
| Input | InventoryID | Integer | Yes | The ID of INVENTORY2 record. |
| Input | Quantity | Decimal | Yes | The quantity to allocate. |
| Input | UOMCode | Char | No | The unit of measure of the quantity to allocate. |
| Input | Reason | Char | No | The Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | The Work Center for the transaction history. |
| Input | CostCenter | Char | No | The cost center for the transaction history. |
| Input | Comment | Char | No | The comment for the transaction history. |
| Input | ToAllocationID | Integer | Yes | The INVENTORY2_ALLOCATION record ID for allocation. |
| Input | UserTransationToken | Char | No | The user transaction token for the transaction history. |
| Input | ProjectCode | Char | No | The project code for the transaction history. |
| Input | GLCode | Char | No | The GLCode for the transaction history. |
| Input | Department | Char | No | The department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | The INVENTORY2_HISTORY_HEADER record ID. This is populated when the history is generated. |

## Validations

- The system checks that the specified Inventory exists and QuantityOnHand is not less than requested quantity to allocate (converted using UOMCode). 
- The system checks that ToAllocationID is provided and valid. 
- The system checks that StartTime is before EndTime (if they are provided). 
- The system checks that OperationCode is not empty (if OperationRevision is provided). 
- The system checks that the HistoryType can take one of the values: 1,2,3. Any other value will be converted to 1 (None) by default. 
- The system checks that TransactionCode is provided (if HistoryType is not None). 
- The system checks that HistoryMode is set to 1 (Async), 2 (Sync), or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated). 
- The system checks that Quantity is provided and has a positive value if SerialNo is not inputted. If SerialNo is provided, then Quantity is always set to 1.0. 
- The system checks that the provided ContainerNo is assigned to Warehouse Location. 
- The system checks that the UOMCode has been provided. If it has not been provided, it gets this Input from the product (DefaultUOMCode).

## System Processing

- The system reads the Inventory record using the provided InventoryID.  
- The system allocates the requested quantity (converted using UOMCode) to the allocation record specified by ToAllocationID: 
 
- If all available quantity is allocated, the QuantityOnHand is added to the QuantityAllocated record, and the source Inventory record is removed. When the allocation record does not exist yet, the source record is updated: QuantityOnHand is moved to QuantityAllocated, and InventoryAllocationID is set to ToAllocationID. 
- Otherwise, the QuantityOnHand is decreased, and QuantityAllocated is increased (or a new allocation record is created if it does not exist). 
 
- If HistoryType is Full or Aggregated, then the inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created.

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as the order, WIP Order, DFC Code, project, Reason Code, transaction code, etc. The order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to the particular orders which are responsible for the inventory change. 
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about the affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

The difference between the aggregated and the full mode is visible only for such Container actions as allocate, deallocate, decrease and move with child containers. BC AllocateInventory2 allocates specific row from INVENTORY2 table (based on Inventory2ID provided as input)
 

When the inventory history is generated asynchronously, the following internal schemas are used:
 
 
- FlexNet.BusinessFacade.Inventory.Inventory2History.xsd 
- FlexNet.BusinessRules.Inventory.Inventory2History.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ID | InventoryID |
|  | QuantityAllocated | Increased by Quantity (converted using UOMCode) in the appropriate record. |
|  | QuantityOnHand | Decreased by Quantity (converted using UOMCode) in the appropriate record. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both and HistoryType is Full or Aggregated. |
