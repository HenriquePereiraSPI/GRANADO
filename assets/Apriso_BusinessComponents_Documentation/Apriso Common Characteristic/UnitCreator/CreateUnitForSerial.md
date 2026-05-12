# CreateUnitForSerial

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Serial. This UnitID can then be used to link characteristics to the given Serial

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID of the serial to create the unit for. |
| Input | SerialNo | Char | Yes | Serial number of the serial to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Serial record is found for the inputted SerialNo and ProductID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Resource Life Cycle record from RESOURCE_LIFE_CYCLE table using the input. 
- System checks if a UnitID is linked to this Resource Life Cycle: 
 
- if a UnitId is already linked to the Resource Life Cycle, then this UnitID is outputted. 
- Else System generates a UnitID for this Resource Life Cycle: System creates a record in UNIT table and updates the RESOURCE_LIFE_CYCLE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Resource Life Cycle Exists

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LIFE_CYCLE | ID | Inputted ResourceLifeCycleID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
