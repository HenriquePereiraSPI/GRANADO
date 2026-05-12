# ChangeOrderHeaderStatus

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipOrderManager`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active
**Keywords:** Status, WIPOrderNo, WIPOperation, OrderHeader

## Description

This Business Component method is used to update Order Header Status.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | The Order Number of the Order Header to be updated. |
| Input | OrderType | Short | Yes | The Order Type of the Order Header to be updated. |
| Input | Status | Short | Yes | The status of the Order Header to be updated. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| Execute | Boolean | Determines whether to execute the Business Component method. |

## Validations

- The system validates if an Order Header exists for the inputted OrderNo and OrderType in the ORDER_HEADER table 
- The system validates if the Status is greater than zero 
- If a value for the Execute dynamic input is not provided, it is set to True

## System Processing

- If Execute is set to True, the system updates OrderStatus using the provided value

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
| ORDER_HEADER | OrderStatus | The status of the Order Header. |
