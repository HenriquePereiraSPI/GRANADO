# ChangeWipOrderPutawayLocation

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to update the Putaway Location for all the WIP Orders that match the input criteria.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No | The order number. |
| Input | OrderType | Integer | No | The type of order. |
| Input | OrderLineNo | Integer | No | The order line number. |
| Input | WipOrderNo | Char | No | The WIP Order number. |
| Input | WipOrderType | Integer | No | This field is required if the WIP Order is specified. |
| Input | PutAwayLocationID | Integer | Yes | The new Putaway Warehouse Location. |

## Validations

- The inputted PutAwayLocationID must be greater than 0 and must be a valid Warehouse Location. 
- One of these criteria combinations must be supplied: 
 
- WipOrderNo, WipOrderType 
- OrderNo, OrderType, OrderLineNo 
- OrderNo, OrderType 

 **Note**: if none of these criteria are supplied, then the BC will invoke an error.

## System Processing

- The system gets all the WIP Orders for the inputted criteria. The system then finds the WIP Orders by looking at the Inputs in the following order: 
 
- WipOrderNo, WipOrderType – the system matches the exact WIP Order 
- OrderNo, OrderType, OrderLineNo – the system matches all the WIP Orders that are associated with the given order detail 
- OrderNo, OrderType – the system matches all the WIP Orders that are associated with the given order header 
 
- The system updates all the matched WIP Order Putaway Locations with the inputted PutAwayLocationID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_ORDER | WipOrderNo | WipOrderNo |
| WIP_ORDER | WipOrderType | WipOrderType |
| WIP_ORDER | PutAwayLocationID | PutAwayLocationID |
