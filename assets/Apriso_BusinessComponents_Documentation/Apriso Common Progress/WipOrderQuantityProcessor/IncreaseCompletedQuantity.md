# IncreaseCompletedQuantity

**Category:** Apriso/Common/Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderQuantityProcessor`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This component Increase the CompletedQuantity bucket of the WipOrder (not WipOrderContent). When Navigation runs, the WipOrder.CompletedQuantity and CompletedQuantity the bucket in Wip Content are increased when the progress cannot be pushed because no Next is found. This component is used to update (Increase) the Wip_Order CompletedQuantity without changing the records in the WIP_CONTENT table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order number to increase the completed quantity for. |
| Input | WipOrderType | Integer | Yes | Wip order type. |
| Input | Quantity | Decimal | No | Quantity to increase the completed quantity of wip order |

## Validations

The System validates that the wip order exists.

## System Processing

System increases the WIP_ORDER.QuantityCompleted bucket by the Quantity specified.

## Pre-Conditions

See validations.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | CompletedQuantity | CompletedQuantity = CompletedQuantity+ Input Quantity. |
