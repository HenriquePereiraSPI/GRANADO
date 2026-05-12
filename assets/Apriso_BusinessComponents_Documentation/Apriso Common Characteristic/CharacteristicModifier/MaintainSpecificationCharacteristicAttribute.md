# MaintainSpecificationCharacteristicAttribute

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.CharacteristicModifier`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update a specification characteristic of type attribute for a given Unit.
 

This Business Component is used to:
 
 
- Change the attribute of the specification characteristic of the given unit, and 
- Output the fact that the new attribute is conforming or not. 
 

This component cannot be used to:
 
 
- Maintain disposition characteristics attribute list, 
- Maintain characteristic attributes. (It can only overwrite the value of a given characteristic for a given unit.) 
 

If the unit characteristic does not exist, the component invokes FlexNet.BusinessRules.Quality.Characteristics.UnitCharacteristicCreator Business Component to create one.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitID | Integer | Yes | Unit id of the unit characteristic the Attribute is to be modifed. |
| Input | Characteristic | Char | Yes | Characteristic of the unit characteristic the Attribute is to be modifed. |
| Input | Attribute | Char | Yes | Attribute to be assigned to the unit characteristic. |
| Output | Conforming | Integer | No | Attribute is not conforming.1 - Attribute is conforming. 2 - Attribute does not exist. |

## Validations

- System verifies that a characteristic record is found for the inputted Characteristic. If record is not found, an error message is displayed. 
- System verifies that the characteristic specified is of Attribute type (CHARACTERISTIC.CharacteristicType = 1). 
- System verifies that a unit record is found for the inputted UnitID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the record that matches the inputs in the UNIT_CHARACTERISTIC table: 
 
- If no record found in UNIT_CHARACTERISITIC: 
- System invokes the Business Component FlexNet.BusinessRules.Quality.Characteristics.UnitCharacteristicCreator.Create, passing unit, characteristic and attribute specified. 
- Else System updates the Attribute of the Unit Characteristic with the inputted Attribute. If the attribute is not specified, System sets the unit characteristic attribute value to null. 
 
- System generates the conforming flag as output, based on the value of the conforming flag of the characteristic attribute in the ATTRIBUTE table (in case the attribute is not specified, the conforming flag is set to 2). 
- History is populated

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_CHARACTERISTIC | UnitID | Inputted UnitID |
|  | Characteristic | Inputted Characteristic |
|  | Attribute_ | Inputted Attribute or null if attribute not specified |
| ATTRIBUTE | Characteristic | Inputted Characteristic |
|  | Attribute | Inputted Attribute |
|  | Conforming | 0 if Attribute is not conforming.1 if Attribute is conforming.2 if Attribute does not exist. |
| TRANSACTION_HISTORY_QUALITY | UnitID | Inputted UnitID |
|  | Characteristic | Inputted Characteristic |
|  | TargetValue | Inputted Target Value |
|  | TestUOM | UOMCode (Inputted or computed) |
|  | UpperSpecificationLimit | Inputted UpperSpecificationLimit |
|  | UpperControlLimit | Inputted UpperControlLimit |
|  | TestValue | Inputted Value |
|  | LowerSpecificationLimit | Inputted LowerSpecificationLimit |
|  | LowerControlLimit | Inputted LowerControlLimit |
|  | TestAttribute | Inputted Attribute |
