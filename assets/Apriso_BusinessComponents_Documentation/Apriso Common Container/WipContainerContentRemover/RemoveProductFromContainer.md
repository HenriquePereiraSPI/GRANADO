# RemoveProductFromContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContainerContentRemover`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to remove a WIP Product from a container. This component supports removing Lot and quantity tracked WIP Products from a container. It also allows removing product for multiple WIP orders.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Container number of the container to remove the wip product from. |
| Input | WipOrderNo | Char | Yes | Wip order number of the wip product to be removed from the container. |
| Input | WipOrderType | Integer | Yes | Wip order type. |
| Input | OprSequenceNo | Char | Yes | Wip operation sequence number of the wip product to be removed from the container. |
| Input | Quantity | Decimal | Yes | Quantity of the wip product to be removed from the container. |

## Validations

- System validates container and container class. 
- System validates WIP order, WIP operation. 
- System validates product specified in WIP order. 
- System validates LOT if product lot tracked based on WIP_ORDER_LOT.

## System Processing

System updates or deletes (if quantity goes to 0) WIP_CONTAINER.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_CONTAINER | Quantity (decremented) | Input |
