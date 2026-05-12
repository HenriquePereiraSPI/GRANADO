# AddSerialToContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContainerContentAdder`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to add a WIP product to a container. This BC supports adding the Lot Number and quantity-tracked WIP products to a Container. It enables adding products for multiple WIP Orders based on the Container type. It also enables adding more than one product based on the Container type. The BC supports WIP Orders with only a single Lot Number. A WIP product in the Scrapped status cannot be added.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | The number of the Container to add the WIP serial to. |
| Input | ProductID | Integer | Yes | The WIP product to be added to the Container. |
| Input | SerialNo | Char | Yes | The WIP serial to be added to the Container. |
| Input | WipOrderNo | Char | Yes | The WIP Order number of the WIP serial to be added to the Container. |
| Input | WipOrderType | Integer | Yes | The WIP order type. |
| Input | OprSequenceNo | Char | Yes | The WIP Operation Sequence number of the WIP serial to be added to the Container. |

## Validations

- The system validates the Container and Container class. 
- The system validates the WIP Order and WIP Operation. 
- The system validates the product specified in the WIP Order. 
- The system validates the Lot Number if the product is lot-tracked based on the WIP_ORDER_LOT table.

## System Processing

- The system creates or updates WIP_CONTAINER.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_CONTAINER | Container | Input |
|  | WipContentID | Retrieved based on the inputted WIP Order, WIP Order Type, Operation Sequence, content class, and Reason Code. |
