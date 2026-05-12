# ContainerReversal_v2

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Container Reversal Weigh Header

## Description

This Business Component method is used to make a reversal of the Container for a given weigh header. The method uses the Inventory 2 data model.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | Transaction | Char | No | The transaction name. |
| Input | WeighHeaderID | Integer | Yes | The ID of a weigh header record. |
| Input | MoveTransactionCode | Char | Yes | The transaction code for the Container reversal (e.g., WDREVCON). |
| Input | ReasonCode | Char | No | The Reason Code why the Container is reversed. |
| Input | Comment | Char | No | A comment text. |
| Input | Container | Char | Yes | The Container number. |
| Input | DestinationContainer | Char | Yes | The destination Container number. |
| Input | WarehouseLocationID | Integer | No | The Warehouse Location of the destination Container. |
| Input | WipOrderNo | Char | No | The WIP Order number. |
| Input | WipOrderType | Integer | No | The WIP Order type. |
| Input | OprSequenceNo | Char | No | The Operation Sequence Number. |

## Description Parameters

| Name | Type | Description |
|------|------|-------------|
| InventoryHistoryType | Integer | The Inventory 2 transaction history type (for the BCs that are called internally): 1 - None, 2 - Full, 3 - Aggregated. The default history type is 2. |
| InventoryHistoryMode | Integer | The Inventory 2 transaction history write mode (for the BC methods that are called internally): 1 - Async, 2 - Sync, 3 - Both. The default history mode is 2. |

## Validations

- The system validates if the weigh header exists.

## System Processing

- The system decreases the weighed quantity of the weigh line by the quantity of the Container (the net weight from the weigh line detail). 
- The system sets the weigh line status to Started. 
- The system creates an XML for the transaction history for the weigh line and weigh line details. When the transaction name is not specified, the default class and the method name of the BC is used. 
- The system removes the weigh line detail record for the Container. 
- The system sets the weigh header status to Started. 
- The system calls the DeleteHeaderContainer BC for a specified weigh header and Container. 
- The system calls the MoveInventory2 BC to move the inventory to a destination Container in a specified Warehouse location.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WEIGH_HEADER | ID | The weigh header ID. |
|  | WeighStatus | This field is set to 2 (Started). |
| WEIGH_HEADER_CONTAINER | WeighHeaderID | The weigh header ID. The record is deleted on reversal. |
|  | Container | The Container. |
| WEIGH_LINE | WeighHeaderID | The weigh header ID. |
|  | WeighStatus | This field is set to 2 (Started). |
|  | WeighedQuantity | The quantity is decreased by the net weight of the Container. |
| WEIGH_LINE_DETAIL | DestinationContainer | The destination Container. The record is deleted on reversal. |
