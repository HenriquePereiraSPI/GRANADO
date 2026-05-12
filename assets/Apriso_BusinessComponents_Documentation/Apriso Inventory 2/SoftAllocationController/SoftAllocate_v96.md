# SoftAllocate_v96

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.SoftAllocation.SoftAllocationController`
**Assembly:** `FlexNet.BusinessFacade.SoftAllocation.dll`
**Status:** Active
**Keywords:** SoftAllocate Allocate Allocation SoftAllocation Warehouse

## Description

This Business Component method creates Soft Allocation for the inputted parameters. The inventory will be allocated to inputted Order, WIP Order, Resource or Allocation Tag. Related INVENTORY2_ALLOCATION record will be created if required.
 

The Soft Allocation does not need to be precise when describing what is allocated.
 Examples:
 
 
- We can allocate the whole container to the machine or order without specifying the quantity (container can even be empty at the time it is allocated), 
- We can allocate the whole warehouse location to the machine or order without specifying the quantity (warehouse location can even be empty at the time it is allocated), 
- We can allocate certain quantity of product for production order without specifying the lot number (we just record that we need certain quantity for production, actual lot will be known later), 
- We can allocate the whole structure of inventory and containers/parent containers to the Advanced Shipping Notice (ASN) before it is received. In that case, some inventory attributes are not known and we cannot create this inventory in inactive status. 
 

Information about Soft Allocation is stored in SOFT_INVENTORY2_ALLOCATION and INVENTORY2_ALLOCATION tables.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductIDList | ListofInteger | Conditional | List of Product IDs. |
| Input | WarehouseLocationIDList | ListofInteger | Conditional | List of Warehouse Location. |
| Input | ContainerNoList | ListofChar | Conditional | List of Containers. |
| Input | SerialNoList | ListofChar | Conditional | List of Serials. |
| Input | LotNoList | ListofChar | Conditional | List of Lots. |
| Input | InventoryClassIDList | ListofInteger | Conditional | List of Inventory Class IDs. |
| Input | InventoryStatusList | ListofInteger | Conditional | List of Inventory Status. |
| Input | PartnerIDList | ListofInteger | Conditional | List of Partner IDs. |
| Input | GradeIDList | ListofInteger | Conditional | List of Grade IDs. |
| Input | ERPMaterialStockIDList | ListofInteger | Conditional | List of ERP Material Stocks. |
| Input | QuantityList | ListofDecimal | No | List of Quantities. |
| Input | WipOrderNoList | ListofChar | Conditional | List of WIP Order numbers. |
| Input | WipOrderTypeList | ListofInteger | Conditional | List of WIP Order types. |
| Input | OprSequenceNoList | ListofChar | Conditional | List of Operation Sequence numbers. |
| Input | StepSequenceNoList | ListofInteger | Conditional | List of Step Sequence numbers. |
| Input | OrderNoList | ListofChar | Conditional | List of Order numbers (Order headers). |
| Input | OrderTypeList | ListofInteger | Conditional | List of Order types. |
| Input | OrderLineNoList | ListofInteger | Conditional | Order Line numbers. |
| Input | ResourceIDList | ListofInteger | Conditional | IDs of the Resources. |
| Input | AllocationTagList | ListofChar | Conditional | User-defined allocation tags. |
| Output | CreatedSoftInventoryAllocationIDList | ListofInteger | Yes | IDs of newly created records. |

## Validations

- System checks if the provided parameter lists are of the same size, 
- System checks if at least one of the following input parameters is provided for each Soft Allocation: ProductID, SerialNo, LotNo, Container or WarehouseLocationID, 
- System checks if SerialNo comes with ProductID, 
- System checks if LotNo comes with ProductID, 
- If SerialNo is provided, system ignores the provided Quantity and assumes that Quantity equals 1, 
- If Quantity is not provided or set to zero, system sets Quantity to DBNull, 
- System checks if WipOrderNo is provided together with WipOrderType. The OprSequenceNo requires both above mentioned parameters, and the StepSequenceNo requires OprSequenceNo, 
- System checks if OrderNo is provided together with OrderType. The OrderLineNo parameter requires both above mentioned parameters.

## System Processing

-  

System creates new records in SOFT_INVENTORY2_ALLOCATION table and if it is required in INVENTORY2_ALLOCATION table for every Soft Allocation provided.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SOFT_INVENTORY2_ALLOCATION | ID |  |
|  | ProductID | Item from ProductIDList |
|  | WarehouseLocationID | Item from WarehouseLocationIDList |
|  | Container | Item from ContainerNoList |
|  | SerialNo | Item from SerialNoList |
|  | LotNo | Item from LotNoList |
|  | InventoryClassID | Item from InventoryClassIDList |
|  | InventoryStatus | Item from InventoryStatusList |
|  | PartnerID | Item from PartnerIDList |
|  | GradeID | Item from GradeIDList |
|  | ERPMaterialStockID | Item from ERPMaterialStockIDList |
|  | InventoryAllocationID | Retrieved from INVENTORY2_ALLOCATION or created internally |
|  | Quantity | Item from QuantityList |
| INVENTORY2_ALLOCATION | ID |  |
|  | WipOrderNo | Item from WipOrderNoList |
|  | WipOrderType | Item from WipOrderTypeList |
|  | OprSequenceNo | Item from OprSequenceNoList |
|  | StepSequenceNo | Item from StepSequenceNoList |
|  | OrderNo | Item from OrderNoList |
|  | OrderType | Item from OrderTypeList |
|  | OrderLineNo | Item from OrderLineNoList |
|  | ResourceID | Item from ResourceIDList |
|  | AllocationTag | Item from AllocationTagList |
