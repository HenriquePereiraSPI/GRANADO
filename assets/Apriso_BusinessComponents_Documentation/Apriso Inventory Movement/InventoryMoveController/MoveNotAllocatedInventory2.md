# MoveNotAllocatedInventory2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryMoveController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Deprecated
**Keywords:** Move Transport Inventory Warehouse

## Description

This Business Component, using input criteria, moves requested Quantity to the target Container and Warehouse Location. Affected inventory cannot be allocated. If we want to operate on allocated inventory, then MoveInventory2 Business Component method should be used. Optionally, the MoveNotAllocatedInventory2 Business Component creates the transaction history XML and populates Inventory History tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | OperationCode | Char | Conditional | DFC Code for transaction history. |
| Input | OperationRevision | Char | No | DFC Revision for transaction history. |
| Input | StartTime | DateTime | No | Transaction start time for transaction history. |
| Input | EndTime | DateTime | No | Transaction end time for transaction history. |
| Input | ProductID | Integer | Yes | The ID of Product. |
| Input | WarehouseLocationID | Integer | Conditional | The ID of Warehouse Location. |
| Input | ContainerNo | Char | Conditional | Container number. |
| Input | SerialNo | Char | Conditional | Serial number. |
| Input | LotNo | Char | Conditional | Lot number. |
| Input | InventoryClassID | Integer | Conditional | The ID of Inventory Class. |
| Input | InventoryStatus | Integer | Conditional | Status of the Inventory. |
| Input | PartnerID | Integer | Conditional | The ID of Partner. |
| Input | GradeID | Integer | Conditional | The ID of Inventory Grade. |
| Input | ERPMaterialStockID | Integer | Conditional | The ID of ERP Material Stock location. |
| Input | Quantity | Decimal | Conditional | Quantity to move. |
| Input | UOMCode | Char | No | The Unit of Measure of the Quantity to move. |
| Input | Reason | Char | No | The reason code for transaction history. |
| Input | WorkCenter | Char | No | The Work Center for transaction history. |
| Input | CostCenter | Char | No | The Cost Center for transaction history. |
| Input | Comment | Char | No | The comment for transaction history. |
| Input | WipOrderNo | Char | Conditional | WIP Order number for transaction history. |
| Input | WipOrderType | Integer | Conditional | WIP Order type for transaction history. |
| Input | OprSequenceNo | Char | Conditional | WIP Operation sequence number for transaction history. |
| Input | StepSequenceNo | Integer | Conditional | WIP Operation Step sequence number for transaction history. |
| Input | OrderNo | Char | Conditional | Order number for transaction history. |
| Input | OrderType | Integer | Conditional | Order type for transaction history. |
| Input | OrderLineNo | Integer | Conditional | Order line number for transaction history. |
| Input | ResourceID | Integer | Conditional | ID of record from RESOURCE_ table for transaction history. |
| Input | ToWarehouseLocationID | Integer | Conditional | Target Warehouse Location ID. |
| Input | ToContainerNo | Char | Conditional | Target Container number. |
| Input | UserTransationToken | Char | No | User transaction token for transaction history. |
| Input | ProjectCode | Char | No | ProjectCode for the transaction history. |
| Input | GLCode | Char | No | GLCode for the transaction history. |
| Input | Department | Char | No | Department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | INVENTORY2_HISTORY_HEADER record ID; populated when history is generated. |

## Validations

System checks if: 
 
 
- ToContainerNo and ToWarehouseLocationID are not provided at the same time 
- ContainerNo and WarehouseLocationID are not provided at the same time 
- Quantity is provided and has a positive value if SerialNo is not inputted, if SerialNo is provided then Quantity is always set to 1.0 
- The provided ContainerNo is assigned to Warehouse Location 
- The movement is required - destination Container or Warehouse Location must be different than current ones. 
- Inventory exists and there is enough quantity to move.  
- StartTime is before EndTime (if they are provided) 
- OperationCode is non-empty (if OperationRevision is provided) 
- HistoryType can take one of the values: 1, 2 or 3. Any other value will be converted to 1 (None) by default 
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync) or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- WipOrderNo is provided together with WipOrderType; the OprSequenceNo requires both above mentioned parameters, and the StepSequenceNo requires OprSequenceNo 
- OrderNo is provided together with OrderType, the parameter OrderLineNo requires both above mentioned parameters 
- UOMCode has been provided; if it has not been provided, it gets this input from the Product (DefaultUOMCode)

## System Processing

- System reads the Inventory record using the provided parameters (ProductID, LotNo, SerialNo, ContainerNo etc.). 
- If ToContainerNo is provided, the target Warehouse Location is determined by the Container. 
- System moves requested Quantity (converted using UOMCode or 1.0 when SerialNo is specified) to the target Container or Warehouse Location: 
 
- If all available quantity has to be moved, system moves the Quantity to the Inventory record with target Container and Warehouse Location, and deletes the source record; if target record does not exits, the record of source Inventory is updated with ToContainer and ToWarehouseLocationID. 
 
 

 
 
 
- If quantity is moved partially, the quantity in source Inventory record is decreased, and the quantity in target record is increased (or new record with ToContainer and ToWarehouseLocationID is created, if does not exist yet). 
 
 
 
 
- If HistoryType is Full or Aggregated, the Inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created.

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
|  | WarehouseLocationID | WarehouseLocationID, ToWarehouseLocationID |
|  | Container | ContainerNo, ToContainerNo |
|  | SerialNo | SerialNo |
|  | LotNo | LotNo |
|  | InventoryClassID | InventoryClassID |
|  | InventoryStatus | InventoryStatus |
|  | PartnerID | PartnerID |
|  | GradeID | GradeID |
|  | ERPMaterialStockID | ERPMaterialStockID |
|  | QuantityOnHand | Decreased by Quantity (converted using UOMCode) in source record and increased in target record. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
