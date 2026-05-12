# IncreaseNotAllocatedInventory2_v2

**Category:** Apriso/Inventory/Movement
**Class:** `FlexNet.BusinessFacade.Inventory.InventoryAdjustController`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Active
**Keywords:** Increase Create Inventory Warehouse

## Description

This Business Component method increases existing Inventory or creates a new record in the INVENTORY2 table using the Input criteria. If WipOrderNo is set, then it also increases the processed quantity for the related WIP Order. The Business Component optionally writes the transaction history XML and populates the Inventory History tables.
 

 

If the BC defines the InventoryID Dynamic Output of the Integer type, then it is populated with the ID of the inventory being increased or created.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both. |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | DFCCode | Char | No | The DFC code for the transaction history. |
| Input | DFCRevision | Char | No | The DFC revision for the transaction history. |
| Input | StartTime | DateTime | No | The transaction start time for the transaction history. |
| Input | EndTime | DateTime | No | The transaction end time for the transaction history. |
| Input | ProductID | Integer | Yes | The ID of the product. |
| Input | WarehouseLocationID | Integer | Conditional | The ID of the of Warehouse Location. |
| Input | ContainerNo | Char | Conditional | The Container number. |
| Input | SerialNo | Char | Conditional | The serial number. |
| Input | LotNo | Char | Conditional | The lot number. |
| Input | InventoryClassID | Integer | Conditional | The ID of the Inventory Class. |
| Input | InventoryStatus | Integer | Conditional | The status of the inventory. |
| Input | PartnerID | Integer | Conditional | The ID of the partner. |
| Input | GradeID | Integer | Conditional | The ID of the inventory grade. |
| Input | ERPMaterialStockID | Integer | Conditional | The ID of the ERP Material Stock location. |
| Input | Quantity | Decimal | Yes | The quantity to increase. |
| Input | UOMCode | Char | No | The unit of measure of the quantity to increase. |
| Input | Reason | Char | No | The Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | The Work Center for the transaction history. |
| Input | CostCenter | Char | No | The cost center for the transaction history. |
| Input | Comment | Char | No | The comment for the transaction history. |
| Input | WipOrderNo | Char | Conditional | The WIP Order number for the transaction history. |
| Input | WipOrderType | Integer | Conditional | The WIP Order type for the transaction history. |
| Input | OprSequenceNo | Char | Conditional | The WIP Operation Sequence number for the transaction history. |
| Input | StepSequenceNo | Integer | Conditional | The WIP Operation Step Sequence number for the transaction history. |
| Input | OrderNo | Char | Conditional | The order number for the transaction history. |
| Input | OrderType | Integer | Conditional | The order type for the transaction history. |
| Input | OrderLineNo | Integer | Conditional | The order line number for the transaction history. |
| Input | ResourceID | Integer | No | The ID of the record from the RESOURCE_ table for the transaction history. |
| Input | UserTransationToken | Char | No | The user transaction token for the transaction history. |
| Input | ProjectCode | Char | No | The project code for the transaction history. |
| Input | GLCode | Char | No | The GLCode for the transaction history. |
| Input | Department | Char | No | The department for the transaction history. |
| Output | InventoryHistoryID | Integer | Conditional | The INVENTORY2_HISTORY_HEADER record ID. This is populated when history is generated. |
| Output | InventoryID | Integer | No | The ID of the inventory being increased or created. This is a Dynamic Output. |

## Validations

The system checks if: 
 
 
- ContainerNo and WarehouseLocationID are not provided at the same time 
- StartTime is before EndTime (if they are provided) 
- DFCCode is non-empty (if DFCRevision is provided) 
- HistoryType can take one of the values: 1, 2, or 3 (any other value will be converted to 1 [None]by default) 
- TransactionCode is provided (if HistoryType is not None) 
- HistoryMode is set to 1 (Async), 2 (Sync), or 3 (Both) when HistoryType is set to 2 (Full) or 3 (Aggregated) 
- WipOrderNo is provided together with WipOrderType; the OprSequenceNo requires both of these parameters, and the StepSequenceNo requires OprSequenceNo 
- OrderNo is provided together with OrderType; the parameter OrderLineNo requires both of these parameters 
- Quantity is provided and has a positive value if SerialNo is not inputted; if SerialNo is provided, then Quantity is always to 1.0 
- The provided ContainerNo is assigned to Warehouse Location 
- UOMCode has been provided; if it has not been provided, it gets this Input from the product (DefaultUOMCode) 
- The InventoryID Output is defined, and if so, the system checks that the type of the InventoryID is Integer

