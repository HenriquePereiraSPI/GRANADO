# CreateUnitForDispositionLine

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to generate or retrieve a UnitID for a given Disposition Line. This UnitID can then be used to link characteristics to the given Disposition Line.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Disposition | Char | Yes | Unique identifier of a parent Disposition to the Line for which the entity is to be created. |
| Input | Facility | Char | Yes | Identifier of the Facility where the Disposition is carried out. |
| Input | LineSequenceNo | Integer | Yes | Unique identifier of a Disposition Line for which the entity is to be created. |
| Output | UnitID | Integer | No | The unique ID of the newly created entity. |

## Validations

System verifies that a Disposition Line record is found for the inputted Facility, Disposition and LineSequenceNo. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Disposition Line record from DISPOSITION_LINE table using the inputs. 
- System checks if a UnitID is linked to this Disposition Line: 
 
- if a UnitId is already linked to the Disposition Line, then this UnitID is outputted. 
- else system generates a UnitID for this Disposition Line: system creates a record in UNIT table and updates the DISPOSITION_LINE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Disposition Line exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_LINE | UnitID | Inputted UnitID of a newly created entity |
|  | Facility | Inputted Facility (required input) |
|  | Disposition | Inputted Disposition (required input) |
|  | LineSequenceNo | Inputted LineSequenceNo (required input) |
| UNIT | ID | Outputted UnitID |
