# MaintainCharacteristic_v94

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.CharacteristicModifier`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Active

## Description

The MaintainCharacteristic BC allows process authors to create and update Characteristics inside their processes. If the specified Characteristic does not exist in system, it will be created with the specified type. If the Characteristic exists, all optional inputs that are specified will be updated to the new values.
 

If the Characteristic exists:
 
 
- If the Characteristic is an Attribute Characteristic, the following inputs will be used to update the Characteristic, if the input value is specified: 
 
- Description 
- GradeID 
 
- If the Characteristic is Variable, the following inputs will be used to update the Characteristic if the input value is specified: 
 
- Description 
- UpperSpecificationLimit 
- UpperControlLimit 
- TargetValue 
- LowerControlLimit 
- LowerSpecificationLimit 
- UomCode 
- GradeID 
- CharacteristicDecimals 
 
 

If the Characteristic is new:
 
 
- The Characteristic will be created 
- All the updates will proceed as described in the case when the Characteristic is not new.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Characteristic | Char | Yes | New or existing characteristic name. |
| Input | CharacteristicType | Integer | Conditional | 1 - Attribute Characteristic, 2 - Variable Characteristic. Required if the Characteristic is new. |
| Input | Description | Char | No | Updated description for the characteristic. |
| Input | LanguageID | Integer | Conditional | The language of the new description. Required only if Description input is specified. |
| Input | UpperCoherenceLimitSpecified | Boolean | No | If the value is true, then the UpperCoherenceLimit is specified |
| Input | UpperCoherenceLimit | Decimal | No | Upper coherence limit for Variable Characteristics. More information about limits and their purpose is available in Quality Inspection Cockpit Help. |
| Input | UpperSpecificationLimitSpecified | Boolean | No | If the value is true, then the UpperSpecificationLimit is specified |
| Input | UpperSpecificationLimit | Decimal | No | Upper specification limit for Variable Characteristics. |
| Input | UpperControlLimitSpecified | Boolean | No | If the value is true, then the UpperControlLimit is specified |
| Input | UpperControlLimit | Decimal | No | Upper control limit for Variable Characteristics. |
| Input | TargetValueSpecified | Boolean | No | If the value is true, then the TargetValue is specified |
| Input | TargetValue | Decimal | No | Target value for Variable Characteristics. |
| Input | LowerControlLimitSpecified | Boolean | No | If the value is true, then the LowerControlLimit is specified |
| Input | LowerControlLimit | Decimal | No | Lower control limit for Variable Characteristics. |
| Input | LowerSpecificationLimitSpecified | Boolean | No | If the value is true, then the LowerSpecificationLimit is specified |
| Input | LowerSpecificationLimit | Decimal | No | Lower specification limit for Variable Characteristics. |
| Input | LowerCoherenceLimitSpecified | Boolean | No | If the value is true, then the LowerCoherenceLimit is specified |
| Input | LowerCoherenceLimit | Decimal | No | Lower coherence limit for Variable Characteristics. |
| Input | UomCode | Char | No | The unit of measure for Variable Characteristics. |
| Input | GradeID | Integer | No | Grade ID. |
| Input | CharacteristicDecimalsSpecified | Boolean | No | If the value is true, then the CharacteristicDecimals is specified |
| Input | CharacteristicDecimals | Integer | No | Number of Decimal places to display for Variable Characteristics. |

## Validations

- System validates that Characteristic input is specified. 
- System searches the database for the specified Characteristic 
- If the Characteristic is found 
 
- System validates that Active is true 
- If CharacteristicType is specified, System validates that it matches the record. 
 
- If the Characteristic is not found 
 
- System validates that CharacteristicType has been specified and is either 1 (Attribute) or 2 (Variable). 
 
- If Description input has been specified (not empty) 
 
- System validates that the LangaugeID has been specified and that it exists and is active in the database. 
 
- If GradeID has been specified, System validates that it exists and is active in the database. 
- If the UomCode has been specification, System validates that it exists and is active in the database.

## System Processing

- If the Characteristic does not exist 
 
- Create the Characteristic record with the specified CharacteristicType and new FUID and TextID 
 
- If Description is specified (not empty) 
 
- Create or update the Text Translation for the Characteristic's TextID and the specified LanguageID 
- The Description should be put in the Text Translation Extended field 
 
- If GradeID is specified (not 0) 
 
- Update the Characteristic GradeID field 
 
- If the CharacteristicType is Variable (2) 
 
- For each of the following optional inputs, if the value has been specified (not 0), update the corresponding field in the Characteristic record with the new value. If the Characteristic is new, and the input is not specified, update the record with a zero for the field. 
 
- UpperSpecificationLimit 
- UpperControlLimit 
- TargetValue 
- LowerControlLimit 
- LowerSpecificationLimit 
- CharacteristicDecimal 
 
 
- If UomCode has been specified (not empty) 
 
- Update the UomCode field in the Characteristic record to the specified value 
 
- If the Characteristic is new and the UomCode is not specified, UomCode must be NULL.