## System Processing

- The system reads the inventory record using the provided parameters (ProductID, LotNo, SerialNo, ContainerNo etc.). If the record does not exist, it is created. 
- The system determines if the InventoryID Dynamic Output is defined and if so it populates it with the ID of the inventory increased or created (in case it did not exist before executing the BC). 
- The requested Quantity (converted using UOMCode) is added to QuantityOnHand. 
- If HistoryType is Full or Aggregated, the Inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created.  
 
- WipOrderNo, WipOrderType and OprSequenceNo are used to populate WIP_ORDER_CONTENT, WIP_ORDER_CONTAINER and WIP_ORDER_CONTENT_SERIAL tables to store information about the inventory issued and received. 
- All the increased inventory associated with a WIP Order will have WIP_ORDER_CONTENT records either updated or created to specify the quantity of the inventory adjusted for this WIP Order. To retrieve/create the WIP_ORDER_CONENT record, the WIP and inventory parameters are used. The record stores information about the quantities in two fields: one in the product's default unit of measure and one in the WIP Order UOM. The following fields in WIP_ORDER_CONTENT will be affected (aside from fields such as LotNo, GradeID, PartnerID etc.): 
 
- QuantityProcessed - the field will be increased by the Quantity specified. This field will describe the total quantity received for this WIP Order. 
- Adjustments to a WIP order can either be performed at the WIP Order level or at the WIP Operation level. If an Operation is specified during the Business Component call, then it will populate the WIP_ORDER_CONTENT table down to the WIP Operation level.  
 
- For Containers and serials, the tables WIP_ORDER_CONTAINER and WIP_ORDER_CONTENT_SERIAL respectively will be updated in the same manner as the WIP_ORDER_CONTENT table defined above. 
- OrderNo, OrderType and OrderLineNo, if passed as parameters, are just passed to the history XML (and copied in the outbound XML if required by the host system). 
- SerialNo is the number of the serial to be processed (increased). As a serial number identifies a quantity of 1.0, it is possible to keep other Inputs empty when the SerialNo is populated.

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transaction such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory change. 
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about the affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation.  
 

The difference between the aggregated and the full mode is visible only for such Container actions as allocate, deallocate, decrease and move with child containers. 
 

When the inventory history is generated asynchronously, the following Internal schemas are used:
 
 
- FlexNet.BusinessFacade.Inventory.Inventory2History.xsd 
- FlexNet.BusinessRules.Inventory.Inventory2History.xsd

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
|  | QuantityOnHand | Increased by Quantity (converted using UOMCode). |
|  | ID | The IDs of the master record and child records (for WIP Operations). |
|  | WipOrderNo | WipOrderNo |
|  | WipOrderType | WipOrderType |
|  | OprSequenceNo | The OprSequenceNo (populated for child records). |
|  | ProductID | ProductID |
|  | UOMCode | UOMCode |
|  | InventoryClassID | InventoryClassID |
|  | InventoryStatus | InventoryStatus |
|  | InventoryID | ID of INVENTORY2 record. |
|  | QuantityProcessed | Increased by Quantity. |
|  | OrderQuantityProcessed | Increased by Quantity converted to OrderUOM. |
|  | ID | The InventoryID Dynamic Output if specified. |
| WIP_ORDER_CONTAINER | ID | ID or record. |
|  | WipOrderContentID | The ID of the parent WIP_ORDER_CONTENT record. |
|  | Container | ContainerNo |
|  | QuantityProcessed | Quantity |
| WIP_ORDER_CONTENT_SERIAL | ProductID | ProductID |
|  | SerialNo | SerialNo |
|  | WipOrderContentID | The ID of the parent WIP_ORDER_CONTENT record. |
|  | WipOrderContainerID | The ID of parent WIP_ORDER_CONTAINER record. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. Table populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both, and HistoryType is Full or Aggregated. |
