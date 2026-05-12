# ContainerScrap

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Container Scrap Weigh Header

## Description

This Business Component method is used to scrap a Container for a given weigh header.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | The transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of the weigh header record. |
| Input | AdjustTransactionCode | Char | Yes | The transaction code for scrapping Containers (e.g., WDSCPCON). |
| Input | ReasonCode | Char | No | The Reason Code for why the Container is scrapped. |
| Input | Comment | Char | No | The comment text. |
| Input | Container | Char | Yes | The Container number. |
| Input | WipOrderNo | Char | No | The WIP Order number. |
| Input | WipOrderType | Integer | No | The WIP Order type. |
| Input | OprSequenceNo | Char | No | The Operation Sequence Number. |

## Validations

- The system validates if a weigh header exists.

## System Processing

- The system decreases the weighed quantity of the weigh line by the quantity of Container (the net weight from the weigh line detail). 
- The system sets the weigh line status to Started. 
- The system creates an XML for the transaction history for the weigh line and the weigh line details. When the transaction name is not specified, the default class and method name of the BC is used. 
- The system removes the weigh line detail record for the Container. 
- The system sets the weigh header status to Started. 
- The system calls the DeleteHeaderContainer BC for the specified weigh header and the Container. 
- The system calls the Adjust_v92 BC to update the inventory.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | The weigh header ID. |
|  | WeighStatus | This field is set to 2 (Started). |
| WEIGH_HEADER_CONTAINER | WeighHeaderID | The weigh headerID. The record is deleted on scrap. |
|  | Container | The Container. |
| WEIGH_LINE | WeighHeaderID | The weigh header ID. |
|  | WeighStatus | This field is set to 2 (Started). |
|  | WeighedQuantity | The quantity is decreased by the content of the Container. |
| WEIGH_LINE_DETAIL | DestinationContainer | The destination Container. The record is deleted on scrap. |
