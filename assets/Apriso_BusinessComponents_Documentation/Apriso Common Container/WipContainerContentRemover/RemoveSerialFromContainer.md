# RemoveSerialFromContainer

**Category:** Apriso/Common/Container
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipContainerContentRemover`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to remove WIP Serial from a container. Lot tracked WIP Products can be removed from the container. This method allows removing product for multiple WIP orders.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ContainerNo | Char | Yes | Number of the container to remove the wip serial from. |
| Input | ProductID | Integer | Yes | Wip product to be removed from the container. |
| Input | SerialNo | Char | Yes | Wip serial to be removed from the container. |

## Validations

- System validates container and container class. 
- System validates product and serial. 
- System validates LOT if product is Serial and LOT tracked. 
- System validates WIP order and WIP operation.

## System Processing

- System updates the WIP_SERIAL_NO Container to null. 
- System updates or deletes (if quantity goes to 0) WIP_CONTAINER.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SERIAL_NO | Container | Null |
| WIP_CONTAINER | QUANTITY | Decremented by 1 |
