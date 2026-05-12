# CreateContainer_v96

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Create Container Warehouse

## Description

This Business Component creates a new Container in a specified Warehouse Location.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | New Container number. |
| Input | WarehouseLocationID | Integer | Yes | Warehouse Location record ID. |
| Input | ContainerClassID | Integer | No | Class ID of the Container. |
| Input | ContainerStatus | Integer | No | Status of the Container. |

## Validations

- System checks if: 
 
- Container number is provided, 
- Warehouse Location is provided.

## System Processing

- System inserts a new record into the CONTAINER table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | Container | ContainerNo |
|  | WarehouseLocationID | WarehouseLocationID |
|  | ContainerClassID | ContainerClassID, null if not provided. |
|  | ContainerStatus | ContainerStatus, null if not provided. |
