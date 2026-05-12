# ProvideWipOrder

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

The purpose of this Business Component is to retrieve the work order.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | wipOrderNo | Char | No | Work order number. |
| Input | wipOrderType | Integer | No | Work order type. |
| Output | wipOrder | Char | No | FlexNet.DataServices.Wip.Data.WipOrderDataSet+WipOrderRow) Work order record. |

## Validations

Validates the work order exists.

## System Processing

- System selects the work order record. 
- System returns the data-row.
