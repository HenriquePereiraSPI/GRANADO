# MaintainSpecificationCharacteristicVariable

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.CharacteristicModifier`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update a specification characteristic of type variable for a given Unit.
 
 
- This Business Component shall be used to: 
- Update/modify the target value of a given Characteristic of a given Unit, and 
- Generate some outputs if the new value is out of the specification limits or control limits. 
 

This component cannot be used to:
 
 
- Maintain disposition characteristics values (created for defects) or 
- Maintain characteristic value (It can only overwrite the target value of a given characteristic for a given unit). 
 

If the unit characteristic does not exist, the component invokes the FlexNet.BusinessRules.Quality.Characteristics.UnitCharacteristicCreator Business Component to create one.
 

If the new target value has a different UOM than the existing value, the component invokes the UOMConvert Business Component to convert the inputted value to the UOM of the unit characteristic. (Refer to BC Ref Guide "Other" for further details regarding this BC).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitID | Integer | Yes | Unit id of the unit characteristic the Value is to be modifed. |
| Input | Characteristic | Char | Yes | Characteristic of the unit characteristic to modify Value |
| Input | Value | Decimal | Yes | Value to be assigned to the unit characteristic. |
| Input | UomCode | Char | Conditional | Unit of measure of the value being assigned to the unit characteristic. If specified then the Value is converted to the destination unit of measure taken from the unit characteristic entity. Required when unit characteristic is created. |
| Input | ErrorCode | Integer | No | Code of the operation. If 0 then it means the Value is in the range of the limits otherwise 1 is returned and detailed information is stored in LimitExceed and Limit . |
| Input | LimitExceed | Decimal | No | Provides the information how much the specified Value exceeds the limits defined for the unit characteristic. |
| Input | Limit | Char | No | Provides information which limit has been exceeded by assigning Value to the unit characteristic. The parameter can be one of the following: USL - when Value is greater than upper specification limit. UCL - when Value is greater than upper control limit but is less than upper control limit. LSL - when Value is less than lower specification limit. LCL - when Value is less than lower control limit but is greater than lower specification limit. |

## Validations

- System verifies that a characteristic record is found for the inputted Characteristic. If record is not found, an error message is displayed. 
- System verifies that the characteristic specified is of Variable type (CHARACTERISTC.CharacteristicType = 2) 
- System verifies that a unit record is found for the inputted UnitID. If record is not found, an error message is displayed. 
- If UomCode specified, the System verifies that uom record is. If record is not found, an error message is displayed.

## System Processing

- System retrieves the record that matches the inputs in the UNIT_CHARACTERISTIC table. 
 
- If no record found in UNIT_CHARACTERISITIC: 
 
- System invokes the Business Component FlexNet.BusinessRules.Quality.Characteristics.UnitCharacteristicCreator.Create, passing unit, characteristic, value and uom specified. 
 
- Else, system converts the inputted target value in the UOM of the retrieved record using the UOMConvert Business Component. The resulting value is hereafter referred to as the Converted Inputted target. 
 
- System considers the values of the limits (UCL, USL, LCL, LSL) and Target and compares the values as follow: 
 
- If LCL =< Converted Input target =< UCL, then the system: 
 
- Updates the value of the target value with the Converted Inputted target, 
- Sets the Limit = 'null', LimitExceed = 0 and ErrorCode = 0, 
- Sets last modification time of the variable in UNIT_CHARACTERISTIC. 
 
- If LSL<= Converted input target < LCL, then the system: 
 
- Updates the value of the target value with the Converted Inputted target, 
- Sets the Limit = 'LCL', LimitExceed = LCL-Converted Inputted target and ErrorCode = 1. 
 
- If Converted input target < LSL, then the system: 
 
- Updates the value of the target value with the Converted Inputted target, 
- Sets the Limit = 'LSL', LimitExceed = LSL-Converted Inputted target and ErrorCode = 1 
 
- If UCL< Converted input target =< USL, then the system: 
 
- Updates the value of the target value with the Converted Inputted target, 
- Sets the Limit = 'UCL', LimitExceed = Converted Inputted target-UCL and ErrorCode = 1. 
 
- Converted input target>USL, then the system: 
- Updates the value of the target value with the Converted Inputted target, 
- Sets the Limit = 'USL', LimitExceed = Converted Inputted target-USL and ErrorCode = 1

## Pre-Conditions

- The user has created a characteristic of type variable. 
- A Unit uses this characteristic.

## History Recording in Production

History of the updated record is created in the TRANSACTION_HISTORY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_CHARACTERISTIC | UnitID | Inputted UnitID |
|  | Characteristic | Inputted Characteristic |
|  | TargetValue | Converted Inputted Value |
|  | UOMCode | Inputted UOMCode |
| TRANSACTION_HISTORY_QUALITY | UnitID | Inputted UnitID |
|  | Characteristic | Inputted Characteristic |
|  | TargetValue | Inputted TargetValue |
|  | TestUOM | UOMCode (inputted or computed) |
|  | UpperSpecificationLimit | Inputted UpperSpecificationLimit |
|  | UpperControlLimit | Inputted UpperControlLimit |
|  | TestValue | Inputted Value |
|  | LowerSpecificationLimit | Inputted LowerSpecificationLimit |
|  | LowerControlLimit | Inputted LowerControlLimit |
|  | TestAttribute | Inputted Attribute |
