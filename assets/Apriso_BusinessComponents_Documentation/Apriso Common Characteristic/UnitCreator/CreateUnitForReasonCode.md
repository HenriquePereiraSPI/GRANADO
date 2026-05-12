# CreateUnitForReasonCode

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Reason Code. This UnitID can then be used to link characteristics to the given Reason Code.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ReasonCode | Char | Yes | Reason code to create the unit for. |
| Output | UnitID | Char | No | Created unit ID. |

## Validations

System verifies that a Reason Code record is found for the inputted ReasonCode. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Reason Code record from REASON_CODE table using the input. 
- System checks if a UnitID is linked to this Reason Code: 
 
- if a UnitId is already linked to the Reason Code, then this UnitID is outputted. 
- Else System generates a UnitID for this Reason Code: System creates a record in UNIT table and updates the REASON_CODE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Reason Code exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| REASON_CODE | ReasonCode | Inputted ReasonCode |
|  | UnitID | Unit.ID |
| UNIT | UnitID | Outputted UnitID |
