# CompleteOrderLine

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderRestatuser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to change the status of an order line to Complete.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No | The order number to update. |
| Input | OrderType | Integer | No | The order type to update. |
| Input | OrderLineNo | Integer | No | The order line to update. |

## Validations

- The system checks that the inputted OrderNo, OrderType, and OrderLineNo exist. 
- The system validates that the order line status is either New or Started (and returns an error if the order line is on hold).

## System Processing

- The system retrieves a record in the ORDER_DETAIL table from the Inputs and updates the OrderStatus of the retrieved record to Completed (3). 
- The transaction history is recorded.

## Pre-Conditions

Order Line must exist and be either in the New or Started status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_DETAIL | OrderNo | The inputted WipOrderNo (required) |
| ORDER_DETAIL | OrderType | The inputted WipOrderType (required) |
| ORDER_DETAIL | OrderLineNo | The inputted OrderLineNo (required) |
| ORDER_DETAIL | OrderStatus | 3 - Completed |
