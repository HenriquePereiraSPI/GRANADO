# CreateUnitCharacteristic_v2

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCharacteristicCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Active
**Keywords:** CreateUnitCharacteristic_v2

## Description

The purpose of this Business Component is:
 
 
- To attach a Characteristic to a Unit (a record is created in the UNIT_CHARACTERISTIC table) 
- To specify the values of a characteristic. 
 

This component creates a Unit Characteristic once the UnitID exists, even if the UnitID is not linked to any entity.
 

The Unit Characteristic must be of the Attribute type:
 
 
- The characteristic must exist but the attribute value does not have to be on the list of the possible attributes.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | UnitID | Integer | Yes | UnitID |
| Input | Characteristic | Char | Yes | Characteristic |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Value | Decimal | Value for the Characteristic. |
| DateTimeValue | DateTime | Date time value for the Characteristic. |
| FreeTextValue | Char | Free text value for the Characteristic. |
| UOMCode | Char | UOM Code for the Characteristic. |
| GradeID | Integer | GradeID for the Characteristic. |
| Attribute | Data type | Attribute for the Characteristic. |

## Validations

- Validation fails if UnitID does not exist in UNIT table. 
- Validation fails if Characteristic does not exist in CHARACTERISTIC table. 
- Validation fails if UnitID and Characteristic already exist in the UNIT_CHARACTERISTIC table. 
- Validation fails if Characteristic does not have the correct type and/or usage.

## System Processing

- System validates if the Characteristic type is set to 1-Attribute and Characteristic usage is set to 1-Custom Parameter. 
- System validates if the UOMCode exists in the UOM_CODE table 
- System validates if GradeID exists in the GRADE table. 
- System creates a UNIT_CHARACTERISTIC record.

## History Recording in Production

History of the creation record is created in the TRANSACTION _HISTORY_QUALITY table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| UNIT_CHARACTERISTIC | UnitID | UnitID |
|  | Characteristic | Characteristic |
|  | Value | Value |
|  | DateTimeValue | DateTimeValue |
|  | FreeTextValue | FreeTextValue |
|  | UOMCode | UOMCode |
|  | GradeID | GradeID |
|  | Attribute | Attribute |
| TRANSACTION_HISTORY_QUALITY | UnitID | UnitID |
|  | Characteristic | Characteristic |
|  | TestValue | Value |
|  | TestUOM | UOMCode |
|  | TestAttribute | Attribute |
