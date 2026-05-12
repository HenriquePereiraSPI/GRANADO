# ReOpenOrder

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderRestatuser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update the status of an order (ORDER_HEADER.OrderStatus) to Started (2).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No | Order number to update |
| Input | OrderType | Integer | No | Order type to update |

## Validations

System validates that the inputted OrderNo and OrderType exist.

## System Processing

- System retrieves the order from the inputs in the ORDER_HEADER table. 
- System updates the status of the retrieved order (ORDER_HEADER.OrderStatus) to Started (2).

## Pre-Conditions

The order must exist.

## History Recording in Production

Transaction history is recorded.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_HEADER | OrderNo | Inputted OrderNo (Required) |
| ORDER_HEADER | Order Type | Inputted OrderType (Required) |
| ORDER_HEADER | OrderStatus | 2 - 'Started' |
