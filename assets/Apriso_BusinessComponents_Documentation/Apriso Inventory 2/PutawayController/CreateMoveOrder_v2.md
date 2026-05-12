# CreateMoveOrder_v2

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.PutawayController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Active
**Keywords:** Putaway Receipt Transfer Transportation Move WIP Order Create Warehouse

## Description

This Business Component method creates the Order Header and related Order Lines with WIP Orders to perform Inventory move from one Warehouse Location to another. The transfer WIP Orders are also created for intermediate Putaway and Receipt Locations of the Zones of source and destination Location of the Inventory. The BC optionally writes the transaction history XML and populates Inventory History tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | Yes | The history type: 1-None, 2-Full, 3-Aggregated |
| Input | HistoryMode | Integer | Yes | The transaction history write mode: 1-Async, 2-Sync, 3-Both |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | DFCCode | Char | Conditional | DFC Code for transaction history. |
| Input | DFCRevision | Char | No | DFC Revision for transaction history. |
| Input | StartTime | DateTime | No | Transaction start time for transaction history. |
| Input | EndTime | DateTime | No | Transaction end time for transaction history. |
| Input | InventoryID | Integer | Yes | ID of Inventory record to move. |
| Input | WarehouseLocationID | Integer | Yes | Destination Warehouse Location. |
| Input | OrderType | Integer | Yes | Type of move Order to create. |
| Input | UserTransactionToken | Char | No | User transaction token for transaction history. |
| Output | OrderNo | Char | Yes | Created Order number. |

## Validations

System checks if: 
 
 
- the Inventory records exist and it is not allocated,  
- the destination Warehouse Location is valid,  
- the Order Type is provided,  
- a StartDate is before EndDate (if they are provided),  
- an DFCCode is non-empty (if DFCRevision is provided),  
- a TransactionCode is provided (if HistoryType is not None)

## System Processing

- System creates new Order Header using the sequence "ORDERNO".  
- System checks whether intermediate Warehouse Locations should be used to create the full transfer order, i.e.: 
 
- the Zone of source Inventory Location has Putaway Location configured, 
- the Zone of destination Location (WarehouseLocationID) has Receipt Location configured. 
 
- Depending on the configuration of the source and target Zones, system creates one, two or three Order Lines and related WIP Orders (using sequence "WIP_ORDER_NO"). The transfer is realized between the following Warehouse Locations: 
 
- source Location of the Inventory, 
- Putaway Location of the source Zone (if configured), 
- Receipt Location of the target Zone (if configured), 
- destination Location. 
 
- System allocates the Inventory to the first WIP Order. The allocation is performed using AllocateInventory2 BC.  
- If HistoryType is Full or Aggregated, the Inventory history is created (by AllocateInventory2 BC): 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated, 
- If HistoryMode is Async or Both, the transaction history XML is created.

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change.  
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

 For container actions (allocate, deallocate, move), the table INVENTORY2_HISTORY_DETAIL is populated in two modes: full or aggregated. 
 
 
-  Full - in this mode, the history of inventory changes for all items is stored in separate records, separately for container and all subcontaines. The allocated or on-hand quantity is stored as Quantity in INVENTORY2_HISTORY_DETAIL table.  
-  Aggregated - the content of a given container and all subcontainers is aggregated. It means that all inventory is treated as it was placed directly in the main container. The allocated and on-hand quantity are summed.  
 

 When the inventory history is generated asynchronously, the following Internal schemas are used: FlexNet.BusinessFacade.Inventory.Inventory2History.xsd and FlexNet.BusinessRules.Inventory.Inventory2History.xsd.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ID | InventoryID |
|  | InventoryAllocationID | Allocated to first created WIP Order. |
| ORDER_HEADER | OrderNo | Generated from sequence "ORDERNO". |
|  | OrderType | OrderType |
|  | OrderStatus | Set to New (1). |
| ORDER_DETAIL | OrderNo | Set to parent OrderNo. |
|  | OrderType | OrderType |
|  | OrderLineNo | Generated for all intermediate Inventory movements. |
|  | OrderStatus | Set to New (1). |
|  | ProductID | The Product ID of the Inventory. |
|  | FromWarehouseLocationID | Source Warehouse Location of the movement. |
|  | ToWarehouseLocationID | Destination Warehouse Location of the movement. |
| WIP_ORDER | WipOrderNo | Generated from sequence "WIP_ORDER_NO" for each Order Line. |
|  | WipOrderType | Set to Transportation Order (8). |
|  | OrderNo | Set to parent OrderNo. |
|  | OrderType | Set to parent OrderType. |
|  | OrderLineNo | Set to parent OrderLineNo. |
|  | WorkOrderStatus | Set to New (1). |
|  | ReleasedFacility | Facility of source Warehouse Location. |
|  | OrderQuantity | Set to QuantityOnHand of the Inventory. |
|  | ProductID | The Product ID of the Inventory. |
|  |  | Record of the allocation to first WIP Order of the transfer (created by AllocationInventory BC). |
| INVENTORY2_HISTORY_HEADER |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated (by AllocationInventory BC). |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated  (by AllocationInventory BC). |
