# HoldWarehouseLocation

**Category:** Apriso/Common/Warehouse
**Class:** `FlexNet.BusinessFacade.Common.WarehouseLocationHolder`
**Assembly:** `Location FlexNet.BusinessFacade.Common.dll`
**Status:** Active

## Description

The purpose of this Business Component is to place a Warehouse Location on Hold.
 

 **Supported Features** 
 
 
- Placing a Warehouse Location on one or more Hold Reason Codes 
- Warehouse Location Validation 
- Hold Reason Code validation 
- Transaction history recorded

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | WarehouseLocationID | Integer | Yes | ID of warehouse location to be put on hold. |
| Input | ReasonCode | Char | Yes | The reason code to hold the warehouse location with. |
| Input | AllowMultipleHolds | Boolean | Yes | The flag determining if the multiple holds are allowed. |

## Validations

- System verifies that the inputted WarehouseLocationID is valid in the System. 
- System verifies that the inputted ReasonCode is of a Hold Reason Type

## System Processing

- System checks if more than one Hold is allowed for the Warehouse Location: 
 

 
 
 
- If not (i.e. if inputted AllowMultipleHolds = FALSE), system checks to see if the Warehouse Location is already on Hold, by searching for a Hold Reason Code for that Warehouse Location: 
 
- If not, system places the Warehouse Location on Hold with the entered reason code. A new record is generated for in the WAREHOUSE_LOCATION_HOLD table. 
- If yes, system returns an error message. 
 
- If more than one Hold is allowed, system checks to see if the inputted Hold ReasonCode already exists for the Warehouse Location: 
 
- If not, system places the Warehouse Location on Hold with the entered reason code. A new record is generated for in the WAREHOUSE_LOCATION_HOLD table. 
- If yes, system returns an error message. 
 
 
 
 
 
- System records the transaction history each time a new record is created in the WAREHOUSE_LOCATION_HOLD table..

## Pre-Conditions

- Warehouse Location and reason code must exist. 
- Reason code must be of type 'Hold'.

## History Recording in Production

The System records the transaction history each time a new record is created in the WAREHOUSE_LOCATION_HOLD table.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| WAREHOUSE_LOCATION_HOLD | WarehouseLocationID | WarehouseLocationID (Required) |
|  | ReasonCode | ReasonCode (Required) |
