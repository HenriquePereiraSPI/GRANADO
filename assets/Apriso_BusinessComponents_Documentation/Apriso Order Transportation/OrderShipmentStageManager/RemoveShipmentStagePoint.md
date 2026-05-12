# RemoveShipmentStagePoint

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.OrderShipmentStageManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This component deletes a Loading or an Unloading point (SHIPMENT_STAGE_POINT record) of a shipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ShipmentStagePointID | Integer | No | ID of the stage point to remove. |

## Validations

- System validates SHIPMENT_STAGE_POINT exists where ID = ShipmentStageID 
- System validates that no record in SHIPMENT_STAGE is using the Stage Point being deleted (LoadPointID = ShipmentStageID or UnloadPointID = ShipmentStageID)

## System Processing

Deletes SHIPMENT_STAGE_POINT where ID = ShipmentStageID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SHIPMENT_STAGE_POINT | All | Record is deleted |
