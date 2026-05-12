# ContainerReversal

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Container Reversal Weigh Header

## Description

This Business Component method is used to make a reversal of the Container for a given weigh header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | The transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of the weigh header record. |
| Input | MoveTransactionCode | Char | Yes | The transaction code for the Container reversal (e.g., WDREVCON). |
| Input | ReasonCode | Char | No | The Reason Code for why the Container is reversed. |
| Input | Comment | Char | No | A comment text. |
| Input | Container | Char | Yes | The Container number. |
| Input | DestinationContainer | Char | Yes | The destination Container number. |
| Input | WarehouseLocationID | Integer | No | The Warehouse Location of the destination Container. |
| Input | WipOrderNo | Char | No | The WIP Order number. |
| Input | WipOrderType | Integer | No | The WIP Order type. |
| Input | OprSequenceNo | Char | No | The Operation Sequence Number. |

## Validations

- The system validates that the weigh header exists.

## System Processing

- The system decreases the weighed quantity of the weigh line by the quantity of the Container (the net weight from the weigh line detail). 
- The system sets the weigh line status to Started.  
- The system creates an XML for the transaction history for the weigh line and weigh line details. When the transaction name is not specified, the default class and method name of the BC is used. 
- The system removes the weigh line detail record for the Container. 
- The system sets the weigh header status to Started. 
- The system calls the DeleteHeaderContainer BC for a specified weigh header and Container. 
- The system calls the Move BC method to move the inventory to destination Container in a specified Warehouse Location.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | WeighHeaderID |
|  | WeighStatus | This field is set to 2 (Started). |
| WEIGH_HEADER_CONTAINER | WeighHeaderID | WeighHeaderID. The record is deleted on reversal. |
|  | Container | Container |
| WEIGH_LINE | WeighHeaderID | WeighHeaderID |
|  | WeighStatus | This field is set to 2 (Started). |
|  | WeighedQuantity | The quantity is decreased by the net weight of Container. |
| WEIGH_LINE_DETAIL | DestinationContainer | The destination Container. The record is deleted on reversal. |
