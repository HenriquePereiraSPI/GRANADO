# GetHoldDetail

**Category:** Apriso/Common/Utility
**Class:** `FlexNet.BusinessFacade.Common.HoldDetailProvider`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The business component checks if any of the inputted entities are on hold, and if they are outputs an array of entities that were.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ReasonCode | Char | No | ReasonCode. To check if the entity was put on hold for particluar resoncode. |
| Input | ContainerNo | Char | No | Container Number. Validated against Container table. |
| Input | LotNo | Char | No | Lot Number. Validated against Lot table. |
| Input | ProductID | Integer | No | Product ID. Validated against Product table. |
| Input | SerialNo | Char | No | String, Serial Number. Validated against SerialNo table. |
| Input | PartnerID | Integer | No | Partner ID. Validated against Partner table. |
| Input | WarehouseLocationID | Integer | No | Warehouse Location ID. Validated against WarehouseLocation table. |
| Input | WipOrderNo | Char | No | WipOrder Number. Validated against WipOrder table. |
| Input | WipOrderType | Integer | No | WipOrderType |
| Input | OprSequenceNo | Char | No | Operation Sequence Number. Validated against Wip_Operation table |
| Input | CheckContainerDetail | Boolean | Conditional | Container Number. To indicate if Container inventory needs to be checked for hold. Required Input when Container is input. |
| Output | IsOnHold | Boolean | No | Boolean, Indicates if any of the entities is on hold. Output |
| Output | HoldDetail | Char | No | Provides details of the entities is on hold. Output. |

## System Processing

System checks all the hold tables for each valid entity that is inputted.

## Pre-Conditions

Literal translations present in literal tables for the input literal ID.
