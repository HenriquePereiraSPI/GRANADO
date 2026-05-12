# DeleteUnitCharacteristic

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCharacteristicCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Active

## Description

The purpose of this Business Component is to delete a unit characteristic which in turn removes the association between Unit Characteristic and Unit.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitID | Integer | Yes | Unit ID of the unit characteristic to be deleted |
| Input | Characteristic | Char | Yes | Characteristic of the unit characteristic to be deleted |

## Validations

- System validates the entered Unit ID is valid. 
- System validates the entered Characteristic is valid.  
- System validates the Unit ID and Characteristic exists in Unit Characteristic.

## System Processing

- System deletes record from UNIT_CHARACTERISTIC for the inputted Unit ID and Characteristic.
