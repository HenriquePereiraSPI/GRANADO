# CreateUnitForProduct

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Product. This UnitID can then be used to link characteristics to the given product

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Product record is found for the inputted ProductID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the product record from PRODUCT table using the input. 
- System checks if a UnitID is linked to this product: 
 
- if a UnitId is already linked to the product, then this UnitID is outputted. 
- Else System generates a UnitID for this product: System creates a record in UNIT table and updates the PRODUCT.UnitID with the UnitID just created. 
 
- System outputs the UnitID

## Pre-Conditions

Product must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCT | ProductID | Inputted ProductID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
