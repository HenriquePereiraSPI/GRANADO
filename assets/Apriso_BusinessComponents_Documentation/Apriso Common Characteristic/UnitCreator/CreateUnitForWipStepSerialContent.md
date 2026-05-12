# CreateUnitForWipStepSerialContent

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated
**Keywords:** WIP Step Serial Content

## Description

Generates or retrieves a UnitID for a given WIP Step Serial Content. This UnitID can then be used to link documents or other entities to the given WIP Step Serial Content.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipStepSerialContentID | Integer | Yes | The ID of the WIP Step Serial Content record to read or create the unit for. |
| Output | UnitID | Integer | Yes | The created unit ID. |

## Validations

System validates that a WIP Step Serial Content record is found for the inputted WipStepSerialContentID. If a record is not found, an error message is displayed.

## System Processing

- System retrieves the WIP Step Serial Content from the WIP_STEP_SERIAL_CONTENT table using the inputs. 
- System checks if a UnitID is linked to this WIP Step Serial Content: 
 
- If a UnitID is already linked to the WIP Step Serial Content, then this UnitID is outputted. 
- Else, system generates a UnitID for this WIP Step Serial Content History. System creates a record in the UNIT table and updates the *WIP_STEP_SERIAL_CONTENT.UnitID* with the UnitID just created. 
 
- System outputs the UnitID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STEP_SERIAL_CONTENT | ID | WipStepSerialContentID |
|  | UnitID | Unique identifier of the Unit. |
| UNIT | ID | Created UnitID. |
