# MaintainOrderHeader_v93

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Deprecated

## Description

The purpose of this Business Component is to maintain already existing Order Headers in the system. The maintained Order Header is outputted from the business component.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | The order number to maintain. |
| Input | OrderType | Integer | Yes | The order type. |
| Input | OrderStatus | Integer | Yes | The order status. |
| Input | Company | Char | No | The company. |
| Input | Priority | Integer | No | Priority of the order. |
| Input | OrderDate | DateTime | No | The Order date of the Order. |
| Input | WipOrderNo | Char | No | The Wip Order Number. |
| Input | WipOrderType | Integer | No | WipOrderType field is required if the Wip Order is specified. |
| Input | OprSequenceNo | Char | No | Both the WipOrderNo and WipOrderTYpe required is the operation is specified. |
| Input | TextLong | Char | No | Any notes for the order header. |
| Input | LanguageID | Integer | No | The language ID of the header. |
| Input | Division | Char | No | The division of the header. |
| Input | ProjectID | Integer | No | The project ID of the order. |
| Input | GLAccountID | Integer | No | The GL a/c of the order. |
| Input | CostCenter | Char | No | The cost center. |
| Input | UpdateOrderDate | Boolean | No | Update with inputted Order Date |
| Input | TriggerReExplosionFlag | Boolean | No | Re-explode the orders. |
| Output | CreatedOrderNo | Char | No | The maintained order number. |

## System Processing

- System invokes MaintainOrderHeader_v93_1 BC with ReExplodeImmediately input = false.
