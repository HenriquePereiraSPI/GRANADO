# AllocateInventory2WithAllocation

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.Warehouse.WarehouseController`
**Assembly:** `FlexNet.BusinessFacade.Warehouse.dll`
**Status:** Deprecated
**Keywords:** Allocation Allocate Warehouse Inventory

## Description

This Business Component method is used to create an allocation if one does not exist for the Input parameters and allocates inventory.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | HistoryType | Integer | No | The history type: 1-None, 2-Full, 3-Aggregated. |
| Input | HistoryMode | Integer | Conditional | The transaction history write mode: 1-Async, 2-Sync, 3-Both. |
| Input | TransactionCode | Char | Conditional | The transaction code. |
| Input | OperationCode | Char | Conditional | The DFC code for the transaction history. |
| Input | OperationRevision | Char | No | The DFC revision for the transaction history. |
| Input | StartTime | DateTime | No | The transaction start time for the transaction history. |
| Input | EndTime | DateTime | No | The transaction end time for the transaction history. |
| Input | Inventory2ID | Integer | Yes | The ID of the INVENTORY2 record. |
| Input | Quantity | Decimal | Yes | The quantity to allocate. |
| Input | UOMCode | Char | No | The unit of measure of the quantity to allocate. |
| Output | Reason | Char | No | The Reason Code for the transaction history. |
| Input | WorkCenter | Char | No | The Work Center for the transaction history. |
| Input | CostCenter | Char | No | The cost center for the transaction history. |
| Input | Comment | Char | No | The comment for the transaction history. |
| Input | WipOrderNo | Char | Conditional | The WIP Order number. |
| Input | WipOrderType | Short | Conditional | The WIP Order type. |
| Input | OprSequenceNo | Char | Conditional | The Operation Sequence number. |
| Input | StepSequenceNo | Integer | Conditional | The Step Sequence number. |
| Input | OrderNo | Char | Conditional | The order number (order header). |
| Input | OrderType | Short | Conditional | The order type. |
| Input | OrderLineNo | Integer | Conditional | The order line number. |
| Input | ResourceID | Integer | Conditional | The ID of the Resource. |
| Input | AllocationTag | Char | Conditional | The user-defined allocation tag. |
| Input | UserTransactionToken | Char | No | The user transaction token for the transaction history. |
| Input | ProjectCode | Char | No | The project code for the transaction history. |
| Input | GLCode | Char | No | The GL code for the transaction history. |
| Input | Department | Char | No | The department for the transaction history. |
| Output | CreatedAllocationID | Integer | Yes | The created INVENTORY2_ALLOCATION record ID or the one that exists for the Input parameters. |
| Output | InventoryHistoryID | Integer | Conditional | The INVENTORY2_HISTORY_HEADER record ID, which is populated when the history is generated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| TaskID | Integer | The ID of Task |

## Validations

- The system checks if at least one parameter from WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, OrderNo, OrderType, OrderLineNo, ResourceID, and AllocationTag is provided. 
- The system checks if WipOrderNo is provided together with WipOrderType. OprSequenceNo requires both of these parameters, and StepSequenceNo requires just OprSequenceNo. 
- The system checks if OrderNo is provided together with OrderType. OrderLineNo requires both of these parameters. 
- The system checks that the specified inventory exists and QuantityOnHand is not less than the requested quantity to allocate (converted using UOMCode) (if Quantity is specified). 
- The system checks that StartTime is before EndTime (if they are provided). 
- The system checks that OperationCode is not empty (if OperationRevision is provided). 
- HistoryType can take one of these values: 1, 2, or 3. Any other value will be converted to 1 (None) by default. 
 
- When HistoryType is set to 2 (Full) or 3 (Aggregated), the system checks that HistoryMode is set to 1 (Async), 2 (Sync), or 3 (Both). 
 
- The system checks that TransactionCode is provided (if HistoryType is not None). 
- The system checks that UomCode exists (if provided). 
- The system checks that Quantity is greater than 0. 
- The system checks that TaskID exists (if provided).

## System Processing

- The system checks if a record exists in INVENTORY2_ALLOCATION for the Input parameters. If one does not exist, then it creates it. 
- If Quantity is not set, then the system reads the QuantityOnHand value from the inventory record with the same ID as the Inventory2ID Input parameter and uses the default UOMCode instead of the Input parameter's UOMCode. 
- The system allocates the requested Quantity (converted using UOMCode) to the allocation record specified by the Input parameters (that already exist or that are in the created record): 
 
- If all the available Quantity is allocated, QuantityOnHand is added to the QuantityAllocated record, and the source inventory record is removed. When the allocation record does not exist yet, the source record is updated: QuantityOnHand is moved to QuantityAllocated and InventoryAllocationID is set to ToAllocationID. 
- Otherwise, QuantityOnHand is decreased and QuantityAllocated is increased (or a new allocation record is created if it does not exist). 
 
- If HistoryType is Full or Aggregated, then the inventory history is created: 
 
- If HistoryMode is Sync or Both, the INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL tables are populated. 
- If HistoryMode is Async or Both, the transaction history XML is created.

## History Recording in Production

The history of inventory changes is stored in two tables: INVENTORY2_HISTORY_HEADER and INVENTORY2_HISTORY_DETAIL. 
 
 
- The INVENTORY2_HISTORY_HEADER table stores general information about the transactions such as: Order, WIP Order, DFC Code, Project, Reason Code, Transaction Code etc. The Order and WIP Order numbers in the INVENTORY2_HISTORY_HEADER table are related to particular orders which are responsible for inventory changes. 
- The INVENTORY2_HISTORY_DETAIL table contains detailed information about the affected quantity of inventory before and after the change (e.g., Quantity, ProductNo/ToProductNo, Container/ToContainer, SerialNo/ToSerialNo, ERPMaterialStock/ToERPMaterialStock, etc.). The Order and WIP Order in INVENTORY2_HISTORY_DETAIL table are related to the inventory allocation. 
 

For Container actions (allocate, deallocate, move), the INVENTORY2_HISTORY_DETAIL table is populated in two modes: full or aggregated. 
 
 
- In the full mode, the history of inventory changes for all items is stored in separate records (separately for the Container and all subcontainers). The allocated or on-hand quantity is stored as Quantity in the INVENTORY2_HISTORY_DETAIL table.  
- In the aggregated mode, the content of a given Container and all subcontainers is aggregated. This means that all the inventory is treated as it was placed directly in the main Container. The allocated and on-hand quantities are summed. 
 

When the inventory history is generated asynchronously, the following Internal schemas are used: 
 
 
- FlexNet.BusinessFacade.Inventory.Inventory2History.xsd  
- FlexNet.BusinessRules.Inventory.Inventory2History.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ID | Inventory2ID |
|  | QuantityAllocated | Increased by Quantity (converted using UOMCode) in the appropriate record. |
|  | QuantityOnHand | Decreased by Quantity (converted using UOMCode) in the appropriate record. |
| INVENTORY2_HISTORY_HEADER | ID | InventoryHistoryID. The table populated when HistoryMode is Sync or Both and HistoryType is Full or Aggregated. |
| INVENTORY2_HISTORY_DETAIL |  | Populated when HistoryMode is Sync or Both and HistoryType is Full or Aggregated. |
| INVENTORY2_ALLOCATION |  | Populated if there is no record for these specified parameters: WipOrderNo, WipOrderType, OprSequenceNo, StepSequenceNo, OrderNo, OrderType, OrderLineNo, AllocationTag, TaskID. |
