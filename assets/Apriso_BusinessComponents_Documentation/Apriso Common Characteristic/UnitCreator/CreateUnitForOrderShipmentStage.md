# CreateUnitForOrderShipmentStage

**Category:** Apriso/Common/Characteristic
**Class:** `FlexNet.BusinessFacade.Characteristic.UnitCreator`
**Assembly:** `FlexNet.BusinessFacade.Characteristic.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to generate or retrieve a UnitID for a given Order Shipment Stage. This UnitID can then be used to link characteristics to the given Order Shipment Stage.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderShipmentStageID | Integer | Yes | Order shipment stage to create the unit for. |
| Output | UnitID | Integer | No | Created unit ID. |

## Validations

System verifies that an Order Shipment Stage record is found for the inputted ID. If record is not found, an error message is displayed.

## System Processing

- System retrieves the Order Shipment Stage record from ORDER_SHIPMENT_STAGE table using the input. 
- System checks if a UnitID is linked to this Order Shipment Stage: 
 
- if a UnitId is already linked to the Order Shipment Stage, then this UnitID is outputted. 
- Else System generates a UnitID for this Order Shipment Stage: System creates a record in UNIT table and updates the ORDER_SHIPMENT_STAGE.UnitID with the UnitID just created. 
 
- System outputs the UnitID

## Pre-Conditions

The Order Shipment Stage must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_SHIPMENT_STAGE | ID | Inputted OrderShipmentStageID |
|  | UnitID | Unit.ID |
| UNIT | ID | Outputted UnitID |
