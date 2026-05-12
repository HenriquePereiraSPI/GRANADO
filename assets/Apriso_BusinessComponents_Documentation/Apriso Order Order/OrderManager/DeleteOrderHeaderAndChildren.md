# DeleteOrderHeaderAndChildren

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to logically delete an order and alls its children entities.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | Yes | Order header number to be deleted. |
| Input | OrderType | Integer | Yes | Order type. |

## Validations

System checks that the inputted Order exists.

## System Processing

- System validates the inputted OrderNo and OrderType is valid in the ORDER_HEADER table. 
- System then sets: 
 
- the order to in-active. 
- all Order Lines for the order to in-active 
- all Wip Orders for each order line to in-active 
- all Wip Operations for each wip order to in-active 
- all Tasks for all Wip Operations to in-active 
- all Wip Components for all wip operations to in-active 
- all Wip Containers for all wip operations to in-active 
- all Wip Contents for all wip operations to in-active 
- all Wip Content Details for all wip operations to in-active 
- all Wip Operation Sequences for all wip operations to in-active 
- all Wip Operation Steps for all wip operations to in-active 
- all Wip Required Resources for all wip operations to in-active 
- all Wip Serial Contents for all wip operations to in-active 
- all Wip Serials for all wip operations to in-active 
- all Wip Order Contents for all wip operations to in-active 
- all Wip Order Containers for all wip operations to in-active 
- all Wip Order Content Serials for all wip operations to in-active 
- all Wip Order Details for all wip operations to in-active

## Pre-Conditions

An Order must exist.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_HEADER | OrderNo | Inputted OrderNo (Required) |
| ORDER_HEADER | OrderType | Inputted OrderType (Required) |
| ORDER_HEADER | Active | Set to 0 |
| ORDER_DETAIL | Active | Set to 0 |
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
