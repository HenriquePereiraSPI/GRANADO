# MoveInventory2ByContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated
**Keywords:** Move Container Warehouse

## Description

This Business Component method moves a Container with its content to a different Warehouse Location or a different master Container. It optionally writes the transaction history XML and populates Inventory History tables.

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
| Input | ResourceID | Integer | No | ID of the record from the RESOURCE_ table for the transaction history. |
| Input | ToWarehouseLocationID | Integer | Conditional | Destination Warehouse Location ID. |
| Input | ToContainerNo | Char | Conditional | Destination Container number. |
| Input | UserTransactionToken | Char | No | User transaction token for the transaction history. |
| Input | ProjectCode | Char | No | ProjectCode for the transaction history. |
| Input | GLCode | Char | No | GLCode for the transaction history. |
| Input | Department | Char | No | Department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | INVENTORY2_HISTORY_HEADER record ID; populated when history is generated. |

## Validations

System checks if: 
 
 
- The movement is required - destination master Container or Warehouse Location must be different than the current ones 
- StartTime is before EndTime (if they are provided) 
- OperationCode is non-empty (if OperationRevision is provided) 
- HistoryType can take one of the values: 1,2,3. Any other value will be converted to 1 (None) by default 
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync) or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- ToWarehouseLocationID is valid (if ToContainerNo is not provided) 
- WipOrderNo is provided together with WipOrderType; the OprSequenceNo requires both above mentioned parameters, and the StepSequenceNo requires OprSequenceNo 
- OrderNo is provided together with OrderType, the parameter OrderLineNo requires both above mentioned parameters 
- The provided ToContainerNo is assigned to Warehouse Location

## System Processing

- System moves the Container and all sub-Containers: 
 
- If ToContainerNo is provided, the movement is made to the destination Container (the destination Warehouse Location is taken from the target Container)  
- Otherwise to the Warehouse Location determined by ToWarehouseLocationID 
 
- If HistoryType is Full or Aggregated, the Inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated  
- If HistoryMode is Async or Both, the transaction history XML is created

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change. 
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

For container actions (allocate, deallocate, move), the table INVENTORY2_HISTORY_DETAIL is populated in two modes: full or aggregated.
 
 
- Full - in this mode, the history of inventory changes for all items is stored in separate records, separately for container and all subcontainers. The allocated or on-hand quantity is stored as Quantity in INVENTORY2_HISTORY_DETAIL table. 
- Aggregated - the content of a given container and all subcontainers is aggregated. It means that all inventory is treated as it was placed directly in the main container. The allocated and on-hand quantity are summed. 
 

 

Since the Container and ToContainer values are the same, it is visible that the action (e.g. move) refers to the whole Container. The InContainer and ToInContainer values reflect the direction of the action (e.g., from which Container to which Container the move was performed).
 

 

When the inventory history is generated asynchronously, the following Internal schemas are used: FlexNet.BusinessFacade.Inventory.Inventory2History.xsd and FlexNet.BusinessRules.Inventory.Inventory2History.xsd.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | Container | ContainerNo |
|  | InContainer | ToContainerNo |
|  | WarehouseLocationID | ToWarehouseLocationID (or Warehouse Location of destination Container:ToContainerNo) |
| INVENTORY2 | WarehouseLocationID | ToWarehouseLocationID (or Warehouse Location of destination Container:ToContainerNo) |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
