# AllocateInventory2ByContainer_v2

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Allocate Container Warehouse

## Description

This Business Component method is used to change the allocation of a Container and all its subcontainers. Optionally, it creates a transaction history XML and populates the inventory history tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated. |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both. |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | DFCCode | Char | Conditional | The DFC Code for the transaction history. |
| Input | DFCRevision | Char | No | The DFC revision for the transaction history. |
| Input | StartTime | DateTime | No | The transaction start time for the transaction history. |
| Input | EndTime | DateTime | No | The transaction end time for the transaction history. |
| Input | ContainerNo | Char | Yes | The Container number. |
| Input | AllocationID | Integer | Yes | The INVENTORY2_ALLOCATION record ID. |
| Input | Reason | Char | No | The Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | The Work Center for the transaction history. |
| Input | CostCenter | Char | No | The Cost Center for the transaction history. |
| Input | Comment | Char | No | The comment for the transaction history. |
| Input | UserTransactionToken | Char | No | The user transaction token for the transaction history. |
| Input | ProjectCode | Char | No | The project code for the transaction history. |
| Input | GLCode | Char | No | The GL code for the transaction history. |
| Input | Department | Char | No | The department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | The INVENTORY2_HISTORY_HEADER record ID, which is populated when the history is generated. |

## Validations

- The system checks that the Container and its subcontainers are allocated. 
- The system checks that AllocationID is provided. 
- The system checks that StartTime is before EndTime (if they are provided). 
- The system checks that DFCCode is not empty (if DFCRevision is provided). 
- HistoryType can take one of these values: 1,2,3. Any other value will be converted to 1 (None) by default. 
- The system checks that TransactionCode is provided (if HistoryType is not None). 
- The system checks that HistoryMode is set to 1 (Async), 2 (Sync), or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated).

## System Processing

- The system sets the following fields in the INVENTORY2 table for the specified Container and its subcontainers: 
 
- InventoryAllocationID is set to the value specified in the BC Input. 
- QuantityOnHand is moved to QuantityAllocated.  
-  QuantityOnHand is set to NULL.  
 
- If HistoryType is Full or Aggregated, the inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created.

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction (e.g., Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code). The order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to the particular orders that are responsible for inventory change. 
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about the affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The order and WIP Order in the INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

For Container actions (allocate, deallocate, and move), the table INVENTORY2_HISTORY_DETAIL is populated in two modes: full or aggregated. 
 
 
- Full – in this mode, the history of inventory changes for all items is stored in separate records (separately for a Container and all of its subcontainers). The allocated or on-hand quantity is stored as Quantity in the INVENTORY2_HISTORY_DETAIL table.  
- Aggregated – the content of a given container and all subcontainers is aggregated. This means that all the inventory is treated as it was placed directly in the main Container. The allocated and on-hand quantity are summed. 
 

When the inventory history is generated asynchronously, the following Internal schemas are used:
 
 
- FlexNet.BusinessFacade.Inventory.Inventory2History.xsd  
- FlexNet.BusinessRules.Inventory.Inventory2History.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | Container | ContainerNo |
|  | InventoryAllocationID | AllocationID |
|  | QuantityAllocated | Set to QuantityOnHand. |
|  | QuantityOnHand | Set to NULL. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. The table populated when HistoryMode is Sync or Both and when HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both and HistoryType is Full or Aggregated. |
