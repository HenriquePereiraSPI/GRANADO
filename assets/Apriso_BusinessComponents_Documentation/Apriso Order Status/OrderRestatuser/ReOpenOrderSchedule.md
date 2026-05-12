# ReOpenOrderSchedule

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderRestatuser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to update the status of an order schedule (ORDER_SCHEDULE.OrderScheduleStatus) to Started (2).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | Order number to update |
| Input | OrderType | Integer | Yes | Order type to update |
| Input | OrderLineNo | Integer | Yes | Order line to update |
| Input | OrderLineSchedule | Integer | Yes | Order schedule to update |

## Validations

System validates that an Order Schedule can be retrieved from the inputs.

## System Processing

System updates the OrderScheduleStatus of the retrieved Order Schedule (ORDER_SCHEDULE.OrderScheduleStatus) to Started (2).

## Pre-Conditions

The Order Schedule must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_SCHEDULE | OrderNo | Inputted OrderNo |
| ORDER_SCHEDULE | Order Type | Inputted OrderType |
| ORDER_SCHEDULE | OrderLineNo | Inputted OrderLineNo |
| ORDER_SCHEDULE | OrderLineSchedule | Inputted OrderLineSchedule |
| ORDER_SCHEDULE | OrderScheduleStatus | 2 - 'started' |
