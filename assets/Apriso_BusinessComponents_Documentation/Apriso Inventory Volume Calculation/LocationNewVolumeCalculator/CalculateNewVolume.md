# CalculateNewVolume

**Category:** Apriso/Inventory/Volume Calculation
**Class:** `FlexNet.BusinessFacade.Inventory.LocationNewVolumeCalculator`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Deprecated

## Description

This Business Component method is used to calculate the new volume available at a given location after a given product quantity has been moved into or out of that location. This BC is deprecated. The UpdateWarehouseLocationCapacity BC should be used instead.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WarehouseLocationID | Integer | Yes | The location for which the volume should be calculated. |
| Input | ProductID | Integer | Yes | The ProductID of the product to move. |
| Input | Quantity | Decimal | Yes | The quantity to be moved. |
| Input | Increase | Boolean | Yes | Whether this is an increase or a decrease. |
| Output | NewVolume | Decimal | No | The resulting volume of the location. |

## Validations

- The system validates whether the product and locations provided exist.

## System Processing

- The system retrieves the remaining volume for the Warehouse Location from the in-unit Characteristic's volume capacity. 
- The system calculates the volume consumed by the additional products moved in (increase = Y) or out (increase = N) by multiplying the product dimension volume by the quantity of the product (with the conversion to the product base UOM if required). 
- The system calculates the new volume available, passes it as an Output parameter, and updates the Unit Characteristic of the Warehouse Location.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_CHARACTERISTIC | All |  |
