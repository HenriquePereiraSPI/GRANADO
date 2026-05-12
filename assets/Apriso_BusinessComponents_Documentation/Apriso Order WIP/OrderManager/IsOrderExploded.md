# IsOrderExploded

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

The purpose of this Business Component is to return whether or not the specified order is exploded.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | wipOrderNo | Char | Yes | Work order number. |
| Input | wipOrderType | Integer | Yes | Work order type. |
| Output | isExploded | Boolean | No | Whether or not the order was exploded. |

## Validations

Work order exists.

## System Processing

- System determines if the determination strategy used field was set. 
- If set, then returns true, else returns false.
