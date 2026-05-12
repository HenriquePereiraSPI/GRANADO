# CreateUnitForResourceLifeCycle

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Resource Life Cycle. This UnitID can then be used to link characteristics to the given Resource Life Cycle.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLifeCycleID | Integer | Yes | Resource life-cycle to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Resource Life Cycle record is found for the inputted ID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Resource Life Cycle record from RESOURCE_LIFE_CYCLE table using the input. 
- System checks if a UnitID is linked to this Resource Life Cycle: 
 
- if a UnitId is already linked to the Resource Life Cycle, then this UnitID is outputted. 
- Elsesystem generates a UnitID for this Resource Life Cycle: system creates a record in UNIT table and updates the RESOURCE_LIFE_CYCLE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Resource Life Cycle exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LIFE_CYCLE | ID | Inputted ResourceLifeCycleID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
