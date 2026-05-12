# CreateUnitWarehouseLocation

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Active

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Warehouse Location. This UnitID can then be used to link characteristics to the given Warehouse Location.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WarehouseLocationID | Integer | Yes | Warehouse location to create the unit for. |
| Output | UnitID | Char | No | Created unit ID. |

## Validations

System verifies that a Warehouse Location record is found for the inputted WarehouseLocationID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Warehouse Location record from WAREHOUSE_LOCATION table using the input. 
- System checks if a UnitID is linked to this Warehouse Location: 
 
- if a UnitId is already linked to the Warehouse Location, then this UnitID is outputted. 
- Else System generates a UnitID for this Warehouse Location: System creates a record in UNIT table and updates the WAREHOUSE_LOCATION.UnitID with the UnitID just created. 
 
- System outputs the UnitID

## Pre-Conditions

The Warehouse Location exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_LOCATION | ID | Inputted WarehouseLocationID |
|  | UnitID | Unit.ID |
| UNIT | UnitID | Outputted UnitID |
