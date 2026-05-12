# CreateUnitForWipReqResource

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to generate or retrieve a UnitID for a given Wip Required Resource. This UnitID can then be used to link characteristics to the given Wip Required Resource.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipReqResourceID | Integer | Yes | The Wip Required Resource to create the unit for. |
| Output | UnitID | Integer | No | Outputted UnitID. |

## Validations

System verifies that a Wip Required Resource record is found for the inputted WipReqResourceID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Wip Required Resource record from WIP_REQ_RESOURCE table using the input. 
- System checks if a UnitID is linked to this Wip Required Resource: 
 
- If a UnitID is already linked to the Wip Required Resource, then this UnitID is outputted. 
- Else system generates a UnitID for this Wip Required Resource: system creates a record in UNIT table and updates the WIP_REQ_RESOURCE.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Wip Required Resource exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_REQ_RESOURCE | ID | Inputted WipReqResourceID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
