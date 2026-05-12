# CreateUnitForDispositionTest

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Disposition Test. This UnitID can then be used to link characteristics to the given Disposition Test.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestID | Integer | Yes | Unique identifier of a Disposition Test for which the entity is to be created. |
| Output | UnitID | Integer | No | Inputted UnitID of a newly created entity |

## Validations

System verifies that a Disposition Test record is found for the inputted DispositionTestID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Disposition Test record from DISPOSITION_TEST table using the input. 
- System checks if a UnitID is linked to this Disposition Test: 
 
- If a UnitId is already linked to the Disposition Test, then this UnitID is outputted. 
- Else system generates a UnitID for this Disposition Test: system creates a record in UNIT table and updates the DISPOSITION_TEST.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Disposition Test exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted DispositionTestID (required input) |
| UNIT | ID | Outputted UnitID |
