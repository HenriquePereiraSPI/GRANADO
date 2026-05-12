# DeallocateInventory2ByInventoryID_v2

**Category:** Apriso/Inventory/Allocation
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAllocator`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Deallocate Allocate Inventory Warehouse

## Description

This Business Component method deallocates the entire or the requested quantity of inventory from the INVENTORY2 table. Optionally, it creates a transaction history XML and populates the Inventory History tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InventoryID | Integer | Yes | The ID of the inventory to deallocate. |
| Output | InventoryHistoryID | Integer | Conditional | The INVENTORY2_HISTORY_HEADER record ID. This is populated when the history is generated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| HistoryType | Integer | The history type: 1-None, 2-Full, 3-Aggregated. |
| HistoryMode | Integer | The transaction history write mode: 1-Async, 2-Sync, 3-Both. |
| TransactionCode | Char | The transaction code. |
| DFCCode | Char | The DFC code for the transaction history. |
| DFCRevision | Char | The DFC revision for the transaction history. |
| StartTime | DateTime | The transaction start time for the transaction history. |
| EndTime | DateTime | The transaction end time for the transaction history. |
| ReasonCode | Char | The Reason Code for the transaction history. |
| WorkCenter | Char | The Work Center for the transaction history. |
| CostCenter | Char | The cost center for the transaction history. |
| Comment | Char | A comment for the transaction history. |
| UserTransationToken | Char | The user transaction token for the transaction history. |
| ProjectCode | Char | The project code for the transaction history. |
| GLCode | Char | The GL code for the transaction history. |
| Department | Char | The department for the transaction history. |
| Quantity | Decimal | The quantity to deallocate (if not specified, then the entire quantity will be deallocated). |
| UomCode | Char | The unit of measure of the quantity to deallocate. |

## Validations

The system checks if: 
 
 
- The InventoryID Input is specified and inventory exists in the INVENTORY2 table 
- The quantity allocated of the inventory is greater than 0 but not less than the requested quantity to deallocate (converted using UOMCode) when the Quantity Input is specified 
- StartTime is before EndTime (if they are specified) 
- DFCCode is specified and non-empty (if DFCRevision is specified and non-empty) 
- HistoryType can take one of these values: 1,2,3 (if the Input is not specified or has any other value, it will be converted to 1 [None] by default) 
- HistoryMode is set to 1 (Async), 2 (Sync), or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- TransactionCode is specified and non-empty (if HistoryType is specified and not None)

## System Processing

- The system reads the inventory record using the provided InventoryID parameter. 
- The system deallocates the requested or the entire (if the Quantity Input is not specified) quantity (converted using the specified UomCode Input or the default Product UOM Code if the UomCode Input is not specified) of the inventory: 
 
- If all the quantity has to be deallocated, the system removes the allocation record and adds the QuantityAllocated to the record with the existing QuantityOnHand; if the last record does not exist, the allocation record is updated: QuantityAllocated is moved to QuantityOnHand and InventoryAllocationID is cleared.  
- Otherwise, the QuantityAllocated is decreased in the source record and the QuantityOnHand is increased in the record with unallocated Inventory (a new record is created if it does not exist).  
 
- If HistoryType is Full or Aggregated, the inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created.

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: order, WIP Order, DFC code, project, Reason Code, transaction code, etc. The order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for the inventory change. 
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about the affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The order and WIP Order in the INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation.  
 

The difference between the aggregated and the full mode is visible only for such Container actions as allocate, deallocate, decrease and move with child containers. DeallocateInventory2ByInventoryID BC deallocates specific row from INVENTORY2 table (based on the ID provided as input).
 

When the inventory history is generated asynchronously, the following internal schemas are used:
 
 
- FlexNet.BusinessFacade.Inventory.Inventory2History.xsd 
- FlexNet.BusinessRules.Inventory.Inventory2History.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ProductID | Determined based on InventoryID. |
|  | WarehouseLocationID | Determined based on InventoryID. |
|  | Container | Determined based on InventoryID. |
|  | SerialNo | Determined based on InventoryID. |
|  | LotNo | Determined based on InventoryID. |
|  | InventoryClassID | Determined based on InventoryID. |
|  | InventoryStatus | Determined based on InventoryID. |
|  | PartnerID | Determined based on InventoryID. |
|  | GradeID | Determined based on InventoryID. |
|  | ERPMaterialStockID | Determined based on InventoryID. |
|  | InventoryAllocationID | Determined based on InventoryID. |
|  | QuantityAllocated | Decreased by Quantity (converted using UomCode) in the appropriate record. |
|  | QuantityOnHand | Increased by Quantity (converted using UomCode) in the appropriate record. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. The table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
