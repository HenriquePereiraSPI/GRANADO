# CalculateNewVolumeForContainer

**Category:** Apriso/Inventory/Volume Calculation
**Class:** `FlexNet.BusinessFacade.Inventory.LocationNewVolumeCalculator`
**Assembly:** `FlexNet.BusinessFacade.Inventory.dll`
**Status:** Deprecated

## Description

This Business Component method is the same as the CalculateNewVolume BC, except that the volume of the products added or removed from the location is calculated as the volume of the Container (from CONTAINER_DIMENSION with dimension code = Volume). This BC is deprecated. The UpdateWarehouseLocationCapacity BC should be used instead.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WarehouseLocationID | Integer | Yes | The location for which the volume should be calculated. |
| Input | Container | Char | Yes | The Container to move. |
| Input | Increase | Boolean | Yes | Whether this is an increase or a decrease. |
| Output | NewVolume | Decimal | No | The resulting volume of the location. |

## System Processing

- The system creates a record in the ORDER_DETAIL table.
