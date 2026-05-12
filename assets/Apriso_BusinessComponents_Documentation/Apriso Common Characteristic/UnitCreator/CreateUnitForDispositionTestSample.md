# CreateUnitForDispositionTestSample

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Disposition Test Sample. This UnitID can then be used to link characteristics to the given Disposition Test Sample.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | DispositionTestSampleID | Integer | Yes | Unique identifier of a Disposition Test Sample for which the entity is to be created. |
| Output | UnitID | Integer | No | Inputted UnitID of a newly created entity |

## Validations

System verifies that a Disposition Test Sample record is found for the inputted DispositionTestSampleID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Disposition Test Sample record from DISPOSITION_TEST_SAMPLE table using the input. 
- System checks if a UnitID is linked to this Disposition Test Sample: 
 
- If a UnitID is already linked to the Disposition Test Sample, then this UnitID is outputted. 
- Else system generates a UnitID for this Disposition Test Sample: system creates a record in UNIT table and updates the DISPOSITION_TEST_SAMPLE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Disposition Test Sample exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| DISPOSITION_TEST_SAMPLE | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted DispositionTestSampleID (required input) |
| UNIT | ID | Outputted UnitID |
