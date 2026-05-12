# CompleteOrder

**Category:** Apriso/Order/Status
**Class:** `FlexNet.BusinessFacade.Common.OrderRestatuser`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to change the status of an order to Completed (3).

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | The order number to update. |
| Input | OrderType | Integer | Yes | The order type to update. |

## Validations

- The system checks that the the inputted OrderNo and OrderType exist.  
- The system validates that the order status is either New or Started (and returns an error if the order is on hold).

## System Processing

- The system retrieves a record in ORDER_HEADER from the Inputs and updates the OrderStatus of the retrieved record to Completed (3). 
- The transaction history is recorded.

## Pre-Conditions

- The order must exist and be either in the New or Started status.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_HEADER | OrderNo | The inputted OrderNo |
| ORDER_HEADER | OrderType | The inputted OrderType |
| ORDER_HEADER | OrderStatus | 3 - Completed |
