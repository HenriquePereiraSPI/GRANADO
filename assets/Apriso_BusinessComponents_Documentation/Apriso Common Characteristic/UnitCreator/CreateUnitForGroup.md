# CreateUnitForGroup

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Container. This UnitID can then be used to link characteristics to the given Container.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Group | Char | Yes | Group to create the unit for. |
| Input | GroupType | Integer | Yes | Short, Group type. |
| Input | GroupClassID | Integer | Yes | Group class ID. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Group record is found for the inputted Group, GroupType, GroupClassID. If no record is found, an error message is displayed.

## System Processing

- System retrieves the Group record(s) from GROUP_ table using the inputs. 
- System checks if a UnitID is linked to this Group: 
 
- if a UnitId is already linked to the Group, then this UnitID is outputted. 
- else System generates a UnitID for this Group: System creates a record in UNIT table and updates the GROUP_UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Group must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| GROUP | Group | Inputted GroupName |
|  | GroupType | Inputted GroupType |
| UNIT | ID | Outputted UnitID |
