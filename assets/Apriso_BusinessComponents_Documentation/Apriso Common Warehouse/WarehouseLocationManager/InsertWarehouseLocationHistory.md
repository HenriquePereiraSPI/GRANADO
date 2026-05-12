# InsertWarehouseLocationHistory

**Category:** Apriso/Common/Warehouse
**Class:** `FlexNet.BusinessFacade.Common.WarehouseLocationManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** History Warehouse Capacity Utilization Space Weight

## Description

This Business Component method populates the WAREHOUSE_LOCATION_HISTORY table using current parameters of Location, which was specified on the input. The differences between current and previous space and weight utilization of the Location is calculated using the latest record stored in the history.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WarehouseLocationID | Integer | Yes | ID of Warehouse Location to create a history record for. |
| Output | WarehouseLocationHistoryID | Integer | Yes | ID of created record. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Inventory2HistoryHeaderID | Integer | Optional link to the INVENTORY2_HISTORY_HEADER table. |

## Validations

- System checks if WarehouseLocationID is provided and appropriate record exists in the WAREHOUSE_LOCATION table.

## System Processing

- System reads WAREHOUSE_LOCATION record for provided WarehouseLocationID.  
- System reads the latest record (with the highest ID) from WAREHOUSE_LOCATION_HISTORY table for given WarehouseLocationID. If the record is not found, the delta values of Location's utilization are not calculated.  
- System copies appropriate fields from WAREHOUSE_LOCATION record to the new history record. Then, it calculates the difference between current and previous utilizations (if both are available). The delta values are calculated by subtracting previous value of utilization from the current one, separately for the space and weight utilization.  
- System creates a record in the WAREHOUSE_LOCATION_HISTORY table and returns an ID of the created record.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WAREHOUSE_LOCATION_HISTORY | ID | WarehouseLocationHistoryID |
|  | WarehouseLocationID | WarehouseLocationID, link to the WAREHOUSE_LOCATION. |
|  | Location | Copied from WAREHOUSE_LOCATION table. |
|  | Facility | Copied from WAREHOUSE_LOCATION table. |
|  | Warehouse | Copied from WAREHOUSE_LOCATION table. |
|  | WarehouseLocationType | Copied from WAREHOUSE_LOCATION table. |
|  | Zone | Copied from WAREHOUSE_LOCATION table. |
|  | WarehouseLocationClassName | Copied from WAREHOUSE_LOCATION_CLASS.Name. |
|  | StorageBin | Copied from WAREHOUSE_LOCATION table. |
|  | WalkPath | Copied from WAREHOUSE_LOCATION table. |
|  | AllocationPath | Copied from WAREHOUSE_LOCATION table. |
|  | FillPath | Copied from WAREHOUSE_LOCATION table. |
|  | Aisle | Copied from WAREHOUSE_LOCATION table. |
|  | Row_ | Copied from WAREHOUSE_LOCATION table. |
|  | Tier | Copied from WAREHOUSE_LOCATION table. |
|  | CurrentWeightUtilization | Copied from WAREHOUSE_LOCATION table. |
|  | DeltaWeightUtilization | Present value of CurrentWeightUtilization minus previous value stored in the history table. |
|  | CurrentSpaceUtilization | Copied from WAREHOUSE_LOCATION table. |
|  | DeltaSpaceUtilization | Present value of CurrentSpaceUtilization minus previous value stored in the history table. |
|  | Inventory2HistoryHeaderID | Inventory2HistoryHeaderID |
