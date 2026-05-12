# CreateUnitCharacteristic_v94

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCharacteristicCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is:
 
 
- To attach a Characteristic to a Unit (This is achieved by creating a record in the UNIT_CHARACTERISTIC table), and 
- To specify the characteristic's values.  
 

This component allows the user to create a Unit Characteristic once the UnitID exists, even if the UnitID is not linked to any entity.
 

The Unit Characteristic can be of type Variable or Attribute.
 

If Unit Characteristic is of type Attribute:
 
 
- The characteristic must exist but the attribute value can be an attribute that is not in the list of the possible attributes (in order to use this as userfield) 
- The user can specify the current value of the characteristic.  
 

If Unit Characteristic is of type Variable:
 
 
- The user can specify the various limits, target value and current value of the characteristic.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitID | Integer | Yes | Unit ID to create unit characteristic for. |
| Input | Characteristic | Char | Yes | Characteristic to create unit characteristic for. |
| Input | TargetValueSpecified | Boolean | No | If the value is true, then the TargetValue is specified |
| Input | TargetValue | Decimal | No | Target value. |
| Input | UomCode | Char | Conditional | Uom code. Required if any of the quantities are provided. |
| Input | UpperCoherenceLimitSpecified | Boolean | No | If the value is true, then the UpperCoherenceLimit is specified |
| Input | UpperCoherenceLimit | Decimal | No | Upper coherence limit. More information about limits and their purpose is available in Quality Inspection Cockpit Help. |
| Input | UpperSpecificationLimitSpecified | Boolean | No | If the value is true, then the UpperSpecificationLimit is specified |
| Input | UpperSpecificationLimit | Decimal | No | Upper specification limit. |
| Input | UpperControlLimitSpecified | Boolean | No | If the value is true, then the UpperControlLimit is specified |
| Input | UpperControlLimit | Decimal | No | Upper control limit. |
| Input | ValueSpecified | Boolean | No | If the value is true, then the Value is specified |
| Input | Value | Decimal | No | Value |
| Input | LowerControlLimitSpecified | Boolean | No | If the value is true, then the LowerControlLimit is specified |
| Input | LowerControlLimit | Decimal | No | Lower control limit. |
| Input | LowerSpecificationLimitSpecified | Boolean | No | If the value is true, then the LowerSpecificationLimit is specified |
| Input | LowerSpecificationLimit | Decimal | No | Lower specification limit. |
| Input | LowerCoherenceLimitSpecified | Boolean | No | If the value is true, then the LowerCoherenceLimit is specified |
| Input | LowerCoherenceLimit | Decimal | No | Lower coherence limit. |
| Input | Attribute | Char | Conditional | Attribute to be assigned to unit characteristic. Required if characteristic type is 'Attribute' |

## Validations

System performs the following validations:
 
 
- System verifies that inputted Characteristic and Unit exist. If record is not found, System generates an error if not retrieved 
- System verifies that for values passed as input, the UOM is populated.

## System Processing

- System retrieves the Characteristic and the Unit from the inputs. 
- System identifies if the characteristic is of type attribute or variable: 
 
- If the characteristic is of type variable, then System updates the UNIT_CARACTERISTIC table as follows: 
 
- If some values are passed as input, System uses these values. 
- If UOM is passed as input, but other values are copied from the characteristic, then the copied values are converted in the input UOM. This is done by invoking the Business Component UOMConvert. (Cf. BC Ref Guide "Others"). 
- Else, System uses the values of the characteristic (in this case UNIT_CHARACTERISTIC.Value_ will stay null).  
 
- If the characteristic is of type attribute, then:  
 
- depending on the inputs, the unit characteristic is created with a value or not.

## Pre-Conditions

- The user has created a characteristic of type variable. 
- A unit uses this characteristic.

## History Recording in Production

History of the creation record is created in the TRANSACTION _HISTORY_QUALITY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_CHARACTERISTIC | UnitID | Inputted UnitID |
|  | Characteristic | Inputted Characteristic |
|  | TargetValue | Inputted target value |
|  | UOMCode | UOM Code (inputted or computed) |
|  | UpperCoherenceLimit | Inputted UpperCoherenceSpecificationLimit |
|  | UpperSpecificationLimit | Inputted UpperSpecificationLimit |
|  | UpperControlLimit | Inputted UpperControlLimit |
|  | Value | Inputted value |
|  | LowerSpecificationLimit | Inputted LowerSpecificationLimit |
|  | LowerControlLimit | Inputted LowerControlLimit |
|  | LowerCoherenceLimit | Inputted LowerCoherenceLimit |
|  | Attribute | Inputted Attribute |
| TRANSACTION_HISTORY_QUALITY | UnitID | Inputted UnitID |
|  | Characteristic | Inputted Characteristic |
|  | TargetValue | Inputted TargetValue |
|  | TestUOM | UOMCode (inputted or computed) |
|  | UpperSpecificationLimit | Inputted UpperSpecificationLimit |
|  | UpperControlLimit | Inputted UpperControlLimit |
|  | TestValue | Inputted Value |
|  | LowerSpeciifcationLimit | Inputted LowerSpecificationLimit |
|  | LowerControlLimit | Inputted LowerControlLimit |
|  | TestAttribute | Inputted Attribute |
