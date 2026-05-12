# UpdateWarehouseLocationCapacity

**Category:** Apriso/Common/Warehouse
**Class:** `FlexNet.BusinessFacade.Common.WarehouseLocationManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** CurrentWeightUtilization, CurrentSpaceUtilization

## Description

This Business Component method updates CurrentWeightUtilization and CurrentSpaceUtilization for Warehouse Location.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WarehouseLocationID | Integer | Yes | The ID of Warehouse Location to be updated. |
| Input | CurrentWeightUtilization | Decimal | No | The CurrentWeightUtilization of Warehouse Location to be updated. |
| Input | CurrentSpaceUtilization | Decimal | No | The CurrentSpaceUtilization of Warehouse Location to be updated. |

## Validations

- System validates if Warehouse Location exists for the given WarehouseLocationID. 
- System validates if CurrentWeightUtilization is in the range of 0 to 1. 
- System validates if CurrentSpaceUtilization is in the range of 0 to 1.

## System Processing

- If the CurrentWeightUtilization input value is different than Decimal.MinValue, then the CurrentWeightUtilization on Warehouse Location is updated using the provided value. 
- If the CurrentSpaceUtilization input value is different than Decimal.MinValue, then the CurrentSpaceUtilization on Warehouse Location is updated using the provided value.

## Pre-Conditions

None

## Published Events

None

## History Recording in Production

None

## Host Integration Support

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WAREHOUSE_LOCATION | CurrentWeightUtilization | Current Weight Utilization |
|  | CurrentSpaceUtilization | Current Space Utilization |
