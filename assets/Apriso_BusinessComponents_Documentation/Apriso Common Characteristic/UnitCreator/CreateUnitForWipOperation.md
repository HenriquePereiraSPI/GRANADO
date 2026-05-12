# CreateUnitForWipOperation

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Wip Operation. This UnitID can then be used to link characteristics to the given Wip Operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order number of the wip operation to create the unit for. |
| Input | WipOrderType | Integer | Yes | Wip order type of the wip operation to create the unit for. |
| Input | OprSequenceNo | Char | No | Operation sequence number of the wip operation to create the unit for. |
| Output | UnitID | Char | No | Created unit ID. |

## Validations

System verifies that a Wip Operation record is found for the inputted WipOrderNo, WipOrderType and OprSequenceNo. If no record is found, an error message is displayed.

## System Processing

- System retrieves the Wip Operation record(s) from the WIP_OPERATION table using the inputs. 
- System checks if a UnitID is linked to this Wip Operation: 
 
- if a UnitId is already linked to the Wip Operation, then this UnitID is outputted. 
- Else System generates a UnitID for this Wip Operation: System creates a record in UNIT table and updates the WIP_OPERATION.UnitID with the UnitID just created. 
 
- System outputs the UnitID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION | WipOrderNo | Inputted WipOrderNo |
|  | WipOrderType | Inputted WipOrderType |
|  | OprSequenceNo | Inputted OprSequenceNo |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
