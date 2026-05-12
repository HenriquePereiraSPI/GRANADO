# ChangeInventory2Properties

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAdjustController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Deprecated
**Keywords:** Inventory Properties Warehouse Update Query

## Description

This Business Component method is used to move the requested quantity to the target Container, Warehouse Location, Product, Lot Number, Serial Number, Inventory Class, Inventory Status, Partner, Grade and/or ERP Material Stock. It optionally writes the transaction history XML and populates the inventory history tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1 - None, 2 - Full, 3 - Aggregated. |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1 - Async, 2 - Sync, 3 - Both. |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | OperationCode | Char | Conditional | The DFC code for the transaction history. |
| Input | OperationRevision | Char | Conditional | The DFC revision for the transaction history. |
| Input | StartTime | DateTime | Conditional | The transaction start time for the transaction history. |
| Input | EndTime | DateTime | Conditional | The transaction end time for the transaction history. |
| Input | Inventory2ID | Integer | Yes | The ID of the existing inventory. |
| Input | ToProductID | Integer | No | The ID of the destination product. |
| Input | ToWarehouseLocationID | Integer | No | The ID of the destination Warehouse Location. |
| Input | ToContainerNo | Char | No | The destination Container number. |
| Input | ToSerialNo | Char | No | The destination Serial Number. |
| Input | ToLotNo | Char | No | The destination Lot Number. |
| Input | ToInventoryClassID | Integer | No | The ID of the destination inventory class. |
| Input | ToInventoryStatus | Integer | No | The destination status of the inventory. |
| Input | ToPartnerID | Integer | No | The ID of the destination partner. |
| Input | ToGradeID | Integer | No | The ID of the destination inventory grade. |
| Input | ToERPMaterialStockID | Integer | No | The ID of the destination ERP material stock location. |
| Input | Quantity | Integer | Conditional | The quantity to move. |
| Input | Reason | Char | No | The Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | The Work Center for the transaction history. |
| Input | CostCenter | Char | No | The cost center for the transaction history. |
| Input | Comment | Char | No | The comment for the transaction history. |
| Input | WipOrderNo | Char | Conditional | The WIP Order number for the transaction history. |
| Input | WipOrderType | Short | Conditional | The WIP Order type for the transaction history. |
| Input | OprSequenceNo | Char | Conditional | The WIP Operation Sequence Number for the transaction history. |
| Input | StepSequenceNo | Char | Conditional | The WIP Operation Step Sequence Number for the transaction history. |
| Input | OrderNo | Char | Conditional | The order number for the transaction history. |
| Input | OrderType | Integer | Conditional | The order type for the transaction history. |
| Input | OrderLineNo | Integer | Conditional | The order line number for the transaction history. |
| Input | ResourceID | Integer | No | The ID of the record from the RESOURCE_ table for the transaction history. |
| Input | UserTransactionToken | Char | No | The user transaction token for the transaction history. |
| Input | ProjectCode | Char | No | The project code for the transaction history. |
| Input | GLCode | Char | No | The GL code for the transaction history. |
| Input | Department | Char | No | The Department for the transaction history. |
| Input | IgnoreEmptyProperties | Boolean | Yes | Indicates if empty parameters such as empty strings, Decimal.MinValue, DateTime.MinValue, and non-positive (for integer values) are to be ignored or are to be used to change the corresponding inventory parameters. |
| Output | ChangedInventory2ID | Integer | No | The ID of the changed inventory record (destination inventory). |
| Output | InventoryHistoryID | Integer | No | The INVENTORY2_HISTORY_HEADER record ID, populated when the history is generated. |

## Validations

- The system checks that Inventory2ID is provided and exists in the database.  
- The system checks that StartTime is before EndTime (if they are provided).  
- The system checks that OperationCode is non-empty (if OperationRevision is provided).  
- The system checks that HistoryType can take one of these values: 1, 2, 3. Any other value will be converted to 1 (None) by default.  
- The system checks that TransactionCode is provided (if HistoryType is not None).  
- The system checks that HistoryMode is set to 1 (Async), 2 (Sync), or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated).  
- The system checks that WipOrderNo is provided together with WipOrderType. The OprSequenceNo requires both of these parameters, and the StepSequenceNo requires OprSequenceNo.  
- The system checks that OrderNo is provided together with OrderType. The OrderLineNo parameter requires both of these parameters.  
- If ToWarehouseLocationId is set, then ToContainerNo is not set.  
- If ToContainerNo is set, then ToWarehouseLocationId is not set.  
- If ToContainerNo is set, then it must have WarehouseLocationId specified.  
- The system checks if there is enough quantity to change (allocated or on-hand).  
- If ToSerialNo is specified, then quantity can only be set to 0, 1, or Decimal.Null.

## System Processing

- The system reads the source and destination inventory.  
- If the following conditions are met, the BC does not make any changes: 
 
- ToSerialNo is not set and Quantity is not set 
- The specified inventory does not have a SerialNo 
 
- If ToSerialNo is provided, the system ignores the provided Quantity and assumes that Quantity equals 1. 
- If the specified inventory has SerialNo, the system ignores the provided Quantity and assumes that Quantity equals 1. 
- the system moves the requested quantity from the source into the destination Inventory with the following algorithm: 
 
- If the entire quantity is to be moved, the following rules apply: 
 
- If the destination inventory exists, the source inventory is deleted and the destination is updated by the requested quantity. 
- Otherwise, the source inventory is updated with the inputted target properties. 
 
- If the partial quantity is to be moved, the following rules apply: 
 
- If the destination inventory exists, both the source and destination inventory are updated with the requested quantity (the source is decreased and the destination is increased). 
- Otherwise, the destination inventory is created with the requested quantity and the target inventory attributes, and the source inventory is updated (quantity decreased).

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL.
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as order, WIP Order, DFC code, Project, Reason Code, transaction code, etc. The order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders that are responsible for the inventory change. 
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

The difference between the aggregated and the full mode is visible only for such Container actions as allocate, deallocate, decrease and move with child containers. ChangeInventory2Properties updates specific row from INVENTORY2 table (based on Inventory2ID provided as input).
 

When the inventory history is generated asynchronously, the following internal schemas are used:
 
 
- FlexNet.BusinessFacade.Inventory.Inventory2History.xsd 
- FlexNet.BusinessRules.Inventory.Inventory2History.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INVENTORY2 | ID | Inventory2ID |
|  | ProductID | ToProductID |
|  | WarehouseLocationID | ToWarehouseLocationID |
|  | Container | ToContainerNo |
|  | SerialNo | ToSerialNo |
|  | LotNo | ToLotNo |
|  | InventoryClassID | ToInventoryClassID |
|  | InventoryStatus | ToInventoryStatus |
|  | PartnerID | ToPartnerID |
|  | GradeID | ToGradeID |
|  | ERPMaterialStockID | ToERPMaterialStockID |
|  | QuantityOnHand | Quantity |
|  | QuantityAllocated | Quantity |
|  | ID | Inventory2HistoryID. The table populated when HistoryMode is Sync or Both and when HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL | ID | Populated when HistoryMode is Sync or Both and when HistoryType is Full or Aggregated. |
