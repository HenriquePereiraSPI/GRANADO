# CheckTransactionHoldCondition

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.HoldDetailProvider`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

This Business Component method is used to check if any of the inputted entities are on hold for a given transaction code and if they are outputs of an array of entities that were on hold.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | TransactionCode | Char | Yes | The transaction code used to verify the TransactionReasonCodeHold setting. |
| Input | ReasonCode | Char | No | The Reason Code used to check if the entity was put on hold. |
| Input | ContainerNo | Char | No | The Container number validated against the CONTAINER table. |
| Input | LotNo | Char | No | The Lot Number validated against the LOT_NO table. |
| Input | ProductID | Integer | No | The product ID validated against the PRODUCT table. |
| Input | SerialNo | Char | No | The string Serial Number validated against the SERIAL_NO table. |
| Input | PartnerID | Integer | No | The partner ID validated against the PARTNER table. |
| Input | WarehouseLocationID | Integer | No | The Warehouse Location ID validated against the WAREHOUSE_LOCATION table. |
| Input | WipOrderNo | Char | No | The WIP Order number validated against the WIP_ORDER table. |
| Input | WipOrderType | Integer | No | The WIP Order type. |
| Input | OprSequenceNo | Char | No | The Operation Sequence Number validated against the WIP_OPERATION table. |
| Input | CheckContainerDetail | Boolean | Conditional | The Container number used to indicate if the Container inventory needs to be checked for holds. This Input is required when Container is inputted. |
| Output | IsOnHold | Boolean | No | Indicates if any of the entities is on hold. |
| Output | HoldDetail | Char | No | Provides details on the entities on hold. |

## Validations

- The transaction code must be valid.

## System Processing

- For the given transaction code, the system validates that there are no holds for the inputted entities that will block the transaction from running based on data in the TRANSACTION_REASON_CODE_HOLD table. 
- The transaction outputs IsOnHold, the value of which depends on whether there are any entities on hold for the transaction code. 
- If the transaction finds an entity on hold, then the transaction will return with the first held entity found and return this in the HoldDetail Output.

## Pre-Conditions

Literal translations present in the LITERAL tables for the inputted literal ID.
