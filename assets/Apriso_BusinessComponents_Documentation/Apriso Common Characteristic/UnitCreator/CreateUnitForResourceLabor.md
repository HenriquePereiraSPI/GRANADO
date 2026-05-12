# CreateUnitForResourceLabor

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Resource Labor. This UnitID can then be used to link characteristics to the given Resource Labor.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceLaborID | Integer | Yes | Resource Labor to create the unit for. |
| Output | UnitID | Char | No | Created unit ID. |

## Validations

System verifies that a Resource Labor record is found for the inputted ResourceLaborID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Resource Labor record from RESOURCE_LABOR table using the input. 
- System checks if a UnitID is linked to this Resource Labor: 
 
- if a UnitId is already linked to the Resource Labor, then this UnitID is outputted. 
- Else System generates a UnitID for this Resource Labor: System creates a record in UNIT table and updates the RESOURCE_LABOR.UnitID with the UnitID just created. 
 
- System outputs the UnitID

## Pre-Conditions

The Resource Labor exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE_LABOR | ID | Inputted ResourceLaborID |
|  | UnitID | Unit.ID |
| UNIT | UnitID | Outputted UnitID |
