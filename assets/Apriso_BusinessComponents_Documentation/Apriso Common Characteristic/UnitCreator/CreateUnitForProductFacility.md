# CreateUnitForProductFacility

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this business component is to generate or retrieve a UnitID for a given Product Facility. This UnitID can then be used to link characteristics to the given Product Facility.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID of the lot to create the unit for. |
| Input | Facility | Char | Yes | Facility of the product to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that a Product Facility record is found for the inputted ProductID and Facility. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Product Facility record from PRODUCT_FACILITY table using the inputs. 
- System checks if a UnitID is linked to this Product Facility: 
 
- If a UnitID is already linked to the Product Facility, then this UnitID is outputted. 
- Else system generates a UnitID for this Product Facility: system creates a record in UNIT table and updates the PRODUCT_FACILITY.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Product Facility exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCT_FACILITY | Facility | Inputted Facility (required input) |
|  | ProductID | Inputted ProductID (required input) |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
