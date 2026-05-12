# CreateLotWithoutValidation

**Category:** Apriso/Common/Lot
**Class:** `FlexNet.BusinessFacade.Common.LotCreator`
**Assembly:** `FlexNet.BusinessFacade.Common.dll`
**Status:** Active
**Keywords:** Create Lot Without Validation Warehouse

## Description

This Business Component method creates a LOT_NO record for the given Lot and Product.

## Parameters

| IO | Name | Type | Required | Description |
|----|------|------|----------|-------------|
| Input | LotNo | Char | Yes | Lot number to generate. |
| Input | ProductID | Integer | Yes | Product ID to create the Lot record for. |

## Validations

- System checks if LotNo and ProductID are provided.

## System Processing

- System creates a new record in the LOT_NO table using input parameters.

## Impacted Tables

| Table | Field | BC Param |
|-------|-------|----------|
| LOT_NO | LotNo | LotNo |
|  | ProductID | ProductID |
