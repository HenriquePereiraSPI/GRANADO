# WeighAdHoc

**Category:** Apriso/Weighing and Dispensing
**Class:** `FlexNet.BusinessFacade.WD.WeighManager`
**Assembly:** `FlexNet.BusinessFacade.WD.dll`
**Status:** Active
**Keywords:** Weighing Dispensing Weigh Ad Hoc AdHoc

## Description

This method performs ad-hoc weighing.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | MoveTransactionCode | Char | Yes | The transaction code of moving the container, i.e. WDMOVMAT. |
| Input | AdjustTransactionCode | Char | Conditional | The transaction code of adjusting source quantity, i.e. WDAUTADJ. |
| Input | ReasonCode | Char | No | Reason code. |
| Input | Comment | Char | No | User comment. |
| Input | DestinationContainer | Char | Yes | Destination Container number. |
| Input | DestinationWarehouseLocationID | Integer | Yes | Warehouse Location of Destination Container. |
| Input | ProductID | Integer | Yes | Product number. |
| Input | Container | Char | Yes | The source Container number. |
| Input | LotNo | Char | No | Lot number. |
| Input | WarehouseLocationID | Integer | No | Warehouse Location of the Container. |
| Input | ScaleStationID | Integer | No | Resource ID of the Scale Station. |
| Input | ScaleID | Integer | No | Resource ID of the Scale. |
| Input | TareWeight | Decimal | No | Tare weight. |
| Input | GrossWeight | Decimal | No | Gross weight. |
| Input | NetWeight | Decimal | Yes | Net weight. |
| Input | UomCode | Char | Yes | UOM of the weights. |
| Input | Manual | Boolean | Yes | The flag indicates manual weighing mode. |
| Input | WipOrderNo | Char | No | WIP Order number. |
| Input | WipOrderType | Integer | No | WIP Order type. |
| Input | OprSequenceNo | Char | No | Operation sequence number. |

## Validations

- System validates if Product exists. 
- System validates if Scale Station and the Scale exist. 
- System validates if Warehouse Location exists. 
- System checks if there is enough inventory to move.

## System Processing

- System adjusts source inventory (using Adjust_v92 BC). 
- System moves source inventory to Destination Container (using Move BC).
