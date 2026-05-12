# UnlinkSealFromOrder

**Category:** Apriso/Order/Transportation
**Class:** `FlexNet.BusinessFacade.Logistic.SealManager`
**Assembly:** `FlexNet.BusinessFacade.Logistic.dll`
**Status:** Active

## Description

This business component method unlinks a seal from an order by deleting the order seal record. This method should be used to remove the order seal completely, not to change the seal to a "broken" status.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderSealID | Integer | No | ID of seal to unlink. |

## Validations

System checks that the seal exists.

## System Processing

System removes the order seal record from the ORDER_SEAL table.

## History Recording in Production

FlexNet.BusinessFacade.Logistic.SealManager.UnlinkSealToOrder.xsd

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_SEAL | All | Record removed |
