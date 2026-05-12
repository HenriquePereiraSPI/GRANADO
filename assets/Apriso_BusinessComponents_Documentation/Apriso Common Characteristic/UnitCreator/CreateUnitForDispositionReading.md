# CreateUnitForDispositionReading

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Disposition Reading. This UnitID can then be used to link characteristics to the given Disposition Reading.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionReadingID | Integer | Yes | Unique identifier of a Disposition Reading for which the entity is to be created. |
| Output | UnitID | Integer | No | The unique ID of the newly created entity. |

## Validations

System verifies that a Disposition Reading record is found for the inputted DispositionReadingID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Disposition Reading record from DISPOSITION_READING table using the input. 
- System checks if a UnitID is linked to this Disposition Reading: 
 
- if a UnitId is already linked to the Disposition Reading, then this UnitID is outputted. 
- else system generates a UnitID for this Disposition Reading: system creates a record in UNIT table and updates the DISPOSITION_READING.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Disposition Reading exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_READING | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted DispositionReadingID (required input) |
| UNIT | ID | Outputted UnitID |
