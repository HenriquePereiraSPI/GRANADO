# DeleteWipOrderAndChildren

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to logically delete a WIP operation.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipOrderNo | Char | Yes | Wip order number to be deleted. |
| Input | WipOrderType | Integer | Yes | Wip order type to be deleted. |

## Validations

System checks that the inputted wip order exists.

## System Processing

- System validates the inputted WipOrderNo and WipOrderType is valid in the WIP_ORDER table. 
- System then set the Wip Order to in-active 
- System then sets all Wip Operations for each wip order to in-active 
- System then sets all Tasks for all Wip Operations to in-active 
- System then sets all Wip Components for all wip operations to in-active 
- System then sets all Wip Containers for all wip operations to in-active 
- System then sets all Wip Contents for all wip operations to in-active 
- System then sets all Wip Content Details for all wip operations to in-active 
- System then sets all Wip Operation Sequences for all wip operations to in-active 
- System then sets all Wip Operation Steps for all wip operations to in-active 
- System then sets all Wip Required Resources for all wip operations to in-active 
- System then sets all Wip Serial Contents for all wip operations to in-active 
- System then sets all Wip Serials for all wip operations to in-active 
- System then sets all Wip Order Contents for all wip operations to in-active 
- System then sets all Wip Order Containers for all wip operations to in-active 
- System then sets all Wip Order Content Serials for all wip operations to in-active 
- System then sets all Wip Order Details for all wip operations to in-active

## Pre-Conditions

A Wip Order must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WipOrderNo | Inputted WipOrderNo (Required) |
| WIP_ORDER | WipOrderType | Inputted WipOrderType (Required) |
| WIP_ORDER | Active | Set to 0 |
| WIP_OPERATION | Active | Set to 0 |
| TASK | Active | Set to 0 |
| WIP_COMPONENT | Active | Set to 0 |
| WIP_CONTAINER | Active | Set to 0 |
| WIP_CONTENT | Active | Set to 0 |
| WIP_CONTENT_DETAIL | Active | Set to 0 |
| WIP_OPERATION_SEQUENCE | Active | Set to 0 |
| WIP_OPERATION_STEP | Active | Set to 0 |
| WIP_REQ_RESOURCE | Active | Set to 0 |
| WIP_SERIAL_NO_CONTENT | Active | Set to 0 |
| WIP_SERIAL_NO | Active | Set to 0 |
| WIP_ORDER_CONTENT | Active | Set to 0 |
| WIP_ORDER_CONTAINER | Active | Set to 0 |
| WIP_ORDER_CONTENT_SERIAL | Active | Set to 0 |
| WIP_ORDER_DETAIL | Active | Set to 0 |
