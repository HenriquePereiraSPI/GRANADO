# DecreaseCompletedQuantity

**Category:** Apriso/Common/Progress
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderQuantityProcessor`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This component decreases the CompletedQuantity bucket of the WipOrder (not WipOrderContent). When Navigation runs, the WipOrder.CompletedQuantity and CompletedQuantity the bucket in Wip Content are increased when the progress cannot be pushed because no Next is found. This component is used to update (decrease) the Wip_Order CompletedQuantity without changing the records in the WIP_CONTENT table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order number to decrease the completed quantity for. |
| Input | WipOrderType | Integer | Yes | Wip order type. |
| Input | Quantity | Decimal | Yes | Quantity to decrease the completed quantity of wip order. |

## Validations

The System validates that WIP order exists.

## System Processing

System decreases the WIP_ORDER.QuantityCompleted bucket by the Quantity specified.

## Pre-Conditions

See validations.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | CompletedQuantity | CompletedQuantity = CompletedQuantity- Input.Quantity. |
