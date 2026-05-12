# CreateUnitForInspectionCharacteristic

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Quality.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated
**Keywords:** Unit, Inspection Characteristic

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Inspection Characteristic. This UnitID can then be used to link characteristics to the given Inspection Characteristic.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InspectionCharacteristicID | Integer | Yes | Unique identifier of an Inspection Characteristic for which the entity is to be created. |
| Output | UnitID | Integer | No | Inputted UnitID of a newly created entity |

## Validations

System verifies that an Inspection Characteristic record is found for the inputted InspectionCharacteristicID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Inspection Characteristic record from INSPECTION_CHARACTERISTIC table using the input. 
- System checks if a UnitID is linked to this Inspection Characteristic: 
 
- If a UnitId is already linked to the Inspection Characteristic, then this UnitID is outputted. 
- Else system generates a UnitID for this Inspection Characteristic: system creates a record in UNIT table and updates the INSPECTION_CHARACTERISTIC.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Inspection Characteristic record exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INSPECTION_CHARACTERISTIC | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted InspectionCharacteristicID (required input) |
| UNIT | ID | Outputted UnitID |
