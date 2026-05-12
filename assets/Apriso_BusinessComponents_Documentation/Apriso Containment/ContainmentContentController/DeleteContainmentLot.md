# DeleteContainmentLot

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This business component is required to remove a Lot from the Containment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The id of the alert recipient. |
| Input | LotNo | Char | Yes | Lot Number of the item to remove |
| Input | ContainmentID | Integer | No | ID of the Containment |

## Validations

The business component validates the inputs and checks if the entity exists in the Containment.

## System Processing

The Containment record is deleted from CONTAINMENT_LOT_NO if the validation succeeds.

## Pre-Conditions

**Pre-Condition** 
 

Lot exists in Containment.
 

 **Post-Condition** 
 

Lot removed from Containment.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_LOT_NO | Row deleted |  |
