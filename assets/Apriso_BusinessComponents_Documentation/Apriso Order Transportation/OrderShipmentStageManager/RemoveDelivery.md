# RemoveDelivery

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.OrderShipmentStageManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This component deletes the assignment of a delivery to a shipment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderShipmentStageID | Integer | No | ID of the order shiment stage to be removed. |

## Validations

System validates the ORDER_SHIPMENT_STAGE exists where ID = OrderShipmentStageID

## System Processing

System deletes ORDER_SHIPMENT_STAGE where ID = OrderShipmentStageID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| SHIPMENT_ORDER_STAGE | All | Record is deleted |
