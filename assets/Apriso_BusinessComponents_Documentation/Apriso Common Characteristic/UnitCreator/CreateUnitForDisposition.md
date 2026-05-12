# CreateUnitForDisposition

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Disposition. This UnitID can then be used to link characteristics to the given Disposition.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | Unique identifier of a Disposition for which the entity is to be created. |
| Input | Facility | Char | Yes | Identifier of the Facility where the Disposition is carried out. |
| Output | UnitID | Integer | No | The unique ID of the newly created entity. |

## Validations

System verifies that a Disposition record is found for the inputted Facility and Disposition. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Disposition record from DISPOSITION table using the inputs. 
- System checks if a UnitID is linked to this Disposition: 
 
- If a UnitId is already linked to the Disposition, then this UnitID is outputted. 
- Else system generates a UnitID for this Disposition: system creates a record in UNIT table and updates the DISPOSITION.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Disposition exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION | UnitID | Inputted UnitID of a newly created entity |
|  | Facility | Inputted Facility (required input) |
|  | Disposition | Inputted Disposition (required input) |
| UNIT | ID | Outputted UnitID |
