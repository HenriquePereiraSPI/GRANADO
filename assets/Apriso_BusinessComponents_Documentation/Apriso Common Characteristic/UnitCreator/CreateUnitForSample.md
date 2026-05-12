# CreateUnitForSample

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Sample.
 

This UnitID can then be used to link characteristics to the given Sample.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SampleID | Integer | Yes | Sample to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Sample record is found for the inputted SampleID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Sample record from SAMPLE table using the input. 
- System checks if a UnitID is linked to this Sample: 
 
- if a UnitId is already linked to the Sample, then this UnitID is outputted. 
- Elsesystem generates a UnitID for this Sample: Ssystem creates a record in UNIT table and updates the SAMPLE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Sample exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SAMPLE | ID | Inputted SampleID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
