# CreateUnitForWipLotNoStatusHistory

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated
**Keywords:** Wip LotNo Status History

## Description

Generates or retrieves a UnitID for a given WIP Lot No Status History. This UnitID can then be used to link documents or other entities to the given WIP Lot No Status History.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipLotNoStatusHistoryID | Integer | Yes | The ID of the WIP Lot No Status History record to read or create the unit for. |
| Output | UnitID | Integer | Yes | The created unit ID. |

## Validations

System validates that a WIP Lot No Status History record is found for the inputted WipLotNoStatusHistoryID. If a record is not found, an error message is displayed.

## System Processing

- System retrieves the WIP Lot No Status History from the WIP_LOT_NO_STATUS_HISTORY table using the inputs. 
- System checks if a UnitID is linked to this WIP Lot No Status History: 
 
- If a UnitID is already linked to the WIP Lot No Status History, then this UnitID is outputted. 
- Else, system generates a UnitID for this WIP Lot No Status History. System creates a record in the UNIT table and updates the *WIP_LOT_NO_STATUS_HISTORY.UnitID* with the UnitID just created. 
 
- System outputs the UnitID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_LOT_NO_STATUS_HISTORY | ID | WipLotNoStatusHistoryID |
|  | UnitID | UnitID, link to the UNIT table. |
| UNIT | ID | Created UnitID. |
