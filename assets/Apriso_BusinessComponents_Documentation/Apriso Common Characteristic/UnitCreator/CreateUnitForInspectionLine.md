# CreateUnitForInspectionLine

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Quality.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated
**Keywords:** Unit, Inspection Line

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Inspection Line. This UnitID can then be used to link characteristics to the given Inspection Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | InspectionLineID | Integer | Yes | Unique identifier of an Inspection Line for which the entity is to be created. |
| Output | UnitID | Integer | No | Inputted UnitID of a newly created entity |

## Validations

System verifies that an Inspection Line record is found for the inputted 

InspectionLineID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Inspection Line record from INSPECTION_LINE table using the input. 
- System checks if a UnitID is linked to this Inspection Line: 
 
- If a UnitId is already linked to the Inspection Line, then this UnitID is outputted. 
- Else system generates a UnitID for this Inspection Line: system creates a record in UNIT table and updates the INSPECTION_LINE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Inspection Line record exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| INSPECTION_LINE | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted InspectionLineID (required input) |
| UNIT | ID | Outputted UnitID |
