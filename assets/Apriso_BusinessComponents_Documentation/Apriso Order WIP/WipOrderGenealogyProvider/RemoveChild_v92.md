# RemoveChild_v92

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.WipOrderGenealogyProvider`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to remove a child component for genealogy.
 

The child is removed by setting the parent child relation to 0 and child order quantity to 0 in the WIP_ORDER_RELATION table.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ParentWipOrderNo | Char | Yes | The parent Wip Order No used for the genealogy relationship. |
| Input | ParentWipOrderType | Integer | Yes | The parent Wip Order Type used for the genealogy relationship. |
| Input | ChildWipOrderNo | Char | Yes | The child Wip Order No used for the genealogy relationship. |
| Input | ChildWipOrderType | Integer | Yes | The child Wip Order Type used for the genealogy relationship. |

## Validations

- System Validates Parent WIP Order exists 
- System Validates child WIP Order exists 
- System validates that the Parent Child relationship exists for specified orders

## System Processing

System sets the parent child ration to 0 and child order quantity to 0 in the WIP Order relationship table.

## Pre-Conditions

Parent Child relationship should exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER_RELATION | ParentChildRatio | 0 |
| WIP_ORDER_RELATION | ChildOrderQuantity | 0 |
