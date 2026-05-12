# CreateUnitForCharacteristicRevision

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated
**Keywords:** Characteristic Revision, Unit

## Description

This Business Component method is used to retrieve a unit ID for a given Characteristic revision (or to generate one if it does not exist). The unit ID can be used to link documents to the Characteristic revision, for example.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | CharacteristicRevisionID | Integer | Yes | The Characteristic revision to read or create the unit for. |
| Output | UnitID | Integer | Yes | The created unit ID. |

## Validations

- The system verifies that the Characteristic revision record is found for the inputted CharacteristicRevisionID.

## System Processing

- The system retrieves the Characteristic revision record from the CHARACTERISTIC_REVISION table using the CharacteristicRevisionID Input. 
 
- If the UnitID is not set in the retrieved record, the system creates a new record in the UNIT table and updates the CHARACTERISTIC_REVISION.UnitID column with the UnitID just created. 
 
- The system returns the value of CHARACTERISTIC_REVISION.UnitID as UnitID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CHARACTERISTIC_REVISION | ID | CharacteristicRevisionID |
|  | UnitID | UnitID, link to the UNIT table |
| UNIT | ID | UnitID |
