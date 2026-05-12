# CreateUnitForProductCharacteristic

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to generate or retrieve a UnitID for a given Product Characteristic. This UnitID can then be used to link characteristics to the given Product Characteristic.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductCharacteristicID | Integer | Yes | The Product Characteristic to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Product Characteristic record is found for the inputted ProductCharacteristicID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Product Characteristic record from PRODUCT_CHARACTERISTIC table using the input. 
- System checks if a UnitID is linked to this Product Characteristic: 
 
- if a UnitID is already linked to the Product Characteristic, then this UnitID is outputted. 
- else system generates a UnitID for this Product Characteristic: system creates a record in UNIT table and updates the PRODUCT_CHARACTERISTIC.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Product Characteristic exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCT_CHARACTERISTIC | ID | Inputted ProductCharacteristicID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
