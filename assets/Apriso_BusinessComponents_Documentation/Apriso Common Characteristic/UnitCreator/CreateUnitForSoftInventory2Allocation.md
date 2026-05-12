# CreateUnitForSoftInventory2Allocation

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated
**Keywords:** Soft Inventory2 Allocation Unit

## Description

This Business Component method is used to retrieve a unit ID for a given Soft Inventory2 Allocation (or to generate one if it does not exist). The unit ID can be used to link documents or other entities to the Soft Inventory2 Allocation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | SoftInventory2AllocationID | Integer | Yes | The ID of the Soft Inventory2 Allocation record to read or create the unit for. |
| Output | UnitID | Integer | Yes | The created unit ID. |

## Validations

- The system verifies that the Soft Inventory2 Allocation record is found for the inputted SoftInventory2AllocationID.

## System Processing

- The system retrieves the record from the SOFT_INVENTORY2_ALLOCATION table using the SoftInventory2AllocationID Input. 
 
- If the UnitID is not set in the retrieved record, the system creates a new record in the UNIT table and updates the SOFT_INVENTORY2_ALLOCATION.UnitID column with the created UnitID. 
 
- The system returns the value of SOFT_INVENTORY2_ALLOCATION.UnitID as UnitID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SOFT_INVENTORY2_ALLOCATION | ID | SoftInventory2AllocationID. |
|  | UnitID | UnitID, link to the UNIT table. |
| UNIT | ID | Created UnitID. |
