# ChangeContainmentItemStatus

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `Assembly Name: FlexNet.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This Business Component method is used to change the status of the Containment item.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ItemStatusID | Integer | Yes | The ID of the item status to which the Containment item is to be set. |
| Input | ContainmentID | Integer | Yes | The ID of the Containment |
| Input | LotNo | Char | No | The Lot Number of the Containment item. |
| Input | ProductID | Integer | Yes | The product ID of the Containment item. |
| Input | SerialNo | Char | No | The Serial Number of the Containment item. |

## Validations

- The system validates that the Inputs exist in the system.

## System Processing

- The Containment lot item or Containment serial item status is changed based on the Input provided.

## Pre-Conditions

- The Containment item must exist in the system.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| Containment_Serial_No | ContainmentItemStatusID | ItemStatusID |
| Containment_Lot_No | ContainmentItemStatusID | ItemStatusID |
