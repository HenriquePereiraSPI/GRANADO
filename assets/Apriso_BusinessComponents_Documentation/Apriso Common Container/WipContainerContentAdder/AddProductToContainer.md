# AddProductToContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContainerContentAdder`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

This Business Component method is used to add WIP serials to a Container. This BC can be used to add WIP serials for multiple orders as well as WIP serials with more than one product depending on the Container type.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | The number of the Container to which the WIP product is being added. |
| Input | WipOrderNo | Char | Yes | The WIP Order number of the WIP product to be added to the Container. |
| Input | WipOrderType | Integer | Yes | The WIP Order type. |
| Input | OprSequenceNo | Char | Yes | The WIP Operation Sequence number of the WIP product to be added to the Container. |
| Input | Quantity | Decimal | Yes | The quantity of the WIP product to be added to the Container. |
| Input | ContentClass | Integer | Conditional | The WIP content class of the product being added. Required if the Container is empty and there is more than one WIP content available for the WIP Operation. When the Container is not empty, then it is possible to add only a content of the class that is already in the Container. |
| Input | ReasonCode | Char | Conditional | The Reason Code. Required if content is being added. Having WIP content of different Reason Codes in the Container is not allowed. |
| Input | ContainerGrossWeight | Decimal | No | The gross weight of the Container once the product has been added to the Container. |
| Input | ContainerGrossWeightUOM | Char | No | The unit of measure for the gross weight of the Container once the product has been added to the Container. |

## Validations

- The system validates the Container and Container class. 
- The system validates the product and serial. 
- The system validates the Lot Number if the product is both lot-tracked and serial-tracked. 
- The system validates the WIP Order and WIP Operation. 
- The system validates if it is allowed to add the WIP serial's product of quantity 1 to the Container. 
- The system validates that the WIP serial is not already in the Container. 
- The system validates that the WIP content of the WIP serial is of the Good WIP content class. 
- The system validates that there is enough WIP content quantity to add to the Container.

## System Processing

- The system creates or updates the WIP_CONTAINER table. 
- The system updates the WIP_SERIAL_NO table.

## History Recording in Production

The system creates history with details of the WIP Order and Container. The history conforms to the template defined in XSD FlexNet.BusinessRules.Manufacturing.Content.WipContentMover.MoveWipSerialToContainer.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_CONTAINER | Container | The Input. |
| WIP_CONTAINER | WipContentID | Retrieved based on the WIP serial from Wip_Serial_Content. |
| WIP_CONTAINER | Quantity | Increment by 1. |
| WIP_SERIAL_NO | Container | The Input. |
