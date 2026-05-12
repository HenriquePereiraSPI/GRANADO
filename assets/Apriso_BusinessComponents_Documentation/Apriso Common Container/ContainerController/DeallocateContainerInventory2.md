# DeallocateContainerInventory2

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated
**Keywords:** Deallocate Allocate Container Warehouse

## Description

This Business Component method removes allocation from the Container and all its sub-Containers. It optionally writes the transaction history XML and populates Inventory History tables.

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
| Input | ContainerNo | Char | Yes | Container number. |
| Input | AllocationID | Integer | No | INVENTORY2_ALLOCATION record ID or 0 if you want to deallocate container for all allocations. |
| Input | Reason | Char | No | Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | Work Center for the transaction history. |
| Input | CostCenter | Char | No | Cost Center for the transaction history. |
| Input | Comment | Char | No | Comment for the transaction history. |
| Input | UserTransactionToken | Char | No | User transaction token for the transaction history. |
| Input | ProjectCode | Char | No | ProjectCode for the transaction history. |
| Input | GLCode | Char | No | GLCode for the transaction history. |
| Input | Department | Char | No | Department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | INVENTORY2_HISTORY_HEADER record ID; populated when history is generated. |

## Validations

System checks if: 
 
 
- Inventory in Container is fully allocated to the specified AllocationID (only when AllocationID is specified) 
- StartTime is before EndTime (if they are provided) 
- OperationCode is non-empty (if OperationRevision is provided) 
- HistoryType can take one of the values: 1,2,3. Any other value will be converted to 1 (None) by default  
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync) or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated)

## System Processing

- System removes allocation of the inventory (for specified AllocationID) or of all inventories (if AllocationID is not specified) in the INVENTORY2 table for the given Container and its sub-Containers:  
 
- InventoryAllocationID is set to NULL  
-  QuantityAllocated is moved to QuantityOnHand  
-  QuantityAllocated is set to NULL  
 
- If HistoryType is Full or Aggregated, the Inventory history is created:  
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated  
- If HistoryMode is Async or Both, the transaction history XML is created

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change.  
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

 For container actions (allocate, deallocate, move), the table INVENTORY2_HISTORY_DETAIL is populated in two modes: full or aggregated. 
 
 
-  Full - in this mode, the history of inventory changes for all items is stored in separate records, separately for container and all subcontaines. The allocated or on-hand quantity is stored as Quantity in INVENTORY2_HISTORY_DETAIL table.  
-  Aggregated - the content of a given container and all subcontainers is aggregated. It means that all inventory is treated as it was placed directly in the main container. The allocated and on-hand quantity are summed.  
 

 When the inventory history is generated asynchronously, the following Internal schemas are used: 
 
 
-  FlexNet.BusinessFacade.Inventory.Inventory2History.xsd and  
-  FlexNet.BusinessRules.Inventory.Inventory2History.xsd.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | Container | ContainerNo |
|  | InventoryAllocationID | It is set to NULL. |
|  | QuantityAllocated | It is set to NULL. |
|  | QuantityOnHand | It is set to QuantityAllocated. |
|  | MinFIFODate | It is set to NULL. |
|  | MaxFIFODate | It is set to NULL. |
|  | ReferenceID | It is set to NULL. |
|  | LastUpdateOn | It is set to NULL. |
|  | LastUpdateBy | It is set to NULL. |
|  | CreatedOn | It is set to current UTC time. |
|  | Active | It is set to 1. |
|  | LastDeleteOn | It is set to NULL. |
|  | LastDeleteBy | It is set to NULL. |
|  | LastReactivateOn | It is set to NULL. |
|  | LastReactivateBy | It is set to NULL. |
|  | ArchiveID | It is set to NULL. |
|  | LastArchivedBy | It is set to NULL. |
|  | LastRestoreOn | It is set to NULL. |
|  | LastRestoredBy | It is set to NULL. |
|  | RowVersionStamp | It is set to 1. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
