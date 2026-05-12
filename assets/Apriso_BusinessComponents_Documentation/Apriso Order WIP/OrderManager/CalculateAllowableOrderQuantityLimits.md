# CalculateAllowableOrderQuantityLimits

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

This Business Component method is used to calculate the allowable order quantity limits for a specified work order. A work order's quantity can only be changed by a quantity within the boundaries.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | wipOrderNo | Char | Yes | The work order. |
| Input | wipOrderType | Integer | Yes | The work order type. |
| Output | lowerQuantity | Decimal | No | The lowest possible quantity for this order. |
| Output | upperQuantity | Decimal | No | The hightest possible quantity for this order. |

## Validations

The order must exist.

## System Processing

- The lower bound is the work order quantity minus the minimum of the "to be processed" quantities of all the Operations. 
- The upper bound is the maximum positive value.
