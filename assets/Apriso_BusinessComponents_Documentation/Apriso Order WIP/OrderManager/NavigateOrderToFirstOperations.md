# NavigateOrderToFirstOperations

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip`
**Status:** Active

## Description

This Business Component method is used to perform navigation and tasking for the initial (first) WIP Operations after the explosion of the WIP Order is executed. This BC is intended to be used after the ExplodeWipOrder_v96 (or similar) BC.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The work order number. |
| Input | WipOrderType | Integer | Yes | The work order type. |

## Validations

- The system validates that the provided WIP Order exists. 
- The system validates if the WIP Order is exploded (the DeterminationStrategyUsed column is populated). 
- The system validates if the WIP Order has not been navigated to (the InternalState column must equal 1, which indicates an intermediate state).

## System Processing

The system performs navigation and tasking for the first Operations of the WIP Order. For details, see the *Explosion, Navigation & Tasking Guide*.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | (multiple columns) |  |
| WIP_OPERATION | (multiple columns) |  |
| WIP_CONTENT | (multiple columns) |  |
| WIP_CONTENT_DETAIL | (multiple columns) |  |
| TASK | (multiple columns) |  |
| TASK_MATERIAL_USE | (multiple columns) |  |
