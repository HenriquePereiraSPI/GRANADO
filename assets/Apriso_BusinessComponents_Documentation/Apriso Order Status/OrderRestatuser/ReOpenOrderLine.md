# ReOpenOrderLine

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderRestatuser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update the status of an order line (ORDER_DETAIL.OrderStatus) to Started (2).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | Order number to update |
| Input | OrderType | Integer | Yes | Order type to update |
| Input | OrderLineNo | Integer | Yes | Order line to update. |

## Validations

System validates that an Order Line can be retrieved from the inputs.

## System Processing

System updates the status of the retrieved order line (ORDER_DETAIL.OrderStatus) to Started (2).

## Pre-Conditions

The Order Line must exist

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_DETAIL | OrderNo | Inputted OrderNo |
| ORDER_DETAIL | Order Type | Inputted OrderType |
| ORDER_DETAIL | OrderLineNo | Inputted OrderLineNo |
| ORDER_DETAIL | OrderStatus | 2 - 'started' |
