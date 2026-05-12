# MoveSerial_v91

**Category:** Apriso/Common/Serial
**Class:** `FlexNet.BusinessFacade.Manufacturing.WipSerialMover`
**Assembly:** `FlexNet.BusinessFacade.Manufacturing.dll`
**Status:** Active

## Description

The purpose of this Business Component is to move a serial that is in production to a different operation. This business component performs a manual move that is equivalent to what navigation would perform to the same serial once it has been reported.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WipContentDetailID | Integer | Yes | ID of source wip content detail of the wip serial to be moved. |
| Input | ProductID | Integer | Yes | Product id of the wip serial to be moved. |
| Input | SerialNo | Char | Yes | Serial number of the wip serial to be moved. |
| Input | DestWipOrderNo | Char | Yes | Destination wip order number of the destination wip content. |
| Input | DestWipOrderType | Integer | Yes | Wip order type of the wip order. |
| Input | DestOprSequenceNo | Char | Yes | Destination wip operation sequence number of the destination wip content. |

## Validations

- System validates the serial 
- System validates the source wip content 
- System validates the wip operation.

## System Processing

- System performs validations as above 
- System then validates the serial being moves exists in the source location 
- System then moves quantities to the destination operation 
- System then moves the serial to the destination operation 
- System then creates a task for the destination operation if required.

## Pre-Conditions

- The serial exists. 
- The destination operation exists.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WIP_SERIAL_NO_CONTENT (new record is created for serial being moved) | WipContentID | Updated to the WipContentID for the destination operation |
|  | InputBucket | Updated to True |
| WIP_CONTENT | InputBalance | Source: If serial was at input, then decremented by 1Destination: If serial was at input or output, then incremented by 1 |
|  | QuantityAllocated | Source: If serial was allocated, then decremented by 1Destination: If serial was allocated, then incremented by 1. |
|  | TotalReceived | Source: If serial was allocated or at input, then decremented by 1Destination: If serial was allocated or at input, then incremented by 1 |
|  | OutputBalance | Source: If serial was at output, then decremented by 1 |
| WIP_CONTENT_DETAIL | Same as WIP_CONTENT |  |
