# DeleteContainmentSerial

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This business component is required to remove a Serial from the Containment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The id of the alert recipient. |
| Input | SerialNo | Char | Yes | Serial Number of the item to remove |
| Input | ContainmentID | Integer | No | ID of the Containment |

## Validations

The business component validates the inputs and checks if the entity exists in the Containment.

## System Processing

The Containment record is deleted from CONTAINMENT_SERIAL_NO if the validation succeeds.

## Pre-Conditions

**Pre-Condition** 
 

Serial exists in Containment.
 

 **Post-Condition** 
 

Serial removed from Containment.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| CONTAINMENT_SERIAL_NO | Row Deleted | All inputs make the PK |
