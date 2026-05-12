# CreateUnitForLot

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Lot. This UnitID can then be used to link characteristics to the given Lot

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID of the lot to create the unit for. |
| Input | LotNo | Char | Yes | Lot number of the lot to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Lot record is found for the inputted LotNo and ProductID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Lot record from LOT_NO table using the inputs. 
- System checks if a UnitID is linked to this Lot: 
 
- If a UnitID is already linked to the Lot, then this UnitID is outputted. 
- Else System generates a UnitID for this Lot: System creates a record in UNIT table and updates the LOT_NO.UnitID with the UnitID just created. 
 
- System outputs the UnitID

## Pre-Conditions

Lot must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LOT_NO | LotNo | Inputted LotNo |
|  | ProductID | Inputted ProductID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
