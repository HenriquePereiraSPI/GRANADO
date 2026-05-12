# CreateUnitForResource

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Resource. This UnitID can then be used to link characteristics to the given Resource

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ResourceName | Char | Yes | Resource name of the resource to create the unit for. |
| Input | ResourceType | Integer | Yes | Resource type. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Resource record is found for the inputted ResourceName and ResourceType. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Resource record from RESOURCE_ table using the inputs. 
- System checks if a UnitID is linked to this Resource: 
 
- if a UnitId is already linked to the Resource, then this UnitID is outputted. 
- Else System generates a UnitID for this Resource: System creates a record in UNIT table and updates the RESOURCE_.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Resource exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| RESOURCE | ResourceName | Inputted ResourceName |
|  | ResourceType | Inputted ResourceType |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
