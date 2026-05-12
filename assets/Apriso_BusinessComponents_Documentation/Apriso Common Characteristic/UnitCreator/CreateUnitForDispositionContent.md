# CreateUnitForDispositionContent

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Disposition Content. This UnitID can then be used to link characteristics to the given Disposition Content.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionContentID | Integer | Yes | Unique identifier of a Disposition Content for which the entity is to be created. |
| Output | UnitID | Integer | No | The unique ID of the newly created entity. |

## Validations

System verifies that a Disposition Content record is found for the inputted DispositionContentID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Disposition Content record from DISPOSITION_CONTENT table using the input. 
- System checks if a UnitID is linked to this Disposition Content: 
 
- If a UnitId is already linked to the Disposition Content, then this UnitID is outputted. 
- Else system generates a UnitID for this Disposition Content: system creates a record in UNIT table and updates the DISPOSITION_CONTENT.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Disposition Content exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_CONTENT | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted DispositionContentID (required input) |
| UNIT | ID | Outputted UnitID |
