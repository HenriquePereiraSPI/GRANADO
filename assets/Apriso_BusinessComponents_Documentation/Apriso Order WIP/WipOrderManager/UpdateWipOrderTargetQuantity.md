# UpdateWipOrderTargetQuantity

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** WIPOrderNo, WIPOperation, WipOrderTargetQuantity, Target, Quantity

## Description

This Business Component method is used to update Target Quantity of the WIP Order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | The WipOrderNo of the WIP Order to be updated. |
| Input | OrderType | Short | Yes | The WipOrderType of the WIP Order to be updated. |
| Input | TargetQuantity | Decimal | Yes | The TargetQuantity of the WIP Order to be updated. |

## Validations

- The system validates if a WIP Order exists for the inputted OrderNo, OrderType 
- The system validates if a TargetQuantity is greater or equal zero

## System Processing

- The system updates TargetQuantity using the provided value

## Pre-Conditions

None

## Published Events

None

## History Recording in Production

None

## Host Integration Support

None

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | TargetQuantity | The Target Quantity of the WIP Order. |
