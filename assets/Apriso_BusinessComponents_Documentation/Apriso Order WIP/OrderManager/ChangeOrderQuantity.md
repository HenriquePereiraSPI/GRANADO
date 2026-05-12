# ChangeOrderQuantity

**Category:** Apriso/Order/WIP
**Class:** `FlexNet.BusinessFacade.Common.Wip.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.Wip.dll`
**Status:** Active

## Description

This Business Component method is used to update the quantity of a given work order, update all of its "first" Operations, and reissue work Components.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | The work order number. |
| Input | wipOrderType | Integer | Yes | The work order type. |
| Input | newQuantity | Decimal | Yes | The new order quantity. |

## Validations

- The system validates that a record is found in the WIP_ORDER table for the inputted WipOrderNo and WipOrderType. 
- The system validates that the new quantity is within the allowable order quantity limits.

## System Processing

- The system updates the OrderQuantity of the retrieved record with the inputted NewQuantity. 
- The system updates all the "first" Operation quantities by the delta quantity (delta = new quantity - old quantity). 
- The system reissues the WIP Components for the order based on the new quantity. 
- The system invokes tasking to update the order quantity of the tasks for all the "first" Operations.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WipOrderNo | The inputted WipOrderNo (required). |
| WIP_ORDER | WipOrderType | The inputted WipOrderType (required). |
| WIP_ORDER | OrderQuantity | The inputted NewQuantity (required). |
| TASK_MATERIAL_USE | ALL | The records of the first Operation tasks are modified or created to reflect the new order quantity. |
| WIP_COMPONENT | ALL | The records for the order are all modified to reflect the new order quantity in the issued quantity field. |
