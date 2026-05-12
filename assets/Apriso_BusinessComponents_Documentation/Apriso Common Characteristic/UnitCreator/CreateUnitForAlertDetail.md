# CreateUnitForAlertDetail

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated
**Keywords:** Unit Characteristic, Alert Detail, Unit

## Description

The purpose of this method is to generate or retrieve a UnitID for a given Alert Detail. This UnitID can then be used to link characteristics to the given Alert Detail.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | AlertID | Integer | Yes | The Alert Detail to create the unit for. |
| Output | UnitID | Integer | No | Created Unit ID |

## Validations

System verifies that a Alert Detail record is found for the inputted AlertID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Alert Detail record from ALERT_DETAIL table using the input.  
- System checks if a UnitID is linked to this Alert Detail: 
 
- if a UnitID is already linked to the Alert Detail, then this UnitID is outputted.  
- else system generates a UnitID for this Alert Detail: system creates a record in UNIT table and updates the ALERT_DETAIL.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

The Alert Detail exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ALERT_DETAIL | ID | Inputted AlertID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
