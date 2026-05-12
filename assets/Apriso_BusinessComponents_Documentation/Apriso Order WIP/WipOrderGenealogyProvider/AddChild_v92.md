# AddChild_v92

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.WipOrderGenealogyProvider`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to add a parent-child relationship between two orders.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentWipOrderNo | Char | Yes | The parent WIP Order number used for the genealogy relationship. |
| Input | ParentWipOrderType | Integer | Yes | The parent WIP Order type used for the genealogy relationship. |
| Input | ChildWipOrderNo | Char | Yes | The child WIP Order number used for the genealogy relationship. |
| Input | ChildWipOrderType | Integer | Yes | The child WIP Order type used for the genealogy relationship. |
| Input | ChildQuantityPercentage | Decimal | Yes | The child percentage of the parent quantity. |
| Input | ChildQuantity | Decimal | Yes | The child quantity. |
| Input | UomCode | Char | Yes | The UOM of the quantity. |

## Validations

- The parent order must exist. 
- The child order must exist. 
- The entire parent-child tree must not be not cyclic. 
- The relationship must not already exist.

## System Processing

- The system inserts a new record into WIP_ORDER_RELATION with the passed parameters. 
- The system calls CROSS EXPLOSION. 
- The system updates the child WIP Order with parent WIP Order information.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_RELATION | ParentWipOrderNo | ParentWipOrderNo |
|  | ParentWipOrderType | ParentWipOrderType |
|  | ChildWipOrderNo | ChildWipOrderNo |
|  | ChildWipOrderType | ChildWipOrderType |
|  | ParentChildRatio | ChildQuantityPercentage |
|  | ChildOrderQuantity | ChildQuantity |
|  | ChildOrderQuantityUOM | UomCode |
| WIP_ORDER | ParentWipOrderNo | Link to the Parent Wip Order No set for the Child Wip Order. |
|  | ParentWipOrderType | Link to the Parent Wip Order Type set for the Child Wip Order. |
|  | ParentOprSequenceNo | Link to the Parent Operation Sequence No set for the Child Wip Order. |
