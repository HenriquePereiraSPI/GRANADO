# CreateUnitForSpecificationCharacteristic

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to generate or retrieve a UnitID for a given Specification Characteristic. This UnitID can then be used to link characteristics to the given Specification Characteristic.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SpecificationID | Integer | Yes | Specification ID of the Specification Characteristic to create the unit for. |
| Input | Characteristic | Char | Yes | Characteristic of the Specification Characteristic to create the unit for. |
| Output | UnitID | Integer | No | Created UnitID. |

## Validations

System verifies that a Specification Characteristic record is found for the inputted SpecificationID and Characteristic. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Specification Characteristic record from SPECIFICATION_CHARACTERISTIC table using the inputs. 
- System checks if a UnitID is linked to this Specification Characteristic: 
 
- If a UnitID is already linked to the Specification Characteristic, then this UnitID is outputted. 
- Else system generates a UnitID for this Specification Characteristic: system creates a record in UNIT table and updates the SPECIFICATION_CHARACTERISTIC.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Specification Characteristic exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SPECIFICATION_CHARACTERISTIC | SpecificationID | Inputted SpecificationID (required input) |
|  | Characteristic | Inputted Characteristic (required input) |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
