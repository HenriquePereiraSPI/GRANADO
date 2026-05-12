# ChangeOrderDetailFromAndToLocation

**Category:** Apriso/Order/Order
**Class:** `FlexNet.BusinessFacade.Common.OrderManager`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to update the FromLocationID and the ToLocationID of the inputted ORDER_DETAIL record based on the inputted values. It also updates all of the ORDER_DETAIL records for a given ORDER_HEADER record if no OrderLineNo is supplied.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | OrderNo | Char | No | The order number. If not specified, a new order number will be generated. |
| Input | OrderType | Integer | Yes | The type of order. |
| Input | OrderLineNo | Integer | No | The order line number to update. |
| Input | FromLocationID | Integer | No | The new "from location" for the order detail. |
| Input | ToLocationID | Integer | No | The new "to location" for the order detail. |

## Validations

- If the FromLocationID Input is not 0, the system validates it is a valid Warehouse Location. 
- If the ToLocationID Input is not 0, the system validates it is a valid Warehouse Location. 
- If the OrderLineNo Input is not 0, the system validates that the user has entered a valid order detail record based on the OrderNo, OrderType, and OrderLineNo. 
- If the OrderLineNo Input is 0, the system validate that the user has entered a valid order header record based on the OrderNo and OrderType.

## System Processing

- If both the FromLocationID and ToLocationID values are 0, then error, as the user is not updating any locations. 
- If OrderLineNo is not 0, the system updates the given order detail record with the inputted FromLocationID and ToLocationID. 
 
- Otherwise, OrderLineNo is 0, and the system updates all the order detail records for the given order header with the inputted FromLocationID and ToLocationID.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| ORDER_DETAIL | OrderNo | OrderNo |
| ORDER_DETAIL | OrderType | OrderType |
| ORDER_DETAIL | OrderLineNo | OrderLineNo |
| ORDER_DETAIL | FromLocationID | FromWarehouseLocationID |
| ORDER_DETAIL | ToLocationID | ToWarehouseLocationID |
