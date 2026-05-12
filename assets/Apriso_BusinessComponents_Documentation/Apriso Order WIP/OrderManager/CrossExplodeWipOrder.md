# CrossExplodeWipOrder

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

The purpose of this Business Component is to merge the operation sequencing between parent and child orders.
 

This components ends-up being invoked after a child order is added to a parent order. If the child order process has cross-order sequencing then it goes through and merges with some parent in the level.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | wipOrderNo | Char | Yes | Work order to explode. |
| Input | wipOrderType | Integer | Yes | Work order explode. |

## Validations

Work order exists.

## System Processing

- System examines all the NEXT PARENT DESIGN sequences of the child order 
- For each NEXT PARENT DESIGN record system retrieves the parent order at the specified level by using the WIP_ORDER_RELATION as the graph structure. 
 
- System finds a PREVIOUS CHILD DESIGN of the same level as the child order. 
- System creates a NEXT PARENT sequence from the child order to the parent order. 
- System creates a PREVIOUS CHILD sequence from the parent order to the child order. 
 
- For each PREVIOUS PARENT DESIGN record of the child order system retrieves the parent order at the specified level by using the WIP_ORDER_RELATION as the graph structure. 
 
- System finds a NEXT CHILD DESIGN of the same level at the parent order. 
- System creates a NEXT CHILD sequence from the parent order operation to the child order operation. 
- System creates a PREVIOUS CHILD sequence from the child order operation to the parent order operation.

## Pre-Conditions

The genealogy graph's structure which the child order belongs to is not cyclic.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_OPERATION_SEQUENCE | All | Sequences from parent to child order of type NEXT CHILD are created. |
| WIP_OPERATION_SEQUENCE | All | Sequences from parent to child order of type PREVIOUS CHILD are created. |
| WIP_OPERATION_SEQUENCE | All | Sequences from child to parent order of type NEXT PARENT are created. |
| WIP_OPERATION_SEQUENCE | All | Sequences from child to parent order of type PREVIOUS PARENT are created |
