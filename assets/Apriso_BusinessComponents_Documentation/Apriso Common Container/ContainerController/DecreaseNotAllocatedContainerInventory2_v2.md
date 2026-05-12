# DecreaseNotAllocatedContainerInventory2_v2

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Decrease Allocation Container Warehouse

## Description

This Business Component method removes inventory from the Container and all its sub-Containers. Optionally, it creates the transaction history XML and populates Inventory History tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | DFCCode | Char | Conditional | DFC Code for the transaction history. |
| Input | DFCRevision | Char | No | DFC Revision for the transaction history. |
| Input | StartTime | DateTime | No | Transaction start time for the transaction history. |
| Input | EndTime | DateTime | No | Transaction end time for the transaction history. |
| Input | ContainerNo | Char | Yes | Container number. |
| Input | Reason | Char | No | Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | Work Center for the transaction history. |
| Input | CostCenter | Char | No | Cost Center for the transaction history. |
| Input | Comment | Char | No | Comment for the transaction history. |
| Input | WipOrderNo | Char | Conditional | WIP Order number for the transaction history. |
| Input | WipOrderType | Integer | Conditional | WIP Order type for the transaction history. |
| Input | OprSequenceNo | Char | Conditional | WIP Operation sequence number for the transaction history. |
| Input | StepSequenceNo | Integer | Conditional | WIP Operation Step sequence number for the transaction history. |
| Input | OrderNo | Char | Conditional | Order number for the transaction history. |
| Input | OrderType | Integer | Conditional | Order type for the transaction history. |
| Input | OrderLineNo | Integer | Conditional | Order line number for the transaction history. |
| Input | ResourceID | Integer | No | ID of record from RESOURCE_ table for the transaction history. |
| Input | UserTransactionToken | Char | No | User transaction token for the transaction history. |
| Input | ProjectCode | Char | No | ProjectCode for the transaction history. |
| Input | GLCode | Char | No | GLCode for the transaction history. |
| Input | Department | Char | No | Department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | INVENTORY2_HISTORY_HEADER record ID; populated when history is generated. |

## Validations

System checks if: 
 
 
- Container and its sub-Containers are not allocated to any INVENTORY2_ALLOCATION records 
- StartTime is before EndTime (if they are provided) 
- DFCCode is non-empty (if DFCRevision is provided) 
- HistoryType can take one of the values: 1,2,3. Any other value will be converted to 1 (None) by default 
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync) or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- WipOrderNo is provided together with WipOrderType; the OprSequenceNo requires both above mentioned parameters, and the StepSequenceNo requires OprSequenceNo 
- OrderNo is provided together with OrderType, the parameter OrderLineNo requires both above mentioned parameters

## System Processing

- System removes the INVENTORY2 records for specified Container and its sub-Containers. 
- If HistoryType is Full or Aggregated, the Inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created. 
 
 

 

WipOrderNo, WipOrderType and OprSequenceNo are used to populate WIP_ORDER_CONTENT, WIP_ORDER_CONTAINER and WIP_ORDER_CONTENT_SERIAL tables to store information about Inventory issued and received. If WipOrderNo is specified then:
 
 
- WIP_ORDER_CONTENT record is created (QuantityProcessed is set to negative number of deleted inventory) or updated (QuantityProcessed is decreased by amount of the deleted inventory). 
- If OprSequenceNo is specified then child records are updated/inserted in WIP_ORDER_CONTENT. 
- WIP_ORDER_CONTAINER record is created (QuantityProcessed is set to negative number of deleted inventory) or updated (QuantityProcessed is decreased by amount of the deleted inventory). 
- If deleted Inventory has a specified SerialNo then WIP_ORDER_CONTENT_SERIAL record is created or updated (Processed is set to 0).

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change.  
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

For container actions (allocate, deallocate, move), the table INVENTORY2_HISTORY_DETAIL is populated in two modes: full or aggregated. 
 
 
- Full - in this mode, the history of inventory changes for all items is stored in separate records, separately for container and all subcontaines. The allocated or on-hand quantity is stored as Quantity in INVENTORY2_HISTORY_DETAIL table. 
- Aggregated - the content of a given container and all subcontainers is aggregated. It means that all inventory is treated as it was placed directly in the main container. The allocated and on-hand quantity are summed. 
 

When the inventory history is generated asynchronously, the following Internal schemas are used: FlexNet.BusinessFacade.Inventory.Inventory2History.xsd and FlexNet.BusinessRules.Inventory.Inventory2History.xsd.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | Container | Record and sub-records for ContainerNo are deleted. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| WIP_ORDER_CONTENT | QuantityProcessed | Value is decreased by amount of the deleted inventory. |
|  | OrderQuantityProcessed | Value is decreased by amount of the deleted inventory. |
| WIP_ORDER_CONTAINER | QuantityProcessed | Value is decreased by amount of the deleted inventory. |
| WIP_ORDER_CONTENT_SERIAL | Processed | Value is set to 0. |
