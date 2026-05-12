# CreateUnitForEPCTag

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this method is to generate or retrieve a UnitID for a given EPC Tag. This UnitID can then be used to link characteristics to the given EPC Tag.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | EPCTagID | Integer | Yes | The EPC Tag to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a EPC Tag record is found for the inputted EPCTagID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the EPC Tag record from EPC_TAG table using the input. 
- System checks if a UnitID is linked to this EPC Tag: 
 
- If a UnitID is already linked to the EPC Tag, then this UnitID is outputted. 
- Else system generates a UnitID for this EPC Tag: system creates a record in UNIT table and updates the EPC_TAG.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The EPC Tag exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| EPC_TAG | ID | Inputted EPCTagID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
