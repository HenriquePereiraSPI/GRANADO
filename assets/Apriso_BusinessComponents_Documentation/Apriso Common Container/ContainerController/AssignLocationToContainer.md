# AssignLocationToContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Common.ContainerController`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to assign a location to a Container. Only an empty Container can be assigned a location. The BC can be used to set or change the location. If 0 is passed as the location ID, then the Container location is set to null.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | The Container number. Validated against the CONTAINER table. |
| Input | WarehouseLocationID | Integer | No | The Warehouse location ID. Validated against the WAREHOUSE_LOCATION table. If the value is not set, the Container is unassigned from the current location. |

## Validations

- The system validates the Container. 
- The system validates the Warehouse location. 
- The system validates that the Container is empty.

## System Processing

The system updates the location of the Container.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | WarehouseLocationID | Input. |
