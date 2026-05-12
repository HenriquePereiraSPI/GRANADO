# AddContainmentSerial_v2

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This Business Component method is required for adding a Serial Number to the Containment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The product ID of the item to add. |
| Input | SerialNo | Char | Yes | The Serial Number of the item to add. |
| Input | ContainmentID | Integer | No | The ID of the Containment. |
| Input | FilterUsed | Char | No | The filter condition used to view the list of entities. |
| Input | ProfileUsed | Char | No | The grid profile used to view the list of entities. |
| Input | FutureHoldName | Char | No | The name of the future hold that is adding the item to Containment. |
| Input | SourceFileName | Char | No | The name of the Excel file that is used to import items to Containment. |

## Validations

- The Business Component validates the Inputs and checks if the entities exist in the system. 
- The Serial Number must not already exist in the Input Containment.

## System Processing

A record is inserted in the CONTAINMENT_SERIAL_NO table if the validation succeeds.

## Pre-Conditions

Pre-condition: the Containment and Serial Number must exist. Post-condition: the Serial Number is added to Containment.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ProductID | ProductID |
|  | SerialNo | SerialNo |
|  | ContainmentID | ContainmentID |
|  | FilterUsed | FilterUsed |
|  | ProfileUsed | ProfileUsed |
|  | FutureHoldName | FutureHoldName |
|  | SourceFileName | SourceFileName |
