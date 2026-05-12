# CreateUnitForWorkCenter

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Work Center. This UnitID can then be used to link characteristics to the given Work Center.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WorkCenter | Char | Yes | Work center to create the unit for. |
| Output | UnitID | Char | No | Created unit ID. |

## Validations

System verifies that a Work Center record is found for the inputted WorkCenter. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Work Center record from WORK_CENTER table using the input. 
- System checks if a UnitID is linked to this Work Center: 
 
- if a UnitId is already linked to the Work Center, then this UnitID is outputted. 
- Else System generates a UnitID for this Work Center: System creates a record in UNIT table and updates the WORK_CENTER.UnitID with the UnitID just created. 
 
- System outputs the UnitID

## Pre-Conditions

The Work Center exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WORK_CENTER | WorkCenter | Inputted WorkCenter |
|  | UnitID | Unit.ID |
| UNIT | UnitID | Outputted UnitID |
