# MoveInventory2_v2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryMoveController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Move Transport Inventory Warehouse

## Description

Using input criteria, this Business Component method moves the requested Quantity to the target Container and Warehouse Location. Affected inventory can be allocated or not. Optionally, it creates the transaction history XML and populates Inventory History tables. This Business Component is an extension of MoveNotAllocatedInventory2 Business Component method.

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
| Input | ProductID | Integer | Yes | ID of the Product. |
| Input | WarehouseLocationID | Integer | Conditional | ID of the Warehouse Location. |
| Input | ContainerNo | Char | Conditional | Container number. |
| Input | SerialNo | Char | Conditional | Serial number. |
| Input | LotNo | Char | Conditional | Lot number. |
| Input | InventoryClassID | Integer | Conditional | ID of the Inventory Class. |
| Input | InventoryStatus | Integer | Conditional | Status of the Inventory. |
| Input | PartnerID | Integer | Conditional | ID of the Partner. |
| Input | GradeID | Integer | Conditional | ID of the Inventory Grade. |
| Input | ERPMaterialStockID | Integer | Conditional | ID of the ERP Material Stock location. |
| Input | AllocationID | Integer | No | Inventory allocation ID. |
| Input | Quantity | Decimal | Conditional | Quantity to move. |
| Input | UOMCode | Char | No | Unit of Measure of the Quantity to move. |
| Input | Reason | Char | No | Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | Work Center for the transaction history. |
| Input | CostCenter | Char | No | Cost Center for the transaction history. |
| Input | Comment | Char | No | Comment for the transaction history. |
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
| Input | UserTransationToken | Char | No | User transaction token for the transaction history. |
| Input | ProjectCode | Char | No | ProjectCode for the transaction history. |
| Input | GLCode | Char | No | GLCode for the transaction history. |
| Input | Department | Char | No | Department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | INVENTORY2_HISTORY_HEADER record ID; populated when history is generated. |

## Validations

System checks if: 
 
 
- ToContainerNo and ToWarehouseLocationID are not provided at the same time, 
- ContainerNo and WarehouseLocationID are not provided at the same time, 
- UOMCode is provided when SerialNo is not inputted, otherwise UOMCode is not required (it is ignored) 
- Quantity is provided and has a positive value if SerialNo is not inputted, if SerialNo is provided then Quantity is always set to 1.0 
- The provided ContainerNo is assigned to Warehouse Location 
- The movement is required - destination Container or Warehouse Location must be different than current one 
- Inventory exists and there is enough quantity to move (allocated or on-hand). 
- StartTime is before EndTime (if they are provided) 
- DFCCode is non-empty (if DFCRevision is provided) 
- HistoryType can take one of the values: 1,2,3. Any other value will be converted to 1 (None) by default 
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync) or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- WipOrderNo is provided together with WipOrderType; the OprSequenceNo requires both above mentioned parameters, and the StepSequenceNo requires OprSequenceNo 
- OrderNo is provided together with OrderType, the parameter OrderLineNo requires both above mentioned parameters 
- UOMCode has been provided; if it has not been provided, it gets this input from the Product (DefaultUOMCode)

## System Processing

- System reads the Inventory record using provided parameters (ProductID, LotNo, SerialNo, ContainerNo etc.). 
- If ToContainerNo is provided, the target Warehouse Location is determined by the Container. 
- If SerialNo is not provided, system checks if provided UOMCode equals DefaultUOMCode for corresponding Product record. If it is different than DefaultUOMCode, System searches for proper Conversion between inputted UOMCode and DefaultUOMCode. If such Conversion is found, Quantity is converted using ConversionFactor value, otherwise an error is returned. 
- System moves requested Quantity (converted using UOMCode or 1.0 when SerialNo is specified) to the target Container or Warehouse Location: 
 
- If all available quantity has to be moved (QuantityAllocated if AllocationID is provided or QuantityOnHand if it is not), system moves appropriate Quantity to the Inventory record with target Container and Warehouse Location, and deletes the source record;if target record does not exist, the record of source Inventory is updated with ToContainer and ToWarehouseLocationID. 
 
 

 
 
 
- If quantity is moved partially, the quantity in source Inventory record is decreased, and the quantity in target record is increased (or a new record with ToContainer and ToWarehouseLocationID is created, if it does not yet exist). 
 
 
 
 
- If HistoryType is Full or Aggregated, the Inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created.

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change.  
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

The difference between the aggregated and the full mode is visible only for such Container actions as allocate, deallocate, decrease and move with child containers. MoveInventory2_v2 moves only inventory without container.
 

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
|  | InventoryAllocationID | AllocationID |
|  | QuantityAllocated | If AllocationID is set, decreased by Quantity (converted using UOMCode) in source record and increased in target record. |
|  | QuantityOnHand | If AllocationID is not set, decreased by Quantity (converted using UOMCode) in source record and increased in target record. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
