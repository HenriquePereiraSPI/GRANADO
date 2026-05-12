# SoftDeallocateByParams_v96

**Category:** Apriso/Inventory 2
**Class:** `FlexNet.BusinessFacade.SoftAllocation.SoftAllocationController`
**Assembly:** `FlexNet.BusinessFacade.SoftAllocation.dll`
**Status:** Active
**Keywords:** SoftAllocate Allocate Allocation SoftAllocation Warehouse SoftDeallocate SoftDeallocation

## Description

This Business Component method allows deallocating Soft Allocation created by SoftAllocate Business Component. Ccompared to Hard Allocation, Soft Allocation does not need to be precise when describing what is allocated.
 

This method can be used only for complete deallocation. It removes records from SOFT_INVENTORY2_ALLOCATION table and if it is possible, removes records from INVENTORY2_ALLOCATION table.

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
| Input | WipOrderNoList | ListofChar | Conditional | List of WIP Order numbers. |
| Input | WipOrderTypeList | ListofInteger | Conditional | List of WIP Order types. |
| Input | OprSequenceNoList | ListofChar | Conditional | List of Operation Sequence numbers. |
| Input | StepSequenceNoList | ListofInteger | Conditional | List of Step Sequence numbers. |
| Input | OrderNoList | ListofChar | Conditional | List of Order numbers (Order headers). |
| Input | OrderTypeList | ListofInteger | Conditional | List of Order types. |
| Input | OrderLineNoList | ListofInteger | Conditional | Order Line numbers. |
| Input | ResourceIDList | ListofInteger | Conditional | IDs of the Resources. |
| Input | AllocationTagList | ListofChar | Conditional | User-defined allocation tags. |
| Output | NumberOfDeallocatedItems | Integer | Yes | Number of deallocated records from SOFT_INVENTORY2_ALLOCATION table. |

## Validations

- System checks if provided parameter lists are of the same size.

## System Processing

- System uses APR_GEN.AllocatedContent_GetData Standard Operation to select records from SOFT_INVENTORY2_ALLOCATION table which satisfy criteria given by the inputted parameters, 
- System removes selected records from SOFT_INVENTORY2_ALLOCATION table, 
- System removes record from INVENTORY2_ALLOCATION table if it has no more references to SOFT_INVENTORY2_ALLOCATION and INVENTORY2 tables.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SOFT_INVENTORY2_ALLOCATION | ID | Removed. |
| INVENTORY2_ALLOCATION | ID | May be removed. |
