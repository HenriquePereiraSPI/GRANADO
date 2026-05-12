# QueryContainerInventory2

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Read Get Query Inventory Warehouse Container

## Description

This Business Component method returns a list of properties of INVENTORY2 records for the specified ContainerNo and all its sub-containers.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container number. |
| Output | Inventory2IDList | ListofInteger | Yes | The list of Inventory2IDs. |
| Output | ProductIDList | ListofInteger | Yes | The list of Product IDs. |
| Output | WarehouseLocationIDList | ListofInteger | Yes | The list of Warehouse Location IDs. |
| Output | ContainerList | ListofChar | Yes | The list of Containers. |
| Output | InContainerList | ListofChar | Yes | The list of parent Containers. |
| Output | SerialNoList | ListofChar | Yes | The list of SerialNo. |
| Output | LotNoList | ListofChar | Yes | The list of LotNo. |
| Output | InventoryClassIDList | ListofInteger | Yes | The list of Inventory Class IDs. |
| Output | InventoryStatusList | ListofInteger | Yes | The list of Inventory Statuses. |
| Output | PartnerIDList | ListofInteger | Yes | The list of Partner IDs. |
| Output | GradeIDList | ListofInteger | Yes | The list of Grade IDs. |
| Output | ERPMaterialStockIDList | ListofInteger | Yes | The list of ERP Material Stock IDs. |
| Output | InventoryAllocationIDList | ListofInteger | Yes | The list of Inventory allocation IDs. |

## Validations

- System checks if ContainerNo is provided.

## System Processing

- System executes DAL query which recursively reads INVENTORY2 records for ContainerNo and all its child containers. The multilevel containers are supported by using InContainer column of the CONTAINER table.
