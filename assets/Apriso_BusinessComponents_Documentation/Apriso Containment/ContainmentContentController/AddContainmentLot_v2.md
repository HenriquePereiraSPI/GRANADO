# AddContainmentLot_v2

**Category:** Apriso/Containment
**Class:** `FlexNet.Containment.BusinessFacade.Containment.ContainmentContentController`
**Assembly:** `FlexNet.Containment.BusinessFacade.Containment.dll`
**Status:** Active

## Description

This Business Component method is required for adding a Lot Number to the Containment.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | ProductID | Integer | Yes | The product ID of the item to add. |
| Input | LotNo | Char | Yes | The Lot Number of the item to add. |
| Input | ContainmentID | Integer | No | The ID of the Containment. |
| Input | FilterUsed | Char | No | The filter condition used to view the list of entities. |
| Input | ProfileUsed | Char | No | The grid profile used to view the list of entities. |
| Input | FutureHoldName | Char | No | The name of the future hold that is adding the item to Containment. |
| Input | SourceFileName | Char | No | The name of the Excel file that is used to import items to Containment. |

## Validations

- The BC validates the Inputs and checks if the entities exist in the system.  
- The Lot Number must not already exist in the Input Containment.

## System Processing

The system inserts the record in the CONTAINMENT_LOT_NO table if the validation succeeds.

## Pre-Conditions

Pre-condition: the Containment and Lot Number must exist. 
 

Post-condition: the Lot Number is added to Containment.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
|  | ProductID | ProductID |
|  | LotNo | LotNo |
|  | ContainmentID | ContainmentID |
|  | FilterUsed | FilterUsed |
|  | ProfileUsed | ProfileUsed |
|  | FutureHoldName | FutureHoldName |
|  | SourceFileName | SourceFileName |
