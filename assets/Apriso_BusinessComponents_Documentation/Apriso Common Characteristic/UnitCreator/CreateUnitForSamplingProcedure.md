# CreateUnitForSamplingProcedure

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Quality.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Quality2`
**Status:** Deprecated
**Keywords:** Unit, Sampling Procedure

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Sampling Procedure. This UnitID can then be used to link characteristics to the given Sampling Procedure.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SamplingProcedureID | Integer | Yes | Unique identifier of a Sampling Procedure for which the entity is to be created. |
| Output | UnitID | Integer | No | Inputted UnitID of a newly created entity |

## Validations

System verifies that an Sampling Procedure record is found for the inputted SamplingProcedureID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Sampling Procedure record from SAMPLING_PROCEDURE table using the input. 
- System checks if a UnitID is linked to this Sampling Procedure: 
 
- If a UnitId is already linked to the Sampling Procedure, then this UnitID is outputted. 
- Else system generates a UnitID for this Sampling Procedure: system creates a record in UNIT table and updates the SAMPLING_PROCEDURE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Sampling Procedure record exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SAMPLING_PROCEDURE | UnitID | Inputted UnitID of a newly created entity |
|  | ID | Inputted SamplingProcedureID (required input) |
| UNIT | ID | Outputted UnitID |
