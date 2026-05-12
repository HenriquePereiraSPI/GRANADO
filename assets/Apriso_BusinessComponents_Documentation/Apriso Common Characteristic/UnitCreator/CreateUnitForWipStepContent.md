# CreateUnitForWipStepContent

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated
**Keywords:** Wip Step Content

## Description

Generates or retrieves a UnitID for a given WIP Step Content. This UnitID can then be used to link documents or other entities to the given WIP Step Content.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipStepContentID | Integer | Yes | The ID of the WIP Step Content record to read or create the unit for. |
| Output | UnitID | Integer | Yes | The created unit ID. |

## Validations

System validates that a WIP Step Content record is found for the inputted WipStepContentID. If a record is not found, an error message is displayed.

## System Processing

- System retrieves the WIP Step Content record from the WIP_STEP_CONTENT table using the inputs. 
- System checks if a UnitID is linked to this WIP Step Content: 
 
- If a UnitID is already linked to the WIP Step Content, then this UnitID is outputted. 
- Else, system generates a UnitID for this WIP Serial No Status History. System creates a record in the UNIT table and updates the *WIP_STEP_CONTENT.UnitID* with the UnitID just created. 
 
- System outputs the UnitID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_STEP_CONTENT | ID | WipStepContentID |
|  | UnitID | UnitID, link to the UNIT table. |
| UNIT | ID | Created UnitID. |
