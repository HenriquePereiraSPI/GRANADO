# CreateUnitForProductGroup

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Product Group. This UnitID can then be used to link characteristics to the given Product Group.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | Product ID of the product group to create the unit for. |
| Input | Group | Char | Yes | Group of the product group to create the unit for. |
| Input | GroupType | Integer | Yes | Group Type. |
| Input | GroupClassID | Integer | Yes | Group class ID. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

- System verifies that a Group record is found for the inputted Group, GroupType and GroupClassID. If no record is found, an error message is displayed. 
- System verifies that Product record is found for the inputted ProductID. If no record is found, an error message is displayed, 
- System verifies that a Product Group record is found for the inputted ProductID, Group, GroupType and GroupClassID. If no record is found, an error message is displayed.

## System Processing

- System retrieves the Product Group record(s) from the PRODUCT_GROUP table using the inputs. 
- System checks if a UnitID is linked to this Product Group: 
 
- if a UnitId is already linked to the Product Group, then this UnitID is outputted. 
- Else System generates a UnitID for this Product Group: System creates a record in UNIT table and updates the PRODUCT_GROUP.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Pre-Conditions

Group must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| PRODUCT_GROUP | ProductID | Inputted ProductID |
|  | Group | Inputted GroupName |
|  | GroupType | Inputted GroupType |
|  | GroupClassID | Inputted GroupClassID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
