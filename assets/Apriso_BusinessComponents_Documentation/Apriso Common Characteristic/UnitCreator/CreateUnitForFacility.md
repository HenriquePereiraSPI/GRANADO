# CreateUnitForFacility

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Facility. This UnitID can then be used to link characteristics to the given Facility.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Facility | Char | Yes | Facility to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Facility record is found for the inputted Facility. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Facility record from FACILITY table using the input. 
- System checks if a UnitID is linked to this Facility: 
- If a UnitID is already linked to the Facility, then this UnitID is outputted. 
- Else System generates a UnitID for this Facility: System creates a record in UNIT table and updates the FACILITY.UnitID with the UnitID just created. 
- System outputs the UnitID

## Pre-Conditions

Facility must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| FACILITY | Facility | Inputted Facility |
|  | UnitID | UNIT.ID |
| UNIT | ID | Outputted UnitID |
