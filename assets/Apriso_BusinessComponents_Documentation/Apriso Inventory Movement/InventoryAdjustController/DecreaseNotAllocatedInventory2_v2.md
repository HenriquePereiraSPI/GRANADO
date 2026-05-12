# DecreaseNotAllocatedInventory2_v2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAdjustController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Decrease Remove Inventory Warehouse

## Description

Using input criteria, this Business Component method decreases existing Inventory or removes INVENTORY2 record, if the remaining quantity is zero. If WipOrderNo is set, then it also decreases the processed quantity for related WIP Order. Optionally, it creates the transaction history XML and populates Inventory History tables.

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
| Input | ProductID | Integer | Yes | ID of Product. |
| Input | WarehouseLocationID | Integer | Conditional | ID of Warehouse Location. |
| Input | ContainerNo | Char | Conditional | Container number. |
| Input | SerialNo | Char | Conditional | Serial number. |
| Input | LotNo | Char | Conditional | Lot number. |
| Input | InventoryClassID | Integer | Conditional | ID of Inventory Class. |
| Input | InventoryStatus | Integer | Conditional | Status of the Inventory. |
| Input | PartnerID | Integer | Conditional | ID of Partner. |
| Input | GradeID | Integer | Conditional | ID of Inventory Grade. |
| Input | ERPMaterialStockID | Integer | Conditional | ID of ERP Material Stock location. |
| Input | Quantity | Decimal | Yes | Quantity to decrease. |
| Input | UOMCode | Char | No | Unit of Measure of the Quantity to decrease. |
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
| Input | UserTransationToken | Char | No | User transaction token for the transaction history. |
| Input | ProjectCode | Char | No | ProjectCode for the transaction history. |
| Input | GLCode | Char | No | GLCode for the transaction history. |
| Input | Department | Char | No | Department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | INVENTORY2_HISTORY_HEADER record ID; populated when history is generated. |

## Validations

System checks if:
 
 
- There is enough on-hand quantity to decrease 
- ContainerNo and WarehouseLocationID are not provided at the same time 
- StartTime is before EndTime (if they are provided) 
- DFCCode is non-empty (if DFCRevision is provided) 
- HistoryType can take one of the values: 1, 2 or 3. Any other value will be converted to 1 (None) by default 
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync) or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- WipOrderNo is provided together with WipOrderType; the OprSequenceNo requires both above mentioned parameters, and the StepSequenceNo requires OprSequenceNo 
- OrderNo is provided together with OrderType, the parameter OrderLineNo requires both above mentioned parameters 
- Quantity is provided and has a positive value if SerialNo is not inputted; if SerialNo is provided then Quantity is always set to 1.0 
- The provided ContainerNo is assigned to Warehouse Location 
- UOMCode has been provided; if it has not been provided, it gets this input from the Product (DefaultUOMCode)

## System Processing

- System reads the Inventory record using the provided parameters (ProductID, LotNo, SerialNo, ContainerNo etc.). 
- The requested Quantity (converted using UOMCode) is deducted from QuantityOnHand. If remaining quantity is zero, the record is removed 
- If HistoryType is Full or Aggregated, the Inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created. 
 
- The WipOrderNo, WipOrderType and OprSequenceNo are used to populate WIP_ORDER_CONTENT, WIP_ORDER_CONTAINER and WIP_ORDER_CONTENT_SERIAL tables to store information about Inventory issued and received. 
- All decreased inventory associated with a WIP Order will have WIP_ORDER_CONTENT records either updated or created to specify the quantity of inventory adjusted for this WIP Order. To retrieve or create WIP_ORDER_CONTENT record, WIP and Inventory parameters are used. The record stores information about quantities in two fields: one in Product's default unit of measure and one in WIP Order UOM. The following fields in WIP_ORDER_CONTENT will be affected (aside from fields such as LotNo, GradeID, PartnerID etc.): 
 
- QuantityProcessed - the field will be increased by the Quantity specified. This field will be negative and it will describe the total quantity issued for this WIP Order. 
- Adjustments to a WIP Order can either be performed at the WIP Order level or at the WIP Operation level. If an Operation is specified during the Business Component call, then it will populate the WIP_ORDER_CONTENT table down to the WIP Operation level.  
 
- For containers and serials, the tables WIP_ORDER_CONTAINER and WIP_ORDER_CONTENT_SERIAL, respectively, will be updated in the same way as the WIP_ORDER_CONTENT table defined above. 
- OrderNo, OrderType and OrderLineNo, if passed as parameters, are only used to generate the history XML (and copied into outbound XML, if required by the host system). 
- SerialNo is the number of the Serial to be processed (increased). As Serial number enforces a quantity of 1.0, it is possible to keep other inputs empty when the SerialNo is populated.

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
|  | WarehouseLocationID | WarehouseLocationID |
|  | Container | ContainerNo |
|  | SerialNo | SerialNo |
|  | LotNo | LotNo |
|  | InventoryClassID | InventoryClassID |
|  | InventoryStatus | InventoryStatus |
|  | PartnerID | PartnerID |
|  | GradeID | GradeID |
|  | ERPMaterialStockID | ERPMaterialStockID |
|  | QuantityOnHand | Decreased by Quantity (converted using UOMCode). |
|  | ID | IDs of master record and child records (for WIP Operations). |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | OprSequenceNo (populated for child records) |
|  | ProductID | ProductID |
|  | UOMCode | UOMCode |
|  | InventoryClassID | InventoryClassID |
|  | InventoryStatus | InventoryStatus |
|  | InventoryID | ID of INVENTORY2 record. |
|  | QuantityProcessed | Decreased by Quantity. |
|  | OrderQuantityProcessed | Decreased by Quantity converted to OrderUOM. |
| WIP_ORDER_CONTAINER | ID | ID or record. |
|  | WipOrderContentID | ID of parent WIP_ORDER_CONTENT record. |
|  | Container | ContainerNo |
|  | QuantityProcessed | Quantity |
| WIP_ORDER_CONTENT_SERIAL | ProductID | ProductID |
|  | SerialNo | SerialNo |
|  | WipOrderContentID | ID of parent WIP_ORDER_CONTENT record. |
|  | WipOrderContainerID | ID of parent WIP_ORDER_CONTAINER record. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
