# CreateUnitForContainer

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Container. This UnitID can then be used to link characteristics to the given Container

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container number of the container to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Container record is found for the inputted ContainerNo. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Container record from CONTAINER table using the input. 
- System checks if a UnitID is linked to this Container: 
 
- if a UnitId is already linked to the Container, then this UnitID is outputted. 
- Else System generates a UnitID for this Container: System creates a record in UNIT table and updates the CONTAINER.UnitID with the UnitID just created. 
 
- System outputs the UnitID

## Pre-Conditions

Container must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINER | Container | Inputted ContainerNo |
|  | UnitID | UNIT.ID |
| UNIT | ID | Outputted UnitID |
