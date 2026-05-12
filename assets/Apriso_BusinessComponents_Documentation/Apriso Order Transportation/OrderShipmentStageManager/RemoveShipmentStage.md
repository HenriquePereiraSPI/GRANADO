# RemoveShipmentStage

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.OrderShipmentStageManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This component deletes the leg (SHIPMENT_STAGE record) of a shipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ShipmentStageID | Integer | No | ID of stage to remove. |

## Validations

- System validates SHIPMENT_STAGE exists where ID = ShipmentStageID 
- System validates that no SHIPMENT_ORDER_STAGE is using the SHIPMENT_STAGE being deleted (SHIPMENT_ORDER_STAGE.ShipmentStageID = ShipmentStageID)

## System Processing

Deletes SHIPMENT_STAGE where ID = ShipmentStageID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SHIPMENT_STAGE | All | Record is deleted |
