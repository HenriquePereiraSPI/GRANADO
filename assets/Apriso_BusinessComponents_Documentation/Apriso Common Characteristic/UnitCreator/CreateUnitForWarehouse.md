# CreateUnitForWarehouse

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to generate or retrieve a UnitID for a given Warehouse.
 This UnitID can then be used to link characteristics to the given Warehouse.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Warehouse | Char | Yes | Warehouse to create the unit for. |
| Output | UnitID | Integer | No | ID of the created unit. |

## Validations

The system verifies that a Warehouse record is found for the inputted Warehouse. If record is not found, an error message is displayed.

## System Processing

- The system retrieves the Warehouse record from WAREHOUSE table using the input. 
- The system checks if a UnitID is linked to this Warehouse: 
 
- if a UnitId is already linked to the Warehouse, then this unitID is outputted. 
- Else the system generates a UnitID for this Warehouse: The system creates a record in UNIT table and updates the WAREHOUSE.UnitID with the unitID just created. 
 
- The system outputs the unitID

## Pre-Conditions

The Warehouse exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WAREHOUSE | Warehouse | Inputted Warehouse |
|  | UnitID | Unit.ID |
| UNIT | UnitID | Outputted UnitID |
